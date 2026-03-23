<script setup lang="ts">
import DialogComponent from '@/components/DialogComponent/DialogComponent.vue';
import { useDialog } from '@/composables/useDialog';

const { isOpen, openDialog} = useDialog();
</script>

<template>
  <button
  class="btn btn-primary"
  @click="openDialog()"
  >Clique para abrir</button>
  <DialogComponent v-model:open="isOpen">
    <h3>Conteúdo do diálogo</h3>
    <p>Este é um exemplo de diálogo que pode ser usado para exibir informações adicionais ou opções.</p>
  </DialogComponent>
</template>
