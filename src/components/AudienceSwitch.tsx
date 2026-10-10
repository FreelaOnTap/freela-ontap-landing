import { Link, useLocation } from 'react-router-dom'
import { audienceHref, useAudience, type Audience } from '../hooks/useAudience.ts'

const OPTIONS: { audience: Audience; label: string }[] = [
  { audience: 'freelancer', label: 'Freelancer' },
  { audience: 'business', label: 'Empresa' },
]

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'instant' })
}

export function AudienceSwitch({ label = 'Escolher público' }: { label?: string }) {
  const audience = useAudience()
  const { pathname, search } = useLocation()
  const onHome = pathname === '/'

  return (
    <nav
      aria-label={label}
      className="inline-flex rounded-[var(--radius-pill)] p-1"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}
    >
      {OPTIONS.map((option) => {
        const active = onHome && option.audience === audience
        return (
          <Link
            key={option.audience}
            to={audienceHref(option.audience, search)}
            replace={onHome}
            onClick={active ? undefined : goToTop}
            aria-current={active ? 'page' : undefined}
            className="flex min-h-11 items-center rounded-[var(--radius-pill)] px-4 text-sm font-medium transition-colors"
            style={{
              background: active ? 'var(--bg-canvas)' : 'transparent',
              color: active ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
              boxShadow: active ? '0 1px 3px rgba(0, 0, 0, 0.12)' : 'none',
            }}
          >
            {option.label}
          </Link>
        )
      })}
    </nav>
  )
}
