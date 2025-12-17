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

**Minimum required attributes:** `model-id`.

Width and height may be provided via attributes or regular CSS. At least one dimension must resolve to a non-zero size unless `fullscreen` is used.

> Only one viewer is active at a time by design. Activating another instance resets the previously active one to ensure performance.

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

## Development token (dev token)

When developing your page with your own provisioned models (for example to position, tune, and configure models before going live), you must use a Marvify **development token**.

A dev token is added as an attribute on the script tag that loads the viewer:
```html
<script
  src="https://js.marvify.io/marvify.js"
  type="module"
  data-marvify-devtoken="YOUR_DEV_TOKEN">
</script>
```

> **Warning:** Only one dev token is valid at a time. Creating a new token invalidates the previous one.


Your dev token is available in your **Marvify online account**. Log in to your account to view or regenerate your dev token.

Without a dev token present, your provisioned models may fail to load during development. This is because model access is normally validated against your domain name.

A dev token temporarily bypasses these requirements so you can work locally or in other non-production environments.

**IMPORTANT**
- Dev tokens are strictly for development use.
- DO NOT use a dev token in production.
- A dev token disables the normal production authentication flow.
- If a dev token is accidentally used in production and you later regenerate the token, models will stop loading until the page is updated and redeployed without the dev token.
- Dev tokens can be regenerated from your Marvify account page.

Always remove the dev token before deploying your site to production.


---

## Custom Attributes

| Attribute                        | Type or Range        | Default | Description |
| -------------------------------- | -------------------- | ------- | ----------- |
| `model-id` **(required)**        | string               | n/a     | Model identifier in Marvify's service. |
| `width`                          | CSS length           | n/a     | Sets element width (e.g. `320px`, `100%`). |
| `height`                         | CSS length           | n/a     | Sets host element height. |
| `fullscreen`                     | boolean              | false   | Takes over the viewport using fixed positioning. |
| `autoplay`                       | boolean              | false   | When present, loads the model immediately without waiting for user interaction. Autoplay only applies to the first activated viewer to prevent multiple models loading simultaneously. |
| `bgColor`                        | CSS color            | `#f2f2f2` | Background color. Hex, rgb, and rgba supported. |
| `fov`                            | number (deg)         | `55`    | Camera field of view. |
| `minZoom`                        | number               | auto    | Minimum allowed zoom distance relative to model size. |
| `maxZoom`                        | number               | auto    | Maximum allowed zoom distance relative to model size. |
| `minCameraTilt`                  | number (deg)         | `10`    | Minimum vertical orbit angle. |
| `maxCameraTilt`                  | number (deg)         | `85`    | Maximum vertical orbit angle. |
| `initialCameraAngle`             | string `"yaw pitch"` | `"0 0"` | Initial camera yaw and pitch in degrees (example: `-45 30`). |
| `allowPan`                       | boolean              | false   | Enables right-click mouse panning and two-finger touch panning when set to true. |
| `autorotate`                     | boolean              | true    | Enables automatic camera rotation unless explicitly set to `false`. |
| `autorotateSpeed`                | number (deg/sec)     | `10`    | Speed of automatic rotation. |
| `autorotateResume`               | number (seconds)     | `3`     | Delay after user interaction before auto rotation resumes. |
| `stats`                          | boolean              | false   | Enables performance and debug stats overlay. |


**Behavioral notes**

* If neither `width` nor `height` nor `fullscreen` is set, the host must be sized via CSS. The component enforces a minimum height fallback to avoid collapsing to zero.
* Boolean attributes are enabled by presence unless explicitly set to false. To disable `autorotate`, explicitly set `autorotate="false"`.

## Carousel

The `carousel` attribute allows multiple models to be viewed within a single viewer instance.

| Attribute  | Type       | Description |
| ---------- | ---------- | ----------- |
| `carousel` | JSON array | A list of models to cycle through. Each item must include `model-id` and may include any other viewer attributes to apply for that slide. |

**Notes**
- Carousel items can override viewer settings such as `bgColor`, `initialCameraAngle`, or zoom limits.
- The viewer does not render navigation UI automatically. You are responsible for adding your own buttons or controls in HTML.
- Use the global helpers to change slides:  
  `MarvifyCarousel.next(viewerId)` and `MarvifyCarousel.prev(viewerId)`.

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

In the example above, model_a applies its own background color, overriding the viewer’s default background color for that slide only.


## VR Attributes

These attributes control WebXR and VR behavior when supported by the browser and device.

| Attribute        | Type    | Default | Description |
| ---------------- | ------- | ------- | ----------- |
| `enable-vr`      | boolean | false     | Enables a VR experience for the viewer. |
| `vr-user-height` | number  | auto    | Height offset in meters +/- to the user height. |
| `vr-user-distance` | number | auto    | Distance offset in meters +/- for the initial camera position. |
| `vr-minZoom`     | number  | auto    | Minimum allowed zoom radius. |
| `vr-maxZoom`     | number  | auto    | Maximum allowed zoom radius. |

**Notes**
* The Enter VR button appears only on WebXR-compatible devices and browsers.
* Enabling VR does not make it available on unsupported hardware.

## VR Setup

Model scale varies across products, so VR positioning may require adjustment to achieve a comfortable viewing experience.

- `enable-vr="true"` must be set for VR to be enabled.
- Use `vr-user-distance` to control how far the model appears from the user when entering VR. Larger models typically require a greater distance to fit comfortably in view.
- Use `vr-user-height` to adjust the vertical placement of the model relative to the user’s eye level.
- Use `vr-minZoom` to prevent users from getting too close to the model. Very close distances can reduce visual fidelity and make surface detail appear distorted.
- Use `vr-maxZoom` to limit how far users can move away from the model and keep it within a useful viewing range.

There is no single correct configuration. Values should be tuned per model using real headset testing to ensure the object is clearly visible, well framed, and comfortable to view when entering VR.

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
