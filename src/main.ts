import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
import App from './App.vue'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { defaultLightTheme, defaultDarkTheme } from './models/themeColors'

const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: 'dark',
        themes: {
            light: {
                dark: false,
                colors: {
                    primary: defaultLightTheme.primary,
                    secondary: defaultLightTheme.secondary,
                    accent: defaultLightTheme.accent,
                    background: defaultLightTheme.background,
                    surface: defaultLightTheme.surface,
                },
            },
            dark: {
                dark: true,
                colors: {
                    primary: defaultDarkTheme.primary,
                    secondary: defaultDarkTheme.secondary,
                    accent: defaultDarkTheme.accent,
                    background: defaultDarkTheme.background,
                    surface: defaultDarkTheme.surface,
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
