export function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <defs>
        <clipPath id="logo-round">
          <rect width="32" height="32" rx="9" />
        </clipPath>
      </defs>
      <g clipPath="url(#logo-round)">
        <rect width="32" height="32" fill="#00549A" />
        <path d="M0 0 L32 0 Q14 18 0 32 Z" fill="#A44700" />
      </g>
    </svg>
  )
}
