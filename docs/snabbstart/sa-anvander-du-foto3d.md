---
id: sa-anvander-du-foto3d
title: Snabbstart
sidebar_label: Snabbstart
slug: /
---
# Snabbstart

### Vad är Marvify FOTO-3D<sup>©</sup>?

Marvify erbjuder en interaktiv visare som gör det möjligt för er att visa upp era FOTO-3D<sup>©</sup> produkter digitalt – på ett engagerande och flexibelt sätt. Med en enkel länk kan ni låta era kunder rotera, zooma och utforska produkten i detalj, direkt i webbläsaren. Det fungerar lika bra på produkt- och kampanjsidor som i annonser, bloggar, sociala medier och e-commerce.

[INFOGA BILD/VIDEO (visa en modell)]

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
<a href="https://v.marvify.io/?m=MODEL-ID" target="_blank">Se påsen i 3D</a>
```
[INFOGA GIF (Ett exemepl på blå klickbar länk som öppnar viewer)]
***

*Mer info:*

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [`target="_blank"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#target)

***

#### "Vi vill lägga en snygg knapp på produktsidan för vår FOTO-3D<sup>©</sup> Pizza!"

**Lösning – länk stylad som knapp:**

```html
<a href="https://v.marvify.io/?m=MODEL-ID" class="button" target="_blank">Se i 3D</a>
```

Ni kan använda er webbplats eller e-handelsplattform för att formatera länken som en knapp, så att den smälter in i er design.

[INFOGA GIF (Klicka på knapp som öppnar viewer)]

***

*Mer info:*

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [CSS-klasser för knappar](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)


***

#### "Kan man klicka på bilden av lakritsen på min hemsida för att öppna FOTO-3D<sup>©</sup>?"

**Lösning – klickbar bild med länk:**

```html
<a href="https://v.marvify.io/?m=MODEL-ID" target="_blank">
  <img src="lakritsbild.jpg" alt="Se lakrits i 3D" />
</a>
```

[INFOGA GIF (Klicka på exempel bild öppna viewer)]

***

