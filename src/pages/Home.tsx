import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AudienceSwitch } from '../components/AudienceSwitch.tsx'
import { HowItWorks } from '../components/HowItWorks.tsx'
import { InterestForm } from '../components/InterestForm.tsx'
import { MascotImage } from '../components/MascotImage.tsx'
import { PrimaryActions } from '../components/PrimaryActions.tsx'
import { DOWNLOAD_IS_OPEN } from '../config.ts'
import { CITIES, CONTENT, LAUNCH_EVENT } from '../content.ts'
import { useAudience } from '../hooks/useAudience.ts'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts'
import { detectPhoneOS } from '../lib/device.ts'

function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    document.getElementById(hash.slice(1))?.scrollIntoView({ block: 'start' })
  }, [hash])
}

function HeroMedia() {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <div className="mx-auto mt-16 w-full max-w-5xl px-4 sm:px-6">
      <div className="aspect-[16/10] overflow-hidden rounded-[var(--radius-xl)] sm:aspect-[16/8]">
        {prefersReducedMotion ? (
          <img src="/media/hero-poster.jpg" alt="" className="h-full w-full object-cover" />
        ) : (
          <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/media/hero-poster.jpg" aria-hidden="true">
            <source src="/media/hero.mp4" type="video/mp4" />
          </video>
        )}
      </div>
    </div>
  )
}

export function Home() {
  useScrollToHash()
  const audience = useAudience()
  const [phoneOS] = useState(detectPhoneOS)
  const content = CONTENT[audience]

  return (
    <div className={`scope-${audience}`}>
      <section className="pt-16 text-center sm:pt-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <p className="eyebrow">{content.hero.eyebrow}</p>
          {content.hero.badge && !DOWNLOAD_IS_OPEN && !(audience === 'freelancer' && phoneOS === 'android') && (
            <p
              className="mt-4 inline-flex rounded-full border px-4 py-1.5 text-sm font-semibold"
              style={{ borderColor: 'var(--accent)', color: 'var(--color-text-primary)' }}
            >
              {content.hero.badge}
            </p>
          )}
          <h1 className="display mt-3">
            {content.hero.headline.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="lede mx-auto mt-6 max-w-2xl">{content.hero.sub}</p>
          <div className="mt-8">
            <PrimaryActions audience={audience} phoneOS={phoneOS} centered showPerk />
          </div>
        </div>
        <HeroMedia />
      </section>

      <section className="section-shell">
        <p className="eyebrow">O jeito de hoje</p>
        <h2 className="headline mt-2 max-w-4xl reveal">{content.problem.title}</h2>
        <p className="lede mt-6 max-w-2xl reveal">{content.problem.body}</p>
      </section>

      <section className="py-20 sm:py-28" style={{ background: 'color-mix(in srgb, var(--brand) 14%, var(--bg-canvas))' }}>
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="headline max-w-3xl reveal">{content.highlights.title}</h2>
        </div>
        <div
          className="rail mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto"
          role="region"
          aria-label="Destaques"
          tabIndex={0}
        >
          {content.highlights.items.map((item) => (
            <article
              key={item.title}
              className="tile flex w-[78vw] max-w-[320px] shrink-0 snap-start flex-col sm:w-[300px]"
            >
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <HowItWorks key={audience} audience={audience} title={content.steps.title} steps={content.steps.items} />

      <section className="section-shell">
        <p className="eyebrow">Confiança</p>
        <h2 className="headline mt-2 max-w-3xl reveal">Confiança dos dois lados do balcão.</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {[content.trust.theySee, content.trust.youSee].map((column) => (
            <div key={column.title} className="tile reveal" style={{ background: 'var(--color-surface)' }}>
              <h3 className="text-2xl font-semibold">{column.title}</h3>
              <ul className="mt-6 flex flex-col gap-4">
                {column.items.map((item) => (
                  <li key={item} className="flex gap-3 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                    <span aria-hidden="true" className="font-semibold" style={{ color: 'var(--accent)' }}>
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--brand)', color: 'var(--on-brand)' }}>
        <div className="section-shell text-center">
          <p className="text-base font-semibold sm:text-lg" style={{ color: 'var(--on-brand-secondary)' }}>
            Porto Alegre e região
          </p>
          <h2 className="display mt-3">Começamos por aqui.</h2>
          <ul className="cities mx-auto mt-10 flex max-w-5xl flex-nowrap justify-center font-semibold">
            {CITIES.map((city) => (
              <li key={city} className="whitespace-nowrap">
                {city}
              </li>
            ))}
          </ul>
          <p className="mx-auto mt-10 max-w-xl text-lg" style={{ color: 'var(--on-brand-secondary)' }}>
            {LAUNCH_EVENT}
          </p>
        </div>
      </section>

      <section id="avise" className="scroll-mt-16" style={{ background: 'var(--color-surface)' }}>
        <div className="section-shell">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="headline">{content.form.title}</h2>
              <p className="lede mt-4 max-w-xl">{content.form.sub}</p>
            </div>
            <AudienceSwitch label="Cadastro para" />
          </div>
          <div className="mt-10">
            <InterestForm key={audience} audience={audience} phoneOS={phoneOS} />
          </div>
        </div>
      </section>

      <section className="section-shell">
        <h2 className="headline">Perguntas frequentes</h2>
        <div className="mt-10 border-t" style={{ borderColor: 'var(--color-border-default)' }}>
          {content.faq.map((item) => (
            <details key={item.q} className="group border-b" style={{ borderColor: 'var(--color-border-default)' }}>
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-6 py-5 text-xl font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden="true" className="text-2xl font-normal transition-transform group-open:rotate-45" style={{ color: 'var(--color-text-tertiary)' }}>
                  +
                </span>
              </summary>
              <p className="lede pb-6 pr-10">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="section-shell flex flex-col items-center text-center">
        <MascotImage className="h-40 w-40" />
        <p className="eyebrow mt-8">Freela onTap</p>
        <h2 className="display mt-3 max-w-4xl">{content.closing}</h2>
        <div className="mt-10">
          <PrimaryActions audience={audience} phoneOS={phoneOS} centered />
        </div>
      </section>
    </div>
  )
}
