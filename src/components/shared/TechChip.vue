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
        <span v-else-if="$slots.icon" class="chip-icon" aria-hidden="true">
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
    font-size: 0.875rem;
    line-height: 1.4;
    padding: 0.3rem 0.65rem;
    border: 1px solid var(--hairline);
    border-radius: 6px;
    color: var(--text-muted);
}

.chip-icon {
    font-size: 0.9em;
    display: inline-flex;
    align-items: center;
    opacity: 0.8;
}

.chip-icon :deep(img),
.chip-icon :deep(svg) {
    width: 1em;
    height: 1em;
}

a.tech-chip {
    text-decoration: none;
    cursor: pointer;
    transition: border-color 0.15s ease, color 0.15s ease;
}

a.tech-chip:hover {
    border-color: var(--hairline-strong);
    color: rgb(var(--v-theme-text));
}

a.tech-chip:focus-visible {
    outline: 2px solid rgb(var(--v-theme-primary));
    outline-offset: 2px;
}
</style>
