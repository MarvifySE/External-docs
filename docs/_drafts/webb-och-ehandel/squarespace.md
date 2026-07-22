---
draft: true
id: squarespace
title: Hur du lägger till Marvify 3D på en Squarespace-sajt
sidebar_label: Squarespace-integration
---

# Hur du lägger till Marvify 3D på en Squarespace-sajt

Den här guiden visar hur du bäddar in Marvify 3D-visaren på en Squarespace-sajt. Till skillnad från plattformar som Shopify eller WooCommerce, där du redigerar temats kodfiler, är Squarespace en no-code-byggare. Du behöver alltså inte röra några temafiler. I stället gör du två saker: laddar visarskriptet en gång via **Code Injection**, och placerar sedan visaren där du vill ha den med hjälp av ett **Code Block**. Ingen tidigare kodvana krävs, det räcker att kopiera och klistra in.

Guiden följer samma standardintegration som beskrivs i [Marvify Viewer](../snabbstart/marvify-viewer.md)-dokumentationen, anpassad till Squarespaces sätt att arbeta. Notera att Squarespace uppdaterar sitt gränssnitt då och då, så vissa menynamn kan se lite annorlunda ut än på skärmdumparna.

{/*
TODO: Lägg till en kort demovideo av den färdiga visaren på en Squarespace-sida (valfritt),
i samma format som övriga guider. Avkommentera när filen finns i static/img/.

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
      src={require('@site/static/img/squarespace-final.mp4').default}
      type="video/mp4"
    />
    Din webbläsare stöder inte video-taggen.
  </video>
</p>
*/}

---

Den här artikeln täcker ett komplett exempel från start till slut. För mer djupgående teknisk dokumentation om visarkomponenten och dess tillgängliga attribut, se [Marvify Viewer](../snabbstart/marvify-viewer.md).

Även om det här exemplet fokuserar på att lägga visaren i ett Code Block på en sida, är det bara ett av många sätt du kan använda den på. Visaren är en vanlig JavaScript-komponent som bäddas in direkt i din HTML, så överallt där Squarespace låter dig lägga till ett Code Block kan du ge dina produkter liv i 3D.

## Innan du börjar

- Du behöver en Squarespace-sajt med behörighet att redigera sidor och sajtinställningar.
- **Code Injection kräver en Business-plan eller högre.** Har du en lägre plan kan du fortfarande använda ett Code Block (steg 2), men då behöver skriptet läggas in i själva Code Block-koden i stället (se noteringen i steg 1).
- Du behöver en Marvify-modell som har etablerats för ditt konto. Om du vill testa upplägget först kan du använda `model-id="demo"` på en sida som körs från `localhost`.
- Om du testar med dina egna etablerade modeller utanför produktion, lägg till en [utvecklingstoken](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) på din script-tagg. Kom ihåg att ta bort den innan du går live.

---

## 1. Ladda visarskriptet via Code Injection

Gå till **Settings → Advanced → Code Injection** i din Squarespace-adminpanel. Klistra in Marvify-script-taggen i **Header**-rutan och spara. Det gör att visaren laddas på hela sajten och är redo att användas var du än placerar den.

```html
<script src="https://js.marvify.io/marvify.js" type="module"></script>
```

{/*
TODO: Lägg till skärmdump squarespace_1.webp — Settings → Advanced → Code Injection
med script-taggen inklistrad i Header-rutan. Avkommentera när filen finns i static/img/.

<p align="center">
  <img src={require('@site/static/img/squarespace_1.webp').default} alt="Settings → Advanced → Code Injection med Marvify-script-taggen i Header-rutan" style={{ maxWidth: '700px', display: 'block' }} />
</p>
<p align="center"><em>Settings → Advanced → Code Injection med script-taggen inklistrad i Header-rutan.</em></p>
*/}

> **Tips:** Code Injection finns bara på Squarespaces Business-plan och högre. Har du en lägre plan kan du hoppa över det här steget och i stället lägga hela script-taggen ovanför visarelementet direkt i Code Blocket i nästa steg. Skriptet laddas då bara på den sida där Code Blocket finns.

---

## 2. Lägg till ett Code Block där du vill ha visaren

Öppna sidan där du vill visa 3D-modellen och klicka på **Edit**. Klicka på en infogningspunkt för att lägga till ett nytt block, sök efter **Code** i blockväljaren och välj **Code**-blocket.

