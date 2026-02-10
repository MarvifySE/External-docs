---
id: pos-kiosk-integration
title: Hur du lägger till FOTO-3D i kassasystem
sidebar_label: Kassasystem & Kiosker
---

# Hur du lägger till FOTO-3D i kassasystem

Den här guiden visar hur du aktiverar Marvify FOTO-3D Viewer direkt i POS-kiosker (Point of Sale) och självbetjäningssystem.

**I den här guiden använder vi Odoo POS Self-Order som exempelplattform**, men integrationstillvägagångssättet gäller för alla JavaScript-kompatibla kassasystem. Med en enkel konfiguration får dina produkter en interaktiv 3D-visare som driver engagemang och hjälper kunder att utforska artiklar i detalj.

## Exempel: Marvify FOTO-3D i en POS-kiosk

<!-- <video src="pics/odoo_demo.webm" autoplay muted loop playsinline controls style={{maxWidth: '100%', maxHeight: '500px'}}>
Din webbläsare stöder inte video-taggen.
</video> -->

:::info Videoplatshållare
*Lägg till video: odoo_demo.webm - Visaren öppnas i ett responsivt, touchvänligt överlägg som känns inbyggt i kiosken*
:::

---

Installationen tar bara ett ögonblick. När den är aktiverad smälter visaren sömlöst in i självbetjäningsupplevelsen—ingen anpassad utveckling krävs.

## 1. Ladda ner och installera modulen (Odoo)

Ladda ner den senaste versionen från GitHub: [https://github.com/MarvifySE/odoo/releases](https://github.com/MarvifySE/odoo/releases)

Lägg till modulen i din Odoo `addons`-mapp:

```
odoo/addons/pos_marvify
```

Installera sedan **POS Marvify Photo-3D Viewer** från Odoo Apps-menyn.

<!-- ![Odoo apps](pics/odoo_apps.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: odoo_apps.png - Installera tillägget från Odoo Apps-menyn*
:::

**Krav:**
- Odoo 18.5+
- `pos_self_order` och `product`

## 2. Lägg till ett modell-ID till dina produkter

För att aktivera 3D-visning:

- Öppna en produktvariant
- Gå till fliken **Point of Sale**
- Ange ditt **Marvify Model ID**

<!-- ![Odoo product](pics/odoo_product.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: odoo_product.png - Lägg till ett modell-ID till din produkt*
:::

Så snart ett modell-ID läggs till visar produktrutan automatiskt 3D-visarknappen.

## 3. Valfritt: Developer token

För testning kan du ställa in en **Marvify Developer Token** under:
*Inställningar → Allmänna inställningar → Marvify-integrationsinställningar*.

## 4. Hur det fungerar i kiosken

- Ett uppspelningsknapp-överlägg visas på produkter med ett modell-ID.
- Att trycka på den öppnar Marvify FOTO-3D-visaren i ett smidigt helskärmsöverlägg.
- Visaren stängs genom att trycka på ×, trycka utanför eller när kiosken går i timeout.

<!-- ![Odoo POS kiosk](pics/odoo_pos.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: odoo_pos.png - Odoo POS-kiosk*
:::

<!-- ![3D viewer overlay](pics/odoo_viewer.png) -->

:::info Bildplatshållare
*Lägg till skärmbild: odoo_viewer.png - Marvify FOTO-3D-visare*
:::

## Integrera Marvify FOTO-3D med andra kassasystem

Även om den här modulen är byggd för Odoo med Python, XML och JavaScript, är Marvify-visaren själv helt JavaScript-baserad—precis som de fristående webbsidesexemplen i vår dokumentation.

Detta innebär att **alla kassasystem som kan köra JavaScript kan integrera Marvify FOTO-3D** med lätthet.

- Inga Odoo-specifika komponenter krävs
- Inga backend-beroenden
- Ladda helt enkelt Marvify-skriptet och lägg till det anpassade elementet i ditt UI

Oavsett om din kassa körs på Odoo, en anpassad kiosk, React, Vue, Flutter Web eller en proprietär POS-stack—**om den stöder JavaScript kan den stödja Marvify**.
