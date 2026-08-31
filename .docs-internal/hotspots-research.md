# mode=hotspots — research notes for the future docs page

Researched 2026-08-31 against Marvify-Editor @ 49c92c6. Source of truth for the docs page when we
write it. All strings verified in `src/lib/i18n/en.ts` + `sv.ts` (both complete); file/line
pointers below are from that commit. The in-repo `hotspots.md` design doc is partly stale — current
strings win.

## Flow shape

`?asset=<sk>&config=<variant>&mode=hotspots` → `HotspotsFlow` with 4 steps
(`hotspots-flow-store.ts`): **Hotspots → Appearance (Utseende) → Try it (Testa) → Save it (Spara)**.
Step 4 literally reuses setup's `SaveStep`. Panel right 380px, 4 pips, same geometry as setup/media.
Autorotate/autoplay latched off on entry (like media).

- `config=` is **mandatory**: without it, a dead-end screen "This model has not been configured for
  website use / Complete the setup process for the model first…". The flow always runs on a
  variant, so **save defaults to Update-in-place** (with the Replace-these-settings confirm);
  "Give it a name" only appears via "Save as new".
- **No fallback full editor anymore, for any mode**: a URL without a known `mode=` shows "This page
  is not available / Open the editor from your dashboard…". `mode=full` works only as an explicit
  URL. "Show all tools instead" is compiled out everywhere.
- Setup is the premise: back-pill returns to the start camera; "Free movement" = the scene limits
  from setup. Not enforced beyond the config check.

## Step 1 — Hotspots ("Place your hotspots" / "Placera dina hotspots")

Mental model taught by the panel: *a hotspot is a dot on your product; hovering can show a line of
text; clicking can bring the visitor to a view and show a card.*

- **Add hotspot** button; empty scene auto-arms placement; **double-click the model** places the
  dot (same gesture for Move the dot). Esc/Cancel aborts; footer becomes a lone Cancel while
  placing. Top-left guide card "Placing a hotspot".
