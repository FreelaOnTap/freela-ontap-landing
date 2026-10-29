import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { test } from 'node:test'
import { appBannerContent } from '../src/lib/appBanner.ts'

test('the home page points the Smart App Banner at the audience app', () => {
  assert.equal(appBannerContent('freelancer', '/'), 'app-id=6818288726')
  assert.equal(appBannerContent('business', '/'), 'app-id=6818285624')
})

test('shared job links keep the banner they were served with', () => {
  assert.equal(appBannerContent('freelancer', '/vaga/0b8f2c1e-6c1e-4f55-9d77-3f0a1c2d4e5f'), undefined)
})

test('the job link route renders the home page and never redirects to the App Store', () => {
  const routes = readFileSync(new URL('../src/main.tsx', import.meta.url), 'utf8')
  assert.match(routes, /<Route path="vaga\/:id" element=\{<Home \/>\} \/>/)
  assert.doesNotMatch(routes, /Redirect/)
})
