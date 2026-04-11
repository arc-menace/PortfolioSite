<script setup lang="ts">
defineProps<{
    title?: string;
    subText?: string;
}>();
</script>

<template>
    <article class="project-card">
        <h3 class="title">
            {{ $props.title }}
        </h3>
        <p>
            {{ $props.subText }}
        </p>

        <slot></slot>
    </article>
</template>

<style scoped>
.project-card {
    border: 1px solid rgb(var(--v-theme-text));
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
}

.title {
    font-size: 1.5rem;
}
</style>
