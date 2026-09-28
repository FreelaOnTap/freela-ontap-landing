export const SUPPORT_EMAIL = 'freelaontap@gmail.com'

export const APP_STORE_LINKS = {
  freelancer: null as string | null,
  business: null as string | null,
}

export function mailtoLink(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
