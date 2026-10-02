import { useEffect, useRef, useState, type FormEvent, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import { Link } from 'react-router-dom'
import { BUSINESS_TYPES, CITIES, CONTENT, HIRING_FREQUENCIES, ROLE_GROUPS } from '../content.ts'
import { SUPPORT_EMAIL } from '../config.ts'
import { useLeadSource, type Audience } from '../hooks/useAudience.ts'
import type { PhoneOS } from '../lib/device.ts'
import { isValidWhatsapp, normalizeWhatsapp, submitInterestLead } from '../lib/leads.ts'
import { MascotImage } from './MascotImage.tsx'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const OTHER_CITY = 'Outra cidade'

const MAX_LENGTH = { name: 120, email: 254, short: 80, whatsapp: 20 }

function hasMinLength(value: string) {
  return [...value.trim()].length >= 2
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="field-label">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="field-error">
          {error}
        </p>
      )}
    </div>
  )
}

type Values = ReturnType<typeof emptyValues>
type FieldName = keyof Values
type Errors = Partial<Record<FieldName, string>>

function validate(audience: Audience, values: Values): Errors {
  const errors: Errors = {}
  if (audience === 'business') {
    if (!hasMinLength(values.businessName)) errors.businessName = 'Escreve o nome da casa.'
    if (!values.businessType) errors.businessType = 'Escolhe o tipo da casa.'
  }
  if (!hasMinLength(values.name)) errors.name = 'Escreve teu nome.'
  if (!isValidWhatsapp(normalizeWhatsapp(values.whatsapp))) errors.whatsapp = 'Confere o número, com DDD.'
  const email = values.email.trim()
  if (email && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) errors.email = 'Confere o e-mail.'
  if (!values.city) errors.city = 'Escolhe a cidade.'
  if (audience === 'business') {
    if (!values.hiringFrequency) errors.hiringFrequency = 'Escolhe uma opção.'
  } else {
    if (!values.role) errors.role = 'Escolhe tua função principal.'
    if (!values.phoneOS) errors.phoneOS = 'Escolhe o sistema do teu celular.'
  }
  if (values.consented !== 'yes') errors.consented = 'Pra gente entrar em contato, precisa marcar aqui.'
  return errors
}

function emptyValues(phoneOS: PhoneOS) {
  return {
    name: '',
    whatsapp: '',
    email: '',
    city: '',
    role: '',
    phoneOS: phoneOS === 'other' ? '' : (phoneOS as string),
    businessName: '',
    businessType: '',
    neighborhood: '',
    contactRole: '',
    hiringFrequency: '',
    consented: '',
    website: '',
  }
}

