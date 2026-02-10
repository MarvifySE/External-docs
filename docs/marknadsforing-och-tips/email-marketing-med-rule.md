---
id: email-marketing-med-rule
title: Hur du använder FOTO-3D i e-postmarknadsföring
sidebar_label: E-postmarknadsföring
---

# Hur du använder FOTO-3D i e-postmarknadsföring

Den här guiden förklarar hur du kan integrera Marvify FOTO-3D i e-postmarknadsföring oavsett vilken plattform du använder. De flesta e-posttjänster fungerar på liknande sätt när det gäller att länka till externa upplevelser.

**I den här guiden använder vi Rule som exempelplattform**, men samma tillvägagångssätt gäller för andra verktyg som Mailchimp, Klaviyo, Drip och liknande tjänster.

E-postklienter stödjer inte inbäddad 3D eller skript, så visaren öppnas vanligtvis på en sida på din webbplats. E-postmeddelanden kan istället lyfta fram produkten visuellt och länka prenumeranter till den fullständiga 3D-upplevelsen i vilket format som passar din kommunikationsstil.

Om din Marvify-visare ännu inte är konfigurerad på din webbplats kan du hänvisa till den tekniska dokumentationen och exempelguiden.

- [Teknisk dokumentation](https://docs.marvify.io/snabbstart/marvify-viewer/)
- [Exempelguide](/exempel/webpage-integration)

## 1. Kopiera länken till din Marvify 3D-upplevelse

Öppna den webbsida där din Marvify-visare finns tillgänglig. Detta kan vara en produktsida, en kampanjsida eller vilken plats som helst där du har bäddat in visaren. Kopiera den fullständiga URL:en från din webbläsare. Denna URL kommer att användas som mållänk i din Rule-mall.

## 2. Öppna Rule och skapa eller redigera en e-postmall

<!-- ![Standard ny kampanjredigerare i Rule](pics/campaign-interface.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: campaign-interface.png - Standard ny kampanjredigerare i Rule*
:::

Logga in på Rule och öppna kampanjredigeraren. Du kan skapa ett nytt utskick eller uppdatera en befintlig mall. I redigeraren kan du välja var i din layout du vill lyfta fram ditt 3D-innehåll.

E-postmeddelanden kan inte visa interaktiv 3D direkt, så innehållet du lägger till i Rule kommer att länka prenumeranter till din webbsida där visaren körs.

### Lägga till prenumeranter i Rule

Innan du skickar din kampanj väljer du vilka prenumeranter som ska få den. I Rule kan du lägga till prenumeranter genom att importera en CSV-fil, manuellt lägga till enskilda personer eller synkronisera från stödda integrationer. När din mall är klar väljer du en eller flera prenumerantlistor när du schemalägger eller skickar kampanjen.

## 3. Lägg till en bild, GIF eller knapp som länkar till din 3D-visare

Det finns flera sätt att presentera produkten visuellt i ett e-postmeddelande, till exempel:

- Ett stillastående produktfoto som länkar till 3D-upplevelsen
- En animerad GIF som visar rotationen eller interaktionen
- En tydlig uppmaning till handling (call to action)

För att lägga till en länk i Rule:

- Välj blocket i e-postredigeraren
- Klistra in din Marvify-visare URL i länkfältet
- Välj om länken ska öppnas i en ny flik

<!-- ![Länkgränssnitt](pics/rule-linking-interface.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: rule-linking-interface.png - Länka en produktbild till din 3D-visare i Rules e-postredigerare*
:::

## 4. Använd en animerad GIF för att förhandsgranska 3D-upplevelsen

<!-- <video src="pics/email-preview.mp4" autoplay muted loop playsinline controls style={{maxWidth: '100%'}}>
Din webbläsare stöder inte video-taggen.
</video> -->

:::info Videoplatshållare
*Lägg till video: email-preview.mp4 - Exempel på en roterande förhandsgranskning som används i ett e-postmeddelande*
:::

Ett litet animerat element kan hjälpa till att indikera att en 3D-upplevelse väntar efter klicket. Ett alternativ är en kort roterande GIF genererad från din Marvify-modell, men andra visuella ledtrådar kan också fungera beroende på din design. Alla animationer kan laddas upp till Rule som ett standardbildblock och länkas till din visarsida.

:::tip Pro-Tips
Vissa versioner av desktop Outlook (2007-2016) stöder inte GIF-animationer och visar endast den **första bildrutan**. Se till att din GIF:s första bildruta ser bra ut som en statisk bild!
:::

## 5. Lägg till en uppmaning till handling för extra tydlighet

<!-- ![Exempel på CTA-knapp](pics/cta.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: cta.png - Exempel på CTA-knapp*
:::

En uppmaning till handling gör syftet med länken mer synligt. Vanliga exempel inkluderar:

- "Visa i 3D"
- "Utforska produkten"
- "Rotera objektet"

I Rule kan du dra ett knappblock till din layout och klistra in din Marvify-visare länk i knappens URL-fält.

## 6. Testa ditt e-postmeddelande innan du skickar

Eftersom e-postklienter beter sig olika kan det vara användbart att skicka ett test-e-postmeddelande till dig själv från Rule. Detta låter dig verifiera att:

- Alla länkar fungerar korrekt
- Animerade GIF:ar visas som förväntat
- Layouten skalar korrekt på mobila enheter

## 7. Skicka eller schemalägg din kampanj

När ditt e-postmeddelande är klart kan du välja dina prenumerantlistor och antingen skicka kampanjen omedelbart eller schemalägga den till senare. Alla som klickar på dina bilder eller knappar kommer att tas till din webbsida där de kan utforska produkten i 3D.

Detta tillvägagångssätt låter dig introducera interaktiv 3D i din e-postmarknadsföring utan att kräva något speciellt stöd för e-postklienter.

---

*Rule-gränssnittet kan förändras över tid, men det allmänna arbetsflödet för att länka till din Marvify-upplevelse förblir detsamma. För den mest aktuella informationen om Rule-uppdateringar kan du besöka: [Rules kunskapsbas](https://www.rule.se/support).*

---

## Alternativ: Anpassad HTML-e-postuppbyggnad

Medan visuella byggare är standard, stöder de flesta plattformar också användning av anpassad kodad HTML. Detta är ett alternativ för varumärken som kräver specifik layoutkontroll eller integration i befintliga utvecklingsarbetsflöden.

- **Tabellbaserade layouter:** För att säkerställa konsekvent rendering i äldre klienter som Outlook används `<table>`-strukturer snarare än moderna `<div>`-taggar.
- **Inline CSS:** Styling bör appliceras direkt på HTML-taggar (inline) för att förhindra att e-postklienter tar bort header-baserade stylesheets.
- **Resurshantering:** För anpassade mallar hostas bilder och GIF:ar vanligtvis på din egen publika server eller en värdtjänst av ditt val, och refereras med absoluta URL:er.

### Grundläggande kodexempel

Nedan finns en förenklad struktur för en 3D-produktlänk med en bild och en knapp:

```html
<!-- Main Container Table -->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td align="center" style="padding: 20px;">
      <!-- Product Image Link -->
      <a href="https://yourwebsite.com/product-page" target="_blank">
        <img src="https://yourserver.com/product-preview.gif" width="300" alt="View in 3D" style="display: block; border: 0;" />
      </a>
      <br />
      <!-- CTA Button -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td bgcolor="#007aff" style="border-radius: 4px; padding: 12px 24px;">
            <a href="https://yourwebsite.com/product-page" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold; display: inline-block;">
              Explore in 3D
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### Leveransbarhet och skräppostmedvetenhet

När du utvecklar anpassade kampanjer hjälper det att bibehålla ett balanserat förhållande mellan text och bilder för att säkerställa hög leveransbarhet. Dessutom är verifiering av din domäns SPF/DKIM-poster och att inkludera en tydlig avregistreringslänk standardpraxis för att upprätthålla ett professionellt avsändarrykte.
