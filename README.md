# Kaivros Design System

Design guidelines, tokens, assets, and UI kit for the Kaivros brand.

Kaivros is a wellness/VR platform with a warm, modern aesthetic. The brand sits at the intersection of digital calm and physical presence: lilla (purple) as the soul, cream as the breath, orange as the pulse. The brand voice is bilingual — English-forward with Italian heritage — and the visual language is professional but approachable, soft but confident.

**Domain:** brand.kaivros.com  
**Primary stack in source:** React 19 + TypeScript + Vite + TailwindCSS v4

---

## Sources

This design system was derived from:

- **Codebase:** `brand/` (Kaivros-Brand — the public brand guidelines site)
  - `brand/src/tokens/{colors,typography,spacing}.ts` — canonical design tokens
  - `brand/src/styles/globals.css` — CSS variables, brand card layout
  - `brand/src/components/{Button,Card,Input,Badge,BrandCard}.tsx` — component source
  - `brand/public/kaivros-logo*.svg` — all logo variants
  - `brand/public/logo-colors.txt` — per-logo color recipes
- No Figma links, slide decks, or additional codebases were provided.

---

## Index

| Path | What it contains |
|---|---|
| `README.md` | This document |
| `colors_and_type.css` | All CSS variables (colors, type, spacing, radii, shadows) + semantic type utility classes |
| `SKILL.md` | Cross-compatible skill manifest |
| `assets/` | Logos (7 variants), favicon |
| `preview/` | Design-system cards rendered in the Design System tab |
| `ui_kits/brand-site/` | Brand guidelines site recreation (React via Babel) |
| `ui_kits/product-app/` | Product app recreation (auth, dashboard, sessions) |

---

## CONTENT FUNDAMENTALS

Kaivros copy is **bilingual Italian/English, casual-professional, second-person**. The tone is wellness-adjacent without being woo-woo — more "quiet confidence" than "hype."

### Voice characteristics
- **Bilingual:** The source codebase mixes Italian and English freely — section labels like "Corpo · Testo · Leggibilità" sit next to English headings like "Brand Identity." For design artifacts, default to English but don't strip Italian where it exists (logo is `Kaivros`, not translated).
- **Second person singular** (you / tu). Warm and direct.
- **Sentence case** for all UI — not Title Case. Headings feel like speech: "Your sessions," not "Your Sessions."
- **Short, declarative sentences.** Verbs over nouns. "Start your session" not "Session initialization."
- **Specific over clever.** Say what the thing does. Example copy from source: "Tokens, components, and patterns for Kaivros applications."
- **No emoji.** The brand leans on type and color for emotional tone; emoji would dilute it.
- **No unicode flourishes** except the middle-dot (·) for separating labels: `Corpo · Testo · Leggibilità`, `Logo · Titoli accent`.

### Casing rules
- Product name: **Kaivros** (single capital)
- UI labels: `UPPERCASE` with wide letter-spacing (0.22em / `--tracking-widest`), used sparingly for category labels on cards
- Headings: sentence case
- Buttons: sentence case ("Start session", not "Start Session" or "START SESSION")
- Hex values: uppercase (`#A98FD8`)

### Example copy (from source)
- "Kaivros Design System"
- "Tokens, components, and patterns for Kaivros applications"
- "Built for Claude Design"
- "We'll never share your email with anyone else." (input helper)
- "Password must be at least 8 characters" (error)
- Italian labels: "Display", "Heading", "Body", "Corpo · Testo · Leggibilità", "Logo · Titoli accent"

### Vibe
Think: a spa that publishes API docs. Calm, warm, competent. No exclamation marks. No "Let's go!" — just "Start."

---

## VISUAL FOUNDATIONS

### Color
Three-tier system:
1. **Primary — Lilla (purple scale):** `#DDD1F2` → `#C5AEE8` → `#A98FD8` → `#8B6EC4`. The signature. Used for primary actions, brand surfaces, the `K` glyph when it's allowed to breathe.
2. **Deep — Violet:** `#6B4F8E`, `#493364`, `#2E1F40`. Darker companions for text on lilla, or moody backgrounds.
3. **Accent — Orange/Coral:** `#FFB38A` → `#FE794E` → `#E85C3E` → `#D65A3E`. The pulse. Used for accent buttons, warm surfaces, and energetic moments.

