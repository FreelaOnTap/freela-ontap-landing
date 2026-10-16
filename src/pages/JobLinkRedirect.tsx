import { APP_STORE_LINKS } from '../config.ts'

// Fallback for shared job links (https://www.freelaontap.com.br/vaga/:id) when the
// Freelancer app is not installed: with it installed, iOS opens the app instead.
export function JobLinkRedirect() {
  window.location.replace(APP_STORE_LINKS.freelancer)
  return null
}
