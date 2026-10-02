export const SUPPORT_EMAIL = 'freelaontap@gmail.com'

export const APP_STORE_LINKS = {
  // TODO(US036): replace null with the App Store URLs once App Review approves the apps — the
  // store buttons and /vaga/:id both read this, and stay inert while it is null.
  freelancer: null as string | null,
  business: null as string | null,
}

export const DOWNLOAD_OPENS_AT = new Date('2026-10-23T00:00:00-03:00')

export const SUPABASE = {
  url: import.meta.env.VITE_SUPABASE_URL as string | undefined,
  anonKey: import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined,
}

export function mailtoLink(subject: string) {
  return `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}`
}
