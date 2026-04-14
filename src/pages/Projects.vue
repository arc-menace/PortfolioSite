<script setup lang="ts">
import SlideSection from '../components/slideshow/SlideSection.vue'
</script>

<template>
    <SlideSection title="What I've Built" icon="fa-solid fa-code">
        <p class="intro-text">A few things I've worked on. Swipe to dig in.</p>
    </SlideSection>
</template>

<style scoped>
.intro-text {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.7;
    margin: 0;
    line-height: 1.6;
}
</style>
