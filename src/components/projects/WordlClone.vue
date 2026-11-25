<script setup lang="ts">
import ProjectSection from './ProjectSection.vue'
import TechChip from '../shared/TechChip.vue'
</script>

<template>
    <ProjectSection title="Wordle Clone" role="Personal Project">
        <p class="body-text">A custom remake of the NYT Wordle game that lets you play as many times as you want.</p>
        <div class="project-links">
            <a href="https://github.com/arc-menace/WordleDupe" data-umami-event="project-link-click" data-umami-event-project="wordle" data-umami-event-link="github" target="_blank" rel="noopener noreferrer" class="text-link">
                <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub
            </a>
            <a href="https://arc-menace.github.io/WordleDupe/" data-umami-event="project-link-click" data-umami-event-project="wordle" data-umami-event-link="live" target="_blank" rel="noopener noreferrer" class="text-link">
                <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i> Live
            </a>
        </div>
        <div class="tag-list">
            <TechChip label="Vue" icon="fa-brands fa-vuejs" url="https://vuejs.org/"/>
            <TechChip label="TypeScript" url="https://www.typescriptlang.org/"/>
            <TechChip label="Pinia" url="https://pinia.vuejs.org/"/>
            <TechChip label="GitHub Pages" icon="fa-brands fa-github" url="https://docs.github.com/en/pages"/>
        </div>
    </ProjectSection>
</template>

<style scoped>
.project-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.75rem;
}

.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}
</style>
