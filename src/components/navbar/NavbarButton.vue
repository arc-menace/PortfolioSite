<script setup lang="ts">
import { useHaptics } from '../../composables/useHaptics';

defineProps<{
    index: number;
    text: string;
    sectionId: string;
    active: boolean;
    onClick: () => void;
}>();

const { hapticLight } = useHaptics();
</script>

<template>
    <a
        class="navbar-link"
        :class="{ 'navbar-link--active': active }"
        :href="`#${sectionId}`"
        :aria-current="active ? 'location' : undefined"
        @click.prevent="() => { hapticLight(); onClick(); }"
    >
        <span class="number" aria-hidden="true">{{ index }}.</span>
        <span class="label">{{ text }}</span>
    </a>
</template>

<style scoped>
.navbar-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.5rem;
    font-family: var(--font-mono);
    color: inherit;
    text-decoration: none;
    cursor: pointer;
}

.number {
    color: rgb(var(--v-theme-accent));
}

.label {
    text-decoration: underline;
    text-decoration-color: transparent;
    text-decoration-thickness: 2px;
    text-underline-offset: 0.3em;
    transition: text-decoration-color 0.2s ease;
}

.navbar-link:hover .label {
    text-decoration-color: currentColor;
}

.navbar-link--active .label,
.navbar-link--active:hover .label {
    text-decoration-color: rgb(var(--v-theme-primary));
}

.navbar-link:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
    border-radius: 2px;
}

@media only screen and (max-width: 768px) {
    .navbar-link {
        gap: 0.3rem;
        font-size: 1.2rem;
    }
}
</style>
