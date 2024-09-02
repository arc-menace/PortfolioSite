import { defineStore } from 'pinia';
import { Theme } from '../models/theme';
import { Themes } from '../models/themes';

const THEME_COOKIE_NAME = 'selected_theme';
const defaultTheme = 'dark';

export const useThemeStore = defineStore('theme', {
    state: () => ({
        currentTheme: loadThemeFromCookie() || defaultTheme,
        themes: Themes,
      }),
    getters: {
    currentThemeColors(): Theme['colors'] {
        return this.themes[this.currentTheme].colors;
    },
    },
    actions: {
    setTheme(themeName: string) {
        if (this.themes[themeName]) {
        this.currentTheme = themeName;
        saveThemeToCookie(themeName);
        } else {
        console.warn(`Theme "${themeName}" not found.`);
        }
    },
    addTheme(themeName: string, theme: Theme) {
        this.themes[themeName] = theme;
        },
    },
});

function saveThemeToCookie(theme: string) {
    //cookie expires in 1000 years
    document.cookie = `${THEME_COOKIE_NAME}=${theme}; max-age=31536000000; path=/; SameSite=Strict`;
}


function loadThemeFromCookie(): string | null {
    const cookies = document.cookie.split(';');

    for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');

        if (name === THEME_COOKIE_NAME) {
            return value;
        }
    }

    return null;
}