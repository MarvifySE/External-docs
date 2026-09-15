---
draft: true
id: kort
title: Details card
sidebar_label: Details card
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Details card

*A guided flow that gives your model a details card: a card in a corner of the viewer with text, an image and a button, which visitors open when they want to know more.*

When you choose to give a model a details card in the dashboard, the editor opens in the card flow. The card opens from a small button in a corner of the viewer, and each version has one. The panel on the right walks you through the steps:

1. **The card**: what the card says, with a layout, text, an image and a button
2. **Placement**: which corner it sits in and what visitors see first
3. **Try it**: use the scene the way a visitor would
4. **Save it**: update your version, or save as a new one

<DocImage src={require('@site/static/img/editor-card-oversikt.webp').default} srcFull={require('@site/static/img/editor-card-oversikt-full.webp').default} alt="Step 1 with a layout picked, the card on the viewer and the panel on the right" width={800} />

---

## Before you start {#before-you-start}

- **A details card can be added to any model that has gone through [guided setup](./setup.md).**
- **Nothing reaches visitors until you save** in the last step. The card shows on the viewer while you work, but visitors only see it once you have saved.

---

## Step 1: The card {#card}

The card on the viewer updates as you write.

### Start from a layout {#start-from}

At the top you pick a starting point from several layouts. They arrive filled with sample text, so you only swap the words.

<DocVideo src={require('@site/static/video/card-start-from-v1-s.mp4').default} srcFull={require('@site/static/video/card-start-from-v1.mp4').default} width="85%" ratio="1920 / 1028" />

### Content {#content}

The card is built from lines, each with a style, such as a heading, plain text or a price. Add more with **Add a line**, reorder them with the arrows and remove with the cross. An empty line shows nothing to visitors.

<DocImage src={require('@site/static/img/editor-card-innehall.webp').default} srcFull={require('@site/static/img/editor-card-innehall.webp').default} alt="The content, image and button sections" width={240} />

### Image {#image}

Tick **Show an image** and enter the image address. Landscape images suit the top or bottom of the card, portrait images the space beside the text. **Position** and **Image size** decide where it goes and how much room it takes.

### Button {#button}

**Text on the button** and **Where it leads (URL)**. Both are needed for the button to show for visitors. The address is completed for you (`shop.com/product` becomes `https://shop.com/product`), and the link opens in a new tab.

### Advanced styling {#styling}

Under **Advanced styling** is the card's look: its shape and spacing, font, colours and the button's styling. The corner the card sits in is not chosen here but in the next step.

<DocImage src={require('@site/static/img/editor-card-stil.webp').default} srcFull={require('@site/static/img/editor-card-stil.webp').default} alt="Advanced styling open with the card's style controls" width={240} />

### Remove the card {#remove}

If you opened a version that already has a card, **Remove the card** sits at the bottom of the panel and takes you to the save step without it.

---

## Step 2: Placement {#look}

<DocImage src={require('@site/static/img/editor-card-placering.webp').default} srcFull={require('@site/static/img/editor-card-placering.webp').default} alt="The corner picker, Start as a button and the button settings" width={240} />

- **Corner of the picture**: which corner the card sits in. The corner applies both to the open card and to the button it closes into.
- **Start as a button**: the card loads closed, as the small button, and opens when a visitor presses it. On phones the card always starts as the button, whatever you choose here.
- **The button**: what visitors press to open the card once it is closed. Type the text or pick one of the suggestions, and choose the button's colour and text colour.

> **Note:** While the pointer is over the button settings, the card on the viewer closes into the button, so you can see what you are colouring. Move the pointer away and the card opens again.

<DocVideo src={require('@site/static/video/card-pill-v1-s.mp4').default} srcFull={require('@site/static/video/card-pill-v1.mp4').default} width="85%" ratio="1920 / 1028" />

---

## Step 3: Try it {#try}

Use the scene the way a visitor would: open and close the card, and check that it does not cover the product. At **Mobile** size (the button under the viewer) the card starts as the button, as it does on a phone, and opens as a sheet from the bottom edge.

**Desktop**, **Mobile** and **Back to full size** each show the card as a fresh page load would.

<DocVideo src={require('@site/static/video/card-mobile-v1-s.mp4').default} srcFull={require('@site/static/video/card-mobile-v1.mp4').default} width="70%" ratio="1540 / 1028" />

---

## Step 4: Save it {#save}

Because the details card is added to an existing version, **Update** is preselected: the card is saved into the version you opened. If you would rather leave the original untouched, choose **Save as new** and give it a new name, just like in [guided setup](./setup.md#save-it).

Saving is what turns the card on for visitors. If your website already shows this version, the card appears there as soon as you have saved. Nothing in the code on the page needs changing.

---

## Good to know {#good-to-know}

- **The card never appears in files from the [video](./video.md) and [photo](./foto.md) flows.** It is part of the model on your website, not of the exported files.
- **If the model also has [hotspots](./hotspots.md)**, the card fades out while a visitor is at one and comes back afterwards.
- **Long cards scroll inside the card.** The mouse wheel over the card scrolls the card, not the model. On phones the card is a sheet from the bottom edge with a grab bar, and closes with a swipe down.
