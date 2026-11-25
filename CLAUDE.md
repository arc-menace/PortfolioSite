# Portfolio Site — CLAUDE.md

Personal portfolio for Joe Hahn at **www.joe-hahn.com**.

## Tech Stack

- **Vue 3** (Composition API) + **TypeScript** (strict mode)
- **Vite** — bundler & dev server
- **Vuetify 3** — Material Design component library
- **Pinia** — global state management
- **Vanta.js + Three.js** — animated NET background on home slide
- **tactus** — haptic feedback on interactions
- **vite-svg-loader** — import SVGs as Vue components
- **gh-pages** — deploys to GitHub Pages with custom domain

## Commands

- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run preview` — preview production build
- `npm run deploy` — build + deploy to GitHub Pages (writes CNAME, pushes dist/)

## Architecture

### Navigation Model

This is a **single, natively scrolling page** — no router and no scroll hijacking. A fixed navbar links to four sections.

**Sections (in order):**
1. `home` — Bio + Vanta animated background (full-viewport hero)
2. `about` — Intro + facts, dogs, smart home
3. `projects` — ShelfIQ, Wordle Clone, Growler Station
4. `contact` — Contact links

Section IDs are defined in `src/config/sections.ts` and double as element ids / URL hashes (`/#projects`). `useSectionNav()` (called once in `App.vue`) tracks the active section and scroll state and exposes `goToSection(id)`; all three are provided/injected into child components.

### Directory Layout

```
src/
├── App.vue                    # Root — Navbar, the four sections, footer, PrivacyNotice
├── main.ts                    # Entry — registers Vuetify, Pinia, mounts app
├── style.css                  # Global tokens (fonts, hairlines, gutters) + shared text classes
├── zindex.css                 # Z-index constants
├── pages/                     # Top-level sections (Home, About, Projects, Contact)
├── components/
│   ├── about/                 # About sub-sections (intro, dogs, smarthome)
│   ├── bio/                   # Home page bio, scroll button, .NET button
│   ├── privacy/               # Privacy notice (info-only, dismissible)
│   ├── layout/                # PageSection — section wrapper (title rail + content column)
│   ├── navbar/                # Navbar + NavbarButton (responsive, hamburger <480px)
│   ├── projects/              # ProjectSection wrapper + individual project entries
│   ├── settings/              # Theme/color settings dialog
│   └── shared/                # Reusable components (TechChip)
├── composables/               # useHaptics, useThemeColors, useSectionNav
├── store/                     # Pinia store (globalStore.ts)
├── config/                    # Section ID constants
├── models/                    # Types & constants (globals, themeColors, userPreferences)
└── assets/icons/              # SVG icons (imported as components)
```

### Key Patterns

- **Composables** — `useHaptics()` for haptic feedback, `useThemeColors()` for reactive theme management
- **Provide/Inject** — `goToSection()`, `activeSectionId` and `isScrolled` are provided at App level, injected where needed
- **Pinia store** (`useGlobalStore`) — manages user preferences, theme mode, privacy notice acknowledgement; persists preferences to localStorage
- **Scoped CSS + Vuetify CSS variables** — theming via `rgb(var(--v-theme-primary))` pattern, no Tailwind
- **Shared tokens** — `style.css` defines `--font-sans`, `--font-mono`, `--text-muted`, `--text-subtle`, `--hairline` and the `.lead` / `.body-text` / `.sub-heading` / `.text-link` classes; use these instead of redefining text styles per component
- **Code splitting** — Vanta + Three.js are split into a separate `vanta` chunk via Rollup manual chunks

### Page Layout

- `PageSection` (`src/components/layout/PageSection.vue`) wraps About, Projects and Contact: section title in a sticky left rail on wide screens (>=900px), stacked above the content below that. Its top padding clears the fixed navbar when a section is scrolled to.
- The hero (`pages/Home.vue`) is `100svh`; everything after it flows at natural height.
- The navbar is transparent at the top of the page and gains a blurred background + hairline once scrolled. The link for the section in view gets `aria-current` and an underline.
- `goToSection` smooth-scrolls (instant under `prefers-reduced-motion`), moves focus to the section, and updates the URL hash with `replaceState`.

### Design Conventions

Keep it plain and editorial: sans-serif body text, monospace only for the hero, navbar and section titles. Separate things with whitespace and hairlines rather than boxes. Avoid tinted cards, icon-in-circle badges, uppercase letter-spaced labels, glows and decorative animation. The theme's primary color is an accent (active nav, link underlines, focus rings), not a fill.

### Theme System

Six color presets defined in `src/models/themeColors.ts`: default, ocean, forest, sunset, lavender, monochrome. Supports light/dark mode toggle. System preference (`prefers-color-scheme`) is respected on first load. Settings dialog is accessible from the navbar.

## Content

All content is **hardcoded in component templates** — there is no CMS or data layer. To update content, edit the relevant Vue component directly.

**Static assets:**
- Dog images: `public/images/dogs/`
- Resume PDF: `public/JoeHahnResume.pdf`
- SVG icons: `src/assets/icons/`

## Responsive Breakpoints

- **>=900px** — section title sits in a left rail beside the content
- **>480px** — full navbar with numbered links
- **<=480px** — hamburger menu, text scales down, fact rows stack, contact links form a 2x2 grid
- **<=768px** — navbar font sizes reduce, scroll button hidden on short viewports

## Accessibility

- Skip-to-content link
- Nav links are real anchors with `aria-current` on the section in view; focus follows navigation
- Semantic HTML (section, nav, main, header)
- Focus-visible outlines on interactive elements

## Additional Instructions

- Write the message "CLAUDE.md loaded" on a new line when you load it
