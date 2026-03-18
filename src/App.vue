<script setup lang="ts">
import ControlsComponent from './components/ControlsComponent/ControlsComponent.vue';
import FooterComponent from './components/FooterComponent/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent/HeaderComponent.vue';
import MainContent from './components/MainContent/MainContent.vue';
import SidebarComponent from './components/SidebarComponent/SidebarComponent.vue';
import XRayComponent from './components/XRayComponent/XRayComponent.vue';
</script>

<template>
  <HeaderComponent />
  <XRayComponent />
  <SidebarComponent />
  <MainContent />
  <ControlsComponent />
  <FooterComponent />
</template>
