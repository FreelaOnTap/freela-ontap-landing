export function PhoneFrame({ src, alt, placeholder }: { src: string | null; alt: string; placeholder: string }) {
  return (
    <div
      className="relative mx-auto aspect-[450/920] w-full max-w-[280px]"
      style={{ filter: 'drop-shadow(0 30px 40px rgba(0, 0, 0, 0.18))' }}
    >
      <div
        className="absolute overflow-hidden"
        style={{ inset: '2.5% 5.3%', borderRadius: '13.7% / 6.3%', background: 'var(--bg-canvas)' }}
      >
        {src ? (
          <img src={src} alt={alt} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-2 p-6 text-center" aria-hidden="true">
            <span className="text-sm font-semibold" style={{ color: 'var(--color-text-tertiary)' }}>
              {placeholder}
            </span>
            <span className="text-xs" style={{ color: 'var(--color-text-tertiary)' }}>
              Tela do app em breve
            </span>
          </div>
        )}
      </div>
      <img src="/media/iphone-bezel.png" alt="" className="pointer-events-none absolute inset-0 h-full w-full" />
    </div>
  )
}
