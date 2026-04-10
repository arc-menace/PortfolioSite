<template>
    <div class="theme-customizer">
        <h3 class="customizer-title">Customize Colors</h3>
        <p class="customizer-subtitle">Editing {{ isDark ? 'Dark' : 'Light' }} Theme</p>

        <div class="color-options">
            <div class="color-option" v-for="(value, key) in currentColors" :key="key">
                <label :for="key">{{ formatLabel(key) }}</label>
                <div class="color-input-wrapper">
                    <input
                        type="color"
                        :id="key"
                        :value="value"
                        @input="(e) => handleColorChange(key, (e.target as HTMLInputElement).value)"
                    />
                    <span class="color-value">{{ value }}</span>
                </div>
            </div>
        </div>

        <button class="reset-btn" @click="resetColors">
            Reset to Defaults
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useThemeColors } from '../../composables/useThemeColors';
import type { ThemeColors } from '../../models/themeColors';

export default defineComponent({
    name: 'ThemeCustomizer',
    setup() {
        const { isDark, currentColors, updateColor, resetColors } = useThemeColors();

        function handleColorChange(key: string, value: string) {
            updateColor(key as keyof ThemeColors, value);
        }

        function formatLabel(key: string): string {
            return key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
        }

        return {
            isDark,
            currentColors,
            handleColorChange,
            resetColors,
            formatLabel,
        };
    },
});
</script>

<style scoped>
.theme-customizer {
    padding: 1.5rem;
    background-color: rgba(var(--v-theme-surface), 0.95);
    border-radius: 0.75rem;
    max-width: 320px;
}

.customizer-title {
    margin: 0 0 0.25rem 0;
    font-size: 1.25rem;
}

.customizer-subtitle {
    margin: 0 0 1.5rem 0;
    opacity: 0.7;
    font-size: 0.875rem;
}

.color-options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
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
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
}

.color-value {
    font-family: monospace;
    font-size: 0.75rem;
    opacity: 0.7;
    min-width: 60px;
}

.reset-btn {
    margin-top: 1.5rem;
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.375rem;
    color: inherit;
    cursor: pointer;
    font-size: 0.875rem;
    transition: background-color 0.2s ease;
}

.reset-btn:hover {
    background-color: rgba(255, 255, 255, 0.2);
}
</style>
