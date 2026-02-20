---
id: google-analytics
title: Google Analytics-integration
sidebar_label: Google Analytics
---

# Google Analytics-integration

Marvify Model Viewer kan skicka interaktionshändelser direkt till din Google Analytics 4-uppsättning (GA4), vilket låter dig följa hur besökare interagerar med dina 3D-modeller i GA-rapporter.

---

## Snabbstart

1. Se till att GA4 är installerat på din webbplats, eller använd Google Tag Manager med en GA4-tagg.
2. Lägg till ditt GA-mätnings-ID på Marvify-skripttaggen.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- Lägg till ditt mätnings-ID på Marvify-skripttaggen -->
<script src="https://js.marvify.io/marvify.js" type="module"
        data-ga4-id="G-XXXXXXXXXX"></script>

<marvify-model-viewer model-id="demo" style="width:300px; height:300px"></marvify-model-viewer>
```

Ersätt `G-XXXXXXXXXX` med ditt eget GA4-mätnings-ID.

---

## Händelser som spåras

Visaren skickar automatiskt tre händelser till GA, en gång per visaraktivering.

| Händelse | Utlöses när |
| -------- | ----------- |
| `marvify_viewer_session_requested` | En besökare aktiverar visaren, antingen via klick eller autoplay. |
| `marvify_viewer_session_displayed` | Modellen laddas och renderas framgångsrikt. |
| `marvify_viewer_session_interacted` | Den första interaktionen efter laddning, till exempel orbit, zoom eller gesture. |

---

## Anpassa händelsenamn

Om du föredrar andra händelsenamn i dina GA-rapporter kan du mappa om dem med attributet `data-insights-rename`.

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

## Skicka händelser till GTM

Om du redan använder Google Tag Manager som din analysnav kan du vidarebefordra Marvify-händelser till `dataLayer` istället för att skicka dem direkt till GA4. Därifrån bestämmer du själv hur de ska dirigeras i GTM.

**Steg 1: Lägg till en global hanterare**

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

**Steg 2: Berätta för visaren att använda den hanteraren**

```html
<script src="https://js.marvify.io/marvify.js" type="module"
        data-insights-handler="MarvifyEventHandler"></script>
```

När konfigurationen är klar visas Marvify-händelser i din `dataLayer`. Skapa Custom Event-triggers för dessa händelser i GTM och koppla GA4 eller andra taggar efter behov.
