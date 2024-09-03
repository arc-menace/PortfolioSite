<script setup lang="ts">
    import { useNavigationStore } from '../store/navigationStore';

    import Home from '../pages/Home.vue';
    import Projects from '../pages/Projects.vue';
    import Resume from '../pages/Resume.vue';
    import Blog from '../pages/Blog.vue';

    const navigationStore = useNavigationStore();
</script>

<template>
    <div v-if="navigationStore.currentPage === 'home'">
        <Home />
    </div>
    <div v-if="navigationStore.currentPage === 'projects'">
        <Projects />
    </div>
    <div v-if="navigationStore.currentPage === 'resume'">
        <Resume />
    </div>
    <div v-if="navigationStore.currentPage === 'blog'">
        <Blog />
    </div>
</template>