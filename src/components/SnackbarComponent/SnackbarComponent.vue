<script setup lang="ts">
import { useSnackbar } from '@/composables/useSnackbar';

const { isVisible, message, type, hideSnackbar } = useSnackbar();
</script>

<template>
  <Transition name="slide-down">
    <div v-if="isVisible" class="snackbar" :class="`is-${type}`" role="alert">
      <span class="material-symbols-outlined icon">
        {{ type === 'success' ? 'check_circle' : type === 'error' ? 'error' : 'info' }}
      </span>

      <p>{{ message }}</p>

      <button class="btn-close" @click="hideSnackbar" aria-label="Fechar notificação">
        <span class="material-symbols-outlined">close</span>
      </button>
    </div>
  </Transition>
</template>

<style scoped>
.snackbar {
  position: fixed;
  top: calc(var(--header-height) + 1.5rem);
  left: 50%;
  translate: -50% 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  background-color: var(--clr-bg);
  color: var(--clr-text);
  padding: 0.5rem 1rem 0.5rem 0.5rem;

  border-radius: var(--base-radius);
  border: 1px solid var(--clr-border);
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
}

.snackbar p {
  margin: 0;
  font-size: 0.875rem;
  font-weight: 500;
}

.icon {
  font-size: 1.5rem;
  font-variation-settings: "FILL" 1;
}

.is-success .icon { color: var(--clr-success); }
.is-error .icon { color: var(--clr-error); }
.is-info .icon { color: var(--clr-primary); }

.btn-close {
  background: transparent;
  border: none;
  color: var(--clr-text-muted);
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0.25rem;
  border-radius: 50%;
  margin-left: 0.5rem;
  transition: background-color 0.2s;
}

.btn-close:hover {
  background-color: var(--clr-bg-alt);
  color: var(--clr-text);
}

.btn-close .material-symbols-outlined {
  font-size: 1.25rem;
}

.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.slide-down-enter-from,
.slide-down-leave-to {
  opacity: 0;
  translate: -50% -1rem;
  scale: 0.95;
}
</style>
