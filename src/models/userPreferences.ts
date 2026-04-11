import { ThemeColors, defaultLightTheme, defaultDarkTheme } from './themeColors';

export class UserPreferences {
    hasConsentedToCookies: boolean = false;
    lightTheme: ThemeColors = { ...defaultLightTheme };
    darkTheme: ThemeColors = { ...defaultDarkTheme };
    selectedThemeId: string = 'default';
}