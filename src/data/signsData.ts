import type { XRayType } from "@/types/types";

export interface SignDescription {
  title: string;
  description: string;
}

export interface SignData {
  static?: SignDescription;
  dynamic?: SignDescription;
  metalinguistic?: SignDescription;
}

export const signsData: Record<string, SignData> = {
  'botao-sobre': {
    static: {
      title: 'Botão sobre',
      description: 'Botão simples.'
    },
    dynamic: {
      title: 'Abrir diálogo',
      description: 'Abre o diálogo de sobre.'
    },
    metalinguistic: {
      title: 'Sobre o MISplica',
      description: 'Fala sobre o funcionamento do site.'
    }
  },
  'sign-painel-controles': {
    dynamic: {
      title: 'Controles',
      description: 'Abre o painel de controle, onde o usuário pode ajustar as configurações do sistema e acessar funcionalidades adicionais.'
    }
  },
  'sign-painel-sumario': {
    dynamic: {
      title: 'Sidebar',
      description: 'Abre a barra lateral, que pode conter informações adicionais, navegação ou ferramentas relacionadas ao conteúdo principal.'
    }
  },

  'signo-sumario': {
    dynamic: {
      title: 'Sumário',
      description: 'Permite ao usuário acessar um sumário ou índice do conteúdo, facilitando a navegação e a localização de seções específicas.'
    }
  },

  'signo-tema': {
    dynamic: {
      title: 'Tema',
      description: 'Permite ao usuário selecionar o tema visual do sistema.'
    }
  },
  'signo-contraste': {
    dynamic: {
      title: 'Contraste',
      description: 'Permite ao usuário ajustar o contraste do sistema para melhorar a legibilidade.'
    }
  },
  'signo-fonte': {
    dynamic: {
      title: 'Tamanho da Fonte',
      description: 'Permite ao usuário escolher o tamanho da fonte para melhor leitura.'
    }
  },
  'signo-animacoes': {
    dynamic: {
      title: 'Animações Visuais',
      description: 'Permite ao usuário ativar ou desativar animações visuais no sistema.'
    }
  },


  'xray': {
    dynamic: {
      title: 'Raio-X',
      description: 'Ativa o modo de análise de signos, permitindo que o usuário visualize as metámensagens associadas a cada signo na interface.'
    }
  },
  // Exemplo 1: Signo Simples (Apenas Estático)
  'titulo': {
    static: {
      title: 'Título Principal',
      description: 'Títulos fornecem informações fixas e podem ser interpretados sem interação.'
    }
  },
  'subtitulo': {
    metalinguistic: {
      title: 'Subtítulo',
      description: 'O subtítulo explica o propósito do MISplica, que é fornecer um guia sobre o Método de Inspeção Semiótica..'
    }
  },

  // Exemplo 2: Signo Complexo (Os três tipos com análises independentes)
  'painel-metadados': {
    static: {
      title: 'Painel Lateral (Visual)',
      description: 'Exibe os dados bibliográficos de forma estática, utilizando tipografia e espaçamento para hierarquizar as informações na tela.'
    },
    dynamic: {
      title: 'Painel Lateral (Interação)',
      description: 'Permite a edição direta dos campos. A metamensagem é: "Você pode alterar o estado do sistema clicando sobre estes valores".'
    },
    metalinguistic: {
      title: 'Painel Lateral (Estrutura)',
      description: 'Utiliza rótulos textuais (ex: "Tipo de Item", "Autor") que explicam ao usuário a natureza e a organização da informação apresentada.'
    }
  },

  // lista de exemplos
  // Estáticos:
  'static-1': {
    static: {
      title: 'Botão',
      description: 'Um botão simples.'
    }
  },
}
