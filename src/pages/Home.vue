<template>
    <div ref="vantaRef" class="vanta-background" id="home">
        <Bio />
        <div class="bottom-opacity-gradient" :style="gradientStyle"></div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useTheme } from 'vuetify';
import { navbarHeight } from '../models/globals';
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min.js';
import Bio from '../components/bio/Bio.vue';
import { useGlobalStore } from '../store/globalStore';
import { useThemeColors } from '../composables/useThemeColors';

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
        settingsDialogOpen(): boolean {
            return this.store.settingsDialogOpen;
        },
        selectedThemeId(): string {
            return this.store.userPreferences.selectedThemeId;
        },
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
        if (!this.vantaEffect) {
            this.vantaEffect = this.buildEffect();
        }
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
            this.vantaEffect = this.buildEffect();
        },
        buildEffect() {
            const colors = this.themeColors.currentColors;
            return NET({
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
