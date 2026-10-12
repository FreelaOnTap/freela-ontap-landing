import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { StickyCtaBar } from './components/StickyCtaBar.tsx'
import { useAudience } from './hooks/useAudience.ts'
import { useStickyCta } from './hooks/useStickyCta.ts'
import { ctaLabel } from './lib/cta.ts'
import { detectPhoneOS } from './lib/device.ts'

export function Layout() {
  const { pathname, hash } = useLocation()
  const isFirstRender = useRef(true)
  const onHome = pathname === '/'
  const audience = useAudience()
  const [phoneOS] = useState(detectPhoneOS)
  const sticky = useStickyCta(onHome, audience)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (!hash) window.scrollTo(0, 0)
  }, [pathname, hash])

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-[var(--color-text-primary)] focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-[var(--bg-canvas)]"
      >
        Pular para o conteúdo
      </a>
      <Header cta={onHome ? { audience, label: ctaLabel(audience, phoneOS, true), visible: sticky.header } : null} />
      <main id="conteudo" tabIndex={-1} className="flex-1 scroll-mt-20 focus:outline-none">
        <Outlet />
      </main>
      <Footer />
      {onHome && <StickyCtaBar audience={audience} label={ctaLabel(audience, phoneOS)} visible={sticky.bar} />}
    </div>
  )
}
