import type { FeatureIconName } from './components/FeatureIcon.tsx'
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

export type StepVideo = { src: string; poster: string }

export type Step = { title: string; body: string; image: string | null; imageAlt: string; video?: StepVideo; note?: string }

type AudienceContent = {
  label: string
  hero: {
    eyebrow: string
    badge: string | null
    perk: string | null
    headline: string[]
    sub: string
    cta: string
  }
  problem: { title: string; body: string }
  highlights: { title: string; items: { icon: FeatureIconName; title: string; body: string }[] }
  steps: { title: string; items: Step[] }
  trust: { theySee: { title: string; items: string[] }; youSee: { title: string; items: string[] }; payment: { title: string; body: string } }
  download: { title: string; sub: string }
  form: {
    title: string
    sub: string
    subAndroid?: string
    submit: string
    reassurance: string | null
    success: (name: string) => string
    share: { hint: string; message: string }
  }
  faq: { q: string; a: string }[]
  closing: { lead: string; highlight: string }
}

export type PartnerCompany = { name: string; kind: string; neighborhood?: string; logo: string; logoBackground: string }

export const PARTNER_COMPANIES: PartnerCompany[] = [
  { name: 'Niko Sushi Club', kind: 'Restaurante japonês', neighborhood: 'Moinhos de Vento', logo: '/media/partners/niko-sushi-club.webp', logoBackground: '#fffde8' },
  { name: 'ENNIOS', kind: 'Pizzaria estilo Detroit', neighborhood: 'Farroupilha', logo: '/media/partners/ennios.webp', logoBackground: '#ffb5d6' },
  { name: 'Zanza', kind: 'Bar e mercearia', neighborhood: 'Bom Fim', logo: '/media/partners/zanza.webp', logoBackground: '#913d3b' },
  { name: 'Tú Bar', kind: 'Bar', neighborhood: 'Santa Cecília', logo: '/media/partners/tu-bar.webp', logoBackground: '#fcf3a4' },
  { name: 'Ouro Pães', kind: 'Padaria artesanal', neighborhood: 'Bom Fim', logo: '/media/partners/ouro-paes.webp', logoBackground: '#000000' },
  { name: 'Niko Bā', kind: 'Bar japonês', neighborhood: 'Bom Fim', logo: '/media/partners/niko-ba.webp', logoBackground: '#f6f7ea' },
  { name: 'Paraíso Bowls', kind: 'Bowls', neighborhood: 'Moinhos de Vento', logo: '/media/partners/paraiso-bowls.webp', logoBackground: '#ffffff' },
  { name: 'Basta', kind: 'Restaurante italiano', neighborhood: 'Bom Fim', logo: '/media/partners/basta.webp', logoBackground: '#4e5921' },
  { name: 'Moa Cafeteria', kind: 'Cafeteria', neighborhood: 'Centro Histórico', logo: '/media/partners/moa-cafeteria.webp', logoBackground: '#ffffff' },
]

export const PARTNER_COMPANIES_COPY = {
  eyebrow: 'Empresas parceiras',
  title: 'As primeiras empresas de Porto Alegre já estão com o Freela onTap.',
  sub: 'Bares, restaurantes e cafés que entram antes de todo mundo para montar a rede de freelas da hospitalidade da cidade.',
  support: {
    freelancer: 'Cada vaga publicada mostra valor, horário e local à vista. Totalmente gratuito pra freelancers.',
    business: 'Cada vaga publicada mostra valor, horário e local à vista. Gratuito durante o lançamento.',
  },
}

