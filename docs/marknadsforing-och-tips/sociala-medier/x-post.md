---
id: x-post
title: Hur du delar Marvify 3D i ett inlägg på X
sidebar_label: X (Twitter)
---

# Hur du delar Marvify 3D i ett inlägg på X

Börja med att öppna sidan på din webbplats där din Marvify 3D-upplevelse finns och kopiera den fullständiga länken från din webbläsare. Detta är länken du kommer att inkludera i ditt inlägg på X.

Om du ännu inte har konfigurerat din Marvify-visare på din webbplats kan du hänvisa till vår tekniska dokumentation och exempelguide. Dessa resurser hjälper dig att förbereda din 3D-upplevelse för delning.

- [Teknisk dokumentation](https://docs.marvify.io/snabbstart/marvify-viewer/)
- [Exempelguide](/exempel/webpage-integration)

Gå till [x.com](https://x.com) eller X-mobilappen och logga in på kontot du vill publicera från. På skrivbordet hittar du inläggsredigeraren högst upp på hemtidslinjen, eller genom att klicka på "Inlägg"-knappen. I appen kan du starta ett nytt inlägg från ikonen för att skriva.

<p align="center">
  <img
    src={require('@site/static/img/x-post-compose.webp').default}
    alt="Inläggsredigerare på X"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Inläggsredigerare på X
  </em>
</p>


Klicka eller tryck i redigeraren och klistra in länken du kopierade tidigare. X kommer att bearbeta länken och generera ett förhandsgranskningskort. I den nuvarande versionen av X visar förhandsgranskningskort i tidslinjen bilden med en liten domänetikett ovanpå, snarare än att visa fullständig titel och beskrivning. Kortet fungerar fortfarande som det klickbara elementet som leder till din 3D-upplevelse.

<p align="center">
  <img
    src={require('@site/static/img/x-post-preview.webp').default}
    alt="Exempel på ett förhandsgranskningskort genererat från en länk"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Exempel på ett förhandsgranskningskort genererat från en länk
  </em>
</p>


Du kan lägga till vilken medföljande text du behöver i samma inlägg. Länkar på X förkortas automatiskt via t.co-tjänsten, och du kan valfritt bifoga bilder eller videor utöver länken. När du är nöjd med innehållet, välj dina målgruppsinställningar om det är tillämpligt och förbered att publicera.

:::tip
X:s algoritm kan minska synligheten för inlägg som innehåller externa länkar. Att inkludera en övertygande bild eller video tillsammans med din länk kan förbättra engagemanget och räckvidden jämfört med ett inlägg som bara innehåller en länk.
:::

När allt ser korrekt ut, publicera inlägget. Det kommer att visas i dina följares tidslinjer och var som helst ditt inlägg visas, och att klicka på länken eller dess förhandsgranskning tar personer direkt till Marvify 3D-upplevelsen på din webbplats.

## Felsökning: Saknat förhandsgranskningskort

Om inget förhandsgranskningskort visas för din länk betyder det vanligtvis att X inte har den information den behöver från webbsidan för att bygga ett kort. Denna information tillhandahålls genom metadata såsom Open Graph-taggar och X-specifika korttaggar. Den viktigaste taggen är `twitter:card`, som styr korttypen: ställ in den på `summary_large_image` för en stor bildförhandsgranskning, vilket fungerar bra för visuellt innehåll som en 3D-produktvisare. X läser även `og:image`, `og:title` och `og:description` för kortinnehållet och faller tillbaka på dessa om inga `twitter:`-motsvarigheter finns.

För mer information om Open Graph-standarden, se [den officiella Open Graph-dokumentationen](https://ogp.me/).

---

För mer information om att skapa inlägg och länkförhandsgranskningar på X, se plattformens officiella hjälp- och utvecklarresurser: [X Cards-dokumentation](https://developer.x.com/en/docs/x-for-websites/cards/overview/about-cards).

*Observera att X kan uppdatera sitt gränssnitt, funktioner eller kortbeteende över tid. Stegen och bilderna i denna guide är avsedda som allmän vägledning och kanske inte alltid återspeglar den senaste versionen av plattformen.*
