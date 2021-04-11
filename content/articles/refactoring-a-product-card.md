---
title: Refactoring a product card
description: I refactor a product card. Take a look at some UI refactoring and see how small improvements can make a big difference.
date: 10th April 2020
length: 5 min read
thumbnail: https://res.cloudinary.com/mkryan/image/upload/b_rgb:f1f3f7,c_thumb,w_400/v1618092340/Voodoo/htx-product-after_ubcnat.png
alt: Refactoring a product card
tags: [
  'UI/UX',
  'tailwind'
]
---

Hey, I just wanted to share and document some UI improvements done at a previous workplace. A lot of this work was learned and inspired by Refactoring UI so if you feel like this was helpful then check out the [Refactoring UI Book](https://refactoringui.com/book/) for a great deal more knowledge.

> Disclaimer - Design is importantly subjective so you're welcome to dislike some of this design.

Lets see what we’re working with…

![htx-product-before.png](https://res.cloudinary.com/mkryan/image/upload/v1618092340/Voodoo/htx-product-before_hqzlzt.png)

Ok, so we can do better than that. Overall the design just a bit messy causing the user to scan in all directions for information. Below I’ll show you the result of my refactoring and delve a little deeper into what I’ve changed and why.

![htx-product-after.png](https://res.cloudinary.com/mkryan/image/upload/v1618092340/Voodoo/htx-product-after_ubcnat.png)

## 1 . Improved visual flow and hierachy

The main takeaway here is grouping the different types of content. Before there were 5 visual columns and all of the information and actions were sporadically placed across the card, now however, there are just 3. One containing all the content that helps the users to make a informed choice. And another which contains all the actions, how the user customises and makes a purchase.

## 2. Better Button UX

Along with grouping the actions I have made an improvement to how a user amends the quantity they wish to purchase.

Before there was a `select` element that had a long list of numbers from 1 - 99. This was both unnecessary and caused multiple clicks when the common trend was that only one was need, because most users only incremented the quantity by 1. So now the updated input allows the user to increment as well manually input the quantity the wish, much nicer!

## 3. Highlight potentially important information

The last major change you will now see is that the  “Non-amendable” tag is moved and displayed in a more prominent accent color that is synonymous with a warning. This is now the first thing a user sees when tracking the information from top to bottom which again allows the user to make an informed decision.

So thats that, proof that with just a few changes with some well thought out UX we can polish up our work to better communicate with the user and hopefully improve those conversions.

