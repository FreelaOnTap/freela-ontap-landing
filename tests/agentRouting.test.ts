import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { isKnownPage, prefersMarkdown, routeAgentRequest } from '../src/lib/agentRouting.ts'

const homeMarkdown = () => Promise.resolve(new Response('# Freela onTap\n', { status: 200 }))

function get(path: string, accept?: string, method = 'GET') {
  return new Request(`https://www.freelaontap.com.br${path}`, { method, headers: accept ? { accept } : {} })
}

test('prefersMarkdown follows Accept quality and order', () => {
  assert.equal(prefersMarkdown('text/markdown'), true)
  assert.equal(prefersMarkdown('text/markdown, text/html;q=0.8'), true)
  assert.equal(prefersMarkdown('text/html, text/markdown;q=0.5'), false)
  assert.equal(prefersMarkdown('text/markdown;q=0, text/html'), false)
  assert.equal(prefersMarkdown('text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'), false)
  assert.equal(prefersMarkdown(null), false)
})

test('isKnownPage matches the client routes only', () => {
  for (const path of ['/', '/privacidade', '/termos/', '/suporte', '/vaga/abc-123']) assert.equal(isKnownPage(path), true, path)
  for (const path of ['/nope', '/privacidade/x', '/vaga', '/vaga/a/b']) assert.equal(isKnownPage(path), false, path)
})

test('unknown path answers a real 404 with a Markdown body for Accept: text/markdown', async () => {
  const response = await routeAgentRequest(get('/does-not-exist', 'text/markdown'), homeMarkdown)
  assert.equal(response?.status, 404)
  assert.match(response?.headers.get('content-type') ?? '', /^text\/markdown/)
  assert.equal(response?.headers.get('vary'), 'Accept')
  const body = (await response?.text()) ?? ''
  assert.ok(body.length > 20)
  assert.match(body, /llms\.txt/)
  assert.match(body, /sitemap\.xml/)
})

test('unknown path answers a real 404 with an HTML body otherwise', async () => {
  const response = await routeAgentRequest(get('/does-not-exist', 'text/html'), homeMarkdown)
  assert.equal(response?.status, 404)
  assert.match(response?.headers.get('content-type') ?? '', /^text\/html/)
  assert.equal(response?.headers.get('vary'), 'Accept')
})

test('home serves Markdown with Vary: Accept when asked, and passes through for HTML', async () => {
  const markdown = await routeAgentRequest(get('/', 'text/markdown'), homeMarkdown)
  assert.equal(markdown?.status, 200)
  assert.match(markdown?.headers.get('content-type') ?? '', /^text\/markdown/)
  assert.equal(markdown?.headers.get('vary'), 'Accept')
  assert.equal(await markdown?.text(), '# Freela onTap\n')
  assert.equal(await routeAgentRequest(get('/', 'text/html'), homeMarkdown), undefined)
})

test('home falls through to HTML when the Markdown asset is missing', async () => {
  const missing = () => Promise.resolve(new Response('not found', { status: 404 }))
  assert.equal(await routeAgentRequest(get('/', 'text/markdown'), missing), undefined)
})

test('known pages other than home and non-GET requests pass through', async () => {
  assert.equal(await routeAgentRequest(get('/termos', 'text/markdown'), homeMarkdown), undefined)
  assert.equal(await routeAgentRequest(get('/does-not-exist', 'text/markdown', 'POST'), homeMarkdown), undefined)
})

test('vercel.json rewrites the same client routes that the middleware accepts', () => {
  const { rewrites } = JSON.parse(readFileSync(new URL('../vercel.json', import.meta.url), 'utf8')) as { rewrites: { source: string }[] }
  const sources = rewrites.map((rewrite) => rewrite.source)
  assert.deepEqual(sources, ['/(privacidade|termos|suporte)', '/vaga/:id'])
})
