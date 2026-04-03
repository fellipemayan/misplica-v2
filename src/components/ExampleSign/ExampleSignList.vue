<script setup lang="ts">
import { computed, type Component } from 'vue';

import SignComponent from '../SignComponent/SignComponent.vue';
import StaticButton from './Examples/static/StaticButton.vue';
import StaticText from './Examples/static/StaticText.vue';
import StaticIcon from './Examples/static/StaticIcon.vue';
import StaticLink from './Examples/static/StaticLink.vue';
import StaticLabel from './Examples/static/StaticLabel.vue';
import StaticImage from './Examples/static/StaticImage.vue';
import DynamicLoader from './Examples/dynamic/DynamicLoader.vue';
import DynamicHover from './Examples/dynamic/DynamicHover.vue';
import DynamicToggle from './Examples/dynamic/DynamicToggle.vue';
import DynamicSelect from './Examples/dynamic/DynamicSelect.vue';
import DynamicMove from './Examples/dynamic/DynamicMove.vue';
import DynamicScroll from './Examples/dynamic/DynamicScroll.vue';
import MetalinguisticHover from './Examples/metalinguistic/MetalinguisticHover.vue';
import MetalinguisticDialog from './Examples/metalinguistic/MetalinguisticDialog.vue';
import MetalinguisticText from './Examples/metalinguistic/MetalinguisticText.vue';
import MetalinguisticInput from './Examples/metalinguistic/MetalinguisticInput..vue';
import MetalinguisticAlert from './Examples/metalinguistic/MetalinguisticAlert.vue';
import MetalinguisticFeedback from './Examples/metalinguistic/MetalinguisticFeedback.vue';

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value: string) => ['static', 'dynamic', 'metalinguistic'].includes(value)
  }
})

interface SignExample {
  id: string;
  alt: string;
  component: Component;
}

const examplesMap: Record<string, SignExample[]> = {
  'static': [
    { id: 'static-1', alt: 'Um texto simples:', component: StaticText},
    { id: 'static-2', alt: 'Um botão simples:', component: StaticButton },
    { id: 'static-3', alt: 'Um link:', component: StaticLink },
    { id: 'static-4', alt: 'Um rótulo de campo de entrada:', component: StaticLabel},
    { id: 'static-5', alt: 'Um ícone simples:', component: StaticIcon },
    { id: 'static-6', alt: 'Uma imagem:', component: StaticImage },
  ],
  'dynamic': [
    { id: 'dynamic-1', alt: 'O carregamento de uma informação:', component: DynamicLoader },
    { id: 'dynamic-2', alt: 'Uma mudança ao interagir:', component: DynamicHover },
    { id: 'dynamic-3', alt: 'Uma mudança ao tocar:', component: DynamicToggle },
    { id: 'dynamic-4', alt: 'Uma mudança ao escolher uma opção:', component: DynamicSelect },
    { id: 'dynamic-5', alt: 'A possibilidade de mover um item:', component: DynamicMove },
    { id: 'dynamic-6', alt: 'A possibilidade de navegar na página:', component: DynamicScroll },
  ],
  'metalinguistic': [
    { id: 'metalinguistic-1', alt: 'Um tooltip:', component: MetalinguisticHover },
    { id: 'metalinguistic-2', alt: 'Um diálogo explicativo:', component: MetalinguisticDialog },
    { id: 'metalinguistic-3', alt: 'Explicações sobre o sistema:', component: MetalinguisticText },
    { id: 'metalinguistic-4', alt: 'Especificações ou instruções:', component: MetalinguisticInput },
    { id: 'metalinguistic-5', alt: 'Um alerta do sistema:', component: MetalinguisticAlert },
    { id: 'metalinguistic-6', alt: 'Uma solicitação direta ao usuário:', component: MetalinguisticFeedback },

  ]
};

const activeExamples = computed(() => examplesMap[props.type] || []);

</script>

<template>
  <div class="example-list-container">
    <div v-for="(example, index) in activeExamples" :key="`${type}-example-${index}`" class="example-sign-wrapper">
      <p>{{ example.alt }}</p>
      <SignComponent tag="div" class="example-sign-card"
      :id="example.id"
      >
      <component :is="example.component" />
      </SignComponent>
    </div>
  </div>
</template>

<style scoped>
.example-list-container {
  padding: 0;
  display: grid;
  gap: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(25ch, 1fr));
}

.example-sign-wrapper {
  margin-top: 1rem;
  > p {
    margin: 0;
    margin-bottom: 0.5rem;
    font-size: 0.875rem;
  }
}

.example-sign-card {
  display: flex;
  flex-direction: column;
  aspect-ratio: 5 / 4;
  border: 1px solid var(--clr-border);
  border-radius: calc(var(--base-radius) + 0.5rem);
  background-color: var(--clr-bg-alt);
  align-items: center;
  justify-content: center;
}
</style>
