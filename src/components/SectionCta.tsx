import type { Audience } from '../hooks/useAudience.ts'
import type { PhoneOS } from '../lib/device.ts'
import { ctaLabel } from '../lib/cta.ts'

export function SectionCta({ audience, phoneOS, className = '' }: { audience: Audience; phoneOS: PhoneOS; className?: string }) {
  return (
    <div data-cta-anchor="section" className={`flex justify-center ${className}`}>
      <a href="#avise" className="btn-primary">
        {ctaLabel(audience, phoneOS)}
      </a>
    </div>
  )
}
