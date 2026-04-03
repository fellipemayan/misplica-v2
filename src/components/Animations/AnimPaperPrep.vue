<script setup lang="ts">
const props = defineProps<{
  animation: 'active' | 'complete',
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

      <g class="doc-item" style="--d: 1">
        <rect x="24" y="25" width="60" height="12" fill="var(--anim-skel-dark)"/>
      </g>

      <g class="doc-item" style="--d: 2">
        <rect opacity="0.8" x="24" y="58" width="72" height="9" fill="var(--anim-skel-dark)"/>
      </g>

      <g class="doc-item" style="--d: 3">
        <path opacity="0.8" d="M29.5 76C31.433 76 33 77.567 33 79.5C33 80.6916 32.4037 81.7429 31.4941 82.375C33.5455 83.1738 35 85.1661 35 87.5V89H24V87.5C24 85.1664 25.454 83.174 27.5049 82.375C26.5957 81.7429 26 80.6913 26 79.5C26 77.567 27.567 76 29.5 76Z" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="41" y="76" width="135" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="41" y="85" width="108" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="41" y="94" width="81" height="6" fill="var(--anim-skel-dark)"/>
      </g>

      <g class="doc-item" style="--d: 4">
        <path opacity="0.8" d="M29.5 109C31.433 109 33 110.567 33 112.5C33 113.692 32.4037 114.743 31.4941 115.375C33.5455 116.174 35 118.166 35 120.5V122H24V120.5C24 118.166 25.454 116.174 27.5049 115.375C26.5957 114.743 26 113.691 26 112.5C26 110.567 27.567 109 29.5 109Z" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="41" y="109" width="135" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="41" y="118" width="81" height="6" fill="var(--anim-skel-dark)"/>
      </g>

      <g class="doc-item" style="--d: 5">
        <rect opacity="0.8" x="24" y="133" width="72" height="9" fill="var(--anim-skel-dark)"/>
      </g>
      <g class="doc-item" style="--d: 6">
        <rect opacity="0.6" x="24" y="151" width="152" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="24" y="160" width="121.6" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="24" y="169" width="91.2" height="6" fill="var(--anim-skel-dark)"/>
      </g>

      <g class="doc-item" style="--d: 7">
        <rect opacity="0.8" x="24" y="184" width="72" height="9" fill="var(--anim-skel-dark)"/>
      </g>
      <g class="doc-item" style="--d: 8">
        <rect opacity="0.6" x="24" y="202" width="152" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="24" y="211" width="121.6" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="24" y="220" width="91.2" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="24" y="235" width="152" height="6" fill="var(--anim-skel-dark)"/>
        <rect opacity="0.6" x="24" y="244" width="121.6" height="6" fill="var(--anim-skel-dark)"/>
      </g>

    </g>

  </svg>
</template>

<style scoped>

.active {
  &.step-1 .doc-item,
  &.step-2 .doc-item {
    opacity: 0;
    transform: translate(-9px);

    transition: opacity var(--dur-short) var(--ease-fill),
                transform var(--dur-short) var(--ease-fill);
  }

  &.step-3 .doc-item {
    opacity: 1;
    transform: translateX(0);

    transition: opacity var(--dur-fill) var(--ease-fill) calc(var(--d) * 0.1s),
              transform var(--dur-fill) var(--ease-fill) calc(var(--d) * 0.1s);
  }
}

.complete {
  &.doc-item {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .doc-item { transform: none !important; }
}
</style>
