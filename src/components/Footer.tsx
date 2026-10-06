import { Link } from 'react-router-dom'
import { SUPPORT_EMAIL } from '../config.ts'
import { Logo } from './Logo.tsx'

const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer
      className="border-t"
      style={{
        borderColor: 'var(--color-border-subtle)',
        background: 'var(--color-surface)',
      }}
    >
      <div className="mx-auto grid w-full max-w-5xl gap-8 px-4 py-12 sm:grid-cols-3 sm:px-6">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2 font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            <Logo className="h-8 w-8" />
            Freela onTap
          </div>
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Freelas em restaurante, bares e cafeterias na região de Porto Alegre/RS.
          </p>
        </div>

        <nav aria-label="Links legais" className="flex flex-col gap-2 text-sm">
          <Link to="/privacidade" style={{ color: 'var(--color-link)' }}>
            Política de Privacidade
          </Link>
          <Link to="/termos" style={{ color: 'var(--color-link)' }}>
            Termos de Uso
          </Link>
          <Link to="/suporte" style={{ color: 'var(--color-link)' }}>
            Suporte
          </Link>
        </nav>

        <div className="flex flex-col gap-2 text-sm">
          <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--color-link)' }}>
            {SUPPORT_EMAIL}
          </a>
          <p style={{ color: 'var(--color-text-tertiary)' }}>© {currentYear} Freela onTap</p>
        </div>
      </div>
    </footer>
  )
}
