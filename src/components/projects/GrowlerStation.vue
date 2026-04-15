<script setup lang="ts">
import SlideSection from '../slideshow/SlideSection.vue'
import TechChip from '../shared/TechChip.vue'
</script>

<template>
    <SlideSection title="The Growler Station" icon="fa-solid fa-beer-mug-empty" label="The Growler Station project" :last="true">
        <p class="project-desc">A menu creation and management tool for bars and restaurants.</p>
        <p class="project-desc">Fully refactored from a messy Visual Basic server to using the current .NET Core variant and Entity Framework code-first database design.</p>
        <p class="project-desc">Pulled from a database of beverages and automatically updated to reflect user changes. Created an Android TV app for users to display their menus with device registration</p>
        <div class="tag-list">
            <TechChip label=".NET" icon="fa-brands fa-windows" url="https://dotnet.microsoft.com/"/>
            <TechChip label="MVC" icon="fa-solid fa-code" url="https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller"/>
            <TechChip label="Blazor" icon="fa-brands fa-windows" url="https://dotnet.microsoft.com/en-us/apps/aspnet/web-apps/blazor"/>
            <TechChip label="Identity Server" icon="fa-solid fa-shield-alt" url="https://duendesoftware.com/products/identityserver"/>
            <TechChip label="JWT" icon="fa-solid fa-key" url="https://www.jwt.io/"/>
            <TechChip label="SQL" icon="fa-solid fa-database" url="https://en.wikipedia.org/wiki/SQL"/>
            <TechChip label="Android" icon="fa-brands fa-android" url="https://www.android.com/"/>
            <TechChip label="Entity Framework" icon="fa-solid fa-database" url="https://learn.microsoft.com/en-us/aspnet/entity-framework"/>
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
    max-width: 420px;
}

.project-links {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
}

.project-link {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 1rem;
    border: 1px solid rgb(var(--v-theme-text));
    border-radius: 6px;
    font-family: 'Consolas', 'Courier New', Courier, monospace;
    font-size: 0.9rem;
    color: rgb(var(--v-theme-text));
    text-decoration: none;
    transition: border-color 0.15s ease, color 0.15s ease;
}

.project-link:hover {
    border-color: rgb(var(--v-theme-primary));
    color: rgb(var(--v-theme-primary));
}
</style>
