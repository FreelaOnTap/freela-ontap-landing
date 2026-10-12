import { useState } from 'react'
import { CONTENT } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'
import type { PhoneOS } from '../lib/device.ts'
import { FormAudienceSwitch } from './FormAudienceSwitch.tsx'
import { InterestForm, type SharedValues } from './InterestForm.tsx'

export function InterestSection({ audience, phoneOS }: { audience: Audience; phoneOS: PhoneOS }) {
  const [formAudience, setFormAudience] = useState(audience)
  const [shared, setShared] = useState<SharedValues>({})
  const copy = CONTENT[formAudience].form

  return (
    <section id="avise" data-cta-anchor="form" className={`scope-${formAudience} scroll-mt-16`} style={{ background: 'var(--color-surface)' }}>
      <div className="section-shell">
        <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="headline">{copy.title}</h2>
            <p className="lede mt-4 max-w-xl">{copy.sub}</p>
          </div>
          <FormAudienceSwitch label="Cadastro para" value={formAudience} onChange={setFormAudience} />
        </div>
        <div className="mt-10">
          <InterestForm
            key={formAudience}
            audience={formAudience}
            phoneOS={phoneOS}
            shared={shared}
            onShare={(field, value) => setShared((current) => ({ ...current, [field]: value }))}
          />
        </div>
      </div>
    </section>
  )
}
