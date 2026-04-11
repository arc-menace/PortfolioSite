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
  <a href="#main-content" class="skip-nav">Skip to main content</a>

  <header>
    <Navbar />
  </header>

  <main id="main-content">
    <Home />
    <Projects />
    <Contact />
  </main>

  <Cookies />
</template>

<style>
.skip-nav {
  position: absolute;
  top: -100%;
  left: 0;
  padding: 0.5rem 1rem;
  background: #000;
  color: #fff;
  font-size: 1rem;
  z-index: 9999;
  text-decoration: none;
}

.skip-nav:focus {
  top: 0;
}
</style>