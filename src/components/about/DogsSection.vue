<script setup lang="ts">
import { ref } from 'vue'
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
    <div class="dogs">
        <h3 class="sub-heading">Butters &amp; Molly</h3>
        <p class="body-text">I love these little goof balls</p>

        <div class="dogs-grid">
            <button
                v-for="dog in dogs"
                :key="dog.name"
                type="button"
                class="dog-card"
                :aria-label="`View ${dog.name}'s profile`"
                @click="openDogModal(dog)"
            >
                <span class="dog-image-wrapper">
                    <img :src="dog.image" :alt="dog.name" class="dog-image" loading="lazy" />
                </span>
                <span class="dog-caption">
                    <span class="dog-name">{{ dog.name }}</span>
                    <span class="dog-hint">View profile</span>
                </span>
            </button>
        </div>

        <DogModal v-model="showModal" :dog="selectedDog" />
    </div>
</template>

<style scoped>
.dogs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.dogs-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
    max-width: 30rem;
    margin-top: 0.5rem;
}

.dog-card {
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    padding: 0;
    border: none;
    background: none;
    color: inherit;
    font: inherit;
    text-align: left;
    cursor: pointer;
}

.dog-card:focus-visible {
    outline: 2px solid rgb(var(--v-theme-primary));
    outline-offset: 4px;
    border-radius: 12px;
}

.dog-image-wrapper {
    display: block;
    width: 100%;
    aspect-ratio: 1;
    border-radius: 12px;
    overflow: hidden;
    background: var(--hairline);
}

.dog-image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.dog-card:hover .dog-image {
    transform: scale(1.03);
}

.dog-caption {
    display: flex;
    align-items: baseline;
    justify-content: space-between;
    gap: 0.5rem;
}

.dog-name {
    font-size: 1.0625rem;
    font-weight: 600;
    color: rgb(var(--v-theme-text));
}

.dog-hint {
    font-size: 0.875rem;
    color: var(--text-subtle);
    transition: color 0.15s ease;
}

.dog-card:hover .dog-hint {
    color: rgb(var(--v-theme-text));
}

@media (prefers-reduced-motion: reduce) {
    .dog-image {
        transition: none;
    }
}
</style>
