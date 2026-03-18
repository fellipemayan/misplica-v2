<script setup lang="ts">
import { activeXRay } from '@/composables/UseXRay';
import type { XRayType } from '@/types/types';
import SignComponent from '../SignComponent/SignComponent.vue';

const toggleXRay = (type: XRayType) => {
  if (activeXRay.value === type) {
    activeXRay.value = null;
  } else {
    activeXRay.value = type;
  }
}
</script>

<template>
  <SignComponent id="xray" class="xray">
    <h2 class="xray-title">Raio-X</h2>

    <button
      class="xray-btn static"
      :class="{active: activeXRay === 'static'}"
      @click="toggleXRay('static')"
      title="Raio-X estático"
    >
      Estático
    </button>
    <button
      class="xray-btn dynamic"
      :class="{active: activeXRay === 'dynamic'}"
      @click="toggleXRay('dynamic')"
      title="Raio-X dinâmico"
    >
      Dinâmico
    </button>
    <button
      class="xray-btn metalinguistic"
      :class="{active: activeXRay === 'metalinguistic'}"
      @click="toggleXRay('metalinguistic')"
      title="Raio-X metalinguístico"
    >
      Metalinguístico
    </button>
  </SignComponent>
</template>

<style scoped>
.xray {
  display: flex !important;
  align-items: center;
  padding: 0.5rem;
  padding-left: 1rem;
  gap: 0.5rem;
  position: absolute !important;
  bottom: 1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--clr-bg);
  border: 1px solid var(--clr-border);
  border-radius: 1rem;

  h2 {
    font-size: 1rem;
    margin-right: 1rem;
  }
}

.xray-btn {
  --background: transparent;
  --color: var(--clr-btn-text);

  background-color: var(--background);
  color: var(--color);
  border: 1px solid var(--clr-border);
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;

  cursor: pointer;

  transition: background-color 0.3s, color 0.3s;

  &:hover {
    --color: var(--clr-text-btn);
  }

  &.static:hover, &.static.active {
    --background: var(--clr-static);
  }
  &.dynamic:hover, &.dynamic.active {
    --background: var(--clr-dynamic);
  }
  &.metalinguistic:hover, &.metalinguistic.active {
    --background: var(--clr-metalinguistic);
  }

  &.active {
    --color: var(--clr-bg);
  }

  &:hover {
    background-color: light-dark(
      oklch(from var(--background) calc(l - 0.15) c h),
      oklch(from var(--background) calc(l + 0.1) c h)
    );
  }
}
</style>
