<template>
  <div class="loader-container">
    <div class="loader-indicator"></div>
  </div>
  <span>Carregando...</span>
</template>

<style scoped>
.loader-container {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}

.loader-indicator {
  width: 100%;
  height: 100%;
  border: 0.5rem solid var(--clr-primary);
  border-top-color: var(--clr-border-muted);
  border-radius: 50%;
  animation: spin 1s cubic-bezier(0.645, 0.045, 0.355, 1) infinite;
}

@keyframes spin {
	0% {
		transform: rotate(0deg);
	}
	100% {
		transform: rotate(360deg);
	}
}
</style>
