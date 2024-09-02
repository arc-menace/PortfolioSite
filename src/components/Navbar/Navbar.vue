<script setup lang="ts">

import { useThemeStore } from '../../store/themeStore';
import NavbarButton from './NavbarButton.vue';

const themeStore = useThemeStore();

</script>

<template>

<div class="navbar" :style="{ backgroundColor: themeStore.currentThemeColors.primary }">
    <NavbarButton :index="1" text="Home" :onClick="() => {}" />
    <NavbarButton :index="2" text="About" :onClick="() => {}" />
    <NavbarButton :index="3" text="Projects" :onClick="() => {}" />
    <NavbarButton :index="4" text="Contact" :onClick="() => {}" />
    <NavbarButton :index="5" text="Resume" :onClick="() => {}" />
    <NavbarButton :index="6" text="Blog" :onClick="() => {}" />
</div>

</template>

<style scoped>

.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 2rem;
    height: 4rem;
    padding: 0 1rem;
}

</style>
