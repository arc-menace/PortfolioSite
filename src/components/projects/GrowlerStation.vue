<script setup lang="ts">
import ProjectSection from './ProjectSection.vue'
import TechChip from '../shared/TechChip.vue'
</script>

<template>
    <ProjectSection title="The Growler Station" role="Software Engineer I">
        <p class="body-text">A menu creation and management tool for bars and restaurants.</p>
        <p class="body-text">Fully refactored from a messy Visual Basic server to using the current .NET Core variant and Entity Framework code-first database design.</p>
        <p class="body-text">Pulled from a database of beverages and automatically updated to reflect user changes. Created an Android TV app for users to display their menus with device registration.</p>
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
    </ProjectSection>
</template>

<style scoped>
.tag-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-top: 0.5rem;
}
</style>
