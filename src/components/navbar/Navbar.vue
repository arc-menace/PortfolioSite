<script setup lang="ts">
import { inject, ref, type Ref } from 'vue';
import NavbarButton from './NavbarButton.vue';
import SettingsDialog from '../settings/SettingsDialog.vue';
import { navbarHeight } from '../../models/globals'
import { useGlobalStore } from '../../store/globalStore'
import { SECTION_IDS, type SectionId } from '../../config/sections'
import { useHaptics } from '../../composables/useHaptics';

const store = useGlobalStore();
const isDev = import.meta.env.DEV;
const { hapticLight } = useHaptics();

const goToSection = inject<(id: SectionId) => void>('goToSection')!
const activeSectionId = inject<Ref<SectionId>>('activeSectionId', ref(SECTION_IDS.home))
const isScrolled = inject<Ref<boolean>>('isScrolled', ref(false))

const links: { id: SectionId; text: string }[] = [
    { id: SECTION_IDS.home, text: 'Home' },
    { id: SECTION_IDS.about, text: 'About' },
    { id: SECTION_IDS.projects, text: 'Projects' },
    { id: SECTION_IDS.contact, text: 'Contact' },
]
</script>

<template>
    <nav class="navbar" :class="{ 'navbar--scrolled': isScrolled }" aria-label="Main navigation">
        <SettingsDialog />
        <v-btn v-if="isDev" icon @click="store.resetPrivacyNotice()" class="debug-privacy-btn" aria-label="[DEV] Reset privacy notice">
            <i class="fa-solid fa-shield-halved" aria-hidden="true"></i>
        </v-btn>
        <div class="margin-right-auto"></div>
        <div class="hamburger-menu">
            <v-menu location="bottom end">
                <template v-slot:activator="{ props, isActive }">
                    <button class="hamburger-btn" v-bind="props" @click="hapticLight()" :aria-expanded="isActive" aria-label="Open navigation menu" aria-haspopup="true">
                        <i class="fa-solid fa-bars" aria-hidden="true"></i>
                    </button>
                </template>

                <v-list>
                    <v-list-item
                        v-for="link in links"
                        :key="link.id"
                        :active="activeSectionId === link.id"
                        :onClick="() => { hapticLight(); goToSection(link.id); }"
                    >
                        <v-list-item-title class="navbar-button-text">{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </div>

        <div class="navbar-buttons">
            <NavbarButton
                v-for="(link, i) in links"
                :key="link.id"
                :index="i + 1"
                :text="link.text"
                :section-id="link.id"
                :active="activeSectionId === link.id"
                :onClick="() => goToSection(link.id)"
            />
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
    color: rgb(var(--v-theme-text));
    background-color: transparent;
    border-bottom: 1px solid transparent;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: var(--z-index-navbar);
    transition: background-color 0.2s ease, border-color 0.2s ease;
}

/* Once the page is scrolled the bar sits over content, so it needs a backing. */
.navbar--scrolled {
    background-color: rgba(var(--v-theme-background), 0.82);
    border-bottom-color: var(--hairline);
    -webkit-backdrop-filter: blur(12px);
    backdrop-filter: blur(12px);
}

.navbar-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 2rem;
    height: 100%;
    padding: 0 1rem;
    padding-right: 2rem;
}

.navbar-button-text {
    font-size: 1.2rem;
    font-weight: 500;
    font-family: var(--font-mono);
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
    .navbar-buttons {
        gap: 1.5rem;
        padding-right: 1.25rem;
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

.debug-privacy-btn {
    background-color: transparent;
    box-shadow: none;
    color: inherit;
}
</style>
