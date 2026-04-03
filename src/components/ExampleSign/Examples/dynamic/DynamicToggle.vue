<script setup lang="ts">
import { ref } from 'vue';


const isOn = ref(false);
</script>

<template>

  <div class="toggle-container">
    <button 
      @click="isOn = !isOn" 
      class="toggle-button"
      :class="{ 'on': isOn, 'off': !isOn }"
    >
      <span class="toggle-message">{{ isOn ? 'Ligado' : 'Desligado' }}</span>
    </button>
    <span class="toggle-state">Estado atual: {{ isOn ? 'Ligado' : 'Desligado' }}</span>
  </div>
</template>

<style scoped>
.toggle-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.toggle-button {
  position: relative;
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  border: 1px solid var(--clr-border);
  border-radius: 3rem;
  height: 2.5rem;
  width: 4.5rem;

  
  &::after {
    content: '';
    display: block;
    width: 1.75rem;
    height: 1.75rem;
    border-radius: 50%;
    background-color: white;
    border: 1px solid var(--clr-border);
    position: absolute;
    top: 0.3rem;
    left: 0.3rem;
    transition: transform 0.3s ease;
  }
  &.off {
    background-color: oklch(from var(--clr-primary) l c h / 0.3);
  }

  &.on {
    background-color: var(--clr-primary);

    &::after {
      transform: translateX(2rem);
    }
  }
}

.toggle-message {
  display: none;
}
</style>