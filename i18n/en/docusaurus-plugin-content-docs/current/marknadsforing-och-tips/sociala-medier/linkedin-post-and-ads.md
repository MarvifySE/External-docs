---
id: linkedin-post-and-ads
title: How to Share and Advertise Marvify 3D on LinkedIn
sidebar_label: LinkedIn
---

# How to Share Marvify 3D in a LinkedIn Post

Start by opening the page on your website where your Marvify 3D experience is available and copy the full link from your browser. Having this copied in advance will make the process smoother.

If you have not yet set up your Marvify viewer on your website, you can refer to our technical documentation and example guide. These resources will help you prepare your 3D experience for sharing.

- [Technical documentation](../../snabbstart/marvify-viewer.md)
- [Example guide](../../exempel/webpage-integration.md)

Go to [linkedin.com](https://www.linkedin.com/) and sign in to the account you want to post from. If you are posting from a personal profile, click **"Start a post"** at the top of your homepage feed. If you are managing a company page, navigate to the page's admin view, select **"Page posts"** from the left menu and click **"Start a post"** from there so the post is published as the page.

<p align="center">
  <img
    src={require('@site/static/img/linkedin_start_a_post.webp').default}
    alt="Start a post on LinkedIn"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    The "Start a post" box at the top of your LinkedIn feed.
  </em>
</p>

Click or tap in the composer and paste the link you copied earlier. LinkedIn will take a moment to process the URL and generate a link preview card showing a thumbnail image, title and short description pulled from your website. The link in the text and the preview card are treated as separate elements by LinkedIn, so if you prefer to remove the plain URL from the text field after the preview has loaded, the card will remain attached to the post.

Note that organic posts on LinkedIn currently display link previews as a compact thumbnail to the left of the title and description, rather than as a large image. Sponsored content retains the larger image format.

<p align="center">
  <img
    src={require('@site/static/img/linkedin_post_composer.webp').default}
    alt="LinkedIn post composer with link preview"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    A completed post with text and the auto-generated link preview.
  </em>
</p>

At this point you can add any accompanying text, images or documents that are useful for your post. These elements are optional, and LinkedIn allows you to publish the link card with or without them. If you are posting from a company page, the post will be visible to followers and anyone who visits the page. Personal profile posts can be adjusted using the visibility selector.

:::tip
LinkedIn's algorithm may reduce the organic reach of posts that contain external links. A common workaround is to publish the post without the link and then add the URL as the first comment instead. This keeps the link accessible to your audience while potentially improving how the post is distributed in the feed.
:::

When everything looks correct, publish the post. The link card will appear in the feed for your audience and clicking or tapping it will take them directly to the 3D experience on your website.

<p align="center">
  <img
    src={require('@site/static/img/linkedin_result.webp').default}
    alt="Published LinkedIn post with Marvify 3D link"
  />
  <em
    style={{
      display: 'block',
      marginTop: '0.5rem',
      fontSize: '0.9rem',
      color: '#666'
    }}
  >
    The finished post in the LinkedIn feed with the link preview.
  </em>
</p>

## Troubleshooting: Missing Link Preview

If no preview card appears when you paste your link on LinkedIn, it usually means the web page is missing the information LinkedIn needs to generate the card. This information is provided through Open Graph tags such as `og:image`, `og:title` and `og:description`. These tags tell LinkedIn which image and text to display alongside the link. For the best results, the `og:image` should be at least 1200 x 627 pixels with a 1.91:1 aspect ratio and no larger than 5 MB.

LinkedIn caches Open Graph data for approximately seven days. If you have recently updated your tags and the preview still shows old information, you can force a refresh using LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/). Paste your URL into the tool and LinkedIn will re-scrape the page and display the updated preview.

For more information about the Open Graph standard, see [the official Open Graph documentation](https://ogp.me/).

---

*For more information about creating posts on LinkedIn, see the platform's official help resources: [LinkedIn Help](https://www.linkedin.com/help/linkedin).*

*Note that LinkedIn may update its interface or features over time. The steps and images in this guide are intended as general guidance and may not always reflect the latest version of the platform.*

---

# How to Create LinkedIn Ads with Marvify 3D

Start by opening the page on your website where your Marvify 3D experience is available and copy the full link from your browser. This is the link you will use as the destination for your LinkedIn ad.

If you have not yet set up your Marvify viewer on your website, you can refer to our technical documentation and example guide. These resources will help you prepare your 3D experience for use in ads.

- [Technical documentation](../../snabbstart/marvify-viewer.md)
- [Example guide](../../exempel/webpage-integration.md)

To create an ad, go to [LinkedIn Campaign Manager](https://www.linkedin.com/campaignmanager/) and sign in to the account associated with the company page you want to advertise from. Once inside, select the option to create a new campaign. Choose a campaign objective that sends people to your website, such as **"Website visits"** or **"Website conversions"**. This ensures the ad format supports a clickable link that leads directly to your Marvify 3D viewer page.

Continue to the campaign settings where you can define your target audience, budget, schedule and ad placements. LinkedIn Campaign Manager allows you to target by job title, job function, industry, company size and other professional attributes, which can be useful for reaching decision-makers or specific market segments. The minimum audience size required is 300 members. Once these settings are configured, proceed to creating the ad itself.

In the ad creation view, choose the ad format you want to run, such as a single image ad or carousel ad. In the destination URL field, paste the link to your Marvify 3D experience that you copied earlier. This URL will be used when someone clicks on the ad.

You can then add your ad copy: introductory text, headline, description and a call-to-action button. These fields control how the ad appears in the feed and how the link is presented. Keep introductory text under 150 characters and headlines under 70 characters to avoid truncation on smaller screens. The preview panel on the right side of Campaign Manager shows how the ad will look on desktop and mobile feeds while you make changes. Note that the preview is a representation and LinkedIn may adjust visual details slightly when the ad is served.

When you are satisfied with your settings and the ad preview, launch the campaign. LinkedIn reviews ad creatives before they are shown, which typically takes up to 24 hours. Once approved, your ad will begin serving to your selected audience. Viewers who click the link will be taken directly to the 3D experience on your website where they can explore the product.

## Troubleshooting: Incorrect Ad Preview

If the ad preview does not show the correct information for your link, it may be because your Open Graph metadata is missing or outdated on your web page, such as `og:image`, `og:title` and `og:description`. These tags tell LinkedIn which image and text to display when your link appears in ads. Campaign Manager can scrape Open Graph data from your destination URL when creating the ad, so ensuring your tags are up to date before you begin will give the best results.

LinkedIn caches Open Graph data for approximately seven days. If you have recently updated your tags, you can use LinkedIn's [Post Inspector](https://www.linkedin.com/post-inspector/) to force a refresh before creating your ad.

For more information about Open Graph tags, see: [Open Graph documentation](https://ogp.me/).

---

LinkedIn Campaign Manager includes many additional tools and advanced options beyond the basics covered in this guide. If you want to explore further, LinkedIn provides detailed documentation for the full ad creation workflow: [LinkedIn Marketing Solutions](https://business.linkedin.com/marketing-solutions).

*Note that LinkedIn may update its Campaign Manager interface or features over time. The steps and images in this guide are intended as general guidance and may not always reflect the latest version of the advertising tools.*
