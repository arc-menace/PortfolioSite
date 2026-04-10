import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useGlobalStore } from '../store/globalStore'
import { ThemeColors } from '../models/themeColors'

export function useThemeColors() {
    const theme = useTheme()
    const store = useGlobalStore()

    const isDark = computed(() => theme.global.current.value.dark)
    const currentMode = computed(() => isDark.value ? 'dark' : 'light')

    const currentColors = computed(() => {
        return isDark.value ? store.userPreferences.darkTheme : store.userPreferences.lightTheme
    })

    function applyColorsToVuetify(mode: 'light' | 'dark', colors: ThemeColors) {
        const themeColors = theme.themes.value[mode].colors
        themeColors.primary = colors.primary
        themeColors.secondary = colors.secondary
        themeColors.accent = colors.accent
        themeColors.background = colors.background
        themeColors.surface = colors.surface
    }

    function updateColor(colorKey: keyof ThemeColors, value: string) {
        store.updateThemeColor(currentMode.value, colorKey, value)
        applyColorsToVuetify(currentMode.value, currentColors.value)
    }

    function resetColors() {
        store.resetThemeColors(currentMode.value)
        applyColorsToVuetify(currentMode.value, currentColors.value)
    }

    function initializeTheme() {
        applyColorsToVuetify('light', store.userPreferences.lightTheme)
        applyColorsToVuetify('dark', store.userPreferences.darkTheme)
    }

    return {
        isDark,
        currentMode,
        currentColors,
        updateColor,
        resetColors,
        initializeTheme,
    }
}
