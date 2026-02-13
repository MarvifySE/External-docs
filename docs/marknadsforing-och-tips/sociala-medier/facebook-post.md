---
id: facebook-post
title: Hur du delar FOTO-3D i ett Facebook-inlägg
sidebar_label: Facebook
---

# Hur du delar FOTO-3D i ett Facebook-inlägg

Börja med att öppna sidan på din webbplats där din 3D-upplevelse finns och kopiera den fullständiga länken från din webbläsare. Att ha den kopierad i förväg gör processen smidigare.

Om du ännu inte har din Marvify-visare konfigurerad på din webbplats kan du hänvisa till vår tekniska dokumentation och exempelguide. Dessa resurser hjälper dig att förbereda din 3D-upplevelse för delning.

- [Teknisk dokumentation](https://docs.marvify.io/snabbstart/marvify-viewer/)
- [Exempelguide](/exempel/webpage-integration)

Gå därefter till Facebook och växla till profilen eller sidan du vill publicera från. Om du arbetar med en varumärkessida, se till att du visar den sidan så att inlägget publiceras på rätt plats. Rutan för att skapa inlägg väntar högst upp i ditt flöde.

<p align="center">
  <img
    src={require('@site/static/img/facebook-post-whats-on-your-mind.webp').default}
    alt="Facebook-inläggsskapare"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Facebook-inläggsskapare
  </em>
</p>

När du klickar eller trycker i den rutan, klistra in länken du kopierade tidigare. Facebook tar ett ögonblick för att ladda en förhandsgranskning. Efter att den visas kommer du att se ett litet kort med en bild, titel och kort beskrivning som hämtas från din webbplats. Denna förhandsgranskning fungerar som den klickbara länken för alla som ser inlägget. Om du föredrar att ta bort den vanliga URL:en från textfältet efter att förhandsgranskningen har laddats, kommer förhandsgranskningen att förbli aktiv.

<p align="center">
  <img
    src={require('@site/static/img/facebook-post-preview.webp').default}
    alt="Facebook länkförhandsgranskning"
    style={{ width: '70%' }}
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Facebook länkförhandsgranskning
  </em>
</p>


I detta skede kan du inkludera ytterligare text, bilder eller video om de är användbara för ditt inlägg. Dessa element är valfria, och Facebook låter dig publicera länkkortet med eller utan dem. Om du publicerar från en personlig profil kan du välja vem som får se inlägget. Varumärkessidor publicerar vanligtvis offentligt.

När allt ser korrekt ut och förhandsgranskningen visar rätt information, publicera inlägget. Länkkortet kommer att visas i flödet för din publik och tar dem direkt till 3D-upplevelsen på din webbplats när de klickar eller trycker på det.

## Felsökning: Saknad länkförhandsgranskning

Om ingen förhandsgranskning visas när du klistrar in din länk på Facebook betyder det vanligtvis att webbsidan saknar den information Facebook letar efter när den genererar ett länkkort. Denna information tillhandahålls genom Open Graph-taggar, såsom `og:image`, `og:title` och `og:description`. Dessa taggar talar om för Facebook vilken bild och text som ska visas i förhandsgranskningen.

För mer information om Open Graph-standarden, se [den officiella Open Graph-dokumentationen](https://ogp.me/).

---

*För mer information, besök [Facebooks officiella hjälpcenter](https://www.facebook.com/help/).*

*Observera att Facebook kan uppdatera sitt gränssnitt eller funktioner över tid. Stegen och bilderna i denna guide är avsedda som allmän vägledning och kanske inte alltid återspeglar den senaste versionen av Facebooks plattform.*
