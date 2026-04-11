<script setup lang="ts">
import SlideSection from '../SlideSection.vue'
</script>

<template>
    <SlideSection title="The Growler Station" icon="fa-solid fa-beer-mug-empty" label="The Growler Station project">
        <p class="project-desc">A menu creation and management tool for bars and restaurants.</p>
        <div class="tag-list">
            <span class="tag">C#</span>
            <span class="tag">MVC</span>
            <span class="tag">Blazor</span>
            <span class="tag">Identity Server</span>
            <span class="tag">JWT</span>
            <span class="tag">SQL</span>
            <span class="tag">Android</span>
            <span class="tag">Entity Framework</span>
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

.tag {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.82rem;
    padding: 0.3rem 0.7rem;
    border: 1px solid rgba(var(--v-theme-primary), 0.6);
    border-radius: 4px;
    color: rgb(var(--v-theme-primary));
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
