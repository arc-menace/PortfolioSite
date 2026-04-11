<template>
    <div class="navbar">
        <SettingsDialog />
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

<script lang="ts">
import { defineComponent } from 'vue';
import NavbarButton from './NavbarButton.vue';
import SettingsDialog from '../settings/SettingsDialog.vue';
import { navbarHeight } from '../../models/globals';
import { scrollToId } from '../../helpers/scrollHelper';

export default defineComponent({
    name: 'Navbar',
    components: {
        NavbarButton,
        SettingsDialog
    },
    data() {
        return {
            navbarHeight,
        };
    },
    methods: {
        scrollToId
    }
});

</script>

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
</style>
