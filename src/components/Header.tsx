import { Link } from 'react-router-dom'
import type { Audience } from '../hooks/useAudience.ts'
import { AudienceSwitch } from './AudienceSwitch.tsx'
import { Logo } from './Logo.tsx'

export type HeaderCta = { audience: Audience; label: string; visible: boolean }

export function Header({ cta }: { cta: HeaderCta | null }) {
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
          aria-label="Freela onTap, página inicial"
          className="flex min-h-11 shrink-0 items-center gap-2 font-semibold whitespace-nowrap"
          style={{ color: 'var(--color-text-primary)' }}
        >
          <Logo className="h-8 w-8" />
          <span className="hidden sm:inline">Freela onTap</span>
        </Link>
        <div className="flex items-center gap-3">
          {cta && (
            <div className={`scope-${cta.audience} hidden sm:block`}>
              <a
                href="#avise"
                inert={!cta.visible}
                aria-hidden={!cta.visible}
                tabIndex={cta.visible ? undefined : -1}
                className={`btn-primary px-5 py-2 text-sm whitespace-nowrap transition-[opacity,transform] duration-200 motion-reduce:transition-opacity ${
                  cta.visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-1 opacity-0 motion-reduce:translate-y-0'
                }`}
              >
                {cta.label}
              </a>
            </div>
          )}
          <AudienceSwitch label="Ver o site para" />
        </div>
      </div>
    </header>
  )
}
