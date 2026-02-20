---
id: webpage-integration
title: Hur du lägger till Marvify 3D på din webbsida
sidebar_label: Webbsida-integration
---

# Hur du lägger till Marvify 3D på din webbsida

Den här guiden visar två praktiska exempel på hur du bäddar in Marvify 3D-visaren på en vanlig webbsida: en produktsida med en enskild modell och ett interaktivt lookbook-bildgalleri. Exemplen här täcker två specifika integrationsscenarier för att hjälpa dig komma igång. Visaren kan bäddas in på många olika sätt beroende på din layout, ditt ramverk och din design. För den fullständiga tekniska dokumentationen om visarelementet, se [Marvify Viewer-guiden](../snabbstart/marvify-viewer.md).

## Exempel: Marvify-visare på en produktsida

Här är en kort demonstration som visar Marvify 3D-visaren med en enda produktmodell på en ren, enkel produktsida.

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

## 1. Ladda visarskriptet

Lägg till Marvify-visarskriptet en gång i `<head>` på din sida. Det gör det anpassade elementet tillgängligt var som helst i din layout och säkerställer att visaren är redo när sidan laddas.

```html
<script src="https://js.marvify.io/marvify.js" type="module"></script>
```

Om du arbetar med dina egna provisionerade modeller utanför produktion behöver du också en dev token. Se [Dev token för utveckling](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) för mer information.

## 2. Placera visaren

Lägg till `<marvify-model-viewer>`-elementet där du vill att 3D-modellen ska visas i din HTML.

```html
<marvify-model-viewer
  model-id="ditt-modell-id"
  width="100%"
  height="400px">
</marvify-model-viewer>
```

Ersätt `model-id="ditt-modell-id"` med din egen modellidentifierare när din modell är etablerad i vår tjänst. Om du använder demomodellen, kör din sida från `localhost`.

Bredd och höjd kan anges via attribut eller vanlig CSS. Helskärmsläge tar över hela vyområdet:

```html
<marvify-model-viewer model-id="ditt-modell-id" fullscreen></marvify-model-viewer>
```

## 3. Valfritt: kamera- och bakgrundskonfiguration

Du kan konfigurera startvinkel, zoomgränser och bakgrundsfärg för att matcha din sidas visuella stil och för att rama in din produkt väl.

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

För en fullständig lista över tillgängliga attribut, se [Anpassade attribut](../snabbstart/marvify-viewer.md#anpassade-attribut).

---

## Exempel: Marvify 3D i ett lookbook-bildgalleri

När du har fått grundvisaren att fungera kan du även placera den i mer avancerade layouter. Videon nedan visar ett exempel: ett bildgalleri där ett klick på en ruta aktiverar 3D-visaren på plats, och ett tryck på expandera-ikonen öppnar den i ett helskärmsöverlägg.

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

Lookbooken är byggd med vanlig HTML, CSS och ett litet skript. På en övergripande nivå:

- Varje bild är insvept i en klickbar behållare med ett `data-model-id`-attribut som pekar på 3D-modellen för den bilden.
- När en besökare klickar på en behållare ersätts bilden med ett `<marvify-model-viewer>`-element som fyller samma utrymme.
- Bara en visare är aktiv åt gången. Ett klick på en annan ruta återställer den föregående rutan till sitt ursprungliga foto.
- Varje aktiv ruta visar en liten expandera-ikon. Ett tryck på den öppnar modellen i ett helskärmsöverlägg med mörkad bakgrund. Ett klick på stängningsknappen eller bakgrunden stänger överlägget.

I HTML kan bildbehållarna se ut så här:

```html
<div class="lookbook-media" data-model-id="modellnamn">
  <img src="pics/look-01.jpg" alt="Look 01">
  <div class="lookbook-label">Klicka för 3D</div>
</div>
```

Skriptet nedan hanterar hela interaktionen: klick för att byta bild och helskärmsöverlägget. Det här är ett sätt att göra det på. Anpassa logiken efter din egen HTML och händelsehantering.

```html
<script>
  let activeContainer = null;

  // Bygg helskärmsöverlägget en gång och lägg till det på sidan
  const overlay = document.createElement('div');
  overlay.style.cssText = 'display:none;position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:1000;align-items:center;justify-content:center;';

  const overlayViewer = document.createElement('marvify-model-viewer');
  overlayViewer.setAttribute('autoplay', '');
  overlayViewer.style.cssText = 'width:80vw;height:80vh;';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.textContent = '✕';
  closeBtn.style.cssText = 'position:absolute;top:1rem;right:1rem;font-size:1.5rem;background:none;border:none;color:white;cursor:pointer;';

  overlay.appendChild(overlayViewer);
  overlay.appendChild(closeBtn);
  document.body.appendChild(overlay);

  function closeOverlay() {
    overlay.style.display = 'none';
    overlayViewer.removeAttribute('model-id');
  }

  closeBtn.addEventListener('click', closeOverlay);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
  });

  // Hantera klick på rutor
  document.querySelectorAll('.lookbook-media').forEach(container => {
    const modelId = container.dataset.modelId;
    container.dataset.originalHtml = container.innerHTML;

    container.addEventListener('click', (e) => {
      // Öppna överlägget när expandera-knappen trycks
      if (e.target.classList.contains('fullscreen-button')) {
        overlay.style.display = 'flex';
        overlayViewer.setAttribute('model-id', modelId);
        return;
      }

      // Gör ingenting om denna ruta redan visar visaren
      if (container.querySelector('marvify-model-viewer')) return;

      // Återställ den tidigare aktiva rutan
      if (activeContainer && activeContainer !== container) {
        activeContainer.innerHTML = activeContainer.dataset.originalHtml;
        activeContainer.style.width = '';
        activeContainer.style.height = '';
      }

      // Lås dimensionerna innan innehållet byts ut så att rutan inte kollapsar
      const rect = container.getBoundingClientRect();
      container.style.width = rect.width + 'px';
      container.style.height = rect.height + 'px';

      // Byt ut bilden mot visaren och lägg till expandera-knappen
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

`autoplay` gör att visaren börjar ladda direkt när rutan klickas, utan att invänta ytterligare användarinteraktion.

Lookbooken som visas i videon är ett exempel på hur visaren kan användas i en mer visuell layout. Du kan integrera visaren på vilket sätt som helst som passar din design. För en fullständig lista över tillgängliga visarattribut, se [Marvify Viewer-guiden](../snabbstart/marvify-viewer.md).
