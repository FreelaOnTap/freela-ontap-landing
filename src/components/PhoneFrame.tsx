import type { Audience } from '../hooks/useAudience.ts'

const BEZEL: Record<Audience, string> = {
  freelancer: '/media/iphone-bezel-freelancer.webp',
  business: '/media/iphone-bezel-business.webp',
}

export type PhoneScreen = { src: string | null; alt: string; placeholder: string }

export function PhoneFrame({
  audience,
  screens,
  active = 0,
}: {
  audience: Audience
  screens: PhoneScreen[]
  active?: number
}) {
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
            {screen.src ? (
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
