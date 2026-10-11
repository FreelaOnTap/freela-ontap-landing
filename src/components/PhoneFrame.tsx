import { useEffect, useRef, useState } from 'react'
import type { StepVideo } from '../content.ts'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion.ts'
import type { Audience } from '../hooks/useAudience.ts'

const BEZEL: Record<Audience, string> = {
  freelancer: '/media/iphone-bezel-freelancer.webp',
  business: '/media/iphone-bezel-business.webp',
}

export type PhoneScreen = { src: string | null; video?: StepVideo | null; alt: string; placeholder: string }

function ScreenVideo({ video, alt, playing }: { video: StepVideo; alt: string; playing: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.4 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const shouldPlay = playing && visible

  useEffect(() => {
    const element = ref.current
    if (!element) return
    if (shouldPlay) {
      element.currentTime = 0
      void element.play().catch(() => {})
    } else {
      element.pause()
    }
  }, [shouldPlay])

  return (
    <video
      ref={ref}
      className="h-full w-full object-cover"
      src={video.src}
      poster={video.poster}
      muted
      loop
      playsInline
      preload="auto"
      role="img"
      aria-label={alt}
    />
  )
}

export function PhoneFrame({
  audience,
  screens,
  active = 0,
}: {
  audience: Audience
  screens: PhoneScreen[]
  active?: number
}) {
  const reducedMotion = usePrefersReducedMotion()

  return (
    <div
      className="relative mx-auto aspect-[450/920] w-full max-w-[280px]"
      style={{ filter: 'drop-shadow(0 30px 40px rgba(0, 0, 0, 0.18))' }}
    >
      <div
        className="absolute overflow-hidden"
        style={{ inset: '2.5% 5.3%', borderRadius: '13.7% / 6.3%', background: 'var(--bg-canvas)' }}
      >
        {screens.map((screen, i) => (
          <div key={screen.placeholder} className="screen-layer absolute inset-0" data-active={i === active} aria-hidden={i !== active}>
            {screen.video && !reducedMotion ? (
              <ScreenVideo video={screen.video} alt={screen.alt} playing={i === active} />
            ) : screen.src ? (
              <img src={screen.src} alt={i === active ? screen.alt : ''} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center" aria-hidden="true">
                <span className="text-sm font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>
                  {screen.placeholder}
                </span>
                <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
                  Tela do app em breve
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
      <img src={BEZEL[audience]} alt="" className="pointer-events-none absolute inset-0 h-full w-full" />
    </div>
  )
}
