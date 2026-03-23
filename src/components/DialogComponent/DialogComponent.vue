<script setup lang="ts">
import { onUnmounted, ref, watch } from 'vue';

const isOpen = defineModel<boolean>('open', { default: false });
const dialogRef = ref<HTMLDialogElement | null>(null);

const isClosing = ref(false);

watch(isOpen, (newVal) => {
  if (newVal) {
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.paddingRight = `${scrollbarWidth}px`;
    document.body.style.overflow = 'hidden';

    dialogRef.value?.showModal();
  } else {
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';

    isClosing.value = true;

    setTimeout(() => {
      dialogRef.value?.close();
      isClosing.value = false;
    }, 300);
  }
});

const onNativeClose = () => {
  isOpen.value = false;
};

onUnmounted(() => {
  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
});
</script>

<template>
  <dialog
    ref="dialogRef"
    class="dialog"
    :class="{ 'is-closing': isClosing }"
    @cancel.prevent="onNativeClose"
    @close="onNativeClose"
  >
    <button class="btn-close" @click="isOpen = false" aria-label="Fechar modal">
      <span class="material-symbols-outlined">close</span>
    </button>

    <div class="dialog-content">
      <slot />
    </div>
  </dialog>
</template>

<style scoped>
.dialog {
  padding: 1.5rem;
  border: 1px solid var(--clr-border);
  border-radius: var(--base-radius);
  background-color: var(--clr-bg);
  color: var(--clr-text);
  margin: auto;

  width: 90%;
  max-width: 480px;
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
}

.dialog::backdrop {
  background-color: rgb(0 0 0 / 0.5);
  backdrop-filter: blur(4px);
}

.btn-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--clr-text-muted);
  transition: color 0.2s;
}

.btn-close:hover {
  color: var(--clr-text);
}

.dialog[open] {
  animation: fade-in 0.3s ease-out forwards;
}
.dialog[open]::backdrop {
  animation: fade-in 0.3s ease-out forwards;
}

.dialog.is-closing {
  animation: fade-out 0.3s ease-in forwards;
}
.dialog.is-closing::backdrop {
  animation: fade-out 0.3s ease-in forwards;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fade-out {
  from { opacity: 1; }
  to { opacity: 0; }
}
</style>
