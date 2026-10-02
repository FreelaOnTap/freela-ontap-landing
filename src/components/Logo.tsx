export function Logo({ className = 'h-8 w-8' }: { className?: string }) {
  return (
    <img
      src="/media/logo-64.png"
      srcSet="/media/logo-64.png 2x, /media/logo-128.png 4x"
      alt=""
      width={32}
      height={32}
      className={className}
    />
  )
}
