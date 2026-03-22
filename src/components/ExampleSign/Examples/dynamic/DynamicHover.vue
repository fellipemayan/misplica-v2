<script setup lang="ts">
import { isMobile } from 'mobile-device-detect';
import { ref } from 'vue';

const isMobileDevice = isMobile;
const isHovered = ref(false);
const isPressed = ref(false);

const textContent = () => {
  if (isMobileDevice) {
    if (isPressed.value) {
      return 'Você tocou!';
    } else {
      return 'Toque aqui';
    }
  } else {
    if (isHovered.value) {
      return 'Você está sobre o botão!';
    } else {
      return 'Passe o mouse aqui';
    }
  }
};
</script>
<template>
  <button 
    @mouseenter="isHovered = true" 
    @mouseleave="isHovered = false" 
    @touchstart="isPressed = true"
    @touchend="isPressed = false"
    class="btn btn-primary">
    <span>{{ textContent() }}</span>
  </button>
</template>

<style scoped>
button {
  min-width: 24ch;
}
</style>