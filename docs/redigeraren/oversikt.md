---
id: oversikt
title: The editor
sidebar_label: Overview
---
import DocImage from '@site/src/components/DocImage';

# The Marvify editor

*A browser-based editor where you prepare your 3D models for your website.*

The Marvify editor is where a model is prepared for use on the web. It runs entirely in your browser and works directly on the models in your Marvify account. It is always opened **from your Marvify dashboard**: pick a model and a task there, and the editor opens in a new browser tab with that model already loaded.

<DocImage src={require('@site/static/img/editor-oversikt.webp').default} srcFull={require('@site/static/img/editor-oversikt-full.webp').default} alt="The Marvify editor open in a browser with a 3D model loaded" width={800} />

---

## Guided tasks {#guided-tasks}

The editor currently guides you through:

- **[Guided setup](./setup.md)**: prepares a model for your website. The view visitors start at, how far they can zoom and turn, whether the model moves on its own, and the code snippet to paste into your page.
- **[Videos](./video.md)**: creates video clips of your model, framed and sized for your website and social media. The files are saved to your computer.
- **[Photos](./foto.md)**: takes photos of your model, ready to post or in full quality, with or without a background.

More guides are on the way and will be documented here as they become available.

---

## Finding your way around {#finding-your-way-around}

The screen has two main areas:

- **The picture of your model** fills most of the window. You move around it with the mouse: drag to turn, scroll to zoom.
- **The top bar** shows which model and version you have open, a book button that opens the relevant guide in this documentation, and a light/dark theme toggle.

When you arrive from the dashboard for a specific task, a **step-by-step panel** also appears on the right side of the screen. It walks you through that task one step at a time, so you never face all of the editor's controls at once.

---

## One model, many versions {#one-model-many-versions}

A single model can be saved with any number of **named versions**. Each version keeps its own settings (starting view, camera limits, background color, motion) while the 3D model itself stays the same.

A version is identified as `model@name`, for example `my-product@web`. That full id is what you use on your website to show that particular version. This lets you keep one version tuned for your product page and another for a campaign, without touching the model itself.

You choose or create a version when you save at the end of a guided task. To change a version later, open the same model from your dashboard and pick that name.

---

## Nothing happens by accident {#nothing-happens-by-accident}

While you work in the editor, nothing is published or changed on your website. Guided setup only takes effect when you save at its final step, and only for the version you saved; the video and photo flows never change the model at all, they just produce files on your computer. Closing the tab before saving leaves everything exactly as it was.
