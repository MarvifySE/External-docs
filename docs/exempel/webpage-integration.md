---
id: webpage-integration
title: Hur du lägger till FOTO-3D på din webbsida
sidebar_label: Webbsida-integration
---

# Hur du lägger till FOTO-3D på din webbsida

Den här guiden ger en översikt över hur du lägger till Marvify FOTO-3D-visaren på en webbsida. Du kommer att se hur visaren fungerar i ett enkelt fristående exempel, följt av en mer avancerad layout som använder interaktiva bildrutor. Samma steg som visas här gäller för produktsidor, gallerier och andra anpassade webbsidor.

## Exempel: Marvify-visare på en produktsida

Här är en kort demonstration som visar Marvify FOTO-3D-visaren som körs med en enda produktmodell på en ren, enkel produktsida.

<p align="center">
  <video
    width="80%"
    autoPlay
    loop
    muted
    playsInline
    style={{ display: 'block' }}
  >
    <source
      src={require('@site/static/img/size_visualization_optimized.mp4').default}
      type="video/mp4"
    />
    Din webbläsare stöder inte video-taggen.
  </video>
</p>

---

Börja med att öppna HTML-filen eller mallen för din webbsida. Bestäm var 3D-visaren ska visas. Detta placeras ofta nära produktbilder, under artikelbeskrivningar eller inuti en dedikerad sektion för interaktivt innehåll.

Den här artikeln är en översikt över hur du integrerar Marvify-visaren på din webbsida. För mer djupgående teknisk dokumentation, besök [docs.marvify.io](https://docs.marvify.io/snabbstart/marvify-viewer/).

## 1. Ladda visarskriptet

Lägg till Marvify-visarskriptet en gång i header-sektionen av din webbsida. Detta gör det anpassade elementet tillgängligt var som helst i din layout och säkerställer att visaren är redo när sidan laddas.

```html
<script src="https://js.marvify.io/marvify.js" type="module"></script>
```

## 2. Infoga visaren där du vill att 3D-modellen ska visas

Placera visarelementet i din HTML där ditt huvudproduktmedia finns. I exempelproduktsidan sitter den direkt i vänster kolumn som den primära produktvisaren.

```html
<div class="viewer-wrapper">
  <marvify-model-viewer
    model-id="ditt-modell-id"
    style="width: 100%; height: 100%">
  </marvify-model-viewer>
</div>
<p class="viewer-note">
  Rotera, zooma och inspektera produkten direkt i Marvify FOTO-3D-visaren.
</p>
```

Ersätt `model-id="ditt-modell-id"` med din egen modellidentifierare när din modell är etablerad i vår tjänst. Om du använder demomodellen, se till att du kör din sida från `localhost`.

## 3. Justera storleken eller layouten efter behov

Du kan ställa in visarstorleken med hjälp av inline-stilar eller attribut.

```html
<marvify-model-viewer
  model-id="ditt-modell-id"
  width="100%"
  height="420px">
</marvify-model-viewer>
```

Helskärmsläge stöds också om du vill att modellen ska öppnas över hela vyområdet.

```html
<marvify-model-viewer model-id="ditt-modell-id" fullscreen></marvify-model-viewer>
```

## 4. Valfria kamera- och bakgrundsjusteringar

Du kan konfigurera startvinkel, zoomgränser och bakgrundsfärg för att matcha din sidas visuella stil och för att passa din produkt i vyn.

```html
<marvify-model-viewer
  model-id="ditt-modell-id"
  bgColor="#f7f7f7"
  fov="55"
  minZoom="0.5" maxZoom="3"
  minCameraTilt="10" maxCameraTilt="85"
  initialCameraAngle="45 10">
</marvify-model-viewer>
```

## Exempel: Marvify FOTO-3D i ett lookbook-stil bildgalleri

Efter att du har fått grundvisaren att fungera kan du också placera den inuti mer avancerade layouter. Ett exempel är en modelookbook-sida med ett bildgaller, där varje outfit kan öppnas i 3D.

<p align="center">
  <video
    width="30%"
    autoPlay
    loop
    muted
    playsInline
    style={{ display: 'block' }}
  >
    <source
      src={require('@site/static/img/lookbook_optimized.mp4').default}
      type="video/mp4"
    />
    Din webbläsare stöder inte video-taggen.
  </video>
</p>


Lookbook-exemplet är byggt med vanlig HTML, CSS och ett litet skript. På en hög nivå används Marvify på sidan så här:

- Varje bild är insvept i en klickbar behållare som inkluderar ett `data-model-id`-attribut som pekar på 3D-modellen som ska visas för den bilden.
- När en besökare klickar på en behållare ersätter ett skript bilden inuti den behållaren med ett `<marvify-model-viewer>`-element som fyller samma utrymme. Visaren använder `model-id` från behållaren.
- Skriptet håller reda på vilken ruta som är aktiv så att endast en 3D-visare är öppen åt gången. Om besökaren klickar på en annan bild återställs den tidigare rutan till sitt ursprungliga foto.
- Varje aktiv visare visar en liten helskärmsikon i hörnet. När den ikonen trycks öppnas en större Marvify-visare i mitten av skärmen ovanpå en något mörkare bakgrund. Att stänga överlägget återför besökaren till lookbook-vyn.

I HTML kan behållarna för bilderna se ut ungefär så här:

```html
<div class="lookbook-media" data-model-id="modellnamn">
  <img src="pics/look-01.jpg" alt="Look 01">
  <div class="lookbook-label">Klicka för 3D</div>
</div>
```

Ett kort skript kan sedan hantera interaktionen. Det:

- hittar alla element med klassen `lookbook-media`
- lagrar deras ursprungliga innehåll (bild och etikett) så att det kan återställas
- vid klick byter ut bilden mot en `marvify-model-viewer` som fyller samma kort
- lägger till en liten helskärmsknapp inuti kortet
- öppnar en större visare i ett överlägg när helskärmsknappen trycks
- stänger överlägget när besökaren klickar på stängningsikonen eller den mörka bakgrunden

En förenklad version av klicklogiken kan se ut så här:

```html
<script>
  let activeContainer = null;

  document.querySelectorAll('.lookbook-media').forEach(container => {
    const modelId = container.dataset.modelId;
    container.dataset.originalHtml = container.innerHTML;

    container.addEventListener('click', () => {
      if (container.querySelector('marvify-model-viewer')) return;

      if (activeContainer && activeContainer !== container) {
        activeContainer.innerHTML = activeContainer.dataset.originalHtml;
        activeContainer.style.width = '';
        activeContainer.style.height = '';
      }

      const rect = container.getBoundingClientRect();
      container.style.width = rect.width + 'px';
      container.style.height = rect.height + 'px';

      container.innerHTML = `
        <marvify-model-viewer
          model-id="${modelId}"
          autoplay
          style="display:block;width:100%;height:100%">
        </marvify-model-viewer>
        <button class="fullscreen-button" type="button">⛶</button>
      `;

      activeContainer = container;
    });
  });
</script>
```

Lookbooken som visas i videon är bara ett exempel på hur Marvify-visaren kan användas i en mer visuell layout. Du kan integrera visaren på vilket sätt som helst som passar din egen webbsida, designstil eller produktflöde.
