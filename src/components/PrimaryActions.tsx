import { APP_STORE_LINKS } from '../config.ts'
import { CONTENT } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'
import type { PhoneOS } from '../lib/device.ts'
import { StoreButton } from './StoreButton.tsx'

export function PrimaryActions({
  audience,
  phoneOS,
  centered = false,
}: {
  audience: Audience
  phoneOS: PhoneOS
  centered?: boolean
}) {
  const align = centered ? 'justify-center' : ''

  if (audience === 'business') {
    return (
      <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${align}`}>
        <a href="#avise" className="btn-primary">
          {CONTENT.business.hero.cta}
        </a>
        {APP_STORE_LINKS.business && (
          <a href={APP_STORE_LINKS.business} className="link-more">
            Baixar o Freela onTap: Empresa
          </a>
        )}
      </div>
    )
  }

  if (phoneOS === 'android') {
    return (
      <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${align}`}>
        <a href="#avise" className="btn-primary">
          Me avisa quando chegar no Android
        </a>
      </div>
    )
  }

  return (
    <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${align}`}>
      {APP_STORE_LINKS.freelancer ? (
        <StoreButton href={APP_STORE_LINKS.freelancer} />
      ) : (
        <a href="#avise" className="btn-primary">
          {CONTENT.freelancer.hero.cta}
        </a>
      )}
      <a href="#avise" className="link-more">
        Tem Android? Entra na lista
      </a>
    </div>
  )
}
