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
