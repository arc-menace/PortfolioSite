<script setup lang="ts">
import TechChip from '../shared/TechChip.vue'


import HomeAssistantIcon from '../../assets/icons/homeassistant.svg?component'
import ProxMoxIcon from '../../assets/icons/proxmox.svg?component'
import UbiquitiIcon from '../../assets/icons/ubiquiti.svg?component'
import ClaudeIcon from '../../assets/icons/claude.svg?component'
import ZigbeeIcon from '../../assets/icons/zigbee.svg?component'
import Zigbee2MQTTIcon from '../../assets/icons/zigbee2mqtt.svg?component'

</script>

<template>
    <div class="smart-home">
        <h3 class="sub-heading">Smart Home</h3>
        <p class="body-text">
            I love having a smart home that I can customize and tinker with. It's been such a fun playground to experiment with home networking and automation on my own hardware.
        </p>
        <p class="body-text">
            I focus on automations that blend into the background and make life easier, like adaptive lighting throughout the day and dedicated modes for common activities. 
        </p>
        <p class="body-text">
            NetDaemon allows me to write Home Assistant automations in C#, which is a joy compared to YAML. I run it in a ProxMox VM on a dedicated Intel NUC.
        </p>
        <p class="body-text">
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
    </div>
</template>

<style scoped>
.smart-home {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}
</style>
