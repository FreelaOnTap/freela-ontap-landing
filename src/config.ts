export const SUPPORT_EMAIL = 'freelaontap@gmail.com'

export const APP_STORE_LINKS = {
  // TODO(US036): replace null with the App Store URLs once App Review approves the apps — the
  // store buttons and /vaga/:id both read this, and stay inert while it is null.
  freelancer: null as string | null,
  business: null as string | null,
}

export const DOWNLOAD_OPENS_AT = new Date('2026-10-23T00:00:00-03:00')

export const DOWNLOAD_IS_OPEN = Date.now() >= DOWNLOAD_OPENS_AT.getTime()

export const LEADS_ENDPOINT = import.meta.env.LEADS_ENDPOINT as string | undefined

export const CLARITY_PROJECT_ID = import.meta.env.VITE_CLARITY_PROJECT_ID as string | undefined

export function mailtoLink(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
