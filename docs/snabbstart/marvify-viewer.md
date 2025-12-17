---
id: marvify-viewer
title: Marvify Viewer
sidebar_label: Marvify Viewer
---
# Marvify Model Viewer

*En färdig webkomponent som enkelt låter dig rendera 3D-produktmodeller på din webbplats.*

---
## Vad du behöver

För att använda Marvify med dina egna modeller måste du vara Marvify-kund och ha modeller som vi har provisionerat. Du kan dock testa visaren utan konto genom att använda vår demomodell. Sätt helt enkelt `model-id="demo"` och se till att du kör din utvecklingssida på `localhost` i webbläsaren. Demomodellen är endast tillgänglig när den serveras från `localhost`, så test via IP-adress fungerar inte (t.ex. 127.0.0.1).

---

## Snabbstart

Ladda in vårt modulscripts en gång och placera sedan det anpassade elementet där du vill att visaren ska renderas.

```html
<!-- Ladda visaren -->
<script src="https://js.marvify.io/marvify.js" type="module"></script>

<!-- Lägg till visaren -->
<marvify-model-viewer
  model-id="demo"
  style="width: 300px; height: 300px"
></marvify-model-viewer>
```

**Minimikrav på attribut:** `model-id`.

Bredd och höjd kan anges via attribut eller vanlig CSS. Minst en dimension måste resultera i ett värde större än noll om inte `fullscreen` används.

> Endast en visare är aktiv åt gången enligt design. När en ny instans aktiveras återställs den tidigare för att säkerställa prestanda.

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

## Dev token för utveckling

När du utvecklar din sida med dina egna provisionerade modeller (till exempel för att positionera, finjustera och konfigurera modeller inför produktion) måste du använda en Marvify **dev token**.

Dev token läggs till som ett attribut på script-taggen som laddar viewern:

    <script
      src="https://js.marvify.io/marvify.js"
      type="module"
      data-marvify-devtoken="DIN_DEV_TOKEN">
    </script>

> **Varning:** Endast en dev token är giltig åt gången. Att skapa en ny token gör den tidigare ogiltig.

Din dev token finns tillgänglig i ditt **Marvify-konto online**. Logga in på ditt konto för att visa eller generera en ny dev token.

Utan en dev token kan dina provisionerade modeller misslyckas att laddas under utveckling. Detta beror på att modellåtkomst normalt valideras mot domännamn.

En dev token kringgår dessa krav tillfälligt så att du kan arbeta lokalt eller i andra icke-produktionsmiljöer.

**VIKTIGT**
- Dev tokens är strikt avsedda för utveckling.
- ANVÄND INTE dev tokens i produktion.
- En dev token stänger av den normala autentiseringsmekanismen som används i produktion.
- Om en dev token av misstag används i produktion och du senare genererar en ny token kommer modeller att sluta laddas tills sidan uppdateras och publiceras igen utan dev token.
- Du kan generera en ny dev token via ditt Marvify-konto.

Se alltid till att ta bort dev token innan du publicerar din sida i produktion.


---

## Anpassade attribut

| Attribut | Typ eller omfång | Standard | Beskrivning |
| -------- | ---------------- | -------- | ----------- |
| `model-id` **(obligatorisk)** | sträng | n/a | Modellidentifierare i Marvifys tjänst. |
| `width` | CSS-längd | n/a | Anger elementets bredd (t.ex. `320px`, `100%`). |
| `height` | CSS-längd | n/a | Anger värdelementets höjd. |
| `fullscreen` | boolean | false | Tar över vyn med fast positionering. |
| `autoplay` | boolean | false | När attributet finns laddas modellen direkt utan att invänta användarinteraktion. Autoplay gäller endast den första aktiverade visaren för att undvika att flera modeller laddas samtidigt. |
| `bgColor` | CSS-färg | `#f2f2f2` | Bakgrundsfärg. Hex, rgb och rgba stöds. |
| `fov` | nummer (grader) | `55` | Kamerans synfält. |
| `minZoom` | nummer | auto | Minsta tillåtna zoomavstånd relativt modellens storlek. |
| `maxZoom` | nummer | auto | Största tillåtna zoomavstånd relativt modellens storlek. |
| `minCameraTilt` | nummer (grader) | `10` | Minsta vertikala orbitvinkel. |
| `maxCameraTilt` | nummer (grader) | `85` | Största vertikala orbitvinkel. |
| `initialCameraAngle` | sträng "yaw pitch" | "0 0" | Initial kamerayaw och pitch i grader (exempel: `-45 30`). |
| `allowPan` | boolean | false | Aktiverar panorering med högerklick och tvåfingerspanorering på touch när satt till true. |
| `autorotate` | boolean | true | Aktiverar automatisk kamerarotation om den inte uttryckligen sätts till `false`. |
| `autorotateSpeed` | nummer (grader/sek) | `10` | Hastighet för automatisk rotation. |
| `autorotateResume` | nummer (sekunder) | `3` | Fördröjning efter användarinteraktion innan automatisk rotation återupptas. |
| `stats` | boolean | false | Aktiverar prestanda- och debug-overlay. |

**Beteendenoteringar**

* Om varken `width`, `height` eller `fullscreen` anges måste värden storleksättas via CSS. Komponenten använder en minsta höjd som fallback för att undvika att kollapsa till noll.
* Boolean-attribut aktiveras genom att de finns, om de inte uttryckligen sätts till false. För att stänga av `autorotate`, använd `autorotate="false"`.

---

## Carousel

