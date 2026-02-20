---
id: x-post
title: How to share Marvify 3D in a post on X
sidebar_label: X (Twitter)
---

# How to share Marvify 3D in a post on X

Begin by opening the page on your website where your Marvify 3D experience is hosted and copy the full link from your browser. This is the link you will include in your post on X.

If you do not yet have your Marvify viewer set up on your website, you can refer to our technical documentation and sample setup guide. These resources will help you prepare your 3D experience for sharing.

- [Technical documentation](https://docs.marvify.io/en/snabbstart/marvify-viewer/)
- [Sample setup guide](/en/exempel/webpage-integration)

Go to [x.com](https://x.com) or the X mobile app and sign in to the account you want to post from. On desktop, you will find the post composer at the top of the Home timeline, or by clicking the "Post" button. In the app, you can start a new post from the compose icon.

<p align="center">
  <img
    src={require('@site/static/img/x-post-compose.webp').default}
    alt="Post editor on X"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Post editor on X
  </em>
</p>

Click or tap into the composer and paste the link you copied earlier. X will process the link and generate a preview card. As of the current version of X, preview cards in the timeline display the image with a small domain label overlaid on it, rather than showing the full title and description. The card still functions as the clickable element that leads to your 3D experience.

<p align="center">
  <img
    src={require('@site/static/img/x-post-preview.webp').default}
    alt="Example of a preview card generated from a link"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    Example of a preview card generated from a link
  </em>
</p>

You can add any accompanying text you need in the same post. Links on X are automatically shortened through the t.co service, and you can optionally attach images or videos in addition to the link. When you are satisfied with the content, choose your audience settings if applicable and prepare to publish.

:::tip
X's algorithm may reduce the visibility of posts that contain external links. Including a compelling image or video alongside your link can help improve engagement and reach compared to a link-only post.
:::

Once everything looks correct, publish the post. It will appear in your followers' timelines and anywhere else your post is shown, and clicking the link or its preview will take people directly to the Marvify 3D experience on your site.

## Troubleshooting: Missing preview card

If no preview card appears for your link, it usually means X does not have the information it needs from the webpage to build a card. This information is provided through metadata such as Open Graph tags and X-specific card tags. The most important tag is `twitter:card`, which controls the card type: set it to `summary_large_image` for a large image preview, which works well for visual content like a 3D product viewer. X also reads `og:image`, `og:title` and `og:description` for the card content, and falls back to these if no `twitter:` equivalents are present.

For more details about the Open Graph standard, see [the official Open Graph documentation](https://ogp.me/).

---

For more information about creating posts and link previews on X, see the platform's official help and developer resources: [X Cards documentation](https://developer.x.com/en/docs/x-for-websites/cards/overview/about-cards).

*Please note that X may update its interface, features or card behavior over time. The steps and visuals in this guide are intended as general guidance and may not always reflect the most recent version of the platform.*
