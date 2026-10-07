import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { SUPPORT_EMAIL } from '../config.ts'

const linkStyle = { color: 'var(--color-link)' }

export function LegalPage({ title, updatedAt, children }: { title: string; updatedAt: string; children: ReactNode }) {
  return (
    <article className="section-shell prose-page">
      <p className="eyebrow" style={{ color: 'var(--color-link)' }}>
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
        {title}
      </h1>
      <p className="mt-2 text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
        Última atualização: {updatedAt}.
      </p>
      <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        {children}
      </div>
    </article>
  )
}

export function LegalNotice({ children }: { children: ReactNode }) {
  return (
    <section>
      <p
        className="rounded-[var(--radius-lg)] border p-4 text-sm"
        style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-secondary)' }}
      >
        {children}
      </p>
    </section>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
        {title}
      </h2>
      {children}
    </section>
  )
}

export function LegalSubheading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mt-5 text-base font-semibold" style={{ color: 'var(--color-text-primary)' }}>
      {children}
    </h3>
  )
}

export function LegalText({ children }: { children: ReactNode }) {
  return <p className="mt-2">{children}</p>
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-6">{children}</ul>
}

export function SupportLink() {
  return (
    <a href={`mailto:${SUPPORT_EMAIL}`} style={linkStyle}>
      {SUPPORT_EMAIL}
    </a>
  )
}

export function InternalLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <Link to={to} style={linkStyle}>
      {children}
    </Link>
  )
}

export function LegalTable({ columns, rows }: { columns: string[]; rows: [string, ...ReactNode[]][] }) {
  return (
    <div className="mt-3 overflow-x-auto rounded-[var(--radius-lg)] border" style={{ borderColor: 'var(--color-border-default)' }}>
      <table className="w-full min-w-[36rem] border-collapse text-left text-sm">
        <thead style={{ background: 'var(--color-surface)', color: 'var(--color-text-primary)' }}>
          <tr>
            {columns.map((column) => (
              <th key={column} scope="col" className="px-4 py-3 font-semibold">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} style={{ borderTop: '1px solid var(--color-border-subtle)' }}>
              {row.map((cell, index) => (
                <td key={columns[index]} className="px-4 py-3 align-top">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
