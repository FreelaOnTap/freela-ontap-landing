import { Link } from 'react-router-dom'
import { Logo } from './Logo.tsx'

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur"
      style={{
        borderColor: 'var(--color-border-subtle)',
        background: 'color-mix(in srgb, var(--color-surface) 85%, transparent)',
        boxShadow: 'var(--shadow-sm)',
      }}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-2 px-4 py-3 sm:px-6">
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2 font-semibold whitespace-nowrap"
          style={{ color: 'var(--color-text-primary)' }}
        >
          <Logo className="h-7 w-7 sm:h-8 sm:w-8" />
          <span className="hidden sm:inline">FreelaOnTap</span>
        </Link>

        <nav aria-label="Bifurcação de público" className="flex items-center gap-1.5 sm:gap-2">
          <a
            href="/#freelancer"
            className="min-h-11 flex items-center whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm"
            style={{ color: '#A44700', border: '1px solid #A44700' }}
          >
            <span className="sm:hidden">Freelancer</span>
            <span className="hidden sm:inline">Sou freelancer</span>
          </a>
          <a
            href="/#empresa"
            className="min-h-11 flex items-center whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold sm:px-4 sm:text-sm"
            style={{ color: '#FFFFFF', background: '#00549A' }}
          >
            <span className="sm:hidden">Empresa</span>
            <span className="hidden sm:inline">Sou empresa</span>
          </a>
        </nav>
      </div>
    </header>
  )
}