**Supporting accents** (used sparingly, usually for semantic/status): blush `#FE9DC0`, daffodil `#FCCD86`, meadow `#A8BF8A`, sky `#89B7C2`, mint `#98D8C8`.

**Neutrals:** cream `#F9F6EF` (default background — warm, never pure white), black `#1F1F1F` (never true black — always softened), white `#FFFFFF` (cards, surfaces).

### Type
Three families, strict roles:
- **Bricolage Grotesque** (700, 800) — display / logo / accent titles only. Has character. Use for the `K` glyph.
- **Outfit** (400, 500, 600, 700) — all headings and UI (buttons, labels, inputs).
- **Noto Sans** (400, 500, 600, 700) — body text. Quiet, legible, neutral.

The logo is a **composite wordmark**: `K` in Bricolage Grotesque 700 + `aivros` in Outfit 500. Baseline-aligned. The `K` is ~5% larger than the rest.

Scale is tight and generous (1rem → 8rem), jumps are musical not linear. Labels are uppercase with wide tracking (0.05–0.22em).

### Spacing
4px base grid. Tokens 1–96. Component padding is modest (`--space-4` / 16px for defaults, `--space-6` / 24px for comfortable, `--space-8` / 32px for generous).

### Backgrounds
- **Default:** cream (`#F9F6EF`). Never pure white at the page level — cream is the brand's baseline warmth.
- **Surfaces/cards:** white on cream, OR cream on white (reversed nesting is fine).
- **Full-bleed color moments:** solid lilla-md, coral, violet — used as hero/usage panels.
- **No gradients** in the core system. No textures. No patterns. No illustrations embedded in backgrounds. The aesthetic is flat-but-warm; depth comes from shadow and color, not from imagery.
- **No hand-drawn illustrations** in the source. If imagery appears in products, it's likely photographic (wellness/VR) — flag if adding.

### Animation
- Transition duration: **0.2s ease** (default) — soft, not snappy.
- Badge transitions: 0.15s.
- No bounces. No springs. No elaborate entrances.
- Hover card lift: `translateY(-2px)` default, `-4px` on hover. Shadow grows from `--shadow-card` to `--shadow-float`.
- Opacity fades for remove buttons (0.6 → 1).

### Hover states
- **Buttons:** background shifts to the next-darker scale step. Primary `lilla-md` → `lilla-dk`. Accent `orange` → `orange-md`. Ghost/secondary: background gains subtle tint (cream → lilla-lt).
- **Cards:** translateY lift + shadow grow.
- **Links/icons:** opacity 0.6 → 1, or color shift.

### Press / active states
No explicit press state defined in source. Recommend: slight scale-down (0.98) or darker shade — kept subtle.

### Focus states
Inputs: border shifts to `--interactive` (lilla-md) + 3px ring at 20% opacity of same color. Important for accessibility.

### Borders
- Default: `1px solid rgba(31,31,31,0.10)` — barely there.
- Strong: `1px solid rgba(31,31,31,0.20)` — for inputs.
- Glass: `1px solid rgba(255,255,255,0.15)` — on dark/colored surfaces.
- **Input borders are 1.5px**, not 1px.

### Corner radii
- `--radius-xs` 4px — tags, small chips
- `--radius-sm` 6px, `--radius` 8px — small elements
- `--radius-md` 12px — buttons, inputs, default surfaces
- `--radius-lg` 16px — cards
- `--radius-xl` 20px — hero cards, major panels
- `--radius-2xl` 24px — brand card containers
- `--radius-full` — pill badges only

Radii are **generous but not round**. Nothing is squircle-shaped; nothing is a perfect circle unless it's a pill.

### Shadows
Two systems:
1. **Standard elevation** (`--shadow-xs` → `--shadow-xl`) — tight, neutral RGB shadows.
2. **Kaivros-specific** (warmer, softer):
   - `--shadow-glass` — 0 8px 32px, 8% opacity, for floating panels
   - `--shadow-card` — 0 4px 20px, 6% opacity, default card elevation
   - `--shadow-float` — 0 20px 40px -10px, 15% opacity, hover/emphasis

