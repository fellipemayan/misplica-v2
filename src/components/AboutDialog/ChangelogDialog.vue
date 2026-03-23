<script setup lang="ts">
import { ref } from 'vue';
import DialogComponent from '../DialogComponent/DialogComponent.vue';

const isOpen = ref(false);

const updates = [
  {
    version: 'v1.2.1',
    date: 'Março 2026',
    changes: [
      { type: 'feat', text: 'Refatoração da os conteúdos principais e exemplos de signos.' },
      { type: 'feat', text: 'Evolução dos componentes de sidebar e controles, com melhorias de responsividade.' },
      { type: 'fix', text: 'Ajustes no comportamento de níveis e subníveis do sumário.' },
      { type: 'ui', text: 'Refino de ícones e detalhes de interface.' }
    ]
  },
  {
  version: 'v1.2.0',
  date: 'Março 2026',
  changes: [
    { type: 'feat', text: 'Migração da base para Vue 3 + TypeScript + Vite.' },
    { type: 'feat', text: 'Reestruturação em arquitetura de componentes (incluindo X-Ray e componente de signo).' },
    { type: 'ui', text: 'Refatoração dos diálogos para uso da API nativa de modal.' },
    { type: 'ui', text: 'Refatoração de estilos para gestão de tema, tipografia, contraste e animação.' }
  ]
  },
  {
  version: 'v1.0.1',
  date: 'Dezembro 2025',
  changes: [
    { type: 'feat', text: 'Apresentação do artigo sobre o MISplica no TISE.' },
    { type: 'fix', text: 'Ajustes de responsividade.' },
    { type: 'fix', text: 'Correções no componente de drag & drop.' }
  ]
  },
  {
    version: 'v1.0.0',
    date: 'Julho-Agosto 2025',
    changes: [
      { type: 'feat', text: 'Estruturação da primeira versão interativa do conteúdo de MIS e Semiótica, com base traduzida para HTML.' },
      { type: 'feat', text: 'Implementação de exemplos de signos dinâmicos e expansão dos exemplos metalinguísticos.' },
      { type: 'feat', text: 'Inclusão de paletas de cores por tipo de signo e marcações visuais na interface.' },
      { type: 'feat', text: 'Criação da navegação com sumário, comportamento de scroll e animações de apoio à leitura.' },
      { type: 'feat', text: 'Entrega dos menus mobile, melhorias de responsividade e ajustes para telas pequenas.' },
      { type: 'feat', text: 'Adição do modal de Sobre e do envio de feedback no projeto.' },
      { type: 'ui', text: 'Refinamentos no layout, cards explicativos, componente de raio-x e consistência visual geral.' },
      { type: 'fix', text: 'Correções de script, marcadores e ajustes de estabilidade da versão estática inicial.' }
    ]
  }
];
</script>

<template>
  <button class="btn btn-secondary" @click="isOpen = true">
    Changelog
  </button>

  <DialogComponent v-model:open="isOpen">
    <h2 class="title">Últimas Atualizações</h2>
    <p class="subtitle">Acompanhe a evolução do projeto.</p>

    <div class="timeline">
      <div v-for="release in updates" :key="release.version" class="release">
        <div class="release-meta">
          <span class="version">{{ release.version }}</span>
          <span class="date">{{ release.date }}</span>
        </div>

        <ul class="change-list">
          <li v-for="(change, index) in release.changes" :key="index">
            <span class="badge" :class="change.type">
              {{ change.type === 'feat' ? 'Novo' : change.type === 'fix' ? 'Correção' : 'Design' }}
            </span>
            <span class="text">{{ change.text }}</span>
          </li>
        </ul>
      </div>
    </div>
  </DialogComponent>
</template>

<style scoped>
.dialog {
  max-width: 640px;
  max-height: 80%;
}

.timeline {
  margin-top: 2rem;
  display: flex;
  flex-direction: column;

  max-height: 60vh;
  padding-right: 0.5rem;
}

.release {
  padding-bottom: 2rem;
}

.release-meta {
  display: flex;
  align-items: baseline;
  gap: 0.75rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid var(--clr-border-muted);
  padding-bottom: 0.5rem;
}

.version {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--clr-text);
}

.date {
  font-size: 0.85rem;
  color: var(--clr-text-muted);
}

.change-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.change-list li {
  display: grid;
  grid-template-columns: 10ch 1fr;
  gap: 0.75rem;
  font-size: 0.95rem;
  color: var(--clr-text-alt);
  line-height: 1.4;
}

.badge {
  --background: var(--clr-primary);
  align-self: self-start;
  justify-self: self-start;
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.25rem 0.4rem;
  background-color: oklch(from var(--background) l c h / 0.05);
  color: var(--background);
  border-radius: 4px;
}

.badge.feat { --background: var(--clr-success) }
.badge.fix { --background: var(--clr-error) }
.badge.ui { --background: var(--clr-primary) }
</style>
