<script setup lang="ts">
import SignComponent from '../SignComponent/SignComponent.vue';

</script>

<template>
  <header class="header">
    <div class="header-wrapper">
      <h1 class="header-title">MISplica</h1>
      <nav class="header-nav">
        <ul class="header-nav-list">
          <li class="header-nav-item">
            <SignComponent
              id="botao-sobre"
              tag="button"
              class="btn btn-icon btn-secondary"
            >
              Sobre
            </SignComponent>            
          </li>
          <li class="show-on-mobile">
            <SignComponent
              id="botao-controles"
              tag="button"
              class="btn btn-icon btn-secondary"
            >
              Controles
            </SignComponent>
          </li>
          <li class="show-on-mobile">
            <SignComponent
              id="botao-sumario"
              tag="button"
              class="btn btn-icon btn-secondary"
            >
              Sumário
            </SignComponent>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  isolation: isolate;
  grid-column: full-start / full-end;
  grid-row: 1;

  display: grid;
  grid-template-columns: subgrid;

  height: var(--header-height);
  align-items: center;
  background-color: var(--clr-bg);
  border-bottom: 1px solid var(--clr-border);

  position: sticky;
  top: 0;
  z-index: 30;
}

.header-wrapper {
  grid-column: content-start / content-end;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  font-size: 1.5rem;
}

ul {
  display: flex;
  gap: 0.5rem;
}

ul {
  list-style: none;
}
</style>
