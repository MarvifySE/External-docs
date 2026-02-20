---
id: marvify-viewer
title: Marvify Viewer
sidebar_label: Marvify Viewer
---
# Marvify Model Viewer

*En färdig webkomponent som enkelt låter dig rendera 3D-produktmodeller på din webbplats.*

Marvify 3D skapar fotorealistiska 3D-modeller av era produkter utifrån fysiska objekt och återger varje detalj med realistisk form, färg och textur. Resultatet är en interaktiv upplevelse som era kunder kan utforska från alla vinklar, zooma in i och uppleva direkt i webbläsaren på dator och mobil.

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
    Din webbläsare stöder inte video-taggen.
  </video>
</p>

---

## Vad du behöver

För att använda Marvify med dina egna modeller måste du vara Marvify-kund och ha modeller som vi har provisionerat. Du kan dock testa visaren utan konto genom att använda vår demomodell. Sätt `model-id="demo"` och se till att du kör din sida från `localhost`. Demomodellen fungerar bara på `localhost`. Test via en IP-adress som `127.0.0.1` fungerar inte.

---

## Snabbstart

Ladda in modulskriptet en gång i ditt `<head>` och placera sedan `<marvify-model-viewer>`-elementet där du vill att visaren ska visas.

```html
<!DOCTYPE html>
<html lang="sv">
<head>
  <meta charset="UTF-8">
  <title>Exempel</title>

  <!-- Ladda visaren (placeras i <head>) -->
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

**Minimikrav på attribut:** `model-id`, plus `width` eller `height`.

Bredd och höjd kan anges via attribut eller vanlig CSS. Minst en dimension måste resultera i ett värde större än noll om inte `fullscreen` används.

---

## Exempel

**Explicit storlek via CSS**

```html
<marvify-model-viewer
  model-id="demo"
  style="width: 400px; height: 300px">
</marvify-model-viewer>
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
  height="300px"
  fov="55"
  minZoom="0.5" maxZoom="3"
  minCameraTilt="10" maxCameraTilt="85"
  initialCameraAngle="45 10"
></marvify-model-viewer>
```

---

<a id="dev-token-for-utveckling-start"></a>

## Dev token för utveckling

När du arbetar med dina egna provisionerade modeller utanför produktion, till exempel för att positionera, finjustera och konfigurera modeller innan publicering, måste du använda en Marvify **dev token**.

Lägg till dev token som ett attribut på script-taggen som laddar visaren:

```html
<script
  src="https://js.marvify.io/marvify.js"
  type="module"
  data-marvify-devtoken="DIN_DEV_TOKEN">
</script>
```

Din dev token finns i ditt **Marvify-konto online**. Logga in för att visa eller generera en ny.

Utan en dev token laddas inte dina provisionerade modeller i utvecklingsmiljöer. Modellåtkomst valideras normalt mot din registrerade domän, och en dev token kringgår det tillfälligt så att du kan arbeta lokalt eller i staging.

> **Varning:** Endast en dev token är giltig åt gången. Att skapa en ny token gör den tidigare omedelbart ogiltig.

> **Varning:** Dev tokens är enbart för utveckling. Ta alltid bort dev token innan du publicerar till produktion. Om en dev token av misstag lämnas kvar i ett produktionsbygge kommer alla modeller att sluta laddas tills sidan uppdateras och publiceras igen utan den.

---

<a id="anpassade-attribut"></a>

## Anpassade attribut

| Attribut | Typ eller omfång | Standard | Beskrivning |
| -------- | ---------------- | -------- | ----------- |
| `model-id` **(obligatorisk)** | sträng | n/a | Modellidentifierare i Marvifys tjänst. |
| `width` | CSS-längd | n/a | Anger elementets bredd (t.ex. `320px`, `100%`). |
| `height` | CSS-längd | n/a | Anger elementets höjd. |
| `fullscreen` | boolean | false | Tar över vyn med fast positionering. |
| `autoplay` | boolean | false | Laddar modellen direkt utan att invänta användarinteraktion. |
| `bgColor` | CSS-färg | `#f2f2f2` | Bakgrundsfärg. Hex, rgb och rgba stöds. |
| `fov` | nummer (grader) | `55` | Kamerans synfält. |
| `minZoom` | nummer | auto | Minsta tillåtna zoomavstånd relativt modellens storlek. |
| `maxZoom` | nummer | auto | Största tillåtna zoomavstånd relativt modellens storlek. |
| `minCameraTilt` | nummer (grader) | `10` | Minsta vertikala orbitvinkel. |
| `maxCameraTilt` | nummer (grader) | `85` | Största vertikala orbitvinkel. |
| `initialCameraAngle` | sträng `"yaw pitch"` | auto | Initial kamera-yaw och pitch i grader (exempel: `"-45 30"`). |
| `allowPan` | boolean | false | Aktiverar panorering med högerklick och tvåfingerspanorering på touch. |
| `autorotate` | boolean | true | Aktiverar automatisk kamerarotation. Sätt till `false` för att inaktivera. |
| `autorotateSpeed` | nummer (grader/sek) | `10` | Hastighet för automatisk rotation. |
| `autorotateResume` | nummer (sekunder) | `3` | Fördröjning efter användarinteraktion innan automatisk rotation återupptas. |
| `stats` | boolean | false | Aktiverar prestanda- och debug-overlay. |

