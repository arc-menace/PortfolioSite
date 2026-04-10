import { defineStore } from 'pinia'
import { UserPreferences } from '../models/userPreferences'
import { ThemeColors, defaultLightTheme, defaultDarkTheme } from '../models/themeColors'

export const useGlobalStore = defineStore('global', {
    state: () => ({
        userPreferences: new UserPreferences(),
        settingsDialogOpen: false
    }),
    actions: {
        loadState() {
            const consent = localStorage.getItem('cookieConsent')
            this.userPreferences.hasConsentedToCookies = consent === 'true'

            const theme = localStorage.getItem('theme')
            if(theme) {
                document.documentElement.classList.toggle('dark', theme === 'dark')
            }

            // Load custom theme colors if they exist
            const lightTheme = localStorage.getItem('lightThemeColors')
            const darkTheme = localStorage.getItem('darkThemeColors')

            if (lightTheme) {
                this.userPreferences.lightTheme = JSON.parse(lightTheme)
            }
            if (darkTheme) {
                this.userPreferences.darkTheme = JSON.parse(darkTheme)
            }
        },
        saveThemePreference(theme: 'light' | 'dark') {
            if(!this.userPreferences.hasConsentedToCookies) return

            localStorage.setItem('theme', theme)
        },
        saveThemeColors(mode: 'light' | 'dark', colors: ThemeColors) {
            if (mode === 'light') {
                this.userPreferences.lightTheme = { ...colors }
            } else {
                this.userPreferences.darkTheme = { ...colors }
            }

            if (!this.userPreferences.hasConsentedToCookies) return

            localStorage.setItem(`${mode}ThemeColors`, JSON.stringify(colors))
        },
        updateThemeColor(mode: 'light' | 'dark', colorKey: keyof ThemeColors, value: string) {
            if (mode === 'light') {
                this.userPreferences.lightTheme[colorKey] = value
            } else {
                this.userPreferences.darkTheme[colorKey] = value
            }

            if (!this.userPreferences.hasConsentedToCookies) return

            const colors = mode === 'light' ? this.userPreferences.lightTheme : this.userPreferences.darkTheme
            localStorage.setItem(`${mode}ThemeColors`, JSON.stringify(colors))
        },
        resetThemeColors(mode: 'light' | 'dark') {
            if (mode === 'light') {
                this.userPreferences.lightTheme = { ...defaultLightTheme }
            } else {
                this.userPreferences.darkTheme = { ...defaultDarkTheme }
            }

            if (!this.userPreferences.hasConsentedToCookies) return

            localStorage.removeItem(`${mode}ThemeColors`)
        },
        consentToCookies() {
            this.userPreferences.hasConsentedToCookies = true

            localStorage.setItem('cookieConsent', 'true')
        },
        clearCookies() {
            localStorage.removeItem('cookieConsent')
            localStorage.removeItem('theme')
            localStorage.removeItem('lightThemeColors')
            localStorage.removeItem('darkThemeColors')
        },
        declineCookies() {
            this.userPreferences.hasConsentedToCookies = false

            this.clearCookies()
        },
        setSettingsDialogOpen(open: boolean) {
            this.settingsDialogOpen = open
        }
    }
})