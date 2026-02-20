---
id: google-analytics
title: Google Analytics Integration
sidebar_label: Google Analytics
---

# Google Analytics integration

The Marvify Model Viewer can send interaction events directly to your Google Analytics 4 (GA4) setup, letting you track how visitors engage with your 3D models in GA reports.

---

## Quick setup

1. Ensure GA4 is installed on your site, or use Google Tag Manager with a GA4 tag.
2. Add your GA measurement ID to the Marvify script tag.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Add your measurement ID to the Marvify script tag -->
<script src="https://js.marvify.io/marvify.js" type="module"
        data-ga4-id="G-XXXXXXXXXX"></script>

<marvify-model-viewer model-id="demo" style="width:300px; height:300px"></marvify-model-viewer>
```

Replace `G-XXXXXXXXXX` with your own GA4 measurement ID.

---

## Events tracked

The viewer automatically sends three events to GA, once per viewer activation.

| Event | Fired when |
| ----- | ---------- |
| `marvify_viewer_session_requested` | A visitor activates the viewer, either by clicking or via autoplay. |
| `marvify_viewer_session_displayed` | The model successfully loads and renders. |
| `marvify_viewer_session_interacted` | The first interaction after load, such as orbit, zoom, or gesture. |

---

## Customizing event names

If you prefer different event names in your GA reports, remap them using the `data-insights-rename` attribute.

```html
<script src="https://js.marvify.io/marvify.js" type="module"
        data-ga4-id="G-XXXXXXXXXX"
        data-insights-rename='{
          "marvify_viewer_session_requested": "viewer_use",
          "marvify_viewer_session_displayed": "viewer_display",
          "marvify_viewer_session_interacted": "viewer_interact"
        }'></script>
```

---

## Sending events to GTM

If you already use Google Tag Manager as your analytics hub, you can forward Marvify events into `dataLayer` instead of sending them directly to GA4. From there you decide how to route them inside GTM.

**Step 1: Add a global handler**

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

**Step 2: Tell the viewer to use that handler**

```html
<script src="https://js.marvify.io/marvify.js" type="module"
        data-insights-handler="MarvifyEventHandler"></script>
```

Once configured, Marvify events appear in your `dataLayer`. Inside GTM, create Custom Event triggers for these events and attach GA4 or other tags as needed.
