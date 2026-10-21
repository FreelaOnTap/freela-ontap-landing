import { APP_STORE_LINKS, SITE_URL, SUPPORT_EMAIL } from '../siteInfo.ts'
import { CONTENT, PAGE_META, PARTNER_COMPANIES, PARTNER_COMPANIES_COPY } from '../content.ts'
import type { Audience } from '../hooks/useAudience.ts'

type Block =
  | { type: 'heading'; level: 1 | 2 | 3 | 4; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'links'; items: { text: string; href: string }[] }

const AUDIENCES: Audience[] = ['freelancer', 'business']

const AUDIENCE_HEADING: Record<Audience, string> = { freelancer: 'Para freelancers', business: 'Para empresas' }

const APP_NAME: Record<Audience, string> = { freelancer: 'Freela onTap: Vagas e Turnos', business: 'Freela onTap: Empresas' }

const H1 = 'Freela onTap: app de freelas para bares, restaurantes e cafés em Porto Alegre e região'

function audienceBlocks(audience: Audience): Block[] {
  const content = CONTENT[audience]
  const url = audience === 'business' ? `${SITE_URL}/?para=empresa` : SITE_URL
  return [
    { type: 'heading', level: 2, text: AUDIENCE_HEADING[audience] },
    { type: 'paragraph', text: `${content.hero.headline.join(' ')} ${content.hero.sub}` },
    { type: 'links', items: [{ text: `Baixar ${APP_NAME[audience]} na App Store`, href: APP_STORE_LINKS[audience] }, { text: 'Página desta versão do site', href: url }] },
    { type: 'heading', level: 3, text: content.problem.title },
    { type: 'paragraph', text: content.problem.body },
    { type: 'heading', level: 3, text: content.highlights.title },
    { type: 'list', items: content.highlights.items.map((item) => `${item.title}: ${item.body}`) },
    { type: 'heading', level: 3, text: content.steps.title },
    { type: 'list', items: content.steps.items.map((step) => `${step.title}: ${step.body}`) },
    { type: 'heading', level: 3, text: 'Confiança' },
    { type: 'heading', level: 4, text: content.trust.theySee.title },
    { type: 'list', items: content.trust.theySee.items },
    { type: 'heading', level: 4, text: content.trust.youSee.title },
    { type: 'list', items: content.trust.youSee.items },
    { type: 'heading', level: 4, text: content.trust.payment.title },
    { type: 'paragraph', text: content.trust.payment.body },
    { type: 'heading', level: 3, text: 'Perguntas frequentes' },
    ...content.faq.flatMap((item): Block[] => [
      { type: 'heading', level: 4, text: item.q },
      { type: 'paragraph', text: item.a },
    ]),
  ]
}

export function homeBlocks(): Block[] {
  return [
    { type: 'heading', level: 1, text: H1 },
    { type: 'paragraph', text: PAGE_META.freelancer.description },
    ...AUDIENCES.flatMap(audienceBlocks),
    { type: 'heading', level: 2, text: PARTNER_COMPANIES_COPY.eyebrow },
    { type: 'paragraph', text: `${PARTNER_COMPANIES_COPY.title} ${PARTNER_COMPANIES_COPY.sub}` },
    { type: 'list', items: PARTNER_COMPANIES.map((partner) => [partner.name, partner.kind, partner.neighborhood].filter(Boolean).join(', ')) },
    { type: 'heading', level: 2, text: 'Páginas e contato' },
    {
      type: 'links',
      items: [
        { text: 'Política de Privacidade', href: `${SITE_URL}/privacidade` },
        { text: 'Termos de Uso', href: `${SITE_URL}/termos` },
        { text: 'Suporte', href: `${SITE_URL}/suporte` },
        { text: 'llms.txt', href: `${SITE_URL}/llms.txt` },
        { text: 'Sitemap', href: `${SITE_URL}/sitemap.xml` },
        { text: SUPPORT_EMAIL, href: `mailto:${SUPPORT_EMAIL}` },
      ],
    },
  ]
}

export function toMarkdown(blocks: Block[]): string {
  return (
    blocks
      .map((block) => {
        if (block.type === 'heading') return `${'#'.repeat(block.level)} ${block.text}`
        if (block.type === 'paragraph') return block.text
        if (block.type === 'list') return block.items.map((item) => `- ${item}`).join('\n')
        return block.items.map((link) => `- [${link.text}](${link.href})`).join('\n')
      })
      .join('\n\n') + '\n'
  )
}

function escapeHtml(text: string): string {
  return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
}

export function toHtml(blocks: Block[]): string {
  return blocks
    .map((block) => {
      if (block.type === 'heading') return `<h${block.level}>${escapeHtml(block.text)}</h${block.level}>`
      if (block.type === 'paragraph') return `<p>${escapeHtml(block.text)}</p>`
      if (block.type === 'list') return `<ul>${block.items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`
      return `<ul>${block.items.map((link) => `<li><a href="${escapeHtml(link.href)}">${escapeHtml(link.text)}</a></li>`).join('')}</ul>`
    })
    .join('\n')
}

export function homeJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'Freela onTap',
        url: SITE_URL,
        logo: `${SITE_URL}/media/logo-512.png`,
        description: PAGE_META.freelancer.description,
        email: SUPPORT_EMAIL,
        areaServed: { '@type': 'City', name: 'Porto Alegre' },
        contactPoint: { '@type': 'ContactPoint', contactType: 'customer support', email: SUPPORT_EMAIL, availableLanguage: 'pt-BR' },
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        name: 'Freela onTap',
        url: SITE_URL,
        inLanguage: 'pt-BR',
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: APP_NAME.freelancer,
        description: PAGE_META.freelancer.description,
        url: SITE_URL,
        downloadUrl: APP_STORE_LINKS.freelancer,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'iOS',
        inLanguage: 'pt-BR',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
      {
        '@type': 'SoftwareApplication',
        name: APP_NAME.business,
        description: PAGE_META.business.description,
        url: `${SITE_URL}/?para=empresa`,
        downloadUrl: APP_STORE_LINKS.business,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'iOS',
        inLanguage: 'pt-BR',
        offers: { '@type': 'Offer', price: '0', priceCurrency: 'BRL' },
        publisher: { '@id': `${SITE_URL}/#organization` },
      },
    ],
  }
}
