<script setup lang="ts">
import { usePreferencesStore } from '@/stores/preferenceStore';
import SignComponent from '../SignComponent/SignComponent.vue';


const preferencesStore = usePreferencesStore()
</script>

<template>
  <h2>Controles</h2>

  <div class="controls-form">
    <SignComponent id="signo-tema" tag="div" class="control-group">
      <span class="control-label">Tema</span>
      <div class="btn-group" role="group" aria-label="Escolha o tema">
        <button
          class="btn-segment"
          :class="{ active: preferencesStore.state.theme === 'default' }"
          :aria-pressed="preferencesStore.state.theme === 'default'"
          @click="preferencesStore.state.theme = 'default'"
        >Sistema</button>

        <button
          class="btn-segment"
          :class="{ active: preferencesStore.state.theme === 'light' }"
          :aria-pressed="preferencesStore.state.theme === 'light'"
          @click="preferencesStore.state.theme = 'light'"
        >Claro</button>

        <button
          class="btn-segment"
          :class="{ active: preferencesStore.state.theme === 'dark' }"
          :aria-pressed="preferencesStore.state.theme === 'dark'"
          @click="preferencesStore.state.theme = 'dark'"
        >Escuro</button>
      </div>
    </SignComponent>

    <SignComponent id="signo-contraste" class="control-group">
      <span class="control-label">Contraste</span>
      <div class="btn-group" role="group" aria-label="Escolha o contraste">
        <button
          class="btn-segment"
          :class="{ active: preferencesStore.state.contrast === 'default' }"
          :aria-pressed="preferencesStore.state.contrast === 'default'"
          @click="preferencesStore.state.contrast = 'default'"
        >Padrão</button>

        <button
          class="btn-segment"
          :class="{ active: preferencesStore.state.contrast === 'high' }"
          :aria-pressed="preferencesStore.state.contrast === 'high'"
          @click="preferencesStore.state.contrast = 'high'"
        >Alto</button>
      </div>
    </SignComponent>

    <SignComponent id="signo-fonte" class="control-group">
      <span class="control-label">Tamanho da fonte</span>
      <div class="btn-group" role="group" aria-label="Escolha o tamanho da fonte">
        <button
          class="btn-segment"
          :class="{ active: preferencesStore.state.fontSize === 'small' }"
          :aria-pressed="preferencesStore.state.fontSize === 'small'"
          @click="preferencesStore.state.fontSize = 'small'"
        >Pequeno</button>

        <button
          class="btn-segment"
          :class="{ active: preferencesStore.state.fontSize === 'default' }"
          :aria-pressed="preferencesStore.state.fontSize === 'default'"
          @click="preferencesStore.state.fontSize = 'default'"
        >Padrão</button>

        <button
          class="btn-segment"
          :class="{ active: preferencesStore.state.fontSize === 'large' }"
          :aria-pressed="preferencesStore.state.fontSize === 'large'"
          @click="preferencesStore.state.fontSize = 'large'"
        >Grande</button>
      </div>
    </SignComponent>

    <SignComponent id="signo-animacoes" class="control-group checkbox-group">
      <label for="pref-animations">Permitir animações visuais</label>
      <input
        type="checkbox"
        id="pref-animations"
        v-model="preferencesStore.state.animations"
      >
    </SignComponent>
  </div>
</template>

<style scoped>
h2 {
  font-size: 1.25rem;
  color: var(--clr-text-muted);
  margin-bottom: 1rem;
}

.controls {
  overflow-y: scroll;
  height: 100%;
}

.controls-form {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.control-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.control-label {
  font-size: 0.9rem;
}
.btn-group {
  display: flex;
  background-color: var(--clr-bg-alt);
  border: 1px solid var(--clr-border);
  border-radius: var(--base-radius);
  padding: 0.25rem;
  gap: 0.25rem;
}

.btn-group {
  --base-radius: 0.5rem;
  display: flex;
  background-color: var(--clr-bg-alt);
  border: 1px solid var(--clr-border);
  border-radius: calc(var(--base-radius) + 0.25rem);
  padding: 0.25rem;
  gap: 0.25rem;
}

.btn-segment {
  flex: 1;
  background: transparent;
  border: 1px solid transparent;
  padding: 0.5rem;
  border-radius: var(--base-radius);

  color: var(--clr-text-muted);
  cursor: pointer;
  font-size: 0.85rem;
  font-weight: 500;
  transition: all 0.2s ease;
}

.btn-segment:hover {
  color: var(--clr-text);
}

.btn-segment.active {
  background-color: var(--clr-bg);
  color: var(--clr-text);
  border: 1px solid var(--clr-border);
}

.checkbox-group {
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.checkbox-group label {
  font-weight: normal;
  font-size: 0.9rem;
  cursor: pointer;
  color: var(--clr-text);
}

input[type="checkbox"] {
  width: 1.2rem;
  height: 1.2rem;
  cursor: pointer;
}

</style>
