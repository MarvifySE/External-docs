# Media to make — hotspots page

Capture plan for the media the drafted hotspots guide needs before it can publish. Everything for
the other pages is done and live; this file now only tracks hotspots. The page
(`docs/redigeraren/hotspots.md` + its i18n twin) already references every filename below, so
finished files drop in with no doc edits. Delete entries as they are produced.

Do the capture only once `mode=hotspots` has shipped to customers, and treat the session as a
verification pass too: walk the real flow against the page and fix any drift the product picked up
since the research (`.docs-internal/hotspots-research.md`).

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

### `hotspot-place-v1.mp4` — placing a hotspot

- Replaces `editor-hotspots-placera.webp` (step 1, "Place a dot").
- **Shows:** press **Add hotspot**, fly to a detail, double-click it, the dot lands and its row
  opens in the panel, type a name. ~8 s.
- **Crop:** canvas + panel (the row opening is half the story).

### `hotspot-tour-v1.mp4` — the tour playing

- Replaces `editor-hotspots-rundtur.webp` (step 3, "Hotspot navigation").
- **Prereq:** ≥ 2 hotspots with chosen views, navigation set to **Arrows + tour**.
- **Shows:** press play, two stops with dwell and swing, then touch the scene to exit. ~12 s.
- **Crop:** canvas only.
- **Traps:** the editor parks the tour chrome ~50 px higher than production does, and all dots hide
  while the tour plays — both expected, don't retake over them.

## Stills (5)

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

1. Flip `draft: true` off in both hotspots pages.
2. Add `redigeraren/hotspots` to `sidebars.js` and a Hotspots entry to the overview's
   guided-tasks list (both languages).
3. Editor repo: `hotspotsGuideTarget()` in `docs.ts` + pass `guideHref` from `HotspotsShell`
   (page anchors: `#spots`, `#look`, `#try`, `#save`), and fix the base URL
   `docs.marvify.io` → `docs.marvify.com` while in there.
