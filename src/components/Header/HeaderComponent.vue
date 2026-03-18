<script setup lang="ts">
import SignComponent from '../SignComponent/SignComponent.vue';

</script>

<template>
  <header class="header">
    <h1 class="header-title">MISplica</h1>
    <nav class="header-nav">
      <ul class="header-nav-list">
        <li class="header-nav-item">
          <SignComponent id="botao-sobre">
            <button class="btn btn-icon btn-secondary">Sobre</button>
          </SignComponent>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  grid-column: full-start / full-end;
  grid-row: 1;

  display: grid;
  grid-template-columns: subgrid;

  align-items: center;
  padding-block: 1rem;
  background-color: var(--clr-bg);
  border-bottom: 1px solid var(--clr-border);

  position: sticky;
  top: 0;
}

h1 {
  grid-column: content-start / main-start;
}

nav {
  grid-column: main-end;
  display: flex;
  justify-content: flex-end;
}

ul {
  list-style: none;
}
</style>
