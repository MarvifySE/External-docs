---
id: klickbar-bild
title: Klickbar bild
sidebar_label: Klickbar bild
---
# Klickbar produktbild

Du kan göra en bild klickbar så att den öppnar en FOTO-3D©-visning i ett nytt fönster eller flik. Det här kan användas både i e-post och på vanliga webbsidor. Klickbara bilder är användbara när du vill att användaren intuitivt ska kunna klicka på en produkt för att se den i 3D, utan att använda extra text eller knappar.

---

## Exempel

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank">
  <img src="https://din-domän.se/bilder/produkt.jpg" alt="Se produkten i 3D" style="display:block; max-width:600px; width:100%;" />
</a>
```

---

## Vad gör `target="_blank"`?

Attributet `target="_blank"` instruerar webbläsaren att öppna länken i en **ny flik eller ett nytt fönster**, istället för att ersätta det aktuella innehållet.

**Fördelar:**
- Användaren behåller den aktuella sidan öppen.
- Rekommenderas för externa innehåll som t.ex. FOTO-3D©-visningar.

**Utan `target="_blank"`:**  
Länken öppnas i **samma fönster**, vilket ersätter aktuell sida – något som kan skapa en sämre användarupplevelse i vissa sammanhang, som nyhetsbrev eller artiklar.

---

## Vad gör `style`?

Attributet `style` innehåller CSS-regler som styr hur bilden visas. I exemplet ovan används det för att:

```css
display: block;        /* Tar bort radbrytningen under bilden */
max-width: 600px;      /* Begränsar bildens storlek på stora skärmar */
width: 100%;           /* Gör bilden responsiv (anpassar sig efter behållaren) */
```

### Du kan även lägga till fler stilar, t.ex.:

```css
border: 2px solid #ddd;           /* Ljus kant runt bilden */
border-radius: 8px;               /* Rundade hörn */
box-shadow: 0 2px 10px rgba(0,0,0,0.15);  /* Skugga bakom bilden */
```

**Exempel:**

```html
<img src="..." style="width:100%; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.15);" />
```

---

## Användningsområden

- **E-postutskick:** En produktbild i ett nyhetsbrev som leder till 3D-visningen.
- **Bloggartiklar eller guider:** Klickbara bilder i brödtext.
- **Produktgallerier eller kataloger:** Bilder som direkt länkar till 3D-visning istället för separat knapp.

---

## Tillgänglighet

Använd alltid `alt`-text som förklarar bilden och vad som händer vid klick.  
Exempel: `"Se vår snackspåse i 3D"` eller `"3D-visning av chokladask"`

---

## Kompatibilitet

- Klickbara bilder fungerar i alla moderna webbläsare.
- I e-post fungerar de i de flesta större klienter (Gmail, Outlook, Apple Mail), men vissa blockerar bilder tills användaren godkänner dem.
- Lägg gärna till en **textlänk som backup** under bilden i e-postutskick.

---

*Mer info:*

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [Bild som länk](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#images-as-links)
- [target-attributet](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)
- [style-attributet](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style)

