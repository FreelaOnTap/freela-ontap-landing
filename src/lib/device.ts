export type PhoneOS = 'ios' | 'android' | 'other'

export function detectPhoneOS(): PhoneOS {
  const ua = navigator.userAgent
  if (/android/i.test(ua)) return 'android'
  if (/iPhone|iPad|iPod/.test(ua)) return 'ios'
  // iPadOS reports itself as a Mac; touch support is what tells them apart.
  if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return 'ios'
  return 'other'
}
