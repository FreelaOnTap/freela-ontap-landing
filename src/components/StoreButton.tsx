import { DOWNLOAD_OPENS_AT } from '../config.ts'

const DOWNLOAD_IS_OPEN = Date.now() >= DOWNLOAD_OPENS_AT.getTime()

export function StoreButton({ href }: { href: string | null }) {
  const label = DOWNLOAD_IS_OPEN ? 'Baixar na App Store' : 'Reservar na App Store'

  // With no URL yet the anchor has no href, so it renders but goes nowhere — the
  // link is filled in config.ts once App Review approves the app.
  return (
    <a href={href ?? undefined} className="btn-primary" aria-disabled={href ? undefined : true}>
      {label}
    </a>
  )
}
