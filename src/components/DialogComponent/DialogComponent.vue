<script setup lang="ts">
import { ref, watch } from 'vue';

const isOpen = defineModel<boolean>('open', { default: false });
const dialogRef = ref<HTMLDialogElement | null>(null);

const props = defineProps<{
  persistent?: boolean;
  signId: string;
}>();

const isClosing = ref(false);
const popoverRef = ref<HTMLElement | null>(null);

watch(isOpen, (newVal) => {
  if (!popoverRef.value) return;

  const isNativeOpen = popoverRef.value.matches(':popover-open');

  if (newVal && !isNativeOpen) {
    popoverRef.value.showPopover();
  } else if (!newVal && isNativeOpen) {
    popoverRef.value.hidePopover();
  }
});

// 2. Ouve o evento nativo para atualizar o Vue (Ex: o usuário apertou ESC ou clicou fora)
const onToggle = (e: ToggleEvent) => {
  isOpen.value = e.newState === 'open';
};

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
// });
</script>

<template>
  <div
    ref="popoverRef"
    class="base-popover"
    :popover="props.persistent ? 'manual' : 'auto'"
    @toggle="onToggle"
  >
    <SignComponent :id="props.signId">

      <button class="btn-close" @click="isOpen = false" aria-label="Fechar popover">
        <span class="material-symbols-outlined">close</span>
      </button>

      <div class="popover-content">
        <slot />
      </div>

    </SignComponent>
  </div>
</template>

<style scoped>
.base-popover {
  /* Removemos o estilo do wrapper nativo para o SignComponent brilhar */
  padding: 0;
  border: none;
  background: transparent;
  margin: auto; /* A API Popover já centraliza na tela nativamente */

  width: 90%;
  max-width: 480px;

  /* =======================================================
   A MÁGICA DA ANIMAÇÃO NATIVA (Sem setTimeout)
   =======================================================
  */
  opacity: 0;
  transform: scale(0.95) translateY(10px);

  /* allow-discrete permite animar display: none e a top-layer (overlay) */
  transition: opacity 0.3s ease-out,
              transform 0.3s ease-out,
              overlay 0.3s ease-out,
              display 0.3s ease-out;
  transition-behavior: allow-discrete;
}

/* Estado Aberto */
.base-popover:popover-open {
  opacity: 1;
  transform: scale(1) translateY(0);

  /* @starting-style garante que a animação de *entrada* saiba de onde começar */
  @starting-style {
    opacity: 0;
    transform: scale(0.95) translateY(10px);
  }
}

/* Opcional: Você ainda pode ter um fundo escurecido se quiser focar a leitura */
.base-popover::backdrop {
  background-color: rgb(0 0 0 / 0.4);
  backdrop-filter: blur(4px);

  opacity: 0;
  transition: opacity 0.3s ease-out, overlay 0.3s ease-out, display 0.3s ease-out;
  transition-behavior: allow-discrete;
}

.base-popover:popover-open::backdrop {
  opacity: 1;
  @starting-style {
    opacity: 0;
  }
}

/* =======================================================
   CONTEÚDO INTERNO
   ======================================================= */
.popover-content {
  background-color: var(--clr-bg);
  color: var(--clr-text);
  padding: 1.5rem;
  border-radius: var(--base-radius);
  border: 1px solid var(--clr-border); /* Borda movida pra cá */
  box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  position: relative;
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
  z-index: 10;
}

.btn-close:hover {
  color: var(--clr-text);
}

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
