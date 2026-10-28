# Base — Studio tecnico multidisciplinare (architettura / ingegneria / geometri)

Base riutilizzabile ricostruita dal build pubblicato di un sito Astro per uno studio
tecnico multidisciplinare (sorgente non disponibile: rifatto in Astro dai file pubblicati).
Struttura, layout, design system e animazioni sono identici all'originale: stesse classi,
stesso CSS (333 regole su 333), stessi script. Ogni contenuto reale è un segnaposto.

```bash
npm install
npm run dev            # http://localhost:4710
npm run build          # dist/ statico (26 pagine)
npm run slots          # elenco degli slot ancora aperti
npm run check-residui  # cerca dati del cliente del sito sorgente (deve dare 0)
npm run placeholders   # rigenera logo/favicon/icone/OG segnaposto in public/
```

## Segnaposto

- **Testi**: `[[DA COMPILARE: cosa va scritto, lunghezza indicativa]]`.
  `grep -rn "DA COMPILARE" src` elenca tutti gli slot (molti sono generati da `src/data/*.ts`).
- **Numeri delle statistiche**: token corti `[[N1]]`…`[[N4]]` (il numero è in corpo enorme:
  un marker lungo allargherebbe la griglia). `grep -rn "\[\[N" src`.
- **Immagini**: SVG grigi con etichetta e misura, generati in build da
  `src/pages/img/placeholder/[id].svg.ts` con le misure registrate da `ph()` nei file dati.
  Hanno le misure reali delle foto originali (verticali, panoramiche, disegni): la gallery a
  colonne e le card restano identiche. Alt: `DA COMPILARE: descrizione`.
- **Etichette d'interfaccia** (menu, bottoni, label del form, titoletti come "Lo studio",
  "Metodo", "FAQ") sono generiche e restano: il menu è `nowrap` e un marker lo romperebbe.

## Ordine di riempimento

1. `src/data/site.ts` — identità: nome, ragione sociale, P.IVA, PEC, indirizzo, telefono,
   email, coordinate (`geo`, se null la mappa è un segnaposto), link Maps, social, aree,
   competenze, **form** (vuoto = non invia), dominio.
2. `astro.config.mjs` — `SITE_URL` uguale a `site.dominio`.
3. **Palette**: solo i token `:root` in `src/styles/global.css` + `themeColor` in `site.ts`.
4. `src/data/servizi.ts` (6), `team.ts` (8), `progetti.ts` (3 categorie, 12 progetti),
   `contenuti.ts` (carosello, numeri, metodo 4+9, aree, approccio, FAQ 9, CTA).
5. Testi delle pagine in `src/pages/*.astro`.
6. Immagini: metti i file in `public/img/...` e sostituisci `ph(...)` con
   `{ src, width, height, alt }` (misure intrinseche vere). Con le varianti
   `<stem>-<w>.avif/.webp/.jpg` aggiungi `responsive: true` e `Picture.astro` genera i `<source>`.
   Disegni/render: `drawing: true` (niente crop; se è la copertina, la scheda usa la testata chiara).
7. Logo: `public/img/logo/logo.svg` (scuro) e `logo-light.svg` (chiaro), 882×182.
   Favicon, icone e `img/og/og-default.png` (1200×630) in `public/`.

## Animazioni e interazioni (non toccare)

- `Layout.astro`: header che passa da trasparente a pieno dopo 40px, menu mobile, reveal
  `.reveal` → `.is-in` con IntersectionObserver.
- `index.astro`: carosello hero (dissolvenza 1.6s + zoom 7s, cambio ogni 6s, pallini).
- `Lightbox.astro`: gallery progetto (frecce, tastiera, swipe).
- CSS: hover di card, servizi, tappe, team; FAQ con `<details>`.

## Note

- Form: `site.form.netlify = true` per Netlify Forms (action `/grazie/`) oppure `endpoint`.
  Finché è vuoto il submit è bloccato con un avviso.
- `trailingSlash: 'ignore'`: i link sono già con lo slash finale; serve al dev per servire gli SVG segnaposto.
- `robots.txt`, `llms.txt`, `site.webmanifest`, sitemap e JSON-LD sono generati dai dati.
