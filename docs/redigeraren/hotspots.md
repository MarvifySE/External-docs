---
draft: true
id: hotspots
title: Hotspots
sidebar_label: Hotspots
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Hotspots

*Ett guidat flöde som sätter interaktiva punkter på din modell: text vid hovring, anteckningar och kort vid klick, valda kameravyer, och en valfri rundtur.*

När du väljer att lägga till hotspots på en modell i kontrollpanelen öppnas redigeraren i hotspotflödet. En hotspot är en punkt på din produkt: när muspekaren hålls över den kan en textrad visas, och ett klick kan ta besökaren till en vy och visa en anteckning eller ett kort. Panelen till höger tar dig genom fyra steg:

1. **Hotspots**: placera punkterna och bestäm vad var och en gör
2. **Utseende**: hur punkterna och textbubblorna ser ut
3. **Testa**: använd scenen som en besökare
4. **Spara**: uppdatera din version, eller spara som en ny

<DocImage src={require('@site/static/img/editor-hotspots-oversikt.webp').default} alt="Steg 1 med en hotspot öppen, panelen till höger och modellen till vänster" width={800} />

---

## Innan du börjar {#before-you-start}

- **Hotspots kan läggas på alla modeller som gått genom [guidad setup](./setup.md).** De bygger vidare på versionens startkamera och kameragränser.
- **Ingenting ändras för besökare förrän du sparar** i sista steget.
- **Modellens egen rörelse är pausad** medan du arbetar här, precis som i video- och fotoflödena.

---

## Steg 1: Hotspots {#spots}

Panelen ber dig placera dina hotspots.

### Placera en punkt {#placing-a-dot}

Tryck på **Lägg till hotspot** och **dubbelklicka sedan på stället på din produkt där punkten ska sitta**. På en modell utan hotspots är placeringen redan aktiv när du kommer in, så det räcker att dubbelklicka. Punkten sätter sig och dess inställningar öppnas i panelen.

<DocImage src={require('@site/static/img/editor-hotspots-placera.webp').default} alt="Att dubbelklicka på produkten för att placera en punkt" width={700} />

Samma gest flyttar en punkt senare: tryck på **Flytta punkten** i punktens rad och dubbelklicka där den ska sitta i stället.

### Vad varje hotspot kan göra {#what-each-hotspot-does}

Varje hotspot har fyra sektioner i panelen:

<DocImage src={require('@site/static/img/editor-hotspots-sektioner.webp').default} alt="De fyra sektionerna för en öppen hotspot" width={364} />

1. **Namn**. Det enda som krävs. Ge den ett namn som säger vad den pekar på, som *Vänster ärm*. Varje hotspot behöver ett eget namn.
2. **När muspekaren hålls över**. En valfri kort rad som visas vid punkten. Lämnas den tom visas inget vid hovring.
3. **Vad ett klick visar**. Tre val:
    - **Inget**.
    - **Anteckning**: en eller två meningar som visas direkt vid punkten. Den stängs när besökaren trycker någon annanstans eller börjar vrida modellen.
    - **Kort**: textrader, en bild, en knapp. Kortet redigeras direkt i bilden, så det du ser är exakt vad besökare får.
4. **Kameran**. **Står stilla**, eller **Flyttas till en vald vy**. Tryck på **Välj hotspotens vy**, vrid och zooma tills produkten ser ut som besökaren ska mötas av, och tryck på **Använd denna vy**. När en vy är vald byter knappen namn till **Byt vy**. En vy kan till och med sikta utanför dina kameragränser från guidad setup: hotspoten markeras då med *utanför gränserna*, och besökare kan ändå nå den eftersom scenen tillfälligt lyfter gränserna för den vyn.

När en vy är vald väljer du hur mycket besökaren får röra sig där:

| Val | Vad besökaren kan göra vid vyn |
| --- | ------------------------------ |
| **Begränsad rörelse** | Titta runt lite: svänga kring din vy och zooma ut, aldrig närmare in. Standard. |
| **Fri rörelse** | Röra sig lika fritt som annars, inom dina kameragränser från guidad setup. |
| **Håll stilla** | Kameran står exakt i din vy tills besökaren går tillbaka. |

