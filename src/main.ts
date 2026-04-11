import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import { createVuetify } from 'vuetify'
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defaultPreset } from './models/themeColors'

const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: prefersDark ? 'dark' : 'light',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: defaultPreset.light.primary,
                    secondary: defaultPreset.light.secondary,
                    accent: defaultPreset.light.accent,
                    background: defaultPreset.light.background,
                    surface: defaultPreset.light.surface,
                    text: defaultPreset.light.text,
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: defaultPreset.dark.primary,
                    secondary: defaultPreset.dark.secondary,
                    accent: defaultPreset.dark.accent,
                    background: defaultPreset.dark.background,
                    surface: defaultPreset.dark.surface,
                    text: defaultPreset.dark.text,
                },
            },
        },
    },
})

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(vuetify);
app.mount('#app');
