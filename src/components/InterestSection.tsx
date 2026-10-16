import { useState } from 'react'
import { CONTENT } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'
import type { PhoneOS } from '../lib/device.ts'
import { DownloadPanel } from './DownloadPanel.tsx'
import { FormAudienceSwitch } from './FormAudienceSwitch.tsx'
import { InterestForm, type SharedValues } from './InterestForm.tsx'

function needsDownloadPanel(audience: Audience, phoneOS: PhoneOS) {
  if (audience === 'business') return phoneOS === 'other'
  return phoneOS !== 'android'
}

function needsForm(audience: Audience, phoneOS: PhoneOS) {
  return audience === 'business' || phoneOS !== 'ios'
}

export function InterestSection({ audience, phoneOS }: { audience: Audience; phoneOS: PhoneOS }) {
  const [formAudience, setFormAudience] = useState(audience)
  const [shared, setShared] = useState<SharedValues>({})
  const content = CONTENT[formAudience]
  const showDownload = needsDownloadPanel(formAudience, phoneOS)
  const showForm = needsForm(formAudience, phoneOS)
  const formSub = phoneOS === 'android' && content.form.subAndroid ? content.form.subAndroid : content.form.sub

  return (
    <section id="avise" className={`scope-${formAudience} scroll-mt-16`} style={{ background: 'var(--color-surface)' }}>
      <div className="section-shell">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="headline">{showDownload ? content.download.title : content.form.title}</h2>
            <p className="lede mt-4 max-w-xl">{showDownload ? content.download.sub : formSub}</p>
          </div>
          <FormAudienceSwitch label="Mostrar para" value={formAudience} onChange={setFormAudience} />
        </div>
        {showDownload && (
          <div className="mt-10">
            <DownloadPanel audience={formAudience} showQr={phoneOS === 'other'} />
          </div>
        )}
        {showForm && (
          <div className="mt-10">
            {showDownload && (
              <div className="mb-6">
                <h3 className="text-2xl font-semibold">{content.form.title}</h3>
                <p className="lede mt-2 max-w-xl">{formSub}</p>
              </div>
            )}
            <InterestForm
              key={formAudience}
              audience={formAudience}
              shared={shared}
              onShare={(field, value) => setShared((current) => ({ ...current, [field]: value }))}
            />
          </div>
        )}
      </div>
    </section>
  )
}
