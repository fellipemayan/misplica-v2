<script setup lang="ts">
import { ref } from 'vue';
import DialogComponent from '../DialogComponent/DialogComponent.vue';
import SignComponent from '../SignComponent/SignComponent.vue';

const isOpen = ref(false);

const openModal = () => { isOpen.value = true; };
const closeModal = () => { isOpen.value = false; };
</script>

<template>
  <SignComponent
    id="botao-sobre"
    tag="button"
    class="btn btn-icon btn-secondary"
    @click="openModal" aria-label="Sobre o projeto"
  >
    <span class="material-symbols-outlined">help</span>
  </SignComponent>

  <DialogComponent v-model:open="isOpen">
    <div class="about-content">
      <h2 class="title">Sobre o MISplica</h2>

      <div class="prose">
        <p>
          O <strong>MISplica</strong> é uma ferramenta interativa desenvolvida para que você possa conhecer e aprender sobre o Método de Inspeção Semiótica (MIS) de forma prática e didática. Ele permite que você explore os conceitos fundamentais para a sua execução, como executá-lo e onde você pode achar mais informações a respeito do método.
        </p>
        <p>
          Ao longo desta experiência, você aprenderá sobre os tipos de signos semióticos, como identificá-los e como aplicar o MIS para avaliar a comunicabilidade de interfaces digitais.
        </p>

        <h3>Sobre o Raio-X</h3>
        <p>
          O Raio-X é uma ferramenta interativa que permite explorar os signos semióticos nesta página. Ele destaca os elementos de interface de acordo com a "lente" que você escolhe.
        </p>
        <p>
          Para usá-lo, basta clicar em uma das opções no menu flutuante que fica no canto inferior da página. Você poderá, então, ver um indicador de signo para os elementos da interface, que serão destacados com diferentes cores e ícones, junto com um texto explicativo sobre o que torna aquele elemento um determinado tipo de signo.
        </p>

        <hr>

        <p class="credits">Desenvolvido por Fellipe Mayan, Thiago dos Reis e Ingrid Monteiro :)</p>
      </div>

      <div class="actions">
        <button class="btn btn-primary" @click="closeModal">
          Voltar a explorar
        </button>
      </div>
    </div>
  </DialogComponent>
</template>

<style scoped>
.dialog {
  max-width: 640px;
  max-height: 80%;
}

.btn-header {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  border: none;
  color: var(--clr-text-muted);
  font-weight: 500;
  cursor: pointer;
  transition: color 0.2s;
}

.btn-header:hover {
  color: var(--clr-text);
}

.about-content {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.prose h3 {
  margin-block: 2.5rem 0.5rem;
}

.prose p {
  margin-bottom: 1rem;
}

.prose strong {
  color: var(--clr-text);
}

.prose hr {
  margin-block: 1.5rem;
}

.prose .credits {
  font-size: 0.875rem;
  color: var(--clr-text-muted);
  text-align: center;
}

.actions {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}
</style>
