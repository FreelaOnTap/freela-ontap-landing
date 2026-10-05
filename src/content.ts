import type { Audience } from './hooks/useAudience.ts'

export const CITIES = ['Porto Alegre', 'Canoas', 'Viamão', 'Alvorada', 'Guaíba']

export const ROLE_GROUPS = [
  { label: 'Atendimento', roles: ['Atendente', 'Caixa', 'Cumim', 'Garçom/Garçonete', 'Guarda-volumes', 'Maître', 'Recepcionista', 'Runner'] },
  { label: 'Bar', roles: ['Bartender/Barmaid', 'Barback', 'Copeiro', 'Sommelier'] },
  { label: 'Cozinha', roles: ['Auxiliar de cozinha', 'Chapeira(o)', 'Cozinheira(o)', 'Confeiteira(o)'] },
  { label: 'Limpeza e Apoio', roles: ['Auxiliar de limpeza', 'Lavador de louça', 'Estoquista', 'Apoio geral'] },
  { label: 'Outros', roles: ['Barista', 'Manobrista', 'Segurança'] },
]

export const BUSINESS_TYPES = ['Restaurante', 'Bar', 'Cafeteria', 'Casa noturna', 'Eventos', 'Buffet', 'Outro']

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
        { title: 'Tua reputação conta', body: 'Recomendações, avaliações e tags como pontualidade vão montando teu histórico.' },
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
      theySee: { title: 'O que a empresa vê de ti', items: ['Recomendações e avaliações dos turnos anteriores', 'Tags como pontual, ágil e colaborativo', 'Quantos turnos tu já fez pelo app'] },
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
      { q: 'É de graça?', a: 'Sim! O Freela onTap é totalmente gratuito pra freelancers: tu não paga pra criar perfil, ver vagas nem te candidatar.' },
      { q: 'Como eu recebo pelo turno?', a: 'O valor do turno aparece na vaga antes de tu te candidatar, e o pagamento é feito direto entre tu e a empresa, fora do app. Combina a forma e o momento do pagamento pelo chat da vaga, que fica tudo registrado.' },
      { q: 'E se a empresa não pagar ou não cumprir o combinado?', a: 'Os combinados ficam registrados no chat da vaga. Depois do turno tu avalia a empresa, e se algo deu errado tu pode denunciar a empresa direto pelo app.' },
      { q: 'Como eu sei que a vaga é séria?', a: 'Toda empresa é verificada pelo CNPJ antes de publicar vaga. Tu vê quem tá contratando, o endereço, a jornada e o valor antes de dizer sim.' },
      { q: 'Preciso ter experiência?', a: 'Não necessariamente. Cada vaga mostra os requisitos da empresa. Quanto mais turnos tu faz pelo app, mais avaliações e tags tu acumula, e mais fácil fica ser escolhido.' },
      { q: 'Como funciona a avaliação?', a: 'Depois de cada turno a empresa diz se te recomenda e pode marcar tags como pontual, ágil, colaborativo, comunicativo, proativo, organizado, atencioso e autônomo. Isso, junto com quantos turnos tu já fez, monta tua reputação no app.' },
      { q: 'Posso desistir depois de me candidatar?', a: 'Antes da empresa confirmar, tu retira a candidatura quando quiser. Depois de confirmado também dá pra desistir, mas avisa a empresa pelo chat da vaga o quanto antes, pra ela ter tempo de chamar outra pessoa. Desistências depois da confirmação contam nas tuas métricas dos últimos 3 meses e, se forem frequentes, aparecem no teu perfil.' },
      { q: 'Preciso ter MEI?', a: 'Não pra usar o app. A forma de contratação e de pagamento é combinada direto com a empresa.' },
      { q: 'Quando eu posso baixar?', a: 'O lançamento é dia 22 de outubro, no Showcase da Apple Developer Academy, no Tecnopuc Experience 2026.' },
      { q: 'Tenho Android. E agora?', a: 'O time já tá construindo a versão Android, e ela chega nos próximos meses. Deixa teu contato no formulário e marca Android, que a gente te avisa assim que sair.' },
      { q: 'Em quais cidades funciona?', a: 'A gente começa por Porto Alegre, Canoas, Viamão, Alvorada e Guaíba. Se tu tá em outra cidade, deixa teu contato que a gente avisa quando chegar aí.' },
      { q: 'Quais funções o app cobre?', a: 'Atendimento: atendente, caixa, cumim, garçom/garçonete, guarda-volumes, maître, recepcionista e runner. Bar: bartender/barmaid, barback, copeiro e sommelier. Cozinha: auxiliar de cozinha, chapeiro(a), cozinheiro(a) e confeiteiro(a). Limpeza e apoio: auxiliar de limpeza, lavador de louça, estoquista e apoio geral. Outros: barista, manobrista e segurança.' },
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
        { title: 'Profissionais avaliados', body: 'Recomendações, avaliações e tags como pontual e ágil mostram quem já trabalhou bem.' },
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
      theySee: { title: 'O que tu vê do freelancer', items: ['Recomendações e avaliações dos turnos anteriores', 'Tags como pontual, ágil e colaborativo', 'Quantos turnos já fez pelo app'] },
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
      { q: 'Quanto custa?', a: 'Durante o lançamento, o Freela onTap é gratuito pra empresas: publicar vaga, ver candidatos e contratar não tem custo.' },
      { q: 'Como eu cadastro meu negócio?', a: 'Pelo app Freela onTap: Empresa pra iPhone, com as informações da empresa, o segmento e o CNPJ. Enquanto o app não sai, deixa teus dados aqui que a gente entra em contato pra preparar teu cadastro.' },
      { q: 'Como funciona a verificação?', a: 'É automática: o CNPJ é verificado na hora do cadastro. Com o selo de empresa verificada, tua vaga passa confiança e atrai mais candidatos.' },
      { q: 'Como eu escolho o freelancer?', a: 'Tu vê cada candidato com avaliações, tags como pontual e ágil e quantos turnos já fez pelo app. Escolhe quem escala pro turno e confirma pelo app.' },
      { q: 'Posso chamar o mesmo freelancer de novo?', a: 'Pode. Quem já trabalhou no teu negócio fica no teu banco de profissionais, com o histórico, pra tu chamar de novo quando precisar.' },
      { q: 'E se o freelancer cancelar ou faltar?', a: 'Se o freelancer cancelar, o app te avisa na hora por notificação, e tu pode reabrir a vaga de novo. Cancelamentos e faltas contam nas métricas do freelancer dos últimos 3 meses: influenciam as tags dele e, se forem frequentes, aparecem no perfil. Isso ajuda tu e as outras empresas a escolherem melhor.' },
      { q: 'Como é feito o pagamento do freelancer?', a: 'Direto entre o teu negócio e o freelancer, fora do app. O valor do turno fica claro na vaga desde o início, e os combinados ficam registrados no chat.' },
      { q: 'O Freela onTap é responsável pela contratação?', a: 'Não. O Freela onTap é a plataforma que conecta empresas e freelancers: não é parte do acordo de trabalho e não atua como empregador de nenhum dos lados. Condições, valor e forma de pagamento de cada turno são combinados direto entre o teu negócio e o freelancer. Os detalhes estão nos Termos de Uso.' },
      { q: 'Que tipo de negócio pode usar?', a: 'Restaurantes, bares, cafeterias, casas noturnas, eventos, buffets e negócios parecidos de Porto Alegre, Canoas, Viamão, Alvorada e Guaíba.' },
      { q: 'Quando o app sai?', a: 'O lançamento é dia 22 de outubro, no Showcase da Apple Developer Academy, no Tecnopuc Experience 2026.' },
    ],
    closing: 'Transforma a instabilidade em oportunidade.',
  },
}
