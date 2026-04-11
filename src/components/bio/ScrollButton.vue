<script setup lang="ts">
import { inject } from 'vue'
import { SLIDE_IDS } from '../../config/slides'
import { useHaptics } from '../../composables/useHaptics'

const goToSlide = inject<(id: string) => void>('goToSlide')!
const { hapticLight } = useHaptics()
</script>

<template>
    <button
        type="button"
        class="scroll-button"
        @click="() => { hapticLight(); goToSlide(SLIDE_IDS.about); }"
        aria-label="Scroll to About section"
    >
        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
        <i class="fa-solid fa-chevron-down" aria-hidden="true"></i>
    </button>
</template>

<style scoped>
@keyframes float {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50%       { transform: translateX(-50%) translateY(6px); }
}

@media screen and (max-height: 768px) {
    .scroll-button {
        display: none;
    }
}

.scroll-button {
    background: transparent;
    border: none;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
    color: rgb(var(--v-theme-text));
    opacity: 0.4;
    padding: 0;
    animation: float 2s ease-in-out infinite;
    transition: opacity 0.3s ease;
}

.scroll-button i {
    font-size: 1.1rem;
    display: block;
    line-height: 0.65;
}

.scroll-button:hover {
    opacity: 0.9;
}

.scroll-button:focus-visible {
    outline: 2px solid rgb(var(--v-theme-text));
    outline-offset: 4px;
    opacity: 0.9;
}
</style>