<script lang="ts">
import { defineComponent } from 'vue';
import ProjectCard from './ProjectCard.vue'

export default defineComponent({
    name: 'GrowlerStationProjectCard',
    components: {
        ProjectCard
    },
    data() {
        return {
            subText: "A menu creation and management tool for bars and restaurants"
        }
    }
});

// Tags: C#, MVC, Blazor, Identity Server, JWT, SQL, Android, Entity Framework
</script>

<template>
    <ProjectCard title="The Growler Station" :subText="subText">

    </ProjectCard>
</template>

<style scoped>

</style>