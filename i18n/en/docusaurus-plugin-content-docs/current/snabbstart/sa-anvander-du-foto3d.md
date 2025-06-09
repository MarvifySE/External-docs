---
id: sa-anvander-du-foto3d
title: Quick-start
sidebar_label: Quick-start
---
# Quick-Start

### What is Marvify FOTO-3D<sup>©</sup>?

Marvify offers an interactive viewer that lets you showcase your FOTO-3D<sup>©</sup> products digitally — in an engaging and flexible way.  
With a simple link, your customers can rotate, zoom, and explore the product in detail, directly in their browser.  
It works just as well on product and campaign pages as it does in ads, blogs, social media, and e-commerce platforms.


***

### How to Edit HTML

Some of the examples in this guide require you to insert a link or an HTML element on your website or e-commerce platform.  
If you're unsure how to do that, click here for an introduction: [w3schools](https://www.w3schools.com/html/default.asp)

*For more detailed instructions, see the menu on the left.*


***

### Website
#### *Here are some examples of how to use it:*

***

#### "We want to link to our FOTO-3D<sup>©</sup> chip bag on the website"

**Solution – text link on a webpage or in an article:**

```html
<a href="https://v.marvify.io/?m=MODEL-ID" target="_blank">View the bag in 3D</a>
```

***

