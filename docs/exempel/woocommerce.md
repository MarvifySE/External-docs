---
id: woocommerce
title: Hur du lägger till Marvify 3D i en WooCommerce-butik
sidebar_label: WooCommerce-integration
---

# Hur du lägger till Marvify 3D i en WooCommerce-butik

Den här guiden visar hur du bäddar in Marvify 3D-visaren i en WooCommerce-butik. WooCommerce är ett plugin som lägger till e-handelsfunktionalitet på en WordPress-webbplats, så den underliggande plattformen här är WordPress. Exemplet använder **Storefront**, WooCommercets eget officiella tema, och visar hur du ersätter produktbilden på en produktsida med en interaktiv 3D-modell.

Den följer samma standardintegration som beskrivs i [Marvify Viewer](../snabbstart/marvify-viewer.md)-dokumentationen, anpassad för att passa WordPress och WooCommerces sätt att arbeta. Alla andra webbhotell som låter dig redigera HTML-koden på din webbplats kan uppnå samma resultat med liknande steg. Notera att beroende på din värdmiljö, WordPress-version och aktiva plugins kan vissa detaljer se lite annorlunda ut. Den här guiden är baserad på en egenhostad WordPress-installation. Använder du ett hanterat webbhotell kan filåtkomst ske via SFTP eller en filhanterare i kontrollpanelen snarare än via Temaredigeraren.

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
      src={require('@site/static/img/woocommerce-final.web.mp4').default}
      type="video/mp4"
    />
    Din webbläsare stöder inte video-taggen.
  </video>
</p>

---

Den här artikeln täcker ett komplett exempel från start till slut. För mer djupgående teknisk dokumentation om visarkomponenten och dess tillgängliga attribut, se [Marvify Viewer](../snabbstart/marvify-viewer.md).

Även om det här exemplet fokuserar på att ersätta en produktbild med 3D-visaren, är det bara ett av otaliga sätt du kan använda den på. Visaren är en vanlig JavaScript-komponent som bäddas in direkt i din HTML, så överallt där din plattform låter dig skriva kod kan du ge dina produkter liv i 3D. Den integration du bygger begränsas bara av vad din värdmiljö tillåter.

## Innan du börjar

