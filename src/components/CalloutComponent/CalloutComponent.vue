<script setup lang="ts">

const props = defineProps<{
  message: string;
}>()
</script>

<template>
  <div class="callout">
    <span class="material-symbols-outlined">info</span>
    <p>
      {{ props.message }}
    </p>
  </div>
</template>

<style scoped>
.callout {
  display: flex;
  line-height: 1.25;
  background-color: var(--clr-bg-alt);
  border: var(--clr-border);
  border-radius: var(--base-radius);
  padding: 1rem;
  margin-block: 1rem;
  gap: 0.5rem;

  font-size: 1rem;

  span {
    font-size: 1.25rem;
  }
}


</style>
