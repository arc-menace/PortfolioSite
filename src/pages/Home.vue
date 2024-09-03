<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useTheme } from 'vuetify'
import { watch } from 'vue'
import { navbarHeight } from '../models/globals';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min.js';
import Bio from '../components/Bio.vue';

const vantaRef = ref(null);
const theme = useTheme()

let vantaEffect: any = null;

function buildDarkNetEffect() {
    return NET({
            el: vantaRef.value,
            color: '#4E937A',
            backgroundColor: '#241E4E',
            points: 10,
            maxDistance: 20,
            spacing: 17,
            showDots: true
        });
}

function buildLightNetEffect() {
    return NET({
            el: vantaRef.value,
            color: '#4E937A',
            backgroundColor: '#DBD3D8',
            points: 10,
            maxDistance: 20,
            spacing: 17,
            showDots: true
        });
}

function buildEffect() {
    if (theme.current.value.dark) {
        return buildDarkNetEffect();
    }
    else {
        return buildLightNetEffect();
    }
}

watch(() => theme.current.value.dark, () => {
    buildEffect();
});

onMounted(() => {
    if (!vantaEffect) {
        vantaEffect = buildEffect();
    }
});

onBeforeUnmount(() => {
    if (vantaEffect) {
        vantaEffect.destroy();
        vantaEffect = null;
    }
});


</script>

<template>
    <div ref="vantaRef" class="vanta-background" id="home">
        <Bio />
        <div class="bottom-opacity-gradient" :class="{ 'dark': theme.global.current.value.dark }">

        </div>
    </div>
</template>

<style scoped>
.vanta-background {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    padding-top: v-bind(navbarHeight);
    backdrop-filter: blur(10px);
}

.bottom-opacity-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), transparent);
}

.bottom-opacity-gradient.dark {
    background-image: linear-gradient(to top, rgba(28, 27, 34, 1), transparent);
}

</style>
