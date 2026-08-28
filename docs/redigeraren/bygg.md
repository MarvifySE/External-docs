---
id: bygg
title: Gör en egen rörelse
sidebar_label: Gör en egen rörelse
---
import DocVideo from '@site/src/components/DocVideo';
import DocImage from '@site/src/components/DocImage';

# Gör en egen rörelse

*Redigerarens byggare för kamerarörelser: placera stopp, se kameran glida genom dem, och finjustera resultatet. Används både för webbplatsanimationer och videoklipp.*

Byggaren finns på två ställen och fungerar likadant på båda:

- I **[guidad setup](./setup.md#the-motion)**, under rörelsesteget, som **Skapa egen** (eller **Redigera animation** för att utgå från en färdig). Resultatet blir animationen besökare ser på din webbplats.
- I **[Videor](./video.md#pick-a-shot)**, i rörelseväljaren som **Gör en egen kamerarörelse**, eller genom att trycka på **Ändra** på en färdig rörelse för att utgå från dess positioner. Resultatet blir ditt videoklipp.

Grundidén är densamma i båda: flyg kameran någonstans, placera ett stopp, flyg någon annanstans, placera ett till. Den färdiga rörelsen glider genom dina stopp i tur och ordning.

---

## Placera stopp {#placing-stops}

<DocVideo src={require('@site/static/video/build-stops-v1-s.mp4').default} srcFull={require('@site/static/video/build-stops-v1.mp4').default} ratio="1540 / 1028" />

Ett kort i övre vänstra hörnet lotsar dig igenom, och börjar med *Flytta kameran dit rörelsen ska börja och placera ditt första stopp.* Raden längst ned har huvudkontrollerna:

- **Placera stopp här** sparar kamerans aktuella position som nästa stopp.
- **Sikta mot mitten** håller kameran riktad mot produktens mitt och tar bara höjden från där du dubbelklickar. Använd den för att cirkla runt något. Bocka ur för att sikta exakt där du dubbelklickar.
- **Uppdatera stopp** flyttar ett redan placerat stopp till kamerans aktuella position.
- **Ångra** (eller Ctrl+Z) tar tillbaka den senaste ändringen.

En rörelse behöver minst två stopp, och tre till fem ser oftast bäst ut. Medan du bygger kan kameran röra sig helt fritt, så att du kan komponera varifrån du vill.

---

## Flytta stopp efter att de placerats {#moving-stops}

Varje stopp visas som en numrerad bricka på modellen, med det första markerat i grönt. Klicka på en bricka för att ta upp det stoppet; ett draghandtag låter dig då flytta var kameran står utan att ändra vad den tittar på. Dubbelklicka på en bricka för att flyga kameran till det stoppet.

<DocImage src={require('@site/static/img/editor-bygg-handtag.webp').default} alt="Draghandtaget på ett valt stopp" width={600} />

Panelen listar varje stopp i ordning. Första raden heter **Börjar här**, resten **Stopp 2**, **Stopp 3** och så vidare. Från listan kan du flytta ett stopp tidigare eller senare, ta bort ett, eller välja **Ta bort alla stopp** för att börja tomt.

---

## Forma rörelsen {#shaping-the-move}

Väljer du ett stopp i listan öppnas dess inställningar:

- **Bromsa** saktar kameran genom det stoppet och snabbar upp resten, så att totala längden hålls. Använd den för att dröja på produktens bästa sida.
- **Klipp till nästa stopp** hoppar över resan och klipper direkt dit, med en toning genom bakgrunden på vägen. På sista stoppet i en rörelse som inte loopar blir det **Klipp tillbaka till början**, vilket får rörelsen att loopa.
- När ett klipp finns väljer **Vid varje klipp** mellan **Toning** (doppar genom bakgrundsfärgen och tillbaka) och **Hårt klipp** (hoppar direkt till nästa stopp, tuffare).

En regel som byggaren håller på: ett stopp kan inte ha klipp på båda sidor, eftersom det skulle bli en stillbild där kameran borde röra sig. Byggaren säger nej och förklarar varför.

Under stopplistan:

- **Längd** anger hur många sekunder hela rörelsen tar, oavsett om den blir en webbplatsanimation eller ett videoklipp (i videoflödet heter fältet **Klippets längd**).
- **Loopa** får rörelsen att sluta på exakt samma bild som den började på, så att den upprepas utan synligt hopp. Avbockad spelas den en gång och lämnar sedan över.
- **Mjukhet** styr hur mjukt kameran glider genom stoppen.

---

## Titta på den {#watching-it}

Tryck på **Förhandsvisning** i nedre högra hörnet för att titta på rörelsen så långt. Uppspelningen börjar alltid från första stoppet, och rör du modellen stannar den så att du kan fortsätta placera.

---

## Behålla eller ångra {#keeping-or-discarding}

När den ser rätt ut trycker du på **Använd den här rörelsen** i panelen. **Avbryt** ställer tillbaka allt som det var innan du började bygga, inklusive en färdig rörelse du höll på att ändra.

Vad som händer sedan beror på var du är:

- **I guidad setup** blir rörelsen din modells startanimation. Du kan fortfarande ställa in hur den återupptas efter att en besökare interagerat, och fortsätter sedan genom resten av stegen.
- **I Videor** blir rörelsen ditt klipp. Du fortsätter med att rikta in det med musen, sätta längden och trycka på **Skapa klipp**.
