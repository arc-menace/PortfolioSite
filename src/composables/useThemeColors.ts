import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useGlobalStore } from '../store/globalStore'
import { ThemeColors, themePresets } from '../models/themeColors'

export function useThemeColors() {
    const theme = useTheme()
    const store = useGlobalStore()

    const isDark = computed(() => theme.global.current.value.dark)
    const currentMode = computed(() => isDark.value ? 'dark' : 'light')

    const currentColors = computed((): ThemeColors => {
        const colors = theme.themes.value[currentMode.value].colors
        return {
            primary: colors.primary,
            secondary: colors.secondary,
            accent: colors.accent,
            background: colors.background,
            surface: colors.surface,
            text: colors.text,
        }
    })

    const selectedThemeId = computed(() => store.userPreferences.selectedThemeId)

    function applyThemePreset(presetId: string) {
        const preset = themePresets.find(p => p.id === presetId)
        if (!preset) return

        store.saveSelectedPreset(presetId)
        applyColorsToVuetify('light', preset.light)
        applyColorsToVuetify('dark', preset.dark)
    }

    function applyColorsToVuetify(mode: 'light' | 'dark', colors: ThemeColors) {
        const target = theme.themes.value[mode].colors
        Object.assign(target, {
            primary: colors.primary,
            secondary: colors.secondary,
            accent: colors.accent,
            background: colors.background,
            surface: colors.surface,
            text: colors.text,
        })
    }

    function initializeTheme() {
        const savedPresetId = store.userPreferences.selectedThemeId
        if (savedPresetId !== 'default') {
            applyThemePreset(savedPresetId)
        }
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
