import { useId } from 'react'
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
  const labelId = useId()

  return (
    <div className="flex flex-col gap-2 self-start sm:items-end">
      <span id={labelId} className="text-sm font-medium" style={{ color: 'var(--color-text-secondary)' }}>
        {label}
      </span>
      <div role="group" aria-labelledby={labelId} className={SWITCH_CLASS} style={SWITCH_STYLE}>
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
    </div>
  )
}
