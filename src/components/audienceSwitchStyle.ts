import type { CSSProperties } from 'react'
import type { Audience } from '../hooks/useAudience.ts'

export const AUDIENCE_OPTIONS: { audience: Audience; label: string }[] = [
  { audience: 'freelancer', label: 'Freelancer' },
  { audience: 'business', label: 'Empresa' },
]

export const SWITCH_CLASS = 'inline-flex rounded-[var(--radius-pill)] p-1'

export const SWITCH_STYLE: CSSProperties = {
  background: 'var(--color-surface)',
  border: '1px solid var(--color-border-subtle)',
}

export const SEGMENT_CLASS =
  'flex min-h-11 items-center rounded-[var(--radius-pill)] px-4 text-sm font-medium transition-colors'

export function segmentStyle(active: boolean): CSSProperties {
  return {
    background: active ? 'var(--bg-canvas)' : 'transparent',
    color: active ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
    boxShadow: active ? '0 1px 3px rgba(0, 0, 0, 0.12)' : 'none',
  }
}
