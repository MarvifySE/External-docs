---
id: setup
title: Guidad setup
sidebar_label: Guidad setup
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Guidad setup

*Ett guidat flöde som gör din modell redo för din webbplats: vyn besökare startar i, hur långt de kan röra sig, rörelsen, och koden att klistra in på din sida.*

När du väljer att göra i ordning en modell för din webbplats i kontrollpanelen öppnas redigeraren i **guidad setup**. Din modell fyller vänstra delen av fönstret, och en panel till höger tar dig genom stegen:

1. **Kamerastart**: vyn besökare ser först
2. **Kameragränser**: hur nära, hur långt bort, hur högt och hur långt runt besökare kan röra sig
3. **Rörelsen**: om modellen snurrar, spelar en animation eller står still
4. **Testa**: förhandsvisa slutresultatet i de former och storlekar den får på din sida
5. **Spara**: namnge versionen och gör den redo för din webbplats

<DocImage src={require('@site/static/img/editor-setup-panel.webp').default} srcFull={require('@site/static/img/editor-setup-panel-full.webp').default} alt="Guidad setup med modellen till vänster och stegpanelen till höger" width={800} />

---

## Innan du börjar {#before-you-start}

**Ingenting sparas förrän i sista steget.** Du kan avbryta, stänga fliken eller börja om när som helst före sista steget utan att något ändras som någon kan se. Det finns inget utkast att städa upp.

Du kan klicka på förloppsstaplarna högst upp i panelen för att hoppa tillbaka till ett steg du redan gjort klart. Laddar du om sidan börjar flödet om från början.

---

## Steg 1: Kamerastart {#camera-start}

Startpositionen är vyn besökare ser när de börjar upplevelsen, så den är värd att lägga tid på. Snurra och zooma tills modellen ser ut som bäst, och spara sedan den vyn.

<DocVideo src={require('@site/static/video/setup-camera-start-v1-s.mp4').default} srcFull={require('@site/static/video/setup-camera-start-v1.mp4').default} ratio="1540 / 1028" />

### Sikta kameran {#aim-the-camera}

Dra för att snurra modellen och skrolla för att zooma. I det här steget kan du röra dig helt fritt; inga gränser gäller ännu.

Dubbelklicka på modellen för att tala om för kameran vad den ska titta på:

- Med **Fokusera kameran på mitten** ibockad (standard) siktar kameran på modellens mittaxel, och ditt dubbelklick styr bara höjden. Det gör att kameran snurrar runt modellen mer naturligt.
- Bocka ur den för att i stället sikta exakt där du dubbelklickar. Det är användbart när den intressanta delen av produkten sitter åt ett håll.

### Spara vyn {#save-the-view}

När vyn ser rätt ut trycker du på **Spara nuvarande vy som kamerastart** längst ned i fönstret.

<DocImage src={require('@site/static/img/editor-setup-kamerastart-knapp.webp').default} alt="Den gula knappen Spara nuvarande vy som kamerastart under vyn" width={560} />

En kameramarkör med etiketten **Kamerastart** dyker upp i vyn på den sparade positionen. Du kan fortsätta utforska efteråt. Ögonknappen bredvid flyger dig tillbaka till den sparade vyn när du vill, och trycker du på knappen igen ersätts den gamla starten med den aktuella vyn.

### Enhetskollen {#the-device-check}

I samma stund som du sparar en kamerastart visas förhandsvisningar av din startvy i övre högra hörnet: **Dator** och **Mobil**. En inramning som ser bra ut på datorn kan beskäras illa på en hög mobilskärm, och det här fångar det tidigt.

<DocImage src={require('@site/static/img/editor-setup-kamerastart-enheter.webp').default} alt="Förhandsvisningarna för dator och mobil av startvyn" width={544} />

### Bakgrundsfärg {#background-color}

Under kamerakontrollerna har panelen en **Bakgrundsfärg**-väljare. Färgen slår igenom direkt så att du kan bedöma den mot modellen.

<DocImage src={require('@site/static/img/editor-setup-bakgrundsfarg.webp').default} alt="Bakgrundsfärgsväljaren" width={368} />

> **Tips:** Matcha den med din webbplats så försvinner kanterna, och modellen ser ut att stå direkt på sidan.

