const SHEETS = {
  freelancer: {
    name: 'freelancers',
    headers: ['Data', 'Nome', 'WhatsApp', 'E-mail', 'Cidade', 'Função', 'Celular', 'Origem', 'Consentimento'],
    toRow: (lead, receivedAt) => [
      receivedAt,
      lead.name,
      lead.whatsapp,
      lead.email,
      lead.city,
      lead.role,
      lead.phone_os === 'ios' ? 'iPhone' : 'Android',
      lead.source,
      'Sim',
    ],
  },
  business: {
    name: 'empresas',
    headers: ['Data', 'Negócio', 'Tipo de negócio', 'Contato', 'Cargo', 'WhatsApp', 'E-mail', 'Cidade', 'Bairro', 'Frequência', 'Origem', 'Consentimento'],
    toRow: (lead, receivedAt) => [
      receivedAt,
      lead.business_name,
      lead.business_type,
      lead.name,
      lead.contact_role,
      lead.whatsapp,
      lead.email,
      lead.city,
      lead.neighborhood,
      lead.hiring_frequency,
      lead.source,
      'Sim',
    ],
  },
}

const MAX_LEADS_PER_MINUTE = 30
const LOCK_TIMEOUT_MS = 10000

function doPost(event) {
  try {
    const lead = parseLead(event)
    if (!lead) return reply({ ok: false, error: 'invalid' })
    if (isOverRateLimit()) return reply({ ok: false, error: 'busy' })

    const target = SHEETS[lead.audience]
    const lock = LockService.getScriptLock()
    lock.waitLock(LOCK_TIMEOUT_MS)
    try {
      const sheet = sheetWithHeaders(target)
      sheet.appendRow(target.toRow(lead, new Date()).map(asPlainText))
    } finally {
      lock.releaseLock()
    }
    return reply({ ok: true })
  } catch (error) {
    console.error(error)
    return reply({ ok: false, error: 'unavailable' })
  }
}

function parseLead(event) {
  const raw = JSON.parse(event.postData.contents)
  if (!SHEETS[raw.audience] || raw.consented !== true) return null

  const lead = {
    audience: raw.audience,
    name: text(raw.name, 120, true),
    whatsapp: /^[1-9]{2}9?[0-9]{8}$/.test(raw.whatsapp) ? raw.whatsapp : null,
    email: raw.email ? email(raw.email) : '',
    city: text(raw.city, 60, true),
    source: text(raw.source, 120, false),
  }
  if (!lead.name || lead.name.length < 2 || !lead.whatsapp || lead.email === null || !lead.city) return null

  if (raw.audience === 'freelancer') {
    lead.role = text(raw.role, 60, true)
    lead.phone_os = raw.phone_os === 'ios' || raw.phone_os === 'android' ? raw.phone_os : null
    return lead.role && lead.phone_os ? lead : null
  }

  lead.business_name = text(raw.business_name, 120, true)
  lead.business_type = text(raw.business_type, 60, true)
  lead.hiring_frequency = text(raw.hiring_frequency, 60, true)
  lead.neighborhood = text(raw.neighborhood, 80, false)
  lead.contact_role = text(raw.contact_role, 80, false)
  return lead.business_name && lead.business_type && lead.hiring_frequency ? lead : null
}

function text(value, maxLength, required) {
  const trimmed = typeof value === 'string' ? value.trim() : ''
  if (!trimmed) return required ? null : ''
  return trimmed.length <= maxLength ? trimmed : null
}

function email(value) {
  const trimmed = text(value, 254, true)
  return trimmed && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed) ? trimmed : null
}

function asPlainText(value) {
  if (value instanceof Date) return value
  const cell = value === null || value === undefined ? '' : String(value)
  return /^[=+\-@0-9]/.test(cell) ? `'${cell}` : cell
}

function isOverRateLimit() {
  const cache = CacheService.getScriptCache()
  const key = `leads:${Math.floor(Date.now() / 60000)}`
  const count = Number(cache.get(key) || 0) + 1
  cache.put(key, String(count), 120)
  return count > MAX_LEADS_PER_MINUTE
}

function sheetWithHeaders(target) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  const sheet = spreadsheet.getSheetByName(target.name) || spreadsheet.insertSheet(target.name)
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(target.headers)
    sheet.setFrozenRows(1)
    sheet.getRange(1, 1, 1, target.headers.length).setFontWeight('bold')
  }
  return sheet
}

function reply(body) {
  return ContentService.createTextOutput(JSON.stringify(body)).setMimeType(ContentService.MimeType.JSON)
}
