<script setup lang="ts">
import HeaderComponent from './components/Header/HeaderComponent.vue';
import SignComponent from './components/SignComponent/SignComponent.vue';
import XRayComponent from './components/XRayComponent/XRayComponent.vue';
// import { activeXRay } from './composables/UseXRay';


// const activeLabel = computed(() => {
//   return activeXRay.value ? activeXRay.value.toUpperCase() : 'DESATIVADO'
// })
</script>

<template>
  <HeaderComponent />
  <XRayComponent />
  <aside class="sidebar">
    <h2>Nesta página</h2>
  </aside>
  <main class="main">
    <h1>MISplica</h1>
    <SignComponent id="painel-metadados"><h2>Dados</h2></SignComponent>
  </main>
  <aside class="controls">
    <h2>Controles</h2>
  </aside>
  <footer class="footer">
    <p>&copy; Fellipe Mayan e Thiago Reis</p>
  </footer>
</template>

<style scoped>

</style>
