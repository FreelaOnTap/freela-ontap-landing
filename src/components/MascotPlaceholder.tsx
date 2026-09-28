export function MascotPlaceholder() {
  return (
    <svg viewBox="0 0 240 240" className="mx-auto h-48 w-48" aria-hidden="true">
      <circle cx="120" cy="120" r="110" fill="var(--color-border-subtle)" opacity="0.4" />
      <circle cx="120" cy="120" r="70" fill="#00549A" opacity="0.9" />
      <path d="M120 50 A70 70 0 0 1 120 190 Z" fill="#A44700" opacity="0.9" />
      <circle cx="95" cy="110" r="8" fill="var(--color-surface)" />
      <circle cx="145" cy="110" r="8" fill="var(--color-surface)" />
      <path d="M95 145 Q120 165 145 145" stroke="var(--color-surface)" strokeWidth="6" fill="none" strokeLinecap="round" />
    </svg>
  )
}
