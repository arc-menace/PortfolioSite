<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTheme } from 'vuetify';
import { useThemeColors } from '../../composables/useThemeColors';
import { useGlobalStore } from '../../store/globalStore';
import { themePresets } from '../../models/themeColors';

const dialog = ref(false);
const theme = useTheme();
const store = useGlobalStore();
const { currentColors, selectedThemeId, applyThemePreset } = useThemeColors();

const isDark = computed(() => theme.global.current.value.dark);

const presets = themePresets;

function setTheme(mode: 'light' | 'dark') {
    theme.change(mode);
    store.saveThemePreference(mode);
}

function getPresetColors(presetId: string): string[] {
    const preset = themePresets.find(p => p.id === presetId);
    if (!preset) return [];
    const colors = isDark.value ? preset.dark : preset.light;
    return [colors.primary, colors.secondary];
}

function onPresetClick(presetId: string) {
    applyThemePreset(presetId);
}
</script>

<template>
    <div>
        <v-btn icon @click="dialog = true" class="settings-btn" aria-label="Open settings">
            <i class="fa-solid fa-gear" aria-hidden="true"></i>
        </v-btn>

        <v-dialog v-model="dialog" max-width="400">
            <v-card class="settings-card">
                <v-card-title class="settings-title">
                    <span>Settings</span>
                    <v-btn icon variant="text" @click="dialog = false" size="small" aria-label="Close settings">
                        <i class="fa-solid fa-xmark" aria-hidden="true"></i>
                    </v-btn>
                </v-card-title>

                <v-card-text>
                    <div class="settings-section">
                        <div class="theme-mode-toggle">
                            <v-btn
                                :variant="!isDark ? 'outlined' : 'text'"
                                size="small"
                                @click="setTheme('light')"
                                :aria-pressed="!isDark"
                            >
                                <i class="fa-solid fa-sun" aria-hidden="true"></i>
                                <span class="ml-2">Light</span>
                            </v-btn>
                            <v-btn
                                :variant="isDark ? 'outlined' : 'text'"
                                size="small"
                                @click="setTheme('dark')"
                                :aria-pressed="isDark"
                            >
                                <i class="fa-solid fa-moon" aria-hidden="true"></i>
                                <span class="ml-2">Dark</span>
                            </v-btn>
                        </div>
                    </div>

                    <v-divider class="my-4"></v-divider>

                    <div class="settings-section">
                        <div class="theme-presets">
                            <button
                                v-for="preset in presets"
                                :key="preset.id"
                                class="theme-preset-btn"
                                :class="{ 'theme-preset-btn--active': selectedThemeId === preset.id }"
                                :style="selectedThemeId === preset.id ? { borderColor: currentColors.primary } : {}"
                                :aria-label="`${preset.id.charAt(0).toUpperCase() + preset.id.slice(1)} theme`"
                                :aria-pressed="selectedThemeId === preset.id"
                                :title="`${preset.id.charAt(0).toUpperCase() + preset.id.slice(1)} theme (${isDark ? 'Dark' : 'Light'})`"
                                @click="onPresetClick(preset.id)"
                            >
                                <div class="preset-colors">
                                    <div
                                        v-for="color in getPresetColors(preset.id)"
                                        :key="color"
                                        class="preset-color-swatch"
                                        :style="{ backgroundColor: color }"
                                    ></div>
                                </div>
                            </button>
                        </div>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<style scoped>
.settings-btn {
    background-color: transparent;
    box-shadow: none;
    margin-left: 1rem;
}

.settings-card {
    border-radius: 12px !important;
}

.settings-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem !important;
}

.settings-section {
    padding: 0.5rem 0;
}

.theme-mode-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
}

.theme-presets {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.theme-preset-btn {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0;
    border: 2px solid transparent;
    border-radius: 8px;
    cursor: pointer;
    background: none;
    overflow: hidden;
    transition: border-color 0.2s ease;
    height: 40px;
}

.theme-preset-btn:hover {
    border-color: rgba(128, 128, 128, 0.4);
}

.theme-preset-btn:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 2px;
}

.theme-preset-btn--active {
    border-width: 2px;
}

.theme-preset-btn--active:hover {
    border-color: inherit;
}

.preset-colors {
    display: flex;
    width: 100%;
    height: 100%;
}

.preset-color-swatch {
    flex: 1;
    height: 100%;
}

.ml-2 {
    margin-left: 0.5rem;
}

.my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}
</style>
