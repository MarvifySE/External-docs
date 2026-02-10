---
id: pos-kiosk-integration
title: How to add FOTO-3D to POS systems
sidebar_label: POS & Kiosk Integration
---

# How to add FOTO-3D to POS systems

This guide shows how to enable the Marvify FOTO-3D Viewer directly inside POS (Point of Sale) kiosks and self-service systems.

**In this guide we use Odoo POS Self-Order as the example platform**, but the integration approach applies to any JavaScript-capable POS system. With a simple setup, your products gain an interactive 3D viewer that drives engagement and helps customers explore items in detail.

## Example: Marvify FOTO-3D inside a POS kiosk

<!-- <video src="pics/odoo_demo.webm" autoplay muted loop playsinline controls style={{maxWidth: '100%', maxHeight: '500px'}}>
Your browser does not support the video tag.
</video> -->

:::info Video Placeholder
*Add video: odoo_demo.webm - The viewer opens in a responsive, touch-friendly overlay that feels native to the kiosk*
:::

---

Installation only takes a moment. Once activated, the viewer blends seamlessly into the Self-Order experience—no custom development required.

## 1. Download and Install the module (Odoo)

Download the latest version from GitHub: [https://github.com/MarvifySE/odoo/releases](https://github.com/MarvifySE/odoo/releases)

Add the module to your Odoo `addons` folder:

```
odoo/addons/pos_marvify
```

Then install **POS Marvify Photo-3D Viewer** from the Odoo Apps menu.

<!-- ![Odoo apps](pics/odoo_apps.png) -->

:::info Image Placeholder
*Add screenshot: odoo_apps.png - Install the addon from the Odoo Apps menu*
:::

**Requirements:**
- Odoo 18.5+
- `pos_self_order` and `product`

## 2. Add a model ID to your products

To enable 3D viewing:

- Open a product variant
- Go to the **Point of Sale** tab
- Enter your **Marvify Model ID**

<!-- ![Odoo product](pics/odoo_product.png) -->

:::info Image Placeholder
*Add screenshot: odoo_product.png - Add a model ID to your product*
:::

As soon as a model ID is added, the product tile automatically shows the 3D viewer button.

## 3. Optional: Developer token

For testing, you may set a **Marvify Developer Token** under:
*Settings → General Settings → Marvify Integration Settings*.

## 4. How it works in the kiosk

- A play-button overlay appears on products with a model ID.
- Tapping it opens the Marvify FOTO-3D viewer in a smooth, full-screen overlay.
- The viewer closes by tapping ×, tapping outside, or when the kiosk times out.

<!-- ![Odoo POS kiosk](pics/odoo_pos.png) -->

:::info Image Placeholder
*Add screenshot: odoo_pos.png - Odoo POS kiosk*
:::

<!-- ![3D viewer overlay](pics/odoo_viewer.png) -->

:::info Image Placeholder
*Add screenshot: odoo_viewer.png - Marvify FOTO-3D viewer*
:::

## Integrating Marvify FOTO-3D with other POS systems

Although this module is built for Odoo using Python, XML, and JavaScript, the Marvify viewer itself is entirely JavaScript-based—just like the standalone webpage examples in our documentation.

This means **any POS system capable of running JavaScript can integrate Marvify FOTO-3D** with ease.

- No Odoo-specific components required
- No backend dependencies
- Simply load the Marvify script and drop the custom element into your UI

Whether your checkout runs on Odoo, a custom kiosk, React, Vue, Flutter Web, or a proprietary POS stack—**if it supports JavaScript, it can support Marvify**.
