<script setup lang="ts">
import SignComponent from '../SignComponent/SignComponent.vue';
</script>

<template>
  <main class="main">
    <section>
      <SignComponent id="titulo" tag="h1">MIS: o Método de Inspeção Semiótica</SignComponent>
      <SignComponent id="subtitulo" tag="p" class="subtitle">Um guia sobre o método e como aplicá-lo.</SignComponent>

      <hr>
    </section>

    <section id="introducao">
      <span class="section-title">Introdução</span>
      <SignComponent id="introducao-titulo" tag="h2">A conversa por trás da interface</SignComponent>
      <SignComponent id="introducao-paragrafo1" tag="p">
        Já parou para pensar que cada clique, cada ícone e cada mensagem em uma interface digital é parte de uma conversa?
      </SignComponent>
      <p>A <strong>Engenharia Semiótica</strong>, proposta por Clarisse Sieckenius de Souza, parte da ideia de que a <strong>Interação Humano-Computador (IHC)</strong> é, na verdade, uma comunicação mediada por computador entre designers e usuários. Nessa "conversa", o próprio sistema atua como um "delegado" ou "preposto" dos seus designers, transmitindo a visão deles sobre quem são os usuários, o que eles precisam fazer e como interagir.</p>
      <p>Essa comunicação sobre a comunicação é o que chamamos de metacomunicação, que pode ser descrita de acordo com o seguinte modelo:</p>
      <blockquote>
        "Esse é o meu entendimento de quem você é, o que eu aprendi que você quer ou precisa fazer, de que formas preferidas e por quê. Este é, portanto, o sistema que eu criei para você, e essa é a forma que você pode ou deve usá-lo para atingir uma série de objetivos dentro desta visão."
      </blockquote>
    </section>

  </main>
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  line-height: 1.25;
  margin-block: 3rem 1rem;
}

h2 {
  font-size: 1.75rem;
  margin-block: 1rem;
}

.subtitle {
  font-size: 1.25rem;
  font-style: italic;
}

.section-title {
  background-color: var(--clr-bg-alt);
  font-size: 0.875rem;
  text-transform: uppercase;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: var(--base-radius);
}

p {
  font-size: 1rem;
  line-height: 1.75;
  margin-block: 0 1rem;
}

section {
  margin-top: 3rem;

  &:last-child {
    margin-bottom: 6rem;
  }
}
</style>
