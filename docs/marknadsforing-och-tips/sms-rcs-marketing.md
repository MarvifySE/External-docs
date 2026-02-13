---
id: sms-rcs-marketing
title: Hur du använder FOTO-3D i SMS och RCS-marknadsföring
sidebar_label: SMS & RCS-marknadsföring
---

# Hur du använder FOTO-3D i SMS och RCS-marknadsföring

Den här guiden förklarar hur du kan inkludera Marvify FOTO-3D i SMS- och RCS-kommunikation oavsett vilken meddelandeplattform du använder. Arbetsflödet är liknande över de flesta verktyg.

**I den här guiden använder vi Rule som exempeltjänst**, men samma principer gäller för andra kanaler som Klaviyo SMS, Twilio, Voyado och liknande plattformar.

SMS och RCS kan inte visa inbäddat 3D-innehåll eller skript. Istället får prenumeranter ett kort meddelande som innehåller en länk som öppnar en webbsida där din Marvify-visare redan körs. Meddelandet kan innehålla en kort beskrivning, en förhandsgranskningsbild eller andra ledtrådar som hjälper prenumeranten att förstå vad som väntar dem efter att de trycker på länken.

Om din Marvify-visare ännu inte är konfigurerad på din webbplats kan du hänvisa till den tekniska dokumentationen och exempelguiden.

- [Teknisk dokumentation](https://docs.marvify.io/snabbstart/marvify-viewer/)
- [Exempelguide](/exempel/webpage-integration)

## 1. Kopiera länken till din Marvify 3D-upplevelse

Öppna webbsidan där din Marvify 3D-visare visas. Detta kan vara en produktsida, en landningssida, en kampanjsida eller vilken plats som helst där din modell är inbäddad. Kopiera den fullständiga URL:en från din webbläsare. Denna länk kommer att inkluderas i ditt SMS- eller RCS-meddelande.

## 2. Öppna Rule och skapa ett nytt SMS- eller RCS-meddelande

Logga in på Rule och öppna Campaigns-sektionen. Skapa en ny kampanj och välj SMS eller RCS. Skapa ett nytt meddelande och börja skriva din text. Rule låter dig blanda text med en länk och valfri media beroende på typen av meddelande.

### Prenumeranter i Rule

Innan du skickar ditt meddelande väljer du vilka prenumeranter som ska få det. I Rule kan du lägga till prenumeranter genom att importera en CSV-fil, manuellt lägga till enskilda personer eller synkronisera från stödda integrationer. Efter att ha förberett ditt meddelande väljer du en eller flera prenumerantlistor innan du skickar eller schemalägger.

## 3. Lägg till din Marvify-länk i meddelandet

I slutet av din SMS- eller RCS-text inkluderar du länken du kopierade tidigare. Till exempel:

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
      alt="Short message with a link to the 3D viewer"
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


Många varumärken lägger till en kort beskrivande fras för att hjälpa mottagaren att förstå varför länken är inkluderad. Exempel:

- Se produkten i full 3D
- Rotera objektet och utforska detaljer
- Interaktiv 3D-förhandsgranskning tillgänglig här

## 4. Valfritt: Lägg till en bild eller RCS rich card om tillgängligt

RCS och vissa förbättrade SMS-plattformar stöder bilder eller rich cards. Dessa kan användas för att förhandsgranska din produkt. En stillbild eller en lättviktig animerad förhandsgranskning kan hjälpa till att visa att en 3D-upplevelse är tillgänglig efter klicket.

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
    Din webbläsare stöder inte video-taggen.
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

## 5. Håll texten kortfattad

SMS-meddelanden har begränsat utrymme så kortare innehåll kan förbättra tydligheten. Många varumärken använder:

- En kort hälsning
- En mening som beskriver höjdpunkten
- Länken till 3D-upplevelsen

RCS tillåter längre layouter om det behövs men kortfattad formulering fungerar ofta bra över båda formaten.

## 6. Testa meddelandet innan du skickar

Rule låter dig skicka ett test-SMS eller RCS-meddelande till dig själv. Detta hjälper till att verifiera att:

- Länken öppnas korrekt på mobilen
- Marvify-visaren laddas som förväntat
- All bifogad media visas korrekt

## 7. Skicka eller schemalägg din SMS- eller RCS-kampanj

När allt är klart väljer du dina prenumerantlistor och antingen skickar meddelandet omedelbart eller schemalägger det. Att trycka på länken tar dina mottagare direkt till din 3D-upplevelse där de kan utforska produkten i full detalj.

Detta tillvägagångssätt låter dig ta med interaktiv 3D i mobilmeddelanden utan att kräva några speciella funktioner på mottagarens enhet utöver en standardwebbläsare för mobilen.

---

*Rule-gränssnittet kan förändras över tid, men arbetsflödet för att länka till din Marvify-upplevelse förblir detsamma. För den mest aktuella informationen kan du besöka Rules kunskapsbas: [Rule-support](https://www.rule.se/support).*
