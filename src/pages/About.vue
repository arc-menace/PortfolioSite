<script setup lang="ts">
import { useThemeStore } from '../store/themeStore';

const themeStore = useThemeStore();
</script>

<template>
    <h1 :style="{ color: themeStore.currentThemeColors.text }">About</h1>
</template>