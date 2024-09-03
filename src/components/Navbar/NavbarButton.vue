<script setup lang="ts">

defineProps({
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
})

</script>

<template>
   
<div class="navbar-button-container">
    <div class="number">{{ index }}.</div>

    <div class="navbar-button" @click="() => onClick()">
        {{text}}
    </div>
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
    color: #4AAD52;
    opacity: 1;
}

.navbar-button {
    cursor: pointer;
    font-size: 1.5rem;
    font-family: "Consolas", monospace;
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