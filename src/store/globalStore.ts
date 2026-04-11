import { defineStore } from 'pinia'
import { UserPreferences } from '../models/userPreferences'

function getItem(key: string): string | null {
    try {
        return localStorage.getItem(key)
    } catch {
        return null
    }
}

function setItem(key: string, value: string) {
    try {
        localStorage.setItem(key, value)
    } catch {
        // localStorage unavailable (private browsing, storage full, etc.)
    }
}

function removeItem(key: string) {
    try {
        localStorage.removeItem(key)
    } catch {
        // localStorage unavailable
    }
}

export const useGlobalStore = defineStore('global', {
    state: () => ({
        userPreferences: new UserPreferences(),
        savedThemeMode: null as 'light' | 'dark' | null,
        hasAcknowledgedCookieConsent: true // Assume true until we check localStorage to avoid flashing the cookie consent banner
    }),
    actions: {
        loadState() {
            const consent = getItem('cookieConsent')
            this.userPreferences.hasConsentedToCookies = consent === 'true'
            this.hasAcknowledgedCookieConsent = consent !== null

            const selectedThemeId = getItem('selectedThemeId')
            if (selectedThemeId) {
                this.userPreferences.selectedThemeId = selectedThemeId
            }

            const theme = getItem('theme')
            if (theme === 'light' || theme === 'dark') {
                this.savedThemeMode = theme
            }
        },
        saveThemePreference(mode: 'light' | 'dark') {
            this.savedThemeMode = mode

            if (!this.userPreferences.hasConsentedToCookies) return

            setItem('theme', mode)
        },
        saveSelectedPreset(presetId: string) {
            this.userPreferences.selectedThemeId = presetId

            if (!this.userPreferences.hasConsentedToCookies) return

            setItem('selectedThemeId', presetId)
        },
        consentToCookies() {
            this.userPreferences.hasConsentedToCookies = true
            this.hasAcknowledgedCookieConsent = true

            setItem('cookieConsent', 'true')
        },
        clearCookies() {
            removeItem('cookieConsent')
            removeItem('theme')
            removeItem('selectedThemeId')
        },
        declineCookies() {
            this.userPreferences.hasConsentedToCookies = false
            this.hasAcknowledgedCookieConsent = true

            this.clearCookies()
        },
        resetCookies() {
            this.userPreferences.hasConsentedToCookies = false
            this.hasAcknowledgedCookieConsent = false

            this.clearCookies()
        }
    }
})
