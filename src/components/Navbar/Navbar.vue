<script setup lang="ts">
import NavbarButton from './NavbarButton.vue';
import SettingsDialog from '../settings/SettingsDialog.vue';
import { navbarHeight } from '../../models/globals';
import { scrollToId } from '../../helpers/scrollHelper';
import { useGlobalStore } from '../../store/globalStore';

const store = useGlobalStore();
const isDev = import.meta.env.DEV;
</script>

<template>
    <div class="navbar">
        <SettingsDialog />
        <v-btn v-if="isDev" icon @click="store.resetCookies()" class="debug-cookies-btn" title="[DEV] Reset cookie consent">
            <i class="fa-solid fa-cookie-bite"></i>
        </v-btn>
        <div class="margin-right-auto"></div>
        <div class="hamburger-menu">
            <v-menu color="transparent" location="bottom">
                <template v-slot:activator="{ props }">
                    <i class="fa-solid fa-bars" v-bind="props"></i>
                </template>

                <v-list>
                    <v-list-item :onClick="() => { scrollToId('home') }">
                        <v-list-item-title class="navbar-button-text">Home</v-list-item-title>
                    </v-list-item>
                    <v-list-item :onClick="() => { scrollToId('projects') }">
                        <v-list-item-title class="navbar-button-text">Projects</v-list-item-title>
                    </v-list-item>
                    <v-list-item :onClick="() => { scrollToId('resume') }">
                        <v-list-item-title class="navbar-button-text">Resume</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>


        <div class="navbar-buttons">
            <NavbarButton :index="1" text="Home" :onClick="() => { scrollToId('home') }" />
            <NavbarButton :index="2" text="Projects" :onClick="() => { scrollToId('projects') }" />
            <NavbarButton :index="3" text="Contact" :onClick="() => { scrollToId('contact') }" />
        </div>
    </div>
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

.fa-bars {
    margin-right: 1rem;
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
