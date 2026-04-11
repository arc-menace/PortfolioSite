import { defineStore } from 'pinia'
import { UserPreferences } from '../models/userPreferences'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        userPreferences: new UserPreferences(),
    }),
    actions: {
        loadState() {
            const consent = localStorage.getItem('cookieConsent')
            this.userPreferences.hasConsentedToCookies = consent === 'true'

            const selectedThemeId = localStorage.getItem('selectedThemeId')
            if (selectedThemeId) {
                this.userPreferences.selectedThemeId = selectedThemeId
            }
        },
        saveThemePreference(mode: 'light' | 'dark') {
            if(!this.userPreferences.hasConsentedToCookies) return

            localStorage.setItem('theme', mode)
        },
        saveSelectedPreset(presetId: string) {
            this.userPreferences.selectedThemeId = presetId

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
