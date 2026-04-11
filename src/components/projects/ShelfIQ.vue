<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'
import TechChip from '../shared/TechChip.vue'
</script>

<template>
    <SlideSection title="ShelfIQ" icon="fa-solid fa-boxes-stacked" label="ShelfIQ project">
        <p class="project-desc">CPG assortment and reporting software for retail category teams that automates Space Planning via a COM interface</p>
        <div class="tag-list">
            <TechChip label="C#" icon="fa-brands fa-windows" />
            <TechChip label="SQL Server" icon="fa-solid fa-database" />
            <TechChip label="Oracle DB" icon="fa-solid fa-database" />
            <TechChip label="COM Interop" icon="fa-brands fa-windows"/>
            <TechChip label="WPF" icon="fa-solid fa-window-maximize" />
            <TechChip label="Space Planning" icon="fa-solid fa-boxes-stacked" />
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
