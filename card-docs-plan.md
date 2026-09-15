# Details card (mode=card): docs, media and loose ends

Working plan for documenting the editor's `mode=card` guided flow, plus everything the research
turned up that needs doing around it. Source of truth for the flow itself is
`.docs-internal/card-research.md` (researched 2026-09-15 against Marvify-Editor @ df7d4b2).
Tick things off here as they land.

## 0. Decisions needed first

- [ ] **Page slug.** Proposal: `redigeraren/kort`, matching the Swedish-path convention of
  `foto` and `bygg`. Whatever is chosen is baked into the editor's `GUIDE_PAGES`, so decide once.
  Anchors are not a decision: they follow the step ids (`#card`, `#look`, `#try`, `#save`), the
  pattern the editor's guide-target functions rely on.
- [ ] **Page title.** Proposal: "Detaljkort" (sv) / "Details card" (en), the words the editor's own
  welcome line uses. Sidebar label the same.
- [ ] **Autorotate during authoring.** The card flow does not pause the variant's autorotate the
  way media and hotspots do, so a spinning model keeps spinning behind the card while you write
  it. Product call: should card mode latch it off like hotspots? If yes, that is a one-line editor
  change and the docs need no sentence about it. If no, the docs mention it once.

## 1. The page: `redigeraren/kort`, both languages, draft first

Same house pattern as the other five pages: Swedish source in `docs/redigeraren/`, English twin
in `i18n/en/.../redigeraren/`, identical anchors, `draft: true` until it publishes, no
meta-narration of pips or disabled buttons, every quoted label taken from `en.ts` / `sv.ts`.

Outline:

- Lede + intro: what a details card is (one card per version, opened from a corner button),
  the four steps: **Kortet / The card → Placering / Placement → Testa / Try it → Spara / Save it**.
- **Innan du börjar / Before you start**
  - Needs a version from guidad setup (same prerequisite framing as hotspots).
  - Nothing reaches visitors until you save, with the one wrinkle stated plainly: the card shows
    on the canvas while you work, but only exists for visitors after step 4 is saved.
  - Pointer for hotspots readers: this is the version's own card, separate from the cards a
    hotspot can open. Same tool, different job.
