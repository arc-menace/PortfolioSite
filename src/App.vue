<script setup lang="ts">
import { defineAsyncComponent, watch } from 'vue'
import { useTheme } from 'vuetify'
import Navbar from './components/Navbar/Navbar.vue';
import Home from './pages/Home.vue';
import Cookies from './components/cookies/Cookies.vue';
import { useGlobalStore } from './store/globalStore';
import { useThemeColors } from './composables/useThemeColors';

const Projects = defineAsyncComponent(() => import('./pages/Projects.vue'));
const Contact = defineAsyncComponent(() => import('./pages/Contact.vue'));

const store = useGlobalStore();
const theme = useTheme();
const { initializeTheme, currentColors } = useThemeColors();

// Load saved preferences (selectedThemeId, consent, theme mode)
store.loadState();

// Restore light/dark mode preference
if (store.savedThemeMode) {
  theme.change(store.savedThemeMode)
}

// Apply saved preset colors to Vuetify
initializeTheme();

watch(() => currentColors.value.background, (newBg: string) => {
  document.body.style.backgroundColor = newBg;
}, { immediate: true });
</script>

<template>
  <Navbar />

  <Home />
  <Projects />
  <Contact />

  <Cookies />
</template>