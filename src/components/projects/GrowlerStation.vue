<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'
import TechChip from '../shared/TechChip.vue'
</script>

<template>
    <SlideSection title="The Growler Station" icon="fa-solid fa-beer-mug-empty" label="The Growler Station project">
        <p class="project-desc">A menu creation and management tool for bars and restaurants.</p>
        <div class="tag-list">
            <TechChip label="C#" icon="fa-brands fa-microsoft" />
            <TechChip label="MVC" />
            <TechChip label="Blazor" />
            <TechChip label="Identity Server" />
            <TechChip label="JWT" />
            <TechChip label="SQL" />
            <TechChip label="Android" icon="fa-brands fa-android" />
            <TechChip label="Entity Framework" />
        </div>
        <div class="project-links">
            <!-- Add links when ready:
            <a href="" target="_blank" rel="noopener noreferrer" class="project-link">
                <i class="fa-brands fa-github" aria-hidden="true"></i> GitHub
            </a>
            -->
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
}

.project-link:hover {
    border-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-primary));
}
</style>
