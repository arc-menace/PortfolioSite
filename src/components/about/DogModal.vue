<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useHaptics } from '../../composables/useHaptics'

interface DogBreed {
    name: string
    percentage: number
}

interface DogData {
    name: string
    image: string
    gender: 'male' | 'female'
    birthday: Date
    weight: number
    breeds: DogBreed[]
    loves: string[]
    dislikes: string[]
}

const props = defineProps<{
    modelValue: boolean
    dog: DogData | null
}>()

const emit = defineEmits<{
    'update:modelValue': [value: boolean]
}>()

const { hapticLight } = useHaptics()

const currentSlide = ref(0)
const totalSlides = 5

const dialogValue = computed({
    get: () => props.modelValue,
    set: (val: boolean) => emit('update:modelValue', val)
})

watch(() => props.modelValue, (val) => {
    if (val) currentSlide.value = 0
})

function close() {
    hapticLight()
    dialogValue.value = false
}

function prevSlide() {
    hapticLight()
    if (currentSlide.value > 0) currentSlide.value--
}

function nextSlide() {
    hapticLight()
    if (currentSlide.value < totalSlides - 1) currentSlide.value++
}

function goToSlideIndex(index: number) {
    currentSlide.value = index
}

function calculateAge(birthday: Date): number {
    const today = new Date()
    let age = today.getFullYear() - birthday.getFullYear()
    const monthDiff = today.getMonth() - birthday.getMonth()
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthday.getDate())) {
        age--
    }
    return age
}

const breedColors = ['#4CAF50', '#2196F3', '#FF9800', '#9C27B0']

// Weight gauge calculations
const GAUGE_CX = 100
const GAUGE_CY = 100
const GAUGE_R = 70
const GAUGE_NEEDLE_R = 50
const GAUGE_MAX = 120

function gaugePoint(weight: number, radius: number): { x: number; y: number } {
    const angle = Math.PI * (1 - weight / GAUGE_MAX)
    return {
        x: GAUGE_CX + radius * Math.cos(angle),
        y: GAUGE_CY - radius * Math.sin(angle),
    }
}

const gaugeTicks = [0, 30, 60, 90, 120].map(w => ({
    weight: w,
    inner: gaugePoint(w, 64),
    outer: gaugePoint(w, 72),
    label: gaugePoint(w, 84),
}))
</script>

