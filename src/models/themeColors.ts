import colors from 'vuetify/lib/util/colors.mjs'

export interface ThemeColors {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: string;
}

export interface ThemePreset {
    id: string;
    light: ThemeColors;
    dark: ThemeColors;
}

export const defaultLightTheme: ThemeColors = {
    primary: colors.lightBlue.darken1,
    secondary: colors.deepPurple.lighten5,
    accent: colors.blue.darken2,
    background: colors.shades.white,
    surface: colors.shades.white,
    text: colors.grey.darken4,
};

export const defaultDarkTheme: ThemeColors = {
    primary: '#4E937A',
    secondary: '#241E4E',
    accent: '#FF4081',
    background: '#1c1b22',
    surface: '#2d2d30',
    text: colors.shades.white,
};

export const themePresets: ThemePreset[] = [
    {
        id: 'default',
        light: { ...defaultLightTheme },
        dark: { ...defaultDarkTheme },
    },
    {
        id: 'ocean',
        light: {
            primary: '#0277BD',
            secondary: '#00695C',
            accent: '#4DD0E1',
            background: '#F5F9FC',
            surface: colors.shades.white,
            text: '#1A2A3A',
        },
        dark: {
            primary: '#4FC3F7',
            secondary: '#00897B',
            accent: '#00BCD4',
            background: '#0D1B2A',
            surface: '#1B2838',
            text: '#E0F0FF',
        },
    },
    {
        id: 'forest',
        light: {
            primary: '#2E7D32',
            secondary: '#5D4037',
            accent: '#81C784',
            background: '#F9FBF7',
            surface: colors.shades.white,
            text: '#1B2E1B',
        },
        dark: {
            primary: '#66BB6A',
            secondary: '#8D6E63',
            accent: '#A5D6A7',
            background: '#1A2418',
            surface: '#2A3428',
            text: '#E8F5E9',
        },
    },
    {
        id: 'sunset',
        light: {
            primary: '#E65100',
            secondary: '#BF360C',
            accent: '#FFB74D',
            background: '#FFFCF5',
            surface: colors.shades.white,
            text: '#3E2723',
        },
        dark: {
            primary: '#FF8A65',
            secondary: '#D84315',
            accent: '#FFCC80',
            background: '#1F1410',
            surface: '#2E201A',
            text: '#FFF3E0',
        },
    },
    {
        id: 'lavender',
        light: {
            primary: '#7B1FA2',
            secondary: '#512DA8',
            accent: '#CE93D8',
            background: '#FBF5FF',
            surface: colors.shades.white,
            text: '#2A1B3D',
        },
        dark: {
            primary: '#BA68C8',
            secondary: '#7C4DFF',
            accent: '#E1BEE7',
            background: '#1A1024',
            surface: '#2A1E38',
            text: '#F3E5F5',
        },
    },
    {
        id: 'monochrome',
        light: {
            primary: '#455A64',
            secondary: '#607D8B',
            accent: '#90A4AE',
            background: '#FAFAFA',
            surface: colors.shades.white,
            text: '#212121',
        },
        dark: {
            primary: '#B0BEC5',
            secondary: '#78909C',
            accent: '#CFD8DC',
            background: '#121212',
            surface: '#1E1E1E',
            text: '#ECEFF1',
        },
    },
];
