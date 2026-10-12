import { Link, useLocation } from 'react-router-dom'
import { audienceHref, useAudience } from '../hooks/useAudience.ts'
import { AUDIENCE_OPTIONS, SEGMENT_CLASS, SWITCH_CLASS, SWITCH_STYLE, segmentStyle } from './audienceSwitchStyle.ts'

function goToTop() {
  window.scrollTo({ top: 0, behavior: 'instant' })
}

export function AudienceSwitch({ label = 'Escolher público' }: { label?: string }) {
  const audience = useAudience()
  const { pathname, search } = useLocation()
  const onHome = pathname === '/'

  return (
    <nav aria-label={label} className={SWITCH_CLASS} style={SWITCH_STYLE}>
      {AUDIENCE_OPTIONS.map((option) => {
        const active = onHome && option.audience === audience
        return (
          <Link
            key={option.audience}
            to={audienceHref(option.audience, search)}
            replace={onHome}
            onClick={active ? undefined : goToTop}
            aria-current={active ? 'page' : undefined}
            className={SEGMENT_CLASS}
            style={segmentStyle(active)}
          >
            {option.label}
          </Link>
        )
      })}
    </nav>
  )
}
