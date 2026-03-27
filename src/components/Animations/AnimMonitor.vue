<template>
  <svg
  class="anim-monitor-comp"
  width="320" height="210" viewBox="0 0 320 210" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Monitor -->
    <!-- Tela -->
    <rect  x="3" y="3" width="314" height="174" rx="5" fill="var(--anim-surface") stroke="var(--anim-border-dark)" stroke-width="6"/>
    <!-- Base -->
    <path d="M100 208.531C100 206.514 101.502 204.812 103.504 204.562L140 200L180 200L216.496 204.562C218.498 204.812 220 206.514 220 208.531V210H160H100V208.531Z" fill="var(--anim-border-dark)"/>
    <rect x="140" y="178" width="40" height="24" fill="var(--anim-border-dark)"/>

    <!-- Skeletons -->
    <rect class="skel-header" x="18" y="18" width="284" height="27.6" rx="3" fill="var(--anim-skel-light)"/>
    <rect class="skel-nav" x="18" y="51.6001" width="55.6" height="20" rx="3" fill="var(--anim-skel-light)"/>
    <rect class="skel-nav" x="18" y="75.6001" width="55.6" height="20" rx="3" fill="var(--anim-skel-light)"/>
    <rect class="skel-nav" x="18" y="99.6001" width="55.6" height="20" rx="3" fill="var(--anim-skel-light)"/>
    <rect class="skel-article-lg" x="79.6001" y="51.6001" width="222.4" height="52.2" rx="3" fill="var(--anim-skel-light)"/>
    <rect class="skel-article-md" x="79.6001" y="109.8" width="108.2" height="52.2" rx="3" fill="var(--anim-skel-light)"/>
    <rect class="skel-article-md" x="193.8" y="109.8" width="108.2" height="52.2" rx="3" fill="var(--anim-skel-light)"/>
  </svg>
</template>

<style scoped>
.skel-header, .skel-nav, .skel-card-lg, .skel-card-sm {
  fill: var(--anim-skel-light);
  transition: fill var(--dur-medium) var(--ease-fill, ease-out);
}

.hl-meta .skel-header {
  fill: var(--clr-metalinguistic);
  transition: fill var(--dur-medium) var(--ease-fill, ease-out);
}
.hl-static .skel-nav, .hl-static .skel-article-md {
  fill: var(--clr-static); transition:
  fill var(--dur-medium) var(--ease-fill, ease-out);
}
.hl-dynamic .skel-article-lg {
  fill: var(--clr-dynamic);
  transition: fill var(--dur-medium) var(--ease-fill, ease-out);
}
</style>
