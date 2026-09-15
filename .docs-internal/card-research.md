# mode=card — research notes for the docs page

Researched 2026-09-15 against Marvify-Editor @ df7d4b2. Source of truth for the docs page. All
strings verified in `src/lib/i18n/en.ts` + `sv.ts`. The editor's in-repo design docs
(`docs/design/mode_card.md`, `docs/todo/todo_card.md`, `docs/json-fields.md`) are partly stale —
current code and strings win. Viewer behaviour is read from the pinned submodule commit `5313b1f`
(the working-tree checkout is older).

## What it is, in the customer's words

A **details card** (sv **detaljkort**): one scene-level card per version (`settings.globalCard`),
not the per-hotspot cards. Welcome line: "Now let's give your model a details card." /
"Nu ger vi din modell ett detaljkort." The feature itself already shipped in the viewer; this flow
is the guided way in.

## Flow shape

`?asset=<sk>&config=<variant>&mode=card` → `CardFlow` with 4 steps (`card-flow-store.ts`):
**The card (Kortet) → Placement (Placering) → Try it (Testa) → Save it (Spara)**. Step 4 reuses
setup's `SaveStep`. Panel right 380px, 4 pips, same geometry as the other flows.

- `config=` mandatory. Without it: "This model has not been configured for website use" /
  "Complete the setup process for the model first, then come back to add the card." (sv
  "Denna modell har inte konfigurerats för webben" / "Gör klart inställningarna för modellen först,
  och kom sedan tillbaka för att lägga till kortet.")
- Always runs on a variant → save defaults to **Update in place** (Replace-these-settings confirm).
- **Autorotate is NOT paused** in this mode (media and hotspots latch it off; card and setup do
  not). A spinning variant keeps spinning behind the card while you write. Screenshot hazard.
- Only ONE gate in the whole flow: step 1 requires content (a non-empty line, a button *label*, or
  an image switched on with an address). Reason line: "The card is empty. Write something, add an
  image or a button." / "Kortet är tomt. Skriv något, lägg till en bild eller en knapp."
  A button URL alone does not count; an image with no address does not count.
- The card shows on the canvas during steps 1–3 but only exists for visitors after Save: reaching
  step 4 flips `globalCard.enabled` in memory, Save persists it. Documented divergence from
  "nothing happens until you save": the author sees a card shoppers do not yet have.

## Step 1 — The card ("What the card says" / "Vad kortet säger")

Blurb: "Start from a layout, then write. The card on your model updates as you type." /
"Utgå från en layout och skriv sedan. Kortet på din modell uppdateras medan du skriver."
The panel body is the shared `CardTool` (same as hotspots' card) pointed at the global card. No
preview in the panel: the card on the canvas is the preview.

- **Start from / Utgå från** — 7 tiles: Product listing (Produktlistning), On-page companion
  (Komplement till produktsidan), Size and fit (Storlek och passform), Measurements and specs
  (Mått och specifikationer), Social (Sociala medier), Materials and care (Material och skötsel),
  Make your own (Gör ditt eget, dashed full-row). Hint: "Point at a shape to read what it is for."
  Presets arrive **prefilled with sample text in the author's language** (EN "Washed linen shirt",
  "€89"; SV "Tvättad linneskjorta", "899 kr"). Image presets switch the image on with an empty
  address → editor draws a Marvify wordmark stand-in (never saved). Picking a preset over your own
  work asks "Replace the card?" / "Ersätt kortet?" ("What the card holds now is replaced. This
  cannot be undone."). No undo anywhere in the flow.
- **Content / Innehåll** — lines with a style each: Small label (Liten etikett, uppercase accent
  colour), Heading (Rubrik), Text (Text, textarea), Price (Pris, accent colour). ▲▼× per line,
  "+ Add a line" / "+ Lägg till en rad". Empty lines render nothing for visitors.
- **Show an image / Visa en bild** — Image address (URL) with size tip ("landscape around 1200×675
  (16:9) for top or bottom placement, portrait around 600×900 (2:3) beside the text"), Alt text
  (with tip; placeholder "Mother-of-pearl buttons, close up" / "Pärlemorknappar, närbild"),
  Position Top/Bottom/Left/Right (Överst/Nederst/Vänster/Höger), Image size Small/Medium/Large
  (Liten/Mellan/Stor).
- **Button / Knapp** — "Text on the button" / "Text på knappen", "Where it leads (URL)" / "Vart den
  leder (URL)". Both required for visitors to see a button. URL normalised on blur
  (`shop.com/x` → `https://shop.com/x`). Opens in a new tab.
- **Advanced styling / Avancerad stil** (collapsed fold): Width (Narrow/Regular/Wide — Smal/Normal/
  Bred), Corners (Sharp/Small/Medium — Skarpa/Små/Runda), Padding (Compact/Comfortable/Roomy —
  Tät/Bekväm/Rymlig), Shadow (None/Soft/Pronounced — Ingen/Lätt/Tydlig), Font (Sans/Serif/Mono),
  Text colour, Background, Accent, Border colour+width, Full-width button (Knapp i full bredd),
  Button position Left/Right. **No Position row here** (unlike hotspots' fold): the corner is
  step 2. Three amber contrast warnings under 4.5:1 (text/background, button text/button,
  accent/background), sv with decimal comma.
- **Removal door** — only when the variant arrived with a card: "Remove the card" / "Ta bort
  kortet" → body "The card is removed. Save to make it permanent, or bring it back.", button
  "Bring the card back" / "Ta tillbaka kortet", and Continue becomes **"Save without the card" /
  "Spara utan kortet"** jumping to step 4 (steps 2–3 shown as hollow pips). Exact mirror of
  hotspots' "Save without hotspots".

## Step 2 — Placement ("Where it sits" / "Var det sitter")

Blurb: "Choose a corner, and what visitors see first." / "Välj ett hörn, och vad besökare ser
först." No gate.

- **Corner of the picture / Hörn av bilden** — a little frame with four rectangles; Top left / Top
  right / Bottom left / Bottom right (Uppe till vänster … Nere till höger). Default bottom-left.
  The corner drives both the open card and the closed pill.
- **Start as a button / Börja som en knapp** (default off). Tip: "The card loads closed, as the
  small button, and opens when a visitor presses it. On phones it always starts as the button,
  whatever you choose here."
- **The button / Knappen** — "What visitors press to open the card once it is closed." Text on the
  button with four suggestion chips (EN Details / Product info / Size and fit / Materials; SV
  Detaljer / Produktinfo / Storlek och passform / Material), Button colour (default #1d0080),
  Button text colour (#ffffff), contrast warning. The label is seeded in the author's language
  for a fresh variant (a Swedish author starts on "Detaljer").
- **Surprising visual, must be in the docs**: hovering or focusing anywhere in the button section
  closes the card on the canvas to the pill so you can see what you are colouring; moving away
  reopens it. A customer will otherwise report it as a bug.

## Step 3 — Try it ("Try your card" / "Testa ditt kort")

Blurb "Use the scene the way a visitor would, and check:" + a checklist that **branches** on
Start as a button:
- Off: "The card reads well where it sits, and does not cover the product." / "Closing it leaves
  the *Details* button, and pressing that opens it again."
- On: "Pressing the *Details* button opens the card." / the reads-well line / "Closing the card
  brings the button back."
- Always: "Press *Mobile* under the picture. There the card starts as the button, as it does on a
  phone." Note: "Desktop, Mobile and Back to full size each show the card as a fresh page load
  would."
Device bar: Preview · Desktop · Mobile · Back to full size (Förhandsvisning · Dator · Mobil ·
Tillbaka till full storlek). Every press remounts the card = fresh page load. The phone frame
makes the card start as the pill and lay out as the bottom sheet. The bar docks away from the
card's corner. Reset view is the only canvas tool, only on this step.

## Step 4 — Save it

Setup's SaveStep, always the variant branch with **Update preselected** (same strings as
hotspots: "Save your changes" … "Replace these settings?" … "Ready to go"). Only
`settings.globalCard` is written (24 shared card fields + enabled, startMinimized,
minimizedLabel (default "Details"), minimizedBgColor, minimizedTextColor). Broadcasts
`variant-saved`; tab stays open; SavedCard modal with the two snippets.

## Visitor side (viewer @ 5313b1f)

- Two states: the **open card** in the chosen corner (24px in) with a close × (26px desktop,
  44×44 hit target on touch), or the **pill** at the same corner (label from minimizedLabel,
  fallback "Details"). Click pill → card; close card → pill.
- **Phones always start closed** regardless of the author's choice.
- Layout decided by the **container**, not the window: width < 480 → **bottom sheet** (full width,
  ≤50% height, top corners rounded, grabber bar that is itself a close button, swipe down to
  close, 180 ms enter, full-bleed button, body text 15px, image capped 20% height). Height < 480
  → **side sheet** on the right. Else the corner card. A sheet shrinks the render so the product
  stands whole above it.
- **Long cards scroll** with a bottom fade; **the wheel over the card scrolls the card, not the
  model**.
- **Tapping the canvas no longer closes the card** (older design docs still claim it does). The
  canvas belongs to the camera; the card closes via ×, grabber or swipe.
- While a **hotspot** is active the global card fades out and comes back after. Both can coexist
  on one version; neither flow touches the other's data.
- **Absent from video/photo exports** for the same reason as hotspot dots (DOM over canvas).
- Accessibility: the card is a dialog labelled by its own heading line ("titled card" commit).

## Relationship to the hotspots card

Same CardTool, same `t.card` strings, same renderer. Differences: different preset set (5
global-only + Materials + Make your own; no "Your other hotspots" copy-from), no Position in the
fold (corner is step 2), pill + start-closed are global-card-only, gate wording differs, no
"No card" choice (the removal door instead).

## docs.ts (checked 2026-09-15)

- **Card has no guide targets**: `ARTICLES.card` → `redigeraren/oversikt`, no `cardGuideTarget()`,
  no `GUIDE_PAGES.card`, `CardShell` passes no guideHref, `CardFlow` passes `guideHref={null}` to
  the save step. No GUIDE pill on any card step; book button + welcome link → the overview.
- Hotspots wiring from last round is **done**: `hotspotsGuideTarget()` exists and `HotspotsShell`
  passes guideHref. Setup step 5 pill still missing (SaveStep bypass).
- Once the page exists the editor needs: `GUIDE_PAGES.card`, `ARTICLES.card`, `cardGuideTarget()`
  (pass-through over `card|look|try|save`), `CardShell` guideHref, `CardFlow` save-step guideHref.
  If the page follows the hotspots pattern, anchors are the step ids: `#card`, `#look`, `#try`,
  `#save`. Slug is our choice (`redigeraren/kort` fits the Swedish-path convention).

## Editor copy bugs to file / route around

1. Dead keys `t.card.pick` and `t.card.image` (never rendered).
2. Hard-coded English `placeholder="Details"` on the pill label field (`LookStep.svelte:107`) —
   shows in a Swedish panel if the field is cleared.
3. Button URL field reuses `$t.card.imagePlaceholder` (`CardTool.svelte:292`).
4. Two "has content" definitions disagree (gate counts image not URL; replace-confirm counts URL
   not image). Harmless.
5. `docs/json-fields.md` and `docs/design/mode_card.md` still say tapping the canvas minimises
   the card on mobile — removed in viewer `ed17737`. Don't borrow that.
6. Nothing in setup offers the card flow as a next step (design doc §6 proposed it) — don't write
   "after setup the editor offers you the card".

## Screenshot / clip seeds

Unique states: welcome over an empty canvas (card is held back until content exists); the
7-tile picker with the hint line (Swedish = two-line names, harder shot); Product listing just
picked (stand-in image, full-bleed Buy button); replace confirm (needs own content first);
Advanced styling open (note: no Position row); a contrast warning (needs a bad pair + the
matching precondition); step 2 with the pill showing (hover the button section, or tick Start as
a button); step 3 checklist both branches; step 3 phone frame (bottom sheet, grabber, fade,
bar docked on the far side); the removal door (needs a variant that already has a card); the
dead-end screen (no config). Chrome: no GUIDE pill, 4 pips, only Reset view on step 3, no Undo.
Autorotate keeps spinning — pause it via a static variant or accept motion in stills.

## Impact on existing pages when writing

- Overview guided-tasks list + `sidebars.js` (after hotspots), both languages.
- Setup's "hotspots, info cards and other content are left alone" still TRUE (setup never writes
  globalCard). Card page should carry the mirror: the card task changes nothing but the card.
- Overview's "nothing happens until you save" holds, with the on-canvas-before-enabled wrinkle.
- Add "the card never appears in video/photo exports" (mirror of hotspots' line); check video/foto
  pages don't imply hotspots are the only excluded thing.
- Readers from the hotspots page will expect step 2 = appearance; here step 2 = placement and
  appearance lives in step 1's fold. Say so.
- Cross-link "Save without the card" ↔ hotspots' "Save without hotspots".
