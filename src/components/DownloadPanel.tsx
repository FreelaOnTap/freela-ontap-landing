import { APP_STORE_LINKS } from '../config.ts'
import { CONTENT } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'
import { whatsappShareHref } from '../lib/share.ts'
import { StoreButton } from './StoreButton.tsx'

const QR_SOURCE: Record<Audience, { src: string; alt: string }> = {
  freelancer: { src: '/media/qr-freelancer.svg', alt: 'QR code para baixar o Freela onTap: Vagas e Turnos na App Store' },
  business: { src: '/media/qr-business.svg', alt: 'QR code para baixar o Freela onTap: Empresas na App Store' },
}

export function DownloadPanel({ audience, showQr }: { audience: Audience; showQr: boolean }) {
  const qr = QR_SOURCE[audience]

  return (
    <div className="tile flex flex-col items-center gap-8 text-center sm:flex-row sm:items-center sm:gap-12 sm:text-left">
      {showQr && (
        <div className="flex shrink-0 flex-col items-center gap-3">
          <img
            src={qr.src}
            alt={qr.alt}
            width={176}
            height={176}
            className="h-44 w-44 rounded-[var(--radius-lg)] bg-white p-4"
          />
          <p className="text-sm" style={{ color: 'var(--color-text-secondary)' }}>
            Aponta a câmera do iPhone
          </p>
        </div>
      )}
      <div className="flex flex-col items-center gap-5 sm:items-start">
        <StoreButton href={APP_STORE_LINKS[audience]} />
        <a href={whatsappShareHref(audience)} target="_blank" rel="noopener noreferrer" className="link-more">
          {CONTENT[audience].form.share.hint}
          <span className="sr-only"> Compartilhar no WhatsApp (abre em uma nova aba)</span>
        </a>
      </div>
    </div>
  )
}
