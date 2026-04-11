<script setup lang="ts">
import DogsSection from '../components/about/DogsSection.vue'
import SmartHomeSection from '../components/about/SmartHomeSection.vue'
import MusicSection from '../components/about/MusicSection.vue'
</script>

<template>
    <section id="about">
        <div class="about-container">
            <h2 class="about-heading">About Me</h2>
            <div class="about-sections">
                <DogsSection />
                <SmartHomeSection />
                <MusicSection />
            </div>
        </div>
    </section>
</template>

<style scoped>
#about {
    padding-top: 5rem;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    scroll-snap-align: start;
}

.about-container {
    width: 100%;
    max-width: 860px;
    padding: 0 2rem 4rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.about-heading {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    color: rgb(var(--v-theme-text));
    margin: 0;
}

.about-sections {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
}

@media only screen and (max-width: 480px) {
    .about-heading {
        font-size: 2rem;
    }

    .about-container {
        padding: 0 1rem 3rem;
    }
}
</style>
