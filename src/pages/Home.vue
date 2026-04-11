<template>
    <div ref="vantaRef" class="vanta-background" id="home">
        <Bio />
        <div class="bottom-opacity-gradient" :class="{ 'dark': isDark }"></div>
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
            store: useGlobalStore()
        };
    },
    computed: {
        isDark(): boolean {
            return this.theme.global.current.dark;
        },
        settingsDialogOpen(): boolean {
            return this.store.settingsDialogOpen;
        }
    },
    watch: {
        isDark() {
            this.buildEffect();
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
        buildDarkNetEffect() {
            return NET({
                el: this.$refs.vantaRef,
                color: '#4E937A',
                backgroundColor: '#241E4E',
                points: 10,
                maxDistance: 20,
                spacing: 17,
                showDots: true
            });
        },
        buildLightNetEffect() {
            return NET({
                el: this.$refs.vantaRef,
                color: '#4E937A',
                backgroundColor: '#DBD3D8',
                points: 10,
                maxDistance: 20,
                spacing: 17,
                showDots: true
            });
        },
        buildEffect() {
            if (this.isDark) {
                return this.buildDarkNetEffect();
            } else {
                return this.buildLightNetEffect();
            }
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
    background-image: linear-gradient(to top, rgba(255, 255, 255, 1), transparent);
}

.bottom-opacity-gradient.dark {
    background-image: linear-gradient(to top, rgba(28, 27, 34, 1), transparent);
}
</style>
