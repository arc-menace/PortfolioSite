<script setup lang="ts">
import { useThemeStore } from './store/themeStore';
import { watch } from 'vue';

import Navbar from './components/Navbar/Navbar.vue';
import ThemeButton from './components/ThemeButton.vue';
const themeStore = useThemeStore();

watch(() => themeStore.currentTheme, () => {
  document.body.style.backgroundColor = themeStore.currentThemeColors.background;
}, { immediate: true });

</script>

<template>

<Navbar />

<ThemeButton />
    
</template>

<style scoped>
</style>

