<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'
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

function logoUrl(domain: string) {
    return `https://img.logo.dev/${domain}?token=${LOGO_DEV_TOKEN}&size=80&format=png`
}
</script>

<template>
    <SlideSection title="ShelfIQ" icon="fa-solid fa-boxes-stacked" label="ShelfIQ project">
        <p class="project-desc">CPG assortment and reporting software for retail category teams that automates Space Planning via a COM interface.</p>
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

        <div class="brand-carousel-wrapper">
            <div class="brand-carousel-header">Used by some of the world's largest brands</div>
            <div class="brand-carousel-mask">
                <div class="brand-carousel-track">
                    <v-tooltip v-for="(brand, i) in [...brands, ...brands]" :key="`${brand.domain}-${i}`" :text="brand.name" location="top">
                        <template #activator="{ props }">
                            <div class="brand-logo-item" v-bind="props">
                                <img :src="logoUrl(brand.domain)" :alt="brand.name" class="brand-logo" />
                            </div>
                        </template>
                    </v-tooltip>
                </div>
            </div>
        </div>

        <div class="highlights-grid">
            <div class="highlight-card">
                <i class="fa-solid fa-gears highlight-icon"></i>
                <div>
                    <div class="highlight-title">Workflow Engine</div>
                    <div class="highlight-body">Built a workflow system for tracking 10–30 concurrent actions across 1,000–10,000 planograms with performant real-time status updates.</div>
                </div>
            </div>
            <div class="highlight-card">
                <i class="fa-solid fa-code-branch highlight-icon"></i>
                <div>
                    <div class="highlight-title">Assortment Action</div>
                    <div class="highlight-body">Designed a general-purpose assortment action with multi-level dependency resolution, complex business logic, and thorough unit and snapshot test coverage.</div>
                </div>
            </div>
            <div class="highlight-card">
                <i class="fa-solid fa-plug highlight-icon"></i>
                <div>
                    <div class="highlight-title">CKB Integration</div>
                    <div class="highlight-body">Integrated an undocumented CKB database with minimal vendor support and designed a bulk-write cache layer that significantly outperformed the legacy record-by-record approach.</div>
                </div>
            </div>
            <div class="highlight-card">
                <i class="fa-solid fa-table-columns highlight-icon"></i>
                <div>
                    <div class="highlight-title">UX & Dashboards</div>
                    <div class="highlight-body">Led UX improvements across complex analytical dashboards, making dense data navigable and actionable for both power users and less experienced stakeholders.</div>
                </div>
            </div>
        </div>
    </SlideSection>
</template>

<style scoped>
.project-desc {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 1rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.75;
    margin: 0;
    line-height: 1.6;
    max-width: 600px;
}

.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    max-width: 550px;
}

.highlights-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.75rem;
    max-width: 680px;
}

.highlight-card {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    border-radius: 10px;
    background: rgba(var(--v-theme-primary), 0.06);
    border: 1px solid rgba(var(--v-theme-primary), 0.15);
}

.highlight-icon {
    color: rgb(var(--v-theme-accent));
    font-size: 1rem;
    margin-top: 0.15rem;
    flex-shrink: 0;
}

.highlight-title {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.8rem;
    font-weight: 700;
    color: rgb(var(--v-theme-text));
    margin-bottom: 0.3rem;
}

.highlight-body {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.75rem;
    color: rgb(var(--v-theme-text));
    opacity: 0.65;
    line-height: 1.5;
}

.brand-carousel-wrapper {
    max-width: 680px;
    width: 100%;
}

.brand-carousel-header {
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgb(var(--v-theme-text));
    opacity: 0.45;
    margin-bottom: 0.75rem;
}

.brand-carousel-mask {
    overflow: hidden;
    /* exactly 4 slots: 4 × 150px + 3 × 20px gaps = 660px */
    width: 660px;
    max-width: 100%;
    mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
    -webkit-mask-image: linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%);
}

.brand-carousel-track {
    display: flex;
    gap: 20px;
    align-items: center;
    width: max-content;
    animation: scroll-left 24s linear infinite;
}

.brand-logo-item {
    flex-shrink: 0;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 94px;
}

.brand-logo {
    max-width: 140px;
    max-height: 72px;
    width: auto;
    height: auto;
    object-fit: contain;
    filter: opacity(0.85);
    transition: filter 0.25s ease;
}

.brand-logo:hover {
    filter: opacity(1);
}

@keyframes scroll-left {
    0%   { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

@media only screen and (max-width: 600px) {
    .highlights-grid {
        grid-template-columns: 1fr;
    }
}
</style>
