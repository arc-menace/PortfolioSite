<template>
    <div id="projects">
        <h1>Projects</h1>
        <div class="project-cards">
            <SIQProjectCard/>
            <WordleCloneProjectCard/>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import SIQProjectCard from '../components/projectCards/SIQProjectCard.vue'
import WordleCloneProjectCard from '../components/projectCards/WordleCloneProjectCard.vue'

export default defineComponent({
    name: 'Projects',
    components: {
        SIQProjectCard,
        WordleCloneProjectCard
    }
});
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
}

.project-cards {
    display: grid;
    padding: 1rem;
}
</style>
