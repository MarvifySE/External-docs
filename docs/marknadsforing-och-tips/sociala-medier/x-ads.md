---
id: x-ads
title: Hur du skapar annonser på X med FOTO-3D
sidebar_label: X Ads
---

# Hur du skapar annonser på X med FOTO-3D

Börja med att öppna sidan på din webbplats där din Marvify FOTO-3D-upplevelse finns och kopiera den fullständiga länken från din webbläsare. Detta är länken du kommer att använda som destination för din annons på X.

Om du ännu inte har konfigurerat din Marvify-visare på din webbplats kan du hänvisa till vår tekniska dokumentation och exempelguide. Dessa resurser hjälper dig att förbereda din 3D-upplevelse för användning i annonser.

- [Teknisk dokumentation](https://docs.marvify.io/snabbstart/marvify-viewer/)
- [Exempelguide](/exempel/webpage-integration)

För att skapa en annons, gå till X Ads Manager på [ads.x.com](https://ads.x.com) och logga in på kontot du vill annonsera från. När du är inne väljer du att skapa en ny kampanj. Välj ett kampanjmål som skickar personer till din webbplats, såsom "Webbtrafik" eller "Konverteringar". Detta säkerställer att annonsformatet stöder en klickbar länk som leder direkt till din Marvify FOTO-3D-visarsida.

Fortsätt till annonsgruppsnivån, där du kan ställa in din budget, schema, målgruppsinriktning och placeringar. Detta steg definierar var din annons visas, vem som ser den och hur mycket du spenderar. När dessa inställningar är klara, gå vidare till att skapa själva annonsen.

<!-- ![Budget- och målgruppsinställningar i en X-annonsgrupp](pics/x-ads-targeting.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: x-ads-targeting.png - Budget- och målgruppsinställningar i en X-annonsgrupp*
:::

I annonsskaparvyn väljer du det format du vill köra, till exempel en enstaka bild eller karusell. Under destinationsURL-fältet klistrar du in länken till din Marvify FOTO-3D-upplevelse som du kopierade tidigare. Denna länk kommer att användas när någon trycker på eller klickar på annonsen.

Du kan sedan lägga till din annontext: rubrik, huvudtext och uppmaning till handling-knapp. Dessa fält definierar hur din annons visas i flödet. Förhandsgranskningspanelen i X Ads Manager visar hur annonsen ser ut i olika placeringar medan du gör ändringar.

<!-- ![Annonsförhandsgranskning i X Ads Manager](pics/x-ads-preview.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: x-ads-preview.png - Annonsförhandsgranskning i X Ads Manager*
:::

När du är nöjd med dina inställningar och annonsförhandsgranskning, publicera kampanjen. Efter granskning av X kommer din annons att börja levereras till din valda målgrupp. När tittare trycker på länken eller länkkortet kommer de att tas direkt till din 3D-upplevelse på din webbplats.

## Felsökning: Felaktig annonsförhandsgranskning

Om annonsförhandsvisningen inte visar korrekt information för din länk kan det bero på saknade eller utdaterade Open Graph-metadata på din webbsida, såsom `og:image`, `og:title` och `og:description`. Dessa taggar talar om för X vilken bild och text som ska visas när din länk visas i annonser.

För mer information om Open Graph-taggar, se: [Open Graph-dokumentation](https://ogp.me/).

---

X Ads Manager inkluderar många ytterligare verktyg och avancerade alternativ utöver grunderna som täcks i denna guide. Om du vill utforska fler möjligheter tillhandahåller X detaljerad dokumentation för alla steg i annonsarbetsflödet: [X Ads-dokumentation](https://ads.x.com/en/help).

*Observera att X kan uppdatera sitt Ads Manager-gränssnitt eller funktioner över tid. Stegen och bilderna i denna guide är avsedda som allmän vägledning och kanske inte alltid återspeglar den senaste versionen av annonsverktygen.*
