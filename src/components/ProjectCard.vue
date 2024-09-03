<script setup lang="ts">
import { useTheme } from 'vuetify';

const theme = useTheme();
</script>

<template>
    <div class="project-card" :class="{ 'dark': theme.global.current.value.dark }">

    </div>
</template>

<style scoped>
.project-card {
    border: 1px solid #000;
    border-radius: 8px;
    padding: 16px;
    margin: 16px 0;
}

.project-card.dark {
    border: 1px solid #fff;
}
</style>