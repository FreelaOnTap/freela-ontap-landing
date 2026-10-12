import { useEffect, useRef, useState } from 'react'
import type { Step } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'
import { useRail } from '../hooks/useRail.ts'
import { PhoneFrame } from './PhoneFrame.tsx'
import { RailDots } from './RailDots.tsx'

function useActiveStep(count: number) {
  const refs = useRef<(HTMLLIElement | null)[]>([])
  const [active, setActive] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.step))
        }
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    refs.current.slice(0, count).forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [count])

  return [refs, active] as const
}

export function HowItWorks({ audience, title, steps }: { audience: Audience; title: string; steps: Step[] }) {
  const [refs, active] = useActiveStep(steps.length)
  const { ref: railRef, index: railIndex, count: railCount, scrollable } = useRail<HTMLDivElement>('items')
  const screens = steps.map((step, i) => ({ src: step.image, video: step.video ?? null, alt: step.imageAlt, placeholder: `Passo ${i + 1}` }))

  return (
    <section style={{ background: 'var(--color-surface)' }}>
      <div className="section-shell">
        <p className="eyebrow">Como funciona</p>
        <h2 className="headline mt-2 max-w-3xl reveal">{title}</h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <div className="-mx-4 min-w-0 sm:-mx-6 lg:mx-0">
            <div
              ref={railRef}
              className="rail snap-x snap-mandatory overflow-x-auto scroll-px-4 px-4 pb-12 sm:scroll-px-6 sm:px-6 lg:overflow-visible lg:p-0"
              role="region"
              aria-label="Passos"
              tabIndex={scrollable ? 0 : undefined}
            >
              <ol className="flex w-max gap-4 lg:w-auto lg:flex-col lg:gap-[40vh] lg:py-[20vh]">
                {steps.map((step, i) => (
                  <li
                    key={step.title}
                    ref={(el) => {
                      refs.current[i] = el
                    }}
                    data-step={i}
                    className="w-[84vw] max-w-[380px] shrink-0 snap-start transition-colors duration-300 sm:w-[380px] lg:w-auto lg:max-w-none lg:shrink lg:border-l-[3px] lg:pl-8"
                    style={{ borderColor: i === active ? 'var(--accent)' : 'var(--color-border-subtle)' }}
                  >
                    <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                      Passo {i + 1}
                      <span className="lg:hidden"> de {steps.length}</span>
                    </p>
                    <h3 className="mt-2 text-3xl font-semibold">{step.title}</h3>
                    <p className="lede mt-3">{step.body}</p>
                    <div className="mt-8 lg:hidden">
                      <PhoneFrame audience={audience} screens={[screens[i]]} />
                      {step.note && <p className="mt-4 text-center text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{step.note}</p>}
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <RailDots index={railIndex} count={railCount} className="-mt-4 lg:hidden" />
          </div>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <PhoneFrame audience={audience} screens={screens} active={active} />
              <p className="mt-4 min-h-4 text-center text-xs" style={{ color: 'var(--color-text-tertiary)' }}>{steps[active]?.note ?? ''}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
