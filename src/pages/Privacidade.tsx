import type { ReactNode } from 'react'
import {
  InternalLink,
  LegalList,
  LegalNotice,
  LegalPage,
  LegalSection,
  LegalSubheading,
  LegalTable,
  LegalText,
  SupportLink,
} from '../components/LegalDocument.tsx'

const purposes: [string, ...ReactNode[]][] = [
  [
    'Criar e manter a sua conta',
    'Dados do cadastro e de acesso, inclusive o login com a Apple ou o Google',
    'Execução de contrato (art. 7º, V)',
  ],
  [
    'Conectar Freelancers e Estabelecimentos: perfis, vagas, candidaturas, conversas e avaliações',
    'Dados de perfil e de vaga, candidaturas, mensagens e avaliações',
    'Execução de contrato (art. 7º, V)',
  ],
  [
    'Compartilhar com o Estabelecimento os dados do Freelancer aceito em uma vaga',
    'CPF, data de nascimento, telefone, e-mail e endereço',
    'Execução de contrato (art. 7º, V)',
  ],
  [
    'Avisar sobre novas mensagens',
    'Token de notificação do aparelho',
    'Execução de contrato (art. 7º, V)',
  ],
  [
    'Segurança, prevenção a fraudes e abusos, moderação e análise de denúncias',
    'Dados da conta, denúncias e o conteúdo denunciado',
    'Legítimo interesse (art. 7º, IX) e exercício regular de direitos (art. 7º, VI)',
  ],
  [
    'Cumprir obrigações legais e defender direitos em processos',
    'Os dados que a lei ou a autoridade exigirem',
    'Obrigação legal (art. 7º, II) e exercício regular de direitos (art. 7º, VI)',
  ],
  [
    'Promover a inclusão nas vagas afirmativas',
    'Dados de diversidade, que são opcionais',
    'Consentimento específico (art. 11, I)',
  ],
  [
    'Responder ao suporte',
    'Mensagens enviadas ao e-mail de suporte',
    'Legítimo interesse (art. 7º, IX)',
  ],
  [
    'Avisar sobre o lançamento e entrar em contato com quem preencheu o formulário do site',
    'Dados do formulário de interesse',
    'Consentimento (art. 7º, I)',
  ],
  [
    'Entender como o site é usado, para corrigir problemas e melhorá-lo',
    'Dados de navegação do site',
    'Legítimo interesse (art. 7º, IX)',
  ],
]

