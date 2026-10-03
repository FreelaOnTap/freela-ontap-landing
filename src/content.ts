import type { Audience } from './hooks/useAudience.ts'

export const CITIES = ['Porto Alegre', 'Canoas', 'Viamão', 'Alvorada', 'Guaíba']

export const ROLE_GROUPS = [
  { label: 'Salão', roles: ['Garçom / garçonete', 'Atendente', 'Runner', 'Recepção'] },
  { label: 'Bar', roles: ['Bartender', 'Barback', 'Barista', 'Sommelier'] },
  { label: 'Cozinha', roles: ['Cozinheiro(a)', 'Auxiliar de cozinha'] },
  { label: 'Apoio', roles: ['Auxiliar de limpeza', 'Segurança', 'Manobrista'] },
]

export const BUSINESS_TYPES = ['Restaurante', 'Bar', 'Cafeteria', 'Casa noturna', 'Outro']

export const HIRING_FREQUENCIES = ['Toda semana', 'Algumas vezes por mês', 'Só em datas de pico']

export type Step = { title: string; body: string; image: string | null; imageAlt: string }

type AudienceContent = {
  label: string
  hero: {
    eyebrow: string
    badge: string | null
    headline: string[]
    sub: string
    cta: string
    price: string | null
    launch: string | null
  }
  problem: { title: string; body: string }
  highlights: { title: string; items: { title: string; body: string }[] }
  steps: { title: string; items: Step[] }
  trust: { theySee: { title: string; items: string[] }; youSee: { title: string; items: string[] } }
  form: { title: string; sub: string; submit: string; reassurance: string | null; success: (name: string) => string }
  faq: { q: string; a: string }[]
  closing: string
}

export const LAUNCH_EVENT = 'Lançamento em 22 de outubro, no Showcase da Apple Developer Academy, no Tecnopuc Experience 2026.'

