---
id: pos-kiosk-integration
title: Hur du lägger till FOTO-3D i kassasystem
sidebar_label: Kassasystem & Kiosker
---

# Hur du lägger till FOTO-3D i kassasystem

Den här guiden visar hur du aktiverar Marvify FOTO-3D Viewer direkt i POS-kiosker (Point of Sale) och självbetjäningssystem.

**I den här guiden använder vi Odoo POS Self-Order som exempelplattform**, men integrationstillvägagångssättet gäller för alla JavaScript-kompatibla kassasystem. Med en enkel konfiguration får dina produkter en interaktiv 3D-visare som driver engagemang och hjälper kunder att utforska artiklar i detalj.

## Exempel: Marvify FOTO-3D i en POS-kiosk

<p align="center">
  <video
    width="100%"
    autoPlay
    loop
    muted
    playsInline
    style={{ maxHeight: '500px' }}
  >
    <source
      src={require('@site/static/img/kiosk_optimized.mp4').default}
      type="video/webm"
    />
  </video>
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Odoo demo
  </em>
</p>

---

Installationen tar bara ett ögonblick. När den är aktiverad smälter visaren sömlöst in i självbetjäningsupplevelsen—ingen anpassad utveckling krävs.

## 1. Ladda ner och installera modulen (Odoo)

Ladda ner den senaste versionen från GitHub: [https://github.com/MarvifySE/odoo/releases](https://github.com/MarvifySE/odoo/releases)

Lägg till modulen i din Odoo `addons`-mapp:

```
odoo/addons/pos_marvify
```

Installera sedan **POS Marvify Photo-3D Viewer** från Odoo Apps-menyn.

<p align="center">
  <img
    src={require('@site/static/img/odoo_apps.webp').default}
    alt="Odoo apps"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Odoo apps
  </em>
</p>

**Krav:**
- Odoo 18.5+
- `pos_self_order` och `product`

## 2. Lägg till ett modell-ID till dina produkter

För att aktivera 3D-visning:

- Öppna en produktvariant
- Gå till fliken **Point of Sale**
- Ange ditt **Marvify Model ID**

<p align="center">
  <img
    src={require('@site/static/img/odoo_product_page.webp').default}
    alt="Odoo apps"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Lägg till ett modell-ID till din produkt
  </em>
</p>

Så snart ett modell-ID läggs till visar produktrutan automatiskt 3D-visarknappen.

## 3. Valfritt: Developer token

För testning kan du ställa in en **Marvify Developer Token** under:
*Inställningar → Allmänna inställningar → Marvify-integrationsinställningar*.

## 4. Hur det fungerar i kiosken

- Ett uppspelningsknapp-överlägg visas på produkter med ett modell-ID.
- Att trycka på den öppnar Marvify FOTO-3D-visaren i ett smidigt helskärmsöverlägg.
- Visaren stängs genom att trycka på ×, trycka utanför eller när kiosken går i timeout.

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2rem',
    flexWrap: 'wrap'
  }}
>
  <div style={{ width: '35%', textAlign: 'center' }}>
    <img
      src={require('@site/static/img/odoo_fashion_options.webp').default}
      alt="Odoo POS-kiosk"
      style={{ width: '100%' }}
    />
    <em
      style={{
        display: 'block',
        marginTop: '0.5rem',
        fontSize: '0.9rem',
        color: '#666'
      }}
    >
      Odoo POS-kiosk
    </em>
  </div>

  <div style={{ width: '35%', textAlign: 'center' }}>
    <img
      src={require('@site/static/img/odoo_fashion_viewer.webp').default}
      alt="Odoo viewer"
      style={{ width: '100%' }}
    />
    <em
      style={{
        display: 'block',
        marginTop: '0.5rem',
        fontSize: '0.9rem',
        color: '#666'
      }}
    >
      Odoo viewer
    </em>
  </div>
</div>


## Integrera Marvify FOTO-3D med andra kassasystem

Även om den här modulen är byggd för Odoo med Python, XML och JavaScript, är Marvify-visaren själv helt JavaScript-baserad—precis som de fristående webbsidesexemplen i vår dokumentation.

Detta innebär att **alla kassasystem som kan köra JavaScript kan integrera Marvify FOTO-3D** med lätthet.

- Inga Odoo-specifika komponenter krävs
- Inga backend-beroenden
- Ladda helt enkelt Marvify-skriptet och lägg till det anpassade elementet i ditt UI

Oavsett om din kassa körs på Odoo, en anpassad kiosk, React, Vue, Flutter Web eller en proprietär POS-stack—**om den stöder JavaScript kan den stödja Marvify**.
