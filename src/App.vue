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

    // Load saved preferences first
    store.loadState();

    // Restore light/dark mode preference
    const savedThemeMode = localStorage.getItem('theme');
    if (savedThemeMode === 'light' || savedThemeMode === 'dark') {
      theme.change(savedThemeMode)
    }

    // Then apply saved theme colors to Vuetify
    initializeTheme();

    return {
      theme,
      currentColors,
    };
  },
  computed: {
    isDark(): boolean {
      return this.theme.global.current.value.dark
    }
  },
  watch: {
    isDark: {
      handler(isDark: boolean) {
        const bgColor = isDark
          ? this.currentColors.background
          : this.currentColors.background;
        document.body.style.backgroundColor = bgColor;
      },
      immediate: true
    },
    'currentColors.background': {
      handler(newBg: string) {
        document.body.style.backgroundColor = newBg;
      }
    }
  }
})

</script>