import { Link } from 'react-router-dom'
import { AudienceSwitch } from './AudienceSwitch.tsx'
import { Logo } from './Logo.tsx'

export function Header() {
  return (
    <header
      className="sticky top-0 z-40 border-b backdrop-blur-xl"
      style={{
        borderColor: 'var(--color-border-subtle)',
        background: 'color-mix(in srgb, var(--bg-canvas) 80%, transparent)',
      }}
    >
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-3 px-4 py-2 sm:px-6">
        <Link
          to="/"
          className="flex min-h-11 shrink-0 items-center gap-2 font-semibold whitespace-nowrap"
          style={{ color: 'var(--color-text-primary)' }}
        >
          <Logo className="h-7 w-7" />
          <span className="hidden sm:inline">FreelaOnTap</span>
        </Link>
        <AudienceSwitch label="Ver o site para" />
      </div>
    </header>
  )
}
