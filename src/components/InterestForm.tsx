import { useEffect, useRef, useState, type ChangeEvent, type CompositionEvent, type FormEvent, type ReactNode } from 'react'
import { flushSync } from 'react-dom'
import { Link } from 'react-router-dom'
import { BUSINESS_TYPES, CITIES, CONTENT, HIRING_FREQUENCIES, ROLE_GROUPS } from '../content.ts'
import { SUPPORT_EMAIL } from '../config.ts'
import { useLeadSource, type Audience } from '../hooks/useAudience.ts'
import type { PhoneOS } from '../lib/device.ts'
import { isValidWhatsapp, submitInterestLead } from '../lib/leads.ts'
import { caretAfterDigits, keepBusinessName, keepEmail, keepPersonName, maskPhone, phoneDigits, splitPhoneDigits } from '../lib/masks.ts'
import { MascotImage } from './MascotImage.tsx'

type Status = 'idle' | 'submitting' | 'success' | 'error'

const OTHER_CITY = 'Outra cidade'
const OTHER_ROLE = 'Outra'
const PLACEHOLDER_OPTION = 'Escolhe uma opção'

const MAX_LENGTH = { name: 120, email: 254, short: 80, phone: 30 }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i

const PHONE_OS_OPTIONS = [
  { value: 'ios', label: 'iPhone' },
  { value: 'android', label: 'Android' },
]

function emptyValues(phoneOS: PhoneOS) {
  return {
    businessName: '',
    businessType: '',
    name: '',
    contactRole: '',
    whatsapp: '',
    email: '',
    city: '',
    neighborhood: '',
    hiringFrequency: '',
    role: '',
    phoneOS: phoneOS === 'other' ? '' : (phoneOS as string),
    consented: '',
    website: '',
  }
}

type Values = ReturnType<typeof emptyValues>
type FieldName = keyof Values
type Errors = Partial<Record<FieldName, string>>

const FIELD_ORDER: Record<Audience, FieldName[]> = {
  business: ['businessName', 'businessType', 'name', 'contactRole', 'whatsapp', 'email', 'city', 'neighborhood', 'hiringFrequency', 'consented'],
  freelancer: ['name', 'whatsapp', 'email', 'city', 'role', 'phoneOS', 'consented'],
}

function letterCount(value: string) {
  return value.match(/\p{L}/gu)?.length ?? 0
}

function phoneError(raw: string) {
  const digits = phoneDigits(raw)
  if (digits.length === 0) return 'Informa teu WhatsApp com DDD.'
  if (digits.length < 10) return 'Número incompleto. Confere com o DDD.'
  if (!isValidWhatsapp(digits)) return 'Esse número não parece válido. Confere o DDD e o 9 do celular.'
  return undefined
}

function fieldError(field: FieldName, values: Values): string | undefined {
  switch (field) {
    case 'businessName':
      return letterCount(values.businessName) < 2 ? 'Escreve o nome do negócio.' : undefined
    case 'businessType':
      return values.businessType ? undefined : 'Escolhe o tipo de negócio.'
    case 'name':
      if (!values.name.trim()) return 'Escreve teu nome.'
      return letterCount(values.name) < 2 ? 'Nome muito curto.' : undefined
    case 'contactRole':
      return values.contactRole.trim() && letterCount(values.contactRole) < 2 ? 'Cargo muito curto.' : undefined
    case 'whatsapp':
      return phoneError(values.whatsapp)
    case 'email':
      return values.email && !EMAIL_PATTERN.test(values.email) ? 'Confere o e-mail. Ex.: nome@email.com' : undefined
    case 'city':
      return values.city ? undefined : 'Escolhe a cidade.'
    case 'neighborhood':
      return values.neighborhood.trim() && letterCount(values.neighborhood) < 2 ? 'Bairro muito curto.' : undefined
    case 'hiringFrequency':
      return values.hiringFrequency ? undefined : 'Escolhe uma opção.'
    case 'role':
      return values.role ? undefined : 'Escolhe tua função principal.'
    case 'phoneOS':
      return values.phoneOS ? undefined : 'Escolhe o sistema do teu celular.'
    case 'consented':
      return values.consented === 'yes' ? undefined : 'Pra gente entrar em contato, precisa marcar aqui.'
    case 'website':
      return undefined
  }
}

function validate(audience: Audience, values: Values): Errors {
  const errors: Errors = {}
  for (const field of FIELD_ORDER[audience]) {
    const error = fieldError(field, values)
    if (error) errors[field] = error
  }
  return errors
}

