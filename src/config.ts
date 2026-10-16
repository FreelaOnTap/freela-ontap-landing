export const SUPPORT_EMAIL = 'freelaontap@gmail.com'

export const SITE_URL = 'https://www.freelaontap.com.br'

export const EVENT_ENDS_AT = new Date('2026-10-23T00:00:00-03:00')

export const EVENT_HAS_PASSED = Date.now() >= EVENT_ENDS_AT.getTime()

export const APP_STORE_LINKS = {
  freelancer: 'https://apps.apple.com/br/app/freela-ontap-vagas-e-turnos/id6818288726',
  business: 'https://apps.apple.com/br/app/freela-ontap-empresas/id6818285624',
}

export const APP_STORE_IDS = {
  freelancer: '6818288726',
  business: '6818285624',
}

export const LEADS_ENDPOINT = import.meta.env.LEADS_ENDPOINT as string | undefined

export const CLARITY_PROJECT_ID = import.meta.env.CLARITY_PROJECT_ID as string | undefined

export function mailtoLink(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
