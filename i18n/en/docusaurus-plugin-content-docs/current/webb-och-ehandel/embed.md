---
id: embed
title: Embed
sidebar_label: Embed
---
# Embed

Embedding the **FOTO-3D viewer** is easy.

You can use a standard `<iframe>` to display the viewer directly on your website, landing page, e-commerce platform, or similar.

---

## Example – iframe

```html
<iframe
  src="https://v.marvify.io/?m=<modell-id>"
  width="100%"
  height="500"
  style="border: none;"
></iframe>
```

**Tip:**  
- You can adjust the `width` and `height` to fit your layout.

---

## Compatibility

Embedding works on any platform that allows you to use HTML and `<iframe>` in your layout. Examples:

| Platform                   | Embed Support       | Notes                                           |
| -------------------------- | ------------------- | ----------------------------------------------- |
| WordPress (self-hosted)    | ✅ Yes               | Works in the block editor or as custom HTML     |
| Webflow                    | ✅ Yes               | Add as an Embed element                         |
| Shopify                    | ✅ Yes               | In custom templates or theme editor             |
| Squarespace                | ✅ Yes               | Use the “Code” block                            |
| Wix                        | ✅ Yes               | Use the “Embed HTML” component                  |
| Vercel / Netlify / etc     | ✅ Yes               | Full control over HTML and structure            |
| WordPress.com (hosted)     | ⚠️ Limited           | Only with upgraded plans (Business+)            |

> If your platform allows HTML embedding, the viewer will work there too.


---

## Alternative – Link or popup

If you can’t embed the viewer directly (e.g., in an email or on a platform that doesn’t support iframes), you can link to it instead.

### Clickable text link

```html
<a href="https://v.marvify.io/?m=<model-id>" target="_blank" rel="noopener">
  View the product in 3D
</a>
```

### Clickable button (popup)

```html
<button onclick="window.open('https://v.marvify.io/?m=<model-id>', 'popup', 'width=800,height=600'); return false;">
  Open 3D Viewer
</button>
```

---

## Need help?

Feel free to reach out if you're unsure what works on your specific platform – we’re happy to help!

**[info@marvify.com](mailto:info@marvify.com)**

---

## More info

For those who want to learn more about `<iframe>` and how it works in browsers:

[MDN Web Docs – iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe)

