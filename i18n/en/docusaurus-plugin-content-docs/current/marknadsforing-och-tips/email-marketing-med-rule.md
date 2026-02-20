---
id: email-marketing-med-rule
title: How to use Marvify 3D in email marketing
sidebar_label: Email Marketing
---

# How to use Marvify 3D in email marketing

This guide explains how to integrate Marvify 3D into email marketing regardless of which platform you use. Most email services work similarly when linking out to external experiences.

**In this guide we use Rule as the example platform**, but the same approach applies to other tools such as Mailchimp, Klaviyo, Drip, and similar services.

Email clients do not support embedded 3D or scripts, so the viewer itself is typically opened on a page on your website. Emails can instead highlight the product visually and link recipients to the full 3D experience in whichever format fits your communication style.

If your Marvify viewer is not yet set up on your website, refer to the [Marvify Viewer guide](../snabbstart/marvify-viewer.md) for technical documentation or the [webpage integration guide](../exempel/webpage-integration.md) for a practical setup example.

## 1. Open Rule and create or edit an email template

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

Emails cannot display interactive 3D directly, so the content you add in Rule will link recipients to your webpage where the viewer is running.

## 2. Add an image, GIF, or button linking to your 3D viewer

There are several ways to present the product visually inside an email:

- A still product photo that links to the 3D experience
- An animated GIF showing the rotation or interaction
- A clear call to action button

To add a link in Rule, first copy the full URL of the page where your Marvify viewer is embedded. Then select a block in the email editor, paste the URL into the link field, and choose whether the link should open in a new tab.

<p align="center">
  <img
    src={require('@site/static/img/rule-linking-interface.webp').default}
    alt="Add a link in Rule"
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

### Using an animated GIF

A short rotating GIF generated from your Marvify model is an effective way to signal that a 3D experience awaits after the click. Any animation can be uploaded to Rule as a standard image block and linked to your viewer page.

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
  </video>
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    A rotating product preview used as an email GIF
  </em>
</p>

:::tip Pro-Tip
Some versions of desktop Outlook (2007-2016) do not support GIF animations and will only show the **first frame**. Ensure your GIF's first frame looks great as a static image!
:::

## 3. Before you send

### Optional: Add a call to action button

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

### Test your email

Since email clients behave differently it can be useful to send yourself a test email from Rule. This lets you verify that:

- All links work correctly
- Animated GIFs display as expected
- The layout scales properly on mobile devices

### Send or schedule

When your email is ready, select your recipient lists and either send the campaign immediately or schedule it for later. In Rule you can add recipients by importing a CSV file, manually adding individuals, or syncing from supported integrations.

Anyone who clicks your images or buttons will be taken to your webpage where they can explore the product in 3D. This approach lets you introduce interactive 3D into your email marketing without requiring any special email client support.

---

## Optional: Custom HTML email

While visual builders are standard, most platforms also support custom-coded HTML. This is an option for brands requiring specific layout control or integration into existing development workflows.

- **Table-based layouts:** To ensure consistent rendering across legacy clients like Outlook, `<table>` structures are used rather than modern `<div>` tags.
- **Inline CSS:** Styling should be applied directly to HTML tags (inline) to prevent email clients from stripping out header-based stylesheets.
- **Asset management:** For custom templates, images and GIFs are typically hosted on your own public server or a hosting service of your choice, and referenced using absolute URLs.

### Basic code example

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

### Deliverability and spam awareness

When building custom campaigns, maintaining a balanced ratio of text to images helps ensure high deliverability. Verifying your domain's SPF/DKIM records and including a clear unsubscribe link are standard practices for maintaining a professional sender reputation. When using a visual builder like Rule or Mailchimp, these are typically handled by the platform and mainly apply if you are sending from a custom mail server.

---

*The Rule interface may change over time, but the general workflow of linking to your Marvify experience remains the same. For the most accurate information about Rule updates you can visit: [Rule knowledge base](https://www.rule.se/support).*
