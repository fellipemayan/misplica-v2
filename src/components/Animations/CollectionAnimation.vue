<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const currentStep = ref(1);
const TOTAL_STEPS = 6;
let timerId: ReturnType<typeof setTimeout> | null = null;

// Controla o tempo de cada etapa (em milissegundos)
const stepTimes = [
  2000, // Etapa 1: Tela normal (2s)
  1500, // Etapa 2: Metalinguísticos (1.5s)
  1500, // Etapa 3: Estáticos (1.5s)
  1500, // Etapa 4: Dinâmicos (1.5s)
  4000, // Etapa 5: Camadas em Perspectiva (4s)
  1000  // Etapa 6: Transição rápida para reset (1s)
];

const startAnimation = () => {
  let step = 1;

  const next = () => {
    currentStep.value = step;
    // Define o tempo que esta etapa vai ficar na tela antes de chamar a próxima
    timerId = setTimeout(next, stepTimes[currentStep.value - 1]);

    // Incrementa o passo, voltando para 1 no final
    step = (step % TOTAL_STEPS) + 1;
  };

  next(); // Inicia a primeira chamada
};

onMounted(() => {
  startAnimation();
});

onUnmounted(() => {
  if (timerId) clearTimeout(timerId);
});
</script>

<template>
  <div
    class="animation-aspect-ratio"
    role="img"
    aria-label="Animação em loop do Método de Inspeção Semiótica. Uma interface padrão ganha cores diferentes em seus elementos. Em seguida, a interface se divide em três telas flutuantes sobrepostas em perspectiva cavaleira: a primeira destacando signos metalinguísticos, a segunda signos estáticos e a terceira signos dinâmicos."
  >
    <div
      class="animation-scene"
      :class="`step-${currentStep}`"
      aria-hidden="true"
    >

      <div class="screen base-screen">
        <header class="skel-header"></header>
        <aside class="skel-nav">
          <div class="skel-nav-item"></div>
          <div class="skel-nav-item"></div>
          <div class="skel-nav-item"></div>
        </aside>
        <main class="skel-content">
          <div class="skel-card large"></div>
          <div class="skel-card-grid">
            <div class="skel-card small"></div>
            <div class="skel-card small"></div>
          </div>
        </main>
      </div>

      <div class="screen layer-screen metal-layer">
        <header class="skel-header sign-highlight"></header>
        <aside class="skel-nav"><div class="skel-nav-item"></div><div class="skel-nav-item"></div><div class="skel-nav-item"></div></aside>
        <main class="skel-content"><div class="skel-card large"></div><div class="skel-card-grid"><div class="skel-card small"></div><div class="skel-card small"></div></div></main>
        <span class="layer-badge">Metalinguístico</span>
      </div>

      <div class="screen layer-screen static-layer">
        <header class="skel-header"></header>
        <aside class="skel-nav">
          <div class="skel-nav-item sign-highlight"></div>
          <div class="skel-nav-item sign-highlight"></div>
          <div class="skel-nav-item"></div>
        </aside>
        <main class="skel-content">
          <div class="skel-card large"></div>
          <div class="skel-card-grid"><div class="skel-card small sign-highlight"></div><div class="skel-card small"></div></div>
        </main>
        <span class="layer-badge">Estático</span>
      </div>

      <div class="screen layer-screen dynamic-layer">
        <header class="skel-header"></header>
        <aside class="skel-nav"><div class="skel-nav-item"></div><div class="skel-nav-item"></div><div class="skel-nav-item"></div></aside>
        <main class="skel-content">
          <div class="skel-card large sign-highlight"></div>
          <div class="skel-card-grid"><div class="skel-card small"></div><div class="skel-card small sign-highlight"></div></div>
        </main>
        <span class="layer-badge">Dinâmico</span>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* =========================================
   CONTAINER E CENA 3D
   ========================================= */
.animation-aspect-ratio {
  width: 100%;
  aspect-ratio: 5 / 4;
  /* padding-block: 80px; */
  background-color: var(--clr-bg);
  border-radius: var(--base-radius);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-bg-alt);
  border: 1px solid var(--clr-border);
  perspective: 2000px; /* Profundidade do 3D */

}

