<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>

<template>
    <v-btn icon @click="theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'" class="theme-toggle">
        <i v-if="theme.global.current.value.dark" class="fa-solid fa-sun"></i>
        <i v-else class="fa-solid fa-moon"></i>
    </v-btn>
</template>

<style scoped>
.theme-toggle {
    background-color: transparent;
    box-shadow: none;
}
</style>