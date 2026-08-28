---
id: oversikt
title: Redigeraren
sidebar_label: Översikt
---
import DocImage from '@site/src/components/DocImage';

# Marvify-redigeraren

*En webbläsarbaserad redigerare där du förbereder dina 3D-modeller för din webbplats.*

Marvify-redigeraren är där en modell förbereds för att användas på webben. Den körs helt i webbläsaren och arbetar direkt mot modellerna i ditt Marvify-konto. Den öppnas alltid **från din Marvify-kontrollpanel**: välj en modell och en uppgift där, så öppnas redigeraren i en ny flik med modellen redan laddad.

<DocImage src={require('@site/static/img/editor-oversikt.webp').default} srcFull={require('@site/static/img/editor-oversikt-full.webp').default} alt="Marvify-redigeraren öppen i en webbläsare med en 3D-modell laddad" width={800} />

---

## Guidade uppgifter {#guided-tasks}

Redigeraren guidar dig i dag genom:

- **[Guidad setup](./setup.md)**: förbereder en modell för din webbplats. Vyn besökare startar i, hur nära och hur långt runt de kan röra sig, om modellen rör sig av sig själv, och kodsnutten att klistra in på din sida.
- **[Videor](./video.md)**: skapar videoklipp av din modell, formaterade och storleksanpassade för din webbplats och sociala medier. Filerna sparas på din dator.
- **[Foton](./foto.md)**: tar foton av din modell, redo att posta eller i full kvalitet, med eller utan bakgrund.

Fler guider är på väg och dokumenteras här när de blir tillgängliga.

---

## Hitta runt {#finding-your-way-around}

Skärmen har två huvudytor:

- **Bilden av din modell** fyller större delen av fönstret. Du rör dig runt den med musen: dra för att snurra, skrolla för att zooma.
- **Toppraden** visar vilken modell och version du har öppen, en bokknapp som öppnar rätt guide i den här dokumentationen, och ett val mellan ljust och mörkt tema.

När du kommer från kontrollpanelen för en specifik uppgift visas också en **steg-för-steg-panel** till höger på skärmen. Den tar dig genom uppgiften ett steg i taget, så att du aldrig möter alla redigerarens kontroller på en gång.

---

## En modell, många versioner {#one-model-many-versions}

En och samma modell kan sparas med hur många **namngivna versioner** som helst. Varje version har sina egna inställningar (startvy, kameragränser, bakgrundsfärg, rörelse) medan själva 3D-modellen förblir densamma.

En version identifieras som `modell@namn`, till exempel `min-produkt@webb`. Det fullständiga id:t är vad du använder på din webbplats för att visa just den versionen. Så kan du ha en version anpassad för produktsidan och en annan för en kampanj, utan att röra själva modellen.

Du väljer eller skapar en version när du sparar i slutet av en guidad uppgift. Vill du ändra en version senare öppnar du samma modell från din kontrollpanel och väljer det namnet.

---

## Inget händer av misstag {#nothing-happens-by-accident}

Medan du arbetar i redigeraren publiceras eller ändras ingenting på din webbplats. Guidad setup får effekt först när du sparar i det sista steget, och bara för versionen du sparade; video- och fotoflödena ändrar aldrig modellen alls, de skapar bara filer på din dator. Stänger du fliken innan du har sparat är allt exakt som det var.
