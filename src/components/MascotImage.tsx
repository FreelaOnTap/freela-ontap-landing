export function MascotImage({ className = 'h-40 w-40' }: { className?: string }) {
  return <img src="/media/mascot.webp" alt="" className={`${className} object-contain`} />
}
