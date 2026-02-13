---
id: webpage-integration
title: How to add FOTO-3D to your webpage
sidebar_label: Webpage Integration
---

# How to add FOTO-3D to your webpage

This guide gives an overview of how to add the Marvify FOTO-3D viewer to a webpage. You will see how the viewer works in a simple standalone example, followed by a more advanced layout that uses interactive image tiles. The same steps shown here apply to product pages, galleries and other custom webpages.

## Example: Marvify viewer on a product page

Here is a short demonstration showing the Marvify FOTO-3D viewer running with a single product model on a clean, simple product-page.

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

Start by opening the HTML file or template for your webpage. Decide where the 3D viewer should appear. This is often placed near product images, under item descriptions or inside a dedicated section for interactive content.

This article is an overview of how to integrate the Marvify viewer on your webpage. For more in-depth technical documentation, visit [docs.marvify.io](https://docs.marvify.io/en/snabbstart/marvify-viewer/).

## 1. Load the viewer script

Add the Marvify viewer script once in the head section of your webpage. This makes the custom element available anywhere in your layout and ensures that the viewer is ready when the page loads.

```html
<script src="https://js.marvify.io/marvify.js" type="module"></script>
```

## 2. Insert the viewer where you want the 3D model to appear

Place the viewer element in your HTML where your main product media lives. In the example product page it sits directly in the left column as the primary product viewer.

```html
<div class="viewer-wrapper">
  <marvify-model-viewer
    model-id="your-model-id"
    style="width: 100%; height: 100%">
  </marvify-model-viewer>
</div>
<p class="viewer-note">
  Rotate, zoom and inspect the product directly in the Marvify FOTO-3D viewer.
</p>
```

Replace `model-id="your-model-id"` with your own model identifier once your model is provisioned in our service. If you use the demo model, ensure that you run your page from `localhost`.

## 3. Adjust the size or layout as needed

You can set the viewer size using inline styles or attributes.

```html
<marvify-model-viewer
  model-id="your-model-id"
  width="100%"
  height="420px">
</marvify-model-viewer>
```

Fullscreen mode is also supported if you want the model to open over the entire viewport.

```html
<marvify-model-viewer model-id="your-model-id" fullscreen></marvify-model-viewer>
```

## 4. Optional camera and background adjustments

You can configure the start angle, zoom limits and background color to match your pages visual style and to fit your product in view.

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

## Example: Marvify FOTO-3D in a lookbook style image grid

After you have the basic viewer working, you can also place it inside more advanced layouts. One example is a fashion lookbook page with an image grid, where each outfit can be opened in 3D.

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

The lookbook example is built with regular HTML, CSS and a small script. At a high level, Marvify is used in the page like this:

- Each image is wrapped in a clickable container that includes a `data-model-id` attribute pointing to the 3D model that should be shown for that image.
- When a visitor clicks on a container, a script replaces the image inside that container with a `<marvify-model-viewer>` element that fills the same space. The viewer uses the `model-id` from the container.
- The script keeps track of which tile is active so that only one 3D viewer is open at a time. If the visitor clicks a different image, the previous tile is restored to its original photo.
- Each active viewer shows a small fullscreen icon in the corner. When that icon is pressed, a larger Marvify viewer opens in the center of the screen on top of a slightly darkened background. Closing the overlay returns the visitor to the lookbook view.

In HTML, the containers for the images can look similar to this:

```html
<div class="lookbook-media" data-model-id="modelname">
  <img src="pics/look-01.jpg" alt="Look 01">
  <div class="lookbook-label">Click for 3D</div>
</div>
```

A short script can then handle the interaction. It:

- finds all elements with the class `lookbook-media`
- stores their original content (image and label) so it can be restored
- on click, swaps the image for a `marvify-model-viewer` that fills the same card
- adds a small fullscreen button inside the card
- opens a larger viewer in an overlay when the fullscreen button is pressed
- closes the overlay when the visitor clicks the close icon or the dark background

A simplified version of the click logic could look like this:

```html
<script>
  let activeContainer = null;

  document.querySelectorAll('.lookbook-media').forEach(container => {
    const modelId = container.dataset.modelId;
    container.dataset.originalHtml = container.innerHTML;

    container.addEventListener('click', () => {
      if (container.querySelector('marvify-model-viewer')) return;

      if (activeContainer && activeContainer !== container) {
        activeContainer.innerHTML = activeContainer.dataset.originalHtml;
        activeContainer.style.width = '';
        activeContainer.style.height = '';
      }

      const rect = container.getBoundingClientRect();
      container.style.width = rect.width + 'px';
      container.style.height = rect.height + 'px';

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

The lookbook shown in the video is simply one example of how the Marvify viewer can be used in a more visual layout. You can integrate the viewer in any way that suits your own webpage, design style or product flow.
