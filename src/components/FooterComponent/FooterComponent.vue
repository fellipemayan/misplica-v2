<script setup lang="ts">
import SignComponent from '../SignComponent/SignComponent.vue';

</script>

<template>
  <footer class="footer">
    <p>&copy; Fellipe Mayan e Thiago Reis</p>
  </footer>
</template>

<style scoped>
.footer {
  grid-column: full-start / full-end;
  grid-row: 3;

  display: grid;
  grid-template-columns: subgrid;

  align-items: center;
  padding-block: 1rem;
  background-color: var(--clr-bg);
  border-top: 1px solid var(--clr-border);

}

p {
  grid-column: content-start / content-end;
}

</style>
