---
id: pos-kiosk-integration
title: How to add Marvify 3D to POS systems
sidebar_label: POS & Kiosk Integration
---

# How to add Marvify 3D to POS systems

This guide shows how to enable the Marvify 3D viewer directly inside POS (Point of Sale) kiosks and self-service systems.

**In this guide we use Odoo POS Self-Order as the example platform**, but the integration approach applies to any JavaScript-capable POS system. With a simple setup, your products gain an interactive 3D viewer that drives engagement and helps customers explore items in detail.

## Example: Marvify 3D inside a POS kiosk

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
      type="video/mp4"
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

Installation only takes a moment. Once activated, the viewer blends seamlessly into the Self-Order experience with no custom development required for Odoo.

## How it works in the kiosk

- A play-button overlay appears on products that have a model ID assigned.
- Tapping it opens the Marvify 3D viewer in a smooth, full-screen overlay.
- The viewer closes by tapping ×, tapping outside, or when the kiosk times out.

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
      alt="Odoo POS kiosk product tile with 3D button"
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
      Odoo POS kiosk
    </em>
  </div>

  <div style={{ width: '35%', textAlign: 'center' }}>
    <img
      src={require('@site/static/img/odoo_fashion_viewer.webp').default}
      alt="Marvify 3D viewer open in Odoo kiosk"
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

## 1. Download and install the module (Odoo)

**Requirements:**
- Odoo 18.5+
- `pos_self_order` and `product`

Download the latest version from GitHub: [https://github.com/MarvifySE/odoo/releases](https://github.com/MarvifySE/odoo/releases)

Add the module to your Odoo `addons` folder:

```
odoo/addons/pos_marvify
```

Then install **POS Marvify Photo-3D Viewer** from the Odoo Apps menu.

<p align="center">
  <img
    src={require('@site/static/img/odoo_apps.webp').default}
    alt="POS Marvify module in the Odoo Apps menu"
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

## 2. Add a model ID to your products

To enable 3D viewing:

- Open a product variant
- Go to the **Point of Sale** tab
- Enter your **Marvify Model ID**

<p align="center">
  <img
    src={require('@site/static/img/odoo_product_page.webp').default}
    alt="Marvify Model ID field in the Odoo product configuration"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Add a model ID to your product
  </em>
</p>

As soon as a model ID is added, the product tile automatically shows the 3D viewer button.

## 3. Optional: Developer token

For testing with your own provisioned models outside of production, you can set a **Marvify Developer Token** under *Settings → General Settings → Marvify Integration Settings*. See [Development token](../snabbstart/marvify-viewer.md#dev-token-for-development) for details on what the token does and how to obtain it.

## Integrating Marvify 3D with other POS systems

Although this module is built for Odoo using Python, XML, and JavaScript, the Marvify viewer itself is entirely JavaScript-based, just like the standalone webpage examples in our documentation.

This means **any POS system capable of running JavaScript can integrate Marvify 3D** with ease.

- No Odoo-specific components required
- No backend dependencies
- Simply load the Marvify script and drop the custom element into your UI

Whether your checkout runs on Odoo, a custom kiosk, React, Vue, Flutter Web, or a proprietary POS stack: **if it supports JavaScript, it can support Marvify**. See the [Marvify Viewer guide](../snabbstart/marvify-viewer.md) for the full technical reference.
