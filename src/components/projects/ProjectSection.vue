<script setup lang="ts">
defineProps<{
    title: string
    role: string
}>()
</script>

<template>
    <article class="project">
        <header class="project-header">
            <h3 class="sub-heading">{{ title }}</h3>
            <span class="project-role">{{ role }}</span>
        </header>

        <slot />
    </article>
</template>

<style scoped>
.project {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

.project + .project {
    margin-top: 3.5rem;
    padding-top: 3.5rem;
    border-top: 1px solid var(--hairline);
}

.project-header {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.25rem 1rem;
}

.project-role {
    font-size: 0.9375rem;
    color: var(--text-subtle);
}
</style>
