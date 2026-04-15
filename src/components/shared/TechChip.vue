<script setup lang="ts">
const props = defineProps<{
    label: string
    icon?: string
    url?: string
}>()
</script>

<template>
    <component
        :is="props.url ? 'a' : 'span'"
        class="tech-chip"
        v-bind="props.url ? { href: props.url, target: '_blank', rel: 'noopener noreferrer' } : {}"
    >
        <i v-if="icon" :class="icon" class="chip-icon" aria-hidden="true"></i>
        <span v-else class="chip-icon">
            <slot name="icon" />
        </span>
        {{ label }}
    </component>
</template>

<style scoped>
.tech-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    padding: 0.3rem 0.7rem;
    border: 1px solid rgba(var(--v-theme-primary), 0.6);
    border-radius: 4px;
    color: rgb(var(--v-theme-primary));
}

.chip-icon {
    font-size: 1em;
    display: inline-flex;
    align-items: center;
}

.chip-icon :deep(img),
.chip-icon :deep(svg) {
    width: 1em;
    height: 1em;
}

a.tech-chip {
    text-decoration: none;
    cursor: pointer;
    transition: background-color 0.2s, border-color 0.2s;
}

a.tech-chip:hover {
    background-color: rgba(var(--v-theme-primary), 0.1);
    border-color: rgb(var(--v-theme-primary));
}
</style>
