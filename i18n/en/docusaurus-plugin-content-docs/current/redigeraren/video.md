---
id: video
title: Videos
sidebar_label: Videos
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Videos

*A guided flow that turns your 3D model into video clips, framed and sized for your website and social media.*

When you choose to create media from a model in the dashboard, the editor opens with one question, then walks you through two short steps. The result is an MP4 file in your downloads folder, ready to upload anywhere.

---

## Before you start {#before-you-start}

- **Video creation needs Chrome or Edge.** Other browsers may not be able to render the file at all, or may deliver lower video quality. The editor tells you if yours is not supported.
- **Nothing here changes your model.** This flow produces files. Your saved model settings, including everything from [guided setup](./setup.md), are untouched.
- **Files stay on your computer.** The video is rendered in your browser and saved straight to your downloads folder. Nothing is uploaded or stored on Marvify's side.

---

## Choosing video {#choosing-video}

The flow opens with a single question: **What are we making?** Pick **Video**. (The **Photos** choice has [its own guide](./foto.md).)

<DocImage src={require('@site/static/img/editor-media-val.webp').default} alt="The What are we making question with the Video and Photos choices" width={600} />

---

## Step 1: What format? {#what-format}

Different platforms want different shapes. The ready-made formats cover the common ones, from portrait for TikTok and Reels to landscape for YouTube and your website, and **Custom** takes an exact width and height.

<DocImage src={require('@site/static/img/editor-media-format.webp').default} alt="The format choices" width={364} />

As soon as a format is chosen, a bright rectangle appears over the model with everything outside it dimmed. **That frame is exactly what gets captured.** It stays on screen through the whole flow, so what you see inside it is what ends up in the file.

<DocImage src={require('@site/static/img/editor-media-ram.webp').default} alt="The bright capture frame over the model" width={620} />

The camera is held still on this step; framing comes in step 2.

---

## Step 2: Make your clip {#make-your-clip}

A clip is a camera move played over your model. Pick how it moves, then frame it with your mouse.

### Pick a shot {#pick-a-shot}

On arrival, the shot picker opens by itself. It offers **Build your own camera move** at the top, then ready-made shots in two groups:

<DocImage src={require('@site/static/img/editor-media-galleri.webp').default} alt="The shot picker with ready-made camera moves" width={368} />

- **Plays once**: has a beginning and an end, so a feed replaying it shows a cut. An effect at each end turns that into a fade.
- **Loops**: ends on the exact frame it opened on, so a feed replays it with no visible cut.

Every ready-made shot adapts itself to your model's size and proportions, so a shot made for a tall bottle works just as well on a low, wide sofa.

<DocImage src={require('@site/static/img/editor-media-rorelse.webp').default} alt="The selected shot with the Change link beside it" width={364} />

### Frame it with your mouse {#frame-the-clip}

The clip plays on a loop in the viewer while you work. Your mouse adjusts the framing of the whole move rather than steering the camera directly: dragging tilts the move or slides the product around inside the frame, and scrolling moves closer or further away.

<DocVideo src={require('@site/static/video/framing-v1-s.mp4').default} srcFull={require('@site/static/video/framing-v1.mp4').default} ratio="1540 / 1028" />

For a ready-made shot, a **Starting angle** slider turns the whole move around the product, deciding which side the clip opens on. If you want full control of the camera positions themselves, press **Edit** to convert the shot into stops you can move by hand (see [Build your own shot](#build-your-own) below).

### Length and effects {#length-and-effects}

<DocImage src={require('@site/static/img/editor-media-langd-effekter.webp').default} alt="The clip length field and the two effect choices" width={364} />

**Clip duration** sets how many seconds the clip runs. Each ready-made shot comes with a sensible length.

For shots that play once, two dropdowns appear: **Effect at the start** and **Effect at the end**. These build the product up or take it apart, so the clip reads as 3D rather than a photo. Each effect takes a short, fixed slice at its end of the clip.

**Background color** sits below, working the same way as in guided setup: the color applies immediately, and matching it to where the clip will be shown makes the edges disappear.

### Create the clip {#create-the-clip}

<DocImage src={require('@site/static/img/editor-media-skapa.webp').default} alt="The Create clip button with the output size below it" width={364} />

Press **Create clip**. The video is rendered frame by frame in your browser, so keep the tab open and in front until it finishes. On a slower computer the render takes longer, but the finished file is identical to one made on a fast machine. **Cancel** stops the render and throws it away; no half-finished file is saved.

When it finishes, the MP4 lands in your downloads folder.

### Reusing a shot on another product {#reusing-a-shot}

**Copy shot** copies your current camera move to the clipboard as a piece of text. Open **Videos** on another model from the dashboard, press **Paste shot**, and the same move is applied there, adapted to the new product's size. The text is the saved copy, so paste it into a note or document if you want to keep it for later.

### Advanced {#advanced}

Ticking **Advanced** reveals exact-number fields for the framing. Everything here can also be done with the mouse, so most clips never need it.

---

## Build your own shot {#build-your-own}

If none of the ready-made shots fit, pick **Build your own camera move** in the shot picker, or press **Edit** on a ready-made shot to start from its positions. You place camera stops one by one and the finished clip glides through them in order, with lingers, jump cuts, looping and smoothness under your control. The builder is a tool of its own and has [a dedicated guide](./bygg.md).

When your shot is ready, you continue like any other: frame it with the mouse, set the length, and press **Create clip**.

---

## Where the files go {#where-the-files-go}

The MP4 is saved by your browser to its normal downloads folder, named after the model, its version and the date:

```
my-product-web-2026-08-25.mp4
```

MP4 (H.264) uploads directly to every major platform. Files carry **no watermark**. If you export twice on the same day, your browser adds a number to the second file's name.

---

## Starting over {#starting-over}

- **Back** on the first step returns to the video-or-photos question and keeps everything you have built, so you can make a video and take photos in the same visit.
- **Reset** in the panel header clears the current job: your shot, framing and settings. This cannot be undone.

There is no save step and no finish screen. When you have the clips you came for, close the tab.

---

## If the render fails {#if-the-render-fails}

- **Switch to Chrome or Edge.** Most render failures come down to the browser lacking a video encoder.
- **Try a smaller custom size.** Very large sizes can exhaust the browser's encoder. Step the pixels down and try again.
- **Keep the tab open and in front** until the file lands in your downloads. Closing the tab or switching away cancels the render.

If none of that helps, [contact support](../felsokning/kontakta-support.md).

---

## Good to know {#video-good-to-know}

- **Your model's own motion is paused** while you work here, so a turntable or animation from guided setup never fights with the shot you are framing.
- **The camera can go anywhere while you frame.** Zoom limits from guided setup apply to visitors on your website, not to you making a file.
- **Hotspots and the details card never appear in the files.** Videos capture the product alone.
