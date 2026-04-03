<script setup lang="ts">
const copySiteLink = async () => {
  const siteUrl = 'https://misplica.vercel.app';

  try {
    await navigator.clipboard.writeText(siteUrl);
    alert(`Link copiado com sucesso!\n\n${siteUrl}`);
  } catch (error) {
    alert(`Não foi possível copiar automaticamente. Selecione e copie:\n\n${siteUrl}`);
    console.error('Falha ao copiar:', error);
  }
};
</script>

<template>
  <button class="btn btn-primary btn-copy" @click="copySiteLink">
    <span class="material-symbols-outlined">content_copy</span>
    Copiar link
  </button>
</template>

<style scoped>
.btn-copy {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-left: 1.25rem;
}
.material-symbols-outlined {
  font-size: 1.25rem;
}
</style>
