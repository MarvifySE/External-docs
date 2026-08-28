---
id: foto
title: Foton
sidebar_label: Foton
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Foton

*Ett guidat flöde som tar foton av din 3D-modell, formaterade och storleksanpassade för din webbplats och sociala medier.*

När du väljer att skapa media från en modell i kontrollpanelen öppnas redigeraren med en fråga, och tar dig sedan genom två korta steg. Resultatet är en bildfil i din nedladdningsmapp: en JPG klar att publicera, eller en PNG för en produktsida, med eller utan bakgrund.

---

## Innan du börjar {#before-you-start}

- **Ingenting här ändrar din modell.** Flödet skapar filer. Dina sparade modellinställningar, inklusive allt från [guidad setup](./setup.md), rörs inte.
- **Filerna stannar på din dator.** Fotona tas i webbläsaren och sparas direkt i din nedladdningsmapp. Ingenting laddas upp eller lagras hos Marvify.

---

## Att välja foton {#choosing-photos}

Flödet öppnar med en enda fråga: **Vad ska vi göra?** Välj **Foton**. (Valet **Video** har [en egen guide](./video.md).)

<DocImage src={require('@site/static/img/editor-media-val.webp').default} alt="Frågan Vad ska vi göra? med valen Video och Foton" width={600} />

---

## Steg 1: Vilket format? {#what-format}

Olika plattformar vill ha olika format. Välj var fotot ska användas, eller ange en egen storlek:

<DocImage src={require('@site/static/img/editor-media-format.webp').default} alt="Formatvalen" width={364} />

| Format | Tänkt för |
| ------ | --------- |
| **Stående (9:16)** | TikTok, Reels, YouTube Shorts. Fyller hela skärmen. |
| **Flöde (4:5)** | Inlägg i flödet på Instagram och Facebook. Tar mer plats än en kvadrat. |
| **Kvadrat (1:1)** | Fungerar överallt. Beskär minst när du är osäker. Standard för foton. |
| **Liggande (16:9)** | YouTube, din webbplats, produktsidor. |
| **Egen** | Ange ett eget format med exakt bredd och höjd. |

**Egen** visar två fält för bredd och höjd, med en rad under som anger exakt vilken pixelstorlek filen sparas i.

Så fort ett format är valt visas en ljus ram över modellen med allt utanför nedtonat. **Den ramen visar exakt vad som kommer med.** Kameran hålls stilla i det här steget; inramningen kommer i steg 2.

---

## Steg 2: Hur ska den se ut? {#how-should-it-look}

Här styr du kameran direkt: **vänsterdra** snurrar produkten, **högerdra** flyttar den runt i bilden, **skrolla** zoomar, och ett **dubbelklick** siktar kameran där du klickar. Passa in produkten i den ljusa ramen. En liten förklaring i nedre vänstra hörnet visar kontrollerna, och dess **?** öppnar en kort guide med ett demoklipp.

<DocVideo src={require('@site/static/video/framing-v1-s.mp4').default} srcFull={require('@site/static/video/framing-v1.mp4').default} ratio="1540 / 1028" />

**Bakgrundsfärg** ligger överst i panelen och fungerar som i guidad setup: färgen slår igenom direkt, och matchar du den mot platsen där fotot ska visas försvinner kanterna.

### Kvalitet {#photo-quality}

Två val, med den levererade pixelstorleken alltid synlig i panelen:

<DocImage src={require('@site/static/img/editor-media-foto-kvalitet.webp').default} alt="De två kvalitetsvalen med storleken under" width={364} />

- **Klar att publicera** (standard): anpassad för Instagram, TikTok och resten. Går att ladda upp överallt. Sparas som JPG, till exempel 1080 × 1080 för en kvadrat eller 1080 × 1920 för stående.
- **Bästa kvalitet**: större, för en produktsida eller för redigering senare. Sparas som PNG, runt 2048 pixlar på långsidan.

### Ingen bakgrund {#no-background}

Med **Bästa kvalitet** valt blir kryssrutan **Ingen bakgrund** tillgänglig. Den sparar fotot utan bakgrund, redo att läggas på vilken färg som helst. Medan den är ibockad visas ett rutmönster bakom produkten: det är äkta genomskinlighet, exakt vad filen kommer att innehålla.

<DocVideo src={require('@site/static/video/photo-no-background-v1-s.mp4').default} srcFull={require('@site/static/video/photo-no-background-v1.mp4').default} width="85%" ratio="1920 / 1028" />

> **Obs:** När bakgrunden tas bort försvinner också skuggor och stödformer som hör till scenen, så kontrollera mot rutmönstret att produkten fortfarande ser hel ut innan du tar bilden.

Filer som är klara att publicera kan inte vara genomskinliga, och därför kräver kryssrutan **Bästa kvalitet**.

### Ta bilden {#take-the-photo}

Tryck på **Ta bild**. Filen sparas direkt i din nedladdningsmapp. Rikta om och ta så många bilder du vill.

---

## Vart filerna tar vägen {#where-the-files-go}

Fotona sparas av webbläsaren i den vanliga nedladdningsmappen, döpta efter modellen, versionen och datumet:

```
min-produkt-webb-2026-08-28.jpg
```

Filerna har **ingen vattenstämpel**. Tar du två bilder samma dag lägger webbläsaren till en siffra i det andra filnamnet.

---

## Börja om {#starting-over}

- **Tillbaka** i första steget går tillbaka till frågan om video eller foton och behåller dina inställningar, så att du kan ta foton och göra en video under samma besök.
- **Återställ** i panelens överkant rensar det pågående jobbet: din inramning och dina inställningar. Redigeraren frågar först (*Börja om?*), eftersom det inte går att ångra.

Det finns inget sparsteg och ingen slutskärm. När du har fotona du kom för stänger du fliken.

---

## Bra att veta {#photo-good-to-know}

- **Modellens egen rörelse är pausad** medan du arbetar här, så en rotation eller animation från guidad setup stör aldrig bilden du riktar in.
- **Kameran kan gå var som helst medan du riktar in.** Zoomgränser från guidad setup gäller besökare på din webbplats, inte dig som tar ett foto.
- **Hotspots syns aldrig i filerna.** Foton fångar bara produkten.
