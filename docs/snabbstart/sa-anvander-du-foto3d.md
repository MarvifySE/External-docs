# Quick-Start

### Vad är Marvify FOTO-3D<sup>©</sup>?

Marvify erbjuder en interaktiv visare som gör det möjligt för er att visa upp era FOTO-3D<sup>©</sup> produkter digitalt – på ett engagerande och flexibelt sätt. Med en enkel länk kan ni låta era kunder rotera, zooma och utforska produkten i detalj, direkt i webbläsaren. Det fungerar lika bra på produkt- och kampanjsidor som i annonser, bloggar, sociala medier och e-commerce.

***

### Hur man redigerar HTML

Vissa av exemplen i den här guiden kräver att ni kan lägga in en länk eller ett HTML-element på er webbplats eller e-handelsplattform.\
Om ni är osäkra – klicka för en introduktion: [w3schools](https://www.w3schools.com/html/default.asp)

*För djupare instruktioner se instruktioner i vänstra fältet.*

***

### Webplats
#### *Här kommer några exempel på användning:*

***

#### "Vi vill länka till vår FOTO-3D<sup>©</sup> chipspåse på hemsidan"

**Lösning – textlänk på webbsida eller i artikel:**

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank">Se påsen i 3D</a>
```
<em>Mer info:<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">&lt;a&gt;</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target">target="_blank"</a>
</em>
***

#### "Vi vill lägga en snygg knapp på produktsidan för vår FOTO-3D<sup>©</sup> Pizza!"

**Lösning – länk stylad som knapp:**

```html
<a href="https://v.marvify.io/?m=<modell-id>" class="button" target="_blank">Se i 3D</a>
```

Ni kan använda er webbplats eller e-handelsplattform för att formatera länken som en knapp, så att den smälter in i er design.

<em>Mer info:<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">&lt;a&gt;</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links">CSS-klasser för knappar</a>
</em>

***

#### "Kan man klicka på bilden av lakritsen på min hemsida för att öppna FOTO-3D<sup>©</sup>?"

**Lösning – klickbar bild med länk:**

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank">
  <img src="lakritsbild.jpg" alt="Se lakrits i 3D" />
</a>
```

<em>Mer info:<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">&lt;a&gt;</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img">&lt;img&gt;</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#images-as-links">Länkad bild</a>
</em>

***

#### "Vi vill visa våra FOTO-3D<sup>©</sup> energibars i en popup istället för ny flik!"

**Lösning – öppna visaren i popupfönster:**

Ni kan använda både en **knapp** eller en **länk** för att öppna popupen.

Exempel med knapp:

```html
<button onclick="openFoto3D()">Se produkten i 3D</button>
```

Exempel med länk:

```html
<a href="#" onclick="openFoto3D()">Öppna 3D-visning</a>
```

Javascript:

```js
<script>
function openFoto3D() {
  window.open("https://v.marvify.io/?m=<modell-id>", "_blank", "width=800,height=600");
}
</script>
```

<em>Mer info:<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button">&lt;button&gt;</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick">onclick</a><br>
<a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/open">window.open()</a>
</em>

***

#### "Vi ska trycka menyer – kan vi använda FOTO-3D<sup>©</sup>?"

**Lösning – skapa en QR-kod med er visningslänk:**\
Exempel på QR-kodgenerator: \[länk]

Länk att använda:\
https://v.marvify.io/?m=Y2hvY2tib3gyMw==

Textförslag:\
Skanna för att se vår produkt i 3D_

***

#### "Vi vill bädda in visningen av våra FOTO-3D<sup>©</sup> praliner direkt på hemsidan!"

**Lösning – inbäddning med iframe:**

```html
<iframe src="https://v.marvify.io/?m=<modell-id>" width="100%" height="500px" style="border:none;"></iframe>
```
<em>Mer info:<br>
<a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe">iframe</a>
</em>

***

### Sociala medier

Här visar vi hur ni kan använda er unika Marvify-länk i sociala medier för att marknadsföra era produkter. Ni får konkreta exempel på hur ni kan publicera länken i vanliga inlägg, stories och annonser – oavsett om det görs via ert eget konto, en influencer eller en ambassadör.

***

#### Instagram

**Vanligt konto, influencer eller ambassadör**

**Lösning – Länk i bio:**

Ni kan lägga länken till er visare i profilen (bio) och därefter skapa ett vanligt inlägg i flödet där ni hänvisar till den. Det fungerar oavsett om inlägget kommer från er själva, en influencer eller en ambassadör.

> Jag blev helt kär i de här nya småkakorna från @SweetCrave – och man kan faktiskt se hela förpackningen i 3D.\
> Klicka på länken i min bio!

**Lösning – Story med Link Sticker:**

Skapa en Instagram Story med produktfoto och använd en **Link Sticker** för att lägga till klickbar länk direkt i bilden.

* Länk: https://v.marvify.io/?m=<modell-id>
* Text på stickern: _"Se i 3D"_

***

**Företagskonto & annonser**

**Lösning – Annons med Meta Ads Manager:**

Med ett företagskonto kan ni skapa sponsrade inlägg i flödet eller Stories via Meta Ads Manager. Dessa annonser kan rikta sig mot specifika målgrupper och innehåller klickbara länkar.

Exempel:

Text:\
Snurra vår nya snackspåse i 3D – zooma, rotera och utforska innan du beställer.\
Länk: https://v.marvify.io/?m=<modell-id>\
CTA-knapp: _Se mer_

***

#### Facebook

**Vanligt konto, influencer eller ambassadör**

**Lösning – Vanligt inlägg i flödet:**

Ni (eller någon ni samarbetar med) kan skapa ett inlägg i ert personliga flöde med en kommentar och direktlänk till 3D-visningen.

> Jag testade de här nya jordnötssnacksen från @CrispyCrunch – så sjukt goda!\
> Man kan till och med snurra runt påsen i 3D.
>
> https://v.marvify.io/?m=<modell-id>

***

**Företagssida & annonser**

**Lösning – Sponsrad annons eller vanligt inlägg:**

Ni kan publicera länken i ett vanligt inlägg från er företagssida, eller skapa en sponsrad annons som visas i målgruppens flöde.

Exempel:

Text:\
Ge bort något speciellt – snurra runt vår exklusiva pralinask i 3D.\
Länk: https://v.marvify.io/?m=<modell-id>\
CTA-knapp: _Se i 3D_

***

#### X (tidigare Twitter)

**Vanligt konto, influencer eller ambassadör**

**Lösning – Tweet i flödet:**

Ni kan skriva en vanlig tweet där ni lägger in länken till visningen. Det här fungerar också om en influencer eller ambassadör gör det åt er.

> Hur coolt är det att kunna snurra en godispåse i 3D?\
> Jag älskar den här från @SweetByte
>
> https://v.marvify.io/?m=<modell-id>

***

**Företagskonto & annonser**

**Lösning – Promoted Tweet:**

Ni kan skapa en sponsrad tweet via ert företagskonto som visas för en utvald målgrupp.

> Upptäck vår limited edition nötmix – se hela förpackningen i 3D innan du klickar hem den.
>
> https://v.marvify.io/?m=<modell-id>

***

#### LinkedIn

**Vanligt konto, influencer eller branschprofil**

**Lösning – Personligt inlägg i flödet:**

Ni eller någon ni samarbetar med (t.ex. en branschperson, influencer eller anställd) kan lägga upp ett personligt inlägg i sitt flöde med en kommentar och länk.

> Otroligt hur mycket en 3D-visning kan höja kundupplevelsen.\
> Här är ett exempel på en produkt jag själv gillar – en lyxig chokladask i 3D.
>
> https://v.marvify.io/?m=<modell-id>

***

**Företagssida & annonser**

**Lösning – Sponsrat inlägg eller företagsinlägg i flödet:**

Ni kan använda er företagssida för att publicera ett organiskt inlägg eller en sponsrad annons riktad mot konsumenter eller återförsäljare.

> Vill ni visa era produkter på ett nytt sätt?\
> Så här ser vår ekologiska snackspåse ut – i 3D, direkt i webbläsaren.
>
> https://v.marvify.io/?m=<modell-id>

***

### E-Commerce

På plattformar som WooCommerce, Shopify, Squarespace m.fl. kan ni enkelt länka till er FOTO-3D<sup>©</sup>-visning direkt från produktsidorna. Länken fungerar i alla webbläsare, även på mobil.

***

#### "Vi har en WooCommerce-butik – hur lägger vi in vår FOTO-3D<sup>©</sup> av snackspåsen?"

**Lösning – Lägg in en länk direkt i produktbeskrivningen:**

I WooCommerce kan ni redigera produktens innehåll via WordPress admin. Lägg in en klickbar textlänk eller en knapp i beskrivningsfältet. Då ser kunden den direkt när de läser om produkten.

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank">Se produkten i 3D</a>
```

***

#### "Vi använder Shopify – hur visar vi våra gelégodis i FOTO-3D<sup>©</sup>?"

**Lösning – Lägg in länken i HTML-vyn i produktbeskrivningen:**

I Shopify går ni till adminpanelen → Produkter → Redigera produkt → Klicka på **“Visa HTML”** i beskrivningen. Där kan ni klistra in länken. Den syns sedan på produktsidan under produkttexten.

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank">Utforska produkten i 3D</a>
```

***

#### "Vi har Squarespace – kan vi lägga in FOTO-3D<sup>©</sup> av chokladbitarna?"

**Lösning – Länka direkt i produktbeskrivningen via editor:**

I Squarespace redigerar ni varje produktsida i editorn. Lägg till en vanlig länk i beskrivningsfältet. Den visas direkt för kunden under produktinformationen.

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank">Se produkten i 3D</a>
```

***

#### "Vi bygger med Webflow – hur får vi med FOTO-3D<sup>©</sup> som visar nötmixen?"

**Lösning – Lägg till en extern länk i produktens layout:**

I Webflow använder ni designer-editorn för att lägga in knappar eller textlänkar. Sätt länken till er 3D-visning som en extern URL. Ni kan placera den precis där ni vill på sidan.

https://v.marvify.io/?m=<modell-id>

***

#### "Vi har vår butik i Magento – hur visar vi produkten i FOTO-3D<sup>©</sup> där?"

**Lösning – Redigera produktbeskrivningen i adminpanelen:**

I Magento kan ni lägga till HTML direkt i produktbeskrivningsfältet via backend. Länken syns sedan tillsammans med övrig produktinfo.

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank">Visa i 3D</a>
```

***

#### Tips

* Placera länken nära köpknappen eller produktbilden
* Använd texter som _“Se i 3D”_, _“Utforska visuellt”_ eller _“Snurra runt”_
* Lägg gärna till en QR-kod i förpackning eller tryckt material
