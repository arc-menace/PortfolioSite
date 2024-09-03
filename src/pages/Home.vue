<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { useTheme } from 'vuetify'
import { watch } from 'vue'
// @ts-ignore
import NET from 'vanta/dist/vanta.net.min.js';

const vantaRef = ref(null);
const theme = useTheme()

let vantaEffect: any = null;

watch(() => theme.current.value.dark, () => {
    if (theme.current.value.dark) {
        // @ts-ignore
        vantaEffect = NET({
            el: vantaRef.value,
            color: '#4E937A',
            backgroundColor: '#1c1b22',
            points: 20,
            maxDistance: 24,
            spacing: 17,
            showDots: true
        });
    }
    else {
        // @ts-ignore
        vantaEffect = NET({
            el: vantaRef.value,
            color: '#4E937A',
            backgroundColor: '#ffffff',
            points: 20,
            maxDistance: 24,
            spacing: 17,
            showDots: true
        });
    }
});

onMounted(() => {
    if (!vantaEffect) {
        // @ts-ignore
        vantaEffect = NET({
            el: vantaRef.value,
            color: '#4E937A',
            backgroundColor: '#1c1b22',
            points: 20,
            maxDistance: 24,
            spacing: 17,
            showDots: true
        });
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

    </div>
</template>

<style scoped>
.vanta-background {
    width: 100%;
    height: 100vh;
    position: relative;
    overflow: hidden;
}
</style>
