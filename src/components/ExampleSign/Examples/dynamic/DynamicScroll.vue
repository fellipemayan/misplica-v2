<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

// Estados do botão flutuante
const savedPosition = ref<number | null>(null);
const showResumeButton = ref(false);

// Travas para o scroll automático não bugar o observador
let isAutoScrolling = false;
let autoScrollTimeout: ReturnType<typeof setTimeout> | null = null;

// Função 1: Salva a posição atual e sobe
const scrollToTop = () => {
  // 1. Grava exatamente onde o usuário está lendo agora
  savedPosition.value = window.scrollY;
  isAutoScrolling = true;

  // 2. Joga a tela pro topo
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // 3. Mostra o botão flutuante apenas quando chegar lá em cima (após ~800ms)
  if (autoScrollTimeout) clearTimeout(autoScrollTimeout);
  autoScrollTimeout = setTimeout(() => {
    isAutoScrolling = false;
    showResumeButton.value = true;
  }, 800);
};

// Função 2: Devolve o usuário para a posição salva e esconde o botão
const resumeReading = () => {
  if (savedPosition.value === null) return;
  
  isAutoScrolling = true;
  window.scrollTo({ top: savedPosition.value, behavior: 'smooth' });
  
  // Esconde o botão na mesma hora que ele clica
  showResumeButton.value = false;

  if (autoScrollTimeout) clearTimeout(autoScrollTimeout);
  autoScrollTimeout = setTimeout(() => {
    isAutoScrolling = false;
    savedPosition.value = null; // Limpa a memória
  }, 800);
};

// Função 3: O "Olheiro". Esconde o atalho se o usuário começar a descer a página sozinho
const handleManualScroll = () => {
  // Se a tela estiver voando sozinha ou se não houver posição salva, ignora
  if (isAutoScrolling || savedPosition.value === null) return;

  // Se o usuário desceu mais de 200px na mão, assumimos que ele 
  // desistiu do atalho e voltou a ler naturalmente.
  if (window.scrollY > 200) {
    showResumeButton.value = false;
    savedPosition.value = null;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleManualScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleManualScroll);
  if (autoScrollTimeout) clearTimeout(autoScrollTimeout);
});
</script>

<template>
  <button 
    class="btn btn-primary" 
    @click="scrollToTop">
    <span class="material-symbols-outlined">arrow_upward</span>
    Voltar para o topo
  </button>

  <Transition name="slide">
    <button 
      v-if="showResumeButton" 
      class="btn btn-primary btn-resume" 
      @click="resumeReading"
      aria-label="Voltar para a leitura"
    >
      <span class="material-symbols-outlined">arrow_downward</span>
      Retomar leitura
    </button>
  </Transition>
</template>

<style scoped>
.btn-primary {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1rem;
}
.btn-resume {
  position: fixed;
  top: calc(var(--header-height) + 1.5rem);
  left: 50%;
  z-index: 100;
  
  translate: -50% 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.3s ease, translate 0.3s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  translate: -50% -2rem; 
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  translate: -50% 0; 
} 
</style>