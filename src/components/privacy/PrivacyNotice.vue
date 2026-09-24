<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '../../store/globalStore';
import { useHaptics } from '../../composables/useHaptics';

const globalStore = useGlobalStore();
const { hapticLight } = useHaptics();

const hasAcknowledgedPrivacyNotice = computed(() => globalStore.hasAcknowledgedPrivacyNotice);

function acknowledge() {
    hapticLight();
    globalStore.acknowledgePrivacyNotice();
}
</script>

<template>
    <div class="privacy-notice" v-if="!hasAcknowledgedPrivacyNotice" role="region" aria-label="Privacy notice">
        <p class="privacy-notice-text">This site saves your theme preferences in your browser and uses <a href="https://umami.is" target="_blank" rel="noopener noreferrer">cookieless analytics</a>. Nothing is sold or monetized; analytics are anonymous.</p>

        <div class="privacy-notice-buttons">
            <v-btn class="privacy-notice-btn" @click="acknowledge">Got it</v-btn>
        </div>
    </div>
</template>

<style scoped>
.privacy-notice {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: calc(100% - 4rem);
    max-width: 500px;
    background-color: rgb(var(--v-theme-surface));
    padding: 1rem;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.privacy-notice-text {
    text-align: left;
    margin: 0 0 0.5rem 0;
    line-height: 1.5;
}

.privacy-notice-text a {
    color: inherit;
    text-decoration: underline;
}

.privacy-notice-buttons {
    margin-left: auto;
}

.privacy-notice-btn {
    padding: 0.5rem 1rem;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    transition: background-color 0.2s ease, transform 0.1s ease;
    background-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-text));
}
</style>