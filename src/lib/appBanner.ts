import type { Audience } from '../hooks/useAudience.ts'
import { APP_STORE_IDS } from '../siteInfo.ts'

// Shared job links keep the banner index.html serves, which is where the App Clip attributes live.
export function appBannerContent(audience: Audience, pathname: string) {
  return pathname.startsWith('/vaga/') ? undefined : `app-id=${APP_STORE_IDS[audience]}`
}
