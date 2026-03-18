<script setup lang="ts">
</script>

<template>
  <aside class="controls">
    <h2>Controles</h2>
  </aside>
</template>

<style scoped>
.controls {
  position: sticky;
  top: calc(var(--header-height) + var(--sticky-offset));
  align-self: start;
}

h2 {
  font-size: 1.25rem;
  color: var(--clr-text-alt);
  margin-bottom: 1rem;
  letter-spacing: 0.05em;
}

</style>
