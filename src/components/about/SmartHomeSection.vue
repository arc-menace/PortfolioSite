<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'
import TechChip from '../shared/TechChip.vue'


import HomeAssistantIcon from '../../assets/icons/homeassistant.svg?component'
import ProxMoxIcon from '../../assets/icons/proxmox.svg?component'
import UbiquitiIcon from '../../assets/icons/ubiquiti.svg?component'
import ClaudeIcon from '../../assets/icons/claude.svg?component'
import ZigbeeIcon from '../../assets/icons/zigbee.svg?component'
import Zigbee2MQTTIcon from '../../assets/icons/zigbee2mqtt.svg?component'

</script>

<template>
    <SlideSection title="Smart Home" icon="fa-solid fa-house-signal">
        <p class="slide-text">
            I love having a smart home that I can customize and tinker with. It's been such a fun playground to experiment with home networking and automation on my own hardware.
        </p>
        <p class="slide-text">
            I focus on automations that blend into the background and make life easier, like adaptive lighting throughout the day and dedicated modes for common activities. 
        </p>
        <p class="slide-text">
            NetDaemon allows me to write Home Assistant automations in C#, which is a joy compared to YAML. I run it in a ProxMox VM on a dedicated Intel NUC.
        </p>
        <p class="slide-text">
            Dedicated networks for IoT devices and a focus on local control means that I can keep interactions snappy and not worry about data breaches and privacy issues.
        </p>
        <div class="tech-list">
            <TechChip label="Home Assistant" url="https://www.home-assistant.io/">
                <template #icon>
                    <HomeAssistantIcon />
                </template>
            </TechChip>
            <TechChip label="ProxMox" url="https://www.proxmox.com/en/">
                <template #icon>
                    <ProxMoxIcon />
                </template>
            </TechChip>
            <TechChip label="Ubiquiti Unifi" url="https://www.ui.com/">
                <template #icon>
                    <UbiquitiIcon />
                </template>
            </TechChip>
            <TechChip label="Claude" url="https://claude.ai/">
                <template #icon>
                    <ClaudeIcon />
                </template>
            </TechChip>
            <TechChip label="Zigbee" url="https://en.wikipedia.org/wiki/Zigbee">
                <template #icon>
                    <ZigbeeIcon />
                </template>
            </TechChip>
            <TechChip label="Raspberry Pi" icon="fa-brands fa-raspberry-pi" url="https://www.raspberrypi.com/"/>
            <TechChip label="Zigbee2MQTT" url="https://www.zigbee2mqtt.io/">
                <template #icon>
                    <Zigbee2MQTTIcon />
                </template>
            </TechChip>
        </div>
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
    text-align: left;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    max-width: 550px;
}
</style>
