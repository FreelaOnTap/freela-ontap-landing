import { APP_STORE_LINKS } from '../config.ts'
import { CONTENT } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'
import type { PhoneOS } from '../lib/device.ts'
import { StoreButton } from './StoreButton.tsx'

function Perk({ text }: { text: string }) {
  return (
    <p className="inline-flex min-h-11 items-center text-base font-medium" style={{ color: 'var(--color-text-primary)' }}>
      <span aria-hidden="true" style={{ color: 'var(--accent)' }}>
        ✓&nbsp;
      </span>
      {text}
    </p>
  )
}

export function PrimaryActions({
  audience,
  phoneOS,
  centered = false,
  showPerk = false,
}: {
  audience: Audience
  phoneOS: PhoneOS
  centered?: boolean
  showPerk?: boolean
}) {
  const align = centered ? 'justify-center' : ''
  const perk = showPerk ? CONTENT[audience].hero.perk : null

  return (
    <div className={`flex flex-col gap-y-2 ${centered ? 'items-center' : 'items-start'}`}>
      <div className={`flex flex-wrap items-center gap-x-6 gap-y-3 ${align}`}>
        {phoneOS === 'android' ? (
          <a href="#avise" className="btn-primary">
            Me avise quando chegar no Android
          </a>
        ) : (
          <>
            <StoreButton href={APP_STORE_LINKS[audience]} />
            {audience === 'business' ? (
              <a href="#avise" className="link-more">
                {CONTENT.business.hero.cta}
              </a>
            ) : (
              phoneOS === 'other' && (
                <a href="#avise" className="link-more">
                  Tem Android? Entre na lista
                </a>
              )
            )}
          </>
        )}
      </div>
      {perk && <Perk text={perk} />}
    </div>
  )
}
