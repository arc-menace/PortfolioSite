<script setup lang="ts">
import PageSection from '../components/layout/PageSection.vue'
import ShelfIQ from '../components/projects/ShelfIQ.vue'
import WordlClone from '../components/projects/WordlClone.vue'
import GrowlerStation from '../components/projects/GrowlerStation.vue'
import { SECTION_IDS } from '../config/sections'
</script>

<template>
    <PageSection :id="SECTION_IDS.projects" title="Projects">
        <p class="lead projects-intro">I enjoy solving real problems with code — whether it's enterprise software at work or side projects on the weekend.</p>

        <ShelfIQ />
        <WordlClone />
        <GrowlerStation />
    </PageSection>
</template>

<style scoped>
.projects-intro {
    margin-bottom: 3.5rem;
}
</style>
