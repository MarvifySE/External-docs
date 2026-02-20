---
id: email-marketing-med-rule
title: Hur du använder Marvify 3D i e-postmarknadsföring
sidebar_label: E-postmarknadsföring
---

# Hur du använder Marvify 3D i e-postmarknadsföring

Den här guiden förklarar hur du kan integrera Marvify 3D i e-postmarknadsföring oavsett vilken plattform du använder. De flesta e-posttjänster fungerar på liknande sätt när det gäller att länka till externa upplevelser.

**I den här guiden använder vi Rule som exempelplattform**, men samma tillvägagångssätt gäller för andra verktyg som Mailchimp, Klaviyo, Drip och liknande tjänster.

E-postklienter stödjer inte inbäddad 3D eller skript, så visaren öppnas vanligtvis på en sida på din webbplats. E-postmeddelanden kan istället lyfta fram produkten visuellt och länka mottagare till den fullständiga 3D-upplevelsen i vilket format som passar din kommunikationsstil.

Om din Marvify-visare ännu inte är konfigurerad på din webbplats kan du läsa [Marvify Viewer-guiden](../snabbstart/marvify-viewer.md) för teknisk dokumentation eller [webbsida-integrationsguiden](../exempel/webpage-integration.md) för ett praktiskt exempelupplägg.

## 1. Öppna Rule och skapa eller redigera en e-postmall

<p align="center">
  <img
    src={require('@site/static/img/campaign-interface.webp').default}
    alt="Standard kampanjredigerare i Rule"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Kampanjredigerare i Rule
  </em>
</p>

Logga in på Rule och öppna kampanjredigeraren. Du kan skapa ett nytt utskick eller uppdatera en befintlig mall. I redigeraren kan du välja var i din layout du vill lyfta fram ditt 3D-innehåll.

E-postmeddelanden kan inte visa interaktiv 3D direkt, så innehållet du lägger till i Rule kommer att länka mottagare till din webbsida där visaren körs.

## 2. Lägg till en bild, GIF eller knapp som länkar till din 3D-visare

Det finns flera sätt att presentera produkten visuellt i ett e-postmeddelande:

- Ett stillastående produktfoto som länkar till 3D-upplevelsen
- En animerad GIF som visar rotationen eller interaktionen
- En tydlig uppmaning till handling (call to action)

För att lägga till en länk i Rule kopierar du först den fullständiga URL:en till sidan där din Marvify-visare finns inbäddad. Välj sedan ett block i e-postredigeraren, klistra in URL:en i länkfältet och välj om länken ska öppnas i en ny flik.

<p align="center">
  <img
    src={require('@site/static/img/rule-linking-interface.webp').default}
    alt="Lägg till länk i Rule"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Lägg till länk
  </em>
</p>

### Använda en animerad GIF

En kort roterande GIF genererad från din Marvify-modell är ett effektivt sätt att signalera att en 3D-upplevelse väntar efter klicket. Alla animationer kan laddas upp till Rule som ett standardbildblock och länkas till din visarsida.

<p align="center">
  <video
    width="90%"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src={require('@site/static/img/email-preview.webm').default}
      type="video/webm"
    />
  </video>
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    En roterande produktförhandsgranskning använd som e-post-GIF
  </em>
</p>

:::tip Pro-Tip
Vissa versioner av desktop Outlook (2007-2016) stöder inte GIF-animationer och visar endast den **första bildrutan**. Se till att din GIF:s första bildruta ser bra ut som en statisk bild!
:::

## 3. Innan du skickar

### Valfritt: Lägg till en uppmaning till handling

<p align="center">
  <img
    src={require('@site/static/img/cta.webp').default}
    alt="Exempel på en CTA-knapp"
  />
  <br />
  <em style={{ fontSize: '0.9rem', color: '#666' }}>
    Exempel på en CTA-knapp
  </em>
</p>

En uppmaning till handling gör syftet med länken mer synligt. Vanliga exempel inkluderar:

- "Visa i 3D"
- "Utforska produkten"
- "Rotera objektet"

I Rule kan du dra ett knappblock till din layout och klistra in din Marvify-visare länk i knappens URL-fält.

### Testa ditt e-postmeddelande

Eftersom e-postklienter beter sig olika kan det vara användbart att skicka ett test-e-postmeddelande till dig själv från Rule. Det låter dig verifiera att:

- Alla länkar fungerar korrekt
- Animerade GIF:ar visas som förväntat
- Layouten skalar korrekt på mobila enheter

### Skicka eller schemalägg

När ditt e-postmeddelande är klart väljer du dina mottagar-listor och antingen skickar kampanjen omedelbart eller schemalägger den till senare. I Rule kan du lägga till mottagare genom att importera en CSV-fil, manuellt lägga till enskilda personer eller synkronisera från stödda integrationer.

Alla som klickar på dina bilder eller knappar kommer att tas till din webbsida där de kan utforska produkten i 3D. Det här tillvägagångssättet låter dig introducera interaktiv 3D i din e-postmarknadsföring utan att kräva något speciellt stöd för e-postklienter.

---

## Valfritt: Anpassad HTML-e-post

Medan visuella byggare är standard stöder de flesta plattformar också anpassad kodad HTML. Det här är ett alternativ för varumärken som kräver specifik layoutkontroll eller integration i befintliga utvecklingsarbetsflöden.

- **Tabellbaserade layouter:** För att säkerställa konsekvent rendering i äldre klienter som Outlook används `<table>`-strukturer snarare än moderna `<div>`-taggar.
- **Inline CSS:** Styling bör appliceras direkt på HTML-taggar (inline) för att förhindra att e-postklienter tar bort header-baserade stylesheets.
- **Resurshantering:** För anpassade mallar hostas bilder och GIF:ar vanligtvis på din egen publika server eller en värdtjänst, och refereras med absoluta URL:er.

### Grundläggande kodexempel

Nedan finns en förenklad struktur för en 3D-produktlänk med en bild och en knapp:

```html
<!-- Huvud-containertabell -->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td align="center" style="padding: 20px;">
      <!-- Produktbildlänk -->
      <a href="https://dinwebbplats.se/produktsida" target="_blank">
        <img src="https://dinserver.se/produkt-forhandsgranskning.gif" width="300" alt="Visa i 3D" style="display: block; border: 0;" />
      </a>
      <br />
      <!-- CTA-knapp -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td bgcolor="#007aff" style="border-radius: 4px; padding: 12px 24px;">
            <a href="https://dinwebbplats.se/produktsida" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold; display: inline-block;">
              Utforska i 3D
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### Leveransbarhet och skräppostmedvetenhet

När du bygger anpassade kampanjer hjälper ett balanserat förhållande mellan text och bilder till att säkerställa hög leveransbarhet. Att verifiera din domäns SPF/DKIM-poster och inkludera en tydlig avregistreringslänk är standardpraxis för att upprätthålla ett professionellt avsändarrykte. När du använder en visuell byggare som Rule eller Mailchimp hanteras detta vanligtvis av plattformen och gäller framför allt om du skickar från en egen e-postserver.

---

*Rule-gränssnittet kan förändras över tid, men det allmänna arbetsflödet för att länka till din Marvify-upplevelse förblir detsamma. För den mest aktuella informationen om Rule-uppdateringar kan du besöka: [Rules kunskapsbas](https://www.rule.se/support).*
