<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

const props = defineProps<{
  slideIds: string[]
}>()

const currentIndex = ref(0)
const dragOffset = ref(0)
const isDragging = ref(false)
const isTransitioning = ref(false)
const containerRef = ref<HTMLElement | null>(null)

// ── Navigation ──────────────────────────────────────────────────────────────

const goTo = (index: number) => {
  if (isTransitioning.value) return
  const clamped = Math.max(0, Math.min(props.slideIds.length - 1, index))
  if (clamped === currentIndex.value) return
  isTransitioning.value = true
  isDragging.value = false
  dragOffset.value = 0
  currentIndex.value = clamped
  setTimeout(() => { isTransitioning.value = false }, 550)
}

const goNext = () => goTo(currentIndex.value + 1)
const goPrev = () => goTo(currentIndex.value - 1)

const goToId = (id: string) => {
  const i = props.slideIds.indexOf(id)
  if (i === -1) {
    console.warn(`[Slideshow] goToId: slide "${id}" not found in slideIds`)
    return
  }
  goTo(i)
}

defineExpose({ goToId })

// ── Slide DOM helpers ────────────────────────────────────────────────────────

const getSlides = (): HTMLElement[] =>
  Array.from(containerRef.value?.querySelectorAll<HTMLElement>('.slide') ?? [])

const getCurrentSlide = () => getSlides()[currentIndex.value] ?? null

const isAtTop = (el: HTMLElement) => el.scrollTop <= 2
const isAtBottom = (el: HTMLElement) =>
  el.scrollTop + el.clientHeight >= el.scrollHeight - 2

// ── Wheel ────────────────────────────────────────────────────────────────────

const wheelCooldown = ref(false)

const handleWheel = (e: WheelEvent) => {
  if (isTransitioning.value || wheelCooldown.value) return
  const slide = getCurrentSlide()
  if (!slide) return

  if (e.deltaY > 0 && isAtBottom(slide)) {
    e.preventDefault()
    wheelCooldown.value = true
    goNext()
    setTimeout(() => { wheelCooldown.value = false }, 50)
  } else if (e.deltaY < 0 && isAtTop(slide)) {
    e.preventDefault()
    wheelCooldown.value = true
    goPrev()
    setTimeout(() => { wheelCooldown.value = false }, 50)
  }
}

// ── Touch ────────────────────────────────────────────────────────────────────

let touchStartY = 0
let touchDecided = false
let touchIsSwipe = false
const DECIDE_PX = 8
const SWIPE_PX = 55

const handleTouchStart = (e: TouchEvent) => {
  touchStartY = e.touches[0].clientY
  touchDecided = false
  touchIsSwipe = false
  dragOffset.value = 0
}

const handleTouchMove = (e: TouchEvent) => {
  const deltaY = touchStartY - e.touches[0].clientY

  // On first meaningful movement, decide whether this is a slide-swipe or
  // an in-slide scroll based on whether we're at the scroll boundary.
  if (!touchDecided && Math.abs(deltaY) > DECIDE_PX) {
    touchDecided = true
    const slide = getCurrentSlide()
    if (!slide) {
      touchIsSwipe = true
    } else if (deltaY > 0) {
      touchIsSwipe = isAtBottom(slide)
    } else {
      touchIsSwipe = isAtTop(slide)
    }
    isDragging.value = touchIsSwipe
  }

  if (touchIsSwipe) {
    e.preventDefault()
    // Rubber-band resistance at the first and last slide
    const atFirst = currentIndex.value === 0 && deltaY < 0
    const atLast = currentIndex.value === props.slideIds.length - 1 && deltaY > 0
    const resistance = atFirst || atLast ? 0.25 : 1
    dragOffset.value = -(deltaY * resistance)
  }
}

const handleTouchEnd = (e: TouchEvent) => {
  const deltaY = touchStartY - e.changedTouches[0].clientY
  if (touchIsSwipe) {
    if (deltaY > SWIPE_PX) {
      goNext()
    } else if (deltaY < -SWIPE_PX) {
      goPrev()
    } else {
      // Didn't cross threshold — spring back
      isDragging.value = false
      dragOffset.value = 0
    }
  }
  touchIsSwipe = false
  touchDecided = false
}

// ── Accessibility ────────────────────────────────────────────────────────────

const ariaAnnouncement = ref('')

watch(currentIndex, (i) => {
  const id = props.slideIds[i] ?? ''
  ariaAnnouncement.value = id
    .split('-')
    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')
})

// ── Style ────────────────────────────────────────────────────────────────────

const wrapperStyle = computed(() => ({
  transform: `translateY(calc(-${currentIndex.value * 100}vh + ${dragOffset.value}px))`,
  transition: isDragging.value ? 'none' : 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
}))

// ── Lifecycle ────────────────────────────────────────────────────────────────

onMounted(() => {
  const el = containerRef.value!
  el.addEventListener('wheel', handleWheel, { passive: false })
  el.addEventListener('touchstart', handleTouchStart, { passive: true })
  el.addEventListener('touchmove', handleTouchMove, { passive: false })
  el.addEventListener('touchend', handleTouchEnd, { passive: true })
})

onUnmounted(() => {
  const el = containerRef.value
  if (!el) return
  el.removeEventListener('wheel', handleWheel)
  el.removeEventListener('touchstart', handleTouchStart)
  el.removeEventListener('touchmove', handleTouchMove)
  el.removeEventListener('touchend', handleTouchEnd)
})
</script>

<template>
  <div ref="containerRef" class="slideshow-container">
    <div class="slides-wrapper" :style="wrapperStyle">
      <slot />
    </div>
    <div class="sr-only" aria-live="polite" aria-atomic="true">{{ ariaAnnouncement }}</div>
  </div>
</template>

<style scoped>
.slideshow-container {
  position: fixed;
  inset: 0;
  overflow: hidden;
}

.slides-wrapper {
  display: flex;
  flex-direction: column;
  will-change: transform;
}

/* Applied to every .slide wrapper placed by App.vue */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

:deep(.slide) {
  height: 100vh;
  width: 100%;
  flex-shrink: 0;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  overscroll-behavior-y: none;
}
</style>