---

## Steg 2: Kameragränser {#camera-limits}

Besökare kan zooma, tilta och snurra din modell, och det här steget avgör hur långt de får gå. Utan gränser kan en besökare zooma in långt förbi modellens detaljnivå eller hamna i vinklar som inte smickrar någon produkt, som rakt underifrån.

Medan du arbetar i det här steget blir bakgrunden tillfälligt vit så att de färgade guidelinjerna syns tydligt. Din valda bakgrundsfärg är orörd och kommer tillbaka efteråt.

### Gränserna {#the-limit-rows}

Gränserna kommer i par: hur nära och hur långt bort en besökare kan zooma, hur högt och hur lågt de kan tilta, och, om du slår på det, hur långt runt åt vardera sida de kan snurra.

<DocImage src={require('@site/static/img/editor-setup-granser-panel.webp').default} alt="Gränspanelen med tiltraderna fortfarande låsta" width={364} />

Rotation i sidled är av som standard. De flesta modeller är värda att se från alla håll, så slå bara på den när det finns något du helst inte vill visa.

### Att sätta en gräns {#three-ways-to-set-a-limit}

Flyg till den mest extrema vy du fortfarande vill tillåta och tryck på **Välj** vid motsvarande gräns: det närmaste du vill låta en besökare komma för **Närmast**, och så vidare. Du kan också skriva ett värde direkt i gränsens fält, eller dra i gränsens guidering i vyn via dess namnetikett.

<DocVideo src={require('@site/static/video/setup-limit-drag-v1-s.mp4').default} srcFull={require('@site/static/video/setup-limit-drag-v1.mp4').default} width="85%" ratio="1920 / 1028" />

### Förhandsvisa som besökare {#preview-as-a-visitor}

**Förhandsvisning** under vyn låter dig känna på gränserna som en besökare gör, i dator- eller mobilstorlek. Guiderna försvinner, din bakgrundsfärg kommer tillbaka och dina gränser slås på. Rör dig runt och kontrollera att inget känns för trångt eller för löst.

<DocVideo src={require('@site/static/video/setup-visitor-preview-v1-s.mp4').default} srcFull={require('@site/static/video/setup-visitor-preview-v1.mp4').default} ratio="1540 / 1028" />

---

## Steg 3: Rörelsen {#the-motion}

Det här steget avgör vad modellen gör när en besökare först ser den: snurrar, spelar en animation eller står still.

<DocImage src={require('@site/static/img/editor-setup-rorelsen-val.webp').default} alt="De tre rörelsevalen" width={364} />

Vad du än väljer **stannar rörelsen så snart en besökare rör modellen**.

### Rotation {#turntable}

**Hastighet** styr hur fort modellen snurrar. **Återuppta animationen efter inaktivitet** startar snurren igen efter att en besökare släppt, när det antal sekunder du väljer har gått.

### Animationer {#animations}

Välj ur ett rutnät av färdiga kamerarörelser. Alla loopar sömlöst och anpassar sig till din modell.

<DocImage src={require('@site/static/img/editor-setup-rorelsen-lista.webp').default} alt="Animationslistan" width={364} />

Under rutnätet formar reglagen under **Ställ in animationen** om den valda rörelsen live så att du ser effekten direkt. **Animationens längd** anger hur många sekunder ett varv tar, och samma återuppta-efter-inaktivitet-val finns här också.

<DocImage src={require('@site/static/img/editor-setup-rorelsen-installningar.webp').default} alt="Animationsinställningarna" width={364} />

#### Skapa egen {#build-your-own}

Passar ingen av de färdiga trycker du på **Skapa egen** för att börja med en tom bana, eller **Redigera animation** för att justera den valda för hand. Panelen växlar till en byggare där du placerar kamerastopp ett i taget, och den färdiga rörelsen glider genom dem i tur och ordning.

Det är samma byggare som används för videoklipp, och den har [en egen guide](./bygg.md).

### Förhandsvisa rörelsen {#previewing-the-motion}

Så fort det finns rörelse att titta på spelar förhandsvisningsknapparna under vyn upp den i dator- eller mobilstorlek. Varje tryck startar om rörelsen från början.

---

