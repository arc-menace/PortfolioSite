<script setup lang="ts">
import { computed } from 'vue';
import { useGlobalStore } from '../../store/globalStore';
import { useHaptics } from '../../composables/useHaptics';

const globalStore = useGlobalStore();
const { hapticLight } = useHaptics();

const hasAcknowledgedCookieConsent = computed(() => globalStore.hasAcknowledgedCookieConsent);

function acceptCookies() {
    hapticLight();
    globalStore.consentToCookies();
}

function declineCookies() {
    hapticLight();
    globalStore.declineCookies();
}
</script>

<template>
    <div class="cookies-container" v-if="!hasAcknowledgedCookieConsent">
        <p class="cookies-text">This website can use cookies to store your preferences. No data is collected, shared or monetized.</p>

        <div class="cookies-buttons">
            <v-btn class="cookies-btn accept" @click="acceptCookies">I Understand</v-btn>
            <v-btn class="cookies-btn decline" @click="declineCookies">No cookies for me</v-btn>
        </div>
    </div>
</template>

<style scoped>
.cookies-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: calc(100% - 4rem);
    max-width: 500px;
    background-color: rgb(var(--v-theme-surface));
    padding: 1.5rem;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.cookies-text {
    text-align: left;
    margin: 0 0 1.5rem 0;
    line-height: 1.5;
}

.cookies-buttons {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    margin-left: auto;
}

.cookies-btn {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.375rem;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background-color 0.2s ease, transform 0.1s ease;
}

.cookies-btn.accept {
    background-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-text));
}

.cookies-btn.decline {
    background-color: rgb(var(--v-theme-secondary));
    color: rgb(var(--v-theme-text));
}
</style>