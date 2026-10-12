import { PARTNER_COMPANIES } from '../content.ts'

const PARTNER_NAMES = PARTNER_COMPANIES.map((company) => company.name).join(', ')

export function PartnerStrip() {
  return (
    <a
      href="#empresas-parceiras"
      aria-label={`Já estão aqui: ${PARTNER_NAMES}. Ver as empresas parceiras`}
      className="mx-auto mt-10 flex min-h-11 w-fit flex-col items-center gap-3 transition-opacity hover:opacity-80 sm:flex-row sm:gap-4"
    >
      <span className="text-sm font-medium" style={{ color: 'var(--color-text-tertiary)' }}>
        Já estão aqui
      </span>
      <span className="flex items-center gap-2" aria-hidden="true">
        {PARTNER_COMPANIES.map((company) => (
          <span
            key={company.name}
            className="block aspect-square w-[clamp(2rem,9.5vw,3rem)] overflow-hidden rounded-full"
            style={{ background: company.logoBackground, boxShadow: '0 0 0 1px var(--color-border-default)' }}
          >
            <img src={company.logo} alt="" width={48} height={48} className="h-full w-full object-contain p-[9%]" />
          </span>
        ))}
      </span>
    </a>
  )
}
