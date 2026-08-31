---
draft: true
id: hotspots
title: Hotspots
sidebar_label: Hotspots
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Hotspots

*A guided flow that puts interactive dots on your model: text on hover, notes and cards on click, chosen camera views, and an optional tour.*

When you choose to add hotspots to a model in the dashboard, the editor opens in the hotspots flow. A hotspot is a dot on your product: hovering it can show a line of text, and clicking it can bring the visitor to a view and show a note or a card. The panel on the right walks you through four steps:

1. **Hotspots**: place the dots and decide what each one does
2. **Appearance**: how the dots and text bubbles look
3. **Try it**: use the scene the way a visitor would
4. **Save it**: save the changes to your version

<DocImage src={require('@site/static/img/editor-hotspots-oversikt.webp').default} alt="Step 1 with a hotspot open, panel right and model left" width={800} />

---

## Before you start {#before-you-start}

- **Hotspots can be placed on any model that has gone through [guided setup](./setup.md).** They build on that version's start camera and camera limits.
- **Nothing changes for visitors until you save** in the last step.
- **Your model's own motion is paused** while you work here, just like in the video and photo flows.

---

## Step 1: Hotspots {#spots}

The panel asks you to place your hotspots.

### Place a dot {#placing-a-dot}

Press **Add hotspot**, then **double-click the spot on your product where the dot should sit**. On a model with no hotspots yet, placement is already armed when you arrive, so a double-click is all it takes. The dot lands and its settings open in the panel.

<DocImage src={require('@site/static/img/editor-hotspots-placera.webp').default} alt="Double-clicking the product to place a dot" width={700} />

The same gesture moves a dot later: press **Move the dot** in its row and double-click where it should sit instead.

### What each hotspot can do {#what-each-hotspot-does}

Every hotspot has four sections in the panel:

<DocImage src={require('@site/static/img/editor-hotspots-sektioner.webp').default} alt="The four sections of an open hotspot" width={364} />

1. **Name**. The only thing required. Give it a name that says what it points at, like *Left sleeve*. Every hotspot needs its own name.
2. **When someone hovers**. An optional short line shown beside the dot. Leave it empty and the dot shows nothing on hover.
3. **What a click shows**. **Nothing**, **A note at the dot** (a sentence or two right at the dot, which closes when the visitor taps elsewhere or starts turning the model), or **A card** (the full card: text lines, an image, a button). The card is edited right on the picture, so what you see is exactly what visitors get.
4. **The camera**. **Stays still**, or **Moves to a chosen view**: press **Choose the view**, turn and zoom until the product looks the way visitors should arrive at it, and press **Use this view**. The view always stays within your camera limits from guided setup.

Once a view is chosen, you decide how much visitors can move there:

| Choice | What visitors can do at the view |
| ------ | -------------------------------- |
| **Limited movement** | Look around a little: swing around your view and zoom out, never closer in. The default. |
| **Free movement** | Move as freely as anywhere else, within your camera limits from guided setup. |
| **Hold still** | The camera stays exactly at your view until they go back. |

<DocImage src={require('@site/static/img/editor-hotspots-vy-guide.webp').default} alt="The choose-the-view wizard with the pulsing gold frame" width={700} />

### Order, changes and removal {#order-and-removal}

Click a hotspot in the list, or its dot in the picture, to open and change it. The arrow buttons move it up or down the order, and **the order is what visitors see**: it drives the numbers or letters on the dots and the order the tour follows. **Delete** removes a hotspot together with its text and its card, behind a confirmation.

---

## Step 2: Appearance {#look}

The panel asks how the dots should look. Everything here applies to every hotspot, and the dots in the picture update as you change them.

<DocImage src={require('@site/static/img/editor-hotspots-utseende.webp').default} alt="The appearance panel with labels, colours and bubbles" width={364} />

- **Label on the dots**: **None**, **Numbers** or **Letters**, in list order.
- **Colours**: ready-made themes (**Indigo**, **Dark**, **Light**, **Gold**) or **Custom** fill, outline and label colours.
- **Bubbles**: the hover text and the click-note share one bubble, so they speak with one voice. The same kind of themes, plus rounded corners. The section only appears once a hotspot actually has text.
- **Hide dots until the cursor comes near**: keeps the scene clean, with a radius you set yourself. On phones and tablets the dots stay visible, since there is no cursor to track.

---

## Step 3: Try it {#try}

The panel asks you to try your hotspots. This is the real thing: hovering shows your text, a click does what you chose, and a chosen view flies the visitor there with a **Back** button to come home again. Press **Mobile** under the picture to judge it all at phone size.

### Hotspot navigation {#hotspot-navigation}

With at least two hotspots, you can put small controls in the corner of the scene that let visitors step through your hotspots in order:

<DocImage src={require('@site/static/img/editor-hotspots-navigering.webp').default} alt="The hotspot navigation section" width={364} />

- **Off** keeps the scene exactly as before. **Arrows** gives previous/next. **Arrows + tour** adds a play button.
- **Between stops** picks the transition: **Fade** or **Fly**.
- For the tour: **Seconds per stop**, and **Slow movement during each stop** with a small **Swing**, always within each hotspot's allowed movement.

The tour never plays by itself when the page loads. A visitor presses play, the tour walks the hotspots in order, and it loops until the visitor touches the scene.

<DocImage src={require('@site/static/img/editor-hotspots-rundtur.webp').default} alt="The tour playing" width={700} />

---

## Step 4: Save it {#save}

Because hotspots are added to an existing version, **Update** is preselected: your hotspots are saved into the version you opened, behind a confirmation (*Replace these settings?*), since the old settings cannot be recovered afterwards. If you would rather leave the original untouched, choose **Save as new** and give it a new name, just like in [guided setup](./setup.md#save-it).

The best part of updating: **if your website already shows this version, your hotspots appear there as soon as you save.** Nothing in the code on the page needs changing.

---

## Good to know {#good-to-know}

- **Hotspots never appear in files from the [video](./video.md) and [photo](./foto.md) flows.** They belong to the interactive experience on your website.
- **The list order is everything**: the numbers, the letters and the tour all follow it.
- **There is no limit on the number of hotspots**, but a few well-chosen ones usually read better than many.
- **Your camera limits from guided setup apply here too**: a chosen view can never take visitors anywhere your limits do not allow.
