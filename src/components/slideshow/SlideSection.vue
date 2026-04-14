<script setup lang="ts">
withDefaults(defineProps<{
  title: string
  label?: string      // aria-label; falls back to title
  maxWidth?: string   // default '860px'
  icon?: string       // FontAwesome class for timeline icon, e.g. 'fa-solid fa-paw'
  first?: boolean     // suppress line above the icon (first slide in timeline)
  last?: boolean      // suppress line below the icon (last slide in timeline)
}>(), {
  maxWidth: '860px',
  first: false,
  last: false,
})
</script>

<template>
  <section class="slide-section" :aria-label="label ?? title">
    <div class="section-container" :style="{ maxWidth }">
      <div
        class="timeline-rail"
        :class="{ 'timeline-rail--first': first, 'timeline-rail--last': last }"
        aria-hidden="true"
      >
        <div v-if="icon" class="timeline-icon-wrap">
          <i :class="[icon, 'timeline-icon']"></i>
        </div>
      </div>
      <div class="section-body">
        <h2 class="section-heading">{{ title }}</h2>
        <slot />
      </div>
    </div>
  </section>
</template>

<style scoped>
/*
  Layout constants (keep in sync if you change padding values):
    slide-section padding-top      : 5rem   → used in ::before top / height
    section-container padding-bottom: 3rem  → used in ::after bottom
    --icon-center : heading centre from rail top = (font × line-height) / 2
                  = 2.2rem × 1.2 / 2 = 1.32rem
    --icon-gap    : half the 3rem icon space = 1.5rem
*/

.slide-section {
  height: 100%;
  width: 100%;
  padding-top: 5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-container {
  width: 100%;
  padding: 0 2rem 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 1.25rem;
  align-items: flex-start;
  flex: 1;
}

/* ── Timeline rail ──────────────────────────────────────────────────────────── */

.timeline-rail {
  --icon-center: calc(2.2rem * 1.2 / 2);   /* 1.32rem */
  --icon-gap: 1.5rem;                        /* half of the 3rem icon space */
  flex-shrink: 0;
  width: 28px;
  align-self: stretch;
  position: relative;
}

/* Line segment ABOVE the icon gap */
.timeline-rail::before {
  content: '';
  position: absolute;
  top: -5rem;                                                   /* reach slide top */
  height: calc(5rem + var(--icon-center) - var(--icon-gap));   /* end at gap top  */
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: rgb(var(--v-theme-primary));
}

/* Line segment BELOW the icon gap */
.timeline-rail::after {
  content: '';
  position: absolute;
  top: calc(var(--icon-center) + var(--icon-gap));  /* start at gap bottom */
  bottom: -3rem;                                     /* reach slide bottom  */
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  background: rgb(var(--v-theme-primary));
}

/* First slide: no line above the icon */
.timeline-rail--first::before {
  display: none;
}

/* Last slide: no line below the icon */
.timeline-rail--last::after {
  display: none;
}

/* Icon centred in the 3rem gap */
.timeline-icon-wrap {
  position: absolute;
  top: calc(var(--icon-center) - var(--icon-gap));
  left: 50%;
  transform: translateX(-50%);
  height: calc(2 * var(--icon-gap));
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
}

.timeline-icon {
  color: rgb(var(--v-theme-primary));
  font-size: 1.4rem;
  line-height: 1;
}

/* ── Content column ─────────────────────────────────────────────────────────── */

.section-body {
  flex: 1;
  min-width: 0;
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
  line-height: 1.2;
}

@media only screen and (max-width: 480px) {
  .timeline-rail {
    --icon-center: calc(1.8rem * 1.2 / 2);  /* 1.08rem */
  }

  .section-heading {
    font-size: 1.8rem;
  }
}
</style>
