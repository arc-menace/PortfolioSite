<script setup lang="ts">
import { defineAsyncComponent, ref, provide, watch } from 'vue'
import { useTheme } from 'vuetify'
import Navbar from './components/navbar/Navbar.vue'
import Home from './pages/Home.vue'
import Cookies from './components/cookies/Cookies.vue'
import Slideshow from './components/slideshow/Slideshow.vue'
import DogsSection from './components/about/DogsSection.vue'
import SmartHomeSection from './components/about/SmartHomeSection.vue'
import MusicSection from './components/about/MusicSection.vue'
import ShelfIQ from './components/projects/ShelfIQ.vue'
import WordlClone from './components/projects/WordlClone.vue'
import GrowlerStation from './components/projects/GrowlerStation.vue'
import { useGlobalStore } from './store/globalStore'
import { useThemeColors } from './composables/useThemeColors'
import { SLIDE_IDS } from './config/slides'

const Projects = defineAsyncComponent(() => import('./pages/Projects.vue'))
const Contact = defineAsyncComponent(() => import('./pages/Contact.vue'))

const store = useGlobalStore()
const theme = useTheme()
const { initializeTheme, currentColors } = useThemeColors()

store.loadState()

if (store.savedThemeMode) {
  theme.change(store.savedThemeMode)
}

initializeTheme()

watch(() => currentColors.value.background, (newBg: string) => {
  document.body.style.backgroundColor = newBg
}, { immediate: true })

const slideIds = Object.values(SLIDE_IDS)

const slideshowRef = ref<{ goToId: (id: string) => void } | null>(null)
provide('goToSlide', (id: string) => slideshowRef.value?.goToId(id))
</script>

<template>
  <a href="#main-content" class="skip-nav">Skip to main content</a>

  <header>
    <Navbar />
  </header>

  <main id="main-content">
    <Slideshow ref="slideshowRef" :slide-ids="slideIds">
      <div class="slide"><Home /></div>
      <div class="slide"><DogsSection /></div>
      <div class="slide"><SmartHomeSection /></div>
      <div class="slide"><MusicSection /></div>
      <div class="slide"><Projects /></div>
      <div class="slide"><ShelfIQ /></div>
      <div class="slide"><WordlClone /></div>
      <div class="slide"><GrowlerStation /></div>
      <div class="slide"><Contact /></div>
    </Slideshow>
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
