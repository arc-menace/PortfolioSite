import { Theme } from "./theme";

export const Themes: Record<string, Theme> = {
    light: {
      name: 'Light',
      colors: {
        background: '#EFF1F3',
        text: '#000000',
        primary: '#136F63',
        secondary: '#5B507A',
        tertiary: '#16DB65',
      },
    },
    dark: {
      name: 'Dark',
      colors: {
        background: '#000000',
        text: '#EFF1F3',
        primary: '#136F63',
        secondary: '#5B507A',
        tertiary: '#16DB65',
      },
    },
    test: {
        name: 'Test',
        colors: {
            background: 'red',
            text: 'blue',
            primary: 'white',
            secondary: 'green',
            tertiary: 'orange',
        },
    }
    // Add more predefined themes here
  }; 