{/*
TODO: Lägg till skärmdump squarespace_2.webp — blockväljaren med "Code" markerat i sidredigeraren.
Avkommentera när filen finns i static/img/.

<p align="center">
  <img src={require('@site/static/img/squarespace_2.webp').default} alt="Squarespace blockväljare med Code-blocket markerat" style={{ maxWidth: '700px', display: 'block' }} />
</p>
<p align="center"><em>Lägg till ett Code Block via blockväljaren.</em></p>
*/}

Ta bort exempelinnehållet i Code Blocket och klistra in visarelementet i stället:

```html
<marvify-model-viewer
  model-id="demo"
  width="100%"
  height="520px"
  bgColor="#ffffff"
  initialCameraAngle="45 -20"
  autoplay
></marvify-model-viewer>
```

Ersätt `demo` med ditt eget modell-ID från ditt Marvify-konto.

{/*
TODO: Lägg till skärmdump squarespace_3.webp — Code Block med marvify-model-viewer-koden inklistrad.
Avkommentera när filen finns i static/img/.

<p align="center">
  <img src={require('@site/static/img/squarespace_3.webp').default} alt="Squarespace Code Block med marvify-model-viewer-koden inklistrad" style={{ maxWidth: '700px', display: 'block' }} />
</p>
<p align="center"><em>Code Block med visarkoden inklistrad.</em></p>
*/}

> **Tips:** Se till att alternativet **Display Source** i Code Blocket är avmarkerat. Är det ikryssat visar Squarespace din kod som text i stället för att köra den.

Du bör också justera visarattributen så att modellen visas på det sätt du vill ha den, till exempel kameravinkel, bakgrundsfärg och zoomgränser. Se [Anpassade attribut](../snabbstart/marvify-viewer.md#anpassade-attribut) för en fullständig referens.

### Visarattribut som används i det här exemplet

| Attribut              | Värde     | Effekt |
| --------------------- | --------- | ------ |
| `model-id`            | `demo`    | Identifierar vilken 3D-modell som ska laddas från Marvify. |
| `width`               | `100%`    | Fyller bredden på Code Blockets område. |
| `height`              | `520px`   | Ställer in visaren på en fast höjd som matchar den omgivande layouten. |
| `bgColor`             | `#ffffff` | Använder vit bakgrund för att smälta in i temat. |
| `initialCameraAngle`  | `45 -20`  | Ställer in startkameran på 45° horisontell rotation med en lätt nedåtlutning. |
| `autoplay`            | *(närvarande)* | Laddar modellen direkt när sidan öppnas, utan att vänta på ett klick. |

För en fullständig lista över tillgängliga attribut, se [Anpassade attribut](../snabbstart/marvify-viewer.md#anpassade-attribut).

---

## 3. Spara och förhandsgranska

Klicka **Save** och publicera sidan om du är redo. Öppna sidan i webbläsaren så ska 3D-visaren nu visas där du placerade Code Blocket. Du kan rotera, zooma och inspektera modellen direkt på sidan.

{/*
TODO: Lägg till skärmdump squarespace_4.webp — den färdiga publicerade sidan med 3D-visaren synlig.
Avkommentera när filen finns i static/img/.

<p align="center">
  <img src={require('@site/static/img/squarespace_4.webp').default} alt="Den färdiga Squarespace-sidan med Marvify 3D-visaren synlig" style={{ maxWidth: '700px', display: 'block' }} />
</p>
<p align="center"><em>Den färdiga sidan med 3D-visaren på plats.</em></p>
*/}

Om modellen inte laddas, kontrollera att:
- Script-taggen är korrekt inklistrad i **Header**-rutan under Code Injection (eller ovanför visarelementet i Code Blocket om du använder en lägre plan).
- Värdet för `model-id` matchar identifieraren som tilldelats din modell i Marvify.
- Alternativet **Display Source** i Code Blocket är avmarkerat.
- Du använder en [utvecklingstoken](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) om du testar med en etablerad modell utanför dess registrerade produktionsdomän.

---

Det här exemplet placerar en enda visare i ett Code Block på en sida. Du kan använda samma mönster på flera sidor, lägga in flera Code Blocks eller placera visaren i en produkts informationssektion. Det grundläggande tillvägagångssättet att ladda skriptet en gång och sedan lägga `<marvify-model-viewer>` i ett Code Block förblir detsamma.
