<script setup lang="ts">
import CalloutComponent from '../CalloutComponent/CalloutComponent.vue';
import ExampleSignList from '../ExampleSign/ExampleSignList.vue';
import SignComponent from '../SignComponent/SignComponent.vue';

const HEADER_OFFSET = 88;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - HEADER_OFFSET - 20;

  window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
};
</script>

<template>
  <main class="main">
    <section>
      <SignComponent id="titulo" tag="h1">MIS: o Método de Inspeção Semiótica</SignComponent>
      <SignComponent id="subtitulo" tag="p" class="subtitle">Um guia sobre o método e como aplicá-lo.</SignComponent>

      <hr>
    </section>

    <section id="introducao">
      <span class="section-title">Introdução</span>
      <SignComponent id="introducao-titulo" tag="h2">A conversa por trás da interface</SignComponent>
      <SignComponent id="introducao-paragrafo1" tag="p">
        Já parou para pensar que cada clique, cada ícone e cada mensagem em uma interface digital é parte de uma conversa?
      </SignComponent>
      <p>A <strong>Engenharia Semiótica</strong>, proposta por Clarisse Sieckenius de Souza, parte da ideia de que a <strong>Interação Humano-Computador (IHC)</strong> é, na verdade, uma comunicação mediada por computador entre designers e usuários. Nessa "conversa", o próprio sistema atua como um "delegado" ou "preposto" dos seus designers, transmitindo a visão deles sobre quem são os usuários, o que eles precisam fazer e como interagir.</p>
      <p>Essa comunicação sobre a comunicação é o que chamamos de metacomunicação, que pode ser descrita de acordo com o seguinte modelo:</p>
      <blockquote>
        "Esse é o meu entendimento de quem você é, o que eu aprendi que você quer ou precisa fazer, de que formas preferidas e por quê. Este é, portanto, o sistema que eu criei para você, e essa é a forma que você pode ou deve usá-lo para atingir uma série de objetivos dentro desta visão."
      </blockquote>
      <hr>
    </section>

    <section id="linguagem-das-interfaces">
      <span class="section-title">Linguagem das Interfaces</span>
      <h2>Decifrando os signos semióticos</h2>
      <p>No coração da inspeção semiótica está o conceito de signo. Um signo é qualquer coisa que representa algo ou outra coisa em algum aspecto ou capacidade. A mensagem dos designers para os usuários é expressa por meio de signos que pertencem a um ou mais "sistemas de significação", como palavras, imagens, widgets, cores, estruturas de diálogo e layouts gráficos.</p>
      <p>
        "Esse é o meu entendimento de quem você é, o que eu aprendi que você quer ou precisa fazer, de que formas preferidas e por quê. Este é, portanto, o sistema que eu criei para você, e essa é a forma que você pode ou deve usá-lo para atingir uma série de objetivos dentro desta visão."
      </p>
      <p>
        A Engenharia Semiótica classifica os signos em interfaces de sistemas interativos em três tipos principais:
      </p>

      <!-- TODO: adicionar o scroll para a seção -->
      <ul class="card-list">
        <li class="card static">
          <span class="material-symbols-outlined">widgets</span>
          <h3>Estáticos</h3>
          <p>As Instruções Explícitas do Designer</p>
          <button
            class="btn sign-btn"
            @click="scrollToSection('linguagem-signos-estaticos')">
            Ver exemplos
          </button>
        </li>

        <li class="card dynamic">
          <span class="material-symbols-outlined">magic_button</span>
          <h3>Dinâmicos</h3>
          <p>As Instruções Explícitas do Designer</p>
          <button
            class="btn sign-btn"
            @click="scrollToSection('linguagem-signos-dinamicos')" >
            Ver exemplos
          </button>
        </li>

        <li class="card metalinguistic">
          <span class="material-symbols-outlined">info</span>
          <h3>Metalinguísticos</h3>
          <p>As Instruções Explícitas do Designer</p>
          <button
            class="btn sign-btn"
            @click="scrollToSection('linguagem-signos-metalinguisticos')">
            Ver exemplos
          </button>
        </li>
      </ul>

      <h3 id="linguagem-signos-estaticos">Signos Estáticos</h3>
      <p>Signos imóveis e persistentes no design da interface. Seu significado pode ser interpretado independentemente da interação do usuário, expressando o estado do sistema em um dado momento.</p>

      <h4>Onde identificar</h4>
      <ul>
        <li>
          Capturas de tela da interface.
        </li>
        <li>
          Elementos visuais fixos e persistentes.
        </li>
        <li>
          Rótulos de campo (ex: "Nome de Usuário:", "Pesquisar...").
        </li>
        <li>
          Ícones (ex: uma lupa para pesquisa, um ícone de casa para a página inicial).
        </li>
        <li>
          Itens de menu e links de navegação (textos ou ícones imutáveis).
        </li>
        <li>
          Botões em seu estado não clicado (ex: "Enviar", "Adicionar ao Carrinho").
        </li>
        <li>
          Imagens de produtos ou miniaturas.
        </li>
        <li>
          A estrutura geral do layout e a paleta de cores consistentes.
        </li>
      </ul>

      <h4>Exemplos</h4>
      <CalloutComponent message="Os elementos abaixo são, de forma geral, exemplos de signos estáticos." />
      <ExampleSignList type="static" />

      <h3 id="linguagem-signos-dinamicos">Signos Dinâmicos</h3>
      <p>Signos percebidos apenas por meio da interação, expressando o comportamento do sistema e as mudanças temporais em resposta às ações do usuário. Eles demonstram como o sistema reage.</p>

      <h4>Onde identificar</h4>
      <ul>
        <li>Interagindo diretamente com o sistema.</li>
        <li>Observando as mudanças no conteúdo da interface ou no status do sistema em resposta às ações do usuário.</li>
        <li>Gravações em vídeo de interações contínuas.</li>
      </ul>

      <h4>Exemplos</h4>
      <CalloutComponent message="Os elementos abaixo são, de forma geral, exemplos de signos dinâmicos." />
      <ExampleSignList type="dynamic" />

      <h3 id="linguagem-signos-metalinguisticos">Signos Metalinguísticos</h3>
      <p>Signos que se referem a outros signos e os explicam, fornecendo informações explícitas sobre como outros signos podem ser utilizados durante a interação. Eles representam a "voz" direta do designer, instruindo o usuário sobre como usar o sistema.</p>

      <h4>Onde identificar</h4>
      <ul>
        <li>Manuais do usuário e sistemas de ajuda online.</li>
        <li>Seções de Perguntas Frequentes (FAQs).</li>
        <li>
          Tutoriais e guias de início rápido.
        </li>
        <li>
          Mensagens de boas-vindas ou introdução ao sistema.
        </li>
        <li>
          Rótulos de campo que explicam o que deve ser inserido (ex: "Digite seu endereço de e-mail").
        </li>
        <li>
          Instruções passo a passo para realizar tarefas específicas.
        </li>
        <li>
          Dicas contextuais que aparecem durante a interação (ex: "Arraste e solte para organizar").
        </li>
        <li>
          Materiais de marketing ou textos instrucionais presentes na interface.
        </li>
        <li>
          Mensagens de erro e avisos.
        </li>
        <li>
          Tooltips (textos que aparecem ao passar o mouse sobre um elemento).
        </li>
      </ul>

      <h4>Exemplos</h4>
      <CalloutComponent message="Os elementos abaixo são, de forma geral, exemplos de signos metalinguísticos." />
      <ExampleSignList type="metalinguistic" />

      <hr>
    </section>

    <section id="execucao">
      <span class="section-title">Executando o MIS</span>
      <h2>O Método de Inspeção Semiótica</h2>
      <p>O MIS é uma ferramenta de avaliação qualitativa que não requer a participação de usuários reais. Em vez disso, um avaliador especialista inspeciona a interface, atuando como um "advogado do usuário" para identificar problemas de comunicação e oportunidades de melhoria na comunicabilidade do sistema.</p>

      <p>Este é um exemplo de diagrama do processo do Método de Inspeção Semiótica. Ele ilustra as etapas principais do método, desde a preparação até o relato dos resultados. Você pode baixar uma versão em PDF para impressão aqui.</p>

      <!-- TODO: Imagem de diagrama -->

      <h3 id="execucao-aplicando-o-metodo">Aplicando o método</h3>
      <p>O MIS é também um valioso instrumento didático para o ensino de IHC. O MIS é conduzido em quatro etapas distintas:</p>

      <ul class="card-list execution">
        <li class="card basic">
          <span class="material-symbols-outlined">search</span>

          <h3>Preparação</h3>
          <p>Delimitação do escopo da pesquisa</p>
          <button class="btn btn-primary" @click="scrollToSection('execucao-preparacao')">Mais informações</button>
        </li>

        <li class="card basic">
          <span class="material-symbols-outlined">edit</span>
          <h3>Coleta de dados</h3>
          <p>Inspeção dos signos da interface</p>
          <button class="btn btn-primary" @click="scrollToSection('execucao-coleta')">Mais informações</button>
        </li>

        <li class="card basic">
          <span class="material-symbols-outlined">compare_arrows</span>
          <h3>Consolidação</h3>
          <p>Contraste e comparação das metamensagens</p>
          <button class="btn btn-primary" @click="scrollToSection('execucao-consolidacao')">Mais informações</button>
        </li>

        <li class="card basic">
          <span class="material-symbols-outlined">assignment</span>
          <h3>Relato dos resultados</h3>
          <p>Avaliação de comunicabilidade do sistema</p>
          <button class="btn btn-primary" @click="scrollToSection('execucao-relato')">Mais informações</button>
        </li>
      </ul>

      <h3 id="execucao-preparacao">Preparação</h3>
      <p>Esta fase inicial é crucial para definir o escopo e o foco da avaliação, garantindo que a inspeção seja direcionada e eficiente. É o momento de estabelecer a base para a compreensão da metacomunicação do designer.</p>

      <h4>O que deve ser feito</h4>
      <ul>
        <li>
          <strong>Identificar os perfis de usuários:</strong> É fundamental determinar quem são os usuários-alvo do sistema. Isso inclui compreender suas características demográficas, conhecimentos prévios, habilidades, contextos de uso e expectativas. A metamensagem do designer, que será o foco da avaliação, começa com a visão do designer sobre "quem você [usuário] é".
        </li>
        <li>
          <strong>Identificar os objetivos apoiados pelo sistema:</strong> Devem-se definir as metas e tarefas que o sistema foi projetado para ajudar os usuários a alcançar. Compreender esses objetivos é crucial para avaliar se a interface os comunica eficazmente. A metamensagem do designer continua com a sua compreensão de "o que eu entendi que você quer ou precisa fazer".
        </li>
        <li>
          <strong>Definir as partes da interface que serão avaliadas:</strong> Nem sempre é viável inspecionar um sistema inteiro. Portanto, é necessário selecionar as seções ou funcionalidades mais críticas, complexas ou representativas para a avaliação. A inspeção é tipicamente realizada em uma porção amostral do artefato, considerando-se as limitações de custo e tempo.
        </li>
        <li>
          <strong>Escrever cenários de interação para guiar a avaliação:</strong> Devem-se criar narrativas detalhadas que simulem a interação do usuário com o sistema para atingir os objetivos definidos. Esses cenários servirão como um roteiro para a inspeção, garantindo que o avaliador explore caminhos de interação relevantes e consistentes com as expectativas do designer.
        </li>
      </ul>

      <h4>Dicas</h4>
      <ul>
        <li>
          <strong>Imersão no Domínio:</strong> Antes de iniciar a inspeção, dedique tempo para compreender profundamente o domínio de aplicação do sistema e as necessidades reais dos usuários. Essa imersão permite que o avaliador construa uma representação mental do "usuário idealizado" que o designer tinha em mente. Como o método não envolve usuários reais, essa construção da perspectiva do usuário é fundamental para que a análise subsequente seja relevante e focada na eficácia da comunicação do designer para esse público específico.
        </li>
        <li>
          <strong>Cenários Detalhados e Realistas:</strong> Elabore cenários que sejam realistas e abrangentes, cobrindo tanto os fluxos de sucesso quanto possíveis desvios ou situações de erro. Quanto mais detalhado e representativo for o cenário, mais direcionada e eficaz será a inspeção, permitindo que o avaliador simule interações complexas e avalie a comunicabilidade em diversas condições.
        </li>
        <li>
          <strong>Priorização Estratégica:</strong> Ao definir as partes da interface a serem avaliadas, priorize aquelas que são críticas para o sucesso do usuário, que apresentam maior complexidade ou que são conhecidas por causar dificuldades. Essa seleção estratégica maximiza o valor da inspeção, concentrando os esforços nas áreas de maior impacto potencial na comunicabilidade.
        </li>
      </ul>

      <h3 id="execucao-coleta">Coleta de Dados</h3>
      <p>Nesta fase, o avaliador mergulha na interface para identificar e interpretar os signos que compõem a metamensagem do designer. Esta etapa envolve uma análise sistemática de diferentes categorias de signos, cada uma revelando uma faceta da comunicação do sistema.</p>

      <h4>O que deve ser feito</h4>
      <ul>
        <li>
          <strong>Inspecionar a interface simulando a interação descrita pelo cenário de interação:</strong> O avaliador deve navegar pelo sistema, executando as ações e seguindo os fluxos definidos nos cenários de interação previamente elaborados. Essa simulação permite observar como a interface se comporta em situações de uso que o designer previu, testando a coerência da metacomunicação.
        </li>
        <li>
          <strong>Analisar signos metalinguísticos e reconstruir a metamensagem correspondente:</strong> Os signos metalinguísticos são aqueles que explicitamente falam sobre o próprio sistema ou sua interação. Isso inclui documentação online e offline, manuais, mensagens de ajuda, tutoriais, mensagens de erro e qualquer texto que explique o uso do sistema. O objetivo é reproduzir a metacomunicação do designer (referida como 'X' em algumas fontes) conforme transmitida por esses elementos explícitos. Por exemplo, a forma como o sistema se refere a si mesmo ou a certas funcionalidades em sua ajuda online pode indicar a intenção do designer.
        </li>
        <li>
          <strong>Analisar signos estáticos e reconstruir a metamensagem correspondente:</strong> Os signos estáticos são elementos visuais da interface que não mudam com a interação imediata do usuário. Exemplos incluem ícones, botões, menus, rótulos, cores, layouts e a organização espacial dos elementos na tela. O avaliador inspeciona esses elementos para confirmar e elaborar sobre o conteúdo derivado da documentação, buscando identificar como a intenção de design é transmitida visualmente (metacomunicação 'Y'). Um exemplo seria a organização de botões e menus para edição de tabelas em um software, que comunica uma forma preferencial de interação.
        </li>
      </ul>

      <h4>Dicas</h4>
      <ul>
        <li>
          <strong>Registro Detalhado:</strong> Mantenha um registro meticuloso de suas observações. Isso deve incluir capturas de tela, descrições dos signos, o contexto em que foram encontrados e suas primeiras interpretações. Esse registro será fundamental para a fase de consolidação, onde as diferentes camadas da metamensagem serão comparadas.
        </li>
        <li>
          <strong>Abertura à Ambiguidade:</strong> Aborde a inspeção com uma mente aberta para possíveis interpretações alternativas dos signos. O que um designer pretende comunicar pode não ser o que o usuário percebe. A capacidade de identificar essas ambiguidades é um ponto forte do método.
        </li>
        <li>
          <strong>Perspectiva de Advogado do Usuário:</strong> Lembre-se que o avaliador atua como um advogado do usuário. Constantemente, questione-se: "Um usuário plausível conseguiria interpretar este signo ou mensagem de forma diferente? Como? Por quê?". Essa postura crítica ajuda a desvendar falhas de comunicação que poderiam passar despercebidas.
        </li>
      </ul>

      <p>
        A análise sequencial de signos metalinguísticos e estáticos revela que a metacomunicação do designer é uma mensagem multi-camada. Os signos metalinguísticos fornecem a "narrativa" explícita do designer, os signos estáticos oferecem as "pistas visuais" imediatas. Essa abordagem permite um diagnóstico preciso da origem da falha comunicativa, identificando se o problema está na explicação ou na representação visual.
      </p>

      <h3 id="execucao-consolidacao">Consolidação e Interpretação dos Resultados</h3>
      <p>
        Esta fase é o coração analítico do MIS, onde as metamensagens parciais são sintetizadas, e os problemas de comunicabilidade são identificados e julgados. É aqui que o avaliador constrói uma compreensão integrada da metacomunicação do designer.
      </p>

      <h4>O que deve ser feito</h4>
      <ul>
        <li>
          <strong>Analisar signos dinâmicos e reconstruir a metamensagem correspondente:</strong> Os signos dinâmicos são aqueles que expressam o comportamento do sistema em resposta à interação do usuário, a eventos externos ou ao tempo. Exemplos incluem animações, transições de tela, abertura de caixas de diálogo, habilitação/desabilitação de botões, mensagens de feedback e a mudança de estado dos elementos da interface. O avaliador interage com o artefato para derivar interpretações do que o sistema está comunicando através de seu comportamento (metacomunicação 'Z'). Por exemplo, o comportamento de um botão "cancelar" em um diálogo, que pode redefinir parâmetros para valores padrão, ajuda o usuário a interpretar sua função.
        </li>
        <li>
          <strong>Contrastar e comparar as metamensagens reconstruídas (X, Y e Z):</strong> Esta é a etapa mais crítica do método. O avaliador deve comparar as metamensagens derivadas da documentação (X), dos signos estáticos (Y) e dos signos dinâmicos (Z). Embora não se espere que essas mensagens sejam idênticas devido às diferentes capacidades expressivas dos sistemas de significação, elas não devem ser inconsistentes. O objetivo é identificar e rastrear inconsistências, ambiguidades ou contradições que possam levar a rupturas de comunicação para o usuário.
        </li>
        <li>
          <strong>Julgar os problemas de comunicabilidade encontrados:</strong> Com base na comparação e nas inconsistências identificadas, o avaliador formula um julgamento sobre os problemas de comunicabilidade. Isso envolve determinar onde o designer falhou em comunicar sua intenção de forma clara e como essa falha pode afetar a interação do usuário com o sistema. A ruptura de comunicação ocorre quando o usuário não consegue entender a intenção do projetista, o que pode acarretar em dificuldades ou até impossibilidade de interação.
        </li>
      </ul>

      <h4>Dicas</h4>
      <ul>
        <li>
          <strong>Busca Ativa por Inconsistências:</strong> Não espere que as inconsistências apareçam; procure-as ativamente. Questione cada signo e sua interpretação em relação aos outros tipos de signos. A capacidade de explorar intencionalmente significados contraditórios ou ambíguos é fundamental.
        </li>
        <li>
          <strong>Perguntas Guia:</strong> Utilize perguntas para estruturar sua análise, como: "O usuário conseguiria interpretar este signo/mensagem de forma diferente? Como? Por quê?" e "Essa interpretação alternativa ainda seria consistente com a intenção do design?". Essas perguntas ajudam a aprofundar a análise e a identificar as raízes dos problemas de comunicação.
        </li>
        <li>
          <strong>Evidência e Raciocínio:</strong> Baseie seu julgamento em evidências claras dos signos observados e um raciocínio lógico sobre como as inconsistências podem levar a problemas de comunicação. A fundamentação das conclusões é essencial para a credibilidade do relatório.
        </li>
      </ul>

      <p>
        A fase de consolidação e interpretação é onde o MIS transcende a mera identificação de problemas de usabilidade, tornando-se um método de diagnóstico semiótico profundo. Ao contrastar as metamensagens de diferentes tipos de signos, o avaliador não apenas descobre que há um problema, mas diagnostica a raiz semiológica da falha. Ele pode identificar se a intenção do designer está clara na documentação, mas se perde na representação visual (signos estáticos), ou se ambos são claros, mas o comportamento do sistema (signos dinâmicos) os contradiz. Essa síntese diagnóstica permite que as recomendações de melhoria sejam muito mais precisas e focadas na reparação da comunicação do design.
      </p>

      <h3 id="execucao-relato">Relato dos Resultados</h3>
      <p>
        A fase final do MIS consiste em documentar os achados da avaliação de forma clara e acionável, comunicando os problemas de comunicabilidade identificados. O relatório é o produto final da inspeção, traduzindo as análises complexas em informações úteis para o processo de design.
      </p>

      <h4>O que deve ser feito</h4>
      <ul>
        <li>
          <strong>Reportar a avaliação da comunicabilidade da solução de IHC da perspectiva do remetente da metamensagem:</strong> O relatório final deve apresentar os resultados da avaliação focando na qualidade da comunicação do designer para o usuário, e não apenas em uma lista de falhas. O objetivo é apreciar a qualidade geral da metacomunicação designer-usuário.
        </li>
        <li>
          Conteúdo do Relatório: Tipicamente, o relatório deve incluir:
          <ul>
            <li>
              Uma breve descrição do método de inspeção semiótica utilizado.
            </li>
            <li>
              Os critérios para a seleção das porções da interface inspecionadas.
            </li>
            <li>
              Para cada um dos três tipos de signos (metalinguísticos, estáticos, dinâmicos): identificação dos signos relevantes, seus sistemas e classes, e uma versão revisada da metamensagem do designer conforme interpretada a partir desses signos.
            </li>
            <li>
              Um julgamento fundamentado dos problemas de comunicabilidade reais ou potenciais que podem impedir os usuários de entender a mensagem do designer e interagir produtivamente.
            </li>
          </ul>
        </li>
      </ul>

      <h4>Dicas</h4>
      <ul>
        <li>
          <strong>Clareza e Objetividade:</strong> Apresente os resultados de forma clara, concisa e objetiva. Evite jargões excessivos e foque na comunicação eficaz dos achados, tornando o relatório acessível a designers e outras partes interessadas.
        </li>
        <li>
          <strong>Exemplos Concretos:</strong> Ilustre os problemas de comunicabilidade com exemplos concretos de signos e suas interpretações. Capturas de tela, descrições detalhadas de interações e citações de mensagens do sistema podem ser muito úteis para fundamentar as observações.
        </li>
        <li>
          <strong>Recomendações Construtivas:</strong> Além de identificar os problemas, sugira recomendações construtivas para melhorar a comunicabilidade do design. Foque em como o designer pode refinar sua mensagem e a lógica subjacente do sistema para evitar futuras rupturas de comunicação.
        </li>
        <li>
          <strong>Foco na Metamensagem:</strong> Mantenha o foco na metacomunicação do designer. O relatório deve responder à pergunta central: "O que o designer está comunicando e quão bem essa mensagem está sendo transmitida através da interface?" Essa abordagem garante que o feedback seja diretamente aplicável ao aprimoramento do design sob a ótica da Engenharia Semiótica.
        </li>
      </ul>

      <p>
        O relatório final do MIS não é apenas um documento de avaliação, mas um mecanismo de feedback semiótico direto para o processo de design. Ao enquadrar os achados na perspectiva do designer e sua metamensagem, o relatório fornece informações acionáveis que vão além de "o botão está no lugar errado". Ele informa ao designer como sua intenção comunicativa foi percebida (ou mal percebida) através dos diferentes signos da interface. Isso permite que os designers ajustem não apenas a superfície da interface, mas a própria lógica comunicativa subjacente de seu design.
      </p>
      <hr>
    </section>

    <section id="aprofundamento">
      <span class="section-title">Aprofunde-se</span>
      <h2>Recursos adicionais</h2>
      <p>Para uma compreensão mais aprofundada da Engenharia Semiótica e do Método de Inspeção Semiótica, recomendamos as seguintes obras e recursos:</p>

      <h3 id="livros-essenciais">Livros essenciais</h3>
      <ul>
        <li>
          DE SOUZA, C. S.
          <strong
            ><a
              href="https://mitpress.mit.edu/9780262527095/the-semiotic-engineering-of-human-computer-interaction/"
              target="_blank"
              >The Semiotic Engineering of Human-Computer
              Interaction</a
            ></strong
          >. The MIT Press, Londres, 2005.
        </li>
        <li>
          DE SOUZA, C. S.; LEITÃO, C. F.
          <strong
            ><a
              href="https://link.springer.com/book/10.1007/978-3-031-02185-5"
              target="_blank"
              >Semiotic Engineering Methods for Scientific
              Research in HCI</a
            ></strong
          >. San Rafael, CA: Morgan & Claypool, 2009.
        </li>
      </ul>

      <h3 id="artigos-pioneiros">Artigos pioneiros</h3>
      <ul>
        <li>
          DE SOUZA, C. S.
          <strong
            ><a
              href="https://doi.org/10.1006/imms.1993.1082"
              target="_blank"
              >The Semiotic Engineering of User Interface
              Languages</a
            ></strong
          >. International Journal of Man-Machine Studies,
          London, v. 39, n. 5, p. 753-773, 1993.
        </li>
        <li>
          DE SOUZA, C. S.; LEITÃO, C. F.; PRATES, R. O.;
          SILVA, E. J.
          <strong
            ><a
              href="https://doi.org/10.1145/1298023.1298044"
              target="_blank"
              >The Semiotic Inspection Method</a
            ></strong
          >. In: Proceedings of the 8th Brazilian Symposium on
          Human Factors in Computing Systems (IHC 2006).
          Curitiba, PR, Brasil: ACM, 2006. p. 41-50.
        </li>
        <li>
          DE SOUZA, C. S.
          <strong
            ><a
              href="https://doi.org/10.1016/j.intcom.2005.02.002"
              target="_blank"
              >Semiotic engineering: bringing designers
              and users together at interaction time</a
            ></strong
          >. Interacting with Computers, v. 17, n. 3, p.
          317-341, 2005.
        </li>
      </ul>

      <h3 id="outros-artigos-mis">Aprofundamento e variações do MIS</h3>
      <ul>
        <li>
          OLIVEIRA, E. R.; PRATES, R. O.; BARBOSA, S. D. J.
          <strong
            >Método de Inspeção Semiótica Intermediado
            (MISI)</strong
          >. In: Anais do VIII Simpósio sobre Fatores Humanos
          em Sistemas Computacionais (IHC 2008). Porto Alegre,
          RS, Brasil: SBC, 2008. p. 50-59.
        </li>
        <li>
          REIS, S. S.; PRATES, R. O.
          <strong
            >Applicability of the semiotic inspection
            method: a systematic literature review</strong
          >. In:
          <a
            href="https://dl.acm.org/doi/proceedings/10.5555/2254436"
            target="_blank"
            >Anais do X Simpósio sobre Fatores Humanos em
            Sistemas Computacionais (IHC 2011)</a
          >. Porto Alegre, RS, Brasil: SBC, 2011. p. 177-186.
        </li>
        <li>
          REIS, S. S.; PRATES, R. O.
          <strong
            ><a
              href="https://doi.org/10.22456/2175-2745.40202"
              target="_blank"
              >Assessing the Semiotic Inspection Method –
              The Evaluators' Perspective</a
            ></strong
          >. Revista de Informática Teórica e Aplicada, v. 20,
          n. 3, p. 155–182, 2013.
        </li>
        <li>
          REIS, M. M.
          <strong
            >MISTOOL, UMA FERRAMENTA PARA APLICAÇÃO
            COLABORATIVA DO MÉTODO DE INSPEÇÃO
            SEMIÓTICA</strong
          >. Monografia de Bacharelado em Ciência da
          Computação, Universidade Federal de Ouro Preto, Ouro
          Preto, MG, Brasil, 2010.
        </li>
      </ul>

      <h3 id="aplicacoes-mis">Aplicações do MIS</h3>
      <ul>
        <li>
          REIS, M. M.
          <strong
            >MISTOOL, UMA FERRAMENTA PARA APLICAÇÃO
            COLABORATIVA DO MÉTODO DE INSPEÇÃO
            SEMIÓTICA</strong
          >. Monografia de Bacharelado em Ciência da
          Computação, Universidade Federal de Ouro Preto, Ouro
          Preto, MG, Brasil, 2010.
        </li>
        <li>
          DIAS, J. S.
          <strong
            >APPLICSIM - UM SISTEMA DE APOIO À APLICAÇÃO DO
            MÉTODO DE INSPEÇÃO SEMIÓTICA</strong
          >. Dissertação de Mestrado em Ciência da Computação,
          Universidade Federal de Minas Gerais, Belo
          Horizonte, MG, Brasil, 2012.
        </li>
        <li>
          OLIVEIRA, E. R.; PRATES, R. O.; BARBOSA, S. D. J.
          <strong
            >Método de Inspeção Semiótica Intermediado
            (MISI)</strong
          >. In: Anais do VIII Simpósio sobre Fatores Humanos
          em Sistemas Computacionais (IHC 2008). Porto Alegre,
          RS, Brasil: SBC, 2008. p. 50-59.
        </li>
      </ul>

      <h3 id="revisoes-de-aplicabilidade">
        Revisões de aplicabilidade
      </h3>
      <ul>
        <li>
          REIS, S. S.; PRATES, R. O.
          <strong
            >Applicability of the semiotic inspection
            method: a systematic literature review</strong
          >. In: Anais do X Simpósio sobre Fatores Humanos em
          Sistemas Computacionais (IHC 2011). Porto Alegre,
          RS, Brasil: SBC, 2011. p. 177-186.
        </li>
      </ul>

      <h3 id="grupos-academicos">
        Grupos Acadêmicos que estudam o MIS no Brasil
      </h3>
      <p>
        O Brasil se destaca como um polo de excelência na
        pesquisa em Engenharia Semiótica, com diversos grupos
        acadêmicos que contribuem ativamente para o estudo e o
        avanço do campo, incluindo o MIS. Esses grupos são
        cruciais para a disseminação do conhecimento e a
        evolução contínua da teoria.
      </p>
      <ul>
        <li>
          <strong
            ><a
              href="https://www.serg.inf.puc-rio.br/pt-BR/"
              >Semiotic Engineering Research Group
              (SERG)</a
            ></strong
          >. Pontifícia Universidade Católica do Rio de
          Janeiro (PUC-Rio).
        </li>
        <li>
          <strong
            ><a
              href="https://dcc.ufmg.br/pensi/"
              target="_blank"
              >Núcleo de Pesquisa em Engenharia Semiótica
              e Interação (PENSI)</a
            ></strong
          >. Universidade Federal de Minas Gerais (UFMG).
        </li>
        <li>
          <strong
            ><a
              href="https://sites.google.com/view/serguff"
              target="_blank"
              >SERG.UFF</a
            ></strong
          >. Universidade Federal Fluminense (UFF).
        </li>
      </ul>
      <hr>
    </section>

    <section id="bibliografia">
      <span class="section-title">Bibliografia</span>
      <h2>Referências bibliográficas</h2>
      <ol>
        <li id="bibliografia-1">
          BARBOSA, S. D. J.; SILVA, B. S. da; SILVEIRA, M. S.;
          GASPARINI, I.; DARIN, T.; BARBOSA, G. D. J.
          <strong
            >Interação Humano-Computador e Experiência do
            Usuário</strong
          >. Rio de Janeiro, RJ: Autopublicação, 2021. ISBN
          978-65-00-19677-1.
        </li>
        <li id="bibliografia-2">
          SOUZA, C. S.
          <strong
            >The Semiotic Engineering of Human-Computer
            Interaction</strong
          >. Londres: The MIT Press, 2005. ISBN
          978-0-262-27136-3.
        </li>
      </ol>
      <hr>
    </section>
  </main>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  line-height: 1.25;
  margin-block: 3rem 1rem;
}

