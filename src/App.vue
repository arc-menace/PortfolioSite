<script setup lang="ts">
import { provide, watch } from 'vue'
import { useTheme } from 'vuetify'
import Navbar from './components/navbar/Navbar.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Projects from './pages/Projects.vue'
import Contact from './pages/Contact.vue'
import PrivacyNotice from './components/privacy/PrivacyNotice.vue'
import { useGlobalStore } from './store/globalStore'
import { useThemeColors } from './composables/useThemeColors'
import { useSectionNav } from './composables/useSectionNav'
import type { SectionId } from './config/sections'

const store = useGlobalStore()
const theme = useTheme()
const { initializeTheme, currentColors } = useThemeColors()

store.loadState()

if (store.savedThemeMode) {
  theme.change(store.savedThemeMode)
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  theme.change(prefersDark ? 'dark' : 'light')
}

initializeTheme()

watch(() => currentColors.value.background, (newBg: string) => {
  document.body.style.backgroundColor = newBg
}, { immediate: true })

const { activeSectionId, isScrolled, goToSection } = useSectionNav()
provide('goToSection', goToSection)
provide('activeSectionId', activeSectionId)
provide('isScrolled', isScrolled)

// Record each section the first time it scrolls into view.
const viewedSections = new Set<SectionId>()
watch(activeSectionId, (id) => {
  if (viewedSections.has(id)) return
  viewedSections.add(id)
  window.umami?.track('slide-view', { slide: id })
})

const year = new Date().getFullYear()
</script>

<template>
  <a href="#main-content" class="skip-nav">Skip to main content</a>

  <header>
    <Navbar />
  </header>

  <main id="main-content">
    <Home />
    <About />
    <Projects />
    <Contact />
  </main>

  <footer class="site-footer">
    <div class="site-footer-inner">&copy; {{ year }} Joe Hahn</div>
  </footer>

  <PrivacyNotice />
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

.site-footer {
  padding: 0 var(--page-gutter);
}

.site-footer-inner {
  max-width: var(--page-max-width);
  margin: 0 auto;
  padding: 1.5rem 0 2rem;
  border-top: 1px solid var(--hairline);
  font-size: 0.875rem;
  color: var(--text-subtle);
}
</style>
