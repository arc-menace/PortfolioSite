import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useGlobalStore } from '../store/globalStore'
import { ThemeColors, themePresets } from '../models/themeColors'

export function useThemeColors() {
    const theme = useTheme()
    const store = useGlobalStore()

    const isDark = computed(() => theme.global.current.value.dark)
    const currentMode = computed(() => isDark.value ? 'dark' : 'light')

    const currentColors = computed(() => {
        return isDark.value ? store.userPreferences.darkTheme : store.userPreferences.lightTheme
    })

    const selectedThemeId = computed(() => store.userPreferences.selectedThemeId)

    function applyColorsToVuetify(mode: 'light' | 'dark', colors: ThemeColors) {
        const target = theme.themes.value[mode].colors
        Object.assign(target, {
            primary: colors.primary,
            secondary: colors.secondary,
            accent: colors.accent,
            background: colors.background,
            surface: colors.surface,
        })
    }

    function applyThemePreset(presetId: string) {
        store.applyThemePreset(presetId)
        applyColorsToVuetify('light', store.userPreferences.lightTheme)
        applyColorsToVuetify('dark', store.userPreferences.darkTheme)
    }

    function initializeTheme() {
        applyColorsToVuetify('light', store.userPreferences.lightTheme)
        applyColorsToVuetify('dark', store.userPreferences.darkTheme)
    }

    return {
        isDark,
        currentMode,
        currentColors,
        selectedThemeId,
        themePresets,
        applyThemePreset,
        initializeTheme,
    }
}
