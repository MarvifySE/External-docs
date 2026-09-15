---
id: hotspots
title: Hotspots
sidebar_label: Hotspots
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Hotspots

*A guided flow that puts interactive dots on your model: text on hover, notes and cards on click, chosen camera views, and an optional tour.*

When you choose to add hotspots to a model in the dashboard, the editor opens in the hotspots flow. A hotspot is a dot on your product: hovering it can show a line of text, and clicking it can bring the visitor to a view and show a note or a card. The panel on the right walks you through the steps:

1. **Hotspots**: place the dots and decide what each one does
2. **Appearance**: how the dots and text bubbles look
3. **Try it**: use the scene the way a visitor would
4. **Save it**: update your version, or save as a new one

<DocImage src={require('@site/static/img/editor-hotspots-oversikt.webp').default} srcFull={require('@site/static/img/editor-hotspots-oversikt-full.webp').default} alt="Step 1 with a hotspot open, panel right and model left" width={800} />

---

## Before you start {#before-you-start}

- **Hotspots can be placed on any model that has gone through [guided setup](./setup.md).** They build on that version's start camera and camera limits.
- **Nothing changes for visitors until you save** in the last step.
- **Your model's own motion is paused** while you work here.

---

## Step 1: Hotspots {#spots}

### Place a dot {#placing-a-dot}

Press **Add hotspot**, then **double-click the spot on your product where the dot should sit**. The dot lands and its settings open in the panel.

<DocVideo src={require('@site/static/video/hotspot-place-v1-s.mp4').default} srcFull={require('@site/static/video/hotspot-place-v1.mp4').default} width="85%" ratio="1920 / 1028" />

The same gesture moves a dot later: press **Move the dot** in its row and double-click where it should sit instead.

### What each hotspot can do {#what-each-hotspot-does}

Each hotspot's settings in the panel:

<DocImage src={require('@site/static/img/editor-hotspots-sektioner.webp').default} alt="The four sections of an open hotspot" width={364} />

1. **Name**. The only thing required. Give it a name that says what it points at, like *Left sleeve*. Every hotspot needs its own name.
2. **When someone hovers**. An optional short line shown beside the dot. Leave it empty and the dot shows nothing on hover.
3. **What a click shows**:
    - **Nothing**.
    - **A note**: a sentence or two shown right at the dot. It closes when the visitor taps elsewhere or starts turning the model.
    - **A card**: text lines, an image, a button. The card is edited right in the viewer, so what you see is exactly what visitors get.
4. **The camera**. **Stays still**, or **Moves to a chosen view**. Press **Choose the hotspot's view**, turn and zoom until the product looks the way visitors should arrive at it, and press **Use this view**. A view may even aim outside your camera limits from guided setup: the hotspot is then marked *outside the limits*, and visitors can still reach it because the scene briefly lifts its limits for that view.

Once a view is chosen, you decide how much visitors can move there: look around a little (the default), move as freely as anywhere else within your camera limits, or hold completely still until they go back.

<DocImage src={require('@site/static/img/editor-hotspots-vy-guide.webp').default} alt="The choose-the-view wizard with the pulsing gold frame" width={700} />

### Edit, reorder and delete {#order-and-removal}

Click a hotspot in the list, or its dot in the viewer, to open and change it. The arrow buttons move it up or down the order, and **the order is what visitors see**: it drives the numbers or letters on the dots and the order the tour follows. **Delete** removes a hotspot together with its text and its card.

---

## Step 2: Appearance {#look}

Everything here applies to every hotspot, and the dots in the viewer update as you change them.

<DocImage src={require('@site/static/img/editor-hotspots-utseende.webp').default} alt="The appearance panel with labels, colours and bubbles" width={364} />

- **Label on the dots**: numbers or letters in list order, or none.
- **Colours**: ready-made themes or your own colours.
- **Bubbles**: the hover text and the click-note share one bubble, so they speak with one voice. The section only appears once a hotspot actually has text.
- **Hide dots until the cursor comes near**: keeps the scene clean, with a radius you set yourself. On phones and tablets the dots stay visible, since there is no cursor to track.

---

## Step 3: Try it {#try}

This is the real thing. Use the scene the way a visitor would: hover and click your dots, follow a chosen view and come back. Press **Mobile** under the viewer to judge it all at phone size.

### Hotspot navigation {#hotspot-navigation}

With at least two hotspots, you can put small controls in the corner of the scene that let visitors step through your hotspots in order:

<DocImage src={require('@site/static/img/editor-hotspots-navigering.webp').default} alt="The hotspot navigation section" width={364} />

- Arrows for previous and next, and optionally a tour with a play button.
- How the camera travels between stops.
- For the tour: how long each stop lasts, and whether the camera drifts slightly while there, always within each hotspot's allowed movement.

The tour never plays by itself when the page loads. A visitor presses play, the tour walks the hotspots in order, and it loops until the visitor touches the scene.

<DocVideo src={require('@site/static/video/hotspot-tour-v1-s.mp4').default} srcFull={require('@site/static/video/hotspot-tour-v1.mp4').default} ratio="1540 / 1028" />

---

## Step 4: Save it {#save}

Because hotspots are added to an existing version, **Update** is preselected: your hotspots are saved into the version you opened. If you would rather leave the original untouched, choose **Save as new** and give it a new name, just like in [guided setup](./setup.md#save-it).

The best part of updating: **if your website already shows this version, your hotspots appear there as soon as you save.** Nothing in the code on the page needs changing.

---

## Good to know {#good-to-know}

- **Hotspots never appear in files from the [video](./video.md) and [photo](./foto.md) flows.** They are part of the model on your website, not of the exported files.
- **There is no limit on the number of hotspots**, but a few well-chosen ones usually work better than many.
