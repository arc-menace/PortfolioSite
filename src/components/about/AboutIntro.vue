<script setup lang="ts">
const facts = [
    { label: 'Location', value: 'Denver, CO' },
    { label: 'Experience', value: '5 Years' },
    { label: 'Role', value: 'Software Engineer II at Lean TECHniques' },
    { label: 'Eagle Scout', value: 'Class of 2018' },
    { label: 'Interests', value: 'Dogs, Smart Home, Concerts, Travelling, Tech' },
]
</script>

<template>
    <div class="about-intro">
        <p class="lead">A full stack developer who loves building things — at work and at home. Here's a quick snapshot.</p>

        <dl class="facts">
            <div v-for="fact in facts" :key="fact.label" class="fact-row">
                <dt class="fact-label">{{ fact.label }}</dt>
                <dd class="fact-value">{{ fact.value }}</dd>
            </div>
        </dl>
    </div>
</template>

<style scoped>
.about-intro {
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.facts {
    margin: 0;
    border-bottom: 1px solid var(--hairline);
}

.fact-row {
    display: grid;
    grid-template-columns: 9rem minmax(0, 1fr);
    gap: 1rem;
    padding: 0.9rem 0;
    border-top: 1px solid var(--hairline);
}

.fact-label {
    font-size: 0.9375rem;
    color: var(--text-subtle);
}

.fact-value {
    margin: 0;
    font-size: 1.0625rem;
    line-height: 1.5;
    color: rgb(var(--v-theme-text));
}

@media only screen and (max-width: 480px) {
    .fact-row {
        grid-template-columns: 1fr;
        gap: 0.15rem;
        padding: 0.75rem 0;
    }

    .fact-label {
        font-size: 0.875rem;
    }

    .fact-value {
        font-size: 1rem;
    }
}
</style>
