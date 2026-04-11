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
        light: {
            primary: colors.teal.base,
            secondary: colors.blueGrey.lighten4,
            accent: colors.pink.darken1,
            background: colors.shades.white,
            surface: colors.shades.white,
            text: colors.shades.black,
        },
        dark: {
            primary: colors.teal.base,
            secondary: colors.indigo.darken4,
            accent: colors.pink.darken1,
            background: colors.grey.darken4,
            surface: colors.grey.darken3,
            text: colors.shades.white,
        },
    },
    {
        id: 'ocean',
        light: {
            primary: colors.lightBlue.base,
            secondary: colors.deepPurple.lighten5,
            accent: colors.cyan.darken2,
            background: colors.shades.white,
            surface: colors.shades.white,
            text: colors.shades.black,
        },
        dark: {
            primary: colors.lightBlue.base,
            secondary: colors.teal.darken4,
            accent: colors.cyan.base,
            background: colors.grey.darken4,
            surface: colors.grey.darken3,
            text: colors.shades.white,
        },
    },
    {
        id: 'forest',
        light: {
            primary: colors.green.base,
            secondary: colors.brown.lighten4,
            accent: colors.green.darken4,
            background: colors.shades.white,
            surface: colors.shades.white,
            text: colors.shades.black,
        },
        dark: {
            primary: colors.green.base,
            secondary: colors.brown.darken3,
            accent: colors.green.lighten1,
            background: colors.grey.darken4,
            surface: colors.grey.darken3,
            text: colors.shades.white,
        },
    },
    {
        id: 'sunset',
        light: {
            primary: colors.red.base,
            secondary: colors.pink.lighten5,
            accent: colors.orange.darken4,
            background: colors.shades.white,
            surface: colors.shades.white,
            text: colors.shades.black,
        },
        dark: {
            primary: colors.red.lighten1,
            secondary: colors.pink.darken4,
            accent: colors.amber.base,
            background: colors.grey.darken4,
            surface: colors.grey.darken3,
            text: colors.shades.white,
        },
    },
    {
        id: 'lavender',
        light: {
            primary: colors.purple.accent1,
            secondary: colors.deepPurple.lighten5,
            accent: colors.blue.accent3,
            background: colors.shades.white,
            surface: colors.shades.white,
            text: colors.shades.black,
        },
        dark: {
            primary: colors.purple.accent1,
            secondary: colors.deepPurple.darken4,
            accent: colors.blue.accent3,
            background: colors.grey.darken4,
            surface: colors.grey.darken3,
            text: colors.shades.white,
        },
    },
    {
        id: 'monochrome',
        light: {
            primary: colors.grey.darken3,
            secondary: colors.grey.lighten3,
            accent: colors.grey.darken4,
            background: colors.shades.white,
            surface: colors.shades.white,
            text: colors.shades.black,
        },
        dark: {
            primary: colors.grey.lighten2,
            secondary: colors.shades.black,
            accent: colors.grey.base,
            background: colors.grey.darken4,
            surface: colors.grey.darken3,
            text: colors.shades.white,
        },
    },
];