function Field({
  id,
  label,
  error,
  className = '',
  children,
}: {
  id: string
  label: string
  error?: string
  className?: string
  children: ReactNode
}) {
  return (
    <div className={className}>
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

function SelectChevron() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 12 8"
      className="pointer-events-none absolute right-4 top-1/2 h-2 w-3 -translate-y-1/2"
      style={{ color: 'var(--color-text-tertiary)' }}
    >
      <path d="M1 1.5 6 6.5l5-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function InterestForm({ audience, phoneOS }: { audience: Audience; phoneOS: PhoneOS }) {
  const source = useLeadSource()
  const [values, setValues] = useState<Values>(() => emptyValues(phoneOS))
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')
  const [submittedName, setSubmittedName] = useState('')
  const [triedToSubmit, setTriedToSubmit] = useState(false)
  const copy = CONTENT[audience].form
  const successRef = useRef<HTMLParagraphElement>(null)
  const phoneRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  function update(field: FieldName, value: string, validateNow = false) {
    setValues((current) => ({ ...current, [field]: value }))
    if (validateNow || errors[field]) {
      setErrors((current) => ({ ...current, [field]: fieldError(field, { ...values, [field]: value }) }))
    }
  }

  function filtered(field: FieldName, keep: (raw: string) => string) {
    return {
      onChange: (e: ChangeEvent<HTMLInputElement>) => {
        const composing = (e.nativeEvent as InputEvent).isComposing
        update(field, composing ? e.target.value : keep(e.target.value))
      },
      onCompositionEnd: (e: CompositionEvent<HTMLInputElement>) => update(field, keep(e.currentTarget.value)),
    }
  }

  function handlePhoneChange(e: ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value
    const caret = e.target.selectionStart ?? raw.length
    const { digits, droppedPrefix } = splitPhoneDigits(raw)
    let digitsBeforeCaret = Math.min(Math.max(0, raw.slice(0, caret).replace(/\D/g, '').length - droppedPrefix), digits.length)
    let nextDigits = digits
    const removedOnlySeparator =
      (e.nativeEvent as InputEvent).inputType === 'deleteContentBackward' && digits === phoneDigits(values.whatsapp)
    if (removedOnlySeparator && digitsBeforeCaret > 0) {
      nextDigits = digits.slice(0, digitsBeforeCaret - 1) + digits.slice(digitsBeforeCaret)
      digitsBeforeCaret -= 1
    }
    const masked = maskPhone(nextDigits)
    update('whatsapp', masked)
    setTimeout(() => {
      const position = caretAfterDigits(masked, digitsBeforeCaret)
      if (document.activeElement === phoneRef.current) phoneRef.current?.setSelectionRange(position, position)
    })
  }

  function check(field: FieldName) {
    if (!values[field] && !triedToSubmit) return
    setErrors((current) => ({ ...current, [field]: fieldError(field, values) }))
  }

  function controlProps(field: FieldName) {
    return {
      id: field,
      name: field,
      value: values[field],
      onBlur: () => check(field),
      'aria-invalid': errors[field] ? true : undefined,
      'aria-describedby': errors[field] ? `${field}-error` : undefined,
    }
  }

  function select(field: FieldName, label: string, options: ReactNode, className = '') {
    return (
      <Field id={field} label={label} error={errors[field]} className={className}>
        <div className="relative">
          <select
            {...controlProps(field)}
            className="field field-select"
            data-empty={values[field] === '' ? true : undefined}
            onChange={(e) => update(field, e.target.value, true)}
          >
            <option value="" disabled>
              {PLACEHOLDER_OPTION}
            </option>
            {options}
          </select>
          <SelectChevron />
        </div>
      </Field>
    )
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    setTriedToSubmit(true)
    const found = validate(audience, values)
    flushSync(() => setErrors(found))
    const firstInvalid = FIELD_ORDER[audience].find((field) => found[field])
    if (firstInvalid) {
      const element = document.getElementById(firstInvalid)
      element?.focus({ preventScroll: true })
      element?.scrollIntoView({ block: 'center', behavior: 'instant' })
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
        whatsapp: phoneDigits(values.whatsapp),
        email: values.email || null,
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

  const cityOptions = [...CITIES, OTHER_CITY].map((city) => <option key={city}>{city}</option>)

  return (
    <form onSubmit={handleSubmit} noValidate data-clarity-mask="true" className="tile grid gap-x-5 gap-y-6 sm:grid-cols-2">
      {audience === 'business' && (
        <>
          <Field id="businessName" label="Nome do negócio" error={errors.businessName}>
            <input
              {...controlProps('businessName')}
              className="field"
              maxLength={MAX_LENGTH.name}
              autoComplete="organization"
              {...filtered('businessName', keepBusinessName)}
            />
          </Field>
          {select('businessType', 'Tipo de negócio', BUSINESS_TYPES.map((type) => <option key={type}>{type}</option>))}
        </>
      )}

      <Field id="name" label={audience === 'business' ? 'Teu nome' : 'Nome'} error={errors.name}>
        <input
          {...controlProps('name')}
          className="field"
          maxLength={MAX_LENGTH.name}
          autoComplete="name"
          autoCapitalize="words"
          {...filtered('name', keepPersonName)}
        />
      </Field>

      {audience === 'business' && (
        <Field id="contactRole" label="Teu cargo (opcional)" error={errors.contactRole}>
          <input
            {...controlProps('contactRole')}
            className="field"
            maxLength={MAX_LENGTH.short}
            autoComplete="organization-title"
            placeholder="Ex.: gerente, sócio"
            {...filtered('contactRole', keepBusinessName)}
          />
        </Field>
      )}

      <Field id="whatsapp" label="WhatsApp com DDD" error={errors.whatsapp}>
        <input
          {...controlProps('whatsapp')}
          className="field"
          type="tel"
          inputMode="numeric"
          maxLength={MAX_LENGTH.phone}
          autoComplete="tel-national"
          placeholder="(51) 99999-9999"
          ref={phoneRef}
          onChange={handlePhoneChange}
        />
      </Field>

      <Field id="email" label="E-mail (opcional)" error={errors.email}>
        <input
          {...controlProps('email')}
          className="field"
          type="email"
          inputMode="email"
          maxLength={MAX_LENGTH.email}
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          placeholder="nome@email.com"
          {...filtered('email', keepEmail)}
        />
      </Field>

      {select('city', 'Cidade', cityOptions)}

      {audience === 'business' ? (
        <>
          <Field id="neighborhood" label="Bairro (opcional)" error={errors.neighborhood}>
            <input
              {...controlProps('neighborhood')}
              className="field"
              maxLength={MAX_LENGTH.short}
              autoComplete="address-level3"
              {...filtered('neighborhood', keepBusinessName)}
            />
          </Field>
          {select(
            'hiringFrequency',
            'Com que frequência tu precisa de freela?',
            HIRING_FREQUENCIES.map((frequency) => <option key={frequency}>{frequency}</option>),
            'sm:col-span-2',
          )}
        </>
      ) : (
        <>
          {select(
            'role',
            'Tua função principal',
            <>
              {ROLE_GROUPS.map((group) => (
                <optgroup key={group.label} label={group.label}>
                  {group.roles.map((role) => (
                    <option key={role}>{role}</option>
                  ))}
                </optgroup>
              ))}
              <option>{OTHER_ROLE}</option>
            </>,
          )}
          <fieldset aria-describedby={errors.phoneOS ? 'phoneOS-error' : undefined}>
            <legend className="field-label">Teu celular é</legend>
            <div className="grid grid-cols-2 gap-3">
              {PHONE_OS_OPTIONS.map((option, i) => {
                const checked = values.phoneOS === option.value
                return (
                  <label
                    key={option.value}
                    className="field flex cursor-pointer items-center gap-3"
                    style={{ borderColor: checked ? 'var(--accent)' : errors.phoneOS ? 'var(--color-danger)' : undefined }}
                  >
                    <input
                      id={i === 0 ? 'phoneOS' : undefined}
                      type="radio"
                      name="phoneOS"
                      value={option.value}
                      checked={checked}
                      onChange={(e) => update('phoneOS', e.target.value, true)}
                      className="h-5 w-5 shrink-0"
                      style={{ accentColor: 'var(--accent)' }}
                      aria-invalid={errors.phoneOS ? true : undefined}
                      aria-describedby={errors.phoneOS ? 'phoneOS-error' : undefined}
                    />
                    {option.label}
                  </label>
                )
              })}
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
        <input id="website" tabIndex={-1} autoComplete="off" value={values.website} onChange={(e) => update('website', e.target.value)} />
      </div>

      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
          <input
            id="consented"
            type="checkbox"
            checked={values.consented === 'yes'}
            onChange={(e) => update('consented', e.target.checked ? 'yes' : '', true)}
            className="mt-0.5 h-5 w-5 shrink-0"
            style={{ accentColor: 'var(--accent)' }}
            aria-invalid={errors.consented ? true : undefined}
            aria-describedby={errors.consented ? 'consented-error' : undefined}
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
          {status === 'submitting' ? 'Enviando…' : copy.submit}
        </button>
        {copy.reassurance && (
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            {copy.reassurance}
          </p>
        )}
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
