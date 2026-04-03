<script setup lang="ts">
const props = defineProps<{
  step?: number;
}>();
</script>

<template>
  <svg width="201" height="289" viewBox="0 0 201 289" fill="none" xmlns="http://www.w3.org/2000/svg" :class="[`step-${props.step}`]">

  <defs>
    <linearGradient id="shimmer" gradientUnits="userSpaceOnUse" x1="-200" y1="0" x2="0" y2="0">
      <stop offset="0%" stop-color="var(--anim-skel-dark)" stop-opacity="0.2"/>
      <stop offset="50%" stop-color="var(--anim-skel-dark)" stop-opacity="0.5"/>
      <stop offset="100%" stop-color="var(--anim-skel-dark)" stop-opacity="0.2"/>
      
      <animate attributeName="x1" values="-200; 200" dur="1.5s" repeatCount="indefinite" />
      <animate attributeName="x2" values="0; 400" dur="1.5s" repeatCount="indefinite" />
    </linearGradient>

    <mask id="path-1-inside-1_relato" fill="white">
      <path d="M150 1L200 51V283C200 286.314 197.314 289 194 289H6C2.68629 289 9.66414e-08 286.314 0 283V7C0 3.68629 2.68629 1 6 1H150Z"/>
    </mask>
    <mask id="mask-fold-relato" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="149" y="0" width="52" height="52">
      <path d="M149 0L201 52H149V0Z" fill="white"/>
    </mask>
  </defs>

  <path d="M150 1L200 51V283C200 286.314 197.314 289 194 289H6C2.68629 289 9.66414e-08 286.314 0 283V7C0 3.68629 2.68629 1 6 1H150Z" fill="var(--anim-surface)"/>
  <path d="M150 1L150.707 0.292893L150.414 0H150V1ZM200 51H201V50.5858L200.707 50.2929L200 51ZM0 283H-1V283H0ZM150 1L149.293 1.70711L199.293 51.7071L200 51L200.707 50.2929L150.707 0.292893L150 1ZM200 51H199V283H200H201V51H200ZM200 283H199C199 285.761 196.761 288 194 288V289V290C197.866 290 201 286.866 201 283H200ZM194 289V288H6V289V290H194V289ZM6 289V288C3.23858 288 1 285.761 1 283H0H-1C-1 286.866 2.13401 290 6 290V289ZM0 283H1V7H0H-1V283H0ZM0 7H1C1 4.23858 3.23858 2 6 2V1V0C2.13401 0 -1 3.13401 -1 7H0ZM6 1V2H150V1V0H6V1Z" fill="var(--anim-border-light)" mask="url(#path-1-inside-1_relato)"/>

  <g mask="url(#mask-fold-relato)">
    <path d="M199.5 1.5V51.5H155C151.962 51.5 149.5 49.0376 149.5 46V1.5H199.5Z" fill="var(--anim-skel-light)" stroke="var(--anim-border-light)"/>
  </g>

  <g class="loading-state" fill="url(#shimmer)">
      <g class="load-item" style="--d: 1">
        <rect x="24" y="75" width="65" height="6" />
        <rect x="92" y="75" width="72" height="6" />
      </g>
      <g class="load-item" style="--d: 2">
        <rect x="24" y="84" width="60" height="6" />
        <rect x="87" y="84" width="36" height="6" />
        <rect x="126" y="84" width="36" height="6" />
      </g>
      <g class="load-item" style="--d: 3">
        <rect x="24" y="93" width="120" height="6" />
      </g>
      <g class="load-item" style="--d: 4">
        <rect x="24" y="102" width="36" height="6" />
        <rect x="63" y="102" width="60" height="6" />
        <rect x="126" y="102" width="36" height="6" />
      </g>
      <g class="load-item" style="--d: 5">
        <rect x="24" y="111" width="60" height="6" />
        <rect x="87" y="111" width="60" height="6" />
      </g>

      <g class="load-item" style="--d: 6">
        <rect x="24" y="129" width="60" height="6" />
        <rect x="87" y="129" width="60" height="6" />
      </g>
      <g class="load-item" style="--d: 7">
        <rect x="24" y="138" width="60" height="6" />
      </g>
      <g class="load-item" style="--d: 8">
        <rect x="24" y="147" width="152" height="6" />
      </g>
      <g class="load-item" style="--d: 9">
        <rect x="24" y="156" width="120" height="6" />
      </g>

      <g class="load-item" style="--d: 10">
        <rect x="24" y="174" width="152" height="6" />
      </g>
      <g class="load-item" style="--d: 11">
        <rect x="24" y="183" width="60" height="6" />
        <rect x="87" y="183" width="60" height="6" />
      </g>
      <g class="load-item" style="--d: 12">
        <rect x="24" y="192" width="36" height="6" />
        <rect x="63" y="192" width="60" height="6" />
        <rect x="126" y="192" width="36" height="6" />
      </g>
      <g class="load-item" style="--d: 13">
        <rect x="24" y="201" width="120" height="6" />
      </g>
      <g class="load-item" style="--d: 14">
        <rect x="24" y="210" width="60" height="6" />
        <rect x="87" y="210" width="36" height="6" />
        <rect x="126" y="210" width="36" height="6" />
      </g>
    </g>

  <g class="doc-content">
    
    <g class="doc-item is-title" style="--d: 1">
      <rect x="24" y="25" width="60" height="12"/>
    </g>

    <g class="doc-item is-quote" style="--d: 2">
      <path d="M28.417 69H36V81H24V69L29 58H33L28.417 69Z" fill="var(--clr-primary, #0071DF)"/>
      <path d="M42.417 69H50V81H38V69L43 58H47L42.417 69Z" fill="var(--clr-primary, #0071DF)"/>
    </g>

    <g class="doc-item body-text" style="--d: 3">
      <rect opacity="0.6" x="53" y="75" width="36" height="6" />
      <rect opacity="0.6" x="92" y="75" width="72" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 4">
      <rect opacity="0.6" x="24" y="84" width="60" height="6" />
      <rect opacity="0.6" x="87" y="84" width="36" height="6" />
      <rect opacity="0.6" x="126" y="84" width="36" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 5">
      <rect opacity="0.6" x="24" y="93" width="120" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 6">
      <rect opacity="0.6" x="24" y="102" width="36" height="6" />
      <rect opacity="0.6" x="63" y="102" width="60" height="6" />
      <rect opacity="0.6" x="126" y="102" width="36" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 7">
      <rect opacity="0.6" x="24" y="111" width="60" height="6" />
      <rect opacity="0.6" x="87" y="111" width="60" height="6" />
    </g>

    <g class="doc-item body-text" style="--d: 8">
      <rect opacity="0.6" x="24" y="129" width="60" height="6" />
      <rect opacity="0.6" x="87" y="129" width="60" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 9">
      <rect opacity="0.6" x="24" y="138" width="60" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 10">
      <rect opacity="0.6" x="24" y="147" width="152" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 11">
      <rect opacity="0.6" x="24" y="156" width="120" height="6" />
    </g>

    <g class="doc-item body-text" style="--d: 12">
      <rect opacity="0.6" x="24" y="174" width="152" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 13">
      <rect opacity="0.6" x="24" y="183" width="60" height="6" />
      <rect opacity="0.6" x="87" y="183" width="60" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 14">
      <rect opacity="0.6" x="24" y="192" width="36" height="6" />
      <rect opacity="0.6" x="63" y="192" width="60" height="6" />
      <rect opacity="0.6" x="126" y="192" width="36" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 15">
      <rect opacity="0.6" x="24" y="201" width="120" height="6" />
    </g>
    <g class="doc-item body-text" style="--d: 16">
      <rect opacity="0.6" x="24" y="210" width="60" height="6" />
      <rect opacity="0.6" x="87" y="210" width="36" height="6" />
      <rect opacity="0.6" x="126" y="210" width="36" height="6" />
    </g>

  </g>
  </svg>
