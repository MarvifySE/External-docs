---
id: x-ads
title: How to create ads on X with FOTO-3D
sidebar_label: X Ads
---

# How to create ads on X with FOTO-3D

Begin by opening the page on your website where your Marvify FOTO-3D experience is hosted and copy the full link from your browser. This is the link you will use as the destination for your ad on X.

If you do not yet have your Marvify viewer set up on your website, you can refer to our technical documentation and sample setup guide. These resources will help you prepare your 3D experience for use in ads.

- [Technical documentation](https://docs.marvify.io/en/snabbstart/marvify-viewer/)
- [Sample setup guide](/en/exempel/webpage-integration)

To create an ad, go to the X Ads Manager at [ads.x.com](https://ads.x.com) and sign in to the account you want to advertise from. Once inside, choose to create a new campaign. Select a campaign objective that sends people to your website, such as "Website traffic" or "Conversions". This ensures that the ad format supports a clickable link leading directly to your Marvify FOTO-3D viewer page.

Continue to the ad group level, where you can set your budget, schedule, audience targeting, and placements. This step defines where your ad appears, who sees it, and how much you spend. When these settings are ready, move on to creating the actual ad.

<p align="center">
  <img
    src={require('@site/static/img/x-ads-targeting.webp').default}
    alt="Budget and demographics/scheduling options"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Budget and demographics/scheduling options
  </em>
</p>

In the ad creation view, choose the format you want to run, such as a single image or carousel. Under the destination URL field, paste the link to your Marvify FOTO-3D experience that you copied earlier. This link will be used when someone taps or clicks the ad.

You can then add your ad copy: headline, main text, and call-to-action button. These fields define how your ad appears in the feed. The preview panel in X Ads Manager will show how the ad looks in different placements as you make changes.

<p align="center">
  <img
    src={require('@site/static/img/x-ads-preview.webp').default}
    alt="Ad previews in X Ads Manager"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Ad previews in X Ads Manager
  </em>
</p>

When you are satisfied with your settings and ad preview, publish the campaign. After review by X, your ad will begin delivering to your selected audience. When viewers tap the link or link card, they will be taken directly to your 3D experience on your website.

## Troubleshooting: Incorrect ad preview

If the ad preview does not display the correct information for your link, it may be due to missing or outdated Open Graph metadata on your webpage, such as `og:image`, `og:title` and `og:description`. These tags tell X which image and text to display when your link appears in ads.

For more information about Open Graph tags, see: [Open Graph documentation](https://ogp.me/).

---

X Ads Manager includes many additional tools and advanced options beyond the basics covered in this guide. If you would like to explore more possibilities, X provides detailed documentation for all steps of the advertising workflow: [X Ads documentation](https://ads.x.com/en/help).

*Please note that X may update its Ads Manager interface or features over time. The steps and visuals in this guide are intended as general guidance and may not always reflect the most recent version of the advertising tools.*
