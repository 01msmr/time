# Chromachron
> Governed by **CLAUDE MASTER** (`../CLAUDE.md`). Rules here extend it; they do not override it.

Canvas-Uhr (p5.js), installierbar als PWA (iOS + Android). Kein Build-Schritt, kein Framework.
Live: time.msmr.co

## Dateien
- `index.html` — Shell, p5.js via CDN (jsdelivr), iOS-PWA-Tags
- `style.css` — Layout
- `chromachronv.js` — p5.js Sketch (die gesamte Logik)
- `icon_*.png`, `favicon.ico` — App-Icons (alle Größen für iOS/Android)

## Regeln
- p5.js-Version nur in `index.html` (`cdn.jsdelivr.net/npm/p5@…`) anpassen.
- Kein Bundle, kein Build — Änderungen direkt in den Quelldateien.
- `?v=` in `index.html` bei jeder CSS- oder JS-Änderung hochzählen.