</template>

<style scoped>
.loading-state {  
  transition: opacity var(--dur-short) var(--ease-fade);
}

.step-4 .loading-state {
  opacity: 0;
}

.load-item {
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity var(--dur-short) var(--ease-fill),
              transform var(--dur-short) var(--ease-fill);
}

.step-3 .load-item {
  opacity: 1;
  transform: translateX(0);
  transition: opacity var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.05s),
              transform var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.05s);
}

.step-4 .load-item {
  opacity: 0;
  transform: translateX(9px);
}

.doc-item {
  opacity: 0;
  transform: translateX(-10px);
  fill: var(--anim-skel-dark);
  transition: opacity var(--dur-short) var(--ease-fill),
              transform var(--dur-short) var(--ease-fill),
              fill 0.4s var(--ease-fill);
}

.is-quote path {
  fill: var(--clr-primary) !important;
}

.step-1 .is-title, 
.step-2 .is-title, 
.step-3 .is-title,
.step-4 .is-title{
  fill: var(--anim-skel-dark);
  opacity: 1; transform: translateX(0);
}

.step-4 .is-quote {
  opacity: 1; transform: translateX(0);
  transition: opacity var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s),
              transform var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s);
}

.step-4 .body-text {
  opacity: 1; transform: translateX(0);
  transition: opacity var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.05s), /* 0.05s para escrever o textão mais rápido */
              transform var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.05s);
}

@media (prefers-reduced-motion: reduce) {
  .doc-item { transform: none !important; }
}
</style>
