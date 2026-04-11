<template>
  <Navbar />

  <Home />
  <Projects />
  <Resume />

  <Cookies />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useTheme } from 'vuetify'
import Navbar from './components/Navbar/Navbar.vue';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Resume from './pages/Resume.vue';
import Cookies from './components/cookies/Cookies.vue';
import { useGlobalStore } from './store/globalStore';
import { useThemeColors } from './composables/useThemeColors';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Home,
    Projects,
    Resume,
    Cookies
  },
  setup() {
    const store = useGlobalStore();
    const theme = useTheme();
    const { initializeTheme, currentColors } = useThemeColors();

    // Load saved preferences (selectedThemeId, consent)
    store.loadState();

    // Restore light/dark mode preference
    const savedThemeMode = localStorage.getItem('theme');
    if (savedThemeMode === 'light' || savedThemeMode === 'dark') {
      theme.change(savedThemeMode)
    }

    // Apply saved preset colors to Vuetify
    initializeTheme();

    return {
      currentColors,
    };
  },
  watch: {
    'currentColors.background': {
      handler(newBg: string) {
        document.body.style.backgroundColor = newBg;
      },
      immediate: true,
    }
  }
})

</script>