*More info:*

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [`target="_blank"`](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/a#target)

***

#### "We want to add a stylish button to the product page for our FOTO-3D<sup>©</sup> Pizza!"

**Solution – link styled as a button:**

```html
<a href="https://v.marvify.io/?m=MODEL-ID" class="button" target="_blank">View in 3D</a>
```
You can use your website or e-commerce platform to style the link as a button so it blends seamlessly with your design.

***

*More info:*

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [CSS-Classes for buttons](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_links)


***

#### "Can someone click the image of the licorice on my website to open FOTO-3D<sup>©</sup>?"

**Solution – clickable image with link:**

```html
<a href="https://v.marvify.io/?m=MODEL-ID" target="_blank">
  <img src="lakritsbild.jpg" alt="View licorice in 3D" />
</a>
```

***

*More info:*

- [`<a>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
- [`<img>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)
- [Link image](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#images-as-links)


***

#### "We want to show our FOTO-3D<sup>©</sup> energy bars in a popup instead of a new tab!"

**Solution – open the viewer in a popup window:**

You can use either a **button** or a **link** to open the popup.

Example using a button:

```html
<button onclick="openFoto3D()">See the product in 3D!</button>
```

Example using a link:

```html
<a href="#" onclick="openFoto3D()">Open 3D View</a>
```

Javascript:

```js
<script>
function openFoto3D() {
  window.open("https://v.marvify.io/?m=MODEL-ID", "_blank", "width=800,height=600");
}
</script>
```

***

*More info:*

- [`<button>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button)
- [`onclick`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onclick)
- [`window.open()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/open)


***

#### "We’re printing menus — can we use FOTO-3D<sup>©</sup>?"

**Solution – generate a QR code with your viewer link:**  
Example QR code generator: [link]

Link to use: 
`https://v.marvify.io/?m=MODEL-ID`

Suggested text:  
_Scan to view our product in 3D_

***

#### "We want to embed the viewer for our FOTO-3D<sup>©</sup> chocolates directly on our website!"

**Solution – embedding with an iframe:**

```html
<iframe src="https://v.marvify.io/?m=MODEL-ID" width="100%" height="500px" style="border:none;"></iframe>
```

***

*More info:*

- [iframe](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/iframe)


***

### Social Media

Here we show how you can use your unique Marvify link on social media to promote your products.  
You’ll get practical examples of how to share the link in regular posts, stories, and ads — whether it's through your own account, an influencer, or a brand ambassador.

***

#### Instagram

**Personal account, influencer, or ambassador**

**Solution – Link in bio:**

You can place the viewer link in the profile bio, then create a regular feed post that refers to it.  
This works whether the post comes from your own account, an influencer, or a brand ambassador.


> I totally fell in love with these cookies from @SweetCrave — and you can actually see the whole package in 3D.  
> Click the link in my bio!


**Solution – Story with Link Sticker:**

Create an Instagram Story with a product photo and use a **Link Sticker** to add a clickable link directly on the image.

* Link: `https://v.marvify.io/?m=MODEL-ID`
* Sticker text: _"View in 3D"_

***

**Business Account & Ads**

**Solution – Ad with Meta Ads Manager:**

With a business account, you can create sponsored posts in the feed or Stories using Meta Ads Manager.  
These ads can target specific audiences and include clickable links.

Example:

Text:  
Spin our new snack bag in 3D — zoom, rotate, and explore before you order.  
Link: `https://v.marvify.io/?m=MODEL-ID`
CTA button: _Learn more_

***

#### Facebook

**Personal account, influencer, or ambassador**

**Solution – Regular feed post:**

You (or someone you’re collaborating with) can create a personal feed post with a caption and a direct link to the 3D viewer.

> I tried these new peanut snacks from @CrispyCrunch — insanely good!  
> You can even spin the bag around in 3D.  
>
> `https://v.marvify.io/?m=MODEL-ID`

***

**Business Page & Ads**

**Solution – Sponsored ad or regular post:**

You can publish the link in a regular post from your business page, or create a sponsored ad that appears in your target audience’s feed.

Example:

Text:  
Give something special — spin our exclusive chocolate box in 3D.  
Link: `https://v.marvify.io/?m=MODEL-ID`<br />
CTA button: _View in 3D_

***

#### X (formerly Twitter)

**Personal account, influencer, or ambassador**

**Solution – tweet in your feed:**

You can post a regular tweet that includes the link to the viewer.  
This also works if an influencer or ambassador shares it on your behalf.

> How cool is it to spin a candy bag in 3D?  
> I’m loving this one from @SweetByte  
>
> `https://v.marvify.io/?m=MODEL-ID`

***

**Business Account & Ads**

**Solution – Promoted Tweet:**

You can create a sponsored tweet from your business account that targets a selected audience.

> Discover our limited edition nut mix — see the full package in 3D before you order.  
>
> `https://v.marvify.io/?m=MODEL-ID`

***

#### LinkedIn

**Personal account, influencer, or industry profile**

**Solution – Personal feed post:**

You or someone you’re collaborating with (e.g., an industry expert, influencer, or employee) can post a personal update with a comment and link.

> Amazing how much a 3D viewer can elevate the customer experience.  
> Here’s an example of a product I personally like — a luxurious chocolate box in 3D.  
>
> `https://v.marvify.io/?m=MODEL-ID`

***

**Business Page & Ads**

**Solution – Sponsored post or company feed update:**

You can use your company page to publish an organic post or a sponsored ad targeted at consumers or resellers.

> Want to showcase your products in a new way?  
> Here’s how our organic snack bag looks — in 3D, right in the browser.  
>
> `https://v.marvify.io/?m=MODEL-ID`

***

### E-Commerce

On platforms like WooCommerce, Shopify, Squarespace, and others, you can easily link to your FOTO-3D<sup>©</sup> viewer directly from your product pages.  
The link works in all browsers, including on mobile devices.

***

#### "We have a WooCommerce store — how do we add our FOTO-3D<sup>©</sup> of the snack bag?"

**Solution – Add a link directly in the product description:**

In WooCommerce, you can edit the product content through the WordPress admin.  
Insert a clickable text link or a button in the description field.  
This way, customers see it right when they’re reading about the product.

```html
<a href="https://v.marvify.io/?m=MODEL-ID" target="_blank">View the product in 3D</a>
```

***

#### "We use Shopify — how do we show our gummy candy in FOTO-3D<sup>©</sup>?"

**Solution – Add the link in the HTML view of the product description:**

In Shopify, go to the admin panel → Products → Edit product → Click **“Show HTML”** in the description field.  
There, you can paste the link. It will then appear on the product page below the product description.

```html
<a href="https://v.marvify.io/?m=MODEL-ID" target="_blank">Explore the product in 3D</a>
```

***

#### "We use Squarespace — can we add FOTO-3D<sup>©</sup> of our chocolate pieces?"

**Solution – Link directly in the product description using the editor:**

In Squarespace, you edit each product page through the editor.  
Add a regular link in the description field — it will appear right below the product information for the customer.

```html
<a href="https://v.marvify.io/?m=MODEL-ID" target="_blank">View the product in 3D</a>
```

***

#### "We're building with Webflow — how do we include FOTO-3D<sup>©</sup> to show the nut mix?"

**Solution – Add an external link in the product layout:**

In Webflow, use the Designer editor to insert buttons or text links.  
Set the link to your 3D viewer as an external URL. You can place it exactly where you want on the page.

`https://v.marvify.io/?m=MODEL-ID`

***

#### "Our store is built in Magento — how do we show the product in FOTO-3D<sup>©</sup> there?"

**Solution – Edit the product description in the admin panel:**

In Magento, you can add HTML directly into the product description field via the backend.  
The link will then appear alongside the rest of the product information.

```html
<a href="https://v.marvify.io/?m=MODEL-ID" target="_blank">View in 3D</a>
```

***

#### Tips

* Place the link near the buy button or product image  
* Use phrases like _“View in 3D”_, _“Explore visually”_, or _“Spin around”_  
* Consider adding a QR code to your packaging or printed materials

