<script setup lang="ts">

import { useThemeStore } from '../../store/themeStore';
import { useNavigationStore } from '../../store/navigationStore';
import NavbarButton from './NavbarButton.vue';

const themeStore = useThemeStore();
const navigationStore = useNavigationStore();

</script>

<template>

<div class="navbar" :style="{ backgroundColor: themeStore.currentThemeColors.primary }">
    <NavbarButton :index="1" text="Home" :onClick="() => {navigationStore.setCurrentPage('home')}" />
    <NavbarButton :index="2" text="Projects" :onClick="() => {navigationStore.setCurrentPage('projects')}" />
    <NavbarButton :index="3" text="Resume" :onClick="() => {navigationStore.setCurrentPage('resume')}" />
    <NavbarButton :index="4" text="Blog" :onClick="() => {navigationStore.setCurrentPage('blog')}" />
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
