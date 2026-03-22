<script setup lang="ts">
import { computed, type Component } from 'vue';

import SimpleButton from './Examples/static/SimpleButton.vue';
import SignComponent from '../SignComponent/SignComponent.vue';
import SimpleText from './Examples/static/SimpleText.vue';
import SimpleIcon from './Examples/static/SimpleIcon.vue';
import SimpleLink from './Examples/static/SimpleLink.vue';
import SimpleLabel from './Examples/static/SimpleLabel.vue';
import SimpleImage from './Examples/static/SimpleImage.vue';

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
    { id: 'static-1', alt: 'Um texto simples:', component: SimpleText},
    { id: 'static-2', alt: 'Um botão simples:', component: SimpleButton },
    { id: 'static-3', alt: 'Um link:', component: SimpleLink },
    { id: 'static-4', alt: 'Um rótulo de campo de entrada:', component: SimpleLabel},
    { id: 'static-5', alt: 'Um ícone simples:', component: SimpleIcon },
    { id: 'static-6', alt: 'Uma imagem:', component: SimpleImage },
  ],
  'dynamic': [
    { id: 'dynamic-1', alt: 'Um botão dinâmico:', component: SimpleButton },
  ],
  'metalinguistic': [
    { id: 'metalinguistic-1', alt: 'Um signo metalinguístico:', component: SimpleButton },
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
  padding: 1.5rem;
  background-color: var(--clr-bg-alt);
  align-items: center;
  justify-content: center;
}
</style>
