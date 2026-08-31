# Media to make — shared clips for the docs and the editor

## HOTSPOTS PAGE (drafted 2026-08-31, page is `draft: true` until the mode ships to customers)

Same ground rules as below. Placeholders are in `static/img/editor-hotspots-*.webp`; the page
(`docs/redigeraren/hotspots.md` + i18n twin) references them already.

Clips (2):
- `hotspot-place-v1.mp4` — press Add hotspot, double-click a detail, the dot lands and its row
  opens, fill the name. Canvas + panel crop (the row opening is half the story). ~8 s.
  Replaces `editor-hotspots-placera.webp`.
- `hotspot-tour-v1.mp4` — try step with ≥2 hotspots, tour on: press play, two stops with dwell
  and swing, touch the scene to exit. Canvas-only crop. NOTE: the editor parks the tour chrome
  ~50 px higher than production, and dots hide entirely while the tour plays. ~12 s.
  Replaces `editor-hotspots-rundtur.webp`.

Stills (5):
- `editor-hotspots-oversikt.webp` (1200×700) — step 1, one hotspot open, full window minus topbar
- `editor-hotspots-sektioner.webp` (needs the panel scrolled to show all four numbered sections;
  tallest panel in the flow)
- `editor-hotspots-vy-guide.webp` (1000×650) — choose-the-view wizard: dimmed panel, pulsing gold
  frame (capture mid-breathe), guide card top-left, Use this view / Cancel bar bottom
- `editor-hotspots-utseende.webp` — step 2 panel with the bubble section visible (needs a hotspot
  with hover text first)
- `editor-hotspots-navigering.webp` — step 3 panel, tour section (needs ≥2 hotspots, pick
  Arrows + tour so all controls show)

When capturing: no GUIDE pill exists in this flow's header (unlike setup/media), so panel crops
will differ slightly at the top-right.

---

Internal planning file, not published (lives outside `docs/`). It is the capture plan for the
instructional media that will live in **both** the docs site and the editor, plus the remaining
docs-only screenshots. Delete entries as they are produced.

## Ground rules for every clip

- **Wordless.** No burned-in text, no audio track. Narration lives in docs prose and the editor's
  i18n dictionaries, so one clip serves Swedish and English forever.
- **One recording per clip, English UI.** No per-language variants: the clips teach gestures, not
  text (the yellow button is recognized by position and color, and its localized name lives in the
  surrounding prose/i18n strings). The editor already serves a single `framing.mp4` to both
  locales, and the media flow's UI only exists in English today anyway. Revisit per-language clips
  only if customer feedback shows real confusion — the fork stays cheap later (`framing-sv-v1.mp4`
  + a locale-aware path in the editor), but costs double maintenance if made now.