.animation-scene {
  width: 60%; /* A interface ocupa 60% do espaço para caber na perspectiva */
  aspect-ratio: 16 / 9;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 1.2s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* =========================================
   AS TELAS (SCREENS)
   ========================================= */
.screen {
  position: absolute;
  inset: 0;
  background-color: var(--clr-bg);
  border: 1px solid var(--clr-border);
  border-radius: 8px;
  padding: 1rem;

  /* Grid do Skeleton */
  display: grid;
  grid-template-areas: "header header" "nav content";
  grid-template-columns: 25% 1fr;
  grid-template-rows: 2rem 1fr;
  gap: 0.75rem;

  /* Animação suave para mover em 3D e revelar opacidade */
  transition: all 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Telas de Camada começam escondidas */
.layer-screen {
  opacity: 0;
  background-color: transparent;
  /* Uma borda super suave só para o usuário entender que é uma "tela de vidro" */
  border: 1px solid oklch(from var(--clr-border-muted) l c h / 0.4);
}

.layer-screen .skel-header:not(.sign-highlight),
.layer-screen .skel-nav-item:not(.sign-highlight),
.layer-screen .skel-card:not(.sign-highlight) {
  background-color: transparent;
}

/* Estrutura interna das telas */
.skel-header, .skel-nav-item, .skel-card {
  background-color: var(--clr-bg-alt);
  border-radius: 4px;
  transition: background-color 0.4s ease;
}

.skel-header { grid-area: header; }
.skel-nav { grid-area: nav; display: flex; flex-direction: column; gap: 0.5rem; }
.skel-nav-item { height: 1.25rem; width: 100%; }
.skel-content { grid-area: content; display: flex; flex-direction: column; gap: 0.75rem; }
.skel-card.large { flex: 1; }
.skel-card-grid { display: flex; gap: 0.75rem; height: 3rem; }
.skel-card.small { flex: 1; }

.layer-badge {
  position: absolute;
  /* Posiciona no Topo Esquerdo, puxando para fora da borda (como uma aba de pasta) */
  top: -24px;
  /* left: 8px; */

  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--clr-bg);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 0.3s ease 0.8s;
}

/* Cores fixas das telas de camada */
.metal-layer .sign-highlight { background-color: var(--clr-metalinguistic); }
.metal-layer .layer-badge { background-color: var(--clr-metalinguistic); }

.static-layer .sign-highlight { background-color: var(--clr-static); }
.static-layer .layer-badge { background-color: var(--clr-static); }

.dynamic-layer .sign-highlight { background-color: var(--clr-dynamic); }
.dynamic-layer .layer-badge { background-color: var(--clr-dynamic); }


/* =========================================
   A MÁQUINA DE ESTADOS (Animação)
   ========================================= */

/* Steps 1 a 4: A tela base colore seus próprios elementos */
.step-2 .base-screen .skel-header { background-color: var(--clr-metalinguistic); }

.step-3 .base-screen .skel-header { background-color: var(--clr-metalinguistic); }
.step-3 .base-screen .skel-nav-item:nth-child(1), .step-3 .base-screen .skel-nav-item:nth-child(2), .step-3 .base-screen .skel-card.small:first-child { background-color: var(--clr-static); }

.step-4 .base-screen .skel-header { background-color: var(--clr-metalinguistic); }
.step-4 .base-screen .skel-nav-item:nth-child(1), .step-4 .base-screen .skel-nav-item:nth-child(2), .step-4 .base-screen .skel-card.small:first-child { background-color: var(--clr-static); }
.step-4 .base-screen .skel-card.large, .step-4 .base-screen .skel-card.small:last-child { background-color: var(--clr-dynamic); }

/* --- STEP 5: A VISTA EXPLODIDA (Telescope) --- */
.step-5 .animation-scene {
  /* Mantemos o ângulo isométrico perfeito */
  transform: rotateX(55deg) rotateZ(-35deg);
}

/* A Base agora "foge" para cima e para a esquerda, e afunda no eixo Z */
.step-5 .base-screen {
  opacity: 0.8; /* Fica mais apagada para não competir */
  transform: translate3d(-60px, -60px, -40px);
}

.step-5 .base-screen .skel-header,
.step-5 .base-screen .skel-nav-item,
.step-5 .base-screen .skel-card {
  background-color: var(--clr-bg-alt);
}

/* Revela as telas de camada e os badges */
.step-5 .layer-screen { opacity: 1; }
.step-5 .layer-badge { opacity: 1; }

/* 1. Camada Metal: Move um pouco para baixo/direita e sobe no Z */
.step-5 .metal-layer {
  transform: translate3d(-30px, -30px, 40px);
}

/* 2. Camada Estática: Move mais para baixo/direita e sobe mais no Z */
.step-5 .static-layer {
  transform: translate3d(0px, 0px, 80px);
  /* Opcional: Adiciona uma sombra só na tela do meio para separar o "sanduíche" visualmente */
  box-shadow: -10px 10px 30px rgba(0,0,0,0.05);
}

/* 3. Camada Dinâmica: Move o máximo para baixo/direita e fica mais próxima do usuário */
.step-5 .dynamic-layer {
  transform: translate3d(30px, 30px, 120px);
  box-shadow: -10px 10px 30px rgba(0,0,0,0.1);
}

/* =========================================
   ACESSIBILIDADE EXTRA (Redução de Movimento)
   ========================================= */
@media (prefers-reduced-motion: reduce) {
  .animation-scene, .screen, .skel-header, .skel-nav-item, .skel-card {
    transition: opacity 0.5s ease !important; /* Troca os pulos 3D por um fade simples */
    transform: none !important;
  }
}
</style>
