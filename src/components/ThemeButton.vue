<script setup lang="ts">
import { useThemeStore } from '../store/themeStore';

const themeStore = useThemeStore();
</script>

<template>
    <button @click="themeStore.setTheme(themeStore.currentTheme === 'light' ? 'dark' : 'light')">Toggle Theme</button>
</template>

<style scoped>
</style>