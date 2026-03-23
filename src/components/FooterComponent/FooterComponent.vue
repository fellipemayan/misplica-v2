<script setup lang="ts">
import ChangelogDialog from '../AboutDialog/ChangelogDialog.vue';

</script>

<template>
  <footer class="footer">
    <div>
      <p>&copy; Fellipe Mayan e Thiago Reis</p>
      <ChangelogDialog />
    </div>
  </footer>
</template>

<style scoped>
.footer {
  grid-column: full-start / full-end;
  grid-row: 3;

  display: flex;

  align-items: center;
  padding-block: 1rem;
  background-color: var(--clr-bg);
  border-top: 1px solid var(--clr-border);
  padding-inline: 2rem;

  > div {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 0.85rem;
    max-width: 180ch;

    p {
      margin-right: auto;
    }
  }
}


</style>
