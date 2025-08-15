---
id: marvify-viewer
title: Marvify Viewer
sidebar_label: Marvify Viewer
---
# Marvify Model Viewer

*A drop‑in web component for rendering 3D product models on your site.*

---
## What You Need

To use Marvify with your own models, you must be a Marvify customer with provisioned models by us. However, you can try out the viewer without an account by using our demo model. Simply set `model-id="demo"` and ensure you are running your development site on `localhost` in your browser. The demo model is only available when served from `localhost`, so testing via an IP address will not work (e.g. 127.0.0.1).


## Quick Start

Embed our module script once, then place the custom element where you want the viewer to render.

```html
<!-- Load the viewer runtime -->
<script src="https://js.marvify.io/marvify.js" type="module"></script>

<!-- Add the viewer -->
<marvify-model-viewer
  model-id="demo"
  style="width: 300px; height: 300px"
></marvify-model-viewer>
```

**Minimum required attributes:** `model-id`, `width`.


---

## Code Examples

**Basic embed**

```html
<script src="https://js.marvify.io/marvify.js" type="module"></script>

<marvify-model-viewer model-id="demo" style="width: 400px; height: 300px"></marvify-model-viewer>
```

**With explicit sizing attributes**

```html
<marvify-model-viewer
  model-id="demo"
  width="100%"
  height="420px"
></marvify-model-viewer>
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
  fov="55"
  minZoom="0.5" maxZoom="3"
  minCameraTilt="10" maxCameraTilt="85"
  initialCameraAngle="45 10"
></marvify-model-viewer>
```

---

## Custom Attributes

| Attribute                        | Type / Range         |        Default | Description                                                                                                                  |
| -------------------------------- | -------------------- | -------------: | ---------------------------------------------------------------------------------------------------------------------------- |
| `model-id` **(required)**        | string               |              — | model identifier in Marvify's service.                                                        |
| `width` **(required)**                         | CSS length           |              — | Sets element width (e.g., `320px`, `100%`).                                 |
| `height`                         | CSS length           |              — | Sets host element height.                                                                                                    |
| `fullscreen`                     | boolean   |            off | When present, the viewer takes over the viewport (`position: fixed; top/left: 0; width/height: 100vw/100vh; z-index: 9999`). |
| `bgColor`                        | CSS color            |      `#f2f2f2` | Background color. Hex, rgb(a) supported.                                                                               |
| `fov`                            | number (deg)         |           `55` | Camera field‑of‑view.                                                                                                        |                                                                                                        |
| `minZoom`, `maxZoom`             | number               |           auto | Minimum and Maximum zoom allowed                                   |
| `minCameraTilt`, `maxCameraTilt` | number (deg)         |    `10` / `85` | Pitch angle clamps (lock camera from going up or down too much).                                                                                                          |
| `initialCameraAngle`             | string `"yaw pitch"` | `"0 0"` | change starting camera position horizontal vertical (e.g. -45 90)               |


**Behavioral notes**

* If neither `width`/`height` nor `fullscreen` is set, size the host via CSS. The component enforces a minimum height fallback when collapsed.

---


> Only one viewer is active at a time by design. Activating another instance resets the previously active one, to ensure performance.

---

## Troubleshooting

* **Nothing renders:** Verify `model-id` is correct and provisioned. Check that your page height/width is non‑zero.
* **Zoom feels too strong/weak:** Tune `minZoom`/`maxZoom`; values are relative to model size.
* **Camera starts at odd angle:** Use `initialCameraAngle="yaw pitch"` to override the default.
* **Layout clipped on small tiles:** Provide explicit `height` on the host container (e.g., cards in a grid).

