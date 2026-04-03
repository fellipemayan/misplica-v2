<script setup lang="ts">
import { activeXRay } from '@/composables/useXRay';
import { signsData } from '@/data/signsData.ts';
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default: 'div',
  }
})

const sign = computed(() => signsData[props.id])

const activeVision = computed(() => {
  if (!activeXRay.value || !sign.value) return null;
  return sign.value[activeXRay.value];
})

const isActive = computed(() => !!activeVision.value)

const typeTranslations: Record<string, string> = {
  static: 'estático',
  dynamic: 'dinâmico',
  metalinguistic: 'metalinguístico'
}

const iconTranslations: Record<string, string> = {
  static: 'widgets',
  dynamic: 'magic_button',
  metalinguistic: 'info'
}

const translatedType = computed(() => {
  return activeXRay.value ? typeTranslations[activeXRay.value] : '';
})

const activeIcon = computed(() => {
  return activeXRay.value ? iconTranslations[activeXRay.value] : '';
})

</script>

<template>
  <component
    :is="tag"
    class="sign-wrapper"
    :class="[
      isActive ? 'is-active' : '',
      activeXRay ? `xray-${activeXRay}` : ''
    ]"
    :style="{
      '--anchor-name': `--sign-${id}`,
      '--btn-anchor': `--btn-${id}`
    }"
    :aria-describedby="isActive ? `popover-${id}` : undefined"
  >
    <slot />

    <button
      v-if="isActive && activeVision"
      class="sign-indicator"
      :class="`sign-pill-${activeXRay}`"
      @click.stop
      :popovertarget="`popover-${id}`"
      aria-label="Ver análise semiótica"
    >
      <span class="material-symbols-outlined">{{ activeIcon }}</span>
    </button>

    <div
      v-if="isActive && activeVision"
      :id="`popover-${id}`"
      class="sign-popover"
      popover="auto"
    >
      <header>
        <h4>{{ activeVision.title }}</h4>
        <span class="sign-badge" :class="`sign-pill-${activeXRay}`">
          {{ translatedType }}
        </span>
      </header>
      <p>{{ activeVision.description }}</p>
    </div>
  </component>
</template>


<style scoped>
.sign-wrapper {
  display: inherit;
  position: relative;
  transition: all 0.3s ease-out;
}

.sign-wrapper::before {
  content: "";
  position: absolute;
  anchor-name: var(--anchor-name);

  inset: -0.25rem;
  border: 0px dashed var(--sign-color, currentColor);
  border-radius: calc(var(--base-radius) + 0.25rem);
  pointer-events: none;
  z-index: 10;
  opacity: 0;

  transition:
    inset 0.2s var(--ease-squish),
    opacity 0.2s ease-out,
    border-width 0.2s ease-out;
}

.sign-wrapper.is-active::before {
  inset: -0.5rem;
  background: oklch(from var(--sign-color) l c h / 0.1);
  opacity: 1;
  border: 2px dashed var(--sign-color, currentColor);
}

.sign-wrapper.xray-static { --sign-color: var(--clr-static); }
.sign-wrapper.xray-dynamic { --sign-color: var(--clr-dynamic); }
.sign-wrapper.xray-metalinguistic { --sign-color: var(--clr-metalinguistic); }

.sign-indicator {
  position: absolute;
  z-index: 20;
  cursor: pointer;

  width: 32px;
  height: 32px;
  border-radius: 0.5rem;
  border: none;
  background-color: var(--sign-color);
  color: var(--clr-bg);
  display: flex;
  align-items: center;
  justify-content: center;

  /* Remover quando adicionar os ícones */
  font-size: 1rem;
  font-style: normal;
  font-weight: bold;

  anchor-name: var(--btn-anchor);

  position-anchor: var(--anchor-name);
  position-area: top right;

  opacity: 0;
  scale: 0.8;
  transition: opacity 0.3s ease-out, scale 0.3s var(--ease-squish);

  span {
    font-size: 1.25rem;
    font-variation-settings:
      'FILL' 1,
      'wght' 400,
      'GRAD' 0,
      'opsz' 24;
  }
}

.sign-wrapper.is-active .sign-indicator {
  opacity: 1;
  scale: 1;
}

.sign-popover {
  margin-block: 0.25rem;
  border: 1px solid var(--clr-border);
  background-color: var(--clr-bg);
  padding: 1rem;
  border-radius: 0.5rem;
  font-style: normal;
  width: 288px;

  position-anchor: var(--btn-anchor);
  position-area: bottom span-left;

  position-try-fallbacks:
    bottom span-right,
    top span-left,
    top span-right;

  opacity: 0;
  scale: 0.95;
  transform: translateY(1rem);
  transition:
    opacity 0.2s ease-out,
    scale 0.2s var(--ease-squish),
    transform 0.2s ease-out;
}

.sign-popover:popover-open {
  opacity: 1;
  scale: 1;
  transform: translateY(0px);
}

@starting-style {
  .sign-popover:popover-open {
    opacity: 0;
    scale: 0.95;
    transform: translateY(10px);
  }
}

header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
}

h4 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem
}

.sign-badge {
  font-size: 0.75rem;
  text-transform: uppercase;
  background-color: oklch(from var(--sign-color) l c h / 0.3);
  padding: 0.25rem 0.5rem 0.2rem 0.5rem;
  line-height: 1;
  border-radius: 0.25rem;
  font-weight: 600;
}
.sign-popover p {
  font-size: 0.875rem;
  line-height: 1.4;
  text-align: left;
  text-wrap: balance;
}
</style>
