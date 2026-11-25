export const SECTION_IDS = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  contact: 'contact',
} as const

export type SectionId = typeof SECTION_IDS[keyof typeof SECTION_IDS]

/** Top-to-bottom order of the sections on the page. */
export const SECTION_ORDER: SectionId[] = [
  SECTION_IDS.home,
  SECTION_IDS.about,
  SECTION_IDS.projects,
  SECTION_IDS.contact,
]
