export function RailDots({ index, count, className = '' }: { index: number; count: number; className?: string }) {
  if (count < 2) return null

  return (
    <div className={`flex justify-center gap-2 ${className}`} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span
          key={i}
          className="h-2 rounded-full transition-[width,background-color] duration-200 motion-reduce:transition-none"
          style={{
            width: i === index ? 20 : 8,
            background: i === index ? 'var(--color-text-primary)' : 'var(--color-border-strong)',
          }}
        />
      ))}
    </div>
  )
}
