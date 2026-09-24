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
        hasAcknowledgedPrivacyNotice: true // Assume true until we check localStorage to avoid flashing the privacy notice
    }),
    actions: {
        loadState() {
            // Legacy key from the old accept/decline banner
            removeItem('cookieConsent')

            this.hasAcknowledgedPrivacyNotice = getItem('privacyNoticeAcknowledged') === 'true'

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
            setItem('theme', mode)
        },
        saveSelectedPreset(presetId: string) {
            this.userPreferences.selectedThemeId = presetId
            setItem('selectedThemeId', presetId)
        },
        acknowledgePrivacyNotice() {
            this.hasAcknowledgedPrivacyNotice = true
            setItem('privacyNoticeAcknowledged', 'true')
        },
        resetPrivacyNotice() {
            this.hasAcknowledgedPrivacyNotice = false
            removeItem('privacyNoticeAcknowledged')
        }
    }
})
