/// <reference types="vite/client" />

declare module 'vuetify/styles' {}

declare module '*.svg?component' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent
    export default component
}
