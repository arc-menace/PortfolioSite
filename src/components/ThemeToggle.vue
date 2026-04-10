<template>
    <v-btn icon @click="toggleTheme" class="theme-toggle">
        <i v-if="isDark" class="fa-solid fa-sun"></i>
        <i v-else class="fa-solid fa-moon"></i>
    </v-btn>
</template>

<script lang="ts">
import { defineComponent, type Ref } from 'vue';
import { useTheme } from 'vuetify'

export default defineComponent({
    name: 'ThemeToggle',
    data() {
        return {
            theme: useTheme()
        }
    },
    computed: {
        isDark(): boolean {
            return this.theme.global.current.dark
        }
    },
    methods: {
        toggleTheme() {
            (this.theme.global.name as unknown as Ref<string>).value = this.isDark ? 'light' : 'dark'
        }
    }
})
</script>

<style scoped>
.theme-toggle {
    background-color: transparent;
    box-shadow: none;
    z-index: var(--z-index-theme-toggle);
    margin-left: 1rem;
}
</style>