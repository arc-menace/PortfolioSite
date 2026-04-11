<template>
    <div class="bio">
        <p class="bio-top-text">Hi, I'm Joe Hahn</p>
        <div class="bio-bottom-text">
            <span>I'm a full stack developer specializing in</span>
            <DotnetButton />
            <span>Desktop and Web Development</span>
        </div>
        <ScrollButton />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DotnetButton from './DotnetButton.vue';
import ScrollButton from './ScrollButton.vue';

export default defineComponent({
    name: 'Bio',
    components: {
        DotnetButton,
        ScrollButton
    },
});

</script>

<style scoped>
.bio {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    z-index: 5;
    overflow: hidden;
}

.bio-top-text {
    font-size: 4rem;
    font-weight: 700;
    color: rgb(var(--v-theme-text));
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    max-width: 80%;
    margin-top: 10%;
}

.bio-bottom-text {
    margin-bottom: 20%;
    font-size: 2rem;
    font-weight: 400;
    color: rgb(var(--v-theme-text));
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    max-width: 80%;
}
</style>
