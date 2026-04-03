<script setup lang="ts">
import AnimMonitor from './AnimMonitor.vue';
import AnimPaperPrep from './AnimPaperPrep.vue';
import AnimPaperColl from './AnimPaperColl.vue';
import AnimPaperCons from './AnimPaperCons.vue';

const props = defineProps<{
  step: number;
}>();
</script>

<template>
  <div
    class="consolidacao-canvas-inner"
    role="img"
    aria-label="Animação da etapa de Preparação. O sistema começa centralizado, move-se para a esquerda e um documento surge à direita, sendo preenchido progressivamente."
  >
    <svg class="anim-svg" :class="`step-${props.step}`" viewBox="0 0 800 450" fill="none" xmlns="http://www.w3.org/2000/svg">

      <AnimMonitor class="anim-monitor step-1" x="120" y="120" />

      <AnimPaperPrep class="anim-paper-prep" animation="complete" x="479" y="81" />

      <AnimPaperColl class="anim-paper-coll" animation="consolid" :step="props.step" x="479" y="81" />

      <AnimPaperCons class="anim-paper-cons" animation="consolid" :step="props.step" x="449" y="81" />
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
  transition: transform var(--dur-move) var(--ease-move), opacity var(--dur-move) var(--ease-move);
}

.anim-paper-prep,
.anim-paper-coll,
.anim-paper-cons {
  transition: transform var(--dur-move) var(--ease-move), opacity var(--dur-move) var(--ease-move);
}

.step-1 {
  .anim-monitor {
    transform: translateX(0);
  }

  .anim-paper-prep {
    transform: translate(12px, -12px);
  }

  .anim-paper-coll {
    transform: translate(0, 0);
  }

  .anim-paper-cons {
    opacity: 0;
    transform: translate(0, 12px);
  }
}

.step-2 {
  .anim-monitor {
    opacity: 0;
    transform: translateX(-24px);
  }

  .anim-paper-prep {
    transform: translate(-318px, -12px);
  }

  .anim-paper-coll {
    opacity: 1;
    transform: translate(-330px, 0);
  }

  .anim-paper-cons {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.step-3 {
  .anim-monitor {
    opacity: 0;
    transform: translateX(-24px);
  }

  .anim-paper-prep {
    transform: translate(-318px, -12px);
  }

  .anim-paper-coll {
    opacity: 1;
    transform: translate(-330px, 0);
  }

  .anim-paper-cons {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.step-4 {
  .anim-monitor {
    opacity: 0;
    transform: translateX(-24px);
  }

  .anim-paper-prep {
    transform: translate(-318px, -12px);
  }

  .anim-paper-coll {
    opacity: 1;
    transform: translate(-330px, 0);
  }

  .anim-paper-cons {
    opacity: 1;
    transform: translate(0, 0);
  }
}

.step-5 {
  .anim-monitor {
    opacity: 0;
    transform: translateX(-24px);
  }

  .anim-paper-prep {
    transform: translate(-318px, -12px);
  }

  .anim-paper-coll {
    opacity: 1;
    transform: translate(-330px, 0);
  }

  .anim-paper-cons {
    opacity: 1;
    transform: translate(0, 0);
  }
}
</style>
