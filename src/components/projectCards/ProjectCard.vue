<template>
    <div class="project-card" :class="{ 'dark': theme.global.current.dark }">
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
import { useTheme } from 'vuetify';

export default defineComponent({
    name: 'ProjectCard',
    props: {
        title: String,
        subText: String
    },
    data() {
        return {
            theme: useTheme()
        }
    }
});
</script>

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

.title {
    font-size: 1.5rem;
}
</style>