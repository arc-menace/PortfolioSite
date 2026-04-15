<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'
import TechChip from '../shared/TechChip.vue'
</script>

<template>
    <SlideSection title="Wordle Clone" icon="fa-solid fa-square-check" label="Wordle Clone project">
        <p class="project-desc">A custom remake of the NYT Wordle game.</p>
        <div class="project-links">
            <a href="https://github.com/arc-menace/WordleDupe" target="_blank" rel="noopener noreferrer" class="project-link">
                <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub
            </a>
            <a href="https://arc-menace.github.io/WordleDupe/" target="_blank" rel="noopener noreferrer" class="project-link">
                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live
            </a>
        </div>
        <div class="tag-list">
            <TechChip label="Vue" icon="fa-brands fa-vuejs" />
            <TechChip label="TypeScript" />
            <TechChip label="Pinia" />
            <TechChip label="GitHub Pages" icon="fa-brands fa-github" />
            <TechChip label="REST API" icon="fa-solid fa-server" />
        </div>
    </SlideSection>
</template>

<style scoped>
.project-desc {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.75;
    margin: 0;
    line-height: 1.6;
    max-width: 600px;
}

.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.project-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    border: 1px solid rgb(var(--v-theme-text));
    border-radius: 6px;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    color: rgb(var(--v-theme-text));
    text-decoration: none;
    transition: border-color 0.15s ease, color 0.15s ease;
    width: 45%;
    justify-content: center;
}

.project-link:hover {
    border-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-primary));
}
</style>
