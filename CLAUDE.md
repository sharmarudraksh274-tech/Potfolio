# Rudraksh Sharma — Personal Portfolio

A personal portfolio website built during the Rethink Cohort program to showcase values, work, and career journey.

---

## Tech Stack

- **Framework:** React 19 + Vite
- **Animations:** Framer Motion
- **Language:** JavaScript (no TypeScript)
- **Styling:** Inline styles (no CSS frameworks)

---

## Folder Structure

```
portfolio/
├── public/
│   └── images/           # Static images (rudraksh.jpg, hero-object.avif, etc.)
├── src/
│   ├── components/       # One file per section/component
│   ├── data/
│   │   └── content.js    # All copy/text in one place — edit here first
│   ├── App.jsx           # Root layout: Navbar + sections
│   ├── main.jsx          # React entry point
│   └── index.css         # Global reset only
├── CLAUDE.md
└── package.json
```

---

## What's Been Built

### Phase 1 — Scaffold + Hero ✅
- Vite + React project initialized
- Framer Motion installed
- Full folder structure created
- `src/data/content.js` — single source of truth for all copy
- `Navbar` — fixed top bar with avatar photo + name on left, nav links on right; glass-blur background
- `Hero` — greeting pill (slide-up fade-in), serif headline (slide-up per line), hero image with scroll-driven rotation (clockwise scroll-down, anti-clockwise scroll-up); fallback sphere shown when image is missing

### Phase 2 — About + Skills Marquee ✅
- `About` — two-column layout (photo card left, text right); pill label, mixed-weight serif heading with "Product Manager" highlighted white; bio paragraph; 2×2 stats grid; negative `margin-top: -180px` + `z-index: 10` so it overlaps the hero object on scroll; background `rgba(10,10,10,0.85)` so hero shows through
- `SkillsMarquee` — infinite CSS-keyframe vertical ticker; seamless loop via two identical tracks; rounded bordered container with `overflow: hidden`; `padding: 24px 40px` on inner div for edge buffer; `overflow-x: hidden` on `html/body` to prevent scrollbar
- About copy in `content.js` under `about.bio` and `about.stats`

---

### Phase 3 — Projects grid ✅
- `Projects` — centered pill + mixed-weight heading; 2-column grid; each card has `16/10` placeholder thumbnail, title + muted year, hover scale + "View Project ↗" overlay, opens URL in new tab; cards stagger fade-in on scroll
- Quote block below grid: "Building more than just **products**—creating **experiences** that resonate…" mixed-weight serif, slides up on scroll
- `SkillsMarquee` moved to render after Projects (order: About → Projects → SkillsMarquee); marquee container constrained to `maxWidth: 1200px` to align with project grid edges
- 5 projects in `content.js` under `projects[]`

---

### Phase 4 — Why Me + Testimonials ✅
- `WhyMe` — centered pill; heading "**I'll help** your product **shine**" (bold white / muted / bold white); 3-column card grid with inline SVG icons, title at `19px`, description at `15px`; cards stagger fade-in
- `Testimonials` — two-column layout (`alignItems: center` so left is vertically centered); left: pill, heading, subtext, white "Contact me →" button; right: continuous vertical auto-scroll (CSS `scroll-up` keyframe, 28s linear infinite); both cards always visible, duplicate track for seamless loop; clip height set via `useRef` measuring first copy on mount; quote text at `rgba(255,255,255,0.92)`
- Data in `content.js` under `whyMe[]` and `testimonials[]`

---

### Phase 5 — FAQ + Contact + Footer ✅
- `FAQ` — centered pill + mixed-weight heading; each item is a dark rounded card (`rgba(255,255,255,0.04)`, `border-radius: 16px`), `gap: 12px` between cards; `+` rotates to `×` on open; answer animates via `AnimatePresence height: "auto"`; 4 Q&As in `content.js` under `faq[]`
- `Contact` — full-viewport-width section; background image `/images/background.avif`; dark overlay `rgba(5,5,10,0.62)` for text legibility; top/bottom edges fade to black via `maskImage` linear gradient; mixed-weight heading; subtext; LinkedIn + Email CTA buttons
- `Footer` — name left, copyright center, links right; hover brightens link color
- LinkedIn URL: `https://www.linkedin.com/in/rudraksh274` (corrected in `content.contact.links`)
- Full page order: Hero → About → Projects → SkillsMarquee → WhyMe → Testimonials → FAQ → Contact → Footer

---

### Phase 6 — Polish + Mobile Responsiveness ✅

**Footer**
- Replaced bar layout with oversized centered `RUDRAKSH SHARMA` text in `#555555`, `font-weight: 100`, `font-size: clamp(32px, 10.5vw, 160px)` — scales naturally with viewport

**Navbar**
- Scroll-to-section: `Portfolio → #portfolio`, `About → #about`, `Career → #faq`, `Contact → #contact` via `scrollIntoView({ behavior: "smooth" })`
- Scroll-aware blur: transparent at top → `rgba(10,10,10,0.92)` + `blur(24px)` after 30px scroll, animated with CSS transition
- Nav links now `fontWeight: 600`
- Mobile hamburger: 3-bar icon toggles a full-width dropdown menu below the navbar; closes on link click or resize to desktop

**Mobile responsiveness** — `useWindowWidth` hook in `src/hooks/useWindowWidth.js`, breakpoint `< 768px`
- Hero: image shrinks to `min(82vw, 340px)`, reduced padding
- About: columns stack vertically, photo card goes full-width at reduced height, negative margin-top reduced to `-80px`
- Projects: 2-column → 1-column grid
- WhyMe: 3-column → 1-column grid
- Testimonials: two-column layout stacks vertically
- FAQ: section padding reduces to `80px 24px`
- SkillsMarquee: outer padding reduced to `40px 24px` (fits any viewport)
- Footer: `vw`-based font size scales down naturally

---

## What's Pending

### Phase 7 — Deployment 🔧 in progress
- Git repo initialized, `.gitignore` excludes `node_modules/` and `dist/`
- Initial commit made: all 31 files, 4694 lines
- Production build verified clean
- GitHub repository created ✅
- `git push` to GitHub in progress 🔧
- Next: complete push → connect repo to Vercel → deploy

---

## Key Decisions

| Decision | Reason |
|---|---|
| Inline styles over CSS modules | Keeps component logic and appearance co-located; easy to iterate |
| Single `content.js` data file | Change copy in one place without hunting through JSX |
| `useMotionValue` for scroll rotation | Avoids re-renders; rotation is tracked imperatively via scroll delta |
| Fallback placeholder for missing images | Dev-friendly — site renders cleanly before real assets are added |
| No TypeScript | Keeps iteration speed high during design-heavy early phases |
| `useWindowWidth` hook for responsive styles | Keeps responsive logic co-located with component styles; avoids separate CSS media queries |

---

## Images in `public/images/`

| File | Used in | Notes |
|---|---|---|
| `rudraksh.jpg` | Navbar avatar + About photo card | Square crop recommended |
| `hero-object.avif` | Hero section | Transparent background works best; scroll-rotated |
| `background.avif` | Contact section background | Full-bleed with dark overlay + fade mask |