export const PAGE_META: Record<Audience, { title: string; description: string; shareTitle: string; shareDescription: string; path: string }> = {
  freelancer: {
    title: 'Freela onTap — freelas em bares, restaurantes e cafés de Porto Alegre e região',
    description:
      'Freela onTap conecta freelancers a bares, restaurantes, cafeterias e casas noturnas de Porto Alegre e região. Disponível na App Store pra iPhone.',
    shareTitle: 'Freela onTap',
    shareDescription: 'Menos tempo caçando vaga, mais tempo trabalhando. Freelas em bar, restaurante e café de Porto Alegre e região.',
    path: '/',
  },
  business: {
    title: 'Freela onTap para empresas — cubra turnos com freelancers avaliados',
    description:
      'Faltou gente no turno? O Freela onTap ajuda bares, restaurantes e cafeterias de Porto Alegre e região a cobrir turnos com freelancers bem avaliados. Gratuito durante o lançamento.',
    shareTitle: 'Freela onTap para empresas',
    shareDescription: 'Transforme a instabilidade em oportunidade. Cubra turnos de última hora com freelancers bem avaliados em Porto Alegre e região.',
    path: '/?para=empresa',
  },
}

export const LAUNCH_EVENT = 'Vem conhecer o app ao vivo em 22 de outubro, no Tecnopuc Experience 2026, dentro do Showcase da Apple Developer Academy.'