*Mer info:*

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [Länkad bild](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#images-as-links)


***

#### "Vi vill visa våra FOTO-3D<sup>©</sup> energibars i en popup istället för ny flik!"

**Lösning – öppna visaren i popupfönster:**

Ni kan använda både en **knapp** eller en **länk** för att öppna popupen.

Exempel med knapp:

```html
<button onclick="openFoto3D()">Se produkten i 3D</button>
```

[INFOGA GIF (klickbar knapp som öppnar popup)]

Exempel med länk:

```html
<a href="#" onclick="openFoto3D()">Öppna 3D-visning</a>
```

[INFOGA GIF (klickbar länk som öppnar popup)]

Javascript:

```js
<script>
function openFoto3D() {
  window.open("https://v.marvify.io/?m=MODEL-ID", "_blank", "width=800,height=600");
}
</script>
```

***

*Mer info:*

- [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
- [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)


***

#### "Vi ska trycka menyer – kan vi använda FOTO-3D<sup>©</sup>?"

**Lösning – skapa en QR-kod med er visningslänk:**\
Exempel på QR-kodgenerator: [länk]

Länk att använda:\
`https://v.marvify.io/?m=MODEL-ID`

Textförslag:\
_Skanna för att se vår produkt i 3D_

[INFOGA BILD (ett meny exempel i print med QR-KOD, kanske filma en hand med mobil som öppnar QR-länk)]

***

#### "Vi vill bädda in visningen av våra FOTO-3D<sup>©</sup> praliner direkt på hemsidan!"

**Lösning – inbäddning med iframe:**

```html
<iframe src="https://v.marvify.io/?m=MODEL-ID" width="100%" height="500px" style="border:none;"></iframe>
```

[INFOGA GIF (exempel på iframe och öppning)]

[INFOGA STYLING INSTRUKTIONER]

[INFOGA GIF (exempel på stylad iframe och öppning)]

***

*Mer info:*

- [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)


***

### Sociala medier

<sub>*P.S. Följande plattformar tillhandahålls av externa leverantörer, och deras implementation kan avvika från vad som anges i vår nuvarande dokumentation. Vi rekommenderar att du konsulterar den officiella dokumentationen från respektive leverantör innan du gör några ändringar.*</sub>

Här visar vi hur ni kan använda er unika Marvify-länk i sociala medier för att marknadsföra era produkter. Ni får konkreta exempel på hur ni kan publicera länken i vanliga inlägg, stories och annonser – oavsett om det görs via ert eget konto, en influencer eller en ambassadör.

***

#### Instagram

**Vanligt konto, influencer eller ambassadör**

**Lösning – Länk i bio:**

Ni kan lägga länken till er visare i profilen (bio) och därefter skapa ett vanligt inlägg i flödet där ni hänvisar till den. Det fungerar oavsett om inlägget kommer från er själva, en influencer eller en ambassadör.

> Jag blev helt kär i de här nya småkakorna från @SweetCrave – och man kan faktiskt se hela förpackningen i 3D.\
> Klicka på länken i min bio!

[INFOGA Bild på exempel bio]
[INFOGA Bild på exempel linktree]

**Lösning – Story med Link Sticker:**

Skapa en Instagram Story med produktfoto och använd en **Link Sticker** för att lägga till klickbar länk direkt i bilden.

* Länk: `https://v.marvify.io/?m=MODEL-ID`
* Text på stickern: _"Se i 3D"_

[INFOGA GIF på story och klicka på länk]

***

**Företagskonto & annonser**

**Lösning – Annons med Meta Ads Manager:**

Med ett företagskonto kan ni skapa sponsrade inlägg i flödet eller Stories via Meta Ads Manager. Dessa annonser kan rikta sig mot specifika målgrupper och innehåller klickbara länkar.

Exempel:

Text:\
Snurra vår nya snackspåse i 3D – zooma, rotera och utforska innan du beställer.\
Länk: `https://v.marvify.io/?m=MODEL-ID`\
CTA-knapp: _Se mer_

***

#### Facebook

**Vanligt konto, influencer eller ambassadör**

**Lösning – Vanligt inlägg i flödet:**

Ni (eller någon ni samarbetar med) kan skapa ett inlägg i ert personliga flöde med en kommentar och direktlänk till 3D-visningen.

> Jag testade de här nya jordnötssnacksen från @CrispyCrunch – så sjukt goda!\
> Man kan till och med snurra runt påsen i 3D.
>
> `https://v.marvify.io/?m=MODEL-ID`

[INFOGA GIF (skriva inlägg med slutresultat)]

***

**Företagssida & annonser**

**Lösning – Sponsrad annons eller vanligt inlägg:**

Ni kan publicera länken i ett vanligt inlägg från er företagssida, eller skapa en sponsrad annons som visas i målgruppens flöde.

Exempel:

Text:\
Ge bort något speciellt – snurra runt vår exklusiva pralinask i 3D.\
Länk: `https://v.marvify.io/?m=MODEL-ID`\
CTA-knapp: _Se i 3D_

***

#### X (tidigare Twitter)

**Vanligt konto, influencer eller ambassadör**

**Lösning – Tweet i flödet:**

Ni kan skriva en vanlig tweet där ni lägger in länken till visningen. Det här fungerar också om en influencer eller ambassadör gör det åt er.

> Hur coolt är det att kunna snurra en godispåse i 3D?\
> Jag älskar den här från @SweetByte
>
> `https://v.marvify.io/?m=MODEL-ID`

[INFOGA GIF (skapa ett inlägg med resultat)]

***

**Företagskonto & annonser**

**Lösning – Promoted Tweet:**

Ni kan skapa en sponsrad tweet via ert företagskonto som visas för en utvald målgrupp.

> Upptäck vår limited edition nötmix – se hela förpackningen i 3D innan du klickar hem den.
>
> `https://v.marvify.io/?m=MODEL-ID`

***

#### LinkedIn

**Vanligt konto, influencer eller branschprofil**

**Lösning – Personligt inlägg i flödet:**

Ni eller någon ni samarbetar med (t.ex. en branschperson, influencer eller anställd) kan lägga upp ett personligt inlägg i sitt flöde med en kommentar och länk.

> Otroligt hur mycket en 3D-visning kan höja kundupplevelsen.\
> Här är ett exempel på en produkt jag själv gillar – en lyxig chokladask i 3D.
>
> `https://v.marvify.io/?m=MODEL-ID`

[INFOGA GIF (skapa ett inlägg med resultat)]

***

**Företagssida & annonser**

**Lösning – Sponsrat inlägg eller företagsinlägg i flödet:**

Ni kan använda er företagssida för att publicera ett organiskt inlägg eller en sponsrad annons riktad mot konsumenter eller återförsäljare.

> Vill ni visa era produkter på ett nytt sätt?\
> Så här ser vår ekologiska snackspåse ut – i 3D, direkt i webbläsaren.
>
> `https://v.marvify.io/?m=MODEL-ID`

***

### E-handel

FOTO-3D<sup>©</sup> fungerar med alla vanliga e-handelsplattformar som tillåter att du lägger in länkar i produktbeskrivningar, sidinnehåll eller mallar.  
Länken till din visning kan placeras där det passar bäst – till exempel under produkttexten, bredvid köpknappen eller i bildgalleriet.

Du behöver inga specialfunktioner eller integrationer – det räcker att kunna lägga in en vanlig länk.

Fungerar i alla moderna webbläsare, även på mobil.

---

#### Mer information kommer

Vi arbetar med att ta fram mer detaljerad dokumentation för specifika e-handelsplattformar och deras redigeringsverktyg.  
Tills dess är du alltid välkommen att kontakta oss om du vill ha hjälp med just din lösning.

**[info@marvify.com](mailto:info@marvify.com)**

***

#### Tips

* Placera länken nära köpknappen eller produktbilden
* Använd texter som _“Se i 3D”_, _“Utforska visuellt”_ eller _“Snurra runt”_
* Lägg gärna till en QR-kod i förpackning eller tryckt material
