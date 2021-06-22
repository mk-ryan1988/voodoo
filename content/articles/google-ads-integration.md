---
title: Google Ads Integration
description: Building an integration and allowing personal trainers to promote and grow their business. From account creation to promoting their assets in just a few clicks.
label: Project
date: 22nd June 2021
length: 5 min read
thumbnail: https://res.cloudinary.com/mkryan/image/upload/v1622670523/Voodoo/google-ads_l00zq9.png
alt: Building a Google Ads Integration
tags: [
  'UI/UX',
  'Vue,js',
  'Laravel',
]
---

At [My Pt Hub](https://www.mypthub.net/), the All-In-One Software for Coaches, Personal Trainers & Clubs, we recently wrapped up a project where the most notable challenge was integrating [Google Ads](https://ads.google.com/) API. The project was aimed at growing the Personal Trainers business’ and I was tasked with creating a full-stack solution that created both Accounts and Campaigns which did all of the heavy liftings and did not require any expertise in Google Ads.

The main goal of this project was to empower our users who would have little to null experience with Google Ads. Did we create a clear and engaging pathway to creating Google Ads? I believe we did and am very proud of the principal role I had in delivering such a powerful and fun feature!
Lets take a look below how we did it...

<video autoplay loop poster="https://res.cloudinary.com/mkryan/image/upload/v1624310224/Voodoo/Screenshot_2021-06-21_at_22.16.31_aefvoe.png" class="rounded w-full h-auto shadow-lg py-1 bg-gradient-to-b from-black via-white to-white">
    <source
      src="https://res.cloudinary.com/mkryan/video/upload/v1624307166/Voodoo/create-preview-hq_h7lkyo.mp4"
      type="video/mp4"
    >

    Sorry, your browser doesn't support embedded videos.
</video>

We achieved our goal from a UI/UX perspective by incorporating the following features:

⚡️  Simple Onboarding in a little a three clicks

🎨  Pixel perfect preview of an original Google Responsive Search Ad that carousels potential Ad content

✅  A clear to-do list that simplifies to the user both the configuration and how Google Ads are served.

🚀  Call to actions that identify a quick path to both Ad creation and configuration

📊  Focused charts and data that condenses a lot of overwhelming information and lets the user know how well their Campaigns are performing

<div class="mb-4">
    <img class="shadow-none" src="https://res.cloudinary.com/mkryan/image/upload/v1624312013/Voodoo/google-ads-features-v2_tmodz3.png">
</div>

To complement the smooth UI is a smart ever-growing back-end integration that powers the reactive Ad Preview and single click Campaign creation.
It is the brains behind making the integration so simple for Personal Trainers and boasts the following features:

🔎  Behind the scenes scraping and formatting of existing data which allows us to power the reactive Ad preview.

🔑  An ever growing library and system that creates hundreds of dynamic Ad Group Keywords.

🧠  A versioned content template system that allows us to grow ad content and make reactive changes.

## Extra Credit, Google Ads API Tips!

Here are a few things that I found helpful when integrating the Google Ads API.

### Setting up the client library

To communicate with the google ads API we used the PHP client library, [google-ads-PHP](https://github.com/googleads/google-ads-php). This makes managing credentials and the creation of the various service clients an absolute breeze.

Most examples show implementing a `.ini` file. I would however recommend a more scaleable approach of using environment variables, like below:

```php
// Generate the google ads config.
$config = new Configuration([
  'developerToken' => env('GOOGLEADS_DEVELOPER_TOKEN'),
  'loginCustomerId' => env('GOOGLEADS_LOGIN_CUSTOMER_ID'),
  'clientId' => env('GOOGLEADS_CLIENT_ID'),
  'clientSecret' => env('GOOGLEADS_CLIENT_SECRET'),
  'refreshToken' => env('GOOGLEADS_REFRESH_TOKEN'),
]);

// Generate a refreshable OAuth2 credential for authentication.
$oAuth2Credential = (new OAuth2TokenBuilder())
    ->withClientId($config->getConfiguration('clientId'))
    ->withClientSecret($config->getConfiguration('clientSecret'))
    ->withRefreshToken($config->getConfiguration('refreshToken'))
    ->build();

// Construct a Google Ads client configured from the config and the OAuth2 credentials above.
$this->googleAdsClient = (new GoogleAdsClientBuilder())
    ->withOAuth2Credential($oAuth2Credential)
    ->withDeveloperToken($config->getConfiguration('developerToken'))
    ->withLoginCustomerId(intval($config->getConfiguration('loginCustomerId')))
    ->build();
```

### Bulk Mutates

Group your resource mutations such as Campaign, Ad Group and Keyword creation and utilise a [bulk mutate](https://developers.google.com/google-ads/api/docs/mutating/bulk-mutate?hl=en).

Doing so only makes only one round trip to Google Ads and avoids the performance costs of sending them separately.

### Use temporary resource names

When using bulk mutates it may be important to add temporary resource names in the form of negative Ids. These can then be referenced later on in the request. The Google Ads API will automatically swap these out for actual Id’s when your resources have been created.

> Temporary resource names are not remembered across different bulk mutate requests;

```php
mutate_operations: [
  {
    campaign_operation: {
      create: {
        resource_name: "customers/<YOUR_CUSTOMER_ID>/campaigns/-1",
        ...
      }
    }
  },
  {
    ad_group_operation: {
      create: {
        resource_name: "customers/<YOUR_CUSTOMER_ID>/adGroups/-2",
        campaign: "customers/<YOUR_CUSTOMER_ID>/campaigns/-1"
        ...
      }
    }
  },
  {
    ad_group_ad_operation: {
      create: {
        ad_group: "customers/<YOUR_CUSTOMER_ID>/adGroups/-2"
        ...
      }
    }
  },
]
```


