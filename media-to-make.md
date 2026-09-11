# Media to make — hotspots page

All of it is made: the hotspots guide is captured, illustrated and live in both languages, as are
the other editor pages. The file stays as the re-shoot map, so a UI change has a list to work from
rather than a hunt through the pages. Specs for every clip and still are below; one publish-time
item is still open at the bottom.

## Ground rules (same pipeline as the shipped pages)

- **Clips**: wordless, no audio; one English-UI recording per clip; cursor visible with click
  highlighting (PowerToys), natural pace. Record the full 1920×1080 window as `.mkv`, drop in the
  repo root; post does trim → crop → 1.3× → 30 fps → 200 ms white fades → dual encode
  (native-res `<name>-v1.mp4` CRF 21–25 under ~3 MB, plus 960-wide `<name>-v1-s.mp4`).
- **Stills**: full-window 1920×1080 PNGs at 100% zoom, no OBS border; cropping happens in post.
  Wide shots get a 960-wide inline + `-full` native pair; panel crops are a single native file.
- **Embeds**: `DocVideo` / `DocImage` components (lazy, click-to-enlarge). Patterns and the exact
  ffmpeg commands are in git history (`media-to-make.md` as of commit `ddaf1a8`) if needed.
- Same model, light theme and background as the existing pages, so the section stays one
  production.
- This flow's header has **no GUIDE pill** (unlike setup/media), so panel crops differ slightly at
  the top-right from the earlier batches.

## Clips (2)

### `hotspot-place-v1.mp4` — placing a hotspot — **DONE**

- Produced 2026-09-02: `static/video/hotspot-place-v1.mp4` (1920×1028, ~8 s at 1.3×, 0.8 MB;
  small variant 0.19 MB). Embedded in both pages; `editor-hotspots-placera.webp` placeholder
  removed. Shows the new armed placement (pulsing frame, ghost dot with double-click tag),
  the landing, the row opening, and naming.

### `hotspot-tour-v1.mp4` — the tour playing — **DONE**

- Produced 2026-09-02: `static/video/hotspot-tour-v1.mp4` (1540×1028, ~11 s at 1.3×, 2.0 MB;
  small variant 0.6 MB, CRF 24/26 — photographic closeups). Embedded in both pages;
  `editor-hotspots-rundtur.webp` placeholder removed. Shows play → two stops with dwell and
  swing (Fade transitions, the default); cut just before the loop-back fade.

## Stills (5) — **ALL CAPTURED 2026-09-02**

All five replaced their placeholders (oversikt got dual inline+full files). List kept as the
re-shoot map. Bug found during capture, for the editor: the choose-the-view wizard's guide card
(and in one state its Cancel / Use this view bar) persists on steps 2 and 3 after leaving step 1.

- `editor-hotspots-oversikt.webp` — step 1 with one hotspot open: full window minus topbar
  (wide shot → dual files).
- `editor-hotspots-sektioner.webp` — the open row with all four numbered sections visible
  (tallest panel in the flow; scroll so all four fit, or take two shots and say so).
- `editor-hotspots-vy-guide.webp` — the choose-the-view wizard: panel dimmed to 45%, pulsing gold
  canvas frame (capture mid-breathe), guide card top-left, Use this view / Cancel bar bottom.
- `editor-hotspots-utseende.webp` — step 2 panel with the bubble section visible (needs at least
  one hotspot with hover text first, or the section is absent).
- `editor-hotspots-navigering.webp` — step 3 panel, navigation section with **Arrows + tour**
  selected so every control shows (needs ≥ 2 hotspots).

## At publish time (after the capture)

1. ~~Flip `draft: true` off in both hotspots pages.~~ Done 2026-09-11.
2. ~~Add `redigeraren/hotspots` to `sidebars.js` and a Hotspots entry to the overview's
   guided-tasks list (both languages).~~ Done 2026-09-11, page is live in both languages.
3. **Still open.** Editor repo: `hotspotsGuideTarget()` in `docs.ts` + pass `guideHref` from
   `HotspotsShell` (page anchors: `#spots`, `#look`, `#try`, `#save`), and fix the base URL
   `docs.marvify.io` → `docs.marvify.com` while in there.
