<script setup lang="ts">
import AnimMonitor from './AnimMonitor.vue';
import AnimPaperPrep from './AnimPaperPrep.vue';

defineProps<{
  step: number;
}>();
</script>

<template>
  <div
    class="preparacao-canvas-inner"
    role="img"
    aria-label="Animação da etapa de Preparação. O sistema começa centralizado, move-se para a esquerda e um documento surge à direita, sendo preenchido progressivamente."
  >
    <svg class="anim-svg" :class="`step-${step}`" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">

      <AnimMonitor class="anim-monitor" x="240" y="120" />

      <AnimPaperPrep class="anim-paper-prep" animation="active" :step="step" x="479" y="81" />
    </svg>
  </div>
</template>

<style scoped>
.anim-svg {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform var(--dur-move) var(--ease-move);
}

.anim-monitor {
  transition: transform var(--dur-move) var(--ease-move);
}

.anim-paper-prep {
  transition: opacity var(--dur-fade) var(--ease-fade),
              transform var(--dur-move) var(--ease-move);
}

.step-1 {
  .anim-monitor {
    transform: translateY(0);
  }

  .anim-paper-prep {
    opacity: 0;
    transform: translateY(24px);
  }
}

.step-2 {
  .anim-monitor {
    transform: translateX(-120px);
  }

  .anim-paper-prep {
    & .skel-h1, & .skel-h2, & .skel-icon, & .skel-text {
      opacity: 0;
    }
  }
}

.step-3 {
  .anim-monitor {
    transform: translateX(-120px);
  }
}
</style>
