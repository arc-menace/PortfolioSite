<script setup lang="ts">
import { useThemeStore } from './store/themeStore';
import { useNavigationStore } from './store/navigationStore';

import { watch } from 'vue';

import Navbar from './components/Navbar/Navbar.vue';
import ThemeButton from './components/ThemeButton.vue';
import PageManager from './components/PageManager.vue';

const themeStore = useThemeStore();

watch(() => themeStore.currentTheme, () => {
  document.body.style.backgroundColor = themeStore.currentThemeColors.background;
}, { immediate: true });

</script>

<template>

<Navbar />

<ThemeButton />

<PageManager />

</template>

<style scoped>
</style>

