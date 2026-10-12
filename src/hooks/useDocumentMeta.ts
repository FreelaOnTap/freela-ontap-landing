import { useEffect } from 'react'
import { SITE_URL } from '../config.ts'
import { PAGE_META } from '../content.ts'
import type { Audience } from './useAudience.ts'

type Undo = () => void

function setTitle(title: string): Undo {
  const previous = document.title
  document.title = title
  return () => {
    document.title = previous
  }
}

function setMeta(attribute: 'name' | 'property', key: string, content: string): Undo {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)
  const created = !element
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  const previous = element.content
  element.content = content
  const target = element
  return () => {
    if (created) target.remove()
    else target.content = previous
  }
}

function setCanonical(href: string): Undo {
  let element = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
  const created = !element
  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }
  const previous = element.href
  element.href = href
  const target = element
  return () => {
    if (created) target.remove()
    else target.href = previous
  }
}

export function useDocumentMeta(audience: Audience) {
  useEffect(() => {
    const meta = PAGE_META[audience]
    const url = `${SITE_URL}${meta.path}`
    const undo = [
      setTitle(meta.title),
      setMeta('name', 'description', meta.description),
      setMeta('property', 'og:title', meta.shareTitle),
      setMeta('property', 'og:description', meta.shareDescription),
      setMeta('property', 'og:url', url),
      setCanonical(url),
    ]
    return () => undo.forEach((restore) => restore())
  }, [audience])
}
