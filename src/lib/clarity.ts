import { CLARITY_PROJECT_ID } from '../config'

type ClarityQueue = ((...args: unknown[]) => void) & { q?: unknown[][] }

declare global {
  interface Window {
    clarity?: ClarityQueue
  }
}

export function startClarity() {
  if (!import.meta.env.PROD || !CLARITY_PROJECT_ID || window.clarity) return

  const queue: ClarityQueue = (...args) => {
    ;(queue.q ??= []).push(args)
  }
  window.clarity = queue
  window.clarity('consentv2', { ad_Storage: 'denied', analytics_Storage: 'denied' })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.clarity.ms/tag/${encodeURIComponent(CLARITY_PROJECT_ID)}`
  document.head.appendChild(script)
}
