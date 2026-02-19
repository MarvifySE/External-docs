---
id: shopify
title: Hur du lägger till Marvify 3D i en Shopify-butik
sidebar_label: Shopify-integration
---

# Hur du lägger till Marvify 3D i en Shopify-butik

Den här guiden visar hur du bäddar in Marvify 3D-visaren i en Shopify-butik. Exemplet använder standardtemat **Horizon** och visar hur du ersätter produktbilden på en produktsida med en interaktiv 3D-modell. Samma tillvägagångssätt kan anpassas till vilket Shopify-tema som helst som använder Liquid-mallar.

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
      src={require('@site/static/img/shoppify_product.mp4').default}
      type="video/mp4"
    />
    Din webbläsare stöder inte video-taggen.
  </video>
</p>

---

Den här artikeln täcker ett komplett exempel från start till slut. För mer djupgående teknisk dokumentation om visarkomponenten och dess tillgängliga attribut, se [Marvify Viewer](../snabbstart/marvify-viewer.md).

## Innan du börjar

- Du behöver tillgång till en Shopify-butik med behörighet att redigera temakoden.
- Du behöver en Marvify-modell som har etablerats för ditt konto. Om du vill testa upplägget först kan du använda `model-id="demo"` på en sida som körs från `localhost`.
- Om du testar med dina egna etablerade modeller utanför produktion, lägg till en [utvecklingstoken](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) på din script-tagg. Kom ihåg att ta bort den innan du går live.

---

## 1. Öppna temaredigeraren

Gå till **Onlinebutik → Teman** i din Shopify-adminpanel. Klicka på **Anpassa tema** på ditt aktiva tema.

<p align="center">
  <img src={require('@site/static/img/shopify_1.webp').default} alt="Knappen Anpassa tema i Shopify-adminpanelen" style={{ maxWidth: '600px', display: 'block' }} />
</p>

---

## 2. Öppna kodredigeraren

För att redigera de underliggande mallfilerna, stäng temaredigeraren och återgå till **Onlinebutik → Teman**. Klicka på **trebepunktsmenyn (⋯)** bredvid ditt aktuella tema och välj **Redigera kod**.

<p align="center">
  <img src={require('@site/static/img/shopify_2.webp').default} alt="Alternativet Redigera kod i Shopify-temamenyn" style={{ maxWidth: '600px', display: 'block' }} />
</p>

Detta öppnar Shopifys kodredigerare där du kan bläddra bland och ändra alla Liquid-mallfiler som utgör ditt tema.

---

## 3. Lägg till visarskriptet i theme.liquid

I filträdet till vänster, expandera mappen **Layout** och öppna **theme.liquid**. Det här är huvudlayoutfilen som omsluter varje sida i din butik — alla skript som laddas här är tillgängliga på hela webbplatsen.

<p align="center">
  <img src={require('@site/static/img/shopify_3.webp').default} alt="Filen theme.liquid öppen i Shopifys kodredigerare" style={{ maxWidth: '700px', display: 'block' }} />
</p>

Leta upp den avslutande `</head>`-taggen och lägg till Marvify-skriptet precis före den. I det här exemplet laddas skriptet bara på den specifika produktsida där visaren används:

```liquid
{% if request.page_type == 'product' and product and product.handle == 'stylish-bag' %}
  <script src="https://js.marvify.io/marvify.js" type="module"></script>
{% endif %}
```

<p align="center">
  <img src={require('@site/static/img/shopify_4.webp').default} alt="Marvify-script-taggen tillagd precis före den avslutande head-taggen i theme.liquid" style={{ maxWidth: '700px', display: 'block' }} />
</p>

Villkoret här är avsiktligt — det förhindrar att visarens JavaScript laddas på sidor där det inte behövs, vilket håller din butik snabb för besökare som bläddrar på andra sidor.

