<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()
</script>

<template>
    <div class="bio">
        <p class="bio-top-text" :class="{ 'dark': theme.global.current.value.dark }">Hi, I'm Joe Hahn</p>
        <div class="bio-bottom-text" :class="{ 'dark': theme.global.current.value.dark }">
            <span>I'm a full stack developer specializing in</span>
            <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" class="bio-bottom-text-highlight">.NET</a>
            <span>Desktop and Web Development</span>
        </div>
    </div>
</template>

<style scoped>
.bio {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    z-index: 5;
    overflow: scroll;
}

.bio-top-text {
    font-size: 4rem;
    font-weight: 700;
    color: #000;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    max-width: 80%;
    margin-top: 10%;
}

.bio-top-text.dark {
    color: #fff;
}

.bio-bottom-text {
    margin-bottom: 10%;
    font-size: 2rem;
    font-weight: 400;
    color: #000;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    max-width: 80%;
}

.bio-top-text.dark {
    color: #fff;
}

.bio-bottom-text.dark {
    color: #fff;
}

.bio-bottom-text-highlight {
    background: linear-gradient(45deg, #512bd4, #e73c7e, #512bd4);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    font-weight: bold;
    text-decoration: none;
    padding: 0.2em 0.4em;
    border-radius: 0.3em;
    transition: all 0.3s ease;
    position: relative;
    animation: gradientFlow 5s ease infinite;
    margin-left: 0.2em;
    margin-right: 0.2em;
}

.bio-bottom-text-highlight::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #512bd4, #e73c7e, #512bd4);
    background-size: 200% 200%;
    border-radius: 0.3em;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    animation: gradientFlow 5s ease infinite;
}

.bio-bottom-text-highlight:hover {
    color: white;
    -webkit-text-fill-color: white;
}

.bio-bottom-text-highlight:hover::before {
    opacity: 1;
}

@keyframes gradientFlow {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}
</style>