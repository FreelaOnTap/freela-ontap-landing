import { PARTNER_COMPANIES, PARTNER_COMPANIES_COPY } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'

const CTA_LABEL: Record<Audience, string> = {
  freelancer: 'Me avisa no lançamento',
  business: 'Quero minha empresa aqui',
}

export function PartnerCompanies({ audience }: { audience: Audience }) {
  return (
    <section aria-labelledby="empresas-parceiras">
      <div className="mx-auto w-full max-w-5xl px-4 pt-20 text-center sm:px-6 sm:pt-28">
        <p className="eyebrow" style={{ color: 'var(--accent)' }}>
          {PARTNER_COMPANIES_COPY.eyebrow}
        </p>
        <h2 id="empresas-parceiras" className="headline mx-auto mt-2 max-w-4xl reveal">
          {PARTNER_COMPANIES_COPY.title}
        </h2>
        <p className="lede mx-auto mt-6 max-w-2xl reveal">{PARTNER_COMPANIES_COPY.sub}</p>
      </div>
      <div className="mt-12 flex justify-center">
        <div
          className="rail max-w-full snap-x snap-mandatory overflow-x-auto scroll-px-4 px-4 sm:scroll-px-6 sm:px-6"
          role="region"
          aria-label="Empresas parceiras"
          tabIndex={0}
        >
          <ul className="flex w-max gap-3 sm:gap-4">
            {PARTNER_COMPANIES.map((company) => (
              <li
                key={company.name}
                className="reveal flex w-40 shrink-0 snap-start flex-col items-center gap-3 rounded-[var(--radius-xl)] p-3.5 pb-5 text-center sm:w-[232px] sm:p-5 sm:pb-6"
                style={{ background: 'var(--color-surface)' }}
              >
                <div
                  className="aspect-square w-full overflow-hidden rounded-full"
                  style={{ background: company.logoBackground }}
                >
                  <img
                    src={company.logo}
                    alt={`Logo do ${company.name}`}
                    width={192}
                    height={192}
                    loading="lazy"
                    className="h-full w-full object-contain p-[9%]"
                  />
                </div>
                <div>
                  <h3 className="text-[17px] font-semibold leading-tight sm:text-xl">{company.name}</h3>
                  <p className="mt-1 text-[13px] sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                    {company.kind}
                  </p>
                  <p className="text-[13px] sm:text-base" style={{ color: 'var(--color-text-secondary)' }}>
                    {company.neighborhood}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto w-full max-w-5xl px-4 pb-20 text-center sm:px-6 sm:pb-28">
        <p className="lede mx-auto mt-12 max-w-2xl">{PARTNER_COMPANIES_COPY.support}</p>
        <div className="mt-8">
          <a href="#avise" className="btn-primary">
            {CTA_LABEL[audience]}
          </a>
        </div>
      </div>
    </section>
  )
}
