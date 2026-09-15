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

Olika plattformar vill ha olika format. De färdiga formaten täcker de vanliga, från stående för TikTok och Reels till liggande för YouTube och din webbplats, och **Egen** tar exakt bredd och höjd.

<DocImage src={require('@site/static/img/editor-media-format.webp').default} alt="Formatvalen" width={364} />

Så fort ett format är valt visas en ljus ram över modellen med allt utanför nedtonat. **Den ramen visar exakt vad som kommer med.** Den finns kvar genom hela flödet, så det du ser innanför är det som hamnar i filen.

<DocImage src={require('@site/static/img/editor-media-ram.webp').default} alt="Den ljusa ramen över modellen" width={620} />

Kameran hålls stilla i det här steget; inramningen kommer i steg 2.

---

## Steg 2: Skapa ditt klipp {#make-your-clip}

Ett klipp är en kamerarörelse som spelas över din modell. Välj hur den rör sig och rikta sedan in den med musen.

### Välj en rörelse {#pick-a-shot}

Vid ankomst öppnas rörelseväljaren av sig själv. Överst finns **Gör en egen kamerarörelse**, sedan färdiga rörelser i två grupper:

<DocImage src={require('@site/static/img/editor-media-galleri.webp').default} alt="Rörelseväljaren med färdiga kamerarörelser" width={368} />

- **Spelas en gång**: har en början och ett slut, så ett flöde som spelar om den visar ett klipp. En effekt i varje ände gör det till en toning.
- **Loopar**: slutar på exakt samma bild som den började på, så ett flöde spelar om den utan synligt klipp.

Varje färdig rörelse anpassar sig till modellens storlek och proportioner, så en rörelse gjord för en hög flaska fungerar lika bra på en låg, bred soffa.

<DocImage src={require('@site/static/img/editor-media-rorelse.webp').default} alt="Den valda rörelsen med länken Byt bredvid" width={364} />

### Rikta in med musen {#frame-the-clip}

Klippet spelas i loop i vyn medan du arbetar. Musen justerar inramningen av hela rörelsen i stället för att styra kameran direkt: att dra tiltar rörelsen eller flyttar produkten runt i ramen, och att skrolla går närmare eller längre bort.

<DocVideo src={require('@site/static/video/framing-v1-s.mp4').default} srcFull={require('@site/static/video/framing-v1.mp4').default} ratio="1540 / 1028" />

För en färdig rörelse vrider slidern **Startvinkel** hela rörelsen runt produkten och avgör vilken sida klippet öppnar på. Vill du styra kamerapositionerna själv trycker du på **Ändra** för att göra om rörelsen till stopp du kan flytta för hand (se [Gör en egen rörelse](#build-your-own) nedan).

### Längd och effekter {#length-and-effects}

<DocImage src={require('@site/static/img/editor-media-langd-effekter.webp').default} alt="Fältet för klippets längd och de två effektvalen" width={364} />

**Klippets längd** anger hur många sekunder klippet är. Varje färdig rörelse kommer med en rimlig längd.

För rörelser som spelas en gång visas två menyer: **Effekt i början** och **Effekt i slutet**. De bygger upp produkten eller tar isär den, så att klippet läses som 3D i stället för som ett foto. Varje effekt tar en kort, fast bit i sin ände av klippet.

**Bakgrundsfärg** ligger under och fungerar som i guidad setup: färgen slår igenom direkt, och matchar du den mot platsen där klippet ska visas försvinner kanterna.

### Skapa klippet {#create-the-clip}

<DocImage src={require('@site/static/img/editor-media-skapa.webp').default} alt="Knappen Skapa klipp med filstorleken under" width={364} />

Tryck på **Skapa klipp**. Videon skapas bild för bild i din webbläsare, så håll fliken öppen och aktiv tills den är klar. På en långsammare dator tar det längre tid, men den färdiga filen blir identisk med en gjord på en snabb maskin. **Avbryt** stoppar och slänger allt; ingen halvfärdig fil sparas.

När den är klar hamnar MP4-filen i din nedladdningsmapp.

### Återanvänd en rörelse på en annan produkt {#reusing-a-shot}

**Kopiera rörelse** kopierar din aktuella kamerarörelse till urklipp som text. Öppna **Videor** på en annan modell från kontrollpanelen, tryck på **Klistra in rörelse**, så läggs samma rörelse på där, anpassad till den nya produktens storlek. Texten är den sparade kopian, så klistra in den i en anteckning eller ett dokument om du vill ha den senare.

### Avancerat {#advanced}

Bockar du i **Avancerat** visas fält för exakta värden för inramningen. Allt här går också att göra med musen, så de flesta klipp behöver det aldrig.

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
- **Återställ** i panelens överkant rensar det pågående jobbet: din rörelse, inramning och inställningar. Det går inte att ångra.

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
- **Hotspots och detaljkortet syns aldrig i filerna.** Videor fångar bara produkten.
