<template>
  <div class="input-wrapper">
    <label for="example-input">Exemplo de label</label>
    <input id="example-input" type="text" placeholder="Digite algo..." />
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 240px;

  > * {
    flex: 1;
  }
}
</style>
