import { useAudience, type Audience } from '../hooks/useAudience.ts'

const MASCOT_FILES: Record<Audience, string> = {
  freelancer: '/media/mascot.webp',
  business: '/media/mascot-business.webp',
}

export function MascotImage({ className = 'h-40 w-40' }: { className?: string }) {
  return <img src={MASCOT_FILES[useAudience()]} alt="" className={`${className} object-contain`} />
}
