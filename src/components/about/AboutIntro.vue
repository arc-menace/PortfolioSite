<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'

const facts = [
    { icon: 'fa-solid fa-location-dot', label: 'Location', value: 'Denver, CO' },
    { icon: 'fa-solid fa-briefcase', label: 'Experience', value: '5 Years' },
    { icon: 'fa-solid fa-building', label: 'Role', value: 'Software Engineer II at Nuqleous (now Engine)' },
    { icon: 'fa-solid fa-shield-halved', label: 'Eagle Scout', value: 'Class of 2018' },
]

const hobbies = [
    { icon: 'fa-solid fa-paw', label: 'Dogs' },
    { icon: 'fa-solid fa-house-signal', label: 'Smart Home' },
    { icon: 'fa-solid fa-music', label: 'Concerts' },
    { icon: 'fa-solid fa-plane-departure', label: 'Travelling' },
    { icon: 'fa-solid fa-microchip', label: 'Tech' },
]
</script>

<template>
    <SlideSection title="About Me" icon="fa-solid fa-user" :first="true">
        <div class="about-content">
            <p class="intro-text">A full stack developer who loves building things — at work and at home. Here's a quick snapshot.</p>

            <div class="facts-grid">
                <div v-for="fact in facts" :key="fact.label" class="fact-card">
                    <div class="fact-icon-wrap">
                        <i :class="[fact.icon, 'fact-icon']"></i>
                    </div>
                    <span class="fact-label">{{ fact.label }}</span>
                    <span class="fact-value">{{ fact.value }}</span>
                </div>
            </div>

            <div class="hobbies-section">
                <span class="hobbies-label">Interests</span>
                <div class="hobbies-list">
                    <div v-for="hobby in hobbies" :key="hobby.label" class="hobby-card">
                        <div class="hobby-icon-wrap">
                            <i :class="[hobby.icon, 'hobby-icon']"></i>
                        </div>
                        <span class="hobby-name">{{ hobby.label }}</span>
                    </div>
                </div>
            </div>
        </div>
    </SlideSection>
</template>

<style scoped>
.intro-text {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.75;
    margin: 0;
    line-height: 1.6;
}

.about-content {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    flex: 1;
    justify-content: center;
}

.facts-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
}

.fact-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.6rem;
    padding: 2rem 1.25rem;
    border-radius: 14px;
    border: 1px solid rgba(var(--v-theme-primary), 0.15);
    background: rgba(var(--v-theme-primary), 0.04);
    transition: border-color 0.3s ease, background 0.3s ease, box-shadow 0.3s ease;
}

.fact-card:hover {
    border-color: rgba(var(--v-theme-primary), 0.4);
    background: rgba(var(--v-theme-primary), 0.08);
    box-shadow: 0 4px 20px rgba(var(--v-theme-primary), 0.15);
}

.fact-icon-wrap {
    width: 3.25rem;
    height: 3.25rem;
    border-radius: 50%;
    background: rgba(var(--v-theme-primary), 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 0.25rem;
}

.fact-icon {
    color: rgb(var(--v-theme-primary));
    font-size: 1.35rem;
}

.fact-label {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.75rem;
    color: rgb(var(--v-theme-primary));
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
}

.fact-value {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.95rem;
    color: rgb(var(--v-theme-text));
    line-height: 1.5;
    opacity: 0.85;
}

.hobbies-section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.hobbies-label {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.75rem;
    color: rgb(var(--v-theme-primary));
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-weight: 600;
}

.hobbies-list {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}

.hobby-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 1.25rem;
    border-radius: 12px;
    border: 1px solid rgba(var(--v-theme-primary), 0.15);
    background: rgba(var(--v-theme-primary), 0.04);
    transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
    min-width: 5.5rem;
}

.hobby-card:hover {
    border-color: rgba(var(--v-theme-primary), 0.4);
    background: rgba(var(--v-theme-primary), 0.08);
    box-shadow: 0 2px 12px rgba(var(--v-theme-primary), 0.15);
}

.hobby-icon-wrap {
    width: 2.25rem;
    height: 2.25rem;
    border-radius: 50%;
    background: rgba(var(--v-theme-primary), 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
}

.hobby-icon {
    color: rgb(var(--v-theme-primary));
    font-size: 1rem;
}

.hobby-name {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.85;
}

@media only screen and (max-width: 480px) {
    .facts-grid {
        gap: 0.75rem;
    }

    .fact-card {
        padding: 1.25rem 0.75rem;
    }

    .fact-icon-wrap {
        width: 2.5rem;
        height: 2.5rem;
    }

    .fact-icon {
        font-size: 1.1rem;
    }
}
</style>
