import { useEffect, useRef, useState } from 'react'

type RailMode = 'pages' | 'items'

export function useRail<T extends HTMLElement>(mode: RailMode = 'pages') {
  const ref = useRef<T>(null)
  const [position, setPosition] = useState({ index: 0, count: 1 })

  useEffect(() => {
    const rail = ref.current
    if (!rail) return

    function measure() {
      if (!rail) return
      const overflow = rail.scrollWidth - rail.clientWidth
      let next = { index: 0, count: 1 }

      if (overflow > 2) {
        if (mode === 'items') {
          const items = Array.from(rail.firstElementChild?.children ?? [])
          const railEdge = rail.getBoundingClientRect().left + (parseFloat(getComputedStyle(rail).paddingLeft) || 0)
          let nearest = Infinity
          items.forEach((item, i) => {
            const distance = Math.abs(item.getBoundingClientRect().left - railEdge)
            if (distance < nearest) {
              nearest = distance
              next = { index: i, count: items.length }
            }
          })
        } else {
          const count = Math.ceil(rail.scrollWidth / rail.clientWidth)
          next = { index: Math.round((rail.scrollLeft / overflow) * (count - 1)), count }
        }
      }

      setPosition((current) => (current.index === next.index && current.count === next.count ? current : next))
    }

    measure()
    rail.addEventListener('scroll', measure, { passive: true })
    const observer = new ResizeObserver(measure)
    observer.observe(rail)
    if (rail.firstElementChild) observer.observe(rail.firstElementChild)

    return () => {
      rail.removeEventListener('scroll', measure)
      observer.disconnect()
    }
  }, [mode])

  return { ref, ...position, scrollable: position.count > 1 }
}
