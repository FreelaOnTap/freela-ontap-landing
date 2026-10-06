import { useEffect, useRef, useState } from 'react'
import type { Step } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'
import { PhoneFrame } from './PhoneFrame.tsx'

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
  const screens = steps.map((step, i) => ({ src: step.image, alt: step.imageAlt, placeholder: `Passo ${i + 1}` }))

  return (
    <section style={{ background: 'var(--color-surface)' }}>
      <div className="section-shell">
        <p className="eyebrow">Como funciona</p>
        <h2 className="headline mt-2 max-w-3xl reveal">{title}</h2>

        <div className="mt-16 grid gap-16 lg:grid-cols-2">
          <ol className="flex flex-col gap-16 lg:gap-[40vh] lg:py-[20vh]">
            {steps.map((step, i) => (
              <li
                key={step.title}
                ref={(el) => {
                  refs.current[i] = el
                }}
                data-step={i}
                className="transition-colors duration-300 lg:border-l-[3px] lg:pl-8"
                style={{ borderColor: i === active ? 'var(--accent)' : 'var(--color-border-subtle)' }}
              >
                <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>
                  Passo {i + 1}
                </p>
                <h3 className="mt-2 text-3xl font-semibold">{step.title}</h3>
                <p className="lede mt-3">{step.body}</p>
                <div className="mt-8 lg:hidden">
                  <PhoneFrame audience={audience} screens={[screens[i]]} />
                </div>
              </li>
            ))}
          </ol>

          <div className="hidden lg:block">
            <div className="sticky top-28">
              <PhoneFrame audience={audience} screens={screens} active={active} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
