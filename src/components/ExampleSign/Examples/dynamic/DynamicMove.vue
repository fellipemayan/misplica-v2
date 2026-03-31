<script setup lang="ts">
import { isMobile } from 'mobile-device-detect';
import { computed, onUnmounted, ref } from 'vue';

const isMobileDevice = isMobile;
const textContent = isMobileDevice ? 'Toque e arraste para mover o objeto' : 'Clique e arraste para mover o objeto';

const position = ref({
  x: 0,
  y: 0
});
const isDragging = ref(false);
const hasTransition = ref(true);

const areaRef = ref<HTMLElement | null>(null);
const itemRef = ref<HTMLElement | null>(null);

let startX = 0;
let startY = 0;
let initialX = 0;
let initialY = 0;
let returnTimeout: ReturnType<typeof setTimeout> | null = null;
let maxX = 0;
let maxY = 0;

const startDrag = (e: MouseEvent | TouchEvent) => {
  if (returnTimeout) clearTimeout(returnTimeout);

  isDragging.value = true;
  hasTransition.value = false;

  if (areaRef.value && itemRef.value) {
    const areaWidth = areaRef.value.clientWidth;
    const areaHeight = areaRef.value.clientHeight;
    const itemWidth = itemRef.value.offsetWidth;
    const itemHeight = itemRef.value.offsetHeight;

    maxX = (areaWidth - itemWidth) / 2;
    maxY = (areaHeight - itemHeight) / 2;
  }

  const clientX = 'touches' in e ? e.touches[0]!.clientX : e.clientX;
  const clientY = 'touches' in e ? e.touches[0]!.clientY : e.clientY;

  startX = clientX;
  startY = clientY;
  initialX = position.value.x;
  initialY = position.value.y;

  // Voltamos os ouvintes para o window. Assim, se o mouse sair da caixa
  // enquanto o usuário segura o botão, o objeto continua grudado na "parede"
  // aguardando o mouse voltar, em vez de cair.
  window.addEventListener('mousemove', drag);
  window.addEventListener('touchmove', drag, { passive: false });
  window.addEventListener('mouseup', endDrag);
  window.addEventListener('touchend', endDrag);
};

const drag = (e: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return;
  e.preventDefault();

  const clientX = 'touches' in e ? e.touches[0]!.clientX : e.clientX;
  const clientY = 'touches' in e ? e.touches[0]!.clientY : e.clientY;

  const dx = clientX - startX;
  const dy = clientY - startY;

  // Onde o mouse "quer" colocar o objeto
  const desiredX = initialX + dx;
  const desiredY = initialY + dy;

  // 2. A MÁGICA DO CLAMP (Limita a posição entre -max e +max)
  // Math.max pega o maior valor (evita vazar na esquerda/topo)
  // Math.min pega o menor valor (evita vazar na direita/fundo)
  position.value.x = Math.max(-maxX, Math.min(desiredX, maxX));
  position.value.y = Math.max(-maxY, Math.min(desiredY, maxY));
};

const endDrag = () => {
  if (!isDragging.value) return;
  isDragging.value = false;
  hasTransition.value = true;

  window.removeEventListener('mousemove', drag);
  window.removeEventListener('touchmove', drag);
  window.removeEventListener('mouseup', endDrag);
  window.removeEventListener('touchend', endDrag);

  returnTimeout = setTimeout(() => {
    position.value = { x: 0, y: 0 };
  }, 1000);
};

onUnmounted(() => {
  endDrag();
  if (returnTimeout) clearTimeout(returnTimeout);
});

const dynamicStyle = computed(() => ({
  transform: `translate(calc(-50% + ${position.value.x}px), calc(-50% + ${position.value.y}px))`,
  transition: hasTransition.value ? 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
  cursor: isDragging.value ? 'grabbing' : 'grab'
}));
</script>

<template>
  <div class="movable-area" ref="areaRef">
    <div
      :style="dynamicStyle"
      ref="itemRef"
      class="movable-item"
      :class="{ 'is-dragging': isDragging }"
      @mousedown.prevent="startDrag"
      @touchstart.passive="startDrag">
    <span class="material-symbols-outlined">drag_indicator</span>
    <p>{{ textContent }}</p>
  </div>
  </div>
</template>

<style scoped>
.movable-area {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.movable-item {
  width: 200px;
  background-color: var(--clr-bg);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px dashed var(--clr-border);
  border-radius: var(--base-radius);
  font-size: 0.875rem;
  cursor: move;
  padding: 0.5rem;
  gap: 0.5rem;

  position: absolute;
  top: 50%;
  left: 50%;
}
</style>
