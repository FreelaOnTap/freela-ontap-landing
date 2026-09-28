import { SUPPORT_EMAIL } from '../config.ts'

export function Privacidade() {
  return (
    <article className="section-shell prose-page">
      <p className="eyebrow" style={{ color: 'var(--color-link)' }}>
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
        Política de Privacidade
      </h1>
      <p className="mt-2 text-sm" style={{ color: 'var(--color-text-tertiary)' }}>
        Última atualização: 28 de setembro de 2026.
      </p>

      <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        <section>
          <p
            className="rounded-[var(--radius-lg)] border p-4 text-sm"
            style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-secondary)' }}
          >
            O FreelaOnTap é o projeto final de um squad da Apple Developer Academy (cohort S25), ainda em fase
            de desenvolvimento. Nesta fase, o tratamento de dados pessoais descrito abaixo é conduzido
            diretamente pela equipe do projeto, sem uma pessoa jurídica formalmente constituída. Assim que
            houver uma entidade responsável, esta política será atualizada com seus dados de identificação.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            1. Quem trata os seus dados
          </h2>
          <p className="mt-2">
            Para os fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), a equipe do FreelaOnTap
            atua como controladora dos dados pessoais coletados por meio deste site e dos aplicativos
            FreelaOnTap Freelancer e FreelaOnTap Business. Você pode falar com a gente pelo e-mail{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--color-link)' }}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            2. Quais dados coletamos
          </h2>
          <p className="mt-2">Dependendo de como você usa o site e os aplicativos, podemos coletar:</p>
          <ul className="mt-2 list-disc pl-6">
            <li>Dados de identificação e contato (nome, e-mail, telefone) fornecidos no cadastro do app.</li>
            <li>Dados de perfil profissional, para freelancers, ou dados da empresa, para estabelecimentos.</li>
            <li>Dados de localização aproximada, para exibir vagas e freelancers próximos.</li>
            <li>Mensagens enviadas voluntariamente para o e-mail de suporte.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            3. Para que usamos esses dados
          </h2>
          <ul className="mt-2 list-disc pl-6">
            <li>Viabilizar o cadastro e a conexão entre freelancers e estabelecimentos.</li>
            <li>Responder dúvidas e solicitações enviadas ao suporte.</li>
            <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
          </ul>
          <p className="mt-2">A base legal é a execução do serviço solicitado por você (art. 7º, V, LGPD) e, quando aplicável, o seu consentimento.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            4. Com quem compartilhamos
          </h2>
          <p className="mt-2">
            Não vendemos dados pessoais. Dados de perfil (freelancer) e de vaga (empresa) são exibidos ao outro
            lado do marketplace na medida necessária para viabilizar a conexão entre as partes. Também podemos
            compartilhar dados com fornecedores de infraestrutura técnica (hospedagem, banco de dados) sob
            obrigação contratual de confidencialidade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            5. Seus direitos
          </h2>
          <p className="mt-2">
            Nos termos do art. 18 da LGPD, você pode solicitar confirmação de tratamento, acesso, correção,
            anonimização, portabilidade ou eliminação dos seus dados, além de revogar o consentimento a
            qualquer momento. Para exercer esses direitos, escreva para{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--color-link)' }}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            6. Retenção
          </h2>
          <p className="mt-2">
            Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas acima ou por prazo
            legal exigido, o que for maior. Ao final, os dados são eliminados ou anonimizados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            7. Alterações desta política
          </h2>
          <p className="mt-2">
            Podemos atualizar esta política conforme o projeto evolui — especialmente ao sair da fase acadêmica
            e formalizar uma pessoa jurídica responsável. A data no topo desta página sempre indica a versão
            mais recente.
          </p>
        </section>
      </div>
    </article>
  )
}
