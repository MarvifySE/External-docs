---
id: woocommerce
title: How to add Marvify 3D to a WooCommerce store
sidebar_label: WooCommerce Integration
---

# How to add Marvify 3D to a WooCommerce store

This guide walks through how to embed the Marvify 3D viewer into a WooCommerce store. WooCommerce is a plugin that adds e-commerce functionality to a WordPress site, so the underlying platform here is WordPress. The example uses **Storefront**, WooCommerce's own official theme, and shows how to replace the product image on a product page with an interactive 3D model.

It follows the same standard integration described in the [Marvify Viewer](../snabbstart/marvify-viewer.md) documentation, adapted to fit the WordPress and WooCommerce way of working. Any other web hosting solution that lets you edit the HTML of your site can achieve the same result with similar steps. Note that depending on your hosting environment, WordPress version, and active plugins, some details may look slightly different. This guide is based on a self-hosted WordPress installation. If you are on a managed host, file access may be through SFTP or a control panel file manager rather than the Theme File Editor.

<p align="center">
  <video
    width="80%"
    autoPlay
    loop
    muted
    playsInline
    style={{ display: 'block' }}
  >
    <source
      src={require('@site/static/img/woocommerce-final.web.mp4').default}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</p>

---

This article covers a complete end-to-end example. For deeper technical documentation on the viewer component and its available attributes, see [Marvify Viewer](../snabbstart/marvify-viewer.md).

While this example focuses on replacing a product image with the 3D viewer, that is just one of countless ways you can put it to work. The viewer is a standard JavaScript component that lives directly in your HTML, so wherever your platform lets you write markup, you can bring your products to life in 3D. The integration you build is limited only by what your hosting environment allows.

## Before you start

