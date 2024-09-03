<script setup lang="ts">
import NavbarButton from './NavbarButton.vue';
import ThemeToggle from '../ThemeToggle.vue';

function scrollToId(id: string) {
    let element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

</script>

<template>

    <div class="navbar">
        <div class="hamburger-menu">
            <v-menu color="transparent" location="bottom">
                <template v-slot:activator="{ props }">
                    <i class="fa-solid fa-bars" v-bind="props"></i>
                </template>

                <v-list>
                    <v-list-item>
                        <NavbarButton :index="1" text="Home" :onClick="() => { scrollToId('home') }" />
                    </v-list-item>
                    <v-list-item>
                        <NavbarButton :index="2" text="Projects" :onClick="() => { scrollToId('projects') }" />
                    </v-list-item>
                    <v-list-item>
                        <NavbarButton :index="3" text="Resume" :onClick="() => { scrollToId('resume') }" />
                    </v-list-item>
                    <v-list-item>
                        <NavbarButton :index="4" text="Blog" :onClick="() => { scrollToId('blog') }" />
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>


        <div class="navbar-buttons">
            <NavbarButton :index="1" text="Home" :onClick="() => { scrollToId('home') }" />
            <NavbarButton :index="2" text="Projects" :onClick="() => { scrollToId('projects') }" />
            <NavbarButton :index="3" text="Resume" :onClick="() => { scrollToId('resume') }" />
            <NavbarButton :index="4" text="Blog" :onClick="() => { scrollToId('blog') }" />
            <ThemeToggle />
        </div>
    </div>

</template>

<style scoped>
.navbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
}

.navbar-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 2rem;
    height: 4rem;
    padding: 0 1rem;
    background-color: transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    overflow: scroll;
}

.hamburger-menu {
    display: none;
    justify-self: end;
    margin-right: 0.25rem;
    margin-top: 1rem;
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
</style>
