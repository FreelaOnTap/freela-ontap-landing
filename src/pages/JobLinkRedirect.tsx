import { Navigate } from 'react-router-dom'
import { APP_STORE_LINKS } from '../config.ts'

// Fallback for shared job links (https://www.freelaontap.com.br/vaga/:id) when the
// Freelancer app is not installed: with it installed, iOS opens the app instead.
export function JobLinkRedirect() {
  if (!APP_STORE_LINKS.freelancer) return <Navigate to="/" replace />
  window.location.replace(APP_STORE_LINKS.freelancer)
  return null
}
