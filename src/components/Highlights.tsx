import { useRail } from '../hooks/useRail.ts'
import { RailDots } from './RailDots.tsx'

export function Highlights({ title, items }: { title: string; items: { title: string; body: string }[] }) {
  const { ref, index, count, scrollable } = useRail<HTMLDivElement>()

  return (
    <section className="py-20 sm:py-28" style={{ background: 'color-mix(in srgb, var(--brand) 14%, var(--bg-canvas))' }}>
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <h2 className="headline max-w-3xl reveal">{title}</h2>
      </div>
      <div className="mx-auto mt-10 max-w-5xl">
        <div
          ref={ref}
          className="rail snap-x snap-mandatory overflow-x-auto scroll-px-4 px-4 sm:scroll-px-6 sm:px-6 lg:overflow-visible"
          role="region"
          aria-label="Destaques"
          tabIndex={scrollable ? 0 : undefined}
        >
          <div className="flex w-max gap-4 lg:grid lg:w-full lg:auto-cols-fr lg:grid-flow-col">
            {items.map((item) => (
              <article
                key={item.title}
                className="tile flex w-[78vw] max-w-[320px] shrink-0 snap-start flex-col sm:w-[300px] lg:w-auto lg:max-w-none"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-lg" style={{ color: 'var(--color-text-secondary)' }}>
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
        <RailDots index={index} count={count} className="mt-6" />
      </div>
    </section>
  )
}