- Per-hotspot editor = the open list row, four numbered sections:
  1. **Name** (only required field; duplicate names refused; doubles as embed-API key)
  2. **When someone hovers** (optional one-liner)
  3. **What a click shows**: Nothing / A note at the dot / A card (default Nothing; note prefills
     from hover text; card edited with the shared CardTool, WYSIWYG on canvas; image-only card
     counts as non-empty)
  4. **The camera**: Stays still (default) / Moves to a chosen view → full-canvas
     **choose-the-view wizard** (panel dims to 45%, pulsing gold canvas frame, Use this view /
     Cancel bar; variant's own camera limits stay ON during it). Then movement at the view:
     Limited movement (default; ±45° yaw/pitch, never closer than authored view, out to 2×) /
     Free movement (scene limits) / Hold still.
- Reorder rows with chevrons — order = numbering, letters, and tour order. Delete behind confirm.
- Gate (only gate in flow): ≥1 hotspot, unique names, no empty chosen card/note, no unresolved
  "Moves to a chosen view". Reason line names the offender: `Left sleeve: The card is empty…`.
- No limit on hotspot count.

## Step 2 — Appearance ("How the dots look" / "Hur punkterna ser ut")

All scene-wide, live on the dots: label on dots (None/Numbers/Letters); dot colour themes
(Indigo default #1d0080 / Dark / Light / Gold / Custom fill+outline+label); **Bubbles** section
(only when hover text or a note exists; hover text + click-note share one bubble): Dark default /
Light / Gold / Custom bg+text+rounded; **Hide dots until the cursor comes near** (default off,
radius slider 30–600, default 300; dots stay visible on touch devices). No gate.

## Step 3 — Try it ("Try your hotspots" / "Testa dina hotspots")

Real shopper activation: clicks fly + clamp exactly as production (editor mounts the viewer's own
modules). Checklist blurb. Desktop/Mobile preview bar (mobile letterboxes 390×844).
**Hotspot navigation** section (only when ≥2 visible hotspots): Off (default) / Arrows /
Arrows + tour; Between stops: Fade (default) / Fly; tour-only: Seconds per stop (3–10, default 5),
Slow movement during each stop (default on) with Swing ±1–15° (default 5). Tour never autoplays,
loops until the visitor touches the scene, skips hidden hotspots; dots hide entirely while the tour
plays. Back pill appears at a hotspot view (Escape works too).

## Persistence

Whole settings.json as usual. Scene fields: dotColor/dotOutlineColor/dotLabel/dotLabelColor,
dotProximityReveal/-Radius, hotspotNav, hotspotTourDwell/-Transition/-Motion/-Swing, annotations[].
Per hotspot: title, hoverText + bubble colours, clickShows ('none'|'note'|'card', kept in sync with
legacy showInfoCard both directions), noteText, localPos, cameraPosition/Focus, cameraTransition
('travel', speed 1.5), allowCameraMovement + 6 clamp fields, CardContent. SavedCard modal + toast +
BroadcastChannel hand-over identical to setup.

## Visitor-side behaviour (for the docs page)

Dots (themed, optional number/letter, optional proximity reveal — always visible on touch). Hover →
bubble. Click → nothing/note/card (+ optional camera fly with per-hotspot movement policy; card on
narrow screens = bottom sheet). Back pill restores scene + flies to start camera. Tour controls in
scene corner when enabled. Hotspots NEVER appear in media-flow output (already stated on our
video/foto pages).

## docs.ts state (checked 2026-08-31)

- BASE is still **https://docs.marvify.io** (line 99) — our site is docs.marvify.com. Domain fix
  needed in the editor (or a redirect).
- Per-step GUIDE pill targets now exist for setup (steps 1–4 → /redigeraren/setup/#camera-start,
  #camera-limits, #the-motion, #try-it) and media (video/#what-format, #make-your-clip;
  foto/#what-format, #how-should-it-look; builder → /redigeraren/bygg/). **They match our published
  anchors exactly** apart from the domain.
- Gaps: setup step 5 never renders the pill (SaveStep bypasses it); **hotspots has no per-step
  targets and no article of its own** — when the docs page exists, editor needs
  hotspotsGuideTarget() + HotspotsShell passing guideHref (suggest anchors #spots/#look/#try/#save
  or align with whatever the page uses); mode-level book button for media/hotspots/full →
  /redigeraren/oversikt (exists ✓).

## Editor copy bugs to file / route around

1. `hotspots.place.why` (en.ts:431, sv.ts:359) still claims "The view you are standing in becomes
   the view visitors are brought to when they click the dot" — FALSE since fresh hotspots default
   to Stays still. Do not repeat in docs; consider filing.
2. `hotspots.pane.intro` says "the three questions below" (four sections exist) — never rendered,
   don't quote.
3. The three movement options carry no explanatory note in the UI anymore — the docs should carry
   that explanation (Limited = look around near the view; Free = scene limits; Hold still).

## Screenshot/clip plan seeds (for the future capture session)

Panel crops carry over from setup batches (same 380px geometry, but NO GUIDE pill in hotspots).
Unique states: (1) empty step 1 with welcome + auto-armed place guide; (2) open row with all four
sections (tallest panel, scrolls); (3) choose-the-view wizard (dimmed panel + pulsing gold frame +
bottom bar); (4) step 2 with both theme rows (needs hover text somewhere); (5) step 3 tour controls
(needs ≥2 hotspots); (6) mobile preview with back pill + tour chrome inside phone frame; (7) tour
clip (note: editor parks tour chrome 50px higher than production; dots hidden while playing).

## Existing docs impact when we write the page

Our published pages hold up (no false claims found). Additions later: Hotspots entry in the
overview's guided-tasks list; cross-link from setup ("your camera limits also bound hotspot
views"); the new no-fallback behaviour is invisible in our docs (we never showed bare URLs).
