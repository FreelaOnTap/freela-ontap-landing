import type { Audience } from '../hooks/useAudience.ts'
import { AUDIENCE_OPTIONS, SEGMENT_CLASS, SWITCH_CLASS, SWITCH_STYLE, segmentStyle } from './audienceSwitchStyle.ts'

export function FormAudienceSwitch({
  value,
  onChange,
  label,
}: {
  value: Audience
  onChange: (audience: Audience) => void
  label: string
}) {
  return (
    <div role="group" aria-label={label} className={SWITCH_CLASS} style={SWITCH_STYLE}>
      {AUDIENCE_OPTIONS.map((option) => {
        const active = option.audience === value
        return (
          <button
            key={option.audience}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(option.audience)}
            className={SEGMENT_CLASS}
            style={segmentStyle(active)}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
