<template>
    <div>
        <v-btn icon @click="dialog = true" class="settings-btn">
            <i class="fa-solid fa-gear"></i>
        </v-btn>

        <v-dialog v-model="dialog" max-width="400">
            <v-card class="settings-card">
                <v-card-title class="settings-title">
                    <span>Settings</span>
                    <v-btn icon variant="text" @click="dialog = false" size="small">
                        <i class="fa-solid fa-xmark"></i>
                    </v-btn>
                </v-card-title>

                <v-card-text>
                    <div class="settings-section">
                        <div class="theme-mode-toggle">
                            <span class="section-label">Theme Mode</span>
                            <div class="toggle-buttons">
                                <v-btn
                                    :variant="!isDark ? 'outlined' : 'text'"
                                    size="small"
                                    @click="setTheme('light')"
                                >
                                    <i class="fa-solid fa-sun"></i>
                                    <span class="ml-2">Light</span>
                                </v-btn>
                                <v-btn
                                    :variant="isDark ? 'outlined' : 'text'"
                                    size="small"
                                    @click="setTheme('dark')"
                                >
                                    <i class="fa-solid fa-moon"></i>
                                    <span class="ml-2">Dark</span>
                                </v-btn>
                            </div>
                        </div>
                    </div>

                    <v-divider class="my-4"></v-divider>

                    <div class="settings-section">
                        <div class="section-header">
                            <span class="section-label">Customize Colors</span>
                            <span class="editing-mode">{{ isDark ? 'Dark' : 'Light' }} theme</span>
                        </div>

                        <div class="color-options">
                            <div
                                class="color-option"
                                v-for="(value, key) in currentColors"
                                :key="key"
                            >
                                <label :for="String(key)">{{ formatLabel(String(key)) }}</label>
                                <div class="color-input-wrapper">
                                    <input
                                        type="color"
                                        :id="String(key)"
                                        :value="value"
                                        @input="(e) => handleColorChange(key, (e.target as HTMLInputElement).value)"
                                    />
                                    <span class="color-value">{{ value }}</span>
                                </div>
                            </div>
                        </div>

                        <v-btn
                            variant="outlined"
                            size="small"
                            block
                            class="mt-4"
                            @click="resetColors"
                        >
                            Reset to Defaults
                        </v-btn>
                    </div>
                </v-card-text>
            </v-card>
        </v-dialog>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, watch, type Ref } from 'vue';
import { useTheme } from 'vuetify';
import { useThemeColors } from '../../composables/useThemeColors';
import { useGlobalStore } from '../../store/globalStore';
import type { ThemeColors } from '../../models/themeColors';

export default defineComponent({
    name: 'SettingsDialog',
    setup() {
        const dialog = ref(false);
        const theme = useTheme();
        const store = useGlobalStore();
        const { currentColors, updateColor, resetColors } = useThemeColors();

        const isDark = computed(() => theme.global.current.value.dark);

        watch(dialog, (isOpen) => {
            store.$patch({ settingsDialogOpen: isOpen });
        });

        function setTheme(mode: 'light' | 'dark') {
            (theme.global.name as unknown as Ref<string>).value = mode;
            store.saveThemePreference(mode);
        }

        function handleColorChange(key: string | number, value: string) {
            updateColor(key as keyof ThemeColors, value);
        }

        function formatLabel(key: string): string {
            return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        }

        return {
            dialog,
            isDark,
            currentColors,
            setTheme,
            handleColorChange,
            resetColors,
            formatLabel,
        };
    },
});
</script>

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

.section-label {
    font-weight: 500;
    font-size: 0.875rem;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.editing-mode {
    font-size: 0.75rem;
    opacity: 0.6;
}

.theme-mode-toggle {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.toggle-buttons {
    display: flex;
    gap: 0.5rem;
}

.color-options {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.color-option {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.color-option label {
    font-size: 0.875rem;
}

.color-input-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.color-input-wrapper input[type="color"] {
    width: 32px;
    height: 32px;
    padding: 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    background: none;
}

.color-input-wrapper input[type="color"]::-webkit-color-swatch-wrapper {
    padding: 0;
}

.color-input-wrapper input[type="color"]::-webkit-color-swatch {
    border: 1px solid rgba(128, 128, 128, 0.3);
    border-radius: 4px;
}

.color-value {
    font-family: monospace;
    font-size: 0.75rem;
    opacity: 0.7;
    min-width: 60px;
}

.ml-2 {
    margin-left: 0.5rem;
}

.my-4 {
    margin-top: 1rem;
    margin-bottom: 1rem;
}

.mt-4 {
    margin-top: 1rem;
}
</style>
