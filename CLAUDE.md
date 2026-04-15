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

This is a **vertical fullscreen slideshow**, not a traditional router-based SPA. The entire app is a stack of 100vh slides that the user navigates via scroll, swipe, keyboard, or navbar buttons.

**Slides (in order):**
1. `home` — Bio + Vanta animated background
2. `about` — About intro
3. `about-dogs` — Dogs section
4. `about-smarthome` — Smart home tech
6. `projects` — Projects overview
7. `project-shelfiq` — ShelfIQ project detail
8. `project-wordle` — Wordle Clone project detail
9. `project-growler` — Growler Station project detail
10. `contact` — Contact links

Slide IDs are defined in `src/config/slides.ts`. Navigation is handled by `goToSlide(id)` which is provided/injected from `App.vue` into child components.

### Directory Layout

```
src/
├── App.vue                    # Root — wraps Slideshow, Navbar, Settings, Cookies
├── main.ts                    # Entry — registers Vuetify, Pinia, mounts app
├── style.css                  # Global styles
├── zindex.css                 # Z-index constants
├── pages/                     # Top-level slide content (Home, Projects, Contact)
├── components/
│   ├── about/                 # About sub-slides (intro, dogs, smarthome)
│   ├── bio/                   # Home page bio, scroll button, .NET button
│   ├── cookies/               # Cookie consent banner
│   ├── navbar/                # Navbar + NavbarButton (responsive, hamburger <480px)
│   ├── projects/              # Individual project detail components
│   ├── settings/              # Theme/color settings dialog
│   ├── shared/                # Reusable components (TechChip)
│   └── slideshow/             # Slideshow engine + SlideSection wrapper
├── composables/               # useHaptics, useThemeColors
├── store/                     # Pinia store (globalStore.ts)
├── config/                    # Slide ID constants
├── models/                    # Types & constants (globals, themeColors, userPreferences)
└── assets/icons/              # SVG icons (imported as components)
```

### Key Patterns

- **Composables** — `useHaptics()` for haptic feedback, `useThemeColors()` for reactive theme management
- **Provide/Inject** — `goToSlide()` is provided at App level, injected where needed
- **Pinia store** (`useGlobalStore`) — manages user preferences, theme mode, cookie consent; persists to localStorage when cookies are accepted
- **Scoped CSS + Vuetify CSS variables** — theming via `rgb(var(--v-theme-primary))` pattern, no Tailwind
- **Lazy loading** — Projects and Contact pages use `defineAsyncComponent`
- **Code splitting** — Vanta + Three.js are split into a separate `vanta` chunk via Rollup manual chunks

### Slideshow Engine (`src/components/slideshow/Slideshow.vue`)

Handles all navigation input:
- **Wheel scroll** — 500ms cooldown between slide changes
- **Touch swipe** — 8px threshold to decide swipe vs in-slide scroll, 55px threshold to trigger slide change
- **Rubber-band effect** at the last slide (0.25 resistance)
- **Boundary detection** — checks if a slide is scrolled to top/bottom before allowing cross-slide navigation
- Slides use `will-change: transform` and 0.5s cubic-bezier transitions

### Theme System

Six color presets defined in `src/models/themeColors.ts`: default, ocean, forest, sunset, lavender, monochrome. Supports light/dark mode toggle. System preference (`prefers-color-scheme`) is respected on first load. Settings dialog is accessible from the navbar.

## Content

All content is **hardcoded in component templates** — there is no CMS or data layer. To update content, edit the relevant Vue component directly.

**Static assets:**
- Dog images: `public/images/dogs/`
- Resume PDF: `public/JoeHahnResume.pdf`
- SVG icons: `src/assets/icons/`

## Responsive Breakpoints

- **>480px** — full navbar with numbered buttons
- **<=480px** — hamburger menu, text scales down, contact links stack vertically
- **<=768px** — navbar font sizes reduce, scroll button hidden on short viewports

## Accessibility

- Skip-to-content link
- ARIA live region announces current slide
- Semantic HTML (section, nav, main, header)
- Focus-visible outlines on interactive elements

## Additional Instructions

- Write the message "CLAUDE.md loaded" on a new line when you load it
