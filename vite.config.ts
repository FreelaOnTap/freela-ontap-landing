import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, type Plugin } from 'vite'
import { homeBlocks, homeJsonLd, toHtml, toMarkdown } from './src/lib/agentContent.ts'

function agentReadablePages(): Plugin {
  return {
    name: 'agent-readable-pages',
    transformIndexHtml: {
      order: 'pre',
      handler: (html) => ({
        html: html.replace(
          '<div id="root"></div>',
          `<div id="root"><div style="position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap">${toHtml(homeBlocks())}</div></div>`,
        ),
        tags: [{ tag: 'script', attrs: { type: 'application/ld+json' }, children: JSON.stringify(homeJsonLd()), injectTo: 'head' }],
      }),
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'index.md', source: toMarkdown(homeBlocks()) })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), agentReadablePages()],
  envPrefix: ['VITE_', 'LEADS_', 'CLARITY_'],
})
