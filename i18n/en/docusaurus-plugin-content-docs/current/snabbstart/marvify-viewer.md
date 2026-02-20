---
id: marvify-viewer
title: Marvify Viewer
sidebar_label: Marvify Viewer
---
# Marvify Model Viewer

*A drop-in web component for rendering 3D product models on your site.*

Marvify 3D creates photorealistic 3D models of your products from physical objects, capturing every detail including shape, color, and texture. The result is an interactive experience your customers can view from every angle, zoom into, and explore directly in the browser on desktop and mobile.

<p align="center">
  <video
    width="75%"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src={require('@site/static/img/cap_for_docs_optimized.mp4').default}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</p>

---

## What you need

To use Marvify with your own models, you must be a Marvify customer with provisioned models. However, you can try out the viewer without an account using the demo model. Set `model-id="demo"` and serve your page from `localhost`. The demo model only works on `localhost`. Testing via an IP address such as `127.0.0.1` will not work.

---

## Quick start

Embed the module script once in your `<head>`, then place the `<marvify-model-viewer>` element where you want the viewer to appear.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example</title>

  <!-- Load the viewer module in <head> -->
  <script src="https://js.marvify.io/marvify.js" type="module"></script>
</head>
<body>

  <marvify-model-viewer
    model-id="demo"
    width="100%"
    height="300px"
  ></marvify-model-viewer>

</body>
</html>
```

**Minimum required attributes:** `model-id`, plus `width` or `height`.

Width and height may be provided as attributes or via regular CSS. At least one dimension must resolve to a non-zero size unless `fullscreen` is used.

---

## Examples

**Explicit sizing via CSS**

```html
<marvify-model-viewer
  model-id="demo"
  style="width: 400px; height: 300px">
</marvify-model-viewer>
```

**Fullscreen takeover**

```html
<marvify-model-viewer model-id="demo" fullscreen></marvify-model-viewer>
```

**Camera tuning**

```html
<marvify-model-viewer
  model-id="demo"
  bgColor="#f7f7f7"
  height="300px"
  fov="55"
  minZoom="0.5" maxZoom="3"
  minCameraTilt="10" maxCameraTilt="85"
  initialCameraAngle="45 10"
></marvify-model-viewer>
```

---

<a id="dev-token-for-development"></a>
<a id="dev-token-for-utveckling-start"></a>

## Development token

When working with your own provisioned models outside of production, for example to position, tune, and configure models before going live, you must use a Marvify **development token**.

Add the dev token as an attribute on the script tag that loads the viewer:

```html
<script
  src="https://js.marvify.io/marvify.js"
  type="module"
  data-marvify-devtoken="YOUR_DEV_TOKEN">
</script>
```

Your dev token is available in your **Marvify online account**. Log in to view or regenerate it.

Without a dev token, your provisioned models will not load in development environments. Model access is normally validated against your registered domain, and a dev token temporarily bypasses that check so you can work locally or in staging.

> **Warning:** Only one dev token is valid at a time. Creating a new token immediately invalidates the previous one.

> **Warning:** Dev tokens are for development only. Always remove the dev token before deploying to production. If a dev token is accidentally left in a production build, regenerating the token will cause all models to stop loading until the page is updated and redeployed without it.

---

<a id="custom-attributes"></a>

## Custom attributes

| Attribute                        | Type or range        | Default   | Description |
| -------------------------------- | -------------------- | --------- | ----------- |
| `model-id` **(required)**        | string               | n/a       | Model identifier in Marvify's service. |
| `width`                          | CSS length           | n/a       | Sets element width (e.g. `320px`, `100%`). |
| `height`                         | CSS length           | n/a       | Sets element height. |
| `fullscreen`                     | boolean              | false     | Takes over the viewport using fixed positioning. |
| `autoplay`                       | boolean              | false     | Loads the model immediately without waiting for user interaction. |
| `bgColor`                        | CSS color            | `#f2f2f2` | Background color. Hex, rgb, and rgba supported. |
| `fov`                            | number (deg)         | `55`      | Camera field of view. |
| `minZoom`                        | number               | auto      | Minimum allowed zoom distance relative to model size. |
| `maxZoom`                        | number               | auto      | Maximum allowed zoom distance relative to model size. |
| `minCameraTilt`                  | number (deg)         | `10`      | Minimum vertical orbit angle. |
| `maxCameraTilt`                  | number (deg)         | `85`      | Maximum vertical orbit angle. |
| `initialCameraAngle`             | string `"yaw pitch"` | auto      | Initial camera yaw and pitch in degrees (example: `"-45 30"`). |
| `allowPan`                       | boolean              | false     | Enables right-click mouse panning and two-finger touch panning. |
| `autorotate`                     | boolean              | true      | Enables automatic camera rotation. Set to `false` to disable. |
| `autorotateSpeed`                | number (deg/sec)     | `10`      | Speed of automatic rotation. |
| `autorotateResume`               | number (seconds)     | `3`       | Delay after user interaction before auto rotation resumes. |
| `stats`                          | boolean              | false     | Enables performance and debug stats overlay. |