> **Ladda visaren på alla produktsidor**
>
> Om du vill att visaren ska vara tillgänglig på alla produktsidor snarare än en enda produkt, använd det bredare villkoret istället:
> ```liquid
> {% if request.page_type == 'product' %}
>   <script src="https://js.marvify.io/marvify.js" type="module"></script>
> {% endif %}
> ```

---

## 4. Infoga visaren i produktmediemallen

Produktbilden i de flesta Shopify-teman renderas av ett kodavsnitt (snippet) snarare än direkt i produktsidans mall. I Horizon-temat är denna fil **snippets/product-media-gallery-content.liquid**. Öppna den från mappen **Snippets** i filträdet.

<p align="center">
  <img src={require('@site/static/img/shopify_5.webp').default} alt="product-media-gallery-content.liquid öppen och visar var visaren infogas" style={{ maxWidth: '700px', display: 'block' }} />
</p>

Inuti det huvudsakliga `{% else %}`-blocket — den gren som renderas när en produkt finns — lägg till ett villkor före det befintliga `<media-gallery>`-elementet. Detta kontrollerar om den aktuella produkten är den med visaren, och renderar i så fall Marvify-komponenten istället för det vanliga bildgalleriet:

```liquid
{% if selected_product and selected_product.handle == 'stylish-bag' %}
  <div class="product-media-container product-media-container--model" {{ block_shopify_attributes }}>
    <div class="product-media" style="width: 100%; height: 520px;">
      <marvify-model-viewer
        model-id="fashion-expo-01"
        width="100%"
        height="520px"
        bgColor="#ffffff"
        initialCameraAngle="45 -20"
        autoplay
      ></marvify-model-viewer>
    </div>
  </div>
{% else %}
  <media-gallery
    ...
  </media-gallery>
{% endif %}
```

Ersätt `stylish-bag` med handtaget (handle) för din faktiska produkt, och `fashion-expo-01` med ditt eget modell-ID från ditt Marvify-konto. `{% else %}`-grenen behåller den ursprungliga bildgallerikoden så att alla andra produkter fortsätter att visa sina bilder som vanligt.

### Visarattribut som används i det här exemplet

| Attribut              | Värde        | Effekt |
| --------------------- | ------------ | ------ |
| `model-id`            | `fashion-expo-01` | Identifierar vilken 3D-modell som ska laddas från Marvify. |
| `width`               | `100%`       | Fyller bredden på produktmediakolumnen. |
| `height`              | `520px`      | Ställer in visaren på en fast höjd som matchar den omgivande layouten. |
| `bgColor`             | `#ffffff`    | Använder vit bakgrund för att smälta in i temat. |
| `initialCameraAngle`  | `45 -20`     | Ställer in startkameran på 45° horisontell rotation med en lätt nedåtlutning. |
| `autoplay`            | *(närvarande)* | Laddar modellen direkt när sidan öppnas, utan att vänta på ett klick. |

För en fullständig lista över tillgängliga attribut, se [Anpassade attribut](../snabbstart/marvify-viewer.md#anpassade-attribut).

---

## 5. Spara och förhandsgranska

Spara båda filerna. Navigera till produktsidan i din butik och 3D-visaren ska nu visas i stället för produktbilden. Du kan rotera, zooma och inspektera modellen direkt på sidan.

Om modellen inte laddas, kontrollera att:
- Produkthandtaget i Liquid-villkoren stämmer exakt.
- Värdet för `model-id` matchar identifieraren som tilldelats din modell i Marvify.
- Script-taggen i `theme.liquid` laddas på rätt sidtyp.
- Du använder en [utvecklingstoken](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) om du testar med en etablerad modell utanför dess registrerade produktionsdomän.

---

Det här exemplet riktar sig mot en enda produkt och ersätter dess bild helt med 3D-visaren. Du kan anpassa samma mönster för att visa visaren bredvid bilder, utlösa den via en knapp, eller tillämpa den på en hel produktkategori — det grundläggande tillvägagångssättet att villkorligt rendera `<marvify-model-viewer>` inuti dina Liquid-mallar förblir detsamma.
