---
id: setup
title: Guidad setup
sidebar_label: Guidad setup
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Guidad setup

*Ett femstegsflöde som gör din modell redo för din webbplats: vyn besökare startar i, hur långt de kan röra sig, rörelsen, och koden att klistra in på din sida.*

När du väljer att göra i ordning en modell för din webbplats i kontrollpanelen öppnas redigeraren i **guidad setup**. Din modell fyller vänstra delen av fönstret, och en panel till höger tar dig genom fem steg:

1. **Kamerastart**: vyn besökare ser först
2. **Kameragränser**: hur nära, hur långt bort, hur högt och hur långt runt besökare kan röra sig
3. **Rörelsen**: om modellen snurrar, spelar en animation eller står still
4. **Testa**: förhandsvisa slutresultatet i de former och storlekar den får på din sida
5. **Spara**: namnge versionen och gör den redo för din webbplats

<DocImage src={require('@site/static/img/editor-setup-panel.webp').default} srcFull={require('@site/static/img/editor-setup-panel-full.webp').default} alt="Guidad setup med modellen till vänster och stegpanelen till höger" width={800} />

---

## Innan du börjar {#before-you-start}

**Ingenting sparas förrän i sista steget.** Du kan avbryta, stänga fliken eller börja om när som helst före steg 5 utan att något ändras som någon kan se. Det finns inget utkast att städa upp.

Du kan klicka på förloppsstaplarna högst upp i panelen för att hoppa tillbaka till ett steg du redan gjort klart. Laddar du om sidan börjar flödet om från steg 1.

> **Tips:** Bokknappen i toppraden öppnar den här guiden när som helst.

---

## Steg 1: Kamerastart {#camera-start}

Panelen ber dig ställa in kamerans startposition: vyn besökare ser när de börjar upplevelsen, så den är värd att lägga tid på. Snurra och zooma tills modellen ser ut som bäst, och spara sedan den vyn.

<DocVideo src={require('@site/static/video/setup-camera-start-v1-s.mp4').default} srcFull={require('@site/static/video/setup-camera-start-v1.mp4').default} ratio="1540 / 1028" />

### Sikta kameran {#aim-the-camera}

Dra för att snurra modellen och skrolla för att zooma. I det här steget kan du röra dig helt fritt; inga gränser gäller ännu.

Dubbelklicka på modellen för att tala om för kameran vad den ska titta på:

- Med **Fokusera kameran på mitten** ibockad (standard) siktar kameran på modellens mittaxel, och ditt dubbelklick styr bara höjden. Det gör att kameran snurrar runt modellen mer naturligt.
- Bocka ur den för att i stället sikta exakt där du dubbelklickar. Det är användbart när den intressanta delen av produkten sitter åt ett håll.

### Spara vyn {#save-the-view}

När bilden ser rätt ut trycker du på den gula knappen **Spara nuvarande vy som kamerastart** längst ned i fönstret.

<DocImage src={require('@site/static/img/editor-setup-kamerastart-knapp.webp').default} alt="Den gula knappen Spara nuvarande vy som kamerastart under bilden" width={560} />

En kameramarkör med etiketten **Kamerastart** dyker upp i bilden på den sparade positionen. Du kan fortsätta utforska efteråt. Ögonknappen bredvid den gula knappen flyger dig tillbaka till den sparade vyn när du vill, och trycker du på gula knappen igen ersätts den gamla starten med den aktuella vyn.

> **Obs:** Knappen är nedtonad tills du har dubbelklickat på modellen en gång, så att kameran vet vad den ska titta på.

### Enhetskollen {#the-device-check}

I samma stund som du sparar en kamerastart visas förhandsvisningar av din startvy i övre högra hörnet: **Dator** och **Mobil**. En inramning som ser bra ut på datorn kan beskäras illa på en hög mobilskärm, och det här fångar det tidigt. Stäng förhandsvisningarna med **×** om de är i vägen.

<DocImage src={require('@site/static/img/editor-setup-kamerastart-enheter.webp').default} alt="Förhandsvisningarna för dator och mobil av startvyn" width={544} />

### Bakgrundsfärg {#background-color}

Under kamerakontrollerna har panelen en **Bakgrundsfärg**-väljare. Färgen slår igenom direkt så att du kan bedöma den mot modellen.

