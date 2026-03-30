<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue';
import SignComponent from '../SignComponent/SignComponent.vue';

const isOpen = defineModel<boolean>('open', { default: false });

const props = defineProps<{
  persistent?: boolean;
  signId?: string;
  width?: 'sm' | 'md';
}>();

const popoverRef = ref<HTMLElement | null>(null);

const lockScroll = () => {
const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollbarWidth}px`;
  document.body.style.overflow = 'hidden';
};

const unlockScroll = () => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

watch(isOpen, (newVal) => {
  if (newVal) {
    lockScroll();
    if (popoverRef.value && !popoverRef.value.matches(':popover-open')) {
      popoverRef.value.showPopover();
    }
  } else {
    unlockScroll();
    if (popoverRef.value && popoverRef.value.matches(':popover-open')) {
      popoverRef.value.hidePopover();
    }
  }
});

const onToggle = (e: ToggleEvent) => {
  isOpen.value = e.newState === 'open';
};

onUnmounted(() => {
  unlockScroll();
});
</script>

<template>
  <div
    ref="popoverRef"
    class="base-popover"
    :popover="props.persistent ? 'manual' : 'auto'"
    :class="props.width ? `width-${props.width}` : ''"
    @toggle="onToggle"
  >
    <SignComponent
      v-if="props.signId"
      :id="props.signId"
      class="popover-sign-wrapper"
    >
      <div
        class="popover-wrapper"
      >
        <button class="btn-close" @click="isOpen = false" aria-label="Fechar janela">
          <span class="material-symbols-outlined">close</span>
        </button>
        <slot />
      </div>
    </SignComponent>

    <div v-else class="popover-wrapper">
      <button class="btn-close" @click="isOpen = false" aria-label="Fechar janela">
        <span class="material-symbols-outlined">close</span>
      </button>
      <slot />
    </div>

  </div>
</template>

<style scoped>
.base-popover {
  padding: 1rem;
  border: none;
  background: transparent;

  margin: auto;
  width: 90%;
  max-height: 100dvh;
  overflow: hidden;

  opacity: 0;
  transform: translateY(10px) scale(0.98);

  transition: opacity 0.3s ease,
              transform 0.3s ease,
              overlay 0.3s ease,
              display 0.3s ease;
  transition-behavior: allow-discrete;
}

.base-popover::backdrop {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  opacity: 0;
  transition: opacity 0.3s ease, overlay 0.3s ease, display 0.3s ease;
  transition-behavior: allow-discrete;
}

.base-popover:popover-open {
  opacity: 1;
  transform: translateY(0) scale(1);

  @starting-style {
    opacity: 0;
    transform: translateY(10px) scale(0.98);
  }
}

.base-popover:popover-open::backdrop {
  opacity: 1;
  @starting-style { opacity: 0; }
}

.popover-sign-wrapper {
  display: flex;
  justify-content: center;
}
.popover-wrapper {
  flex: 1;
  position: relative;
  padding: 2rem;
  background-color: var(--clr-bg);
  color: var(--clr-text);
  border-radius: var(--base-radius);
  border: 1px solid var(--clr-border);
  scrollbar-color: var(--clr-text-muted) transparent;
  overflow-y: auto;
  max-height: 80dvh;
}

.base-popover.width-sm {
  max-width: 60ch;
}

.base-popover.width-md {
  max-width: 80ch;
}

.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  height: 44px;
  width: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--base-radius);
  color: var(--clr-text-muted);
  transition: background-color 0.2s;
}

.btn-close:hover {
  background-color: var(--clr-bg-hover);
}
</style>
