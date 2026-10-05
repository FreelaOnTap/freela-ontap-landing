const MAX_PHONE_DIGITS = 11

export function splitPhoneDigits(raw: string) {
  const allDigits = raw.replace(/\D/g, '')
  let digits = allDigits.replace(/^0+/, '')
  if (digits.length > MAX_PHONE_DIGITS && digits.startsWith('55')) digits = digits.slice(2)
  return { digits: digits.slice(0, MAX_PHONE_DIGITS), droppedPrefix: allDigits.length - digits.length }
}

export function phoneDigits(raw: string) {
  return splitPhoneDigits(raw).digits
}

export function maskPhone(raw: string) {
  const digits = phoneDigits(raw)
  if (digits.length === 0) return ''
  if (digits.length <= 2) return `(${digits}`
  const areaCode = digits.slice(0, 2)
  const number = digits.slice(2)
  const splitAt = digits.length === MAX_PHONE_DIGITS ? 5 : 4
  if (number.length <= splitAt) return `(${areaCode}) ${number}`
  return `(${areaCode}) ${number.slice(0, splitAt)}-${number.slice(splitAt)}`
}

export function caretAfterDigits(formatted: string, digitCount: number) {
  if (digitCount <= 0) return Math.min(1, formatted.length)
  let seen = 0
  for (let i = 0; i < formatted.length; i++) {
    if (/\d/.test(formatted[i])) seen++
    if (seen === digitCount) return i + 1
  }
  return formatted.length
}

function normalizeApostrophes(raw: string) {
  return raw.replace(/[’ʼ‘`´]/g, "'")
}

function collapseSpaces(raw: string) {
  return raw.replace(/\s{2,}/g, ' ').replace(/^\s+/, '')
}

export function keepPersonName(raw: string) {
  return collapseSpaces(normalizeApostrophes(raw).replace(/[^\p{L}\p{M}\s'.-]/gu, ''))
}

export function keepBusinessName(raw: string) {
  return collapseSpaces(normalizeApostrophes(raw).replace(/[^\p{L}\p{M}\p{N}\s'&.,/()-]/gu, ''))
}

export function keepEmail(raw: string) {
  return raw.replace(/\s/g, '').toLowerCase()
}
