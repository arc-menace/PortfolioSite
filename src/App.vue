<script setup lang="ts">

import Navbar from './components/navbar/Navbar.vue';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import Resume from './pages/Resume.vue';

import { useTheme } from 'vuetify'
import { watch } from 'vue'

const theme = useTheme()

watch(() => theme.global.current.value.dark, (isDark) => {
  document.body.style.backgroundColor = isDark ? '#1c1b22' : '#ffffff'
}, { immediate: true })

</script>

<template>
<Navbar />

<Home />
<Projects />
<Resume />

</template>