**Beteendenoteringar**

- Om varken `width`, `height` eller `fullscreen` anges måste värdelementet storleksättas via CSS. Komponenten använder en minsta höjd som fallback för att undvika att kollapsa till noll.
- Boolean-attribut aktiveras genom närvaro om de inte uttryckligen sätts till false. För att stänga av `autorotate`, använd `autorotate="false"`.
- Endast en visare är aktiv åt gången. Aktivering av en andra instans återställer den första för att bevara prestanda. `autoplay` gäller därför bara den första aktiverade visaren på sidan.
- Om `autorotateResume` sätts till `0` återupptas inte den automatiska rotationen efter användarinteraktion.

---

## Carousel

Attributet `carousel` gör det möjligt att visa flera modeller i samma visarinstans.

| Attribut | Typ | Beskrivning |
| -------- | --- | ----------- |
| `carousel` | JSON-array | En lista med modeller att bläddra mellan. Varje objekt måste innehålla `model-id` och kan även innehålla andra visarattribut som ska gälla för den sliden. |

**Noteringar**

- Carousel-objekt kan skriva över visarnivåinställningar som `bgColor`, `initialCameraAngle` eller zoomgränser per slide.
- Visaren renderar inget navigationsgränssnitt automatiskt för att undvika stilkrock med din webbplats. Slidkontroller måste implementeras av dig med hjälp av de globala hjälpfunktionerna nedan.
- Använd `MarvifyCarousel.next(viewerId)` och `MarvifyCarousel.prev(viewerId)` för att gå framåt eller bakåt en slide.

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

`model_a` använder sin egen `bgColor` och skriver över visarens standard enbart för den sliden. `id`-värdet på `<marvify-model-viewer>` måste stämma överens med argumentet som skickas till `MarvifyCarousel.next()` och `.prev()`.

---

## VR

Dessa attribut styr WebXR och VR-beteende när det stöds av webbläsare och enhet.

| Attribut | Typ | Standard | Beskrivning |
| -------- | --- | -------- | ----------- |
| `enable-vr` | boolean | false | Aktiverar VR-läge. När aktivt visas en Enter VR-knapp på WebXR-kompatibla enheter. |
| `vr-user-distance` | nummer | auto | Avståndsoffset i meter för den initiala kamerapositionen vid VR-start. |
| `vr-user-height` | nummer | auto | Höjdoffset i meter relativt användarens position vid VR-start. |
| `vr-minZoom` | nummer | auto | Minsta tillåtna zoomradie i VR. |
| `vr-maxZoom` | nummer | auto | Största tillåtna zoomradie i VR. |

Modellskala varierar mellan produkter, så VR-positionering behöver oftast justeras per modell. Använd `vr-user-distance` och `vr-user-height` för att rama in modellen bekvämt vid start, och `vr-minZoom`/`vr-maxZoom` för att hålla användare inom ett användbart visningsintervall. Värden bör alltid testas på riktig hårdvara.

Enter VR-knappen visas bara på WebXR-kompatibla enheter och webbläsare. Att aktivera VR har ingen effekt på hårdvara som inte stöds. De besökarna fortsätter att se den vanliga 3D-visaren.

Se [VR-guiden](../marknadsforing-och-tips/vr-guide.md) för en fullständig genomgång.

---

## Felsökning

- **Inget renderas:** Öppna webbläsarens utvecklarkonsol och kontrollera om det finns felmeddelanden. Verifiera att `model-id` är korrekt och provisionerat för ditt konto. Kontrollera att elementet har en bredd och höjd som inte är noll.
- **Modellen laddas i utvecklingsmiljön men inte i produktion:** Bekräfta att dev token har tagits bort. Modellåtkomst i produktion valideras mot din registrerade domän.
- **Zoom känns för stark eller för svag:** Justera `minZoom` och `maxZoom`. Värdena är relativa till modellens storlek.
- **Kameran startar i en konstig vinkel:** Använd `initialCameraAngle="yaw pitch"` för att ange en specifik startposition.
- **Layouten kapas på små ytor:** Ange en explicit `height` på värdelementet, till exempel inuti rutnätskort.

---

## Google Analytics

Visaren har stöd för Google Analytics 4-integration, inklusive händelsespårning och Google Tag Manager-routing. Se [Google Analytics-integrationguiden](./google-analytics.md) för fullständiga instruktioner.
