import type { Audience } from '../hooks/useAudience.ts'

export function StickyCtaBar({ audience, label, visible }: { audience: Audience; label: string; visible: boolean }) {
  return (
    <div
      inert={!visible}
      aria-hidden={!visible}
      className={`scope-${audience} fixed inset-x-0 bottom-0 z-40 border-t px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl transition-[transform,opacity] duration-200 motion-reduce:translate-y-0 motion-reduce:transition-opacity sm:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-full opacity-0'
      }`}
      style={{ borderColor: 'var(--color-border-subtle)', background: 'color-mix(in srgb, var(--bg-canvas) 80%, transparent)' }}
    >
      <a href="#avise" tabIndex={visible ? undefined : -1} className="btn-primary w-full">
        {label}
      </a>
    </div>
  )
}
