import { ref, onMounted, onBeforeUnmount } from 'vue'
import { SECTION_IDS, SECTION_ORDER, type SectionId } from '../config/sections'

/**
 * Tracks which page section is currently in view and scrolls to sections on
 * request. The page scrolls natively — this only observes and assists.
 * Call once, from App.vue, and provide the results to children.
 */
export function useSectionNav() {
  const activeSectionId = ref<SectionId>(SECTION_IDS.home)
  const isScrolled = ref(false)
  let frame = 0

  function update() {
    frame = 0
    isScrolled.value = window.scrollY > 8

    // A section becomes "active" once its top passes a line 40% down the viewport.
    const marker = window.innerHeight * 0.4
    let current: SectionId = SECTION_ORDER[0]
    for (const id of SECTION_ORDER) {
      const el = document.getElementById(id)
      if (el && el.getBoundingClientRect().top <= marker) current = id
    }

    // The last section may be too short to ever reach the marker.
    const doc = document.documentElement
    if (doc.scrollHeight > window.innerHeight && window.innerHeight + window.scrollY >= doc.scrollHeight - 2) {
      current = SECTION_ORDER[SECTION_ORDER.length - 1]
    }

    activeSectionId.value = current
  }

  function onScroll() {
    if (!frame) frame = requestAnimationFrame(update)
  }

  function goToSection(id: SectionId) {
    const el = document.getElementById(id)
    if (!el) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const behavior: ScrollBehavior = reduceMotion ? 'auto' : 'smooth'

    if (id === SECTION_IDS.home) {
      window.scrollTo({ top: 0, behavior })
    } else {
      el.scrollIntoView({ behavior, block: 'start' })
    }

    // Keep keyboard / screen reader position in step with the scroll.
    el.focus({ preventScroll: true })

    const url = id === SECTION_IDS.home ? window.location.pathname + window.location.search : `#${id}`
    window.history.replaceState(null, '', url)
  }

  onMounted(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })

    // Honour a deep link such as /#projects.
    const hash = window.location.hash.slice(1)
    if (hash !== SECTION_IDS.home && (SECTION_ORDER as string[]).includes(hash)) {
      document.getElementById(hash)?.scrollIntoView()
    }
    update()
  })

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', onScroll)
    window.removeEventListener('resize', onScroll)
    if (frame) cancelAnimationFrame(frame)
  })

  return { activeSectionId, isScrolled, goToSection }
}
