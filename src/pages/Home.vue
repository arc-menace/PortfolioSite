<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeUnmount } from 'vue';
import { useTheme } from 'vuetify';
import { navbarHeight } from '../models/globals';
import Bio from '../components/bio/Bio.vue';
import { useGlobalStore } from '../store/globalStore';
import { useThemeColors } from '../composables/useThemeColors';

// @ts-ignore — no type declarations for vanta
const loadVanta = () => import('vanta/dist/vanta.net.min.js');

const vantaRef = ref<HTMLElement | null>(null);
const vantaEffect = ref<any>(null);
const theme = useTheme();
const store = useGlobalStore();
const themeColors = useThemeColors();

const isDark = computed(() => theme.global.current.value.dark);
const selectedThemeId = computed(() => store.userPreferences.selectedThemeId);

const backgroundStyle = computed(() => ({
    backgroundColor: themeColors.currentColors.value.secondary
}));

// creates a gradient that fades from the background of the vanta effect (v-theme-secondary) to the actual background color
const gradientStyle = computed(() => ({
    backgroundImage: `linear-gradient(to top, ${themeColors.currentColors.value.background}, transparent)`
}));

watch(isDark, () => rebuildVanta());
watch(selectedThemeId, () => rebuildVanta());

onMounted(() => {
    // Defer vanta so the page paints immediately with just the background color
    requestAnimationFrame(() => {
        if (!vantaEffect.value) {
            buildEffect();
        }
    });
});

onBeforeUnmount(() => {
    if (vantaEffect.value) {
        vantaEffect.value.destroy();
        vantaEffect.value = null;
    }
});

function rebuildVanta() {
    if (vantaEffect.value) {
        vantaEffect.value.destroy();
    }
    buildEffect();
}

async function buildEffect() {
    const { default: NET } = await loadVanta();
    const colors = themeColors.currentColors.value;
    vantaEffect.value = NET({
        el: vantaRef.value,
        color: colors.primary,
        backgroundColor: colors.secondary,
        points: 10,
        maxDistance: 20,
        spacing: 17,
        showDots: true,
        mouseControls: false,
        touchControls: false
    });
}
</script>

<template>
    <section ref="vantaRef" class="vanta-background" id="home" :style="backgroundStyle" aria-label="Home">
        <Bio />
        <div class="bottom-opacity-gradient" :style="gradientStyle"></div>
    </section>
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
    transform: translateZ(0);
}
</style>
