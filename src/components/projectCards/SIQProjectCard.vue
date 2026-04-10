<template>
    <ProjectCard title="Shelf IQ" :subText="subText">

    </ProjectCard>
</template>

<script lang="ts">

import ProjectCard from './ProjectCard.vue'

export default {
    name: 'SIQProjectCard',
    components: {
        ProjectCard
    },
    data() {
        return {
            subText
        }
    }
}

const subText = "An enterprise planogram automation platform designed to work with Space Planning through a COM interface";

// Tags: C#, WPF, Blazor, Flux, Space Planning, COM, SQL, Multithreading, Automated Testing

</script>

<style scoped>

</style>