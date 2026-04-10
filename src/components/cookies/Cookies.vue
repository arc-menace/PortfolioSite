<template>
    <div class="cookies-container" v-if="!hasConsentedToCookies">
        <p class="cookies-text">This website uses cookies to store your preferences. No data is collected, shared or monetized.</p>

        <div class="cookies-buttons">
            <button class="cookies-btn accept" @click="acceptCookies">I Understand</button>
            <button class="cookies-btn decline" @click="declineCookies">No cookies for me</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useGlobalStore } from '../../store/globalStore';

export default defineComponent({
    name: 'Cookies',
    data() {
        return {
            globalStore: useGlobalStore()
        };
    },
    methods: {
        acceptCookies() {
            this.globalStore.consentToCookies();
        },
        declineCookies() {
            this.globalStore.declineCookies();
        }
    },
    computed: {
        hasConsentedToCookies(): boolean {
            return this.globalStore.userPreferences.hasConsentedToCookies;
        }
    }
});

</script>

<style scoped>
.cookies-container {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: calc(100% - 4rem);
    max-width: 500px;
    background-color: rgba(0, 0, 0, 0.75);
    padding: 1.5rem;
    border-radius: 0.75rem;
    display: flex;
    flex-direction: column;
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
    background-color: #3b82f6;
    color: white;
}

.cookies-btn.accept:hover {
    background-color: #2563eb;
    transform: translateY(-1px);
}

.cookies-btn.decline {
    background-color: #4b5563;
    color: white;
}

.cookies-btn.decline:hover {
    background-color: #374151;
    transform: translateY(-1px);
}
</style>