- You need a WordPress site with the WooCommerce plugin installed and a product set up.
- You need a **child theme** of Storefront created and active. Editing a parent theme directly means your changes will be lost the next time the theme updates. If you have not set one up yet, refer to the [WordPress child theme documentation](https://developer.wordpress.org/themes/advanced-topics/child-themes/) before continuing.
- You need access to edit your child theme's files. This can be done through **Appearance → Theme File Editor** in the WordPress admin, or via FTP or a file manager through your hosting provider.
- You need a Marvify model provisioned for your account. If you want to test the setup first, you can use `model-id="demo"` on a page served from `localhost`.
- If you are testing with your own provisioned models outside of production, add a [development token](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) to your script tag. Remember to remove it before going live.

<p align="center">
  <img src={require('@site/static/img/woo3-child.webp').default} alt="Appearance → Themes showing Storefront Child as the active theme" style={{ maxWidth: '700px', display: 'block' }} />
</p>
<p align="center"><em>Appearance → Themes with Storefront Child set as the active theme.</em></p>

---

## Common locations for things in this guide

Depending on your setup, these may be in different places:

- **functions.php**: Appearance → Theme File Editor (make sure your theme is selected in the dropdown on the right), via FTP or SFTP, or your hosting provider's file manager. If you prefer not to touch theme files at all, a plugin like Code Snippets or WPCode lets you add PHP snippets directly from the WordPress admin.
- **Active theme**: Appearance → Themes
- **Product slug:** Products → Edit product, shown in the Permalink line just below the product title

---

## 1. Open your child theme's functions.php

In your WordPress admin, go to **Appearance → Theme File Editor**. In the file list on the right, make sure your child theme is selected, then open **functions.php**.

<p align="center">
  <a href={require('@site/static/img/woo2-functions-php.webp').default} target="_blank" rel="noopener noreferrer">
    <img
      src={require('@site/static/img/woo2-functions-php.webp').default}
      alt="Theme File Editor open showing functions.php with the complete Marvify integration code"
      style={{ maxWidth: '420px', display: 'block' }}
    />
  </a>
</p>
<p align="center"><em>Appearance → Theme File Editor with functions.php open. Click to view full size.</em></p>

This file is where WordPress themes register their behavior. It is the right place to add both the viewer script and the product page logic, and changes here will not be lost when Storefront updates.

> **Note:** Getting this working involves a few more moving pieces than some other platforms. You need a WordPress and WooCommerce installation, a child theme created and activated, and custom PHP added to `functions.php`. The code shown in this guide is one approach. WordPress is a flexible platform and the same result can be reached through different hook patterns, plugins, or page builders depending on your setup.

> **Tip:** If the Theme File Editor is not visible in your admin menu, it may have been disabled by a plugin or your hosting provider for security reasons. In that case, access `functions.php` through FTP or your hosting control panel's file manager instead.

---

## 2. Load the viewer script on product pages

Add the following snippet to the bottom of your child theme's `functions.php`. This uses the `wp_head` hook to output the Marvify script tag into the page's `<head>` section, but only when WordPress detects that a single product page is being viewed.

```php
add_action('wp_head', function() {
    if (is_product()) {
        echo '<script src="https://js.marvify.io/marvify.js" type="module"></script>';
    }
});
```

The `is_product()` check is a WooCommerce function that returns true only on single product pages, so the viewer script is never loaded on your homepage, blog posts, or other pages where it is not needed. This keeps your site fast for visitors who are not viewing products.

> **Loading the viewer on all pages**
>
> If you prefer to load the script globally rather than conditionally, you can remove the `is_product()` check and just call the echo directly. This is simpler but adds a small overhead to every page load.

---

## 3. Replace the product image with the viewer

Still in `functions.php`, add a second snippet below the first. This hooks into WooCommerce's product page output, removes the default product image gallery for a specific product, and replaces it with the Marvify viewer.

```php
add_action('woocommerce_before_single_product_summary', function() {
    global $product;

    if (!$product || $product->get_slug() !== 'your-product-slug') {
        return;
    }

    remove_action('woocommerce_before_single_product_summary', 'woocommerce_show_product_images', 20);

    echo '
    <div class="woocommerce-product-gallery">
        <marvify-model-viewer
            model-id="demo"
            width="100%"
            height="520px"
            bgColor="#ffffff"
            initialCameraAngle="45 -20"
            autoplay
        ></marvify-model-viewer>
    </div>';

}, 15);
```

Replace `your-product-slug` with the URL slug of your actual product. You can find a product's slug in the WordPress admin under **Products → Edit product**, visible in the **Permalink** line just below the product title.

<p align="center">
  <img src={require('@site/static/img/woo1-product-edit-screen.webp').default} alt="WooCommerce product edit screen showing the Stylish Bag product with its permalink slug visible" style={{ maxWidth: '700px', display: 'block' }} />
</p>

Replace `demo` with your own model ID from your Marvify account.

The function runs at priority `15`, just before WooCommerce's own product image output at priority `20`. This timing is what allows it to cleanly remove the default gallery for that product before it ever renders. All other products are left untouched, as the early `return` ensures the code only acts on the product you specify.

You should also tune the viewer attributes to make the model look the way you want, adjusting the camera angle, background color, zoom limits and so on. See [Custom attributes](../snabbstart/marvify-viewer.md#custom-attributes) for a full reference.

### Viewer attributes used in this example

| Attribute             | Value   | Effect |
| --------------------- | ------- | ------ |
| `model-id`            | `demo`  | Identifies which 3D model to load from Marvify. |
| `width`               | `100%`  | Fills the width of the product media area. |
| `height`              | `520px` | Sets the viewer to a fixed height matching the surrounding layout. |
| `bgColor`             | `#ffffff` | Uses a white background to blend with the theme. |
| `initialCameraAngle`  | `45 -20` | Sets the starting camera to a 45° horizontal rotation with a slight downward tilt. |
| `autoplay`            | *(present)* | Loads the model immediately when the page opens, without waiting for a click. |

For a full list of available attributes see [Custom attributes](../snabbstart/marvify-viewer.md#custom-attributes).

---

## 4. Save and preview

Save your `functions.php` file and navigate to the product page in your store. The 3D viewer should now appear in place of the product image.

If the model does not load, double-check that:
- The product slug in the function matches your product's permalink slug exactly.
- The `model-id` value matches the identifier assigned to your model in Marvify.
- Your child theme is the active theme in **Appearance → Themes**.
- You are using a [development token](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) if testing with a provisioned model outside of its registered production domain.

---

This example targets a single product and replaces its image entirely with the 3D viewer. You can adapt the same pattern to apply the viewer to all products, specific product categories, or trigger it from a button elsewhere on the page. The core approach of hooking into WordPress and WooCommerce's output system and conditionally rendering `<marvify-model-viewer>` remains the same.
