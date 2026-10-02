import { SUPABASE } from '../config.ts'
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

export function normalizeWhatsapp(raw: string) {
  const digits = raw.replace(/\D/g, '').replace(/^0+/, '')
  return digits.length >= 12 && digits.startsWith('55') ? digits.slice(2) : digits
}

export function isValidWhatsapp(digits: string) {
  return /^[1-9]{2}9?[0-9]{8}$/.test(digits)
}

export async function submitInterestLead(lead: InterestLead) {
  if (!SUPABASE.url || !SUPABASE.anonKey) throw new Error('Supabase is not configured')

  const headers: Record<string, string> = {
    apikey: SUPABASE.anonKey,
    'Content-Type': 'application/json',
    Prefer: 'return=minimal',
  }
  // Legacy anon keys are JWTs and go in Authorization too; new publishable keys must not.
  if (SUPABASE.anonKey.startsWith('eyJ')) headers.Authorization = `Bearer ${SUPABASE.anonKey}`

  const response = await fetch(`${SUPABASE.url}/rest/v1/interest_leads`, {
    method: 'POST',
    headers,
    body: JSON.stringify(lead),
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  })
  if (!response.ok) throw new Error(`Lead insert failed with ${response.status}`)
}
