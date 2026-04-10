<template>
    <div class="scroll-button" :onClick="() => { scrollToId('projects') }">
        <i class="fa-solid fa-chevron-down"></i>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { scrollToId } from '../../helpers/scrollHelper';

export default defineComponent({
    name: 'ScrollButton',
    methods: {
        scrollToId
    }
});
</script>

<style scoped>
@media screen and (max-height: 768px) {
    .scroll-button {
        display: none;
    }
}

.scroll-button {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    opacity: 0.5;
    color: #fff;
    border-radius: 50%;
    position: absolute;
    bottom: 25px;
    left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
}

.scroll-button i {
    font-size: 1.5rem;
    position: absolute;
    top: calc(50% - 0.75rem);
    left: calc(50% - 0.75rem);
}

.scroll-button:hover {
    background-color: #4AAD52;
    opacity: 1;
    scale: 1.1;
    transition: all 0.3s ease;
}
</style>