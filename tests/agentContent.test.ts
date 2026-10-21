import assert from 'node:assert/strict'
import { test } from 'node:test'
import { homeBlocks, homeJsonLd, toHtml, toMarkdown } from '../src/lib/agentContent.ts'

test('home HTML carries a single H1 and at least 500 characters of text', () => {
  const html = toHtml(homeBlocks())
  assert.equal(html.match(/<h1>/g)?.length, 1)
  assert.ok(html.replace(/<[^>]+>/g, '').length > 500)
})

test('headings never skip a level', () => {
  const levels = homeBlocks().flatMap((block) => (block.type === 'heading' ? [block.level] : []))
  assert.equal(levels[0], 1)
  levels.forEach((level, index) => assert.ok(index === 0 || level <= levels[index - 1] + 1, `h${level} after h${levels[index - 1]}`))
})

test('HTML escapes content and Markdown keeps both audiences', () => {
  assert.equal(toHtml([{ type: 'paragraph', text: '<b>&"' }]), '<p>&lt;b&gt;&amp;&quot;</p>')
  const markdown = toMarkdown(homeBlocks())
  assert.match(markdown, /^# Freela onTap/)
  assert.match(markdown, /## Para freelancers/)
  assert.match(markdown, /## Para empresas/)
  assert.match(markdown, /\[Baixar Freela onTap: Empresas na App Store\]\(https:\/\/apps\.apple\.com/)
})

test('JSON-LD describes the organization and both apps', () => {
  const graph = homeJsonLd()['@graph']
  assert.deepEqual(graph.map((node) => node['@type']), ['Organization', 'WebSite', 'SoftwareApplication', 'SoftwareApplication'])
  for (const node of graph) assert.ok(node.name && node.url)
})
