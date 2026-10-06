import { LEADS_ENDPOINT } from '../config.ts'
import type { Audience } from '../hooks/useAudience.ts'

export type InterestLead = {
  audience: Audience
  name: string
  whatsapp: string
  email: string | null
  city: string
  phone_os: 'ios' | 'android' | null
  role: string | null
  business_name: string | null
  business_type: string | null
  neighborhood: string | null
  contact_role: string | null
  hiring_frequency: string | null
  source: string | null
  consented: true
}

const REQUEST_TIMEOUT_MS = 15_000

const BRAZILIAN_AREA_CODES = new Set([
  11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44,
  45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81,
  82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
])

export function isValidWhatsapp(digits: string) {
  if (!BRAZILIAN_AREA_CODES.has(Number(digits.slice(0, 2)))) return false
  const number = digits.slice(2)
  if (number.length === 9) return number.startsWith('9')
  if (number.length === 8) return /^[2-5]/.test(number)
  return false
}

export async function submitInterestLead(lead: InterestLead) {
  if (!LEADS_ENDPOINT) throw new Error('The leads endpoint is not configured')

  const response = await fetch(LEADS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
  if (!response.ok) throw new Error(`Lead submission failed with ${response.status}`)

  const result = (await response.json()) as { ok: boolean; error?: string }
  if (!result.ok) throw new Error(`Lead submission rejected: ${result.error ?? 'unknown'}`)
}
