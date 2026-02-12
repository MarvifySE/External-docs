---
id: sms-rcs-marketing
title: How to use FOTO-3D in SMS and RCS marketing
sidebar_label: SMS & RCS Marketing
---

# How to use FOTO-3D in SMS and RCS marketing

This guide explains how you can include Marvify FOTO-3D in SMS and RCS communication regardless of which messaging platform you use. The workflow is similar across most tools.

**In this guide we use Rule as the example service**, but the same principles apply to other channels such as Klaviyo SMS, Twilio, Voyado and similar platforms.

SMS and RCS cannot display embedded 3D content or scripts. Instead subscribers receive a short message containing a link that opens a webpage where your Marvify viewer is already running. The message can include a short description, a preview image or other cues that help the subscriber understand what awaits them after tapping the link.

If your Marvify viewer is not yet set up on your website you can refer to the technical documentation and sample setup guide.

- [Technical documentation](https://docs.marvify.io/en/snabbstart/marvify-viewer/)
- [Sample setup guide](/en/exempel/webpage-integration)

## 1. Copy the link to your Marvify 3D experience

Open the webpage where your Marvify 3D viewer is displayed. This can be a product page, a landing page, a campaign page or any location where your model is embedded. Copy the full URL from your browser. This link will be included in your SMS or RCS message.

## 2. Open Rule and create a new SMS or RCS message

Log in to Rule and open the Campaigns section. Create a new campaign and choose SMS or RCS. Create a new message and begin writing your text. Rule allows you to mix text with a link and optional media depending on the type of message.

### Subscribers in Rule

Before sending your message you will select which subscribers should receive it. In Rule you can add subscribers by importing a CSV file, manually adding individuals or syncing from supported integrations. After preparing your message you select one or more subscriber lists before sending or scheduling.

## 3. Add your Marvify link to the message

At the end of your SMS or RCS text include the link you copied earlier. For example:

<div
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: '2rem',
    flexWrap: 'wrap'
  }}
>
  {/* Video */}
  <div style={{ width: '45%', textAlign: 'center' }}>
    <video
      width="100%"
      autoPlay
      loop
      muted
      playsInline
    >
      <source
        src={require('@site/static/img/rcs.webm').default}
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
      RCS meddelande
    </em>
  </div>

  {/* Image */}
  <div style={{ width: '41.5%', textAlign: 'center' }}>
    <img
      src={require('@site/static/img/sms-example.webp').default}
      alt="Short message with a link to the 3D viewer"
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
      SMS meddelande
    </em>
  </div>
</div>

Many brands add a short descriptive phrase to help the recipient understand why the link is included. Examples:

- See the product in full 3D
- Rotate the item and explore details
- Interactive 3D preview available here

## 4. Optional: Add an image or RCS rich card if available

RCS and certain enhanced SMS platforms support images or rich cards. These can be used to preview your product. A still image or a lightweight animated preview can help show that a 3D experience is available after the click.

<p align="center">
  <video
    width="60%"
    autoPlay
    loop
    muted
    playsInline
  >
    <source
      src={require('@site/static/img/RCS-example.webm').default}
      type="video/webm"
    />
    Din webbläsare stöder inte video-taggen.
  </video>
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    RCS meddelande
  </em>
</p>

If your platform only sends standard SMS the message must be text only. Images are not supported in SMS, so any visuals should be placed on the webpage you link to.

## 5. Keep the text concise

SMS messages have limited space so shorter content can improve clarity. Many brands use:

- A short greeting
- One sentence describing the highlight
- The link to the 3D experience

RCS allows longer layouts if needed but concise wording often performs well across both formats.

## 6. Test the message before sending

Rule allows you to send a test SMS or RCS message to yourself. This helps verify that:

- The link opens correctly on mobile
- The Marvify viewer loads as expected
- Any attached media displays correctly

## 7. Send or schedule your SMS or RCS campaign

When everything is ready choose your subscriber lists and either send the message immediately or schedule it. Tapping the link will take your recipients directly to your 3D experience where they can explore the product in full detail.

This approach lets you bring interactive 3D into mobile messaging without requiring any special features on the recipient's device beyond a standard mobile browser.

---

*The Rule interface may change over time, but the workflow of linking to your Marvify experience remains the same. For the most up to date information you can visit the Rule knowledge base: [Rule support](https://www.rule.se/support).*
