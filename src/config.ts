export const SUPPORT_EMAIL = 'freelaontap@gmail.com'

export const APP_STORE_LINKS = {
  // TODO(US036): replace null with the Freelancer App Store URL once the app is published — /vaga/:id redirects there.
  freelancer: null as string | null,
  business: null as string | null,
}

export function mailtoLink(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
