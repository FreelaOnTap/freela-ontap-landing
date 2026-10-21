import { SUPPORT_EMAIL } from './siteInfo.ts'

export * from './siteInfo.ts'

export const EVENT_ENDS_AT = new Date('2026-10-23T00:00:00-03:00')

export const EVENT_HAS_PASSED = Date.now() >= EVENT_ENDS_AT.getTime()

export const LEADS_ENDPOINT = import.meta.env.LEADS_ENDPOINT as string | undefined

export const CLARITY_PROJECT_ID = import.meta.env.CLARITY_PROJECT_ID as string | undefined

export function mailtoLink(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
