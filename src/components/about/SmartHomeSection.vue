<script setup lang="ts">
import SlideSection from '../SlideSection.vue'
</script>

<template>
    <SlideSection title="Smart Home" icon="fa-solid fa-house-signal" :center="true" max-width="700px">
        <p class="slide-text">
            What started as automating a few lights turned into a full home automation platform.
            The whole setup runs on a self-hosted stack with a focus on local-first control — no cloud required.
        </p>
        <div class="tech-list">
            <span class="tech-tag">Home Assistant</span>
            <span class="tech-tag">MQTT</span>
            <span class="tech-tag">Node-RED</span>
            <span class="tech-tag">Zigbee</span>
            <span class="tech-tag">ESPHome</span>
            <span class="tech-tag">Raspberry Pi</span>
            <span class="tech-tag">Docker</span>
        </div>
        <p class="slide-text">
            Automations handle everything from adaptive lighting and presence detection to energy monitoring.
            Always something new to build.
        </p>
    </SlideSection>
</template>

<style scoped>
.slide-text {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.75;
    margin: 0;
    line-height: 1.6;
    text-align: center;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
}

.tech-tag {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    padding: 0.35rem 0.8rem;
    border: 1px solid rgba(var(--v-theme-primary), 0.6);
    border-radius: 4px;
    color: rgb(var(--v-theme-primary));
}
</style>
