---
id: email-marketing-med-rule
title: How to use FOTO-3D in email marketing
sidebar_label: Email Marketing
---

# How to use FOTO-3D in email marketing

This guide explains how you can integrate Marvify FOTO-3D into email marketing regardless of which platform you use. Most email services work similarly when linking out to external experiences.

**In this guide we use Rule as the example platform**, but the same approach applies to other tools such as Mailchimp, Klaviyo, Drip and similar services.

Email clients do not support embedded 3D or scripts, so the viewer itself is typically opened on a page on your website. Emails can instead highlight the product visually and link subscribers to the full 3D experience in whichever format fits your communication style.

If your Marvify viewer is not yet set up on your website you can refer to the technical documentation and sample setup guide.

- [Technical documentation](https://docs.marvify.io/en/snabbstart/marvify-viewer/)
- [Sample setup guide](/en/exempel/webpage-integration)

## 1. Copy the link to your Marvify 3D experience

Open the online page where your Marvify viewer is available. This can be a product page, a campaign page or any location where you have embedded the viewer. Copy the full URL from your browser. This URL will be used as the destination link inside your Rule template.

## 2. Open Rule and create or edit an email template

<p align="center">
  <img
    src={require('@site/static/img/campaign-interface.webp').default}
    alt="Standard campaign editor in Rule"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Campaign editor in Rule
  </em>
</p>

Log in to Rule and open the campaign editor. You can create a new mailing or update an existing template. Inside the editor you can choose where in your layout you want to highlight your 3D content.

Emails cannot display interactive 3D directly, so the content you add in Rule will link subscribers to your webpage where the viewer is running.

### Adding subscribers in Rule

Before sending your campaign you will choose which subscribers should receive it. In Rule you can add subscribers by importing a CSV file, manually adding individuals, or syncing from supported integrations. After your template is ready you select one or more subscriber lists when scheduling or sending the campaign.

## 3. Add an image, GIF or button that links to your 3D viewer

There are several ways to present the product visually inside an email, for example:

- A still product photo that links to the 3D experience
- An animated GIF showing the rotation or interaction
- A clear call to action button

To add a link in Rule:

- Select the block in the email editor
- Paste your Marvify viewer URL into the link field
- Choose whether the link should open in a new tab

<p align="center">
  <img
    src={require('@site/static/img/rule-linking-interface.webp').default}
    alt="Change link"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Add a link
  </em>
</p>

## 4. Using an animated GIF to preview the 3D experience

<p align="center">
  <video
    width="90%"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src={require('@site/static/img/email-preview.webm').default}
      type="video/webm"
    />
    Example of a rotating view of the 3D object
  </video>
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    E-mail preview
  </em>
</p>

A small animated element can help indicate that a 3D experience awaits after the click. One option is a short rotating GIF generated from your Marvify model, but other visual cues can also work depending on your design. Any animation can be uploaded to Rule as a standard image block and linked to your viewer page.

:::tip Pro-Tip
Some versions of desktop Outlook (2007-2016) do not support GIF animations and will only show the **first frame**. Ensure your GIF's first frame looks great as a static image!
:::

## 5. Add a call to action button if you want extra clarity

<p align="center">
  <img
    src={require('@site/static/img/cta.webp').default}
    alt="Example CTA button"
  />
  <br />
  <em style={{ fontSize: '0.9rem', color: '#666' }}>
    Example CTA button
  </em>
</p>

A call to action button makes the purpose of the link more visible. Common examples include:

- "View in 3D"
- "Explore the product"
- "Rotate the item"

In Rule you can drag a Button block into your layout and paste your Marvify viewer link into the button's URL field.

## 6. Test your email before sending

Since email clients behave differently it can be useful to send yourself a test email from Rule. This lets you verify that:

- All links work correctly
- Animated GIFs display as expected
- The layout scales properly on mobile devices

## 7. Send or schedule your campaign

When your email is ready you can choose your subscriber lists and either send the campaign immediately or schedule it for later. Anyone who clicks your images or buttons will be taken to your webpage where they can explore the product in 3D.

This approach lets you introduce interactive 3D into your email marketing without requiring any special email client support.

---

*The Rule interface may change over time, but the general workflow of linking to your Marvify experience remains the same. For the most accurate information about Rule updates you can visit: [Rule knowledge base](https://www.rule.se/support).*

---

## Option: Custom HTML Email Development

While visual builders are standard, most platforms also support the use of custom-coded HTML. This is an option for brands requiring specific layout control or integration into existing development workflows.

- **Table-Based Layouts:** To ensure consistent rendering across legacy clients like Outlook, `<table>` structures are used rather than modern `<div>` tags.
- **Inline CSS:** Styling should be applied directly to HTML tags (inline) to prevent email clients from stripping out header-based stylesheets.
- **Asset Management:** For custom templates, images and GIFs are typically hosted on your own public server or a hosting service of your choice, and referenced using absolute URLs.

### Basic Code Example

Below is a simplified structure for a 3D product link using an image and a button:

```html
<!-- Main Container Table -->
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
  <tr>
    <td align="center" style="padding: 20px;">
      <!-- Product Image Link -->
      <a href="https://yourwebsite.com/product-page" target="_blank">
        <img src="https://yourserver.com/product-preview.gif" width="300" alt="View in 3D" style="display: block; border: 0;" />
      </a>
      <br />
      <!-- CTA Button -->
      <table role="presentation" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <td bgcolor="#007aff" style="border-radius: 4px; padding: 12px 24px;">
            <a href="https://yourwebsite.com/product-page" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold; display: inline-block;">
              Explore in 3D
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
```

### Deliverability and Spam Awareness

When developing custom campaigns, maintaining a balanced ratio of text to images helps ensure high deliverability. Additionally, verifying your domain's SPF/DKIM records and including a clear unsubscribe link are standard practices to maintain a professional sender reputation.
