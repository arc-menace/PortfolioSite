<script setup lang="ts">

import { useThemeStore } from '../../store/themeStore';

const themeStore = useThemeStore();

defineProps({
    index: {
        type: Number,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    onClick: {
        type: Function,
        required: true
    }
})

</script>

<template>
   
<div class="navbar-button-container">
    <div class="number" :style="{ color: themeStore.currentThemeColors.tertiary }">{{ index }}.</div>

    <div class="navbar-button" :style="{ color: themeStore.currentThemeColors.text }" @click="() => onClick()">
        {{text}}
    </div>
</div>


</template>

<style scoped>

.navbar-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
}

.number {
    font-size: 1.5rem;
    font-family: "Consolas", monospace;
}

.navbar-button {
    cursor: pointer;
    font-size: 1.5rem;
    font-family: "Consolas", monospace;
}

.navbar-button:hover {
    text-decoration: underline;
}

</style>