export function InterestForm({ audience, phoneOS }: { audience: Audience; phoneOS: PhoneOS }) {
  const source = useLeadSource()
  const [values, setValues] = useState<Values>(() => emptyValues(phoneOS))
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [submittedName, setSubmittedName] = useState('')
  const copy = CONTENT[audience].form
  const successRef = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  const set = (key: FieldName) => (value: string) => setValues((current) => ({ ...current, [key]: value }))
  const invalid = (key: FieldName) => ({
    'aria-invalid': errors[key] ? true : undefined,
    'aria-describedby': errors[key] ? `${key}-error` : undefined,
  })

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const found = validate(audience, values)
    flushSync(() => setErrors(found))
    if (Object.keys(found).length > 0) {
      document.getElementById(Object.keys(found)[0])?.focus()
      return
    }

    const firstName = values.name.trim().split(/\s+/)[0]
    if (values.website) {
      setSubmittedName(firstName)
      setStatus('success')
      return
    }

    setStatus('submitting')
    try {
      await submitInterestLead({
        audience,
        name: values.name.trim(),
        whatsapp: normalizeWhatsapp(values.whatsapp),
        email: values.email.trim() || null,
        city: values.city,
        phone_os: audience === 'freelancer' ? (values.phoneOS as 'ios' | 'android') : null,
        role: audience === 'freelancer' ? values.role : null,
        business_name: audience === 'business' ? values.businessName.trim() : null,
        business_type: audience === 'business' ? values.businessType : null,
        neighborhood: audience === 'business' ? values.neighborhood.trim() || null : null,
        contact_role: audience === 'business' ? values.contactRole.trim() || null : null,
        hiring_frequency: audience === 'business' ? values.hiringFrequency : null,
        source,
        consented: true,
      })
      setSubmittedName(firstName)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="tile flex flex-col items-center gap-6 py-12 text-center" role="status">
        <MascotImage className="h-40 w-40" />
        <p ref={successRef} tabIndex={-1} className="max-w-md text-2xl font-semibold focus:outline-none">
          {copy.success(submittedName)}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="tile grid gap-5 sm:grid-cols-2">
      {audience === 'business' && (
        <>
          <Field id="businessName" label="Nome da casa" error={errors.businessName}>
            <input id="businessName" className="field" maxLength={MAX_LENGTH.name} autoComplete="organization" value={values.businessName} onChange={(e) => set('businessName')(e.target.value)} {...invalid('businessName')} />
          </Field>
          <Field id="businessType" label="Tipo de casa" error={errors.businessType}>
            <select id="businessType" className="field" value={values.businessType} onChange={(e) => set('businessType')(e.target.value)} {...invalid('businessType')}>
              <option value="">Escolhe</option>
              {BUSINESS_TYPES.map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
          </Field>
        </>
      )}

      <Field id="name" label={audience === 'business' ? 'Teu nome' : 'Nome'} error={errors.name}>
        <input id="name" className="field" maxLength={MAX_LENGTH.name} autoComplete="name" value={values.name} onChange={(e) => set('name')(e.target.value)} {...invalid('name')} />
      </Field>

      {audience === 'business' && (
        <Field id="contactRole" label="Teu cargo na casa (opcional)">
          <input id="contactRole" className="field" maxLength={MAX_LENGTH.short} autoComplete="organization-title" value={values.contactRole} onChange={(e) => set('contactRole')(e.target.value)} />
        </Field>
      )}

      <Field id="whatsapp" label="WhatsApp com DDD" error={errors.whatsapp}>
        <input id="whatsapp" className="field" maxLength={MAX_LENGTH.whatsapp} type="tel" inputMode="tel" autoComplete="tel-national" placeholder="(51) 99999-9999" value={values.whatsapp} onChange={(e) => set('whatsapp')(e.target.value)} {...invalid('whatsapp')} />
      </Field>

      <Field id="email" label="E-mail (opcional)" error={errors.email}>
        <input id="email" className="field" maxLength={MAX_LENGTH.email} type="email" autoComplete="email" value={values.email} onChange={(e) => set('email')(e.target.value)} {...invalid('email')} />
      </Field>

      <Field id="city" label="Cidade" error={errors.city}>
        <select id="city" className="field" value={values.city} onChange={(e) => set('city')(e.target.value)} {...invalid('city')}>
          <option value="">Escolhe</option>
          {[...CITIES, OTHER_CITY].map((city) => (
            <option key={city}>{city}</option>
          ))}
        </select>
      </Field>

      {audience === 'business' ? (
        <>
          <Field id="neighborhood" label="Bairro (opcional)">
            <input id="neighborhood" className="field" maxLength={MAX_LENGTH.short} value={values.neighborhood} onChange={(e) => set('neighborhood')(e.target.value)} />
          </Field>
          <Field id="hiringFrequency" label="Com que frequência tu precisa de freela?" error={errors.hiringFrequency}>
            <select id="hiringFrequency" className="field" value={values.hiringFrequency} onChange={(e) => set('hiringFrequency')(e.target.value)} {...invalid('hiringFrequency')}>
              <option value="">Escolhe</option>
              {HIRING_FREQUENCIES.map((frequency) => (
                <option key={frequency}>{frequency}</option>
              ))}
            </select>
          </Field>
        </>
      ) : (
        <>
          <Field id="role" label="Tua função principal" error={errors.role}>
            <select id="role" className="field" value={values.role} onChange={(e) => set('role')(e.target.value)} {...invalid('role')}>
              <option value="">Escolhe</option>
              {ROLE_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.roles.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </optgroup>
              ))}
              <option>Outra</option>
            </select>
          </Field>
          <fieldset className="sm:col-span-2" aria-describedby={errors.phoneOS ? 'phoneOS-error' : undefined}>
            <legend className="field-label">Teu celular é</legend>
            <div className="flex gap-3">
              {[
                { value: 'ios', label: 'iPhone' },
                { value: 'android', label: 'Android' },
              ].map((option, i) => (
                <label
                  key={option.value}
                  className="flex min-h-11 flex-1 cursor-pointer items-center gap-3 rounded-[var(--radius-md)] border px-4"
                  style={{ borderColor: values.phoneOS === option.value ? 'var(--accent)' : 'var(--color-border-default)' }}
                >
                  <input
                    id={i === 0 ? 'phoneOS' : undefined}
                    type="radio"
                    name="phoneOS"
                    value={option.value}
                    checked={values.phoneOS === option.value}
                    onChange={(e) => set('phoneOS')(e.target.value)}
                    className="h-5 w-5"
                    style={{ accentColor: 'var(--accent)' }}
                    {...invalid('phoneOS')}
                  />
                  {option.label}
                </label>
              ))}
            </div>
            {errors.phoneOS && (
              <p id="phoneOS-error" className="field-error">
                {errors.phoneOS}
              </p>
            )}
          </fieldset>
        </>
      )}

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Site</label>
        <input id="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => set('website')(e.target.value)} />
      </div>

      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <input
            id="consented"
            type="checkbox"
            checked={values.consented === 'yes'}
            onChange={(e) => set('consented')(e.target.checked ? 'yes' : '')}
            className="mt-0.5 h-5 w-5 shrink-0"
            style={{ accentColor: 'var(--accent)' }}
            {...invalid('consented')}
          />
          <span>
            Aceito receber contato do Freela onTap por WhatsApp ou e-mail sobre o lançamento e li a{' '}
            <Link to="/privacidade" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: 'var(--color-link)' }}>
              Política de Privacidade
            </Link>
            .
          </span>
        </label>
        {errors.consented && (
          <p id="consented-error" className="field-error">
            {errors.consented}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 sm:col-span-2">
        <button type="submit" className="btn-primary w-full sm:w-auto sm:self-start" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Enviando…' : audience === 'business' ? 'Quero que entrem em contato' : 'Me avisa quando sair'}
        </button>
        {status === 'error' && (
          <p className="field-error" role="alert">
            Não deu pra enviar agora. Tenta de novo ou escreve pra{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="underline">
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        )}
      </div>
    </form>
  )
}