<DocImage src={require('@site/static/img/editor-setup-bakgrundsfarg.webp').default} alt="Bakgrundsfärgsväljaren" width={368} />

> **Tips:** Matcha den med din webbplats så försvinner kanterna, och modellen ser ut att stå direkt på sidan.

---

## Steg 2: Kameragränser {#camera-limits}

Panelen ber dig nu ställa in kamerans gränser. Besökare kan zooma, tilta och snurra din modell, och det här steget avgör hur långt de får gå. Utan gränser kan en besökare zooma in långt förbi modellens detaljnivå eller hamna i vinklar som inte smickrar någon produkt, som rakt underifrån. Varje gräns fungerar likadant: flytta kameran till den mest extrema vy du fortfarande vill tillåta och tryck på **Välj** vid motsvarande gräns.

Medan du arbetar i det här steget blir bakgrunden tillfälligt vit så att de färgade guidelinjerna syns tydligt. Din valda bakgrundsfärg är orörd och kommer tillbaka efteråt.

### Gränserna {#the-limit-rows}

<DocImage src={require('@site/static/img/editor-setup-granser-panel.webp').default} alt="Gränspanelen med tiltraderna fortfarande låsta" width={364} />

| Grupp | Gränser | Vad den styr |
| ----- | ------- | ------------ |
| **Hur nära och hur långt bort** | **Närmast**, **Längst bort** | Hur nära och hur långt bort en besökare kan zooma. |
| **Hur högt och hur lågt** | **Högst**, **Lägst** | Hur långt ovanför och under modellen en besökare kan tilta. |
| **Hur mycket rörelse åt vardera sida** | **Vänster**, **Höger** | Hur långt runt modellen en besökare kan snurra. Valfri. Visas bara när du bockar i **Begränsa rotation i sidled**. |

Två saker att känna till om ordningen:

- Tiltgränserna är låsta tills båda zoomgränserna är satta. Tiltguiderna ritas mellan zoomguiderna, så zoomintervallet måste finnas först.
- Rotation i sidled är av som standard. De flesta modeller är värda att se från alla håll, så slå bara på den när det finns något du helst inte vill visa.

### Tre sätt att sätta en gräns {#three-ways-to-set-a-limit}

Varje gräns kan sättas på tre sätt:

- **Tryck på Välj.** Fångar var kameran står just nu som den gränsen. Det är det huvudsakliga arbetssättet: flyg till det närmaste du vill låta en besökare komma, tryck på **Välj** vid **Närmast**, och gör sedan likadant för de andra.
- **Skriv ett tal** direkt i gränsens fält. Ett tomt fält betyder ingen gräns.
- **Dra i guiden.** Varje gräns ritas i bilden som en färgad ring med en namnetikett. Klicka på etiketten för att ta tag i den, dra för att justera, och klicka igen (eller tryck Escape) för att släppa.

<DocVideo src={require('@site/static/video/setup-limit-drag-v1-s.mp4').default} srcFull={require('@site/static/video/setup-limit-drag-v1.mp4').default} width="85%" ratio="1920 / 1028" />

Varje gräns har också en **ögon**-knapp som flyger ut kameran till gränsen så att du ser exakt vad den tillåter, och en **×**-knapp som tar bort gränsen så att du kan gå längre och sätta en ny. Knappen **Återställ gränser** dyker upp längst ned i listan när något har ändrats och återställer värdena du kom med.

### Förhandsvisa som besökare {#preview-as-a-visitor}

Längst ned i fönstret låter två **Förhandsvisning**-knappar, **Dator** och **Mobil**, dig känna på gränserna som en besökare gör. Guiderna försvinner, din bakgrundsfärg kommer tillbaka, bilden tar enhetens form och dina gränser slås på. Rör dig runt och kontrollera att inget känns för trångt eller för löst, och tryck sedan på **Tillbaka till att sätta gränser** för att fortsätta arbeta.

<DocVideo src={require('@site/static/video/setup-visitor-preview-v1-s.mp4').default} srcFull={require('@site/static/video/setup-visitor-preview-v1.mp4').default} ratio="1540 / 1028" />

---

## Steg 3: Rörelsen {#the-motion}

Panelen frågar hur modellen animeras från början: vad den gör när en besökare först ser den. Tre alternativ, varav ett alltid är aktivt:

<DocImage src={require('@site/static/img/editor-setup-rorelsen-val.webp').default} alt="De tre rörelsevalen" width={364} />

