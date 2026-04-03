<script setup lang="ts">
import { ref } from 'vue';

const helperText = ref('A senha deve ter entre 8 e 20 caracteres.');
const helperClass = ref('');

const handleBlur = (event: Event) => {
  const target = event.target as HTMLInputElement;
  const value = target.value;

  if (value.length === 0) {
    helperText.value = 'A senha é obrigatória.';
    helperClass.value = 'error';
  } else if (value.length < 8) {
    helperText.value = 'A senha é muito curta.';
    helperClass.value = 'error';
  } else if (value.length < 12) {
    helperText.value = 'A senha é fraca.';
    helperClass.value = 'warning';
  } else if (value.length < 20) {
    helperText.value = 'A senha é forte.';
    helperClass.value = 'success';
  } else {
    helperText.value = 'A senha é muito longa.';
    helperClass.value = 'warning';
  }
};
</script>

<template>
  <div class="input-wrapper">
    <label for="example-input-metalinguistic">Senha</label>
    <input
      id="example-input-metalinguistic"
      type="password"
      placeholder="Digite uma senha forte..."
      @blur="handleBlur"
    />
    <span
      class="input-helper"
      :class="helperClass"
    >{{ helperText }}</span>
  </div>
</template>

<style scoped>
.input-helper {
  --color: var(--clr-text-muted);
  color: var(--color);
  font-size: 0.857rem;
}

.input-helper.success,
.input-helper.warning,
.input-helper.error {
  color: light-dark(
    oklch(from var(--color) calc(l - 0.1) c h),
    oklch(from var(--color) calc(l + 0.1) c h)
  );
}
.input-helper.success {
    --color: var(--clr-success);
  }
.input-helper.warning {
    --color: var(--clr-warning);
}
.input-helper.error {
    --color: var(--clr-error);
  }
</style>
