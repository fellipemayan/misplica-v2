<script setup lang="ts">
const props = defineProps<{
  animation: 'consolid' | 'complete';
  step?: number;
}>();
</script>

<template>
  <svg width="201" height="289" viewBox="0 0 201 289" fill="none" xmlns="http://www.w3.org/2000/svg" :class="[props.animation, `step-${props.step}`]">

    <!-- papel (preenchimento)-->
    <path d="M150 1L200 51V283C200 286.314 197.314 289 194 289H6C2.68629 289 9.66414e-08 286.314 0 283V7C0 3.68629 2.68629 1 6 1H150Z" fill="var(--anim-surface)"/>
    <!-- papel (dobra) -->
    <mask id="path-1-inside-1_6_278" fill="white">
      <path d="M150 1L200 51V283C200 286.314 197.314 289 194 289H6C2.68629 289 9.66414e-08 286.314 0 283V7C0 3.68629 2.68629 1 6 1H150Z"/>
    </mask>
    <path d="M150 1L150.707 0.292893L150.414 0H150V1ZM200 51H201V50.5858L200.707 50.2929L200 51ZM0 283H-1V283H0ZM150 1L149.293 1.70711L199.293 51.7071L200 51L200.707 50.2929L150.707 0.292893L150 1ZM200 51H199V283H200H201V51H200ZM200 283H199C199 285.761 196.761 288 194 288V289V290C197.866 290 201 286.866 201 283H200ZM194 289V288H6V289V290H194V289ZM6 289V288C3.23858 288 1 285.761 1 283H0H-1C-1 286.866 2.13401 290 6 290V289ZM0 283H1V7H0H-1V283H0ZM0 7H1C1 4.23858 3.23858 2 6 2V1V0C2.13401 0 -1 3.13401 -1 7H0ZM6 1V2H150V1V0H6V1Z" fill="var(--anim-border-light)" mask="url(#path-1-inside-1_6_278)"/>

    <mask id="mask0_6_278" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="149" y="0" width="52" height="52">
      <path d="M149 0L201 52H149V0Z" fill="var(--anim-border-light)"/>
    </mask>

    <g mask="url(#mask0_6_278)">
      <path d="M199.5 1.5V51.5H155C151.962 51.5 149.5 49.0376 149.5 46V1.5H199.5Z" fill="var(--anim-skel-light)" stroke="var(--anim-border-light)"/>
    </g>

    <!-- papel (contorno) -->
    <mask id="path-5-inside-2_6_278" fill="white">
      <path d="M150 1L200 51V283C200 286.314 197.314 289 194 289H6C2.68629 289 9.66414e-08 286.314 0 283V7C0 3.68629 2.68629 1 6 1H150Z"/>
    </mask>
    <path d="M150 1L150.707 0.292893L150.414 0H150V1ZM200 51H201V50.5858L200.707 50.2929L200 51ZM0 283H-1V283H0ZM150 1L149.293 1.70711L199.293 51.7071L200 51L200.707 50.2929L150.707 0.292893L150 1ZM200 51H199V283H200H201V51H200ZM200 283H199C199 285.761 196.761 288 194 288V289V290C197.866 290 201 286.866 201 283H200ZM194 289V288H6V289V290H194V289ZM6 289V288C3.23858 288 1 285.761 1 283H0H-1C-1 286.866 2.13401 290 6 290V289ZM0 283H1V7H0H-1V283H0ZM0 7H1C1 4.23858 3.23858 2 6 2V1V0C2.13401 0 -1 3.13401 -1 7H0ZM6 1V2H150V1V0H6V1Z" fill="var(--anim-border-light)" mask="url(#path-5-inside-2_6_278)"/>

    <g class="doc-content">
      
      <g class="doc-item is-title" style="--d: 1">
        <rect x="24" y="25" width="60" height="12"/>
      </g>

      <g class="doc-item success-h2" style="--d: 1">
        <rect opacity="0.8" x="24" y="58" width="72" height="9" fill="var(--anim-skel-dark)"/>
        <path d="M113.7 59.7998L106.5 67L102 62.5L103.8 60.7002L106.5 63.4004L111.9 58L113.7 59.7998Z"/>
      </g>
      <g class="doc-item success-item" style="--d: 2">
        <rect opacity="0.6" x="24" y="76" width="36" height="6" />
        <rect opacity="0.6" x="63" y="76" width="72" height="6" />
      </g>
      <g class="doc-item success-item" style="--d: 3">
        <rect opacity="0.6" x="24" y="85" width="60" height="6" />
        <rect opacity="0.6" x="87" y="85" width="36" height="6" />
        <rect opacity="0.6" x="126" y="85" width="36" height="6" />
      </g>
      <g class="doc-item success-item" style="--d: 4">
        <rect opacity="0.6" x="24" y="94" width="60" height="6" />
        <rect opacity="0.6" x="87" y="94" width="60" height="6" />
      </g>
      <g class="doc-item success-item" style="--d: 5">
        <rect opacity="0.6" x="24" y="103" width="120" height="6" />
      </g>
      <g class="doc-item success-item" style="--d: 6">
        <rect opacity="0.6" x="24" y="112" width="60" height="6" />
        <rect opacity="0.6" x="87" y="112" width="36" height="6" />
      </g>

      <g class="doc-item error-h2" style="--d: 1">
        <rect opacity="0.8" x="24" y="139" width="72" height="9" fill="var(--anim-skel-dark)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M110.999 140.8L108.299 143.5L110.999 146.2L109.199 148L106.499 145.3L103.8 148L102 146.2L104.699 143.5L102 140.801L103.8 139L106.499 141.699L109.199 139L110.999 140.8Z"/>
      </g>
      <g class="doc-item error-item" style="--d: 2">
        <rect opacity="0.6" x="24" y="157" width="36" height="6" />
        <rect opacity="0.6" x="63" y="157" width="72" height="6" />
      </g>
      <g class="doc-item error-item" style="--d: 3">
        <rect opacity="0.6" x="24" y="166" width="72" height="6" />
        <rect opacity="0.6" x="99" y="166" width="60" height="6" />
      </g>
      <g class="doc-item error-item" style="--d: 4">
        <rect opacity="0.6" x="24" y="175" width="60" height="6" />
        <rect opacity="0.6" x="87" y="175" width="60" height="6" />
      </g>
      <g class="doc-item error-item" style="--d: 5">
        <rect opacity="0.6" x="24" y="184" width="120" height="6" />
      </g>
      <g class="doc-item error-item" style="--d: 6">
        <rect opacity="0.6" x="24" y="193" width="36" height="6" />
        <rect opacity="0.6" x="63" y="193" width="36" height="6" />
        <rect opacity="0.6" x="102" y="193" width="60" height="6" />
      </g>

    </g>

  </svg>
