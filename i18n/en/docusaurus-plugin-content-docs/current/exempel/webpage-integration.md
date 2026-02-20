---
id: webpage-integration
title: How to add Marvify 3D to your webpage
sidebar_label: Webpage Integration
---

# How to add Marvify 3D to your webpage

This guide walks through two practical examples of embedding the Marvify 3D viewer in a standard webpage: a single-model product page and an interactive lookbook grid. The examples here cover two specific integration scenarios to help you get started. The viewer can be embedded in many different ways depending on your layout, framework, and design. For the full technical documentation on the viewer element itself, see the [Marvify Viewer guide](../snabbstart/marvify-viewer.md).

## Example: Marvify viewer on a product page

Here is a short demonstration showing the Marvify 3D viewer running with a single product model on a clean, simple product page.

<p align="center">
  <video
    width="80%"
    autoPlay
    loop
    muted
    playsInline
    style={{ display: 'block' }}
  >
    <source
      src={require('@site/static/img/size_visualization_optimized.mp4').default}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</p>

---

## 1. Load the viewer script

Add the Marvify viewer script once in the `<head>` of your page. This makes the custom element available anywhere in your layout and ensures the viewer is ready when the page loads.

```html
<script src="https://js.marvify.io/marvify.js" type="module"></script>
```

If you are working with your own provisioned models outside of production, you will also need a development token. See [Development token](../snabbstart/marvify-viewer.md#dev-token-for-development) for details.

## 2. Place the viewer

Add the `<marvify-model-viewer>` element wherever you want the 3D model to appear in your HTML.

```html
<marvify-model-viewer
  model-id="your-model-id"
  width="100%"
  height="400px">
</marvify-model-viewer>
```

Replace `model-id="your-model-id"` with your own model identifier once your model is provisioned. If you are using the demo model, serve your page from `localhost`.

Width and height can be set as attributes or via CSS. Fullscreen mode takes over the entire viewport:

```html
<marvify-model-viewer model-id="your-model-id" fullscreen></marvify-model-viewer>
```

## 3. Optional: camera and background configuration

You can configure the starting angle, zoom limits, and background color to match your page's visual style and to frame your product well.

```html
<marvify-model-viewer
  model-id="your-model-id"
  bgColor="#f7f7f7"
  fov="55"
  minZoom="0.5" maxZoom="3"
  minCameraTilt="10" maxCameraTilt="85"
  initialCameraAngle="45 10">
</marvify-model-viewer>
```

For a full list of available attributes, see [Custom attributes](../snabbstart/marvify-viewer.md#custom-attributes).

---

## Example: Marvify 3D in a lookbook image grid

After you have the basic viewer working, you can place it inside more advanced layouts. The video below shows one example: an image grid where clicking a tile activates the 3D viewer in place, and pressing the expand icon opens it in a fullscreen overlay.

<p align="center">
  <video
    width="30%"
    autoPlay
    loop
    muted
    playsInline
    style={{ display: 'block' }}
  >
    <source
      src={require('@site/static/img/lookbook_optimized.mp4').default}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</p>

The lookbook is built with plain HTML, CSS, and a small script. At a high level:

- Each image is wrapped in a clickable container with a `data-model-id` attribute pointing to the 3D model for that image.
- When a visitor clicks a container, the image is replaced with a `<marvify-model-viewer>` element that fills the same space.
- Only one viewer is active at a time. Clicking a different image restores the previous tile to its original photo.
- Each active tile shows a small expand icon. Pressing it opens the model in a fullscreen overlay with a darkened background. Clicking the close button or the background closes the overlay.

In HTML, the image containers can look like this:

```html
<div class="lookbook-media" data-model-id="modelname">
  <img src="pics/look-01.jpg" alt="Look 01">
  <div class="lookbook-label">Click for 3D</div>
</div>
```

The script below handles the full interaction: click-to-swap and the fullscreen overlay. This is one way to approach it. Adapt the logic to fit your own markup and event handling.

```html
<script>
  let activeContainer = null;

  // Build the fullscreen overlay once and add it to the page
  const overlay = document.createElement('div');
  overlay.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:1000;align-items:center;justify-content:center;';

  const overlayViewer = document.createElement('marvify-model-viewer');
  overlayViewer.setAttribute('autoplay', '');
  overlayViewer.style.cssText = 'width:80vw;height:80vh;';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = 'position:absolute;top:1rem;right:1rem;font-size:1.5rem;background:none;border:none;color:white;cursor:pointer;';

  overlay.appendChild(overlayViewer);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  function closeOverlay() {
    overlay.style.display = 'none';
    overlayViewer.removeAttribute('model-id');
  }

  closeBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  // Handle tile clicks
  document.querySelectorAll('.lookbook-media').forEach(container => {
    const modelId = container.dataset.modelId;
    container.dataset.originalHtml = container.innerHTML;

    container.addEventListener('click', (e) => {
      // Open overlay when the expand button is pressed
      if (e.target.classList.contains('fullscreen-button')) {
        overlay.style.display = 'flex';
        overlayViewer.setAttribute('model-id', modelId);
        return;
      }

      // Do nothing if this tile already has the viewer active
      if (container.querySelector('marvify-model-viewer')) return;

      // Restore the previously active tile
      if (activeContainer && activeContainer !== container) {
        activeContainer.innerHTML = activeContainer.dataset.originalHtml;
        activeContainer.style.width = '';
        activeContainer.style.height = '';
      }

      // Lock dimensions before swapping content so the tile does not collapse
      const rect = container.getBoundingClientRect();
      container.style.width = rect.width + 'px';
      container.style.height = rect.height + 'px';

      // Swap the image for the viewer and add the expand button
      container.innerHTML = `
        <marvify-model-viewer
          model-id="${modelId}"
          autoplay
          style="display:block;width:100%;height:100%">
        </marvify-model-viewer>
        <button class="fullscreen-button" type="button">⛶</button>
      `;

      activeContainer = container;
    });
  });
</script>
```

`autoplay` tells the viewer to start loading immediately when the tile is clicked, without waiting for an additional user interaction.

The lookbook shown in the video is one example of a more visual layout. You can integrate the viewer in any way that fits your own design. For a full list of available viewer attributes, see the [Marvify Viewer guide](../snabbstart/marvify-viewer.md).
