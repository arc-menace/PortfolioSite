<template>
    <div ref="vantaRef" class="vanta-background" id="home" :style="backgroundStyle">
        <Bio />
        <div class="bottom-opacity-gradient" :style="gradientStyle"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTheme } from 'vuetify';
import { navbarHeight } from '../models/globals';
import Bio from '../components/bio/Bio.vue';
import { useGlobalStore } from '../store/globalStore';
import { useThemeColors } from '../composables/useThemeColors';

// @ts-ignore — no type declarations for vanta
const loadVanta = () => import('vanta/dist/vanta.net.min.js');

export default defineComponent({
    name: 'Home',
    components: {
        Bio
    },
    data() {
        return {
            vantaEffect: null as any,
            theme: useTheme(),
            navbarHeight,
            store: useGlobalStore(),
            themeColors: useThemeColors()
        };
    },
    computed: {
        isDark(): boolean {
            return this.theme.global.current.dark;
        },
        selectedThemeId(): string {
            return this.store.userPreferences.selectedThemeId;
        },
        backgroundStyle(): Record<string, string> {
            return {
                backgroundColor: this.themeColors.currentColors.secondary
            };
        },
        // creates a gradient that fades from the background of the vanta effect (v-theme-secondary) to the actual background color
        gradientStyle(): Record<string, string> {
            const bg = this.themeColors.currentColors.background;
            return {
                backgroundImage: `linear-gradient(to top, ${bg}, transparent)`
            };
        }
    },
    watch: {
        isDark() {
            this.rebuildVanta();
        },
        selectedThemeId() {
            this.rebuildVanta();
        }
    },
    mounted() {
        // Defer vanta so the page paints immediately with just the background color
        requestAnimationFrame(() => {
            if (!this.vantaEffect) {
                this.buildEffect();
            }
        });
    },
    beforeUnmount() {
        if (this.vantaEffect) {
            this.vantaEffect.destroy();
            this.vantaEffect = null;
        }
    },
    methods: {
        rebuildVanta() {
            if (this.vantaEffect) {
                this.vantaEffect.destroy();
            }
            this.buildEffect();
        },
        async buildEffect() {
            const { default: NET } = await loadVanta();
            const colors = this.themeColors.currentColors;
            this.vantaEffect = NET({
                el: this.$refs.vantaRef,
                color: colors.primary,
                backgroundColor: colors.secondary,
                points: 10,
                maxDistance: 20,
                spacing: 17,
                showDots: true,
                mouseControls: false
            });
        }
    }
});
</script>

<style scoped>
.vanta-background {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
    padding-top: v-bind(navbarHeight);
    backdrop-filter: blur(10px);
    scroll-snap-align: start;
}

.bottom-opacity-gradient {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 300px;
}
</style>
