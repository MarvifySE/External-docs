---
id: linkedin-post-and-ads
title: Dela och marknadsför Marvify 3D på LinkedIn
sidebar_label: LinkedIn
---

# Dela och marknadsför Marvify 3D på LinkedIn

Börja med att öppna sidan på din webbplats där din Marvify 3D-upplevelse finns och kopiera hela länken från webbläsaren. Om du har länken redo i förväg blir processen smidigare.

Om du ännu inte har installerat din Marvify-visare på din webbplats kan du ta del av vår tekniska dokumentation och vår exempelguide. Dessa resurser hjälper dig att förbereda din 3D-upplevelse för delning.

- [Teknisk dokumentation](../../snabbstart/marvify-viewer.md)
- [Exempelguide](../../exempel/webpage-integration.md)

Gå till [linkedin.com](https://www.linkedin.com/) och logga in på det konto du vill publicera från. Om du publicerar från en personlig profil klickar du på "Starta ett inlägg" högst upp i ditt flöde på startsidan. Om du administrerar en företagssida går du till sidans administratörsvy, väljer "Sidinlägg" i menyn till vänster och klickar sedan på "Starta ett inlägg" därifrån så att inlägget publiceras som sidan.

<p align="center">
  <img
    src={require('@site/static/img/linkedin_start_a_post.webp').default}
    alt="Starta ett inlägg på LinkedIn"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Rutan "Starta ett inlägg" högst upp i ditt LinkedIn-flöde.
  </em>
</p>

Klicka eller tryck i inläggsfältet och klistra in länken du kopierade tidigare. LinkedIn tar en kort stund på sig att bearbeta webbadressen och skapar ett förhandskort med miniatyrbild, titel och en kort beskrivning som hämtas från din webbplats.

Länken i textfältet och förhandskortet behandlas som två separata element av LinkedIn. Om du vill kan du därför ta bort den synliga webbadressen i texten efter att förhandsvisningen har laddats, utan att kortet försvinner från inlägget.

Observera att organiska inlägg på LinkedIn för närvarande visar länkförhandsvisningar som en kompakt miniatyrbild till vänster om titel och beskrivning, i stället för som en större bild.

Sponsrat innehåll behåller däremot formatet med en större bild.

<p align="center">
  <img
    src={require('@site/static/img/linkedin_post_composer.webp').default}
    alt="LinkedIn-inläggsverktyg med länkförhandsvisning"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Ett ifyllt inlägg med text och automatisk förhandsvisning av länken.
  </em>
</p>


Nu kan du lägga till kompletterande text, bilder eller dokument som är relevanta för ditt inlägg. Dessa inslag är valfria och LinkedIn låter dig publicera länkförhandsvisningen både med och utan dem.

Om du publicerar från en företagssida blir inlägget synligt för följare och för alla som besöker sidan. Inlägg från en personlig profil kan anpassas via synlighetsinställningarna.

:::tip
LinkedIns algoritm kan minska den organiska räckvidden för inlägg som innehåller externa länkar. En vanlig lösning är att publicera inlägget utan länken och i stället lägga till webbadressen som första kommentar. På så sätt är länken fortfarande tillgänglig för din målgrupp, samtidigt som inlägget potentiellt kan få bättre spridning i flödet.
:::

När allt ser korrekt ut publicerar du inlägget. Länkförhandsvisningen visas då i flödet för din målgrupp, och genom att klicka eller trycka på den kommer de direkt till 3D-upplevelsen på din webbplats.

<p align="center">
  <img
    src={require('@site/static/img/linkedin_result.webp').default}
    alt="Publicerat LinkedIn-inlägg med Marvify 3D-länk"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Det färdiga inlägget i LinkedIn-flödet med länkförhandsvisning.
  </em>
</p>

## Felsökning: Saknad länkförhandsvisning

Om inget förhandskort visas när du klistrar in din länk på LinkedIn beror det oftast på att webbsidan saknar den information som LinkedIn behöver för att skapa kortet. Denna information tillhandahålls via så kallade Open Graph-taggar, som og:image, og:title och og:description. Dessa taggar talar om för LinkedIn vilken bild och vilken text som ska visas tillsammans med länken.

För bästa resultat bör og:image vara minst 1200 x 627 pixlar, ha ett bildförhållande på 1.91:1 och inte vara större än 5 MB.

LinkedIn cachelagrar Open Graph-data i cirka sju dagar. Om du nyligen har uppdaterat dina taggar och förhandsvisningen fortfarande visar gammal information kan du tvinga fram en uppdatering med hjälp av LinkedIns [Post Inspector](https://www.linkedin.com/post-inspector/). Klistra in din URL i verktyget så hämtar LinkedIn sidan på nytt och visar den uppdaterade förhandsvisningen.

För mer information om Open Graph-standarden kan du läsa den [officiella Open Graph-dokumentationen](https://ogp.me/).

---

*För mer information om hur du skapar inlägg på LinkedIn, se plattformens officiella hjälpresurser: [LinkedIn Help](https://www.linkedin.com/help/linkedin).*

*Observera att LinkedIn kan uppdatera sitt gränssnitt eller sina funktioner över tid. Stegen och bilderna i den här guiden är avsedda som generell vägledning och återspeglar kanske inte alltid den senaste versionen av plattformen.*

---

# Skapa LinkedIn-annonser med Marvify 3D

Börja med att öppna sidan på din webbplats där din Marvify 3D-upplevelse finns och kopiera hela länken från webbläsaren. Det är denna länk du kommer att använda som destinationslänk i din LinkedIn-annons.

Om du ännu inte har installerat din Marvify-visare på din webbplats kan du ta del av vår tekniska dokumentation och vår exempelguide. Dessa resurser hjälper dig att förbereda din 3D-upplevelse för användning i annonser.

- [Teknisk dokumentation](../../snabbstart/marvify-viewer.md)
- [Exempelguide](../../exempel/webpage-integration.md)

För att skapa en annons går du till [LinkedIn Campaign Manager](https://www.linkedin.com/campaignmanager/) och loggar in på det konto som är kopplat till den företagssida du vill annonsera från. När du är inne väljer du alternativet för att skapa en ny kampanj.

Välj ett kampanjmål som leder besökare till din webbplats, till exempel "Webbplatsbesök" eller "Webbplatskonverteringar". Detta säkerställer att annonsformatet stöder en klickbar länk som leder direkt till din Marvify 3D-visarsida.

Fortsätt till kampanjinställningarna där du definierar din målgrupp, budget, tidsplan och annonsplaceringar. LinkedIn Campaign Manager gör det möjligt att rikta annonser baserat på exempelvis jobbtitel, arbetsfunktion, bransch, företagsstorlek och andra professionella attribut, vilket är särskilt användbart om du vill nå beslutsfattare eller specifika marknadssegment.

Minsta tillåtna målgruppsstorlek är 300 medlemmar. När dessa inställningar är konfigurerade kan du gå vidare till att skapa själva annonsen.

I annonsvyn väljer du det annonsformat du vill använda, till exempel en bildannons eller en karusellannons. I fältet för destinations-URL klistrar du in länken till din Marvify 3D-upplevelse som du kopierade tidigare. Det är denna URL som används när någon klickar på annonsen.

Därefter lägger du till din annonstext: inledningstext, rubrik, beskrivning och en uppmaning till handling. Dessa fält styr hur annonsen visas i flödet och hur länken presenteras. Håll inledningstexten under 150 tecken och rubriken under 70 tecken för att undvika att texten kapas på mindre skärmar.

Förhandsgranskningspanelen till höger i Campaign Manager visar hur annonsen kommer att se ut i desktop- och mobilflöden medan du gör ändringar. Observera att förhandsvisningen är en representation och att LinkedIn kan justera vissa visuella detaljer något när annonsen publiceras.

När du är nöjd med dina inställningar och förhandsgranskningen av annonsen startar du kampanjen. LinkedIn granskar annonsmaterial innan det visas, vilket vanligtvis tar upp till 24 timmar.

När annonsen har godkänts börjar den visas för den målgrupp du har valt. Personer som klickar på länken skickas direkt till 3D-upplevelsen på din webbplats där de kan utforska produkten.

## Felsökning: Felaktig annonsförhandsvisning

Om annonsförhandsvisningen inte visar korrekt information för din länk kan det bero på att Open Graph-metadata saknas eller är inaktuell på din webbsida, till exempel og:image, og:title och og:description. Dessa taggar talar om för LinkedIn vilken bild och vilken text som ska visas när din länk används i annonser.

Campaign Manager kan hämta Open Graph-data från din destinations-URL när du skapar annonsen, så se till att dina taggar är uppdaterade innan du börjar för att få bästa möjliga resultat.

LinkedIn cachelagrar Open Graph-data i cirka sju dagar. Om du nyligen har uppdaterat dina taggar kan du använda LinkedIns [Post Inspector](https://www.linkedin.com/post-inspector/) för att tvinga fram en uppdatering innan du skapar din annons.

För mer information om Open Graph-taggar, se den [officiella Open Graph-dokumentationen](https://ogp.me/).

---

LinkedIn Campaign Manager innehåller många ytterligare verktyg och avancerade alternativ utöver grunderna som behandlas i den här guiden. Om du vill fördjupa dig ytterligare erbjuder LinkedIn omfattande dokumentation för hela arbetsflödet kring annonsskapande: [LinkedIn Marketing Solutions](https://business.linkedin.com/marketing-solutions).

*Observera att LinkedIn kan uppdatera gränssnittet eller funktionerna i Campaign Manager över tid. Stegen och bilderna i den här guiden är avsedda som generell vägledning och återspeglar kanske inte alltid den senaste versionen av annonseringsverktygen.*
