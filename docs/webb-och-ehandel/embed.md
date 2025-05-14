# Embed

Att bädda in **FOTO-3D visaren** är enkelt.

Du kan använda en vanlig `<iframe>` för att visa visaren direkt på din webbsida, landningssida, e‑handel eller liknande.

---

## Exempel – iframe

```html
<iframe
  src="https://v.marvify.io/?m=<modell-id>"
  width="100%"
  height="500"
  style="border: none;"
></iframe>
```

**Tips:**
- Du kan justera `width` och `height` som det passar din layout.

---

## Kompatibilitet

Inbäddning fungerar på alla plattformar som tillåter att du använder HTML och `<iframe>` i din layout. Exempel:

| Plattform                  | Stöd för inbäddning | Kommentar                                      |
| -------------------------- | ------------------- | ---------------------------------------------- |
| WordPress (egen host)      | ✅ Ja                | Fungerar i blockredigeraren eller som HTML     |
| Webflow                    | ✅ Ja                | Lägg till som Embed-element                    |
| Shopify                    | ✅ Ja                | I anpassade mallar eller temaredigerare        |
| Squarespace                | ✅ Ja                | Använd “Code”-block                            |
| Wix                        | ✅ Ja                | Använd “Embed HTML”-komponent                  |
| Vercel / Netlify / etc     | ✅ Ja                | Full kontroll över HTML och struktur           |
| WordPress.com (hostad)     | ⚠️ Begränsat         | Endast med uppgraderade planer (Business+)     |

> Om plattformen du använder tillåter HTML-inbäddning – då fungerar visaren också.

---

## Alternativ – Länk eller popup

Om du inte kan bädda in visaren direkt (t.ex. i ett mejl eller på en plattform utan stöd för iframes), kan du länka till den istället.

### Klickbar textlänk

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank" rel="noopener">
  Se produkten i 3D
</a>
```

### Klickbar knapp (popup)

```html
<button onclick="window.open('https://v.marvify.io/?m=<modell-id>', 'popup', 'width=800,height=600'); return false;">
  Öppna 3D-visning
</button>
```

---

## Behöver du hjälp?

Hör gärna av dig om du är osäker på vad som fungerar på just din plattform – vi hjälper gärna till!

**[info@marvify.com](mailto:info@marvify.com)**

---

## Mer info

För dig som vill veta mer om `<iframe>` och hur det fungerar i webbläsare:

[MDN Web Docs – &lt;iframe&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)
