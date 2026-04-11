<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'
</script>

<template>
    <SlideSection title="About Me">
        <p class="intro-text">Outside of work I'm into dogs, smart home tinkering, and music. Swipe to learn more.</p>
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
