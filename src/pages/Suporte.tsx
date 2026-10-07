import { SUPPORT_EMAIL, mailtoLink } from '../config.ts'

const FAQ = [
  {
    question: 'Como funciona o cadastro?',
    answer:
      'O cadastro é feito direto pelo aplicativo — um fluxo pra freelancers e outro pra empresas. O Freela onTap ainda está em desenvolvimento; assim que o app for lançado, o passo a passo aparece aqui.',
  },
  {
    question: 'Preciso de experiência prévia pra ser freelancer?',
    answer:
      'Cada vaga lista seus próprios pré-requisitos. Muitas vagas de turno curto não exigem experiência formal — o estabelecimento define isso na publicação.',
  },
  {
    question: 'Em quais cidades o Freela onTap funciona?',
    answer: 'O lançamento é focado em Porto Alegre/RS. Expandir pra outras cidades é uma decisão futura do squad.',
  },
  {
    question: 'Como denuncio um usuário ou um conteúdo ofensivo?',
    answer:
      'No aplicativo, abra o perfil ou a conversa e escolha Denunciar. Você também pode escrever pro e-mail de suporte. Analisamos cada denúncia em até 24 horas e removemos o que violar os Termos de Uso.',
  },
  {
    question: 'Como bloqueio um usuário?',
    answer:
      'No aplicativo, abra o perfil ou a conversa e escolha Bloquear. Quem você bloqueia não consegue te enviar mensagens nem interagir com você, e você desbloqueia quando quiser nos Ajustes.',
  },
  {
    question: 'Como reporto um problema ou bug?',
    answer: 'Escreva pra gente pelo e-mail de suporte descrevendo o que aconteceu — print ajuda bastante.',
  },
]

export function Suporte() {
  return (
    <article className="scope-business section-shell">
      <p className="eyebrow" style={{ color: 'var(--color-link)' }}>
        Suporte
      </p>
      <h1 className="mt-3 text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
        Precisa de ajuda?
      </h1>
      <p className="mt-4 max-w-xl text-lg" style={{ color: 'var(--color-text-secondary)' }}>
        Fale direto com a equipe do Freela onTap. Respondemos por e-mail.
      </p>

      <a href={mailtoLink('Suporte Freela onTap')} className="btn-primary mt-6">
        Escrever para {SUPPORT_EMAIL}
      </a>

      <div className="mt-14">
        <h2 className="text-2xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
          Perguntas frequentes
        </h2>
        <div className="mt-6 flex flex-col gap-4">
          {FAQ.map((item) => (
            <div key={item.question} className="rounded-[var(--radius-lg)] p-6" style={{ background: 'var(--color-surface)' }}>
              <p className="font-semibold" style={{ color: 'var(--color-text-primary)' }}>
                {item.question}
              </p>
              <p className="mt-2 text-sm" style={{ color: 'var(--color-text-secondary)' }}>
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}
