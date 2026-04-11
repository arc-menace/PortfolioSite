<template>
    <div id="projects">
        <h1>Projects</h1>
        <div class="project-cards">
            <SIQProjectCard/>
            <WordleCloneProjectCard/>
        </div>
    </div>
</template>

<script setup lang="ts">
import SIQProjectCard from '../components/projectCards/SIQProjectCard.vue'
import WordleCloneProjectCard from '../components/projectCards/WordleCloneProjectCard.vue'
</script>

<style scoped>
#projects {
    padding-top: 5rem;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    scroll-snap-align: start;
}

.project-cards {
    display: grid;
    padding: 1rem;
}
</style>
