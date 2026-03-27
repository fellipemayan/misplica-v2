<script setup lang="ts">
import { computed } from 'vue';
import AnimMonitor from './AnimMonitor.vue';
import AnimPaperPrep from './AnimPaperPrep.vue';
import AnimPaperColl from './AnimPaperColl.vue';

const props = defineProps<{
  step: number;
}>();

const monitorHighlight = computed(() => {
  if (props.step === 3) return 'meta';
  else if (props.step === 4) return 'static';
  else if (props.step === 5) return 'dynamic';
  else return 'none';
});
</script>

<template>
  <div
    class="preparacao-canvas-inner"
    role="img"
    aria-label="Animação da etapa de Preparação. O sistema começa centralizado, move-se para a esquerda e um documento surge à direita, sendo preenchido progressivamente."
  >
    <svg class="anim-svg" :class="`step-${props.step} hl-${monitorHighlight}`" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">

      <AnimMonitor class="anim-monitor" x="120" y="120" />

      <AnimPaperPrep class="anim-paper-prep" animation="complete" x="479" y="81" />

      <AnimPaperColl class="anim-paper-coll" animation="coleta" :step="props.step" x="479" y="81" />
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

.anim-paper-prep, .anim-paper-coll {
  & .skel-h1, & .skel-h2, & .skel-icon, & .skel-text {
    opacity: 1;
  }
  transition: opacity var(--dur-fade) var(--ease-fade),
              transform var(--dur-move) var(--ease-move);
}

.step-1 {
  .anim-monitor {
    transform: translateY(0);
  }

  .anim-paper-prep {
    transform: translate(0, 0);
  }

  .anim-paper-coll {
    opacity: 0;
    transform: translate(0, 6px);
  }
}

.step-2 {
  .anim-paper-prep {
    transform: translate(12px, -12px);
  }

  .anim-paper-coll {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.step-3 {
  .anim-paper-prep {
    transform: translate(12px, -12px);
  }
}

.step-4 {
  .anim-paper-prep {
    transform: translate(12px, -12px);
  }
}

.step-5 {
  .anim-paper-prep {
    transform: translate(12px, -12px);
  }
}
</style>
