import { useLayoutEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { audienceHref, useAudience, type Audience } from '../hooks/useAudience.ts'

const OPTIONS: { audience: Audience; label: string }[] = [
  { audience: 'freelancer', label: 'Freelancer' },
  { audience: 'business', label: 'Empresa' },
]

type ScreenAnchor = { sectionIndex: number | null; top: number }

function pageSections() {
  return [...document.querySelectorAll<HTMLElement>('main section')]
}

function firstVisibleSectionIndex(below: number) {
  const index = pageSections().findIndex((section) => section.getBoundingClientRect().bottom > below)
  return index === -1 ? null : index
}

function useKeepOnScreen(audience: Audience) {
  const ref = useRef<HTMLElement>(null)
  const anchor = useRef<ScreenAnchor | null>(null)

  function anchorElement(sectionIndex: number | null) {
    return sectionIndex === null ? ref.current : (pageSections()[sectionIndex] ?? null)
  }

  useLayoutEffect(() => {
    const saved = anchor.current
    anchor.current = null
    const element = saved ? anchorElement(saved.sectionIndex) : null
    if (!saved || !element) return
    const shift = element.getBoundingClientRect().top - saved.top
    if (shift !== 0) window.scrollBy({ top: shift, behavior: 'instant' })
  }, [audience])

  function rememberPosition() {
    const nav = ref.current
    if (!nav) return
    const stickyHeader = nav.closest('header')
    const sectionIndex = stickyHeader ? firstVisibleSectionIndex(stickyHeader.getBoundingClientRect().bottom) : null
    const element = anchorElement(sectionIndex)
    if (element) anchor.current = { sectionIndex, top: element.getBoundingClientRect().top }
  }

  return [ref, rememberPosition] as const
}

export function AudienceSwitch({ label = 'Escolher público' }: { label?: string }) {
  const audience = useAudience()
  const { pathname, search, hash } = useLocation()
  const onHome = pathname === '/'
  const [ref, rememberPosition] = useKeepOnScreen(audience)

  return (
    <nav
      ref={ref}
      aria-label={label}
      className="inline-flex rounded-[var(--radius-pill)] p-1"
      style={{ background: 'var(--color-surface)', border: '1px solid var(--color-border-subtle)' }}
    >
      {OPTIONS.map((option) => {
        const active = onHome && option.audience === audience
        return (
          <Link
            key={option.audience}
            to={audienceHref(option.audience, search) + (onHome ? hash : '')}
            replace={onHome}
            onClick={onHome && !active ? rememberPosition : undefined}
            aria-current={active ? 'page' : undefined}
            className="flex min-h-11 items-center rounded-[var(--radius-pill)] px-4 text-sm font-medium transition-colors"
            style={{
              background: active ? 'var(--bg-canvas)' : 'transparent',
              color: active ? 'var(--color-text-primary)' : 'var(--color-text-tertiary)',
              boxShadow: active ? '0 1px 3px rgba(0, 0, 0, 0.12)' : 'none',
            }}
          >
            {option.label}
          </Link>
        )
      })}
    </nav>
  )
}