export const CONTENT: Record<Audience, AudienceContent> = {
  freelancer: {
    label: 'Freelancer',
    hero: {
      eyebrow: 'Freela onTap para freelancers',
      badge: 'Já na App Store pra iPhone',
      perk: 'Totalmente gratuito pra freelancers',
      headline: ['Menos tempo caçando vaga,', 'mais tempo trabalhando.'],
      sub: 'Vagas de bar, restaurante e café em Porto Alegre e região, num lugar só. Tudo claro antes de se candidatar.',
      cta: 'Baixar na App Store',
    },
    problem: {
      title: 'Vaga boa não devia depender de em qual grupo você tá.',
      body: 'Hoje o freela aparece no meio de um monte de mensagem, muitas vezes sem valor, sem endereço e sem saber quem tá contratando. O Freela onTap junta todas as vagas num lugar só, filtradas e organizadas do seu jeito.',
    },
    highlights: {
      title: 'Feito pra quem está em busca de renda extra.',
      items: [
        { icon: 'filters', title: 'Filtre do seu jeito', body: 'Por valor, distância e data. Você vê o que encaixa na sua agenda.' },
        { icon: 'star', title: 'Sua reputação conta', body: 'Recomendações, avaliações e tags como pontualidade vão montando seu histórico.' },
        { icon: 'eye', title: 'Sem surpresa', body: 'Valor, endereço e jornada aparecem antes de você dizer sim.' },
      ],
    },
    steps: {
      title: 'Do perfil ao turno em três passos.',
      items: [
        { title: 'Crie o seu perfil', body: 'Preencha seus dados, escolha as funções que você faz e conte sua experiência. Criar o perfil é de graça.', image: '/media/screen-freelancer-1.webp', imageAlt: 'Tela de cadastro do freelancer com nome, CPF, data de nascimento e contato', video: { src: '/media/screen-freelancer-1.mp4', poster: '/media/screen-freelancer-1-start.webp' } },
        { title: 'Encontre a vaga certa', body: 'Filtre por valor, distância e data. Veja todas as informações da jornada antes de decidir e se candidate à vaga que combina mais com você.', image: '/media/screen-freelancer-2.webp', imageAlt: 'Tela de vagas das empresas parceiras: o freelancer desliza pelas mais recentes, abre os detalhes do Atendente no Niko Sushi Club e se candidata', video: { src: '/media/screen-freelancer-2.mp4', poster: '/media/screen-freelancer-2.webp' }, note: 'Vagas e valores de exemplo.' },
        { title: 'Trabalhe e construa sua reputação', body: 'Combine os detalhes pelo chat da vaga, faça o turno e receba a avaliação da empresa. Cada turno aumenta a sua reputação.', image: '/media/screen-freelancer-3.webp', imageAlt: 'Tela de atividade: conversa com o Niko Sushi Club, conclusão do turno, avaliação da empresa e a avaliação recebida', video: { src: '/media/screen-freelancer-3.mp4', poster: '/media/screen-freelancer-3-start.webp' }, note: 'Conversas e avaliações de exemplo.' },
      ],
    },
    trust: {
      theySee: { title: 'O que a empresa vê de você', items: ['Recomendações e avaliações dos turnos anteriores', 'Tags como pontual, ágil e colaborativo', 'Quantos turnos você já fez pelo app'] },
      youSee: { title: 'O que você vê da empresa', items: ['Empresa com CNPJ válido', 'Conversa e combinados registrados na vaga', 'Valor do turno combinado na vaga, antes de você aceitar'] },
      payment: {
        title: 'Como você recebe pelo turno',
        body: 'O pagamento é feito direto entre você e a empresa, fora do app. O valor aparece na vaga antes de você se candidatar, e a forma e o momento você combina pelo chat, que fica tudo registrado.',
      },
    },
    download: {
      title: 'Baixe o app e crie o seu perfil.',
      sub: 'Disponível na App Store pra iPhone. Cadastro, vagas, chat e avaliações num lugar só, de graça pra freelancers.',
    },
    form: {
      title: 'Tem Android? Entre na lista.',
      sub: 'O app é pra iPhone por enquanto. Deixe seu contato que a gente avisa quando a versão Android sair.',
      submit: 'Tem Android? Entre na lista',
      reassurance: 'Só chamamos você pra avisar das novidades do app. Nada de spam.',
      success: (name) => `Pronto, ${name}! Você tá na lista do Android. A gente avisa você pelo WhatsApp.`,
      share: {
        hint: 'Conhece alguém que também faz freela? Mande o link.',
        message: 'Veja esse app de freelas em bar, restaurante e café de Porto Alegre:',
      },
    },
    faq: [
      { q: 'É de graça?', a: 'Sim! O Freela onTap é totalmente gratuito pra freelancers: você não paga pra criar perfil, ver vagas nem se candidatar.' },
      { q: 'Como eu recebo pelo turno?', a: 'O valor do turno aparece na vaga antes de você se candidatar, e o pagamento é feito direto entre você e a empresa, fora do app. Combine a forma e o momento do pagamento pelo chat da vaga, que fica tudo registrado.' },
      { q: 'E se a empresa não pagar ou não cumprir o combinado?', a: 'Os combinados ficam registrados no chat da vaga. Depois do turno você avalia a empresa, e se algo deu errado você pode denunciar a empresa direto pelo app.' },
      { q: 'Como eu sei que a vaga é séria?', a: 'Toda empresa se cadastra com um CNPJ válido antes de publicar vaga, mas esse é só o primeiro filtro. Antes de dizer sim, você vê quem tá contratando, o endereço, a jornada e o valor.' },
      { q: 'Preciso ter experiência?', a: 'Não necessariamente. Cada vaga mostra os requisitos da empresa. Quanto mais turnos você faz pelo app, mais avaliações e tags você acumula, e mais fácil fica ser escolhido.' },
      { q: 'Como funciona a avaliação?', a: 'Depois de cada turno a empresa diz se recomenda você e pode marcar tags como pontual, ágil, colaborativo, comunicativo, proativo, organizado, atencioso e autônomo. Isso, junto com quantos turnos você já fez, monta sua reputação no app.' },
      { q: 'Posso desistir depois de me candidatar?', a: 'Antes da empresa confirmar, você retira a candidatura quando quiser. Depois de confirmado também dá pra desistir, mas avise a empresa pelo chat da vaga o quanto antes, pra ela ter tempo de chamar outra pessoa. Desistências depois da confirmação contam nas suas métricas dos últimos 3 meses e, se forem frequentes, aparecem no seu perfil.' },
      { q: 'Preciso ter MEI?', a: 'Não pra usar o app. A forma de contratação e de pagamento é combinada direto com a empresa.' },
      { q: 'Onde eu baixo?', a: 'O app já tá na App Store, pra iPhone. Procure por "Freela onTap: Vagas e Turnos" ou toque em "Baixar na App Store" no topo desta página.' },
      { q: 'Tenho Android. E agora?', a: 'O app é pra iPhone. A versão web, que funciona no navegador do celular e do computador, tá em desenvolvimento. Deixe seu contato no formulário da lista do Android, que a gente avisa você quando ela sair.' },
      { q: 'Em quais cidades funciona?', a: 'A gente começa por Porto Alegre, Canoas, Viamão, Alvorada e Guaíba. Se você tá em outra cidade, deixe seu contato que a gente avisa quando chegar aí.' },
      { q: 'Quais funções o app cobre?', a: 'Atendimento: atendente, caixa, cumim, garçom/garçonete, guarda-volumes, maître, recepcionista e runner. Bar: bartender/barmaid, barback, copeiro e sommelier. Cozinha: auxiliar de cozinha, chapeira(o), cozinheira(o) e confeiteira(o). Limpeza e apoio: auxiliar de limpeza, lavador de louça, estoquista e apoio geral. Outros: barista, manobrista e segurança.' },
    ],
    closing: { lead: 'Freela em bar, restaurante e café,', highlight: 'num\u00a0lugar\u00a0só.' },
  },
  business: {
    label: 'Empresa',
    hero: {
      eyebrow: 'Freela onTap para empresas',
      badge: 'Já na App Store pra iPhone',
      perk: 'Gratuito durante o lançamento',
      headline: ['Transforme a instabilidade', 'em oportunidade.'],
      sub: 'Alguém faltou ou ficou doente? Cubra o turno com freelancers de atendimento, bar e cozinha bem avaliados, em Porto Alegre e região.',
      cta: 'Quer ajuda pra começar? Fale com a gente',
    },
    problem: {
      title: 'A urgência não devia depender de quem responde no grupo.',
      body: 'Quando alguém falta, o jeito costuma ser mandar mensagem pra todo mundo e torcer. Sem histórico, sem saber quem é bom e sem uma lista de profissionais pra chamar de novo.',
    },
    highlights: {
      title: 'Reforço com avaliações e métricas, não no escuro.',
      items: [
        { icon: 'new-post', title: 'Publique vaga em poucos passos', body: 'Função, data, horário e valor do turno, direto no app.' },
        { icon: 'verified-badge', title: 'Profissionais avaliados', body: 'Recomendações, avaliações e tags como pontual e ágil mostram quem já trabalhou bem.' },
        { icon: 'people', title: 'Seu banco de profissionais', body: 'Os freelancers que já trabalharam no seu negócio, com histórico, num lugar só.' },
      ],
    },
    steps: {
      title: 'Do turno vago ao turno coberto.',
      items: [
        { title: 'Cadastre seu negócio', body: 'Nome, CNPJ, segmento e endereço do seu negócio.', image: '/media/screen-business-1.webp', imageAlt: 'Tela de cadastro da empresa: o Niko Sushi Club informa nome, CNPJ, porte, tipo, endereço e uma descrição do negócio', video: { src: '/media/screen-business-1.mp4', poster: '/media/screen-business-1-start.webp' }, note: 'Dados de exemplo.' },
        { title: 'Publique a vaga', body: 'Função, data, horário, valor do turno e requisitos.', image: '/media/screen-business-2.webp', imageAlt: 'Tela de criação de vaga: o Niko Sushi Club informa função, data, horário, jornada, valor, descrição e requisitos do turno de atendente', video: { src: '/media/screen-business-2.mp4', poster: '/media/screen-business-2-start.webp' }, note: 'Vaga e valores de exemplo.' },
        { title: 'Escolha quem vai', body: 'Veja os candidatos com avaliações e histórico e confirme.', image: '/media/screen-business-3.webp', imageAlt: 'Tela de detalhes da vaga: o Niko Sushi Club vê a candidata Laura com foto, nota e qualidades, abre o perfil e confirma a contratação', video: { src: '/media/screen-business-3.mp4', poster: '/media/screen-business-3-start.webp' }, note: 'Candidata e avaliações de exemplo.' },
      ],
    },
    trust: {
      theySee: { title: 'O que você vê do freelancer', items: ['Recomendações e avaliações dos turnos anteriores', 'Tags como pontual, ágil e colaborativo', 'Quantos turnos já fez pelo app'] },
      youSee: { title: 'O que o freelancer vê do seu negócio', items: ['Empresa com CNPJ válido', 'Conversa e combinados registrados na vaga', 'Valor do turno combinado na vaga, antes do freelancer aceitar'] },
      payment: {
        title: 'Como você paga o freelancer',
        body: 'Direto entre o seu negócio e o freelancer, fora do app. O valor do turno fica claro na vaga desde o início, e os combinados ficam registrados no chat.',
      },
    },
    download: {
      title: 'Baixe o app e cadastre o seu negócio.',
      sub: 'Disponível na App Store pra iPhone. Publique a vaga, escolha quem vai e confirme pelo app.',
    },
    form: {
      title: 'Quer ajuda pra começar?',
      sub: 'O app já tá na App Store pra iPhone. Se preferir ajuda com o cadastro, a gente entra em contato.',
      subAndroid: 'O app da empresa é pra iPhone por enquanto. Deixe seus dados que a gente avisa quando a versão Android sair e ajuda você a começar.',
      submit: 'Quero ajuda no cadastro',
      reassurance: null,
      success: (name) => `Recebido, ${name}! Alguém do time vai falar com você pelo WhatsApp.`,
      share: {
        hint: 'Conhece outra empresa que também precisa de freela? Mande o link.',
        message: 'Veja esse app pra cobrir turno vago com freelancer em Porto Alegre:',
      },
    },
    faq: [
      { q: 'Quanto custa?', a: 'Durante o lançamento, o Freela onTap é gratuito pra empresas: publicar vaga, ver candidatos e contratar não tem custo.' },
      { q: 'Como eu cadastro meu negócio?', a: 'Pelo app Freela onTap: Empresas, que já tá na App Store pra iPhone. Você informa os dados do negócio, o segmento e o CNPJ. Se preferir ajuda com o cadastro, deixe seus dados aqui que a gente entra em contato.' },
      { q: 'Funciona em Android ou no computador?', a: 'O app da empresa é pra iPhone. A versão web, que funciona no navegador do celular e do computador, tá em desenvolvimento. Deixe seus dados aqui que a gente avisa quando ela sair.' },
      { q: 'Como funciona o CNPJ?', a: 'Na hora do cadastro, só entra quem informa um CNPJ válido. Isso ajuda sua vaga a passar confiança e atrai mais candidatos.' },
      { q: 'Como eu escolho o freelancer?', a: 'Você vê cada candidato com avaliações, tags como pontual e ágil e quantos turnos já fez pelo app. Escolha quem escala pro turno e confirme pelo app.' },
      { q: 'Posso chamar o mesmo freelancer de novo?', a: 'Pode. Quem já trabalhou no seu negócio fica no seu banco de profissionais, com o histórico, pra você chamar de novo quando precisar.' },
      { q: 'E se o freelancer cancelar ou faltar?', a: 'Se o freelancer cancelar, o app avisa você na hora por notificação, e você pode reabrir a vaga de novo. Cancelamentos e faltas contam nas métricas do freelancer dos últimos 3 meses: influenciam as tags dele e, se forem frequentes, aparecem no perfil. Isso ajuda você e as outras empresas a escolherem melhor.' },
      { q: 'Como é feito o pagamento do freelancer?', a: 'Direto entre o seu negócio e o freelancer, fora do app. O valor do turno fica claro na vaga desde o início, e os combinados ficam registrados no chat.' },
      { q: 'O Freela onTap é responsável pela contratação?', a: 'Não. O Freela onTap é a plataforma que conecta empresas e freelancers: não é parte do acordo de trabalho e não atua como empregador de nenhum dos lados. Condições, valor e forma de pagamento de cada turno são combinados direto entre o seu negócio e o freelancer. Os detalhes estão nos Termos de Uso.' },
      { q: 'Que tipo de negócio pode usar?', a: 'Restaurantes, bares, cafeterias, casas noturnas, eventos, buffets e negócios parecidos de Porto Alegre, Canoas, Viamão, Alvorada e Guaíba.' },
      { q: 'Onde eu baixo o app?', a: 'O Freela onTap: Empresas já tá na App Store, pra iPhone. Procure pelo nome ou toque em "Baixar na App Store" no topo desta página.' },
    ],
    closing: { lead: 'Faltou gente no turno?', highlight: 'O Freela\u00a0onTap ajuda você!' },
  },
}
