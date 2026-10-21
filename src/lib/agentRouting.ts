import { SITE_URL } from '../siteInfo.ts'

const KNOWN_PAGE = /^\/(?:(?:privacidade|termos|suporte)|vaga\/[^/]+)?\/?$/

const NOT_FOUND_MARKDOWN = `# Página não encontrada (404)

O endereço que você pediu não existe no site do Freela onTap.

- [Página inicial](${SITE_URL}/)
- [llms.txt](${SITE_URL}/llms.txt)
- [Sitemap](${SITE_URL}/sitemap.xml)
`

const NOT_FOUND_HTML = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="robots" content="noindex" />
    <title>Página não encontrada — Freela onTap</title>
  </head>
  <body style="font-family: system-ui, sans-serif; max-width: 32rem; margin: 20vh auto; padding: 0 1rem">
    <h1>Página não encontrada</h1>
    <p>O endereço que você pediu não existe no site do Freela onTap.</p>
    <p><a href="/">Ir para a página inicial</a> · <a href="/llms.txt">llms.txt</a> · <a href="/sitemap.xml">Sitemap</a></p>
  </body>
</html>
`

export function isKnownPage(pathname: string): boolean {
  return KNOWN_PAGE.test(pathname)
}

export function prefersMarkdown(accept: string | null): boolean {
  const ranked = (accept ?? '')
    .split(',')
    .map((part, index) => {
      const [type = '', ...params] = part.trim().split(';')
      const quality = params.map((param) => param.trim()).find((param) => param.startsWith('q='))
      return { type: type.trim().toLowerCase(), quality: quality === undefined ? 1 : Number(quality.slice(2)), index }
    })
    .filter((entry) => (entry.type === 'text/markdown' || entry.type === 'text/html') && entry.quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index)
  return ranked[0]?.type === 'text/markdown'
}

function negotiated(body: string | ReadableStream<Uint8Array> | null, status: number, contentType: string): Response {
  return new Response(body, { status, headers: { 'content-type': contentType, vary: 'Accept', 'cache-control': 'public, max-age=0, must-revalidate' } })
}

export async function routeAgentRequest(request: Request, fetchAsset: (path: string) => Promise<Response>): Promise<Response | undefined> {
  if (request.method !== 'GET' && request.method !== 'HEAD') return undefined
  const { pathname } = new URL(request.url)
  const markdown = prefersMarkdown(request.headers.get('accept'))

  if (!isKnownPage(pathname)) {
    return markdown
      ? negotiated(NOT_FOUND_MARKDOWN, 404, 'text/markdown; charset=utf-8')
      : negotiated(NOT_FOUND_HTML, 404, 'text/html; charset=utf-8')
  }

  if (markdown && pathname === '/') {
    const asset = await fetchAsset('/index.md')
    if (asset.ok) return negotiated(asset.body, 200, 'text/markdown; charset=utf-8')
  }
  return undefined
}
