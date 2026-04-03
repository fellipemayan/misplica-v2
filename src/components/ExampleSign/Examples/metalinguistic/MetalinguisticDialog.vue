<script setup lang="ts">
import PopoverComponent from '@/components/PopoverComponent/PopoverComponent.vue';
import { useDialog } from '@/composables/useDialog';

const { isOpen, openDialog} = useDialog();
</script>

<template>
  <button
  class="btn btn-primary"
  @click="openDialog()"
  >Clique para abrir</button>
  <PopoverComponent
    v-model:open="isOpen"
    signId="example-meta-2"
    :persistent="false"
    width="sm"
  >
    <h3>Conteúdo do diálogo</h3>
    <p>Este é um exemplo de diálogo que pode ser usado para exibir informações adicionais ou opções.</p>
  </PopoverComponent>
</template>