export const CONTENT: Record<Audience, AudienceContent> = {
  freelancer: {
    label: 'Freelancer',
    hero: {
      eyebrow: 'Freela onTap para freelancers',
      badge: 'Chega no iPhone dia 23 de outubro',
      headline: ['Freela em bar, restaurante e café, num lugar só.'],
      sub: 'Vagas em Porto Alegre e região, tudo claro antes de te candidatar.',
      cta: 'Me avisa no lançamento',
      price: null,
      launch: null,
    },
    problem: {
      title: 'Vaga boa não devia depender de em qual grupo tu tá.',
      body: 'Hoje o freela aparece no meio de um monte de mensagem, muitas vezes sem valor, sem endereço e sem saber quem tá contratando. O Freela onTap junta todas as vagas num lugar só, filtradas e organizadas do teu jeito.',
    },
    highlights: {
      title: 'Feito pra quem está em busca de renda extra.',
      items: [
        { title: 'Filtra do teu jeito', body: 'Por valor, distância e data. Tu vê o que encaixa na tua agenda.' },
        { title: 'Empresas verificadas', body: 'As empresas são verificadas e tu sabe pra quem vai trabalhar.' },
        { title: 'Chat dentro do Freela onTap', body: 'Combinados e históricos ficam no app, não perdidos no WhatsApp.' },
        { title: 'Tua reputação conta', body: 'Notas, avaliações e tags como pontualidade vão montando teu histórico.' },
        { title: 'Sem surpresa', body: 'Valor, endereço e jornada aparecem antes de tu dizer sim.' },
      ],
    },
    steps: {
      title: 'Do perfil ao turno em três passos.',
      items: [
        { title: 'Cria teu perfil', body: 'Conta tua experiência e as funções que tu faz.', image: null, imageAlt: 'Tela de perfil do freelancer' },
        { title: 'Acha a vaga certa', body: 'Filtra por valor, distância e data, e te candidata.', image: null, imageAlt: 'Tela de busca de vagas' },
        { title: 'Trabalha, fatura e ganha reputação', body: 'Combina tudo na vaga, faz o turno, recebe o valor combinado e ganha tua avaliação.', image: null, imageAlt: 'Tela de detalhe da vaga' },
      ],
    },
    trust: {
      theySee: { title: 'O que a empresa vê de ti', items: ['Notas e avaliações dos turnos anteriores', 'Tags como pontual, ágil e colaborativo', 'Quantos turnos tu já fez pelo app'] },
      youSee: { title: 'O que tu vê da empresa', items: ['Empresa verificada', 'Conversa e combinados registrados na vaga', 'Valor do turno combinado na vaga, antes de tu aceitar'] },
    },
    form: {
      title: 'Quer ser dos primeiros?',
      sub: 'Deixa teu contato que a gente avisa quando o app sair. Se teu celular é Android, tu entra na lista da versão Android.',
      submit: 'Me avisa no lançamento',
      reassurance: 'Só te chamamos pra avisar do lançamento. Nada de spam.',
      success: (name) => `Pronto, ${name}! Tu tá na lista. A gente te avisa pelo WhatsApp.`,
    },
    faq: [
      { q: 'É de graça?', a: 'É. O Freela onTap é gratuito pra freelancers.' },
      { q: 'Quando eu posso baixar?', a: 'O lançamento é no dia 22 de outubro, no Tecnopuc Experience. No dia seguinte o app já tá liberado na App Store pra iPhone.' },
      { q: 'Tenho Android. E agora?', a: 'O app chega primeiro no iPhone. A versão Android tá prevista pro começo de 2027: entra na lista que a gente te avisa assim que sair.' },
      { q: 'Como eu recebo pelo turno?', a: 'O pagamento é combinado e feito direto entre tu e a casa, fora do app. O valor do turno aparece na vaga.' },
      { q: 'Em quais cidades funciona?', a: 'A gente começa por Porto Alegre, Canoas, Viamão, Alvorada e Guaíba.' },
      { q: 'Quais funções o app cobre?', a: 'Salão, bar, cozinha e apoio: garçom, atendente, runner, recepção, bartender, barback, barista, sommelier, cozinheiro, auxiliar de cozinha, auxiliar de limpeza, segurança e manobrista.' },
    ],
    closing: 'Menos tempo caçando vaga, mais tempo trabalhando.',
  },
  business: {
    label: 'Empresa',
    hero: {
      eyebrow: 'Freela onTap para empresas',
      badge: null,
      headline: ['Faltou gente no turno?', 'Sem correria. O Freela\u00a0onTap te ajuda!'],
      sub: 'Freelancers de atendimento, bar e cozinha bem avaliados, em Porto Alegre e região.',
      cta: 'Reservar acesso pro meu negócio',
      price: 'Gratuito durante o lançamento',
      launch: 'Lançamento dia 22 de outubro, no Showcase da Apple Developer Academy · Tecnopuc Experience 2026',
    },
    problem: {
      title: 'A urgência não devia depender de quem responde no grupo.',
      body: 'Quando alguém falta, o jeito costuma ser mandar mensagem pra todo mundo e torcer. Sem histórico, sem saber quem é bom e sem uma lista de profissionais pra chamar de novo.',
    },
    highlights: {
      title: 'Reforço com avaliações e métricas, não no escuro.',
      items: [
        { title: 'Publica vaga em poucos passos', body: 'Função, data, horário e valor do turno, direto no app.' },
        { title: 'Profissionais avaliados', body: 'Notas, avaliações e tags como pontual e ágil mostram quem já trabalhou bem.' },
        { title: 'Teu banco de profissionais', body: 'Os freelancers que já trabalharam no teu negócio, com histórico, num lugar só.' },
        { title: 'Conversa centralizada', body: 'Combinados e histórico ficam no chat da vaga, longe das várias mensagens dos grupos.' },
        { title: 'Empresa verificada', body: 'Com o CNPJ verificado, tua vaga passa confiança e atrai os melhores talentos.' },
      ],
    },
    steps: {
      title: 'Do turno vago ao turno coberto.',
      items: [
        { title: 'Cadastra teu negócio', body: 'Informações sobre a empresa, segmento e detalhes que importam.', image: null, imageAlt: 'Tela de cadastro da empresa' },
        { title: 'Publica a vaga', body: 'Função, data, horário, valor do turno e requisitos para a vaga.', image: null, imageAlt: 'Tela de publicação de vaga' },
        { title: 'Escolhe quem vai', body: 'Vê os candidatos com avaliações e histórico e confirma.', image: null, imageAlt: 'Tela de candidatos da vaga' },
      ],
    },
    trust: {
      theySee: { title: 'O que tu vê do freelancer', items: ['Notas e avaliações dos turnos anteriores', 'Tags como pontual, ágil e colaborativo', 'Quantos turnos já fez pelo app'] },
      youSee: { title: 'O que o freelancer vê do teu negócio', items: ['Empresa verificada', 'Conversa e combinados registrados na vaga', 'Valor do turno combinado na vaga, antes do freelancer aceitar'] },
    },
    form: {
      title: 'Quer teu negócio entre os primeiros?',
      sub: 'A gente entra em contato pra preparar teu cadastro.',
      submit: 'Reservar acesso',
      reassurance: null,
      success: (name) => `Recebido, ${name}! Alguém do time vai falar contigo pelo WhatsApp.`,
    },
    faq: [
      { q: 'Quanto custa?', a: 'Durante o lançamento, o Freela onTap é gratuito pras empresas.' },
      { q: 'Como eu cadastro minha casa?', a: 'Pelo app Freela onTap Business pra iPhone, com e-mail e senha. Enquanto ele não sai, deixa teus dados aqui que a gente entra em contato.' },
      { q: 'Como funciona a verificação?', a: 'A empresa é verificada pelo CNPJ.' },
      { q: 'Como é feito o pagamento do freelancer?', a: 'Direto entre a casa e o freelancer, fora do app. O valor do turno fica claro na vaga desde o início.' },
      { q: 'Que tipo de casa pode usar?', a: 'Restaurantes, bares, cafeterias, casas noturnas e lugares parecidos de Porto Alegre, Canoas, Viamão, Alvorada e Guaíba.' },
    ],
    closing: 'Transforma a instabilidade em oportunidade.',
  },
}