Attributet `carousel` gör det möjligt att visa flera modeller i samma viewer-instans.

| Attribut | Typ | Beskrivning |
| -------- | --- | ----------- |
| `carousel` | JSON-array | En lista med modeller att bläddra mellan. Varje objekt måste innehålla `model-id` och kan även innehålla andra viewer-attribut som ska gälla för den sliden. |

**Noteringar**
- Carousel-objekt kan skriva över viewer-inställningar som `bgColor`, `initialCameraAngle` eller zoomgränser.
- Viewern renderar inget navigationsgränssnitt automatiskt. Du ansvarar själv för att lägga till knappar eller kontroller i HTML.
- Använd de globala hjälpfunktionerna för att byta slide:  
  `MarvifyCarousel.next(viewerId)` och `MarvifyCarousel.prev(viewerId)`.

**Exempel**

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

I exemplet ovan använder model_a sin egen bakgrundsfärg som skriver över viewerns standardbakgrund endast för den sliden.

---

## VR-attribut

Dessa attribut styr WebXR och VR-beteende när det stöds av webbläsare och enhet.

| Attribut | Typ | Standard | Beskrivning |
| -------- | --- | -------- | ----------- |
| `enable-vr` | boolean | false | Aktiverar en VR-upplevelse för viewern. |
| `vr-user-height` | nummer | auto | Höjdoffset i meter som läggs till XR-användarens höjd. |
| `vr-user-distance` | nummer | auto | Avståndsoffset i meter för den initiala XR-kamerapositionen. |
| `vr-minZoom` | nummer | auto | Minsta tillåtna XR-zoomradie. |
| `vr-maxZoom` | nummer | auto | Största tillåtna XR-zoomradie. |

**Noteringar**
* Enter VR-knappen visas endast på WebXR-kompatibla enheter och webbläsare.
* Att aktivera VR gör det inte tillgängligt på hårdvara som inte stöds.

---

## VR-konfiguration

Modellskala varierar mellan produkter, så VR-positionering kan behöva justeras för att ge en bekväm visningsupplevelse.

- Använd `vr-user-distance` för att styra hur långt från användaren modellen placeras när VR startar. Större modeller kräver oftast större avstånd för att få plats bekvämt i vyn.
- Använd `vr-user-height` för att justera modellens vertikala placering i förhållande till användarens ögonhöjd.
- Använd `vr-minZoom` för att förhindra att användare kommer för nära modellen. Mycket korta avstånd kan försämra visuell kvalitet och göra att detaljer upplevs som förvrängda.
- Använd `vr-maxZoom` för att begränsa hur långt bort användare kan röra sig och hålla modellen inom ett användbart visningsintervall.

Det finns ingen universell korrekt konfiguration. Värden bör justeras per modell genom test i headset för att säkerställa att objektet är tydligt synligt, väl inramat och bekvämt att titta på när VR startar.

---

## Felsökning

* **Inget renderas:** Kontrollera att `model-id` är korrekt och provisionerad. Säkerställ att sidans höjd eller bredd inte är noll.
* **Zoom känns för stark eller för svag:** Justera `minZoom` och `maxZoom`. Värdena är relativa till modellens storlek.
* **Kameran startar i en konstig vinkel:** Använd `initialCameraAngle="yaw pitch"` för att åsidosätta standard.
* **Layouten kapas på små ytor:** Ange en explicit `height` på värdelementet, till exempel kort i ett rutnät.

---

## Google Analytics

Du kan koppla Marvify Model Viewer till din egen Google Analytics 4-installation (GA4). Detta gör det möjligt att spåra hur besökare interagerar med dina 3D-modeller direkt i GA-rapporter.

### Snabb installation

1. Säkerställ att GA4 är installerat på webbplatsen eller använd Google Tag Manager med en GA4-tagg.
2. Lägg till ditt GA-mätnings-ID i Marvify-scriptet.

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<!-- Din GA4-konfiguration -->
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

Ersätt `G-XXXXXXXXXX` med ditt eget GA4-mätnings-ID.

---

### Spårade händelser

Viewern skickar automatiskt tre standardhändelser till GA, en gång per aktivering.

* `marvify_viewer_session_requested`  
  * skickas när en besökare eller autoplay aktiverar viewern, till exempel via ett klick för att starta.
* `marvify_viewer_session_displayed`  
  * skickas när modellen har laddats färdigt.
* `marvify_viewer_session_interacted`  
  * skickas vid den första interaktionen efter laddning, till exempel klick, rotation, zoom eller gester.

---

### Anpassa händelsenamn

Om du föredrar andra händelsenamn kan du mappa om dem med ett script-attribut.

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

Om du redan använder Google Tag Manager (GTM) som analysplattform kan du vidarebefordra Marvify-händelser till `dataLayer`. Därifrån styr du själv hur de hanteras i GTM, till exempel till GA4 eller andra verktyg.

**Steg 1 - Lägg till en global handler**

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

**Steg 2 - Tala om för viewern att använda handlern**

```html
<script src="https://js.marvify.io/marvify.js" type="module"
        data-insights-handler="MarvifyEventHandler"></script>
```

När detta är konfigurerat kommer Marvify-händelser att visas i `dataLayer`. I GTM kan du skapa Custom Event-triggers för dessa händelser och koppla GA4- eller andra taggar efter behov.

---

Med denna konfiguration visas interaktioner i 3D-viewern i Google Analytics precis som andra händelser. Du kan behålla standardinställningarna, byta namn på händelser eller helt anpassa routingen via GTM.