export function Privacidade() {
  return (
    <LegalPage title="Política de Privacidade" updatedAt="7 de outubro de 2026">
      <LegalNotice>
        O Freela onTap é o projeto final de um squad da Apple Developer Academy (cohort S25), ainda em fase de
        desenvolvimento. Nesta fase, o tratamento de dados pessoais descrito abaixo é conduzido diretamente pela
        equipe do projeto, sem uma pessoa jurídica formalmente constituída. Assim que houver uma entidade
        responsável, esta política será atualizada com seus dados de identificação.
      </LegalNotice>

      <LegalSection title="1. Quem trata os seus dados e como falar com a gente">
        <LegalText>
          Esta política vale para o site e para os aplicativos Freela onTap Freelancer e Freela onTap Business. Para
          os fins da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 — LGPD), a equipe do Freela onTap atua como
          controladora dos dados pessoais coletados por esses canais.
        </LegalText>
        <LegalText>
          O nosso canal de privacidade, que atende titulares, dúvidas e solicitações, é o e-mail <SupportLink />.
          Por ele também recebemos comunicações da Autoridade Nacional de Proteção de Dados (ANPD).
        </LegalText>
        <LegalText>
          Os Estabelecimentos que recebem dados de Freelancers pela Plataforma, como o contato de quem foi aceito
          para um turno, tratam esses dados em nome próprio, para viabilizar a contratação, e respondem por esse uso.
        </LegalText>
      </LegalSection>

      <LegalSection title="2. Quais dados coletamos">
        <LegalSubheading>Cadastro de Freelancer</LegalSubheading>
        <LegalList>
          <li>Nome e sobrenome, CPF, data de nascimento, telefone, e-mail e endereço.</li>
          <li>Foto de perfil, cidade e estado, senioridade e o texto de apresentação.</li>
          <li>Outras informações profissionais que você optar por preencher.</li>
        </LegalList>

        <LegalSubheading>Cadastro de Estabelecimento</LegalSubheading>
        <LegalList>
          <li>Nome fantasia, CNPJ, porte e segmento do negócio.</li>
          <li>Telefone e e-mail de contato, endereço, descrição, logotipo e foto da fachada.</li>
          <li>E-mail de acesso da pessoa que administra a conta.</li>
        </LegalList>

        <LegalSubheading>Uso da Plataforma</LegalSubheading>
        <LegalList>
          <li>Vagas publicadas, candidaturas e o histórico de cada candidatura.</li>
          <li>Mensagens trocadas no chat dos aplicativos.</li>
          <li>Avaliações dadas e recebidas.</li>
          <li>Denúncias enviadas, com o motivo e a descrição que você escrever.</li>
        </LegalList>

        <LegalSubheading>Aparelho, notificações e localização</LegalSubheading>
        <LegalList>
          <li>
            O token de notificação push do aparelho, o identificador do aplicativo e o ambiente de envio, para
            entregar avisos de novas mensagens. O texto da mensagem não vai na notificação.
          </li>
          <li>
            A localização do aparelho, se você permitir, para ordenar as vagas por proximidade e filtrar por
            distância. Esse cálculo é feito no próprio aparelho: não enviamos nem guardamos a sua localização nos
            nossos servidores. Para medir a distância, o endereço do estabelecimento é convertido em coordenadas
            pelo serviço de geocodificação da Apple.
          </li>
        </LegalList>

        <LegalSubheading>Site</LegalSubheading>
        <LegalList>
          <li>Mensagens que você enviar voluntariamente para o e-mail de suporte.</li>
          <li>
            Dados do formulário de interesse: nome, WhatsApp, e-mail (opcional), cidade e, conforme o caso, a sua
            função e o sistema do seu celular, ou os dados do seu estabelecimento. Junto com eles, registramos a data
            do envio e a origem da visita, por exemplo a campanha ou o QR code pelo qual você chegou ao site.
          </li>
          <li>
            Dados de navegação coletados pelo Microsoft Clarity: páginas visitadas, cliques, rolagem, tipo de
            dispositivo e navegador, e a sua região aproximada. O Clarity funciona aqui sem cookies, então cada
            visita é tratada de forma isolada, sem ligar uma visita a outra. O conteúdo digitado no formulário de
            interesse é mascarado e não é gravado.
          </li>
        </LegalList>

        <LegalSubheading>Entrar com a Apple ou com o Google</LegalSubheading>
        <LegalText>
          Se você usar uma dessas opções no aplicativo, recebemos do Google ou da Apple apenas o seu nome, o seu
          e-mail, a sua foto de perfil (no caso do Google) e um identificador da conta. Usamos esses dados somente
          para criar a sua conta e identificar você no Freela onTap. Você pode remover o acesso do Freela onTap a
          qualquer momento nas configurações da sua conta Google ou Apple.
        </LegalText>
      </LegalSection>

      <LegalSection title="3. Dados pessoais sensíveis (opcionais)">
        <LegalText>
          No cadastro de Freelancer, na etapa &ldquo;Diversidade (opcional)&rdquo;, você pode informar gênero,
          orientação sexual, deficiência e cor ou raça. São dados pessoais sensíveis (art. 11 da LGPD), e só os
          tratamos com o seu consentimento específico, dado ao preencher essa etapa.
        </LegalText>
        <LegalList>
          <li>
            <strong>Para quê:</strong> promover a inclusão nas oportunidades afirmativas divulgadas no Freela onTap.
          </li>
          <li>
            <strong>Quem vê:</strong> esses dados não aparecem no seu perfil público e o aplicativo não os mostra a
            Estabelecimentos.
          </li>
          <li>
            <strong>Seu controle:</strong> você pode deixar em branco, alterar ou remover o que informou, e revogar o
            consentimento a qualquer momento pelo e-mail <SupportLink />. Não informar esses dados não afeta o uso
            da Plataforma.
          </li>
          <li>Se passarmos a usá-los para outra finalidade, pediremos um novo consentimento.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="4. Para que usamos os dados e em que base legal">
        <LegalText>
          Usamos os dados apenas para as finalidades abaixo. Não vendemos dados pessoais nem os usamos para
          publicidade.
        </LegalText>
        <LegalTable columns={['Finalidade', 'Dados', 'Base legal (LGPD)']} rows={purposes} />
      </LegalSection>

      <LegalSection title="5. O que outros Usuários podem ver">
        <LegalList>
          <li>
            <strong>Perfil de Freelancer:</strong> nome, foto, senioridade, cidade e estado, texto de apresentação,
            data de entrada e avaliações ficam visíveis a outros usuários que tenham conta nos aplicativos.
          </li>
          <li>
            <strong>Perfil de Estabelecimento e vagas:</strong> nome fantasia, endereço, contato, descrição, imagens
            e vagas ativas ficam visíveis a usuários que tenham conta nos aplicativos.
          </li>
          <li>
            <strong>Dados restritos do Freelancer:</strong> CPF, data de nascimento, telefone, e-mail e endereço só
            ficam disponíveis ao Estabelecimento da vaga para a qual você foi aceito, enquanto a sua conta estiver
            ativa.
          </li>
          <li>
            <strong>Mensagens:</strong> só quem participa da conversa as lê. Quando uma conversa é denunciada, a
            equipe pode ler o conteúdo necessário para analisar a denúncia.
          </li>
          <li>
            <strong>Denúncias:</strong> não são exibidas à pessoa denunciada.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="6. Com quem compartilhamos">
        <LegalText>
          Para operar a Plataforma, usamos fornecedores que tratam dados em nosso nome, sob obrigação de
          confidencialidade:
        </LegalText>
        <LegalList>
          <li>
            <strong>Supabase:</strong> banco de dados, autenticação, armazenamento de arquivos e funções de servidor
            dos aplicativos.
          </li>
          <li>
            <strong>Apple:</strong> login com a Apple, serviço de notificações push e geocodificação de endereços.
          </li>
          <li>
            <strong>Google:</strong> login com o Google e a planilha onde fica a lista de interesse do site.
          </li>
          <li>
            <strong>Vercel:</strong> hospedagem do site.
          </li>
          <li>
            <strong>Microsoft:</strong> análise de navegação do site, pelo Clarity.
          </li>
        </LegalList>
        <LegalText>
          Também podemos compartilhar dados para cumprir obrigação legal ou ordem de autoridade, para nos defender em
          processos e, caso o projeto passe a ser operado por uma pessoa jurídica, com ela, que assumirá estas
          mesmas proteções.
        </LegalText>
      </LegalSection>

      <LegalSection title="7. Transferência internacional">
        <LegalText>
          Alguns desses fornecedores armazenam ou processam dados em outros países. Quando isso ocorre, nos apoiamos
          nas garantias contratuais dos fornecedores e nos mecanismos previstos no art. 33 da LGPD.
        </LegalText>
      </LegalSection>

      <LegalSection title="8. Por quanto tempo guardamos os dados e o que acontece ao encerrar a conta">
        <LegalList>
          <li>
            <strong>Conta ativa:</strong> guardamos os dados enquanto a conta existir e pelo tempo necessário para as
            finalidades da seção 4.
          </li>
          <li>
            <strong>Ao desativar a conta pelo aplicativo:</strong> encerramos as suas sessões, deixamos de enviar
            notificações ao seu aparelho e os Estabelecimentos perdem o acesso aos seus dados restritos.
          </li>
          <li>
            <strong>O que mantemos depois disso:</strong> o histórico necessário, como candidaturas, conversas,
            avaliações, denúncias e arquivos já enviados, pelo tempo preciso para prevenir fraudes e abusos, cumprir
            obrigações legais e exercer direitos em processos (art. 16 da LGPD).
          </li>
          <li>
            <strong>Pedido de eliminação:</strong> você pode pedir a eliminação dos seus dados pelo e-mail{' '}
            <SupportLink />. Eliminamos ou anonimizamos o que não precisarmos manter pelos motivos acima e, se
            mantivermos algo, explicamos o motivo.
          </li>
          <li>
            <strong>Formulário de interesse do site:</strong> os dados ficam guardados até você pedir a exclusão.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="9. Como protegemos os dados">
        <LegalText>
          Adotamos medidas técnicas e organizacionais para proteger os dados: comunicação criptografada (HTTPS),
          regras de acesso que limitam cada conta ao que a sua função permite, acesso restrito da equipe e
          notificações push sem o texto das mensagens. Nenhum sistema é totalmente seguro. Se ocorrer um incidente
          que possa causar risco ou dano relevante, comunicaremos os titulares afetados e a ANPD, como determina o
          art. 48 da LGPD.
        </LegalText>
      </LegalSection>

      <LegalSection title="10. Seus direitos">
        <LegalText>Nos termos do art. 18 da LGPD, você pode solicitar a qualquer momento:</LegalText>
        <LegalList>
          <li>confirmação de que tratamos os seus dados e acesso a eles;</li>
          <li>correção de dados incompletos, inexatos ou desatualizados;</li>
          <li>anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei;</li>
          <li>portabilidade dos dados;</li>
          <li>eliminação dos dados tratados com base no seu consentimento;</li>
          <li>informação sobre com quem compartilhamos os dados;</li>
          <li>informação sobre a possibilidade de não consentir e as consequências da recusa;</li>
          <li>revogação do consentimento;</li>
          <li>oposição a um tratamento feito sem consentimento, se houver descumprimento da lei.</li>
        </LegalList>
        <LegalText>
          Para exercer esses direitos, escreva para <SupportLink />. Podemos pedir informações para confirmar a sua
          identidade. Respondemos em até 15 dias. Parte dos dados você mesmo corrige no aplicativo, ao editar o
          perfil. Se a resposta não resolver, você também pode apresentar reclamação à ANPD.
        </LegalText>
      </LegalSection>

      <LegalSection title="11. Menores de idade">
        <LegalText>
          O Freela onTap é destinado a maiores de 18 anos, e o cadastro de Freelancer exige data de nascimento
          compatível com essa idade. Se identificarmos dados de uma pessoa menor de idade, encerraremos a conta e
          tomaremos as providências para eliminar esses dados.
        </LegalText>
      </LegalSection>

      <LegalSection title="12. Cookies e rastreamento">
        <LegalText>
          Os aplicativos não rastreiam você entre aplicativos e sites de terceiros nem exibem publicidade. O site
          usa o Microsoft Clarity sem cookies, como descrito na seção 2, e não usa cookies de publicidade.
        </LegalText>
      </LegalSection>

      <LegalSection title="13. Alterações desta política">
        <LegalText>
          Podemos atualizar esta política conforme o projeto evolui, especialmente ao sair da fase acadêmica e
          formalizar uma pessoa jurídica responsável. A data no topo desta página indica a versão mais recente.
          Quando a mudança for relevante, avisaremos pelo aplicativo, por e-mail ou pelo site.
        </LegalText>
      </LegalSection>

      <LegalSection title="14. Contato">
        <LegalText>
          Dúvidas, solicitações e reclamações sobre privacidade: <SupportLink />. Os{' '}
          <InternalLink to="/termos">Termos de Uso</InternalLink> descrevem as regras gerais de uso da Plataforma.
        </LegalText>
      </LegalSection>
    </LegalPage>
  )
}
