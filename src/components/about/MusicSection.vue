<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'

interface MusicPick {
    title: string
    artist: string
    type: 'album' | 'track' | 'playlist'
    links: {
        spotify?: string
        appleMusic?: string
        youtube?: string
    }
}

// Add your curated picks here. Each entry renders only the platform links you provide.
const picks: MusicPick[] = [
    {
        title: 'Example Album',
        artist: 'Example Artist',
        type: 'album',
        links: {
            spotify: 'https://open.spotify.com',
            appleMusic: 'https://music.apple.com',
            youtube: 'https://music.youtube.com',
        }
    },
    {
        title: 'Another Pick',
        artist: 'Another Artist',
        type: 'track',
        links: {
            spotify: 'https://open.spotify.com',
            youtube: 'https://music.youtube.com',
        }
    },
]
</script>

<template>
    <SlideSection title="Music" icon="fa-solid fa-music" :center="true" max-width="700px">
        <p class="slide-text">Some picks worth a listen. Choose your platform.</p>

        <div class="picks-list">
            <div v-for="pick in picks" :key="pick.artist + pick.title" class="pick-row">
                <div class="pick-info">
                    <span class="pick-title">{{ pick.title }}</span>
                    <span class="pick-artist">{{ pick.artist }}</span>
                    <span class="pick-type">{{ pick.type }}</span>
                </div>
                <div class="pick-links">
                    <a v-if="pick.links.spotify" :href="pick.links.spotify" target="_blank" rel="noopener noreferrer" class="platform-link" aria-label="Listen on Spotify">
                        <i class="fa-brands fa-spotify" aria-hidden="true"></i> Spotify
                    </a>
                    <a v-if="pick.links.appleMusic" :href="pick.links.appleMusic" target="_blank" rel="noopener noreferrer" class="platform-link" aria-label="Listen on Apple Music">
                        <i class="fa-brands fa-apple" aria-hidden="true"></i> Apple Music
                    </a>
                    <a v-if="pick.links.youtube" :href="pick.links.youtube" target="_blank" rel="noopener noreferrer" class="platform-link" aria-label="Listen on YouTube Music">
                        <i class="fa-brands fa-youtube" aria-hidden="true"></i> YouTube
                    </a>
                </div>
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

.picks-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.pick-row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border: 1px solid rgba(var(--v-theme-text), 0.15);
    border-radius: 6px;
}

.pick-info {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
    min-width: 0;
}

.pick-title {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.95rem;
    font-weight: 600;
    color: rgb(var(--v-theme-text));
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.pick-artist {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.85rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.6;
}

.pick-type {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.72rem;
    color: rgb(var(--v-theme-primary));
    text-transform: uppercase;
    letter-spacing: 0.05em;
    opacity: 0.85;
}

.pick-links {
    display: flex;
    gap: 0.5rem;
    flex-shrink: 0;
}

.platform-link {
    display: inline-flex;
    align-items: center;
    gap: 0.35rem;
    padding: 0.3rem 0.65rem;
    border: 1px solid rgb(var(--v-theme-text));
    border-radius: 6px;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    color: rgb(var(--v-theme-text));
    text-decoration: none;
    white-space: nowrap;
    transition: border-color 0.15s ease, color 0.15s ease;
}

.platform-link:hover {
    border-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-primary));
}

.platform-link:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 3px;
    border-radius: 2px;
}

@media only screen and (max-width: 600px) {
    .pick-row {
        flex-direction: column;
        align-items: flex-start;
    }

    .pick-links {
        flex-wrap: wrap;
    }
}
</style>
