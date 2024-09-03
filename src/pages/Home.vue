<script setup lang="ts">

import { useThemeStore } from '../store/themeStore';
import { watch } from 'vue';

const themeStore = useThemeStore();
import { ref, onMounted, onBeforeUnmount } from 'vue';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min.js';

const vantaRef = ref(null);

let vantaEffect : any = null;

watch(() => themeStore.currentTheme, () => {
    vantaEffect = NET({
        el: vantaRef.value,
        color: themeStore.currentThemeColors.primary,
        backgroundColor: themeStore.currentThemeColors.background,
        points: 10,
        maxDistance: 20,
        spacing: 15,
        showDots: true
    });
});

onMounted(() => {
  if (!vantaEffect) {
    vantaEffect = NET({
      el: vantaRef.value,
      color: themeStore.currentThemeColors.primary,
      backgroundColor: themeStore.currentThemeColors.background,
      points: 10,
      maxDistance: 20,
      spacing: 15,
      showDots: true
    });
  }
});

onBeforeUnmount(() => {
  if (vantaEffect) {
    vantaEffect.destroy();
    vantaEffect = null;
  }
});

</script>

<template>

<div ref="vantaRef" class="vanta-background"></div>

</template>

<style scoped>

.vanta-background {
  width: 100%;
  height: 100vh; /* Adjust height as needed */
  position: relative;
  overflow: hidden; /* Ensure the effect doesn't overflow */
}

</style>

