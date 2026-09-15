---
draft: true
id: kort
title: Detaljkort
sidebar_label: Detaljkort
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Detaljkort

*Ett guidat flöde som ger din modell ett detaljkort: ett kort i vyns hörn med text, bild och knapp, som besökare öppnar när de vill veta mer.*

När du väljer att ge en modell ett detaljkort i kontrollpanelen öppnas redigeraren i kortflödet. Kortet öppnas från en liten knapp i ett hörn av vyn, och varje version har ett. Panelen till höger tar dig genom stegen:

1. **Kortet**: vad kortet säger, med layout, text, bild och knapp
2. **Placering**: vilket hörn det sitter i och vad besökare ser först
3. **Testa**: använd scenen som en besökare
4. **Spara**: uppdatera din version, eller spara som en ny

<DocImage src={require('@site/static/img/editor-card-oversikt.webp').default} srcFull={require('@site/static/img/editor-card-oversikt-full.webp').default} alt="Steg 1 med en layout vald, kortet i vyn och panelen till höger" width={800} />

---

## Innan du börjar {#before-you-start}

- **Detaljkort kan läggas på alla modeller som gått genom [guidad setup](./setup.md).**
- **Ingenting når besökare förrän du sparar** i sista steget. Kortet syns i vyn medan du arbetar, men besökare ser det först när du har sparat.

---

## Steg 1: Kortet {#card}

Kortet i vyn uppdateras medan du skriver.

### Utgå från en layout {#start-from}

Överst väljer du en utgångspunkt bland flera layouter. De kommer ifyllda med exempeltext, så du bara byter ut orden.

<DocVideo src={require('@site/static/video/card-start-from-v1-s.mp4').default} srcFull={require('@site/static/video/card-start-from-v1.mp4').default} width="85%" ratio="1920 / 1028" />

### Innehåll {#content}

Kortet byggs av rader, var och en med en stil, till exempel rubrik, vanlig text eller pris. Lägg till fler med **Lägg till en rad**, flytta dem med pilarna och ta bort med krysset. En tom rad visas inte för besökare.

<DocImage src={require('@site/static/img/editor-card-innehall.webp').default} srcFull={require('@site/static/img/editor-card-innehall.webp').default} alt="Sektionerna för innehåll, bild och knapp" width={240} />

### Bild {#image}

Bocka i **Visa en bild** och ange bildens adress. Liggande bilder passar överst eller nederst i kortet, stående bilder bredvid texten. **Placering** och **Bildstorlek** avgör var den hamnar och hur mycket plats den tar.

### Knapp {#button}

**Text på knappen** och **Vart den leder (URL)**. Båda behövs för att knappen ska visas för besökare. Adressen kompletteras åt dig (`butik.se/produkt` blir `https://butik.se/produkt`), och länken öppnas i en ny flik.

### Avancerad stil {#styling}

Under **Avancerad stil** finns kortets utseende: form och luft, typsnitt, färger och knappens stil. Hörnet kortet sitter i väljs inte här utan i nästa steg.

<DocImage src={require('@site/static/img/editor-card-stil.webp').default} srcFull={require('@site/static/img/editor-card-stil.webp').default} alt="Avancerad stil öppen med kortets stilinställningar" width={240} />

### Ta bort kortet {#remove}

Öppnade du en version som redan har ett kort finns **Ta bort kortet** längst ned i panelen, och det tar dig till spara-steget utan kortet.

---

## Steg 2: Placering {#look}

<DocImage src={require('@site/static/img/editor-card-placering.webp').default} srcFull={require('@site/static/img/editor-card-placering.webp').default} alt="Hörnväljaren, Börja som en knapp och knappinställningarna" width={240} />

- **Hörn av bilden**: vilket hörn kortet sitter i. Hörnet gäller både det öppna kortet och knappen det stängs till.
- **Börja som en knapp**: kortet laddas stängt, som den lilla knappen, och öppnas när en besökare trycker på den. På mobiler börjar kortet alltid som knappen, oavsett vad du väljer här.
- **Knappen**: det besökare trycker på för att öppna kortet när det är stängt. Skriv texten eller välj ett av förslagen, och välj knappens färg och textfärg.

> **Obs:** När muspekaren är över knappinställningarna stängs kortet i vyn till knappen, så att du ser vad du färglägger. Flytta pekaren därifrån så öppnas kortet igen.

<DocVideo src={require('@site/static/video/card-pill-v1-s.mp4').default} srcFull={require('@site/static/video/card-pill-v1.mp4').default} width="85%" ratio="1920 / 1028" />

---

## Steg 3: Testa {#try}

Använd scenen som en besökare: öppna och stäng kortet, och kontrollera att det inte täcker produkten. I **Mobil**-storlek (knappen under vyn) börjar kortet som knappen, precis som i en mobil, och öppnas som en panel från underkanten.

**Dator**, **Mobil** och **Tillbaka till full storlek** visar var och en kortet som en ny sidladdning skulle.

<DocVideo src={require('@site/static/video/card-mobile-v1-s.mp4').default} srcFull={require('@site/static/video/card-mobile-v1.mp4').default} width="70%" ratio="1540 / 1028" />

---

## Steg 4: Spara {#save}

Eftersom detaljkortet läggs på en befintlig version är **Uppdatera** förvalt: kortet sparas in i versionen du öppnade. Vill du lämna originalet orört väljer du **Spara som ny** och ger den ett nytt namn, precis som i [guidad setup](./setup.md#save-it).

Det är sparningen som slår på kortet för besökare. Visar din webbplats redan den här versionen dyker kortet upp där så fort du har sparat. Ingenting i koden på sidan behöver ändras.

---

## Bra att veta {#good-to-know}

- **Kortet syns aldrig i filer från [video](./video.md)- och [fotoflödena](./foto.md).** Det hör till modellen på din webbplats, inte till de exporterade filerna.
- **Har modellen också [hotspots](./hotspots.md)** tonas kortet ut medan en besökare är vid en, och kommer tillbaka efteråt.
- **Långa kort rullar inuti kortet.** Scrollhjulet över kortet rullar kortet, inte modellen. På mobiler är kortet en panel från underkanten med ett handtag, och stängs med ett svep nedåt.