<template>
    <v-dialog v-model="dialogValue" max-width="500">
        <v-card v-if="dog" class="dog-modal-card">
            <!-- Header -->
            <div class="dog-modal-header">
                <h2 class="dog-modal-name">{{ dog.name }}</h2>
                <button class="dog-modal-close" @click="close" aria-label="Close">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>

            <!-- Scrollable Body -->
            <div class="dog-modal-body">
                <!-- Image Carousel -->
                <div class="carousel">
                    <div class="carousel-track" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div v-for="i in totalSlides" :key="i" class="carousel-slide">
                            <img :src="dog.image" :alt="`${dog.name} photo ${i}`" />
                        </div>
                    </div>
                    <button v-if="currentSlide > 0" class="carousel-btn carousel-prev" @click="prevSlide" aria-label="Previous photo">
                        <i class="fa-solid fa-chevron-left"></i>
                    </button>
                    <button v-if="currentSlide < totalSlides - 1" class="carousel-btn carousel-next" @click="nextSlide" aria-label="Next photo">
                        <i class="fa-solid fa-chevron-right"></i>
                    </button>
                    <div class="carousel-dots">
                        <button v-for="i in totalSlides" :key="i"
                            class="carousel-dot"
                            :class="{ 'carousel-dot--active': currentSlide === i - 1 }"
                            @click="goToSlideIndex(i - 1)"
                            :aria-label="`Go to photo ${i}`"
                        ></button>
                    </div>
                </div>

                <div class="modal-content">
                    <!-- Breed Mix -->
                    <div class="section">
                        <h3 class="section-title"><i class="fa-solid fa-dna"></i> Breed Mix</h3>
                        <div class="breed-bar">
                            <div v-for="(breed, idx) in dog.breeds" :key="breed.name"
                                class="breed-segment"
                                :style="{ width: breed.percentage + '%', backgroundColor: breedColors[idx] }"
                            >
                                <span v-if="breed.percentage > 20" class="breed-segment-label">{{ breed.percentage }}%</span>
                            </div>
                        </div>
                        <div class="breed-legend">
                            <div v-for="(breed, idx) in dog.breeds" :key="breed.name" class="breed-legend-item">
                                <span class="breed-dot" :style="{ backgroundColor: breedColors[idx] }"></span>
                                <span class="breed-name">{{ breed.name }}</span>
                                <span class="breed-pct">{{ breed.percentage }}%</span>
                            </div>
                        </div>
                    </div>

                    <!-- Profile -->
                    <div class="section">
                        <h3 class="section-title"><i class="fa-solid fa-id-card"></i> Profile</h3>
                        <div class="stats-row">
                            <div class="stat-card">
                                <i :class="dog.gender === 'male' ? 'fa-solid fa-mars' : 'fa-solid fa-venus'" class="stat-icon"></i>
                                <span class="stat-label">{{ dog.gender === 'male' ? 'Male' : 'Female' }}</span>
                            </div>
                            <div class="stat-card">
                                <i class="fa-solid fa-cake-candles stat-icon"></i>
                                <span class="stat-label">{{ calculateAge(dog.birthday) }} years old</span>
                            </div>
                        </div>
                    </div>

                    <!-- Weight Gauge -->
                    <div class="section">
                        <h3 class="section-title"><i class="fa-solid fa-weight-scale"></i> Weight</h3>
                        <div class="gauge-wrapper">
                            <svg viewBox="0 0 200 115" class="weight-gauge">
                                <!-- Background arc -->
                                <path d="M 30 100 A 70 70 0 0 1 170 100" fill="none" stroke="rgba(128,128,128,0.25)" stroke-width="8" stroke-linecap="round" />

                                <!-- Ticks -->
                                <template v-for="tick in gaugeTicks" :key="tick.weight">
                                    <line :x1="tick.inner.x" :y1="tick.inner.y" :x2="tick.outer.x" :y2="tick.outer.y" stroke="rgba(128,128,128,0.4)" stroke-width="1.5" />
                                    <text :x="tick.label.x" :y="tick.label.y" text-anchor="middle" dominant-baseline="middle" class="tick-text">{{ tick.weight }}</text>
                                </template>

                                <!-- Needle -->
                                <line x1="100" y1="100"
                                    :x2="gaugePoint(dog.weight, GAUGE_NEEDLE_R).x"
                                    :y2="gaugePoint(dog.weight, GAUGE_NEEDLE_R).y"
                                    class="gauge-needle" stroke-width="3" stroke-linecap="round" />

                                <!-- Center dot -->
                                <circle cx="100" cy="100" r="5" class="gauge-dot" />

                                <!-- Weight text -->
                                <text x="100" y="86" text-anchor="middle" class="gauge-label">~{{ dog.weight }} lbs</text>
                            </svg>
                        </div>
                    </div>

                    <!-- Loves -->
                    <div class="section">
                        <h3 class="section-title"><i class="fa-solid fa-heart"></i> Loves</h3>
                        <div class="loves-chips">
                            <div v-for="item in dog.loves" :key="item" class="love-chip">
                                <i class="fa-solid fa-heart love-heart"></i>
                                <span>{{ item }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Dislikes -->
                    <div class="section section--last">
                        <h3 class="section-title"><i class="fa-solid fa-thumbs-down"></i> Not a Fan</h3>
                        <div class="dislikes-list">
                            <div v-for="item in dog.dislikes" :key="item" class="dislike-item">
                                <i class="fa-solid fa-ban dislike-icon"></i>
                                <span>{{ item }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </v-card>
    </v-dialog>
</template>

<style scoped>
/* Card layout */
.dog-modal-card {
    border-radius: 16px !important;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    max-height: 90vh;
}

/* Header */
.dog-modal-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    background: rgb(var(--v-theme-surface));
    border-bottom: 1px solid rgba(var(--v-theme-text), 0.1);
    flex-shrink: 0;
    z-index: 2;
}

.dog-modal-name {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1.25rem;
    font-weight: 700;
    color: rgb(var(--v-theme-text));
    margin: 0;
}

.dog-modal-close {
    background: none;
    border: none;
    color: rgb(var(--v-theme-text));
    font-size: 1.25rem;
    cursor: pointer;
    padding: 0.25rem 0.5rem;
    border-radius: 8px;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.dog-modal-close:hover {
    opacity: 1;
}

.dog-modal-close:focus-visible {
    outline: 2px solid rgb(var(--v-theme-primary));
    outline-offset: 2px;
}

/* Body */
.dog-modal-body {
    overflow-y: auto;
    flex: 1;
    overscroll-behavior: contain;
}

/* Carousel */
.carousel {
    position: relative;
    width: 100%;
    aspect-ratio: 4 / 3;
    overflow: hidden;
}

.carousel-track {
    display: flex;
    height: 100%;
    transition: transform 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    will-change: transform;
}

.carousel-slide {
    min-width: 100%;
    height: 100%;
}

.carousel-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.carousel-btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.45);
    color: #fff;
    border: none;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 0.85rem;
    transition: background 0.2s;
}

