<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue';
import ControlsComponent from './components/ControlsComponent/ControlsComponent.vue';
import FooterComponent from './components/FooterComponent/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import MainContent from './components/MainContent/MainContent.vue';
import SidebarComponent from './components/SidebarComponent/SidebarComponent.vue';
import XRayComponent from './components/XRayComponent/XRayComponent.vue';
import SnackbarComponent from './components/SnackbarComponent/SnackbarComponent.vue';
const isDesktop = ref(true);

onMounted(() => {
  const mql = window.matchMedia('(min-width: 1280px)');

  isDesktop.value = mql.matches;

  const updateLayout = (e: MediaQueryListEvent) => {
    isDesktop.value = e.matches;
  };

  mql.addEventListener('change', updateLayout);

  onUnmounted(() => {
    mql.removeEventListener('change', updateLayout);
  });
});
</script>

<template>
  <HeaderComponent />
  <SnackbarComponent />
  <XRayComponent />
  <aside class="sidebar desktop-only" id="desktop-sidebar-container"></aside>
  <MainContent />
  <aside class="controls desktop-only" id="desktop-controls-container"></aside>
  <FooterComponent />

  <div id="drawer-controls" class="mobile-drawer" popover="auto">
    <div id="mobile-controls-container" class="drawer-content"></div>
  </div>

  <div id="drawer-sidebar" class="mobile-drawer" popover="auto">
    <div id="mobile-sidebar-container" class="drawer-content"></div>
  </div>


  <Teleport :to="isDesktop ? '#desktop-controls-container' : '#mobile-controls-container'">
    <ControlsComponent />
  </Teleport>

  <Teleport :to="isDesktop ? '#desktop-sidebar-container' : '#mobile-sidebar-container'">
    <SidebarComponent />
  </Teleport>

</template>
