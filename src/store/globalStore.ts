import { defineStore } from 'pinia'
import { UserPreferences } from '../models/userPreferences'
import { ThemeColors, themePresets } from '../models/themeColors'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        userPreferences: new UserPreferences(),
    }),
    actions: {
        loadState() {
            const consent = localStorage.getItem('cookieConsent')
            this.userPreferences.hasConsentedToCookies = consent === 'true'

            const theme = localStorage.getItem('theme')
            if(theme) {
                document.documentElement.classList.toggle('dark', theme === 'dark')
            }

            const selectedThemeId = localStorage.getItem('selectedThemeId')
            if (selectedThemeId) {
                this.applyThemePreset(selectedThemeId)
            }
        },
        saveThemePreference(theme: 'light' | 'dark') {
            if(!this.userPreferences.hasConsentedToCookies) return

            localStorage.setItem('theme', theme)
        },
        applyThemePreset(presetId: string) {
            const preset = themePresets.find(p => p.id === presetId)
            if (!preset) return

            this.userPreferences.selectedThemeId = presetId
            this.userPreferences.lightTheme = { ...preset.light }
            this.userPreferences.darkTheme = { ...preset.dark }

            if (!this.userPreferences.hasConsentedToCookies) return

            localStorage.setItem('selectedThemeId', presetId)
        },
        consentToCookies() {
            this.userPreferences.hasConsentedToCookies = true

            localStorage.setItem('cookieConsent', 'true')
        },
        clearCookies() {
            localStorage.removeItem('cookieConsent')
            localStorage.removeItem('theme')
            localStorage.removeItem('selectedThemeId')
        },
        declineCookies() {
            this.userPreferences.hasConsentedToCookies = false

            this.clearCookies()
        }
    }
})