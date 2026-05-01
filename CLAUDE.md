# Project rules

## Copy / user-facing text

- **Never use em-dashes (—) or en-dashes (–) in user-facing text.** Use a regular hyphen (`-`), a comma, a period, or a colon instead. This applies to:
  - All strings in `src/messages/pl.json` and `src/messages/en.json`
  - Any text rendered in components (headings, buttons, descriptions)
  - Comments and labels visible to the end user
- Code-only contexts (variable names, technical comments) are fine without restrictions, but plain `-` is still preferred.
- When rewriting older text that already contains em-dashes, replace them with the most natural punctuation (often a comma or period).

## Stack

- Next.js 15 App Router, TypeScript, Tailwind v4
- i18n via `next-intl` with locales `pl` (default) and `en`
- Theme via `next-themes`, default dark, system preference disabled
- Locale-scoped layout at `src/app/[locale]/layout.tsx`; root pass-through layout at `src/app/layout.tsx`
- Sections live in `src/components/sections/`, shared UI primitives in `src/components/ui/`

## Translations

- Every new string must exist in both `pl.json` and `en.json` under matching keys.
- Keep PL and EN structurally identical (same key shape, same array lengths).
- Prices are quoted in PLN (`zł` in PL, `PLN` in EN).

## Pricing source of truth

- E-wizytówka base price: **349 zł**. Update everywhere if it changes (meta tags, hero, services card, FAQ, calculator, layout `priceRange`, OG title).
- Promo bundle (E-wizytówka + SEO): **399 zł** (saves 299 zł).
- Calculator add-on prices live in `src/components/sections/PricingCalculator.tsx`.
