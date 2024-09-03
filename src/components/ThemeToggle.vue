<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>

<template>
    <v-btn icon @click="theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'"></v-btn>
</template>

<style scoped>

</style>