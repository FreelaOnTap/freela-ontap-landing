import {
  InternalLink,
  LegalList,
  LegalNotice,
  LegalPage,
  LegalSection,
  LegalSubheading,
  LegalText,
  SupportLink,
} from '../components/LegalDocument.tsx'

export function Termos() {
  return (
    <LegalPage title="Termos de Uso" updatedAt="7 de outubro de 2026">
      <LegalNotice>
        O Freela onTap é o projeto final de um squad da Apple Developer Academy (cohort S25), ainda em fase de
        desenvolvimento. Estes termos descrevem as regras de uso do site e dos aplicativos Freela onTap Freelancer
        e Freela onTap Business enquanto o projeto está nessa fase.
      </LegalNotice>

      <LegalSection title="1. Aceitação e definições">
        <LegalText>
          Ao criar uma conta ou usar o site e os aplicativos Freela onTap, você declara que leu e concorda com
          estes Termos de Uso e com a <InternalLink to="/privacidade">Política de Privacidade</InternalLink>. Se
          não concordar, não use a plataforma.
        </LegalText>
        <LegalText>Neste documento:</LegalText>
        <LegalList>
          <li>
            <strong>Plataforma</strong> é o site e os aplicativos Freela onTap Freelancer e Freela onTap Business.
          </li>
          <li>
            <strong>Freelancer</strong> é a pessoa física que usa a Plataforma para encontrar e se candidatar a
            turnos de trabalho.
          </li>
          <li>
            <strong>Estabelecimento</strong> é o bar, restaurante, hotel, organizador de evento ou outro negócio de
            hospitalidade que usa a Plataforma para publicar vagas.
          </li>
          <li>
            <strong>Usuário</strong> é o Freelancer ou o Estabelecimento.
          </li>
          <li>
            <strong>Vaga</strong> é a oferta de um turno de trabalho publicada por um Estabelecimento.
          </li>
          <li>
            <strong>Conteúdo</strong> é qualquer texto, foto, mensagem, avaliação, descrição de vaga ou outra
            informação que o Usuário publica ou envia pela Plataforma.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="2. O que é o Freela onTap">
        <LegalText>
          O Freela onTap é um marketplace de dois lados que conecta freelancers a estabelecimentos de hospitalidade
          em Porto Alegre/RS para turnos de trabalho de curta duração. Atuamos como intermediadora: oferecemos as
          ferramentas de perfil, vaga, candidatura, conversa e avaliação. Não somos empregadora, contratante nem
          agência de empregos, não fazemos parte do acordo firmado entre Freelancer e Estabelecimento e não
          garantimos que um Freelancer será contratado nem que um Estabelecimento encontrará candidatos.
        </LegalText>
        <LegalList>
          <li>
            Função, data, horário, local, remuneração e forma de pagamento do turno são combinados diretamente
            entre as partes. O Freela onTap não processa pagamentos.
          </li>
          <li>
            Cada parte é responsável por cumprir a legislação aplicável à contratação, inclusive as obrigações
            trabalhistas, previdenciárias, tributárias e de segurança, conforme a natureza da relação que
            estabelecerem entre si.
          </li>
          <li>
            Recomendamos que as partes confirmem por escrito os detalhes combinados antes do turno, por exemplo
            pelo chat do aplicativo.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="3. Elegibilidade e conta">
        <LegalList>
          <li>
            O uso da Plataforma é permitido apenas a maiores de 18 anos e juridicamente capazes. O cadastro de
            Freelancer exige a data de nascimento e não aceita menores de idade.
          </li>
          <li>
            Para cadastrar um Estabelecimento, é preciso ter um CNPJ e poderes para representar o negócio.
          </li>
          <li>
            As informações do cadastro devem ser verdadeiras, completas e mantidas atualizadas. É proibido usar
            CPF ou CNPJ de outra pessoa ou se passar por outra pessoa ou negócio.
          </li>
          <li>Cada pessoa e cada Estabelecimento pode ter uma conta. A conta é pessoal e não pode ser vendida nem transferida.</li>
          <li>
            Você é responsável pela segurança do seu acesso e por tudo o que acontece na sua conta. Se perceber uso
            não autorizado, avise-nos em <SupportLink />.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="4. Responsabilidades dos Usuários">
        <LegalSubheading>Freelancers</LegalSubheading>
        <LegalList>
          <li>Manter o perfil verdadeiro, sem declarar experiência ou qualificação que não tenha.</li>
          <li>
            Comparecer aos turnos aceitos no horário combinado ou, se não puder, avisar o Estabelecimento com a
            maior antecedência possível. Faltas repetidas sem aviso podem levar à suspensão da conta.
          </li>
          <li>Respeitar as regras do Estabelecimento informadas na Vaga, como código de vestimenta.</li>
        </LegalList>
        <LegalSubheading>Estabelecimentos</LegalSubheading>
        <LegalList>
          <li>
            Publicar apenas Vagas reais, com função, horário, local, remuneração e requisitos corretos, e honrar o
            que foi combinado.
          </li>
          <li>Tratar os Freelancers com respeito, sem discriminação, e oferecer condições seguras de trabalho.</li>
          <li>
            Usar os dados pessoais de Freelancers recebidos pela Plataforma, como CPF e contato, somente para
            viabilizar o turno e cumprir as obrigações legais da contratação. Esses dados não podem ser repassados
            a terceiros nem usados para outras finalidades.
          </li>
        </LegalList>
        <LegalSubheading>Todos os Usuários</LegalSubheading>
        <LegalList>
          <li>É proibido usar a Plataforma para fins ilegais, discriminatórios ou que violem direitos de terceiros.</li>
          <li>
            É proibido contornar mecanismos de segurança, coletar dados de outros Usuários de forma automatizada ou
            usar a Plataforma para captar pessoas para outros serviços.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="5. Conteúdo e conduta">
        <LegalSubheading>Seu Conteúdo</LegalSubheading>
        <LegalText>
          Você é responsável por tudo o que publica ou envia e declara ter o direito de fazê-lo. O Conteúdo
          continua sendo seu. Ao publicá-lo, você nos concede uma licença gratuita, não exclusiva e limitada ao
          necessário para hospedar, exibir e transmitir esse Conteúdo aos outros Usuários dentro da Plataforma,
          enquanto ele estiver disponível.
        </LegalText>

        <LegalSubheading>Tolerância zero</LegalSubheading>
        <LegalText>
          O Freela onTap tem tolerância zero com conteúdo ofensivo e com usuários abusivos. É proibido publicar ou
          enviar:
        </LegalText>
        <LegalList>
          <li>assédio, ameaças, intimidação ou bullying;</li>
          <li>
            discriminação por origem, raça, gênero, orientação sexual, religião, deficiência ou qualquer outra
            característica;
          </li>
          <li>conteúdo sexual, pornográfico ou violento;</li>
          <li>perfis falsos, golpes, spam ou conteúdo que viole direitos de terceiros;</li>
          <li>dados pessoais de outras pessoas sem autorização;</li>
          <li>ofertas de trabalho ilegais ou que exponham o Freelancer a risco.</li>
        </LegalList>

        <LegalSubheading>Avaliações</LegalSubheading>
        <LegalText>
          Avaliações devem refletir a sua experiência real em um turno concluído. É proibido publicar avaliações
          falsas ou ofensivas, trocá-las por vantagens ou usá-las para retaliar outro Usuário.
        </LegalText>

        <LegalSubheading>Bloqueio e denúncia</LegalSubheading>
        <LegalText>
          Você pode bloquear qualquer usuário pelo perfil ou pela conversa, na opção Bloquear. Enquanto o bloqueio
          estiver ativo, essa pessoa não consegue te enviar mensagens, se candidatar às suas vagas nem te
          contratar, e o perfil dela deixa de aparecer para você. Os bloqueios ficam listados nos Ajustes do
          aplicativo, onde você pode desbloquear quando quiser.
        </LegalText>
        <LegalText>
          Qualquer usuário pode denunciar um perfil ou uma conversa dentro do aplicativo, pela opção Denunciar.
          Também é possível escrever para <SupportLink />. A denúncia não é exibida à pessoa denunciada. Ao
          analisá-la, podemos acessar o conteúdo denunciado e o contexto necessário, como as mensagens da conversa.
        </LegalText>
        <LegalText>
          Analisamos cada denúncia em até 24 horas: o conteúdo que violar estes termos é removido e a conta
          responsável pode ser suspensa ou encerrada, sem aviso prévio. Usar a denúncia de forma abusiva ou de má-fé
          também viola estes termos.
        </LegalText>
      </LegalSection>

      <LegalSection title="6. Suspensão e encerramento">
        <LegalList>
          <li>
            Você pode encerrar a sua conta a qualquer momento, pelo aplicativo (em Configurações, na opção Desativar
            conta) ou pelo e-mail <SupportLink />.
          </li>
          <li>
            Podemos suspender ou encerrar uma conta, de forma temporária ou definitiva, se houver violação destes
            termos ou da lei, fraude, uso abusivo ou risco à segurança de outros Usuários. Sempre que possível,
            informamos o motivo; em casos graves, a medida pode ser imediata e sem aviso prévio.
          </li>
          <li>
            Com a conta encerrada, você perde o acesso a ela e deixamos de enviar notificações ao seu aparelho. O
            que acontece com os seus dados depois disso está descrito na{' '}
            <InternalLink to="/privacidade">Política de Privacidade</InternalLink>.
          </li>
          <li>O encerramento não afasta as obrigações já assumidas com outros Usuários.</li>
        </LegalList>
      </LegalSection>

      <LegalSection title="7. Gratuidade, disponibilidade e mudanças no serviço">
        <LegalList>
          <li>
            O Freela onTap é gratuito para Freelancers. Para Estabelecimentos, o uso é gratuito durante o
            lançamento. Se passarmos a cobrar por algum recurso, avisaremos com antecedência razoável e a cobrança
            dependerá da sua concordância.
          </li>
          <li>
            A Plataforma pode ficar indisponível por manutenção, falhas ou motivos fora do nosso controle. Podemos
            alterar, suspender ou descontinuar recursos e, quando a mudança afetar o seu uso, procuraremos avisar.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="8. Propriedade intelectual">
        <LegalText>
          A marca, o design e o código do Freela onTap pertencem ao squad responsável pelo projeto. O uso da
          Plataforma não transfere a você qualquer direito de propriedade intelectual. É proibido copiar, modificar,
          fazer engenharia reversa ou explorar comercialmente a Plataforma, exceto quando a lei permitir.
        </LegalText>
      </LegalSection>

      <LegalSection title="9. Privacidade e dados pessoais">
        <LegalText>
          O tratamento de dados pessoais pelo Freela onTap é descrito na{' '}
          <InternalLink to="/privacidade">Política de Privacidade</InternalLink>. Os Estabelecimentos que recebem
          dados de Freelancers pela Plataforma tratam esses dados em nome próprio e devem cumprir a Lei Geral de
          Proteção de Dados (Lei nº 13.709/2018).
        </LegalText>
      </LegalSection>

      <LegalSection title="10. Limitação de responsabilidade">
        <LegalText>
          Por ser um projeto em fase de desenvolvimento acadêmico, o Freela onTap é oferecido "como está". Fazemos o
          possível para manter o serviço disponível e seguro, mas não garantimos operação ininterrupta.
        </LegalText>
        <LegalText>
          Na extensão permitida pela lei, não nos responsabilizamos por atos, omissões ou Conteúdo dos Usuários, pela
          veracidade das informações de perfis e Vagas, por faltas, cancelamentos ou descumprimento do combinado
          entre as partes, por pagamentos entre elas, por danos ocorridos durante o turno ou pela indisponibilidade
          da Plataforma. Não garantimos a identidade nem a idoneidade de nenhum Usuário.
        </LegalText>
        <LegalText>
          Nada nestes termos exclui ou limita responsabilidades que a lei não permite excluir ou limitar, nem os seus
          direitos como titular de dados pessoais.
        </LegalText>
      </LegalSection>

      <LegalSection title="11. Alterações destes termos">
        <LegalText>
          Podemos atualizar estes termos conforme o projeto evolui. A data no topo desta página indica a versão mais
          recente. Quando a mudança for relevante, avisaremos pelo aplicativo, por e-mail ou pelo site, com
          antecedência razoável. Se você continuar usando a Plataforma depois da data de vigência, entendemos que
          concorda com a nova versão; se não concordar, pode encerrar a conta.
        </LegalText>
      </LegalSection>

      <LegalSection title="12. Disposições gerais">
        <LegalList>
          <li>Estes termos e a Política de Privacidade formam o acordo completo entre você e o Freela onTap sobre o uso da Plataforma.</li>
          <li>Se alguma cláusula for considerada inválida, as demais continuam valendo.</li>
          <li>Deixar de exigir o cumprimento de uma cláusula não significa abrir mão dela.</li>
          <li>
            Podemos transferir a operação do Freela onTap, e estes termos, a uma pessoa jurídica que venha a ser
            constituída para esse fim, mantendo as proteções previstas na Política de Privacidade. Você não pode
            ceder a sua posição sem o nosso consentimento.
          </li>
        </LegalList>
      </LegalSection>

      <LegalSection title="13. Legislação e foro">
        <LegalText>
          Estes termos são regidos pelas leis brasileiras. Fica eleito o foro da Comarca de Porto Alegre/RS para
          dirimir eventuais controvérsias, ressalvado o direito do Usuário que seja consumidor de ajuizar a ação no
          foro do seu domicílio.
        </LegalText>
      </LegalSection>

      <LegalSection title="14. Contato">
        <LegalText>
          Dúvidas sobre estes termos, denúncias e solicitações podem ser enviadas para <SupportLink />.
        </LegalText>
      </LegalSection>
    </LegalPage>
  )
}
