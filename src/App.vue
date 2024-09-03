<script setup lang="ts">
import { useThemeStore } from './store/themeStore';

import Navbar from './components/Navbar/Navbar.vue';
import ThemeButton from './components/ThemeButton.vue';
import PageManager from './components/PageManager.vue';

const themeStore = useThemeStore();

themeStore.setTheme('dark');

</script>

<template>

<Navbar />

<ThemeButton />

<PageManager />

</template>

<style scoped>
</style>

