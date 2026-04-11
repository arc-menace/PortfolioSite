<script setup lang="ts">
import { scrollToId } from '../../helpers/scrollHelper';
</script>


<template>
    <button class="scroll-button" @click="scrollToId('projects')" aria-label="Scroll to projects">
        <i class="fa-solid fa-chevron-down"></i>
    </button>
</template>

<style scoped>
@media screen and (max-height: 768px) {
    .scroll-button {
        display: none;
    }
}

.scroll-button {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    opacity: 0.5;
    color: #fff;
    border: none;
    border-radius: 50%;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
}

.scroll-button i {
    font-size: 1.5rem;
    position: absolute;
    top: calc(50% - 0.75rem);
    left: calc(50% - 0.75rem);
}

.scroll-button:hover {
    background-color: rgb(var(--v-theme-accent));
    opacity: 1;
    transition: all 0.3s ease;
}
</style>