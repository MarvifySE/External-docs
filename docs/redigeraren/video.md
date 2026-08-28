---
id: video
title: Videor
sidebar_label: Videor
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Videor

*Ett guidat flöde som gör videoklipp av din 3D-modell, formaterade och storleksanpassade för din webbplats och sociala medier.*

När du väljer att skapa media från en modell i kontrollpanelen öppnas redigeraren med en fråga, och tar dig sedan genom två korta steg. Resultatet är en MP4-fil i din nedladdningsmapp, redo att laddas upp var som helst.

---

## Innan du börjar {#before-you-start}

- **Video kräver Chrome eller Edge.** Andra webbläsare kan sakna möjlighet att skapa filen alls, eller ge sämre videokvalitet. Redigeraren säger till om din inte stöds.
- **Ingenting här ändrar din modell.** Flödet skapar filer. Dina sparade modellinställningar, inklusive allt från [guidad setup](./setup.md), rörs inte.
- **Filerna stannar på din dator.** Videon skapas i webbläsaren och sparas direkt i din nedladdningsmapp. Ingenting laddas upp eller lagras hos Marvify.

---

## Att välja video {#choosing-video}

Flödet öppnar med en enda fråga: **Vad ska vi göra?** Välj **Video**. (Valet **Foton** har [en egen guide](./foto.md).)

<DocImage src={require('@site/static/img/editor-media-val.webp').default} alt="Frågan Vad ska vi göra? med valen Video och Foton" width={600} />

---

## Steg 1: Vilket format? {#what-format}

Olika plattformar vill ha olika format. Välj var klippet ska användas, eller ange en egen storlek:

<DocImage src={require('@site/static/img/editor-media-format.webp').default} alt="Formatvalen" width={364} />

| Format | Tänkt för |
| ------ | --------- |
| **Stående (9:16)** | TikTok, Reels, YouTube Shorts. Fyller hela skärmen. |
| **Flöde (4:5)** | Inlägg i flödet på Instagram och Facebook. Tar mer plats än en kvadrat. |
| **Kvadrat (1:1)** | Fungerar överallt. Beskär minst när du är osäker. |
| **Liggande (16:9)** | YouTube, din webbplats, produktsidor. Standard för video. |
| **Egen** | Ange ett eget format med exakt bredd och höjd. |

**Egen** visar två fält för bredd och höjd, med en rad under som anger exakt vilken pixelstorlek filen sparas i.

Så fort ett format är valt visas en ljus ram över modellen med allt utanför nedtonat. **Den ramen visar exakt vad som kommer med.** Den finns kvar genom hela flödet, så det du ser innanför är det som hamnar i filen.

<DocImage src={require('@site/static/img/editor-media-ram.webp').default} alt="Den ljusa ramen över modellen" width={620} />

Kameran hålls stilla i det här steget; inramningen kommer i steg 2.

---

## Steg 2: Skapa ditt klipp {#make-your-clip}

Ett klipp är en kamerarörelse som spelas över din modell. Välj hur den rör sig och rikta sedan in den med musen.

### Välj en rörelse {#pick-a-shot}

Vid ankomst öppnas rörelseväljaren av sig själv. Överst finns **Gör en egen kamerarörelse**, sedan tolv färdiga rörelser i två grupper:

<DocImage src={require('@site/static/img/editor-media-galleri.webp').default} alt="Rörelseväljaren med färdiga kamerarörelser" width={368} />

- **Spelas en gång**: har en början och ett slut, så ett flöde som spelar om den visar ett klipp. En effekt i varje ände gör det till en toning. Rörelserna: **Hjälteinzoom**, **Frontsvep**, **Lyft och vrid**, **Backa ut**, **Ovanifrån och ned** och **Glid förbi**.
- **Loopar**: slutar på exakt samma bild som den började på, så ett flöde spelar om den utan synligt klipp. Rörelserna: **Rotation**, **Frontpendel**, **Lutande bana**, **Cirkel in och ut**, **Topp till tå** och **Handhållen cirkel**.

Varje färdig rörelse anpassar sig till modellens storlek och proportioner, så en rörelse gjord för en hög flaska fungerar lika bra på en låg, bred soffa. Din valda rörelse visas överst i panelen med länken **Byt** som öppnar väljaren igen.

<DocImage src={require('@site/static/img/editor-media-rorelse.webp').default} alt="Den valda rörelsen med länken Byt bredvid" width={364} />

### Rikta in med musen {#frame-the-clip}

Klippet spelas i loop i bilden medan du arbetar. Musen justerar inramningen av hela rörelsen i stället för att styra kameran direkt:

- **Vänsterdra uppåt eller nedåt** tiltar rörelsen så att produkten ses högre eller lägre ifrån.
- **Högerdra** flyttar produkten runt i bilden.
- **Skrolla** går närmare eller längre bort.

En liten förklaring i nedre vänstra hörnet visar kontrollerna, och dess **?** öppnar en kort guide med ett demoklipp.

<DocVideo src={require('@site/static/video/framing-v1-s.mp4').default} srcFull={require('@site/static/video/framing-v1.mp4').default} ratio="1540 / 1028" />

