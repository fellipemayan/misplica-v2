<script setup lang="ts">
import { ref } from 'vue';

const currentStep = ref(1);
</script>

<template>
  <div class="mis-step-animation" @mouseenter="currentStep = 2" @mouseleave="currentStep = 1">

    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">

      <rect width="100" height="100" rx="8" class="svg-bg" />

      <circle
        cx="50"
        cy="50"
        r="20"
        class="sign-element"
        :class="{ 'is-extracting': currentStep === 2 }"
      />

    </svg>

  </div>
</template>

<style scoped>
.svg-bg {
  /* Usando as suas variáveis nativas do projeto no SVG */
  fill: var(--clr-bg-alt);
}

.sign-element {
  fill: var(--clr-static); /* Ex: A cor azul dos signos estáticos */
  transition: all 0.5s var(--ease-squish);
  transform-origin: center;
}

/* Animação CSS pura aplicada ao elemento do SVG */
.sign-element.is-extracting {
  transform: translateY(-20px) scale(1.2);
  fill: var(--clr-primary);
}
</style>
