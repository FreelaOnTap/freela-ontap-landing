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

const SOURCE_STORAGE_KEY = 'freelaontap:lead-source'

function rememberedSource() {
  try {
    return sessionStorage.getItem(SOURCE_STORAGE_KEY)
  } catch {
    return null
  }
}

function rememberSource(source: string) {
  try {
    sessionStorage.setItem(SOURCE_STORAGE_KEY, source)
  } catch {
    return
  }
}

export function useLeadSource() {
  const [params] = useSearchParams()
  const fromUrl = (params.get('origem') ?? params.get('utm_source'))?.slice(0, MAX_SOURCE_LENGTH)
  if (fromUrl) {
    rememberSource(fromUrl)
    return fromUrl
  }
  return rememberedSource()
}
