<script setup lang="ts">
import { useAnimationPlayer } from '@/composables/useAnimationPlayer';
import { computed } from 'vue';

const props = defineProps<{
  // Ex: [2000, 1500, 1500, 1500, 4000, 1000]
  stepTimes: number[];
  autoplay?: boolean;
}>();

const {
  currentStep,
  totalSteps,
  isPlaying,
  isBusy,
  init,
  togglePlayPause,
  setStep,
  nextStep,
  backStep,
} = useAnimationPlayer();

init(props.stepTimes);

const playPauseLabel = computed(() => isPlaying.value ? 'Pausar animação' : 'Continuar animação');

const isLastStep = computed(() => currentStep.value === totalSteps.valueOf());
</script>

<template>
  <div
    class="mis-animation-player"
    role="region"
    aria-label="Player interativo da animação de execução do MIS"
  >
    <div class="animation-canvas">
      <slot :current-step="currentStep" />
    </div>

    <div class="controls-bar" :aria-hidden="isBusy">
      <button
          class="btn btn-icon btn-secondary"
          @click="togglePlayPause"
          :aria-label="playPauseLabel"
        >
          <span class="material-symbols-outlined icon">
            {{ isPlaying ? 'pause' : 'play_arrow' }}
          </span>
      </button>

      <div class="nav-actions">
        <button class="btn btn-icon btn-secondary btn-ctrl" @click="backStep" :disabled="isBusy" aria-label="Voltar etapa">
          <span class="material-symbols-outlined icon">arrow_back</span>
        </button>

        <div
        class="carousel-indicators"
        role="group"
        aria-label="Ir para etapa específica"
      >
        <button
          v-for="step in totalSteps"
          :key="step"
          class="indicator-item btn-touch"
          :class="{ 'is-active': currentStep === step }"
          :aria-current="currentStep === step ? 'step' : undefined"
          :aria-label="`Ir para etapa ${step}`"
          @click="setStep(step)"
          :disabled="isBusy"
        >
          <span class="dot"></span>
        </button>
      </div>

        <button class="btn btn-icon btn-secondary btn-ctrl" @click="nextStep" :disabled="isBusy" aria-label="Avançar etapa">
          <span class="material-symbols-outlined icon">{{ isLastStep ? 'refresh' : 'arrow_forward' }}</span>
        </button>
      </div>

    </div>
  </div>
</template>

<style scoped>
.mis-animation-player {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.animation-canvas {
  width: 100%;
  aspect-ratio: 16 / 9;
  background-color: var(--anim-canvas);
  border-radius: var(--base-radius);
  border: 1px solid var(--clr-border);
  overflow: hidden;
  position: relative;
}

.controls-bar {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.btn {
  font-variation-settings: 'FILL' 1;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.75rem;
}

.carousel-indicators {
  display: flex;
  align-items: center;
  justify-content: center;
}

.indicator-item {
  background: transparent;
  border: none;
  cursor: pointer;
}

.indicator-item .dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: var(--clr-border-muted);
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  transform: scale(0.8);
}

.indicator-item:hover .dot { background-color: var(--clr-border); transform: scale(1); }

.indicator-item.is-active .dot {
  background-color: var(--clr-primary);
  transform: scale(1.5);
}

.nav-actions {
  margin-left: auto;
  display: flex;
  gap: 0.5rem;
}

.btn-ctrl:disabled { color: var(--clr-border-muted); cursor:wait; opacity: 0.7; }

.btn-touch {
  min-width: 32px;
  min-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (min-width: 768px) {
  .animation-canvas {
    aspect-ratio: 16 / 9;
  }
}
</style>
