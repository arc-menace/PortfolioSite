<script setup lang="ts">
import PageSection from '../components/layout/PageSection.vue'
import AboutIntro from '../components/about/AboutIntro.vue'
import DogsSection from '../components/about/DogsSection.vue'
import SmartHomeSection from '../components/about/SmartHomeSection.vue'
import { SECTION_IDS } from '../config/sections'
</script>

<template>
    <PageSection :id="SECTION_IDS.about" title="About">
        <div class="about-stack">
            <AboutIntro />
            <DogsSection />
            <SmartHomeSection />
        </div>
    </PageSection>
</template>

<style scoped>
.about-stack {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}
</style>
