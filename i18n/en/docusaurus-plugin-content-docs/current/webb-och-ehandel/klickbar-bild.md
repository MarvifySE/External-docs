---
id: klickbar-bild
title: Clickable image
sidebar_label: Clickable image
---
# Clickable product image

You can make an image clickable so that it opens a FOTO-3D© viewer in a new window or tab. This can be used in both emails and regular web pages. Clickable images are useful when you want the user to intuitively click on a product to see it in 3D, without using extra text or buttons.


---

## Example

```html
<a href="https://v.marvify.io/?m=<modell-id>" target="_blank">
  <img src="https://your-domain.com/images/product.jpg" alt="See the product in 3D!" style="display:block; max-width:600px; width:100%;" />
</a>
```

---

## What does `target="_blank"` do?

The `target="_blank"` attribute tells the browser to open the link in a **new tab or window**, instead of replacing the current content.

**Advantages:**  
- The user keeps the current page open.  
- Recommended for external content like FOTO-3D© viewers.

**Without `target="_blank"`:**  
The link opens in the **same window**, which replaces the current page – something that can result in a poorer user experience in certain contexts, such as newsletters or articles.

---

## What does `style` do?

The `style` attribute contains CSS rules that control how the image is displayed. In the example above, it’s used to:

```css
display: block;        /* Removes line break under the image */
max-width: 600px;      /* Limits the image size on large screens */
width: 100%;           /* Makes the image responsive (adapts to the container) */
```

### You can also add more styles, for example:

```css
border: 2px solid #ddd;           /* Light border around the image */
border-radius: 8px;               /* Rounded corners */
box-shadow: 0 2px 10px rgba(0,0,0,0.15);  /* Shadow behind the image */
```

**Example:**

```html
<img src="..." style="width:100%; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,0.15);" />
```

---

## Use cases

- **Email campaigns:** A product image in a newsletter that links to the 3D viewer.  
- **Blog articles or guides:** Clickable images in body text.  
- **Product galleries or catalogs:** Images that link directly to the 3D viewer instead of using a separate button.

---

## Accessibility

Always use `alt` text that describes the image and what happens when clicked.  
Example: `"View our snack bag in 3D"` or `"3D viewer for chocolate box"`

---

## Compatibility

- Clickable images work in all modern web browsers.  
- In email, they work in most major clients (Gmail, Outlook, Apple Mail), but some block images until the user approves them.  
- It’s a good idea to add a **text link as a backup** below the image in email campaigns.

---

*More info:*

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)  
- [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)  
- [Image as a link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#images-as-links)  
- [target attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attr-target)  
- [style attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/style)