För en färdig rörelse vrider slidern **Startvinkel** hela rörelsen runt produkten och avgör vilken sida klippet öppnar på. Vill du styra kamerapositionerna själv trycker du på **Ändra** för att göra om rörelsen till stopp du kan flytta för hand (se [Gör en egen rörelse](#build-your-own) nedan).

### Längd och effekter {#length-and-effects}

<DocImage src={require('@site/static/img/editor-media-langd-effekter.webp').default} alt="Fältet för klippets längd och de två effektvalen" width={364} />

**Klippets längd** anger hur många sekunder klippet är. Varje färdig rörelse kommer med en rimlig längd, och en varning visas om du går under tre sekunder: *TikTok och Reels kräver minst 3 sekunder.*

För rörelser som spelas en gång visas två menyer: **Effekt i början** och **Effekt i slutet**. De bygger upp produkten eller tar isär den, så att klippet läses som 3D i stället för som ett foto. Några exempel: **Rain** låter droppar falla och bygga upp produkten från marken, **Paintballs** skjuter in bollar från alla håll som splattrar ihop till produkten, och **Scan** drar en linje uppåt som lämnar produkten solid bakom sig. Varje effekt tar en kort, fast bit i sin ände av klippet.

**Bakgrundsfärg** ligger under och fungerar som i guidad setup: färgen slår igenom direkt, och matchar du den mot platsen där klippet ska visas försvinner kanterna.

### Skapa klippet {#create-the-clip}

<DocImage src={require('@site/static/img/editor-media-skapa.webp').default} alt="Knappen Skapa klipp med filstorleken under" width={364} />

Tryck på **Skapa klipp**. Filens exakta pixelstorlek står direkt under knappen, till exempel *1080 × 1920*.

Videon skapas bild för bild i din webbläsare. En förloppsskärm visas med procent och en varning: *Håll den här fliken öppen och stanna kvar tills din video är klar. Om du stänger den eller byter flik måste du börja om.* På en långsammare dator tar det längre tid, men den färdiga filen blir identisk med en gjord på en snabb maskin. **Avbryt** stoppar och slänger allt; ingen halvfärdig fil sparas.

När den är klar hamnar MP4-filen i din nedladdningsmapp och panelen bekräftar: *Sparad till dina nedladdningar.*

### Återanvänd en rörelse på en annan produkt {#reusing-a-shot}

**Kopiera rörelse** kopierar din aktuella kamerarörelse till urklipp som text. Öppna **Videor** på en annan modell från kontrollpanelen, tryck på **Klistra in rörelse**, så läggs samma rörelse på där, anpassad till den nya produktens storlek. Texten är den sparade kopian, så klistra in den i en anteckning eller ett dokument om du vill ha den senare.

### Avancerat {#advanced}

Bockar du i **Avancerat** visas fält för exakta värden: **Håll kvar i slutet** (för rörelser som spelas en gång), **Avstånd**, **Vinkel**, **Höjd i bild** och **I sidled**. Allt här går också att göra med musen, så de flesta klipp behöver det aldrig.

---

## Gör en egen rörelse {#build-your-own}

Passar ingen av de färdiga rörelserna väljer du **Gör en egen kamerarörelse** i rörelseväljaren, eller trycker på **Ändra** på en färdig för att utgå från dess positioner. Du placerar kamerastopp ett i taget och det färdiga klippet glider genom dem i tur och ordning, med uppehåll, klippningar, loopning och mjukhet under din kontroll. Byggaren är ett eget verktyg och har [en egen guide](./bygg.md).

När rörelsen är klar fortsätter du som med vilken annan som helst: rikta in med musen, sätt längden och tryck på **Skapa klipp**.

---

## Vart filerna tar vägen {#where-the-files-go}

MP4-filen sparas av webbläsaren i den vanliga nedladdningsmappen, döpt efter modellen, versionen och datumet:

```
min-produkt-webb-2026-08-28.mp4
```

MP4 (H.264) går att ladda upp direkt på alla stora plattformar. Filerna har **ingen vattenstämpel**. Exporterar du två gånger samma dag lägger webbläsaren till en siffra i det andra filnamnet.

---

## Börja om {#starting-over}

- **Tillbaka** i första steget går tillbaka till frågan om video eller foton och behåller allt du byggt, så att du kan göra ett klipp och ta foton under samma besök.
- **Återställ** i panelens överkant rensar det pågående jobbet: din rörelse, inramning och inställningar. Redigeraren frågar först (*Börja om?*), eftersom det inte går att ångra.

Det finns inget sparsteg och ingen slutskärm. När du har klippen du kom för stänger du fliken.

---

## Om det inte går att skapa videon {#if-the-render-fails}

- **Byt till Chrome eller Edge.** De flesta misslyckanden beror på att webbläsaren saknar videokodare.
- **Prova en mindre egen storlek.** Mycket stora storlekar kan bli för mycket för webbläsarens kodare. Gå ned i pixlar och försök igen.
- **Håll fliken öppen och aktiv** tills filen ligger i nedladdningsmappen. Att stänga fliken eller byta bort avbryter allt.

Hjälper inget av det, [kontakta support](../felsokning/kontakta-support.md).

---

## Bra att veta {#video-good-to-know}

- **Modellens egen rörelse är pausad** medan du arbetar här, så en rotation eller animation från guidad setup stör aldrig rörelsen du riktar in.
- **Kameran kan gå var som helst medan du riktar in.** Zoomgränser från guidad setup gäller besökare på din webbplats, inte dig som gör en fil.
- **Hotspots syns aldrig i filerna.** Videor fångar bara produkten.