- **Steg 1: Kortet {#card}** ("Vad kortet säger" / "What the card says")
  - Start from a layout: the seven tiles and what each is for; presets arrive prefilled with
    sample text in your language; replacing your own work asks first; no undo.
  - Content lines: Small label / Heading / Text / Price, add, reorder, remove; empty lines show
    nothing to visitors.
  - Image: address, alt text, position, size, with the size guidance.
  - Button: text and URL both needed for visitors to see it; opens in a new tab.
  - Advanced styling: the fold, the contrast warnings, and that the corner is NOT here (step 2).
  - Ta bort kortet / Remove the card: only when the version arrived with a card; Continue becomes
    **Spara utan kortet / Save without the card**.
- **Steg 2: Placering {#look}** ("Var det sitter" / "Where it sits")
  - Corner of the picture; corner drives both the open card and the closed button.
  - Börja som en knapp / Start as a button; phones always start closed regardless.
  - Knappen / The button: label with suggestion chips, colours, contrast warning.
  - The must-say: hovering the button section closes the card to show the button, moving away
    reopens it. This is the editor helping you see what you colour, not a bug.
- **Steg 3: Testa {#try}** ("Testa ditt kort" / "Try your card")
  - The checklist (state both variants briefly), Desktop / Mobile / Back to full size, each press
    behaves like a fresh page load, the phone frame shows the bottom sheet.
- **Steg 4: Spara {#save}**
  - Update preselected, Replace-these-settings confirm, Save as new, link to guidad setup's save
    section; the save is what turns the card on for visitors.
- **Bra att veta / Good to know**
  - Never appears in files from Videor/Foton (same reason as hotspots).
  - Coexists with hotspots: fades out while a visitor is at a hotspot, comes back after.
  - Long cards scroll inside the card; the mouse wheel over the card scrolls the card, not the
    model; on phones it is a bottom sheet with a grab bar and swipe-to-close.
  - For readers from the Hotspots page: step 2 here is placement, appearance lives in step 1's
    Advanced styling.

Media placeholders go in from day one (gray captioned boxes, same generator as before) so the
page can be reviewed with the flip-build-flip trick before capture.

## 2. Media to make

Clips carry the gestures and the surprising visuals; stills carry states. Same pipeline as the
shipped pages (see `.docs-internal/card-research.md` and the ground rules in git history of
`media-to-make.md`): wordless English-UI recordings, 1.3× in post, white fades, dual encodes;
stills as full-window PNGs cropped in post, wide shots dual-size.

Before recording: use a **static variant** (autorotate off) or accept a moving model in every
shot; and note the flow has **no GUIDE pill** and only Reset view on step 3, so panel crops
differ slightly from the setup batches.

### Clips (3)

- [x] `card-start-from-v1.mp4` (step 1). **DONE 2026-09-15**: 1920×1028, 8.9 s at 1.6× with scripted zooms (tiles 2×, card 1.6×), 1.4 MB
  (small variant 0.44 MB, CRF 26/27). Hover two or three layout tiles so the hint line changes,
  pick **Product listing**, the prefilled card appears on the canvas, click into a line and type
  so the card updates live. ~10 s. Crop: canvas + panel. Sits in the "Start from" section
  alongside the picker still, which stays: the still is for reading the seven names, the clip is
  for the live-update promise.
- [x] `card-pill-v1.mp4` (step 2). **DONE 2026-09-15**: 1920×1028, 7.4 s at 1.6× with zooms (chips 2×, toggle 1.8×), 1.3 MB / 0.36 MB, CRF 26/27. Hover into the button section, the card closes to the button,
  click a suggestion chip and the button's text changes, move the pointer away and the card
  reopens, then tick **Start as a button** so it stays closed. ~10 s. Crop: canvas + panel.
  This clip exists to pre-empt the "it's a bug" support ticket.
- [x] `card-mobile-v1.mp4` (step 3). **DONE 2026-09-15**: 1540×1028, 7.3 s at 1.6× with a 1.5× push on the phone frame, 0.54 MB / 0.20 MB, CRF 25/27. Press **Mobile**, the frame appears with the card as a
  button, tap it, the bottom sheet slides up with its grab bar, scroll the card so the fade shows,
  drag it closed. ~12 s. Crop: canvas only. Needs a long description in the card so it scrolls.

### Stills (5, plus 1 optional)

- [x] `editor-card-oversikt.webp` (wide, dual files). **DONE 2026-09-15** (960 inline 42 KB + full 1920×1028 150 KB). Step 1 with Product listing picked: card on
  the canvas, panel to the right, full window minus topbar.
- [x] `editor-card-layouter.webp` (panel). **Captured then dropped 2026-09-15**: the page no longer lists the layouts (change-resistant wording) and the clip above zooms onto the same tiles. The seven-tile picker with the hint line filled by a
  hovered tile. Swedish UI is the harder capture (two-line names); take it in the language the
  page shot set uses.
- [x] `editor-card-innehall.webp` (panel). **DONE 2026-09-15** (364×762, one shot, all three sections fit). Content lines + image + button sections. Tallest panel;
  scroll so all three fit or take two shots.
- [x] `editor-card-stil.webp` (panel). **DONE 2026-09-15** (364×524, default colours, no warning shown by decision). Advanced styling open, ideally with one contrast warning
  showing (needs a bad colour pair and a price or small-label line for the accent warning).
- [x] `editor-card-placering.webp` (panel). **DONE 2026-09-15** (364×390). Step 2: corner picker, Start as a button, the button
  section with chips.
- [x] optional `editor-card-ta-bort.webp` (panel). **Skipped 2026-09-15**: the section reads fine as text. The removal state: "Kortet är borttaget…" with
  Bring the card back and Save without the card. Needs a variant that already has a card.

Capture doubles as the drift check: walk the real flow against the page before publishing.

## 3. Changes to existing docs pages

- [ ] **Overview** (`oversikt.md`, both languages): fifth guided-tasks row for the details card.
  "Fler guider är på väg" can stay only if more modes are actually planned; otherwise drop it.
- [ ] **`sidebars.js`**: add `redigeraren/kort` after `redigeraren/hotspots`, before `bygg`.
- [ ] **Videor + Foton** (both languages): the "Hotspots syns aldrig i filerna" line should cover
  the details card too, so it does not read as if hotspots are the only thing excluded.
- [ ] **Hotspots** (both languages): cross-link "Spara utan hotspots" ↔ "Spara utan kortet"; in the
  click-shows section, one clause that the card tool is the same one the details card uses.
- [ ] **Guidad setup**: no change needed. Its claim that setup leaves hotspots and info cards
  alone is still true.
- [ ] **`.docs-internal/hotspots-research.md`**: the "hotspots has no per-step targets" paragraph
  is now stale (the editor wired them). Fix or drop that paragraph.

## 4. Editor-side work (for the editor session, once the page exists)

Guide links, same shape as the hotspots wiring that is now done:

- [ ] `GUIDE_PAGES.card` → the chosen slug; `ARTICLES.card` → the page instead of the overview.
- [ ] `cardGuideTarget(step)` as a pass-through over `card | look | try | save`.
- [ ] `CardShell.svelte` passes `guideHref`; `CardFlow.svelte` passes the save step's instead of
  `guideHref={null}`.
- [ ] Still open from before: setup's step 5 shows no GUIDE pill because `SaveStep` renders
  `GuidedShell` directly. Solving it there fixes card's and hotspots' save steps too.

Copy and code bugs found during the research (small, worth a single pass):

- [ ] `LookStep.svelte:107` hard-codes `placeholder="Details"`; shows English in a Swedish panel if
  the field is cleared. Should come from the dictionary (first suggestion chip).
- [ ] `CardTool.svelte:292` uses `$t.card.imagePlaceholder` for the button URL field. Give it its
  own key.
- [ ] Dead dictionary keys `t.card.pick` and `t.card.image` in both languages.
- [ ] Two "does the card have content" definitions disagree (`CardTool.svelte:37-40` counts the
  button URL and ignores the image; `card-flow-store.ts:132-138` the reverse). Harmless today,
  worth unifying.
- [ ] Stale in-repo docs: `docs/json-fields.md` and `docs/design/mode_card.md` still say tapping
  the canvas minimises the card on mobile (removed in viewer `ed17737`) and that mobile is decided
  by viewport width (now the container). `card-context.ts:19-20` still calls it "the scene's
  welcome card".
- [ ] Verify the hotspots wizard-overlay bug from the last capture session (guide card and action
  bar persisting on steps 2 and 3) is fixed. The research did not check it.
- [ ] Decision 0.3 above (autorotate latch), if the answer is yes.

## 5. Order of work

1. Decide 0.1 to 0.3.
2. Branch `card-docs` from master; commit `.docs-internal/card-research.md` there.
3. Write both pages as drafts with placeholder media; generate the placeholders.
4. Review rounds (redundancy pass, readability pass) on the flip-build-flip review server.
5. Capture session: 3 clips, 5 stills, one at a time, guided.
6. Existing-page changes (section 3) on the same branch.
7. Publish: drop the draft flags, sidebar, overview row, PR, merge.
8. Hand the editor session section 4 as one prompt, with the final slug and anchors.
9. Delete `media-to-make.md`: everything in it is done, including its last open item (hotspots
   guide links), and this file replaces it.
