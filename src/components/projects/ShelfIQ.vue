<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'
import TechChip from '../shared/TechChip.vue'
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

@media only screen and (max-width: 600px) {
    .highlights-grid {
        grid-template-columns: 1fr;
    }
}
</style>
