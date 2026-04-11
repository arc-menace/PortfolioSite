<script lang="ts">
import { defineComponent } from 'vue';
import { useThemeColors } from '../../composables/useThemeColors';

export default defineComponent({
    name: 'NavbarButton',
    data() {
        return {
            themeColors: useThemeColors()
        };
    },
    props: {
        index: {
            type: Number,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        onClick: {
            type: Function,
            required: true
        }
    }
});
</script>

<template>
   
<div class="navbar-button-container">
    <div class="number">{{ index }}.</div>

    <button class="navbar-button" @click="() => onClick()">
        {{text}}
    </button>
</div>


</template>

<style scoped>

.navbar-button-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5rem;
    opacity: 1;
}

.number {
    font-size: 1.5rem;
    font-family: "Consolas", monospace;
    color: v-bind('themeColors.currentColors.accent');
    opacity: 1;
}

.navbar-button {
    cursor: pointer;
    font-size: 1.5rem;
    font-family: "Consolas", monospace;
    background: none;
    border: none;
    color: inherit;
    padding: 0;
}

.navbar-button:hover {
    text-decoration: underline;
}

@media only screen and (max-width: 768px) {
    .navbar-button-container {
        gap: 0.3rem;
    }

    .navbar-button {
        font-size: 1.2rem;
    }

    .number {
        font-size: 1.2rem;
    }

}

@media only screen and (max-width: 480px) {
    .navbar-button-container {
        gap: 0rem;
        justify-content: center;
    }

    .navbar-button {
        font-size: 1rem;
    }

    .number {
        font-size: 1rem;
    }
}
    
    

</style>