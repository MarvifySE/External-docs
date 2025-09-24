---
id: marvify-viewer
title: Marvify Viewer
sidebar_label: Marvify Viewer
---
# Marvify Model Viewer

*En färdig webkomponent för att rendera 3D-produktmodeller på din webbplats.*

---
## Vad du behöver

För att använda Marvify med dina egna modeller måste du vara Marvify-kund och ha modeller som vi har provisionerat. Du kan dock testa visaren utan ett konto genom att använda vår demomodell. Använd helt enkelt `model-id="demo"` och se till att du kör din utvecklingssida på `localhost` i din webbläsare. Demomodellen är endast tillgänglig när den serveras från `localhost`, så test via en IP-adress fungerar inte (t.ex. 127.0.0.1).

## Snabbstart

Bädda in vår modul en gång och placera sedan det anpassade elementet där du vill att visaren ska renderas.

```html
<!-- Ladda visaren -->
<script src="https://js.marvify.io/marvify.js" type="module"></script>

<!-- Lägg till visaren -->
<marvify-model-viewer
  model-id="demo"
  style="width: 300px; height: 300px"
></marvify-model-viewer>
```

**Minimikrav för attribut:** `model-id`, `width`.

---

## Kodexempel

**Grundläggande inbäddning**

```html
<script src="https://js.marvify.io/marvify.js" type="module"></script>

<marvify-model-viewer model-id="demo" style="width: 400px; height: 300px"></marvify-model-viewer>
```

**Med explicita storleksattribut**

```html
<marvify-model-viewer
  model-id="demo"
  width="100%"
  height="420px"
></marvify-model-viewer>
```

**Fullskärmsläge**

```html
<marvify-model-viewer model-id="demo" fullscreen></marvify-model-viewer>
```

**Kamerajustering**

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

## Anpassade attribut

| Attribut                        | Typ / Omfång         |        Standard | Beskrivning                                                                                                                  |
| -------------------------------- | -------------------- | --------------: | ---------------------------------------------------------------------------------------------------------------------------- |
| `model-id` **(obligatorisk)**    | sträng               |               — | Modellidentifierare i Marvifys tjänst.                                                                                      |
| `width` **(obligatorisk)**       | CSS-längd            |               — | Anger elementets bredd (t.ex. `320px`, `100%`).                                                                              |
| `height`                         | CSS-längd            |               — | Anger värdelementets höjd.                                                                                                  |
| `fullscreen`                     | boolean              |            av  | När den finns, tar visaren över hela vyn (`position: fixed; top/left: 0; width/height: 100vw/100vh; z-index: 9999`).         |
| `bgColor`                        | CSS-färg             |      `#f2f2f2` | Bakgrundsfärg. Hex och rgb(a) stöds.                                                                                         |
| `fov`                            | nummer (grader)      |           `55` | Kamerans synfält (field-of-view).                                                                                            |
| `minZoom`, `maxZoom`             | nummer               |           auto | Minsta och största tillåtna zoomnivå.                                                                                        |
| `minCameraTilt`, `maxCameraTilt` | nummer (grader)      |    `10` / `85` | Begränsningar för lutningsvinkel (låser kameran från att luta för mycket upp eller ner).                                     |
| `initialCameraAngle`             | sträng `"yaw pitch"` | `"0 0"`        | Ändrar startposition för kameran horisontellt och vertikalt i grader (t.ex. -45 90).                                                  |

**Beteendenoteringar**

* Om varken `width`/`height` eller `fullscreen` anges, styr storleken via CSS. Komponenten har ett minsta höjdvärde som fallback när den är kollapsad.

---

> Endast en visare är aktiv åt gången, enligt design. Att aktivera en annan instans återställer den tidigare aktiva för att säkerställa prestanda.

---

## Felsökning

* **Inget renderas:** Kontrollera att `model-id` är korrekt och provisionerad. Säkerställ att sidans höjd/bredd är större än noll.
* **Zoom känns för stark/svag:** Justera `minZoom`/`maxZoom`; värdena är relativa till modellens storlek.
* **Kameran startar i en konstig vinkel:** Använd `initialCameraAngle="yaw pitch"` för att åsidosätta standardinställningen.
* **Layouten kapas på små ytor:** Ange en explicit `height` på värdelementet.

## Google Analytics

Du kan koppla Marvify Model Viewer till din egen Google Analytics 4 (GA4)-installation. På så sätt kan du spåra användning av dina 3D-modeller direkt i GA-rapporter.

### Snabbstart

1. Säkerställ att GA4 är installerat på din webbplats, eller använd Google Tag Manager med en GA4-tagg.  
2. Lägg till ditt GA-mätnings-ID i Marvify-skriptet.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<!-- Din GA4-setup -->
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){ dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>

<!-- lägg till ditt measurement-id i script-importen -->
<script src="https://js.marvify.io/marvify.js" type="module"
        data-ga4-id="G-XXXXXXXXXX"></script>

<marvify-model-viewer model-id="demo" style="width:300px; height:300px"></marvify-model-viewer>
```

Byt ut `G-XXXXXXXXXX` mot ditt eget GA4-mätnings-ID.

---

### Händelser som spåras

Visaren skickar automatiskt tre standardhändelser till GA, en gång per aktivering av visaren.

* `marvify_viewer_session_requested`:  
  * skickas när en besökare eller auto-play aktiverar visaren, till exempel genom att klicka för att starta.  
* `marvify_viewer_session_displayed`:  
  * skickas när modellen har laddats klart.  
* `marvify_viewer_session_interacted`:  
  * skickas vid den första interaktionen efter laddning, till exempel klick, rotation, zoom eller gest.  

---

### Anpassa händelsenamn

Om du föredrar andra händelsenamn kan du mappa om dem via ett skriptattribut.

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

### Skicka händelser till GTM

Om du redan använder **Google Tag Manager (GTM)** som din analysplattform kan du vidarebefordra Marvify-händelser till `dataLayer`. Därifrån bestämmer du själv hur de ska hanteras i GTM (till exempel till GA4 eller ett annat verktyg).

**Steg 1 – Lägg till en global handler**

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

**Steg 2 – Tala om för visaren att använda den handlern**

```html
<script src="https://js.marvify.io/marvify.js" type="module"
        data-insights-handler="MarvifyEventHandler"></script>
```

När detta är konfigurerat kommer Marvify-händelser att visas i din `dataLayer`. Inuti GTM kan du skapa Custom Event-triggers för dessa händelser och koppla GA4- eller andra taggar till dem.

---

Med denna konfiguration visas interaktioner i 3D-visaren i Google Analytics precis som andra händelser. Du kan behålla standardnamnen, byta ut dem eller helt anpassa routingen via GTM.