</template>

<style scoped>
.doc-item {
  opacity: 0;
  transform: translateX(-10px);
  fill: var(--anim-skel-dark);
  transition: opacity var(--dur-short) var(--ease-fill),
              transform var(--dur-short) var(--ease-fill),
              fill 0.4s var(--ease-fill);
}

.consolid {
  &.step-1 .is-title, 
  &.step-2 .is-title, 
  &.step-3 .is-title,
  &.step-4 .is-title,
  &.step-5 .is-title {
    opacity: 1; transform: translateX(0); fill: var(--anim-skel-dark);
  }

  &.step-3 .success-h2,
  &.step-4 .success-h2,
  &.step-5 .success-h2 {
    opacity: 1; transform: translateX(0); fill: var(--clr-success);
    transition: opacity var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s),
                transform var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s);
  }

  &.step-3 .success-item,
  &.step-4 .success-item,
  &.step-5 .success-item {
    opacity: 1; transform: translateX(0); fill: var(--clr-success);
    transition: opacity var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s),
                transform var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s),
                fill var(--dur-medium) var(--ease-fill);
  }

  &.step-4 .success-item {
    opacity: 1; transform: translateX(0); fill: var(--anim-skel-dark);
  }

  &.step-4 .error-h2,
  &.step-5 .error-h2 {
    opacity: 1; transform: translateX(0); fill: var(--clr-error);
    transition: opacity var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s),
                transform var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s),
                fill var(--dur-medium) var(--ease-fill);
  }

  &.step-4 .error-item,
  &.step-5 .error-item {
    opacity: 1; transform: translateX(0); fill: var(--clr-error);
    transition: opacity var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s),
                transform var(--dur-medium) var(--ease-fill) calc(var(--d) * 0.1s),
                fill var(--dur-medium) var(--ease-fill);
  }
}

.complete {
  .is-title,
  .success-item,
  .success-h2,
  .error-item,
  .error-h2 { 
    opacity: 1; 
    transform: translateX(0); 
    fill: var(--anim-skel-dark); 
  }
}

@media (prefers-reduced-motion: reduce) {
  .doc-item { transform: none !important; }
}
</style>