h2 {
  font-size: 1.75rem;
  margin-block: 1rem;
}

h3 {
  font-size: 1.5rem;
  margin-block: 2rem 1rem;
}

h4 {
  font-size: 1.25rem;
  margin-block: 2rem 1rem;
}

.subtitle {
  font-size: 1.25rem;
  font-style: italic;
}

.section-title {
  background-color: var(--clr-bg-alt);
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: var(--base-radius);
}

p {
  font-size: 1rem;
  margin-block: 0 1rem;
  text-wrap: pretty;
}

ol {
  padding-left: 1.5rem;

  >li {
    margin-block: 0.5rem;
  }
}

ul {
  padding-left: 1.5rem;

  >li {
    margin-block: 0.5rem;
  }
}
hr {
  border: none;
  border-top: 1px solid var(--clr-border);
  margin-block: 3rem;
}
section {
  margin-top: 3rem;

  &:last-child {
    margin-bottom: 6rem;
  }
}

.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0;
  margin-top: 2rem;
  list-style: none;

  .card {
    --background: var(--clr-bg-alt);
    --color: var(--clr-text-muted);

    background-color: oklch(from var(--background) l c h / 0.05);
    color: var(--color);
    border: 1px solid
      light-dark(
        oklch(from var(--background) calc(l - 0.2) calc(c - 0.06) h / 0.3),
        oklch(from var(--background) calc(l + 0.2) calc(c - 0.06) h / 0.2)
      );
    border-radius: calc(var(--base-radius) + 1rem);
    padding: 1rem;
    min-width: 18ch;
    flex: 1;

    margin-block: 0;

    transition: background-color 0.3s, color 0.3s;

    &.basic {
      --background: var(--clr-primary);
    }
    &.static {
      --background: var(--clr-static);

      button {
        --background: var(--clr-static);
      }
    }
    &.dynamic {
      --background: var(--clr-dynamic);

      button {
        --background: var(--clr-dynamic);
      }
    }
    &.metalinguistic {
      --background: var(--clr-metalinguistic);

      button {
        --background: var(--clr-metalinguistic);
      }
    }

    h3 {
      font-size: 1.25rem;
      margin-block: 0;
    }


    > span {
      color: oklch(from var(--background) calc(l - 0.1) c h);
      font-variation-settings:
        'FILL' 1,
        'wght' 400,
        'GRAD' 0,
        'opsz' 24;
    }

    h3 {
      margin-block: 1rem;
    }

    p {
      line-height: 1.25;
      font-size: 0.875rem;
    }
  }

  &.execution .card {
    min-width: 20ch;

    > span {
      color: var(--clr-text-muted);
    }
  }
}

</style>
