<script setup lang="ts">
import { inject } from 'vue';
import NavbarButton from './NavbarButton.vue';
import SettingsDialog from '../settings/SettingsDialog.vue';
import { navbarHeight } from '../../models/globals'
import { useGlobalStore } from '../../store/globalStore'
import { SLIDE_IDS } from '../../config/slides'
import { useHaptics } from '../../composables/useHaptics';

const store = useGlobalStore();
const isDev = import.meta.env.DEV;
const { hapticLight } = useHaptics();

const goToSlide = inject<(id: string) => void>('goToSlide')!
</script>

<template>
    <nav class="navbar" aria-label="Main navigation">
        <SettingsDialog />
        <v-btn v-if="isDev" icon @click="store.resetCookies()" class="debug-cookies-btn" aria-label="[DEV] Reset cookie consent">
            <i class="fa-solid fa-cookie-bite" aria-hidden="true"></i>
        </v-btn>
        <div class="margin-right-auto"></div>
        <div class="hamburger-menu">
            <v-menu color="transparent" location="bottom">
                <template v-slot:activator="{ props, isActive }">
                    <button class="hamburger-btn" v-bind="props" @click="hapticLight()" :aria-expanded="isActive" aria-label="Open navigation menu" aria-haspopup="true">
                        <i class="fa-solid fa-bars" aria-hidden="true"></i>
                    </button>
                </template>

                <v-list>
                    <v-list-item :onClick="() => { hapticLight(); goToSlide(SLIDE_IDS.home); }">
                        <v-list-item-title class="navbar-button-text">Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item :onClick="() => { hapticLight(); goToSlide(SLIDE_IDS.aboutDogs); }">
                        <v-list-item-title class="navbar-button-text">About</v-list-item-title>
                    </v-list-item>
                    <v-list-item :onClick="() => { hapticLight(); goToSlide(SLIDE_IDS.projects); }">
                        <v-list-item-title class="navbar-button-text">Projects</v-list-item-title>
                    </v-list-item>
                    <v-list-item :onClick="() => { hapticLight(); goToSlide(SLIDE_IDS.contact); }">
                        <v-list-item-title class="navbar-button-text">Contact</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>

        <div class="navbar-buttons">
            <NavbarButton :index="1" text="Home" :onClick="() => goToSlide(SLIDE_IDS.home)" />
            <NavbarButton :index="2" text="About" :onClick="() => goToSlide(SLIDE_IDS.aboutDogs)" />
            <NavbarButton :index="3" text="Projects" :onClick="() => goToSlide(SLIDE_IDS.projects)" />
            <NavbarButton :index="4" text="Contact" :onClick="() => goToSlide(SLIDE_IDS.contact)" />
        </div>
    </nav>
</template>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    height: v-bind(navbarHeight);
    width: 100%;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-index-navbar);
}

.navbar-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 2rem;
    height: 4rem;
    padding: 0 1rem;
    padding-right: 2rem;
}

.navbar-button-text {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
}

.hamburger-menu {
    display: none;
    justify-self: end;
    margin-right: 1rem;
}

.hamburger-btn {
    background: none;
    border: none;
    cursor: pointer;
    color: inherit;
    padding: 0.25rem;
    margin-right: 1rem;
    border-radius: 4px;
    line-height: 1;
}

.hamburger-btn:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}

.fa-bars {
    font-size: 1.5rem;
}

@media only screen and (max-width: 768px) {
    .navbar {
        gap: 1.5rem;
    }
}

@media only screen and (max-width: 480px) {
    .navbar-buttons {
        display: none;
    }

    .hamburger-menu {
        display: block;
    }
}

.margin-right-auto {
    margin-right: auto;
}

.debug-cookies-btn {
    background-color: transparent;
    box-shadow: none;
}
</style>
