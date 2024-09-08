<script setup lang="ts">
import NavbarButton from './NavbarButton.vue';
import ThemeToggle from '../ThemeToggle.vue';
import { useTheme } from 'vuetify'
import { navbarHeight } from '../../models/globals';

const theme = useTheme()

function scrollToId(id: string) {
    let element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

</script>

<template>

    <div class="navbar" :class="{ 'dark': theme.global.current.value.dark }">
        <ThemeToggle />
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
            <NavbarButton :index="3" text="Resume" :onClick="() => { scrollToId('resume') }" />
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
    background-color: rgba(255, 255, 255, 0.8);
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

.navbar.dark {
    background-color: rgba(0, 0, 0, 0.8);
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
</style>
