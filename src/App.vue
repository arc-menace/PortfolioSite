<template>
  <Navbar />

  <Home />
  <Projects />
  <Resume />
  <Contact />

  <Cookies />
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from 'vue'
import { useTheme } from 'vuetify'
import Navbar from './components/Navbar/Navbar.vue';
import Home from './pages/Home.vue';
import Cookies from './components/cookies/Cookies.vue';

const Projects = defineAsyncComponent(() => import('./pages/Projects.vue'));
const Resume = defineAsyncComponent(() => import('./pages/Resume.vue'));
const Contact = defineAsyncComponent(() => import('./pages/Contact.vue'));
import { useGlobalStore } from './store/globalStore';
import { useThemeColors } from './composables/useThemeColors';

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
    Home,
    Projects,
    Resume,
    Contact,
    Cookies
  },
  setup() {
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
