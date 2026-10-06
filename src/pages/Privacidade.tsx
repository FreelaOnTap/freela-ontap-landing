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
        Última atualização: 6 de outubro de 2026.
      </p>

      <div className="mt-10 flex flex-col gap-8 text-base leading-relaxed" style={{ color: 'var(--color-text-secondary)' }}>
        <section>
          <p
            className="rounded-[var(--radius-lg)] border p-4 text-sm"
            style={{ borderColor: 'var(--color-border-default)', color: 'var(--color-text-secondary)' }}
          >
            O Freela onTap é o projeto final de um squad da Apple Developer Academy (cohort S25), ainda em fase
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
            Para os fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), a equipe do Freela onTap
            atua como controladora dos dados pessoais coletados por meio deste site e dos aplicativos
            Freela onTap Freelancer e Freela onTap Business. Você pode falar com a gente pelo e-mail{' '}
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
            <li>
              Dados enviados pelo formulário de interesse deste site: nome, WhatsApp, e-mail (opcional), cidade e,
              conforme o caso, a sua função e o sistema do seu celular, ou os dados do seu estabelecimento. Junto
              com eles, registramos a data do envio e a origem da visita (por exemplo, a campanha ou o QR code
              pelo qual você chegou ao site).
            </li>
            <li>
              Dados de navegação neste site, coletados pelo Microsoft Clarity: páginas visitadas, cliques,
              rolagem, tipo de dispositivo e navegador, e a sua região aproximada. O Clarity funciona aqui sem
              cookies, então cada visita é tratada de forma isolada, sem ligar uma visita a outra. O conteúdo
              digitado no formulário de interesse é mascarado e não é gravado.
            </li>
          </ul>
          <p className="mt-2">
            <strong>Entrar com Google ou com a Apple.</strong> Se você usar uma dessas opções no app, recebemos
            do Google ou da Apple apenas o seu nome, o seu e-mail, a sua foto de perfil (no caso do Google) e um
            identificador da conta. Usamos esses dados somente para criar a sua conta e identificar você no
            Freela onTap. Não os vendemos, não os usamos para publicidade e não os compartilhamos fora do que
            esta política descreve. Você pode remover o acesso do Freela onTap a qualquer momento nas
            configurações da sua conta Google ou Apple, e pedir a eliminação dos dados pelo e-mail de suporte.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            3. Para que usamos esses dados
          </h2>
          <ul className="mt-2 list-disc pl-6">
            <li>Viabilizar o cadastro e a conexão entre freelancers e estabelecimentos.</li>
            <li>Responder dúvidas e solicitações enviadas ao suporte.</li>
            <li>
              Avisar sobre o lançamento dos apps e entrar em contato, por WhatsApp ou e-mail, com quem se
              cadastrou no formulário de interesse.
            </li>
            <li>Entender como as pessoas usam este site, para corrigir problemas e melhorar a experiência.</li>
            <li>Cumprir obrigações legais e regulatórias aplicáveis.</li>
          </ul>
          <p className="mt-2">
            A base legal é a execução do serviço solicitado por você (art. 7º, V, LGPD) e, para o formulário de
            interesse, o seu consentimento (art. 7º, I, LGPD), que pode ser revogado a qualquer momento. A análise de
            navegação se apoia no legítimo interesse de melhorar o site (art. 7º, IX, LGPD), sem cookies e sem
            identificar você.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            4. Com quem compartilhamos
          </h2>
          <p className="mt-2">
            Não vendemos dados pessoais. Dados de perfil (freelancer) e de vaga (empresa) são exibidos ao outro
            lado do marketplace na medida necessária para viabilizar a conexão entre as partes. Também podemos
            compartilhar dados com fornecedores de infraestrutura técnica (hospedagem, banco de dados) sob
            obrigação contratual de confidencialidade. Esses fornecedores (como Supabase, Vercel, Google, onde fica
            a lista de interesse, e Microsoft, pelo Clarity) podem
            armazenar dados em servidores fora do Brasil, com as salvaguardas previstas na LGPD.
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
            legal exigido, o que for maior. Ao final, os dados são eliminados ou anonimizados. Os dados do
            formulário de interesse ficam guardados até você pedir a exclusão pelo e-mail de suporte.
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
