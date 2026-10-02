export function PhoneFrame({ src, alt, placeholder }: { src: string | null; alt: string; placeholder: string }) {
  return (
    <div
      className="relative mx-auto aspect-[9/19.5] w-full max-w-[280px] overflow-hidden rounded-[44px] border-[10px]"
      style={{ borderColor: 'var(--phone-bezel)', background: 'var(--bg-canvas)', boxShadow: '0 30px 60px rgba(0, 0, 0, 0.18)' }}
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
  )
}
