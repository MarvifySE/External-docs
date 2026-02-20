---
id: sms-rcs-marketing
title: Hur du använder Marvify 3D i SMS och RCS-marknadsföring
sidebar_label: SMS & RCS-marknadsföring
---

# Hur du använder Marvify 3D i SMS och RCS-marknadsföring

Den här guiden förklarar hur du kan inkludera Marvify 3D i SMS- och RCS-kommunikation oavsett vilken meddelandeplattform du använder. Arbetsflödet är liknande över de flesta verktyg.

**I den här guiden använder vi Rule som exempeltjänst**, men samma principer gäller för andra kanaler som Klaviyo SMS, Twilio, Voyado och liknande plattformar.

SMS och RCS kan inte visa inbäddat 3D-innehåll eller skript. Istället får prenumeranter ett kort meddelande som innehåller en länk som öppnar en webbsida där din Marvify-visare redan körs. Meddelandet kan innehålla en kort beskrivning, en förhandsgranskningsbild eller andra ledtrådar som hjälper prenumeranten att förstå vad som väntar dem efter att de trycker på länken.

Om din Marvify-visare ännu inte är konfigurerad på din webbplats kan du läsa [Marvify Viewer-guiden](../snabbstart/marvify-viewer.md) för teknisk dokumentation eller [webbsida-integrationsguiden](../exempel/webpage-integration.md) för ett praktiskt exempelupplägg.

## 1. Öppna Rule och skapa ett nytt SMS- eller RCS-meddelande

Logga in på Rule och öppna Campaigns-sektionen. Skapa en ny kampanj och välj SMS eller RCS. Rule låter dig blanda text med en länk och valfri media beroende på typen av meddelande.

## 2. Lägg till din Marvify-länk i meddelandet

Kopiera den fullständiga URL:en till sidan där din Marvify-visare finns inbäddad. Inkludera sedan länken i slutet av din SMS- eller RCS-text. Många varumärken lägger till en kort beskrivande fras för att hjälpa mottagaren att förstå varför länken är inkluderad. Exempel:

- Se produkten i full 3D
- Rotera objektet och utforska detaljer
- Interaktiv 3D-förhandsgranskning tillgänglig här

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2rem',
    flexWrap: 'wrap'
  }}
>
  {/* Video */}
  <div style={{ width: '45%', textAlign: 'center' }}>
    <video
      width="100%"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src={require('@site/static/img/rcs.webm').default}
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
      RCS meddelande
    </em>
  </div>

  {/* Image */}
  <div style={{ width: '41.5%', textAlign: 'center' }}>
    <img
      src={require('@site/static/img/sms-example.webp').default}
      alt="Kort meddelande med en länk till 3D-visaren"
      style={{ width: '100%' }}
    />
    <em
      style={{
        display: 'block',
        marginTop: '0.5rem',
        fontSize: '0.9rem',
        color: '#666'
      }}
    >
      SMS meddelande
    </em>
  </div>
</div>

SMS-meddelanden har begränsat teckenutrymme, så håll texten kort: en hälsning, en mening om produkten och länken är oftast tillräckligt. RCS tillåter längre layouter men kortfattad formulering fungerar generellt bra för båda formaten.

### Valfritt: Lägg till en bild eller RCS rich card

RCS och vissa förbättrade SMS-plattformar stöder bilder eller rich cards. En stillbild eller en lättviktig animerad förhandsgranskning kan hjälpa till att visa att en 3D-upplevelse är tillgänglig efter klicket.

<p align="center">
  <video
    width="60%"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src={require('@site/static/img/RCS-example.webm').default}
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
    RCS meddelande
  </em>
</p>

Om din plattform bara skickar standard-SMS måste meddelandet vara enbart text. Bilder stöds inte i SMS, så alla visuella element bör placeras på webbsidan du länkar till.

## 3. Innan du skickar

### Testa meddelandet

Rule låter dig skicka ett test-SMS eller RCS-meddelande till dig själv. Det hjälper dig att verifiera att:

- Länken öppnas korrekt på mobilen
- Marvify-visaren laddas som förväntat
- All bifogad media visas korrekt

### Skicka eller schemalägg

När allt är klart väljer du dina prenumerantlistor och antingen skickar meddelandet omedelbart eller schemalägger det. I Rule kan du lägga till prenumeranter genom att importera en CSV-fil, manuellt lägga till enskilda personer eller synkronisera från stödda integrationer.

Att trycka på länken tar dina mottagare direkt till din 3D-upplevelse där de kan utforska produkten i full detalj. Det här tillvägagångssättet låter dig ta med interaktiv 3D i mobilmeddelanden utan att kräva några speciella funktioner på mottagarens enhet utöver en standardwebbläsare för mobilen.

---

*Rule-gränssnittet kan förändras över tid, men arbetsflödet för att länka till din Marvify-upplevelse förblir detsamma. För den mest aktuella informationen kan du besöka Rules kunskapsbas: [Rule-support](https://www.rule.se/support).*
