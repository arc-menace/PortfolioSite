<script setup lang="ts">
import SlideSection from '../components/slideshow/SlideSection.vue'

const projects = [
    {
        icon: 'fa-solid fa-boxes-stacked',
        name: 'ShelfIQ',
        role: 'Software Engineer II',
        description: 'CPG assortment and reporting software for retail category teams. Built workflow engines, integrations, and analytical dashboards.',
        tags: ['.NET', 'Blazor', 'WPF', 'SQL Server'],
    },
    {
        icon: 'fa-solid fa-square-check',
        name: 'Wordle Clone',
        role: 'Personal Project',
        description: 'A custom remake of the NYT Wordle game with unlimited plays. Built with Vue 3 and deployed on GitHub Pages.',
        tags: ['Vue', 'TypeScript', 'Pinia'],
    },
    {
        icon: 'fa-solid fa-beer-mug-empty',
        name: 'Growler Station',
        role: 'Software Engineer I',
        description: 'Menu creation and management tool for bars and restaurants, with an Android TV display app for live menus.',
        tags: ['.NET', 'Blazor', 'Android', 'Entity Framework'],
    },
]
</script>

<template>
    <SlideSection title="What I've Built" icon="fa-solid fa-code">
        <div class="projects-content">
            <p class="intro-text">I enjoy solving real problems with code — whether it's enterprise software at work or side projects on the weekend. Scroll down for the details on each.</p>

            <div class="projects-list">
                <div v-for="project in projects" :key="project.name" class="project-card">
                    <div class="project-icon-wrap">
                        <i :class="[project.icon, 'project-icon']"></i>
                    </div>
                    <div class="project-info">
                        <div class="project-header">
                            <span class="project-name">{{ project.name }}</span>
                            <span class="project-role">{{ project.role }}</span>
                        </div>
                        <p class="project-desc">{{ project.description }}</p>
                        <div class="project-tags">
                            <span v-for="tag in project.tags" :key="tag" class="project-tag">{{ tag }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </SlideSection>
</template>

<style scoped>
.projects-content {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    flex: 1;
    justify-content: center;
}

.intro-text {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.75;
    margin: 0;
    line-height: 1.6;
}

.projects-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.project-card {
    display: flex;
    align-items: flex-start;
    gap: 1.25rem;
    padding: 1.5rem;
    border-radius: 14px;
    border: 1px solid rgba(var(--v-theme-primary), 0.15);
    background: rgba(var(--v-theme-primary), 0.04);
    transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
    border-color: rgba(var(--v-theme-primary), 0.4);
    background: rgba(var(--v-theme-primary), 0.08);
    box-shadow: 0 4px 20px rgba(var(--v-theme-primary), 0.15);
}

.project-icon-wrap {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    background: rgba(var(--v-theme-primary), 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 0.15rem;
}

.project-icon {
    color: rgb(var(--v-theme-primary));
    font-size: 1.25rem;
}

.project-info {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    min-width: 0;
}

.project-header {
    display: flex;
    align-items: baseline;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.project-name {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1.1rem;
    font-weight: 700;
    color: rgb(var(--v-theme-text));
}

.project-role {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.75rem;
    color: rgb(var(--v-theme-primary));
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-weight: 600;
}

.project-desc {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.75;
    margin: 0;
    line-height: 1.5;
}

.project-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem;
}

.project-tag {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.7rem;
    color: rgb(var(--v-theme-primary));
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    border: 1px solid rgba(var(--v-theme-primary), 0.25);
    background: rgba(var(--v-theme-primary), 0.06);
}

@media only screen and (max-width: 480px) {
    .project-card {
        padding: 1rem;
        gap: 1rem;
    }

    .project-icon-wrap {
        width: 2.5rem;
        height: 2.5rem;
    }

    .project-icon {
        font-size: 1.05rem;
    }
}
</style>
