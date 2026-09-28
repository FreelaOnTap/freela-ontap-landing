import { SUPPORT_EMAIL } from '../config.ts'

export function Termos() {
  return (
    <article className="section-shell prose-page">
      <p className="eyebrow" style={{ color: 'var(--color-link)' }}>
        Legal
      </p>
      <h1 className="mt-3 text-4xl font-bold" style={{ color: 'var(--color-text-primary)' }}>
        Termos de Uso
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
            de desenvolvimento. Estes termos descrevem as regras de uso do site e dos aplicativos FreelaOnTap
            Freelancer e FreelaOnTap Business enquanto o projeto está nessa fase.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            1. Aceitação
          </h2>
          <p className="mt-2">
            Ao criar uma conta ou usar o site e os aplicativos FreelaOnTap, você concorda com estes Termos de
            Uso e com a nossa Política de Privacidade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            2. O que é o FreelaOnTap
          </h2>
          <p className="mt-2">
            O FreelaOnTap é um marketplace de dois lados que conecta freelancers a estabelecimentos de
            hospitalidade (bares, restaurantes, hotéis e eventos) em Porto Alegre/RS para turnos de trabalho de
            curta duração. O FreelaOnTap disponibiliza a plataforma de conexão — não é parte do acordo de
            trabalho firmado entre freelancer e estabelecimento, e não atua como empregador de nenhuma das
            partes.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            3. Cadastro e responsabilidades
          </h2>
          <ul className="mt-2 list-disc pl-6">
            <li>Você é responsável por manter suas informações de cadastro corretas e atualizadas.</li>
            <li>Você é responsável pela veracidade das informações fornecidas na vaga (empresa) ou no perfil (freelancer).</li>
            <li>Condições de trabalho, remuneração e forma de pagamento do turno são combinadas diretamente entre freelancer e estabelecimento.</li>
            <li>É proibido usar a plataforma para fins ilegais, discriminatórios ou que violem direitos de terceiros.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            4. Propriedade intelectual
          </h2>
          <p className="mt-2">
            A marca, o design e o código do FreelaOnTap pertencem ao squad responsável pelo projeto. O uso do
            site e dos aplicativos não transfere qualquer direito de propriedade intelectual a você.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            5. Limitação de responsabilidade
          </h2>
          <p className="mt-2">
            Por ser um projeto em fase de desenvolvimento acadêmico, o FreelaOnTap é oferecido "como está".
            Fazemos o possível para manter o serviço disponível e confiável, mas não garantimos operação
            ininterrupta nem nos responsabilizamos por prejuízos decorrentes do acordo de trabalho firmado
            entre freelancer e estabelecimento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            6. Alterações destes termos
          </h2>
          <p className="mt-2">
            Podemos atualizar estes termos conforme o projeto evolui. A data no topo desta página sempre indica
            a versão mais recente.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            7. Legislação e foro
          </h2>
          <p className="mt-2">
            Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de Porto Alegre/RS
            para dirimir eventuais controvérsias.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold" style={{ color: 'var(--color-text-primary)' }}>
            8. Contato
          </h2>
          <p className="mt-2">
            Dúvidas sobre estes termos podem ser enviadas para{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--color-link)' }}>
              {SUPPORT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  )
}
