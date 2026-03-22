<template>
  <p class="false-link">Isto não é um link</p>
</template>

<style scoped>
.false-link {
  color: oklch(from var(--clr-primary) calc(l - 0.15) c h);
  text-decoration: underline;
  cursor: pointer;
}
</style>