| Alternativ | Vad det gör |
| ---------- | ----------- |
| **Rotation** | En jämn snurr runt produkten. Standard för en ny modell. |
| **Animationer** | En färdig kamerarörelse, eller en du gör själv. |
| **Stillastående** | Modellen står still tills besökaren rör den. |

Vad du än väljer **stannar rörelsen så snart en besökare rör modellen**.

### Rotation {#turntable}

En enda **Hastighet**-slider styr hur fort modellen snurrar. Bocka gärna i **Återuppta animationen efter inaktivitet** och välj hur många sekunders stillhet som ska gå innan snurren börjar igen efter att en besökare släppt.

### Animationer {#animations}

Välj ur ett rutnät av färdiga kamerarörelser. Alla loopar sömlöst:

<DocImage src={require('@site/static/img/editor-setup-rorelsen-lista.webp').default} alt="Animationslistan" width={364} />

| Animation | Karaktär |
| --------- | -------- |
| **Rotation** | En jämn snurr runt produkten. |
| **Frontpendel** | Sveper över framsidan och tillbaka igen. Baksidan visas aldrig. |
| **Lutande bana** | Ett helt varv på ett lutande plan, som stiger på ena sidan och sjunker på den andra. |
| **Cirkel in och ut** | Cirklar runt produkten och glider in nära på framsidan och ut igen bakom. |
| **Topp till tå** | Cirklar medan vyn stiger mot toppen på ena sidan och sjunker mot basen på den andra. |
| **Handhållen cirkel** | En långsam cirkel med lite drift, mindre mekanisk än rotationen. |

Under rutnätet anpassar **Ställ in animationen** den valda rörelsen till din modell: sliders för **Avstånd**, **Startposition** och **Höjd** formar om rörelsen live så att du ser effekten direkt. **Animationens längd** anger hur många sekunder ett varv tar, och samma återuppta-efter-inaktivitet-val finns här också.

<DocImage src={require('@site/static/img/editor-setup-rorelsen-installningar.webp').default} alt="Animationsinställningarna" width={364} />

#### Skapa egen {#build-your-own}

Passar ingen av de färdiga trycker du på **Skapa egen** för att börja med en tom bana, eller **Redigera animation** för att justera den valda för hand. Panelen växlar till en byggare där du placerar kamerastopp ett i taget, och den färdiga rörelsen glider genom dem i tur och ordning. Bocka i **Loopa** om rörelsen ska upprepas tills besökaren interagerar. Tryck på **Använd den här rörelsen** för att behålla rörelsen, eller **Avbryt** för att gå tillbaka till det som var valt innan.

Det är samma byggare som används för videoklipp, och den har [en egen guide](./bygg.md).

### Förhandsvisa rörelsen {#previewing-the-motion}

Så fort det finns rörelse att titta på visas **Dator**- och **Mobil**-knappar för förhandsvisning längst ned i fönstret, precis som i gränssteget. Den aktiva knappen fylls medan rörelsen spelas. Varje tryck startar om rörelsen från början.

---

## Steg 4: Testa {#try-it}

Panelen ber dig förhandsvisa slutresultatet, och det här steget är på riktigt: din kamerastart, dina gränser, din bakgrund och din rörelse, allt aktivt på en gång, precis som en besökare kommer att uppleva det. Rör dig runt och känn efter att det stämmer.

Raden längst ned i fönstret låter dig förhandsvisa i de former och storlekar modellen faktiskt får på din sida:

<DocImage src={require('@site/static/img/editor-setup-testa-former.webp').default} alt="Raden med former och storlekar" width={640} />

- **Former:** **Full** (hela redigerarfönstret), **Bred** (16:9), **Klassisk** (4:3), **Kvadrat** (1:1), **Stående** (4:5), **Mobil** (390×844) och **Egen**.
- **Storlekar:** **Stor**, **Mellan** och **Liten** för varje form.
- **Egen** ersätter storlekarna med exakta pixelfält, så att du kan skriva precis den bredd och höjd modellen får på din sida. En text talar om ifall den visas i verklig storlek eller skalas ned för att få plats i fönstret.

<DocImage src={require('@site/static/img/editor-setup-testa-egen.webp').default} alt="Fälten för egen storlek" width={640} />

