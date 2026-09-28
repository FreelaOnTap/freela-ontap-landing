export function MascotPlaceholder({ className = 'mx-auto h-48 w-48' }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 260" className={className} aria-hidden="true">
      {/* two organic blobs, one per side of the marketplace, overlapping to show the connection */}
      <path
        d="M105,55C147,48,192,70,204,110C216,150,216,193,180,214C144,235,90,232,58,206C26,180,10,140,20,101C30,62,63,62,105,55Z"
        fill="#00549A"
        opacity="0.92"
        className="blob-float"
      />
      <path
        d="M205,95C238,110,254,143,251,178C248,213,224,240,190,248C156,256,116,250,96,224C76,198,80,160,96,130C112,100,172,80,205,95Z"
        fill="#A44700"
        opacity="0.92"
        className="blob-float"
        style={{ animationDelay: '-4s' }}
      />

      {/* turno / shift booked */}
      <g transform="translate(126,96)" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="0" y="8" width="42" height="36" rx="6" />
        <line x1="0" y1="20" x2="42" y2="20" />
        <line x1="11" y1="0" x2="11" y2="12" />
        <line x1="31" y1="0" x2="31" y2="12" />
        <path d="M11 30 L18 37 L32 22" />
      </g>

      {/* tray with drinks, hospitality gig */}
      <g transform="translate(44,166)" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="-6" y="26" width="52" height="7" rx="3.5" />
        <path d="M5 2 H19 L16 26 H8 Z" />
        <path d="M25 2 H39 L36 26 H28 Z" />
      </g>

      {/* building, the venue side */}
      <g transform="translate(198,120)" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <rect x="0" y="0" width="36" height="48" rx="5" />
        <line x1="9" y1="12" x2="9" y2="12.1" />
        <line x1="27" y1="12" x2="27" y2="12.1" />
        <line x1="9" y1="26" x2="9" y2="26.1" />
        <line x1="27" y1="26" x2="27" y2="26.1" />
      </g>
    </svg>
  )
}
