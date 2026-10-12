import { CONTENT } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'
import type { PhoneOS } from './device.ts'

const ANDROID_LABEL = 'Me avisa quando chegar no Android'
const ANDROID_COMPACT_LABEL = 'Me avisa no Android'

export function ctaLabel(audience: Audience, phoneOS: PhoneOS, compact = false) {
  if (audience === 'freelancer' && phoneOS === 'android') return compact ? ANDROID_COMPACT_LABEL : ANDROID_LABEL
  return compact ? CONTENT[audience].form.submit : CONTENT[audience].hero.cta
}