- Du behöver en WordPress-webbplats med WooCommerce-pluginet installerat och en produkt uppsatt.
- Du behöver ett aktivt **underordnat tema** (child theme) av Storefront skapat och aktiverat. Om du redigerar ett överordnat tema direkt kommer dina ändringar att gå förlorade nästa gång temat uppdateras. Om du inte har satt upp ett sådant ännu kan du läsa [WordPress dokumentation om child themes](https://developer.wordpress.org/themes/advanced-topics/child-themes/) innan du fortsätter.
- Du behöver tillgång till att redigera ditt child themes filer. Det kan göras via **Utseende → Temaredigerare** i WordPress-adminpanelen, eller via FTP eller en filhanterare hos din hostingleverantör.
- Du behöver en Marvify-modell som har etablerats för ditt konto. Om du vill testa upplägget först kan du använda `model-id="demo"` på en sida som körs från `localhost`.
- Om du testar med dina egna etablerade modeller utanför produktion, lägg till en [utvecklingstoken](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) på din script-tagg. Kom ihåg att ta bort den innan du går live.

<p align="center">
  <img src={require('@site/static/img/woo3-child.webp').default} alt="Utseende → Teman som visar Storefront Child som aktivt tema" style={{ maxWidth: '700px', display: 'block' }} />
</p>
<p align="center"><em>Utseende → Teman med Storefront Child inställt som aktivt tema.</em></p>

---

## Vanliga platser för saker i den här guiden

Beroende på din installation kan dessa finnas på olika ställen:

- **functions.php:** Utseende → Temaredigeraren (se till att ditt tema är valt i rullgardinsmenyn till höger), via FTP eller SFTP, eller din hostingleverantörs filhanterare. Föredrar du att inte röra temafiler alls kan ett plugin som Code Snippets eller WPCode låta dig lägga till PHP-kod direkt från WordPress-adminpanelen.
- **Aktivt tema:** Utseende → Teman
- **Produkt-slug:** Produkter → Redigera produkt, synlig på Permalänk-raden precis under produkttiteln

---

## 1. Öppna ditt child themes functions.php

Gå till **Utseende → Temaredigerare** i din WordPress-adminpanel. I fillistan till höger, se till att ditt child theme är valt och öppna sedan **functions.php**.

<p align="center">
  <a href={require('@site/static/img/woo2-functions-php.webp').default} target="_blank" rel="noopener noreferrer">
    <img
      src={require('@site/static/img/woo2-functions-php.webp').default}
      alt="Temaredigeraren öppen med functions.php som visar den kompletta Marvify-integrationskoden"
      style={{ maxWidth: '420px', display: 'block' }}
    />
  </a>
</p>
<p align="center"><em>Utseende → Temaredigerare med functions.php öppen. Klicka för att visa i full storlek.</em></p>

Den här filen är där WordPress-teman registrerar sitt beteende. Det är rätt ställe att lägga till både visarskriptet och produktsidans logik, och ändringar här går inte förlorade när Storefront uppdateras.

> **Notera:** Att få det här att fungera kräver lite fler komponenter än vissa andra plattformar. Du behöver en WordPress- och WooCommerce-installation, ett child theme skapat och aktiverat, samt anpassad PHP tillagd i `functions.php`. Koden som visas i den här guiden är ett tillvägagångssätt. WordPress är en flexibel plattform och samma resultat kan uppnås via olika hook-mönster, plugins eller sidredigerare beroende på din installation.

> **Tips:** Om Temaredigeraren inte syns i din adminmeny kan den ha inaktiverats av ett plugin eller din hostingleverantör av säkerhetsskäl. I så fall, öppna `functions.php` via FTP eller din hostings filhanterare istället.

---

## 2. Ladda visarskriptet på produktsidor

Lägg till följande kodstycke längst ned i ditt child themes `functions.php`. Det använder `wp_head`-hooken för att skriva ut Marvify-script-taggen i sidans `<head>`-sektion, men bara när WordPress identifierar att en enskild produktsida visas.

```php
add_action('wp_head', function() {
    if (is_product()) {
        echo '<script src="https://js.marvify.io/marvify.js" type="module"></script>';
    }
});
```

Kontrollen `is_product()` är en WooCommerce-funktion som returnerar sant bara på enskilda produktsidor, så visarskriptet laddas aldrig på din startsida, blogginlägg eller andra sidor där det inte behövs. Det håller din webbplats snabb för besökare som inte tittar på produkter.

> **Ladda visaren på alla sidor**
>
> Om du föredrar att läsa in skriptet globalt snarare än villkorligt kan du ta bort `is_product()`-kontrollen och bara anropa echo direkt. Det är enklare men lägger till en liten overhead på varje sidladdning.

---

## 3. Ersätt produktbilden med visaren

Lägg till ett andra kodstycke i `functions.php`, precis under det första. Det här kopplar sig in i WooCommerces produktsideutdata, tar bort det vanliga produktbildsgalleriet för en specifik produkt och ersätter det med Marvify-visaren.

```php
add_action('woocommerce_before_single_product_summary', function() {
    global $product;

    if (!$product || $product->get_slug() !== 'din-produkt-slug') {
        return;
    }

    remove_action('woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20);

    echo '
    <div class="woocommerce-product-gallery">
        <marvify-model-viewer
            model-id="demo"
            width="100%"
            height="520px"
            bgColor="#ffffff"
            initialCameraAngle="45 -20"
            autoplay
        ></marvify-model-viewer>
    </div>';

}, 15);
```

Ersätt `din-produkt-slug` med URL-slugen för din faktiska produkt. Du hittar en produkts slug i WordPress-adminpanelen under **Produkter → Redigera produkt**, synlig på **Permalänk**-raden precis under produkttiteln.

<p align="center">
  <img src={require('@site/static/img/woo1-product-edit-screen.webp').default} alt="WooCommerce produktredigeringssida som visar produkten Stylish Bag med dess permalänk-slug synlig" style={{ maxWidth: '700px', display: 'block' }} />
</p>

Ersätt `demo` med ditt eget modell-ID från ditt Marvify-konto.

Funktionen körs med prioritet `15`, precis innan WooCommerces egna produktbildsutdata vid prioritet `20`. Den här tajmingen är det som gör att den kan ta bort standardgalleriet för den produkten innan det ens renderas. Alla andra produkter lämnas opåverkade, eftersom det tidiga `return`-uttrycket ser till att koden bara agerar på den produkt du anger.

Du bör också justera visarattributen så att modellen visas på det sätt du vill ha den, till exempel kameravinkel, bakgrundsfärg och zoomgränser. Se [Anpassade attribut](../snabbstart/marvify-viewer.md#anpassade-attribut) för en fullständig referens.

### Visarattribut som används i det här exemplet

| Attribut              | Värde     | Effekt |
| --------------------- | --------- | ------ |
| `model-id`            | `demo`    | Identifierar vilken 3D-modell som ska laddas från Marvify. |
| `width`               | `100%`    | Fyller bredden på produktmediaområdet. |
| `height`              | `520px`   | Ställer in visaren på en fast höjd som matchar den omgivande layouten. |
| `bgColor`             | `#ffffff` | Använder vit bakgrund för att smälta in i temat. |
| `initialCameraAngle`  | `45 -20`  | Ställer in startkameran på 45° horisontell rotation med en lätt nedåtlutning. |
| `autoplay`            | *(närvarande)* | Laddar modellen direkt när sidan öppnas, utan att vänta på ett klick. |

För en fullständig lista över tillgängliga attribut, se [Anpassade attribut](../snabbstart/marvify-viewer.md#anpassade-attribut).

---

## 4. Spara och förhandsgranska

Spara din `functions.php`-fil och navigera till produktsidan i din butik. 3D-visaren ska nu visas i stället för produktbilden.

Om modellen inte laddas, kontrollera att:
- Produkt-slugen i funktionen stämmer exakt med din produkts permalänk-slug.
- Värdet för `model-id` matchar identifieraren som tilldelats din modell i Marvify.
- Ditt child theme är det aktiva temat under **Utseende → Teman**.
- Du använder en [utvecklingstoken](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) om du testar med en etablerad modell utanför dess registrerade produktionsdomän.

---

Det här exemplet riktar sig mot en enda produkt och ersätter dess bild helt med 3D-visaren. Du kan anpassa samma mönster för att tillämpa visaren på alla produkter, specifika produktkategorier eller utlösa den via en knapp någon annanstans på sidan. Det grundläggande tillvägagångssättet att koppla sig in i WordPress och WooCommerces utdatasystem och villkorligt rendera `<marvify-model-viewer>` förblir detsamma.
