<template>
    <div class="project-card">
        <div class="title">
            {{ $props.title }}
        </div>
        <div>
            {{ $props.subText }}
        </div>

        <slot></slot>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectCard',
    props: {
        title: String,
        subText: String
    },
});
</script>

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