No inner shadows in the system. No colored shadows.

### Transparency & blur
- Text opacity used for hierarchy: 60% (secondary), 40% (muted), 35% (faintest for hex values on swatches).
- `rgba(31,31,31,0.XX)` for borders/text — never a different color.
- **No backdrop-filter blur** in the source. If adding glass effects, use `--shadow-glass` + `--border-glass` instead of blur.

### Layout rules
- Max content width: `1200px` (from App.tsx).
- Page padding: 24px mobile, 48px desktop (`--space-6` / `--space-12`).
- Section gaps: `3rem` (48px) between major sections.
- No fixed headers or sticky elements in source — flows naturally.

### Iconography in imagery
- All logo variants use solid color backgrounds (no gradients, no photos).
- Imagery vibe (where present): warm, never cool. No grain. No black-and-white. No duotone.

### Card anatomy
Default: white background, `--radius-lg` (16px) corners, `--shadow-card` elevation, `1px` default border, `--space-4` (16px) padding. Hover lift: `-2px`/`-4px`, shadow grows to `--shadow-float`.

---

## ICONOGRAPHY

**The source codebase ships ZERO icons.** No icon font, no SVG sprite, no Lucide/Heroicons import. Components use text symbols where symbols appear:
- Loading spinner: the Unicode character `⟳`
- Badge remove button: `×` (multiplication sign)
- Middle-dot separator: `·`

### Approach for this design system
- **Primary recommendation:** use **Lucide** icons (CDN: `https://unpkg.com/lucide@latest`) as the default icon set. Lucide's stroke weight (1.5–2px) and rounded line caps match the Outfit/Noto Sans type pairing well, and its soft geometry harmonizes with the cream/lilla palette.
- **Flagged substitution:** Lucide is a substitution, not a codebase choice. If the Kaivros team has a preferred icon set (a custom pack, Phosphor, Tabler, Iconoir, etc.) please flag it and we'll swap.
- **Stroke weight:** 1.75–2px. Icons should feel substantial next to 500/600-weight UI text.
- **Sizes:** 16px (inline with sm text), 20px (buttons/inputs), 24px (nav/actions), 32px+ (feature moments).
- **Color:** inherit `currentColor` by default. Tint to `--lilla-md` for brand moments, `--fg2` for muted.

### Emoji & Unicode
- **No emoji.** Ever. Not in UI, not in copy.
- **Unicode chars allowed sparingly:** `·` (middle-dot separator), `×` (close/remove), `⟳` (loading fallback if no spinner).
- No ideograms, no flags, no decorative emoji runs.

### Logos
Seven logo variants ship in `assets/`:
- `kaivros-logo.svg` — primary (lilla on transparent)
- `kaivros-logo-black.svg` — on black surfaces
- `kaivros-logo-coral.svg` — on coral surfaces
- `kaivros-logo-cream.svg` — on cream surfaces
- `kaivros-logo-lilla-lt.svg` — on light lilla
- `kaivros-logo-lilla-md.svg` — on medium lilla
- `kaivros-logo-orange.svg` — on light orange
- `favicon.svg` — browser favicon
- `kaivros-logo-original.svg` — original Figma export

**Always pick the variant that matches the background.** See `assets/logo-colors.txt` in the source codebase for the K/rest/background color recipe per variant.

---

## ASK

- **Font files:** ✅ Bundled. The brand ships variable TTFs for Bricolage Grotesque, Outfit, and Noto Sans (regular + italic) from `fonts/`. No Google Fonts dependency.
- **Icon set:** Flagged above — **Lucide** is a substitution. Confirm or point us to the real set.
- **Product imagery:** No photos or illustrations exist in the source. If the platform has hero imagery (wellness / VR moments), share a folder and we'll integrate.
- **Additional products:** We were given the brand guidelines site only. If there's a consumer app, marketing site, or docs site repo, link it and we'll create matching UI kits.
