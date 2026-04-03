<script setup lang="ts">
import { isMobile } from 'mobile-device-detect';
import { computed, ref } from 'vue';

const isMobileDevice = isMobile;

const textContent = computed(() => {
  return isMobileDevice ? 'Pressione e segure' : 'Passe o mouse aqui';
});

const tooltipRef = ref<HTMLElement | null>(null);
const isVisible = ref(false);

const showTooltip = () => {
  if (tooltipRef.value && !tooltipRef.value.matches(':popover-open')) {
    tooltipRef.value.showPopover();
    isVisible.value = true;
  }
};

const hideTooltip = () => {
  if (tooltipRef.value && tooltipRef.value.matches(':popover-open')) {
    isVisible.value = false;
  }
};

const onAfterLeave = () => {
  if (tooltipRef.value && tooltipRef.value.matches(':popover-open')) {
    tooltipRef.value.hidePopover();
  }
};

</script>
<template>
  <button
    class="btn btn-primary"
    @mouseenter="showTooltip"
    @mouseleave="hideTooltip"
    @focus="showTooltip"
    @blur="hideTooltip"
    @touchstart.prevent="showTooltip"
    @touchend.prevent="hideTooltip">
    {{ textContent }}
  </button>

  <div
    id="metalinguistic-hover-popover"
    class="tooltip-container"
    popover="manual"
    ref="tooltipRef"
  >
    <Transition name="popover-fade" @after-leave="onAfterLeave">
      <div v-if="isVisible" class="tooltip-content">
        <p>Este é um botão!</p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
button {
  anchor-name: --tooltip-target;
}

.tooltip-container {
  border: none;
  background: transparent;
  padding: 0;
  margin: 0;
  overflow: visible;

  position-anchor: --tooltip-target;
  position-area: top;
  margin-bottom: 0.5rem;
}

.tooltip-content {
  background-color: var(--clr-bg-inverse);
  color: var(--clr-bg);
  padding: 0.5em 1em;
  border-radius: var(--base-radius);
  border: none;
  font-size: 0.875rem;

  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.3);

  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.popover-fade-enter-active,
.popover-fade-leave-active {
  transition: opacity 0.3s ease, translate 0.3s var(--ease-squish, ease-out);
}

.popover-fade-enter-from {
  opacity: 0;
  translate: 0 10px;
}

.popover-fade-enter-to,
.popover-fade-leave-from {
  opacity: 1;
  translate: 0 0px;
}

.popover-fade-leave-to {
  opacity: 0;
  translate: 0 10px;
}
</style>
