import { SITE_URL } from '../config.ts'
import { CONTENT } from '../content.ts'
import { audienceHref, type Audience } from '../hooks/useAudience.ts'

const SHARE_SOURCE = 'indicacao'

export function whatsappShareHref(audience: Audience) {
  const link = `${SITE_URL}${audienceHref(audience, `?origem=${SHARE_SOURCE}`)}`
  const text = `${CONTENT[audience].form.share.message} ${link}`
  return `https://wa.me/?text=${encodeURIComponent(text)}`
}
