import { mailtoLink } from '../config.ts'

export function AudienceCTA({ label, subject }: { label: string; subject: string }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <a href={mailtoLink(subject)} className="btn-accent">
        {label}
      </a>
      <span
        className="rounded-[var(--radius-lg)] border px-4 py-3 text-sm font-medium min-h-11 flex items-center"
        style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-tertiary)' }}
      >
        Em breve na App Store
      </span>
    </div>
  )
}
