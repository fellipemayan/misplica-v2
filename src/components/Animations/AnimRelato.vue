<script setup lang="ts">
import AnimPaperPrep from './AnimPaperPrep.vue';
import AnimPaperColl from './AnimPaperColl.vue';
import AnimPaperCons from './AnimPaperCons.vue';
import AnimPaperRelato from './AnimPaperRelato.vue';

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
      <AnimPaperPrep class="anim-paper-prep" animation="complete" x="479" y="81" />

      <AnimPaperColl class="anim-paper-coll" animation="complete" :step="props.step" x="479" y="81" />

      <AnimPaperCons class="anim-paper-cons" animation="complete" :step="props.step" x="479" y="81" />

      <AnimPaperRelato class="anim-paper-relato" animation="relato" :step="props.step" x="300" y="81" />
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

.anim-paper-prep,
.anim-paper-coll,
.anim-paper-cons,
.anim-paper-relato {
  transition: transform var(--dur-move) var(--ease-move), opacity var(--dur-move) var(--ease-move);
}

.step-1 {
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

  .anim-paper-relato {
    opacity: 0;
    transform: translate(-18px, 32px);
  }
}

.step-2 {
  .anim-paper-prep {
    transform: translate(-161px, -18px);
  }

  .anim-paper-coll {
    opacity: 1;
    transform: translate(-173px, -6px);
  }

  .anim-paper-cons {
    opacity: 1;
    transform: translate(-185px, 6px);
  }

  .anim-paper-relato {
    opacity: 1;
    transform: translate(-18px, 18px);
  }
}

.step-3 {
  .anim-paper-prep {
    transform: translate(-161px, -18px);
  }

  .anim-paper-coll {
    opacity: 1;
    transform: translate(-173px, -6px);
  }

  .anim-paper-cons {
    opacity: 1;
    transform: translate(-185px, 6px);
  }

  .anim-paper-relato {
    opacity: 1;
    transform: translate(-18px, 18px);
  }
}

.step-4 {

  .anim-paper-prep {
    transform: translate(-161px, -18px);
  }

  .anim-paper-coll {
    opacity: 1;
    transform: translate(-173px, -6px);
  }

  .anim-paper-cons {
    opacity: 1;
    transform: translate(-185px, 6px);
  }

  .anim-paper-relato {
    opacity: 1;
    transform: translate(-18px, 18px);
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
    transform: translate(-18px, 18px);
  }
}
</style>
