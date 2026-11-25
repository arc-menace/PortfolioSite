<script setup lang="ts">
import PageSection from '../components/layout/PageSection.vue'
import { SECTION_IDS } from '../config/sections'
import { useHaptics } from '../composables/useHaptics';

const { hapticLight } = useHaptics();
</script>

<template>
    <PageSection :id="SECTION_IDS.contact" title="Contact">
        <div class="contact">
            <p class="lead">Always happy to talk code, projects, or dogs.</p>

            <div class="contact-links">
                <a
                    href="mailto:contact@joe-hahn.com"
                    data-umami-event="contact-click"
                    data-umami-event-link="email"
                    class="contact-link"
                    @click="hapticLight()"
                >
                    <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    Email
                </a>
                <a
                    href="https://github.com/arc-menace"
                    data-umami-event="contact-click"
                    data-umami-event-link="github"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-link"
                >
                    <i class="fa-brands fa-github" aria-hidden="true"></i>
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/joseph-hahn-35b561219"
                    data-umami-event="contact-click"
                    data-umami-event-link="linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-link"
                >
                    <i class="fa-brands fa-linkedin-in" aria-hidden="true"></i>
                    LinkedIn
                </a>
                <a
                    href="https://github.com/arc-menace/Resume/releases/tag/latest"
                    data-umami-event="contact-click"
                    data-umami-event-link="resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-link"
                    @click="hapticLight()"
                >
                    <i class="fa-solid fa-file-arrow-down" aria-hidden="true"></i>
                    Resume
                </a>
            </div>

            <p class="contact-note">I do not work with military or weapons contractors, gambling sites or fossil fuel companies.</p>
        </div>
    </PageSection>
</template>

<style scoped>
.contact {
    display: flex;
    flex-direction: column;
    gap: 1.75rem;
}

.contact-links {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
}

.contact-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.55rem;
    padding: 0.65rem 1.1rem;
    border: 1px solid var(--hairline-strong);
    border-radius: 8px;
    font-size: 1rem;
    font-weight: 500;
    color: rgb(var(--v-theme-text));
    text-decoration: none;
    transition: border-color 0.15s ease, background-color 0.15s ease;
}

.contact-link:hover {
    border-color: rgb(var(--v-theme-text));
    background-color: rgba(var(--v-theme-text), 0.04);
}

.contact-link:focus-visible {
    outline: 2px solid rgb(var(--v-theme-primary));
    outline-offset: 3px;
}

.contact-note {
    margin: 0;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--text-subtle);
    max-width: 60ch;
}

@media only screen and (max-width: 480px) {
    .contact-links {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
}
</style>
