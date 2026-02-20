---
id: shopify
title: How to add Marvify 3D to a Shopify store
sidebar_label: Shopify Integration
---

# How to add Marvify 3D to a Shopify store

This guide walks through how to embed the Marvify 3D viewer into a Shopify storefront. It follows the same standard integration described in the [Marvify Viewer](../snabbstart/marvify-viewer.md) documentation, adapted to fit the workflow of the **Horizon** theme. Any other web hosting solution that lets you edit the HTML of your site can achieve the same result using those same steps. The example here replaces the product image on a product page with an interactive 3D model. Note that depending on which Shopify theme you use, some steps and file names may look slightly different.

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
      src={require('@site/static/img/shoppify_product.mp4').default}
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
</p>

---

This article covers a complete end-to-end example. For deeper technical documentation on the viewer component and its available attributes, see [Marvify Viewer](../snabbstart/marvify-viewer.md).

While this example focuses on replacing a product image with the 3D viewer, that is just one of countless ways you can put it to work. The viewer is a standard JavaScript component that lives directly in your HTML, so wherever your platform lets you write markup, you can bring your products to life in 3D. The integration you build is limited only by what your hosting environment allows.

## Before you start

- You need access to a Shopify store with permission to edit theme code.
- You need a Marvify model that has been provisioned for your account. If you want to test the setup first, you can use `model-id="demo"` on a page served from `localhost`.
- If you are testing with your own provisioned models outside of production, add a [development token](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) to your script tag. Remember to remove it before going live.

---

## 1. Open the code editor

In your Shopify admin, go to **Online Store → Themes**. Make sure you are on the theme that is currently published to your live store. Click the **three-dot menu (⋯)** next to it and select **Edit code**.

<p align="center">
  <img src={require('@site/static/img/shopify_2.webp').default} alt="Edit code option in Shopify theme menu" style={{ maxWidth: '600px', display: 'block' }} />
</p>

This opens the Shopify code editor where you can browse and modify all the Liquid template files that make up your theme.

> **Tip:** Code changes in the Shopify code editor save and take effect immediately on whichever theme you are editing. If you want to test your changes before they affect your live store, consider duplicating your theme first and working on the duplicate. You can publish the duplicate once you have confirmed everything is working.

---

## 2. Add the viewer script to theme.liquid

In the file tree on the left side, expand the **Layout** folder and open **theme.liquid**. This is the main layout file that wraps every page in your store, so any script loaded here is available across the entire site.

<p align="center">
  <img src={require('@site/static/img/shopify_3.webp').default} alt="theme.liquid file open in the Shopify code editor" style={{ maxWidth: '700px', display: 'block' }} />
</p>

Find the closing `</head>` tag and add the Marvify script just before it. In this example, the script is only loaded on the specific product page where the viewer is used:

```liquid
{% if request.page_type == 'product' and product and product.handle == 'stylish-bag' %}
  <script src="https://js.marvify.io/marvify.js" type="module"></script>
{% endif %}
```

<p align="center">
  <img src={require('@site/static/img/shopify_4.webp').default} alt="Marvify script tag added before the closing head tag in theme.liquid" style={{ maxWidth: '700px', display: 'block' }} />
</p>

The conditional here is intentional. It prevents the viewer JavaScript from being loaded on pages where it is not needed, which keeps your store fast for visitors browsing other pages.

> **Loading the viewer on all product pages**
>
> If you want the viewer available on every product page rather than a single product, use the broader condition instead:
> ```liquid
> {% if request.page_type == 'product' %}
>   <script src="https://js.marvify.io/marvify.js" type="module"></script>
> {% endif %}
> ```

---

## 3. Insert the viewer into the product media template

The product image on most Shopify themes is rendered by a snippet rather than directly in the product page template. In the Horizon theme this file is **snippets/product-media-gallery-content.liquid**. Open it from the **Snippets** folder in the file tree.

<p align="center">
  <img src={require('@site/static/img/shopify_5.webp').default} alt="product-media-gallery-content.liquid open showing where the viewer is inserted" style={{ maxWidth: '875px', display: 'block' }} />
</p>

Inside the file you will find a section that handles what gets shown when a product page loads. Find the part of the code that displays the product images and add the following block just before it, wrapped in a product handle check. This tells Shopify to show the Marvify 3D viewer for that specific product, and fall back to the normal image gallery for everything else:

```liquid
{% if selected_product and selected_product.handle == 'stylish-bag' %}
  <div class="product-media-container product-media-container--model" {{ block_shopify_attributes }}>
    <div class="product-media" style="width: 100%; height: 520px;">
      <marvify-model-viewer
        model-id="demo"
        width="100%"
        height="520px"
        bgColor="#ffffff"
        initialCameraAngle="45 -20"
        autoplay
      ></marvify-model-viewer>
    </div>
  </div>
{% else %}
  <media-gallery
    ...
  </media-gallery>
{% endif %}
```

Replace `stylish-bag` with your own product's handle, and `demo` with your own model ID from your Marvify account. The `{% else %}` part at the end keeps the original image gallery in place for every other product, so nothing else in your store is affected.

You should also tune the viewer attributes to make the model look the way you want, adjusting the camera angle, background color, zoom limits and so on. See [Custom attributes](../snabbstart/marvify-viewer.md#custom-attributes) for a full reference.

### Viewer attributes used in this example

| Attribute             | Value        | Effect |
| --------------------- | ------------ | ------ |
| `model-id`            | `demo` | Identifies which 3D model to load from Marvify. |
| `width`               | `100%`       | Fills the width of the product media column. |
| `height`              | `520px`      | Sets the viewer to a fixed height matching the surrounding layout. |
| `bgColor`             | `#ffffff`    | Uses a white background to blend with the theme. |
| `initialCameraAngle`  | `45 -20`     | Sets the starting camera to a 45° horizontal rotation with a slight downward tilt. |
| `autoplay`            | *(present)*  | Loads the model immediately when the page opens, without waiting for a click. |

For a full list of available attributes see [Custom attributes](../snabbstart/marvify-viewer.md#custom-attributes).

---

## 4. Save and preview

Save both files. Navigate to the product page in your storefront and the 3D viewer should now appear in place of the product image. You can rotate, zoom and inspect the model directly on the page.

If the model does not load, double-check that:
- The product handle in the Liquid conditions matches exactly.
- The `model-id` value matches the identifier assigned to your model in Marvify.
- The script tag in `theme.liquid` is being loaded on the correct page type.
- You are using a [development token](../snabbstart/marvify-viewer.md#dev-token-for-utveckling-start) if testing with a provisioned model outside of its registered production domain.

---

This example targets a single product and replaces its image entirely with the 3D viewer. You can adapt the same pattern to show the viewer alongside images, trigger it from a button, or apply it to a whole product category. The underlying approach of conditionally rendering `<marvify-model-viewer>` inside your Liquid templates remains the same.
