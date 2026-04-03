<script setup lang="ts">
import { computed, ref } from 'vue';

const selectedOption = ref('option1');

const selectedOptionText = computed(() => {
  switch (selectedOption.value) {
    case 'option1':
      return 'Opção 1';
    case 'option2':
      return 'Opção 2';
    case 'option3':
      return 'Opção 3';
    default:
      return '';
  }
});
</script>

<template>
  <div class="input-wrapper">
    <label for="example-input-dynamic">Título</label>
    <select v-model="selectedOption" id="example-input-dynamic">
      <option value="option1">Opção 1</option>
      <option value="option2">Opção 2</option>
      <option value="option3">Opção 3</option>
    </select>
    <span>Opção selecionada: {{ selectedOptionText }}</span>
  </div>
</template>
