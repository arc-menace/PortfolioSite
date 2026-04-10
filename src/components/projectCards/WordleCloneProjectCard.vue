<template>
    <ProjectCard title="Wordle Clone" :subText="subText">

    </ProjectCard>

</template>

<script lang="ts">

import ProjectCard from './ProjectCard.vue'

export default {
    name: 'WordleCloneProjectCard',
    components: {
        ProjectCard
    },
    data() {
        return {
            subText
        }
    }
}

const subText = "A custom remake of the NYT Wordle Games";

// Tags: Vue, Typescript, Pinia, Github Pages, 

</script>

<style scoped>

</style>