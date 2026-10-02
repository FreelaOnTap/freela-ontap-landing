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
  hero: { eyebrow: string; headline: string[]; sub: string }
  problem: { title: string; body: string }
  highlights: { title: string; items: { title: string; body: string }[] }
  steps: { title: string; items: Step[] }
  trust: { theySee: { title: string; items: string[] }; youSee: { title: string; items: string[] } }
  form: { title: string; sub: string; success: (name: string) => string }
  faq: { q: string; a: string }[]
}

export const CONTENT: Record<Audience, AudienceContent> = {
  freelancer: {
    label: 'Freelancer',
    hero: {
      eyebrow: 'FreelaOnTap para freelancers',
      headline: ['Sai do grupo.', 'Entra no turno.'],
      sub: 'Freelas em bares, restaurantes, cafés e casas noturnas de Porto Alegre e região, num app só. De graça pra quem trabalha.',
    },
    problem: {
      title: 'Vaga boa não devia depender de em qual grupo tu tá.',
      body: 'Hoje o freela aparece no meio de um monte de mensagem, muitas vezes sem valor, sem endereço e sem saber quem tá contratando. O FreelaOnTap junta as vagas num lugar só, organizadas do teu jeito.',
    },
    highlights: {
      title: 'Feito pra quem vive de turno.',
      items: [
        { title: 'Filtra do teu jeito', body: 'Por valor, distância e data. Tu vê o que encaixa na tua agenda.' },
        { title: 'Casas verificadas', body: 'As empresas são verificadas pelo CNPJ. Tu sabe pra quem vai trabalhar.' },
        { title: 'Conversa dentro da vaga', body: 'Combinados e histórico ficam no app, não perdidos no WhatsApp.' },
        { title: 'Tua reputação conta', body: 'Notas, avaliações e tags como pontualidade vão montando teu histórico.' },
        { title: 'Tu decide', body: 'Não curtiu a vaga? Pode recusar.' },
      ],
    },
    steps: {
      title: 'Do perfil ao turno em três passos.',
      items: [
        { title: 'Cria teu perfil', body: 'Conta tua experiência e as funções que tu faz.', image: null, imageAlt: 'Tela de perfil do freelancer' },
        { title: 'Acha a vaga certa', body: 'Filtra por valor, distância e data, e te candidata.', image: null, imageAlt: 'Tela de busca de vagas' },
        { title: 'Trabalha e ganha reputação', body: 'Combina tudo na vaga, faz o turno e recebe tua avaliação.', image: null, imageAlt: 'Tela de detalhe da vaga' },
      ],
    },
    trust: {
      theySee: { title: 'O que a casa vê de ti', items: ['Notas e avaliações dos turnos anteriores', 'Tags como pontualidade', 'Teu histórico no app'] },
      youSee: { title: 'O que tu vê da casa', items: ['CNPJ verificado', 'Conversa e combinados registrados na vaga', 'Liberdade pra recusar a vaga'] },
    },
    form: {
      title: 'Quer ser dos primeiros?',
      sub: 'Deixa teu contato que a gente avisa quando o app sair. Se teu celular é Android, tu entra na lista da versão Android.',
      success: (name) => `Pronto, ${name}! Tu tá na lista. A gente te avisa pelo WhatsApp.`,
    },
    faq: [
      { q: 'É de graça?', a: 'É. O FreelaOnTap é gratuito pra freelancers.' },
      { q: 'Quando eu posso baixar?', a: 'O lançamento é no dia 22 de outubro, no Tecnopuc Experience. No dia seguinte o app já tá liberado na App Store pra iPhone.' },
      { q: 'Tenho Android. E agora?', a: 'O app chega primeiro no iPhone. A versão Android tá prevista pro começo de 2027: entra na lista que a gente te avisa assim que sair.' },
      { q: 'Como eu recebo pelo turno?', a: 'O pagamento é combinado e feito direto entre tu e a casa, fora do app. O valor do turno aparece na vaga.' },
      { q: 'Em quais cidades funciona?', a: 'A gente começa por Porto Alegre, Canoas, Viamão, Alvorada e Guaíba.' },
      { q: 'Quais funções o app cobre?', a: 'Salão, bar, cozinha e apoio: garçom, atendente, runner, recepção, bartender, barback, barista, sommelier, cozinheiro, auxiliar de cozinha, auxiliar de limpeza, segurança e manobrista.' },
    ],
  },
  business: {
    label: 'Empresa',
    hero: {
      eyebrow: 'FreelaOnTap para empresas',
      headline: ['Faltou gente?', 'Tem gente.'],
      sub: 'Encontra freelancers avaliados de salão, bar e cozinha em Porto Alegre e região, e cobre o turno sem depender de grupo de WhatsApp.',
    },
    problem: {
      title: 'Turno descoberto não devia depender de quem responde no grupo.',
      body: 'Quando alguém falta, o jeito costuma ser mandar mensagem pra todo mundo e torcer. Sem histórico, sem saber quem é bom e sem uma lista de profissionais pra chamar de novo.',
    },
    highlights: {
      title: 'Reforço com histórico, não no escuro.',
      items: [
        { title: 'Publica em poucos passos', body: 'Função, data, horário e valor do turno, direto no app.' },
        { title: 'Profissionais avaliados', body: 'Notas, avaliações e tags como pontualidade mostram quem já trabalhou bem.' },
        { title: 'Teu banco de profissionais', body: 'Os freelancers que já passaram pela tua casa, com histórico, num lugar só.' },
        { title: 'Conversa centralizada', body: 'Combinados e histórico ficam na vaga, longe do grupo.' },
        { title: 'Casa verificada', body: 'A verificação por CNPJ mostra pro freelancer que a vaga é séria.' },
      ],
    },
    steps: {
      title: 'Do turno vago ao turno coberto.',
      items: [
        { title: 'Cadastra tua casa', body: 'Cria a conta no app com e-mail e senha e verifica o CNPJ.', image: null, imageAlt: 'Tela de cadastro da empresa' },
        { title: 'Publica a vaga', body: 'Função, data, horário e valor do turno.', image: null, imageAlt: 'Tela de publicação de vaga' },
        { title: 'Escolhe quem vai', body: 'Vê os candidatos com avaliações e histórico e confirma.', image: null, imageAlt: 'Tela de candidatos da vaga' },
      ],
    },
    trust: {
      theySee: { title: 'O que tu vê do freelancer', items: ['Notas e avaliações dos turnos anteriores', 'Tags como pontualidade', 'Histórico no app'] },
      youSee: { title: 'O que o freelancer vê da tua casa', items: ['CNPJ verificado', 'Conversa e combinados registrados na vaga', 'Valor do turno desde o início'] },
    },
    form: {
      title: 'Quer tua casa entre as primeiras?',
      sub: 'Deixa os dados da casa que alguém do time entra em contato.',
      success: (name) => `Recebido, ${name}! Alguém do time vai falar contigo pelo WhatsApp.`,
    },
    faq: [
      { q: 'Quanto custa?', a: 'Durante o lançamento, o FreelaOnTap é gratuito pras empresas.' },
      { q: 'Como eu cadastro minha casa?', a: 'Pelo app FreelaOnTap Business pra iPhone, com e-mail e senha. Enquanto ele não sai, deixa teus dados aqui que a gente entra em contato.' },
      { q: 'Como funciona a verificação?', a: 'A empresa é verificada pelo CNPJ.' },
      { q: 'Como é feito o pagamento do freelancer?', a: 'Direto entre a casa e o freelancer, fora do app. O valor do turno fica claro na vaga desde o início.' },
      { q: 'Que tipo de casa pode usar?', a: 'Restaurantes, bares, cafeterias, casas noturnas e lugares parecidos de Porto Alegre, Canoas, Viamão, Alvorada e Guaíba.' },
    ],
  },
}
