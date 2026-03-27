<script setup lang="ts">
import AnimationComponent from './Animations/AnimationComponent.vue';
import AnimColeta from './Animations/AnimColeta.vue';
import AnimConsolid from './Animations/AnimConsolid.vue';
import AnimPreparacao from './Animations/AnimPreparacao.vue';
import AnimRelato from './Animations/AnimRelato.vue';

const temposPreparacao = [2000, 2000, 6000];
const temposColeta = [2000, 2000, 2000, 2000, 2000];
const temposConsolidacao = [2000, 2000, 2000, 4000];
const temposRelato = [2000, 2000, 2000, 4000];
</script>

<template>
  <main class="teste">
    <AnimationComponent :step-times="temposPreparacao" :autoplay="true">
        <template #default="{ currentStep }">
          <AnimPreparacao :step="currentStep" />
        </template>
      </AnimationComponent>

<AnimationComponent :step-times="temposColeta" :autoplay="true">
        <template #default="{ currentStep }">
          <AnimColeta :step="currentStep" />
        </template>
      </AnimationComponent>

<AnimationComponent :step-times="temposConsolidacao" :autoplay="true">
        <template #default="{ currentStep }">
          <AnimConsolid :step="currentStep" />
        </template>
      </AnimationComponent>

<AnimationComponent :step-times="temposRelato" :autoplay="true">
        <template #default="{ currentStep }">
          <AnimRelato :step="currentStep" />
        </template>
      </AnimationComponent>
  </main>
</template>

<style scoped>
.teste {
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--clr-bg);
  z-index: 9999;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  overflow: hidden;
  padding: 4rem 8rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  > * {
    flex: 1 1 400px;
    /* max-width: 400px; */
  }
}
</style>