.carousel-btn:hover {
    background: rgba(0, 0, 0, 0.65);
}

.carousel-btn:focus-visible {
    outline: 2px solid #fff;
    outline-offset: 2px;
}

.carousel-prev { left: 10px; }
.carousel-next { right: 10px; }

.carousel-dots {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 6px;
}

.carousel-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: none;
    background: rgba(255, 255, 255, 0.45);
    cursor: pointer;
    padding: 0;
    transition: background 0.2s;
}

.carousel-dot--active {
    background: #fff;
}

/* Content */
.modal-content {
    padding: 1.25rem;
}

/* Sections */
.section {
    margin-bottom: 1.5rem;
}

.section--last {
    margin-bottom: 0;
}

.section-title {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    font-weight: 600;
    color: rgb(var(--v-theme-text));
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0 0 0.75rem;
}

.section-title i {
    color: rgb(var(--v-theme-accent));
    font-size: 0.85rem;
}

/* Breed Bar */
.breed-bar {
    display: flex;
    height: 22px;
    border-radius: 11px;
    overflow: hidden;
    margin-bottom: 0.75rem;
}

.breed-segment {
    display: flex;
    align-items: center;
    justify-content: center;
}

.breed-segment-label {
    font-family: 'Consolas', monospace;
    font-size: 0.65rem;
    color: #fff;
    font-weight: 700;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

.breed-legend {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 1rem;
}

.breed-legend-item {
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-family: 'Consolas', monospace;
    font-size: 0.78rem;
    color: rgb(var(--v-theme-text));
}

.breed-dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    flex-shrink: 0;
}

.breed-pct {
    opacity: 0.6;
}

/* Stats */
.stats-row {
    display: flex;
    gap: 0.75rem;
}

.stat-card {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.4rem;
    padding: 0.75rem;
    border-radius: 12px;
    background: rgba(var(--v-theme-primary), 0.08);
    border: 1px solid rgba(var(--v-theme-primary), 0.15);
}

.stat-icon {
    font-size: 1.4rem;
    color: rgb(var(--v-theme-accent));
}

.stat-label {
    font-family: 'Consolas', monospace;
    font-size: 0.85rem;
    font-weight: 600;
    color: rgb(var(--v-theme-text));
}

/* Gauge */
.gauge-wrapper {
    display: flex;
    justify-content: center;
}

.weight-gauge {
    width: 200px;
}

.tick-text {
    font-family: 'Consolas', monospace;
    font-size: 9px;
    fill: rgb(var(--v-theme-text));
    opacity: 0.5;
}

.gauge-needle {
    stroke: rgb(var(--v-theme-accent));
}

.gauge-dot {
    fill: rgb(var(--v-theme-accent));
}

.gauge-label {
    font-family: 'Consolas', monospace;
    font-size: 13px;
    font-weight: 700;
    fill: rgb(var(--v-theme-text));
}

/* Loves */
.loves-chips {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.love-chip {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.35rem 0.75rem;
    border-radius: 20px;
    background: rgba(76, 175, 80, 0.12);
    border: 1px solid rgba(76, 175, 80, 0.25);
    font-family: 'Consolas', monospace;
    font-size: 0.8rem;
    color: rgb(var(--v-theme-text));
}

.love-heart {
    color: #4CAF50;
    font-size: 0.65rem;
}

/* Dislikes */
.dislikes-list {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
}

.dislike-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.45rem 0.75rem;
    border-radius: 8px;
    background: rgba(244, 67, 54, 0.08);
    border-left: 3px solid rgba(244, 67, 54, 0.4);
    font-family: 'Consolas', monospace;
    font-size: 0.8rem;
    color: rgb(var(--v-theme-text));
}

.dislike-icon {
    color: #F44336;
    font-size: 0.75rem;
    opacity: 0.7;
}

@media only screen and (max-width: 480px) {
    .modal-content {
        padding: 1rem;
    }

    .breed-legend {
        flex-direction: column;
        gap: 0.3rem;
    }
}
</style>
