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
  'xray': {
    dynamic: {
      title: 'Raio-X',
      description: 'Ativa o modo de análise de signos, permitindo que o usuário visualize as metámensagens associadas a cada signo na interface.'
    }
  },
  // Exemplo 1: Signo Simples (Apenas Estático)
  'icon-colecao': {
    static: {
      title: 'Ícone de Coleção (Pasta)',
      description: 'Representação visual estática. Comunica a metáfora de um recipiente físico onde os documentos estão guardados.'
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
  }
}