**Behavioral notes**

- If neither `width`, `height`, nor `fullscreen` is set, the host element must be sized via CSS. The component enforces a minimum height fallback to avoid collapsing to zero.
- Boolean attributes are enabled by presence unless explicitly set to false. To disable `autorotate`, set `autorotate="false"`.
- Only one viewer is active at a time. Activating a second instance resets the first to preserve performance. `autoplay` therefore only applies to the first activated viewer on the page.
- Setting `autorotateResume` to `0` disables automatic resumption of rotation after user interaction.

---

## Carousel

The `carousel` attribute allows multiple models to be viewed within a single viewer instance.

| Attribute  | Type       | Description |
| ---------- | ---------- | ----------- |
| `carousel` | JSON array | A list of models to cycle through. Each item must include `model-id` and may include any other viewer attributes to override for that slide. |

**Notes**

- Carousel items can override viewer-level settings such as `bgColor`, `initialCameraAngle`, or zoom limits on a per-slide basis.
- The viewer does not render navigation UI automatically to avoid clashing with your site's style. Slide controls must be implemented by you using the global helpers below.
- Use `MarvifyCarousel.next(viewerId)` and `MarvifyCarousel.prev(viewerId)` to advance or go back a slide.

**Example**

```html
<marvify-model-viewer
  id="mixed-carousel"
  bgColor="#f2f2f2"
  carousel='[
    { "model-id": "model_a", "bgColor": "#ffffff" },
    { "model-id": "model_b" }
  ]'>
</marvify-model-viewer>

<button type="button" onclick="MarvifyCarousel.prev('mixed-carousel')">Prev</button>
<button type="button" onclick="MarvifyCarousel.next('mixed-carousel')">Next</button>
```

`model_a` applies its own `bgColor`, overriding the viewer default for that slide only. The `id` on `<marvify-model-viewer>` must match the argument passed to `MarvifyCarousel.next()` and `.prev()`.

---

## VR

These attributes control WebXR and VR behavior when supported by the browser and device.

| Attribute            | Type    | Default | Description |
| -------------------- | ------- | ------- | ----------- |
| `enable-vr`          | boolean | false   | Enables VR mode. When active, an Enter VR button appears on WebXR-compatible devices. |
| `vr-user-distance`   | number  | auto    | Distance offset in meters for the initial camera position when entering VR. |
| `vr-user-height`     | number  | auto    | Height offset in meters relative to the user's position when entering VR. |
| `vr-minZoom`         | number  | auto    | Minimum allowed zoom radius in VR. |
| `vr-maxZoom`         | number  | auto    | Maximum allowed zoom radius in VR. |

Model scale varies across products, so VR positioning usually requires per-model adjustment. Use `vr-user-distance` and `vr-user-height` to frame the model comfortably on entry, and `vr-minZoom`/`vr-maxZoom` to keep users within a useful viewing range. Values should always be tested on real hardware.

The Enter VR button only appears on WebXR-compatible devices and browsers. Enabling VR has no effect on unsupported hardware. Those visitors continue to see the standard 3D viewer.

For a full VR walkthrough, see the [VR guide](../marknadsforing-och-tips/vr-guide).

---

## Troubleshooting

- **Nothing renders:** Open your browser's developer console and check for errors. Verify `model-id` is correct and provisioned for your account. Check that the element has a non-zero width and height.
- **Model loads in development but not in production:** Confirm the dev token has been removed. Model access in production is validated against your registered domain.
- **Zoom feels too strong or too weak:** Tune `minZoom` and `maxZoom`. Values are relative to model size.
- **Camera starts at an odd angle:** Use `initialCameraAngle="yaw pitch"` to set a specific starting position.
- **Layout clipped on small tiles:** Provide an explicit `height` on the host container, for example inside grid cards.

---

## Google Analytics

The viewer supports Google Analytics 4 integration, including event tracking and Google Tag Manager routing. See the [Google Analytics integration guide](./google-analytics) for full setup instructions.