- **Show the gesture.** Cursor always visible, with click/scroll indicators (a key-cast overlay or
  the recorder's click highlighting). The cursor is the narrator.
- **MP4, H.264, yuv420p, muted.** Plays everywhere the editor supports (incl. Safari 16.4+),
  hardware decoded. Skip WebM.
- **Perform at natural pace; post speeds it to 1.3×.** Deliberate mouse movement in the recording,
  tempo added in the edit.
- **3–8 seconds, clean loop.** End on the same pose the clip opens on where possible, or end on a
  short hold. Clips autoplay muted and loop in both surfaces.
- **200 ms white fade at both ends** (added in post: `fade=t=in:st=0:d=0.2:color=white` and the
  matching `t=out`), so the loop seam reads as a soft blink instead of a hard cut. White, not
  black — the editor canvas is light.
- **Crop tight.** Record the interaction region, not the full window. Tight crops read better at
  small sizes and survive unrelated UI changes without a re-shoot.
- **Two encodes per clip.** A 960-wide inline variant (`<name>-s.mp4`, ~0.5–0.7 MB) is what the
  page plays; the native-crop-resolution variant (`<name>.mp4`, aim under ~3 MB) is fetched only
  when the reader clicks to enlarge. The small one keeps normal reading light; the big one makes
  UI text readable on demand.
- **Same demo model, light theme, same background across all clips** so the set feels like one
  production.
- **Version the filenames** (`-v1`, `-v2`) so browser caches never show a stale clip after a UI
  change.
- Embeds respect `prefers-reduced-motion` (pause autoplay); that is an embed concern, not a
  capture concern.

Canonical home for the files: the editor repo's `public/help/` (the editor must ship them anyway).
Copy into this repo's `static/video/` when a clip is added or re-versioned.

---

## The clips

Priority order. "Editor slot" says whether the editor already has a place to show it.

### 1. `framing-v1.mp4` — framing with the mouse (media flow) — **DONE**

- Produced 2026-08-27: `static/video/framing-v1.mp4` (1540×1028, ~9 s at 1.3×, 0.7 MB; small
  variant 0.2 MB). Every gesture goes out and comes back so the modal loop is seamless.
- **Editor: shipped.** The 960-wide variant was copied to
  `Marvify-Editor/public/help/framing.mp4` — the framing guide's "Demo clip goes here"
  placeholder is retired. (Needs a commit in the editor repo.)
- **Docs:** embedded on Videos ("Frame it with your mouse") and Photos (step 2); superseded stills
  `editor-media-inramning.webp` and `editor-media-foto-inramning.webp` removed from the pages.

### 2. `setup-camera-start-v1.mp4` — setting the start camera — **DONE**

- Produced 2026-08-27: `static/video/setup-camera-start-v1.mp4` (1280×854, ~12 s, 1.3 MB).
  Embedded in Guided setup step 1; superseded stills `editor-setup-kamerastart-vy.webp` and
  `editor-setup-kamerastart-fokus.webp` removed from the page.
- **Editor slot: none yet** (guided setup has no per-step demo affordance today — editor-repo work
  if we want it in-product).
- Optional future clip 7 idea from the outtakes: adjusting the start camera afterwards (click the
  marker, nudge with the gizmo, eye-button back). Needs one added docs sentence — the gizmo is not
  documented today.

### 3. `setup-limit-drag-v1.mp4` — setting a camera limit — **DONE**

- Produced 2026-08-27: `static/video/setup-limit-drag-v1.mp4` (1280×685, ~14 s at 1.3×, 1.3 MB).
  Embedded in Guided setup step 2 ("Three ways to set a limit"); superseded still
  `editor-setup-granser-guide.webp` removed from the page. Crop keeps the right panel (the Set
  press is the lesson). Shows Set on Closest and Furthest, the tilt rows unlocking, then a tag
  pick-up and drag.
- **Editor slot: none yet.**

### 4. `setup-visitor-preview-v1.mp4` — feeling the limits as a visitor — **DONE**

- Produced 2026-08-27: `static/video/setup-visitor-preview-v1.mp4` (1540×1028, ~13 s at 1.3×,
  2.9 MB; small variant 0.9 MB). Embedded in Guided setup step 2 ("Preview as a visitor");
  superseded still `editor-setup-granser-forhandsvisning.webp` removed from the page.
- Note: photographic full-frame motion encodes heavier than white-canvas UI — this clip needed
  CRF 24/26 instead of the usual 21/23 to stay under budget. Expect the same for any clip
  dominated by the model at large size.
- **Editor slot: none yet.**

### 5. `build-stops-v1.mp4` — placing stops in the shot builder — **DONE**

- Produced 2026-08-27: `static/video/build-stops-v1.mp4` (1540×1028, ~12 s at 1.3×, 2.7 MB; small
  variant 0.9 MB, CRF 25/27 — heavy motion clip). Embedded on Build your own shot ("Placing
  stops"); superseded stills `editor-bygg-stopp.webp` and `editor-bygg-forhandsvisning.webp`
  removed from the page.
- **Editor slot: none yet** (the builder's coaching card could host it later).

### 6. `photo-no-background-v1.mp4` — the transparent cutout — **DONE**

- Produced 2026-08-27: `static/video/photo-no-background-v1.mp4` (1920×1028, ~7 s at 1.3×,
  0.45 MB; small variant 0.17 MB). Embedded on Photos ("No background"); superseded still
  `editor-media-foto-utan-bakgrund.webp` removed from the page. Cut ends on "Saving…" — the
  browser's download UI pops right after the confirmation, so the clip stops just before it.
- **Editor slot: none yet.**

---

**All six clips produced.** Remaining media work: the docs-only stills below, and the optional
clip 7 idea (start-camera gizmo) noted under clip 2.

---

## Docs-only stills — **ALL CAPTURED 2026-08-27**

Every still below was captured, cropped, and embedded; `editor-setup-granser-fel.webp` was
deleted as planned. The list is kept as the re-shoot map for future UI changes.

Captured in the same session, same model/theme/background as the clips. Filenames are already
wired into the pages — save over the placeholder in `static/img/` and the docs light up.

Stills rules, mirroring the clips: wide/full-window shots get two files — a 960-wide inline
`<name>.webp` and a native-resolution `<name>-full.webp` served by the `DocImage` component's
click-to-enlarge. Panel/section crops are a **single file at native resolution**, displayed at
native size (no enlarge — there is nothing bigger to show; browser zoom reshapes the UI too much
to be worth capturing at). Screenshots are full-window 1920×1080 PNGs at 100% zoom; cropping
happens in post.

**Editor overview**
- `editor-oversikt.webp` — the editor open with a model loaded (1200×700)

**Guided setup**
- `editor-setup-panel.webp` — the setup flow: panel right, model left (1200×700)
- `editor-setup-kamerastart-knapp.webp` — the yellow button under the picture (760×200)
- `editor-setup-kamerastart-enheter.webp` — the desktop and phone previews (1000×600)
- `editor-setup-bakgrundsfarg.webp` — the background colour picker (640×420)
- `editor-setup-granser-panel.webp` — the limits panel, tilt rows still locked (640×560)
- `editor-setup-rorelsen-val.webp` — the three motion choices (640×520)
- `editor-setup-rorelsen-lista.webp` — the animation list (640×520)
- `editor-setup-rorelsen-installningar.webp` — the animation settings (640×480)
- `editor-setup-testa-former.webp` — the shape and size row (1100×300)
- `editor-setup-testa-egen.webp` — the custom size fields (700×260)
- `editor-setup-spara-namn.webp` — the name field with the full id below it (640×400)
- `editor-setup-spara-kort.webp` — the card with the documentation link and code (1000×800)
- Superseded by clips if we adopt them: `editor-setup-kamerastart-vy.webp`,
  `editor-setup-kamerastart-fokus.webp`, `editor-setup-granser-guide.webp`,
  `editor-setup-granser-forhandsvisning.webp`
- **Orphaned, delete:** `editor-setup-granser-fel.webp` (the refusal-message section was cut from
  the docs)

**Videos / Photos**
- `editor-media-val.webp` — the Video or Photos question (900×560, used on both pages)
- `editor-media-format.webp` — the format choices (640×680, used on both pages)
- `editor-media-ram.webp` — the bright capture frame over the model (1100×650)
- `editor-media-galleri.webp` — the shot picker (1000×700)
- `editor-media-rorelse.webp` — the selected shot with Change beside it (640×300)
- `editor-media-langd-effekter.webp` — clip length and the two effect choices (640×560)
- `editor-media-skapa.webp` — Create clip and the size it will produce (640×320)
- `editor-media-foto-inramning.webp` — the product inside the frame (1000×620)
- `editor-media-foto-kvalitet.webp` — the two qualities and the size readout (640×360)
- `editor-media-foto-utan-bakgrund.webp` — the checkerboard cutout (1000×620, superseded if
  clip 6 is made)
- Superseded by clip 1 if adopted: `editor-media-inramning.webp`

**Build your own shot**
- `editor-bygg-handtag.webp` — the drag handle on the picked stop (900×600)
- Superseded by clip 5 if adopted: `editor-bygg-stopp.webp`, `editor-bygg-forhandsvisning.webp`

---

## When a clip replaces a still

Swap the `<img>` embed for the `DocVideo` component (lazy-loaded, looping, muted; click opens an
in-page enlarged view at ~85% of the viewport). Pass the clip's pixel size as `ratio` so the page
reserves the space before the video loads. Add the import once per page, right after the
frontmatter:

```html
import DocVideo from '@site/src/components/DocVideo';

<DocVideo
  src={require('@site/static/video/framing-v1-s.mp4').default}
  srcFull={require('@site/static/video/framing-v1.mp4').default}
  ratio="1540 / 1028"
/>
```

The small-variant encode from a finished full-res clip:

```
ffmpeg -i <name>.mp4 -vf "scale=960:-2" -an -c:v libx264 -preset slow -crf 23 \
  -pix_fmt yuv420p -movflags +faststart <name>-s.mp4
```

Then delete the superseded placeholder from `static/img/`.
