<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  icon?: string       // FontAwesome class e.g. 'fa-solid fa-paw'
  label?: string      // aria-label; falls back to title
  maxWidth?: string   // default '860px'
  center?: boolean    // vertically center content (default: top-aligned)
}>(), {
  maxWidth: '860px',
  center: false,
})
</script>

<template>
  <section class="slide-section" :aria-label="label ?? title" :class="{ 'slide-section--center': center }">
    <div class="section-container" :style="{ maxWidth }">
      <h2 class="section-heading">
        <i v-if="icon" :class="icon" aria-hidden="true"></i>
        {{ title }}
      </h2>
      <slot />
    </div>
  </section>
</template>

<style scoped>
.slide-section {
  height: 100%;
  width: 100%;
  padding-top: 5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
}

.slide-section--center {
  justify-content: center;
}

.section-container {
  width: 100%;
  padding: 0 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.section-heading {
  font-size: 2.2rem;
  font-weight: 700;
  font-family: 'Consolas', 'Courier New', Courier, monospace;
  color: rgb(var(--v-theme-text));
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.section-heading i {
  color: rgb(var(--v-theme-primary));
}

@media only screen and (max-width: 480px) {
  .section-heading {
    font-size: 1.8rem;
  }
}
</style>
