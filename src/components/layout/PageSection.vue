<script setup lang="ts">
import { navbarHeight } from '../../models/globals'

defineProps<{
  id: string
  title: string
}>()
</script>

<template>
  <section :id="id" class="page-section" :aria-labelledby="`${id}-heading`" tabindex="-1">
    <div class="page-section-inner">
      <h2 :id="`${id}-heading`" class="page-section-title">{{ title }}</h2>
      <div class="page-section-body">
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
.page-section {
  width: 100%;
  padding: 0 var(--page-gutter);
  box-sizing: border-box;
}

/* Only ever focused programmatically (after nav), so no ring is needed. */
.page-section:focus {
  outline: none;
}

/* Top padding clears the fixed navbar when a section is scrolled to. */
.page-section-inner {
  max-width: var(--page-max-width);
  margin: 0 auto;
  padding: calc(v-bind(navbarHeight) + 1.5rem) 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.page-section + .page-section .page-section-inner {
  border-top: 1px solid var(--hairline);
}

.page-section-title {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 1.75rem;
  font-weight: 700;
  line-height: 1.2;
  color: rgb(var(--v-theme-text));
}

.page-section-body {
  min-width: 0;
}

/* Wide screens: section title sits in a left rail beside the content. */
@media only screen and (min-width: 900px) {
  .page-section-inner {
    display: grid;
    grid-template-columns: 11rem minmax(0, 1fr);
    column-gap: 4rem;
    padding: calc(v-bind(navbarHeight) + 2.5rem) 0 6rem;
  }

  .page-section-title {
    position: sticky;
    top: calc(v-bind(navbarHeight) + 2.5rem);
    align-self: start;
  }
}
</style>
