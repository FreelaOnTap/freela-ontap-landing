import { useAudience, type Audience } from '../hooks/useAudience.ts'

const LOGO_FILES: Record<Audience, { x2: string; x4: string }> = {
  freelancer: { x2: '/media/logo-64.png', x4: '/media/logo-128.png' },
  business: { x2: '/media/logo-business-64.png', x4: '/media/logo-business-128.png' },
}

export function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  const files = LOGO_FILES[useAudience()]

  return (
    <img
      src={files.x2}
      srcSet={`${files.x2} 2x, ${files.x4} 4x`}
      alt=""
      width={32}
      height={32}
      className={className}
    />
  )
}
