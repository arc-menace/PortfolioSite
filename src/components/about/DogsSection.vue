<script setup lang="ts">
import { ref } from 'vue'
import SlideSection from '../slideshow/SlideSection.vue'
import DogModal from './DogModal.vue'
import { useHaptics } from '../../composables/useHaptics'

const { hapticLight } = useHaptics()

const dogs = [
    {
        name: 'Butters',
        image: '/images/dogs/butters.jpg',
        gender: 'male' as const,
        birthday: new Date(2022, 11, 26),
        weight: 83,
        breeds: [
            { name: 'Labrador Retriever', percentage: 35.4 },
            { name: 'Great Pyrenees', percentage: 26.3 },
            { name: 'American Pit Bull Terrier', percentage: 25.2 },
            { name: 'Australian Cattle Dog', percentage: 13.1 },
        ],
        loves: ['Peanut Butter', 'Squeaky Toys', 'Group Naps', 'Going to the Park'],
        dislikes: ['The Vet', 'Frogs', 'Eye Drops'],
    },
    {
        name: 'Molly',
        image: '/images/dogs/molly.jpg',
        gender: 'female' as const,
        birthday: new Date(2019, 8, 15),
        weight: 43,
        breeds: [
            { name: 'Australian Shepherd', percentage: 100 },
        ],
        loves: ['Going to Work', 'Being Snuggled', 'Getting Her Teeth Brushed'],
        dislikes: ['The Dryer', 'The Fire Alarm', 'Being Ignored'],
    },
]

const selectedDog = ref<typeof dogs[number] | null>(null)
const showModal = ref(false)

function openDogModal(dog: typeof dogs[number]) {
    hapticLight()
    selectedDog.value = dog
    showModal.value = true
}
</script>

<template>
    <SlideSection title="Butters &amp; Molly" icon="fa-solid fa-paw">
        <p class="slide-text">The real MVPs. They keep the home office lively and remind me when it's time to stop coding.</p>

        <div class="dogs-grid">
            <div v-for="dog in dogs" :key="dog.name" class="dog-card" @click="openDogModal(dog)">
                <div class="dog-image-wrapper">
                    <img :src="dog.image" :alt="dog.name" class="dog-image" />
                </div>
                <span class="dog-name">{{ dog.name }}</span>
            </div>
        </div>

        <DogModal v-model="showModal" :dog="selectedDog" />
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
    cursor: pointer;
}

.dog-image-wrapper {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 30%;
    overflow: hidden;
    position: relative;
    transition: box-shadow 0.3s ease;
}

.dog-image-wrapper::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    box-shadow: inset 0 0 40px 12px rgba(0, 0, 0, 0.45);
    pointer-events: none;
}

.dog-card:hover .dog-image-wrapper {
    box-shadow: 0 0 24px 8px rgba(var(--v-theme-secondary), 0.5);
}

.dog-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.dog-card:hover .dog-image {
    transform: scale(1.05);
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
