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
    <SlideSection title="Smart Home">
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
            Dedicated networks for IoT devices and a focus on local control means that I can keep interacts snappy and not worry about data breaches and privacy issues.
        </p>
        <div class="tech-list">
            <TechChip label="Home Assistant">
                <template #icon>
                    <HomeAssistantIcon />
                </template>
            </TechChip>
            <TechChip label="ProxMox">
                <template #icon>
                    <ProxMoxIcon />
                </template>
            </TechChip>
            <TechChip label="Ubiquiti Unifi">
                <template #icon>
                    <UbiquitiIcon />
                </template>
            </TechChip>
            <TechChip label="Claude">
                <template #icon>
                    <ClaudeIcon />
                </template>
            </TechChip>
            <TechChip label="Zigbee">
                <template #icon>
                    <ZigbeeIcon />
                </template>
            </TechChip>
            <TechChip label="Raspberry Pi" icon="fa-brands fa-raspberry-pi" />
            <TechChip label="Zigbee2MQTT">
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
    text-align: center;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    justify-content: center;
}
</style>
