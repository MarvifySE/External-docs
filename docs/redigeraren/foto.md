---
id: foto
title: Photos
sidebar_label: Photos
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Photos

*A guided flow that takes photos of your 3D model, framed and sized for your website and social media.*

When you choose to create media from a model in the dashboard, the editor opens with one question, then walks you through two short steps. The result is an image file in your downloads folder: a JPG ready to post, or a PNG for a product page, with or without a background.

---

## Before you start {#before-you-start}

- **Nothing here changes your model.** This flow produces files. Your saved model settings, including everything from [guided setup](./setup.md), are untouched.
- **Files stay on your computer.** Photos are captured in your browser and saved straight to your downloads folder. Nothing is uploaded or stored on Marvify's side.

---

## Choosing photos {#choosing-photos}

The flow opens with a single question: **What are we making?** Pick **Photos**. (The **Video** choice has [its own guide](./video.md).)

<DocImage src={require('@site/static/img/editor-media-val.webp').default} alt="The What are we making question with the Video and Photos choices" width={600} />

---

## Step 1: What format? {#what-format}

Different platforms want different shapes. Pick where the photo is going, or set your own size:

<DocImage src={require('@site/static/img/editor-media-format.webp').default} alt="The format choices" width={364} />

| Format | Meant for |
| ------ | --------- |
| **Portrait (9:16)** | TikTok, Reels, YouTube Shorts. Fills the whole screen. |
| **Feed (4:5)** | Instagram and Facebook feed posts. Takes more room than a square. |
| **Square (1:1)** | Works anywhere. Crops the least when you are not sure. The default for photos. |
| **Landscape (16:9)** | YouTube, your website, product pages. |
| **Custom** | Set your own shape with exact width and height. |

**Custom** shows two fields for width and height, with a line underneath telling you the exact pixel size the file will be saved at.

As soon as a format is chosen, a bright rectangle appears over the model with everything outside it dimmed. **That frame is exactly what gets captured.** The camera is held still on this step; framing comes in step 2.

---

## Step 2: How should it look? {#how-should-it-look}

Here you steer the camera directly: **left drag** turns the product, **right drag** slides it around the frame, **scroll** zooms, and a **double-click** aims the camera where you click. Line the product up inside the bright frame. A small legend in the bottom-left corner shows these controls, and its **?** opens a short guide with a demo clip.

<DocVideo src={require('@site/static/video/framing-v1-s.mp4').default} srcFull={require('@site/static/video/framing-v1.mp4').default} ratio="1540 / 1028" />

**Background color** sits at the top of the panel, working the same way as in guided setup: the color applies immediately, and matching it to where the photo will be shown makes the edges disappear.

### Quality {#photo-quality}

Two choices, with the delivered pixel size always shown in the panel:

<DocImage src={require('@site/static/img/editor-media-foto-kvalitet.webp').default} alt="The two quality choices with the size readout" width={364} />

- **Ready to post** (the default): sized for Instagram, TikTok and the rest. Uploads anywhere. Saved as JPG, for example 1080 × 1080 for a square or 1080 × 1920 for portrait.
- **Best quality**: bigger, for a product page or for editing later. Saved as PNG, around 2048 pixels on the long edge.

### No background {#no-background}

With **Best quality** selected, a **No background** checkbox becomes available. It saves the photo without a background, ready to drop onto any color. While it is on, the editor shows a checkerboard behind the product: that is real transparency, exactly what the file will contain.

<DocVideo src={require('@site/static/video/photo-no-background-v1-s.mp4').default} srcFull={require('@site/static/video/photo-no-background-v1.mp4').default} width="85%" ratio="1920 / 1028" />

> **Note:** Removing the background also removes any shadow or support shapes that belong to the scene, so check on the checkerboard that the product still looks whole before you shoot.

*Ready to post* files cannot hold a see-through background, which is why the checkbox needs *Best quality*.

### Take the photo {#take-the-photo}

Press **Take photo**. The file is saved straight to your downloads folder. Reframe and shoot as many as you like.

---

## Where the files go {#where-the-files-go}

Photos are saved by your browser to its normal downloads folder, named after the model, its version and the date:

```
my-product-web-2026-08-25.jpg
```

Files carry **no watermark**. If you shoot twice on the same day, your browser adds a number to the second file's name.

---

## Starting over {#starting-over}

- **Back** on the first step returns to the video-or-photos question and keeps your settings, so you can take photos and make a video in the same visit.
- **Reset** in the panel header clears the current job: your framing and settings. The editor asks first (*Start over?*), because this cannot be undone.

There is no save step and no finish screen. When you have the photos you came for, close the tab.

---

## Good to know {#photo-good-to-know}

- **Your model's own motion is paused** while you work here, so a turntable or animation from guided setup never fights with the shot you are framing.
- **The camera can go anywhere while you frame.** Zoom limits from guided setup apply to visitors on your website, not to you taking a photo.
- **Hotspots never appear in the files.** Photos capture the product alone.
