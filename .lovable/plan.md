# Verio Studio — Build Plan (refined)

Premium editorial single-page site for Verio Studio, inspired by Depo Studio. Italian copy. Clear for local business owners, not abstract. WhatsApp is the primary contact channel.

## Visual system (`src/styles.css`)

- Warm light gray background, dark charcoal foreground.
- Cobalt blue accent token `--cobalt` (deep, saturated).
- White / very light gray cards, dark charcoal footer.
- WhatsApp green token for WhatsApp CTAs only.
- Hairline border token for the thin grid lines.
- Typography: Inter Tight (display) + Inter (body), loaded via `<link>` in `__root.tsx`. Oversized editorial headlines, tight tracking.
- Hairline utilities (`hairline-x`, `hairline-y`) via `@utility`.

## Animations

- Add `framer-motion`.
- `Loader`: full-screen overlay with a small cobalt circle that scales from ~24px to viewport cover while a `0%→100%` counter ticks (~1.6s), then fades. No spinner.
- Scroll reveals: fade + small `y` translate using `whileInView`.
- Hairlines animate width/height from 0 → full on enter.
- Subtle parallax on a couple of cobalt circle motifs.
- Smooth scroll via CSS `scroll-behavior: smooth`.

## Components (`src/components/verio/`)

1. **Loader** — initial blue circle expansion + percent counter.
2. **MenuButton** — fixed top-left black pill ("menu" + hamburger).
3. **MenuOverlay** — full-screen cobalt panel; large, clear, easy-to-read links: home, studio, servizi, lavori, metodo, contatti; social: instagram, linkedin.
4. **StickyCTA** — small floating WhatsApp + Contattaci pill, appears after ~600px scroll, bottom-right, non-invasive, hidden on the contact section.
5. **Hero** — grid with hairlines; vertical "Verio Studio®" cobalt brand card; oversized headline `Creiamo siti web professionali` (last word cobalt); subheadline; CTAs **Guarda i lavori**, **Contattaci**, plus a green **WhatsApp** button; label chips (siti responsive, design moderno, identità digitale, supporto diretto); abstract browser-mockup card on the right.
6. **Intro** — split layout: `Un sito non deve solo essere bello. Deve trasmettere fiducia.` + body copy.
7. **Studio** — editorial split + three value chips (chiarezza, cura visiva, semplicità).
8. **Services** — 2×2 grid with cross hairlines and centered cobalt circle. Four services: Sito web completo, Interfaccia chiara, Restyling digitale, Contatti e strumenti.
9. **Problems** — three large minimal cards (Immagine poco curata, Informazioni confuse, Esperienza poco moderna).
10. **Projects** — two large project cards. Each card contains:
    - **Desktop browser mockup placeholder** (Safari-style chrome with traffic-light dots + URL bar, large light-gray content area with `Sostituisci con screenshot` hint).
    - **Mobile device frame placeholder** overlapping bottom-right of the desktop mockup.
    - Project title + "Progetto reale" label.
    - Short description + mini case study (Obiettivo / Soluzione / Risultato).
    - **Vedi progetto** button.
    Placeholders are pure CSS/SVG — no stock images — easily swappable later by replacing the `<div>` inner content with `<img>`.
11. **DemoConcepts** — three cards (dentista, ristorante, palestra), each clearly labelled "Concept demo — progetto dimostrativo" so they are never mistaken for real clients.
12. **Method** — 4 steps with oversized numerals (01–04) and hairlines: Analisi, Struttura, Design, Pubblicazione.
13. **Difference** — `Perché Verio Studio` + 4 blocks: estetica moderna, struttura semplice, attenzione al mobile, comunicazione chiara.
14. **FinalCTA** — oversized headline, body, **Contattaci** + green **Scrivici su WhatsApp** (visually prominent).
15. **Contact** — form (Nome, Attività, Email, Messaggio) → frontend-only with toast success; large **WhatsApp** card next to it positioned as the fastest way to contact; Email, Instagram, LinkedIn as secondary links.
16. **Footer** — dark charcoal; hairlines; menu left / contact center / social right; vertical `Verio Studio®` wordmark; © 2026 line.

## Page composition

`src/routes/index.tsx` mounts the Loader, MenuButton/MenuOverlay state, StickyCTA, then all sections in order. Updates head with Italian SEO meta.

## Copy & tone

Direct, clean, credible. Small modern studio voice. No agency clichés, no pricing, no fake metrics. WhatsApp CTAs use a friendly but professional label ("Scrivici su WhatsApp").

## Responsive / mobile

- Hero grid → single column on mobile, headline scales down with `clamp()`.
- Services 2×2 → stacked with horizontal hairlines.
- Project cards stack; desktop mockup scales, mobile mockup sits below it.
- Sticky WhatsApp+Contattaci pill is mobile-first (thumb-reachable bottom-right).
- Menu overlay full-screen, large tappable targets.
- Footer collapses to single column.

## Tech notes

- No backend, no Cloudflare/Cloud features.
- WhatsApp links use `https://wa.me/` with a placeholder number (`393000000000`) and prefilled Italian message — easy to swap later.
- No images generated; all visuals are typographic + geometric.
- All colors via semantic tokens.

## Out of scope

- Pricing.
- Real backend / form submission.
- Real project screenshots (placeholders only).
