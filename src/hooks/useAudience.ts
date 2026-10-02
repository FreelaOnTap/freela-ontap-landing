import { useSearchParams } from 'react-router-dom'

export type Audience = 'freelancer' | 'business'

const PARAM = 'para'
const BUSINESS_VALUE = 'empresa'
const MAX_SOURCE_LENGTH = 120

export function audienceHref(audience: Audience, currentSearch: string) {
  const params = new URLSearchParams(currentSearch)
  if (audience === 'business') params.set(PARAM, BUSINESS_VALUE)
  else params.delete(PARAM)
  const search = params.toString()
  return search ? `/?${search}` : '/'
}

export function useAudience(): Audience {
  const [params] = useSearchParams()
  return params.get(PARAM) === BUSINESS_VALUE ? 'business' : 'freelancer'
}

export function useLeadSource() {
  const [params] = useSearchParams()
  const source = params.get('origem') ?? params.get('utm_source')
  return source ? source.slice(0, MAX_SOURCE_LENGTH) : null
}
