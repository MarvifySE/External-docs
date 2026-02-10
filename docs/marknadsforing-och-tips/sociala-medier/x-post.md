---
id: x-post
title: Hur du delar FOTO-3D i ett inlägg på X
sidebar_label: X (Twitter)
---

# Hur du delar FOTO-3D i ett inlägg på X

Börja med att öppna sidan på din webbplats där din Marvify FOTO-3D-upplevelse finns och kopiera den fullständiga länken från din webbläsare. Detta är länken du kommer att inkludera i ditt inlägg på X.

Om du ännu inte har konfigurerat din Marvify-visare på din webbplats kan du hänvisa till vår tekniska dokumentation och exempelguide. Dessa resurser hjälper dig att förbereda din 3D-upplevelse för delning.

- [Teknisk dokumentation](https://docs.marvify.io/snabbstart/marvify-viewer/)
- [Exempelguide](/exempel/webpage-integration)

Gå till [x.com](https://x.com) eller X-mobilappen och logga in på kontot du vill publicera från. På skrivbordet hittar du inläggsredigeraren högst upp på hemtidslinjen, eller genom att klicka på "Inlägg"-knappen. I appen kan du starta ett nytt inlägg från ikonen för att skriva.

<!-- ![Inläggsredigerare på X](pics/x-post-compose.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: x-post-compose.png - Inläggsredigerare på X*
:::

Klicka eller tryck i redigeraren och klistra in länken du kopierade tidigare. X kommer att bearbeta länken och, när det stöds för ditt konto och länktyp, kan generera ett förhandsgranskningskort som visar en bild, titel och kort beskrivning från din webbplats. Detta kort blir det klickbara elementet som leder till din 3D-upplevelse.

<!-- ![Exempel på ett förhandsgranskningskort genererat från en länk](pics/x-post-preview.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: x-post-preview.png - Exempel på ett förhandsgranskningskort genererat från en länk*
:::

Du kan lägga till vilken medföljande text du behöver i samma inlägg. Länkar på X förkortas automatiskt, och du kan valfritt bifoga bilder eller videor utöver länken. När du är nöjd med innehållet, välj dina målgruppsinställningar om det är tillämpligt och förbered att publicera.

När allt ser korrekt ut, publicera inlägget. Det kommer att visas i dina följares tidslinjer och var som helst ditt inlägg visas, och att klicka på länken eller dess förhandsgranskning tar personer direkt till Marvify FOTO-3D-upplevelsen på din webbplats.

## Felsökning: Saknat förhandsgranskningskort

Om inget förhandsgranskningskort visas för din länk betyder det vanligtvis att X inte har den information den behöver från webbsidan för att bygga ett kort. Denna information tillhandahålls genom metadata såsom Open Graph och X-specifika korttaggar, inklusive `og:image`, `og:title`, `og:description`. Dessa taggar talar om för X vilken bild och text som ska visas bredvid länken.

För mer information om Open Graph-standarden, se [den officiella Open Graph-dokumentationen](https://ogp.me/).

---

För mer information om att skapa inlägg och länkförhandsgranskningar på X, se plattformens officiella hjälp- och utvecklarresurser: [X Cards-dokumentation](https://developer.x.com/en/docs/x-for-websites/cards/overview/abouts-cards).

*Observera att X kan uppdatera sitt gränssnitt, funktioner eller kortbeteende över tid. Stegen och bilderna i denna guide är avsedda som allmän vägledning och kanske inte alltid återspeglar den senaste versionen av plattformen.*
