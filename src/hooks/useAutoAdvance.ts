import { useEffect, type RefObject } from 'react'

const TOUCH_PAUSE_MS = 6000

function nextScrollLeft(rail: HTMLElement) {
  const maxLeft = rail.scrollWidth - rail.clientWidth
  if (rail.scrollLeft >= maxLeft - 2) return 0

  const railLeft = rail.getBoundingClientRect().left
  const padding = parseFloat(getComputedStyle(rail).paddingLeft) || 0
  for (const item of rail.querySelectorAll('li')) {
    const itemLeft = item.getBoundingClientRect().left - railLeft + rail.scrollLeft - padding
    if (itemLeft > rail.scrollLeft + 2) return Math.min(itemLeft, maxLeft)
  }
  return 0
}

export function useAutoAdvance(rail: RefObject<HTMLElement | null>, { enabled, intervalMs }: { enabled: boolean; intervalMs: number }) {
  useEffect(() => {
    const element = rail.current
    if (!enabled || !element) return

    let hovering = false
    let focusedInside = false
    let visible = false
    let pausedUntil = 0

    const observer = new IntersectionObserver(([entry]) => {
      visible = entry?.isIntersecting ?? false
    }, { threshold: 0.4 })
    observer.observe(element)

    const pauseForTouch = () => {
      pausedUntil = Date.now() + TOUCH_PAUSE_MS
    }
    const onPointerEnter = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') hovering = true
    }
    const onPointerLeave = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') hovering = false
    }
    const onFocusIn = () => {
      focusedInside = true
    }
    const onFocusOut = () => {
      focusedInside = false
    }

    element.addEventListener('pointerenter', onPointerEnter)
    element.addEventListener('pointerleave', onPointerLeave)
    element.addEventListener('focusin', onFocusIn)
    element.addEventListener('focusout', onFocusOut)
    element.addEventListener('touchstart', pauseForTouch, { passive: true })
    element.addEventListener('wheel', pauseForTouch, { passive: true })

    const timer = window.setInterval(() => {
      const canScroll = element.scrollWidth > element.clientWidth + 2
      if (!canScroll || !visible || document.hidden || hovering || focusedInside || Date.now() < pausedUntil) return
      element.scrollTo({ left: nextScrollLeft(element), behavior: 'smooth' })
    }, intervalMs)

    return () => {
      window.clearInterval(timer)
      observer.disconnect()
      element.removeEventListener('pointerenter', onPointerEnter)
      element.removeEventListener('pointerleave', onPointerLeave)
      element.removeEventListener('focusin', onFocusIn)
      element.removeEventListener('focusout', onFocusOut)
      element.removeEventListener('touchstart', pauseForTouch)
      element.removeEventListener('wheel', pauseForTouch)
    }
  }, [rail, enabled, intervalMs])
}
