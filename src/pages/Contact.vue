<template>
    <section id="contact" aria-label="Contact">
        <div class="contact-container">
            <h2 class="contact-heading">Always Open to New Opportunities</h2>

            <p class="contact-tagline">Let's build something together.</p>

            <div class="contact-links">
                <a
                    href="https://github.com/arc-menace"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-link"
                >
                    <i class="fa-brands fa-github"></i>
                    GitHub
                </a>
                <a
                    href="https://www.linkedin.com/in/joseph-hahn-35b561219"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="contact-link"
                >
                    <i class="fa-brands fa-linkedin-in"></i>
                    LinkedIn
                </a>
                <a
                    href="/JoeHahnResume.pdf"
                    class="contact-link"
                    download
                >
                    <i class="fa-solid fa-file-arrow-down"></i>
                    Resume
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
#contact {
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

}

.contact-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    text-align: center;
}

.contact-heading {
    font-size: 2.5rem;
    font-weight: 700;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    color: rgb(var(--v-theme-text));
    margin: 0;
}

.contact-tagline {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1.1rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.7;
    margin: 0;
}

.contact-links {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    margin-top: 0.5rem;
}

.contact-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.6rem 1.2rem;
    border: 1px solid rgb(var(--v-theme-text));
    border-radius: 8px;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: rgb(var(--v-theme-text));
    text-decoration: none;
    transition: border-color 0.15s ease, color 0.15s ease;
}

.contact-link:hover {
    border-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-primary));
}

.contact-link:focus-visible {
    outline: 2px solid currentColor;
    outline-offset: 4px;
    border-radius: 2px;
}

@media only screen and (max-width: 480px) {
    .contact-heading {
        font-size: 2rem;
    }

    .contact-links {
        flex-direction: column;
        width: 100%;
        padding: 0 2rem;
    }

    .contact-link {
        justify-content: center;
    }
}
</style>
