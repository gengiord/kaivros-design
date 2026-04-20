# Brand Site UI Kit

Recreation of the `brand.kaivros.com` public brand guidelines site, derived from the `brand/` codebase.

## Components
- `Sections.jsx` — NavBar, Hero, BrandShowcase, TokenGrid, Footer

## Source
- `brand/src/App.tsx` (showcase layout)
- `brand/src/components/BrandCard.tsx` (brand card grid)
- `brand/src/styles/globals.css` (brand-card structure)

## Notes
The original codebase uses TailwindCSS v4 with CSS variables. This kit ports those styles to hand-written CSS (`ui_kits/_shared/kit.css`) so it runs without a build step.
