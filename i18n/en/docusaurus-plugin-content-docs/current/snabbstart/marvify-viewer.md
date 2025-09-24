---
id: marvify-viewer
title: Marvify Viewer
sidebar_label: Marvify Viewer
---
# Marvify Model Viewer

*A drop-in web component for rendering 3D product models on your site.*

---
## What You Need

To use Marvify with your own models, you must be a Marvify customer with provisioned models by us. However, you can try out the viewer without an account by using our demo model. Simply set `model-id="demo"` and ensure you are running your development site on `localhost` in your browser. The demo model is only available when served from `localhost`, so testing via an IP address will not work (e.g. 127.0.0.1).

---

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

| Attribute                        | Type or Range        | Default | Description                                                                                                                   |
| -------------------------------- | -------------------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `model-id` **(required)**        | string               | n/a     | Model identifier in Marvify's service.                                                                                        |
| `width` **(required)**           | CSS length           | n/a     | Sets element width (e.g. `320px`, `100%`).                                                                                    |
| `height`                         | CSS length           | n/a     | Sets host element height.                                                                                                     |
| `fullscreen`                     | boolean              | off     | When present, the viewer takes over the viewport (`position: fixed; top/left: 0; width/height: 100vw/100vh; z-index: 9999`). |
| `bgColor`                        | CSS color            | `#f2f2f2` | Background color. Hex and rgb(a) supported.                                                                                   |
| `fov`                            | number (deg)         | `55`    | Camera field-of-view.                                                                                                         |
| `minZoom`, `maxZoom`             | number               | auto    | Minimum and maximum zoom allowed.                                                                                             |
| `minCameraTilt`, `maxCameraTilt` | number (deg)         | `10` / `85` | Pitch angle clamps.                                                                                                           |
| `initialCameraAngle`             | string `"yaw pitch"` | `"0 0"` | Starting camera position horizontal and vertical (e.g. `-45 90`).                                                             |

**Behavioral notes**

* If neither `width` or `height` nor `fullscreen` is set, size the host via CSS. The component enforces a minimum height fallback when collapsed.

---

> Only one viewer is active at a time by design. Activating another instance resets the previously active one to ensure performance.

---

## Troubleshooting

* **Nothing renders:** Verify `model-id` is correct and provisioned. Check that your page height or width is non-zero.
* **Zoom feels too strong or too weak:** Tune `minZoom` and `maxZoom`. Values are relative to model size.
* **Camera starts at an odd angle:** Use `initialCameraAngle="yaw pitch"` to override the default.
* **Layout clipped on small tiles:** Provide an explicit `height` on the host container (for example, cards in a grid).

---

## Google Analytics

You can connect the Marvify Model Viewer to your own Google Analytics 4 (GA4) setup. This lets you track how visitors interact with your 3D models directly in GA reports.

### Quick setup

1. Ensure GA4 is installed on your site, or use Google Tag Manager with a GA4 tag.
2. Add your GA measurement ID to the Marvify script tag.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<!-- Your GA4 setup -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- add your measurement-id to the script import -->
<script src="https://js.marvify.io/marvify.js" type="module"
        data-ga4-id="G-XXXXXXXXXX"></script>

<marvify-model-viewer model-id="demo" style="width:300px; height:300px"></marvify-model-viewer>
```

Replace `G-XXXXXXXXXX` with your own GA4 measurement ID.

---

### Events tracked

The viewer automatically sends three standard events to GA, once per viewer activation.

* `marvify_viewer_session_requested`: 
  * fired when a visitor/auto-play activates the viewer, for example a click to start.
* `marvify_viewer_session_displayed`: 
  * fired when the model successfully loads.
* `marvify_viewer_session_interacted`: 
  * fired on the first interaction post-load, for example click, orbit, zoom, or gesture.

---

### Customizing event names

If you prefer different event names, remap them using a script attribute.

```html
<script src="https://js.marvify.io/marvify.js" type="module"
        data-ga4-id="G-XXXXXXXXXX"
        data-insights-rename='{
          "marvify_viewer_session_requested":"viewer_use",
          "marvify_viewer_session_displayed":"viewer_display",
          "marvify_viewer_session_interacted":"viewer_interact"
        }'></script>
```

---

### Sending events to GTM

If you already use **Google Tag Manager (GTM)** as your analytics hub, you can forward Marvify events into `dataLayer`. From there, you decide how to route them inside GTM (for example, into GA4, or any other tool).

**Step 1 – Add a global handler**

```html
<script>
  window.dataLayer = window.dataLayer || [];
  window.MarvifyEventHandler = function(eventName, payload) {
    window.dataLayer.push({
      event: eventName,
      ...payload
    });
  };
</script>
```

**Step 2 - Tell the viewer to use that handler**

```html
<script src="https://js.marvify.io/marvify.js" type="module"
        data-insights-handler="MarvifyEventHandler"></script>
```

Once configured, Marvify events will appear in your dataLayer. Inside GTM, you can create Custom Event triggers for these events and attach GA4 or other tags as needed.

---

With this setup, your 3D viewer interactions appear in Google Analytics just like any other events. You can keep the defaults, rename them, or fully customize routing through GTM.