Knappen **Gå till startkameran** i nedre högra hörnet tar dig tillbaka till kamerastarten när du har vandrat iväg.

Panelen visar **Vad du ändrat**: en lista över varje inställning som ändrats den här sessionen, med gammalt värde överstruket och nytt värde markerat. Om du öppnade en befintlig version är det här din sista enkla chans att granska skillnaderna innan du sparar över den.

---

## Steg 5: Spara {#save-it}

Vad panelen visar beror på om du sparar en helt ny version eller uppdaterar en befintlig.

### Första gången: ge den ett namn {#give-it-a-name}

Din modell har redan ett namn i Marvifys system. Namnet du skriver här kopplas ihop med det som `modell@namn`, och det fullständiga id:t är vad som visar den här versionen på din webbsida. En modell kan ha hur många namngivna versioner som helst, så välj något som säger vad just den här är till för, som `webb` eller `kampanj`.

<DocImage src={require('@site/static/img/editor-setup-spara-namn.webp').default} alt="Namnfältet med det fullständiga id:t under" width={364} />

Namn använder små bokstäver (utan åäö), siffror, bindestreck och understreck, inga blanksteg, och måste börja med en bokstav eller siffra. Namnen `default` och `defaults` är reserverade. Medan du skriver visar panelen det fullständiga id som versionen kommer att heta. Tryck på **Spara**.

### Uppdatera en befintlig version {#updating-an-existing-version}

Om du öppnade en version som redan har inställningar erbjuder panelen två sätt att spara dina ändringar:

- **Uppdatera** skriver över de gamla inställningarna med dina ändringar. Överallt där `modell@namn` används uppdateras till de nya inställningarna.
- **Spara som ny** lämnar den gamla versionen orörd och sparar dina ändringar under ett nytt namn. Namnfältet från ovan dyker upp.

Väljer du **Uppdatera** blir du ombedd att bekräfta (*Ersätt dessa inställningar?*), eftersom inställningarna som ersätts **inte kan återskapas efteråt**. Är du osäker är **Spara som ny** alltid det trygga valet.

### Klart att köra {#ready-to-go}

I samma stund som sparningen går igenom visas ett kort med det din webbplats behöver: de två kodsnuttarna som visar modellen, med ditt riktiga `modell@namn`-id ifyllt, fält för **Bredd** och **Höjd** som uppdaterar koden live, **Kopiera**-knappar för varje del, och en länk till dokumentationen.

<DocImage src={require('@site/static/img/editor-setup-spara-kort.webp').default} alt="Kortet med dokumentationslänken och de två kodsnuttarna" width={620} />

Att lägga in koden på din webbplats är nästa steg, efter redigeraren. Integrationsguiderna visar exakt hur det går till på [Shopify](../exempel/shopify.md), [WooCommerce](../exempel/woocommerce.md) eller en [vanlig webbsida](../exempel/webpage-integration.md). För allt visaren kan göra (storlek, autoplay, analys, karuseller, VR), se [Marvify Viewer-referensen](../snabbstart/marvify-viewer.md).

Om du startade flödet från kontrollpanelens webbplatsguide har den fliken lyssnat: den går vidare automatiskt med din sparade version. Hur som helst kan du stänga redigerarfliken. Vill du ändra något senare öppnar du samma modell från din kontrollpanel och väljer versionens namn.

---

## Bra att veta {#good-to-know}

- **Varför kan jag flyga vart som helst i de tidiga stegen men inte senare?** I steg 1 och 2 väljer du gränserna, så kameran är fri. Du kan inte sätta en gräns du inte kan nå. Från det att du förhandsvisar (och i steg 4 och 5) är dina gränser påslagna, så att du upplever exakt det en besökare gör.
- **Guideringarna visas aldrig för besökare.** De finns bara i redigeraren, bara medan du sätter gränser.
- **Den vita bakgrunden medan du sätter gränser är tillfällig.** Din valda bakgrundsfärg är orörd och kommer tillbaka i förhandsvisningar och senare steg.
- **Sammanfattningspanelen** ovanför Tillbaka/Fortsätt-knapparna för en löpande lista över dina val i varje steg. Öppna den när som helst för att se var du står. Värden du inte satt än visas som *Inte satt än*.
- **Guidad setup rör bara inställningar för webbplatsen.** Hotspots, infokort och annat innehåll på modellen lämnas exakt som de var.
