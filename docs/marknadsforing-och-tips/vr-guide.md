---
id: vr-guide
title: Hur du använder Model Viewer i VR
sidebar_label: VR-upplevelse
---

# Hur du använder Model Viewer i VR

Den här guiden förklarar hur du aktiverar och använder VR-funktionen i Marvify Model Viewer. VR låter besökare utforska produkter i en immersiv miljö med hjälp av WebXR-kompatibla webbläsare och enheter som VR-headset.

VR-funktionen är valfri och aktiveras endast på hårdvara som stöds. På vanliga skrivbords- och mobilwebbläsare beter sig visaren som en standard interaktiv 3D-upplevelse.

Om du ännu inte har bäddat in Marvify-visaren på din webbplats, börja med den tekniska dokumentationen och den grundläggande installationsguiden innan du fortsätter.

- [Teknisk dokumentation](https://docs.marvify.io/snabbstart/marvify-viewer/)
- [Exempelguide](/exempel/webpage-integration)

<!-- <video src="pics/vr.webm" autoplay muted loop playsinline controls style={{maxWidth: '60%'}}>
Din webbläsare stöder inte video-taggen.
</video> -->

:::info Videoplatshållare
*Lägg till video: vr.webm - VR-exempel*
:::

Virtual Reality lägger till ett immersivt lager till Marvify Model Viewer för både webbplatsbesökare och publik på plats. Istället för att se produkter på en skärm låter VR besökare utforska dem på ett mer engagerande och minnesvärt sätt med hjälp av naturliga rörelser och kontroller.

Detta gör VR särskilt användbart vid mässor, showrooms och varumärkesevenemang, där utrymmet är begränsat. Med VR kan du visa upp hela ditt produktsortiment utan att transportera eller visa varje fysisk artikel, vilket låter besökare utforska din kollektion i ett kompakt och interaktivt format.

## 1. Aktivera VR på visaren

VR-stöd aktiveras med hjälp av attributet `enable-vr` på elementet `<marvify-model-viewer>`. När detta attribut finns exponerar visaren en Enter VR-knapp på enheter och webbläsare som stöder WebXR.

```html
<marvify-model-viewer
  model-id="ditt-modell-id"
  enable-vr="true"
  style="width: 400px; height: 400px">
</marvify-model-viewer>
```

Om enheten inte stöder VR kommer knappen inte att visas och visaren fortsätter att fungera normalt i 3D.

**Tips:** Du kan förhandsgranska och felsöka VR-upplevelsen i en skrivbordswebbläsare med hjälp av Chrome-tillägget [Immersive Web Emulator](https://chromewebstore.google.com/detail/cgffilbpcibhmcfbgggfhfolhkfbhmik?utm_source=item-share-cb). Detta är användbart för utveckling och layouttestning när ett headset inte är omedelbart tillgängligt.

## 2. Gå in i VR som användare

På ett kompatibelt headset visar visaren en Enter VR-knapp efter att modellen har laddats. Att välja denna knapp växlar upplevelsen från webbsidan till immersivt VR-läge.

I VR kan användare:

- Rotera modellen med VR-kontroller
- Panorera runt objektet
- Zooma in och ut inom tillåtna gränser
- Avsluta VR och återvända till webbsidan när som helst

Interaktionsbeteendet hanteras automatiskt av visaren och anpassas till de tillgängliga inmatningsmetoderna på XR-enheter som stöds.

## 3. Justera modellavstånd och höjd i VR

När du går in i VR placerar visaren automatiskt modellen på ett standardavstånd baserat på objektets storlek. I många fall fungerar detta bra utan ytterligare konfiguration.

Beroende på produkten kan viss manuell justering behövas för att uppnå en bekväm och väl inramad startposition.

Marvify tillhandahåller dedikerade VR-attribut för att kontrollera hur modellen visas när en användare går in i VR:

- `vr-user-distance` styr hur långt modellen placeras från användaren
- `vr-user-height` justerar den vertikala förskjutningen i förhållande till användaren

```html
<marvify-model-viewer
  model-id="ditt-modell-id"
  enable-vr="true"
  vr-user-distance="1.8"
  vr-user-height="0.1">
</marvify-model-viewer>
```

## 4. Kontrollera zoomgränser i VR

I VR kan mycket nära inspektion minska den visuella trovärdigheten eller kännas obekväm. Du kan begränsa hur nära eller långt användare kan röra sig med hjälp av VR-specifika zoomgränser.

- `vr-minZoom` förhindrar användare från att komma för nära
- `vr-maxZoom` begränsar hur långt användare kan röra sig bort

```html
<marvify-model-viewer
  model-id="ditt-modell-id"
  enable-vr="true"
  vr-minZoom="0.6"
  vr-maxZoom="3">
</marvify-model-viewer>
```

Dessa värden är relativa till modellstorleken och bör testas med ett riktigt headset för att säkerställa komfort.

## 5. Testa VR under utveckling

VR-justering bör alltid valideras med riktig hårdvara. Skrivbordsförhandsvisningar och emulatorer är användbara för utveckling, men kan inte fullt ut representera komfort och interaktion i immersivt läge.

När du testar med dina egna modeller i utvecklingsmiljöer krävs en Marvify-utvecklingstoken. Instruktioner för att skapa och använda dev-tokens finns i den tekniska dokumentationen.

## 6. Enheter och begränsningar som stöds

VR-funktionen förlitar sig på WebXR och är endast tillgänglig på webbläsare och hårdvara som stöds. Typiska konfigurationer som stöds inkluderar:

- Fristående VR-headset med en WebXR-kompatibel webbläsare
- Skrivbordswebbläsare med ansluten VR-hårdvara

Att aktivera VR tvingar inte VR-användning. Besökare utan kompatibla enheter får fortfarande den standard 3D-visarupplevelsen.

## 7. Rekommenderat arbetsflöde

En typisk VR-installationsprocess ser ut så här:

- Bädda in Marvify-visaren normalt på din sida
- Aktivera VR med `enable-vr`
- Testa standard VR-positioneringen
- Justera avstånd, höjd och zoomgränser per modell
- Validera komfort innan publicering

Det finns ingen enskild korrekt konfiguration. Varje produkt drar nytta av individuell justering för att säkerställa en tydlig och bekväm VR-upplevelse.
