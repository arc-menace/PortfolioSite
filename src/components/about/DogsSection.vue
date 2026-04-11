<script setup lang="ts">
import SlideSection from '../SlideSection.vue'
</script>

<template>
    <SlideSection title="Butters &amp; Molly" icon="fa-solid fa-paw" :center="true" max-width="700px">
        <p class="slide-text">The real MVPs. They keep the home office lively and remind me when it's time to stop coding.</p>

        <div class="dogs-grid">
            <div class="dog-card">
                <div class="dog-image-wrapper">
                    <!-- Drop a transparent PNG at /images/dogs/butters.png to show the photo -->
                    <div class="dog-placeholder" aria-label="Photo of Butters coming soon">
                        <i class="fa-solid fa-dog" aria-hidden="true"></i>
                    </div>
                </div>
                <span class="dog-name">Butters</span>
            </div>
            <div class="dog-card">
                <div class="dog-image-wrapper">
                    <!-- Drop a transparent PNG at /images/dogs/molly.png to show the photo -->
                    <div class="dog-placeholder" aria-label="Photo of Molly coming soon">
                        <i class="fa-solid fa-dog" aria-hidden="true"></i>
                    </div>
                </div>
                <span class="dog-name">Molly</span>
            </div>
        </div>
    </SlideSection>
</template>

<style scoped>
.slide-text {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.75;
    margin: 0;
    line-height: 1.6;
    text-align: center;
}

.dogs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    max-width: 500px;
    align-self: center;
    width: 100%;
}

.dog-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
}

.dog-image-wrapper {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.dog-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
}

.dog-placeholder {
    width: 100%;
    aspect-ratio: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed rgba(var(--v-theme-text), 0.25);
    border-radius: 12px;
    color: rgba(var(--v-theme-text), 0.25);
}

.dog-placeholder i {
    font-size: 4rem;
}

.dog-name {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1.1rem;
    font-weight: 600;
    color: rgb(var(--v-theme-text));
}

@media only screen and (max-width: 480px) {
    .dogs-grid {
        gap: 1.25rem;
    }
}
</style>
