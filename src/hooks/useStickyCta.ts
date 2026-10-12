import { useEffect, useState } from 'react'

const BAR_HEIGHT = 80

type StickyCta = { header: boolean; bar: boolean }

const OFF: StickyCta = { header: false, bar: false }

export function useStickyCta(enabled: boolean, resetKey: string): StickyCta {
  const [state, setState] = useState<StickyCta>(OFF)

  useEffect(() => {
    const hero = document.querySelector('[data-cta-anchor="hero"]')
    if (!enabled || !hero) return

    const form = document.querySelector('[data-cta-anchor="form"]')
    const anchors = [...document.querySelectorAll('[data-cta-anchor]'), ...document.querySelectorAll('footer')]
    const onScreen = new Set<Element>()
    let heroAbove = false

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) onScreen.add(entry.target)
          else onScreen.delete(entry.target)
          if (entry.target === hero) heroAbove = !entry.isIntersecting && entry.boundingClientRect.bottom <= 0
        }
        const next = { header: heroAbove && !(form && onScreen.has(form)), bar: heroAbove && onScreen.size === 0 }
        setState((current) => (current.header === next.header && current.bar === next.bar ? current : next))
      },
      { rootMargin: `0px 0px -${BAR_HEIGHT}px 0px` },
    )
    anchors.forEach((anchor) => observer.observe(anchor))

    return () => {
      observer.disconnect()
      setState(OFF)
    }
  }, [enabled, resetKey])

  return enabled ? state : OFF
}