<DocImage src={require('@site/static/img/editor-hotspots-vy-guide.webp').default} alt="Vyväljaren med den pulserande guldramen" width={700} />

### Ändra, flytta om och ta bort {#order-and-removal}

Klicka på en hotspot i listan, eller på dess punkt i bilden, för att öppna och ändra den. Pilknapparna flyttar den upp eller ned i ordningen, och **ordningen är det besökare ser**: den styr siffrorna eller bokstäverna på punkterna och den ordning rundturen följer. **Ta bort** raderar en hotspot tillsammans med sin text och sitt kort, efter en bekräftelse.

---

## Steg 2: Utseende {#look}

Panelen frågar hur punkterna ska se ut. Allt här gäller alla hotspots, och punkterna i bilden uppdateras medan du ändrar.

<DocImage src={require('@site/static/img/editor-hotspots-utseende.webp').default} alt="Utseendepanelen med etiketter, färger och bubblor" width={364} />

- **Etikett på punkterna**: **Ingen**, **Siffror** eller **Bokstäver**, i listans ordning.
- **Färger**: färdiga teman (**Indigo**, **Mörk**, **Ljus**, **Guld**) eller **Egna färger** för fyllnad, kontur och etikett.
- **Textbubblor**: hovringstexten och anteckningen delar en bubbla, så de talar med en röst. Samma slags teman, plus rundade hörn. Sektionen visas bara när någon hotspot faktiskt har text.
- **Dölj punkterna tills muspekaren kommer nära**: håller scenen ren, med en radie du ställer själv. På mobiler och surfplattor visas punkterna som vanligt, eftersom det inte finns någon muspekare att följa.

---

## Steg 3: Testa {#try}

Panelen ber dig testa dina hotspots, och det här är på riktigt. Använd scenen som en besökare, och kontrollera:

- Att hovra över en punkt visar din text.
- Ett klick gör det du valde: anteckningen, kortet, kameran.
- En vald vy flyger dig dit, med en **Tillbaka**-knapp för att komma tillbaka.

Tryck på **Mobil** under bilden för att bedöma allt i mobilstorlek.

### Bläddring mellan hotspots {#hotspot-navigation}

Med minst två hotspots kan du lägga små kontroller i hörnet av scenen som låter besökare stega mellan dina hotspots i ordning:

<DocImage src={require('@site/static/img/editor-hotspots-navigering.webp').default} alt="Sektionen för bläddring mellan hotspots" width={364} />

- **Av** lämnar scenen precis som förut. **Pilar** ger föregående/nästa. **Pilar + rundtur** lägger till en uppspelningsknapp.
- **Mellan stopp** väljer övergången: **Tona** eller **Flyg**.
- För rundturen: **Sekunder per stopp**, och **Långsam rörelse vid varje stopp** med en liten **Svängning**, alltid inom varje hotspots tillåtna rörelse.

Rundturen spelar aldrig av sig själv när sidan laddas. En besökare trycker på play, turen går igenom hotspotarna i ordning och loopar tills besökaren rör scenen.

<DocImage src={require('@site/static/img/editor-hotspots-rundtur.webp').default} alt="Rundturen som spelar" width={700} />

---

## Steg 4: Spara {#save}

Eftersom hotspots läggs på en befintlig version är **Uppdatera** förvalt: dina hotspots sparas in i versionen du öppnade. Redigeraren ber dig bekräfta (*Ersätt dessa inställningar?*), eftersom de gamla inställningarna inte kan återskapas efteråt. Vill du hellre lämna originalet orört väljer du **Spara som ny** och ger den ett nytt namn, precis som i [guidad setup](./setup.md#save-it).

Det är också här en version blir av med sina hotspots: ta bort alla i steg 1, så blir **Fortsätt** i stället **Spara utan hotspots** och tar dig direkt hit.

Det bästa med att uppdatera: **visar din webbplats redan den här versionen dyker dina hotspots upp där så fort du sparat.** Ingenting i koden på sidan behöver ändras.

---

## Bra att veta {#good-to-know}

- **Hotspots syns aldrig i filer från [video](./video.md)- och [fotoflödena](./foto.md).** De hör till den interaktiva upplevelsen på din webbplats.
- **Det finns ingen gräns för antalet hotspots**, men några få väl valda brukar fungera bättre än många.