## Steg 4: Testa {#try-it}

Det här steget är på riktigt: din kamerastart, dina gränser, din bakgrund och din rörelse, allt aktivt på en gång, precis som en besökare kommer att uppleva det. Rör dig runt och känn efter att det stämmer.

Raden längst ned i fönstret låter dig förhandsvisa i de former och storlekar modellen faktiskt får på din sida, och **Egen** tar exakt den bredd och höjd den får där.

<DocImage src={require('@site/static/img/editor-setup-testa-former.webp').default} alt="Raden med former och storlekar" width={640} />

<DocImage src={require('@site/static/img/editor-setup-testa-egen.webp').default} alt="Fälten för egen storlek" width={640} />

Knappen **Gå till startkameran** i nedre högra hörnet tar dig tillbaka till kamerastarten när du har vandrat iväg.

Panelen visar **Vad du ändrat**: en lista över varje inställning som ändrats den här sessionen, med gammalt värde överstruket och nytt värde markerat. Om du öppnade en befintlig version är det här din sista enkla chans att granska skillnaderna innan du sparar över den.

---

## Steg 5: Spara {#save-it}

Vad panelen visar beror på om du sparar en helt ny version eller uppdaterar en befintlig.

### Första gången: ge den ett namn {#give-it-a-name}

Din modell har redan ett namn i Marvifys system. Namnet du skriver här kopplas ihop med det som `modell@namn`, och det fullständiga id:t är vad som visar den här versionen på din webbsida. En modell kan ha hur många namngivna versioner som helst, så välj något som säger vad just den här är till för, som `webb` eller `kampanj`.

<DocImage src={require('@site/static/img/editor-setup-spara-namn.webp').default} alt="Namnfältet med det fullständiga id:t under" width={364} />

Medan du skriver visar panelen det fullständiga id som versionen kommer att heta. Tryck på **Spara**.

### Uppdatera en befintlig version {#updating-an-existing-version}

Om du öppnade en version som redan har inställningar erbjuder panelen två sätt att spara dina ändringar:

- **Uppdatera** skriver över de gamla inställningarna med dina ändringar. Överallt där `modell@namn` används uppdateras till de nya inställningarna.
- **Spara som ny** lämnar den gamla versionen orörd och sparar dina ändringar under ett nytt namn. Namnfältet från ovan dyker upp.

Inställningarna som **Uppdatera** ersätter **kan inte återskapas efteråt**. Är du osäker är **Spara som ny** alltid det trygga valet.

### Klart att köra {#ready-to-go}

I samma stund som sparningen går igenom visas ett kort med koden din webbplats behöver för att visa modellen, med ditt riktiga `modell@namn`-id ifyllt.

<DocImage src={require('@site/static/img/editor-setup-spara-kort.webp').default} alt="Kortet med dokumentationslänken och de två kodsnuttarna" width={620} />

Att lägga in koden på din webbplats är nästa steg, efter redigeraren. Integrationsguiderna visar exakt hur det går till på [Shopify](../exempel/shopify.md), [WooCommerce](../exempel/woocommerce.md) eller en [vanlig webbsida](../exempel/webpage-integration.md). För allt visaren kan göra (storlek, autoplay, analys, karuseller, VR), se [Marvify Viewer-referensen](../snabbstart/marvify-viewer.md).

Om du startade flödet från kontrollpanelens webbplatsguide har den fliken lyssnat: den går vidare automatiskt med din sparade version. Hur som helst kan du stänga redigerarfliken. Vill du ändra något senare öppnar du samma modell från din kontrollpanel och väljer versionens namn.

---

## Bra att veta {#good-to-know}

- **Varför kan jag flyga vart som helst i de tidiga stegen men inte senare?** I steg 1 och 2 väljer du gränserna, så kameran är fri. Du kan inte sätta en gräns du inte kan nå. Från det att du förhandsvisar (och i steg 4 och 5) är dina gränser påslagna, så att du upplever exakt det en besökare gör.
- **Guideringarna visas aldrig för besökare.** De finns bara i redigeraren, bara medan du sätter gränser.
- **Guidad setup rör bara inställningar för webbplatsen.** Hotspots, detaljkortet och annat innehåll på modellen lämnas exakt som de var.
