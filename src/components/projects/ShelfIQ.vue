<script setup lang="ts">
import ProjectSection from './ProjectSection.vue'
import TechChip from '../shared/TechChip.vue'

const LOGO_DEV_TOKEN = 'pk_O_YubjNGQK-CkK7JSZhUHA'

const brands = [
    { name: 'Walmart',      domain: 'walmart.com' },
    { name: 'Target',       domain: 'target.com' },
    { name: 'Swire Coca-Cola', domain: 'swirecc.com' },
    { name: 'Nestlé',       domain: 'nestle.com' },
    { name: 'PepsiCo',      domain: 'pepsico.com' },
    { name: 'Anheuser-Busch',      domain: 'anheuser-busch.com' },
    { name: 'Kraft Heinz',  domain: 'kraftheinzcompany.com' },
    { name: 'Mondelez',     domain: 'mondelezinternational.com' },
    { name: 'Unilever',     domain: 'unilever.com' },
]

const highlights = [
    {
        title: 'Workflow Engine',
        body: 'Built a workflow system for tracking 10–30 concurrent actions across 1,000–10,000 planograms with performant real-time status updates.',
    },
    {
        title: 'Assortment Action',
        body: 'Designed a general-purpose assortment action with multi-level dependency resolution, complex business logic, and thorough unit and snapshot test coverage.',
    },
    {
        title: 'CKB Integration',
        body: 'Integrated an undocumented CKB database with minimal vendor support and designed a bulk-write cache layer that significantly outperformed the legacy record-by-record approach.',
    },
    {
        title: 'UX & Dashboards',
        body: 'Led UX improvements across complex analytical dashboards, making dense data navigable and actionable for both power users and less experienced stakeholders.',
    },
]

function logoUrl(domain: string) {
    return `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=80&format=png`
}
</script>

<template>
    <ProjectSection title="ShelfIQ" role="Software Engineer II">
        <p class="body-text">CPG assortment and reporting software for retail category teams that automates Space Planning via a COM interface.</p>

        <ul class="highlights">
            <li v-for="item in highlights" :key="item.title" class="highlight">
                <span class="highlight-title">{{ item.title }}</span>
                <span class="highlight-body">{{ item.body }}</span>
            </li>
        </ul>

        <div class="brands">
            <p class="brands-caption">Used by some of the world's largest brands</p>
            <ul class="brand-list">
                <li v-for="brand in brands" :key="brand.domain">
                    <v-tooltip :text="brand.name" location="top">
                        <template #activator="{ props }">
                            <img
                                v-bind="props"
                                :src="logoUrl(brand.domain)"
                                :alt="brand.name"
                                class="brand-logo"
                                width="40"
                                height="40"
                                loading="lazy"
                            />
                        </template>
                    </v-tooltip>
                </li>
            </ul>
        </div>

        <div class="tag-list">
            <TechChip label=".NET" icon="fa-brands fa-windows" url="https://dotnet.microsoft.com/"/>
            <TechChip label="Blazor" icon="fa-brands fa-windows" url="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"/>
            <TechChip label="SQL Server" icon="fa-solid fa-database" url="https://www.microsoft.com/en-us/sql-server/"/>
            <TechChip label="Oracle DB" icon="fa-solid fa-database" url="https://www.oracle.com/database/"/>
            <TechChip label="COM Interop" icon="fa-brands fa-windows" url="https://learn.microsoft.com/en-us/dotnet/standard/native-interop/cominterop"/>
            <TechChip label="WPF" icon="fa-solid fa-window-maximize" url="https://learn.microsoft.com/en-us/dotnet/desktop/wpf/overview/"/>
            <TechChip label="Space Planning" icon="fa-solid fa-boxes-stacked" url="https://blueyonder.com/solutions/retail-planning/space-planning"/>
            <TechChip label="Entity Framework" icon="fa-solid fa-database" url="https://learn.microsoft.com/en-us/aspnet/entity-framework"/>
            <TechChip label="Excel" icon="fa-solid fa-file-excel" url="https://excel.cloud.microsoft/en-us/?wdOrigin=MARKETING.EXCEL.OPEN"/>
        </div>
    </ProjectSection>
</template>

<style scoped>
.highlights {
    list-style: none;
    margin: 0.5rem 0 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.75rem 2.5rem;
}

.highlight {
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
}

.highlight-title {
    font-size: 1rem;
    font-weight: 600;
    color: rgb(var(--v-theme-text));
}

.highlight-body {
    font-size: 0.9375rem;
    line-height: 1.6;
    color: var(--text-muted);
}

.brands {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    margin-top: 0.5rem;
}

.brands-caption {
    margin: 0;
    font-size: 0.9375rem;
    color: var(--text-subtle);
}

.brand-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
}

.brand-list li {
    display: flex;
}

.brand-logo {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    object-fit: cover;
    background: var(--hairline);
}

.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}

@media only screen and (max-width: 600px) {
    .highlights {
        grid-template-columns: 1fr;
        gap: 1.25rem;
    }
}
</style>
