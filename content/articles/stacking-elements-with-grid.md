---
title: Stacking Elements with Grid
description: I'll quickly show you how to stack html elements using CSS Grid.
date: 3rd March 2020
length: 3 min read
thumbnail: null
alt: Stacking with CSS Grid
tags: [
  'CSS',
  'tailwind',
]
---

Stacking an element on top of another used to be a task commonly solved using  `position: absolute` followed by forgetting to add `position: relative` to the parent and seeing the element in question appear off in a totally unwanted direction.
<br>
However nowadays I utilise the power of `display: grid`.

<div class=" m-auto h-96">
  <div class="h-full p-12 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded grid stack">
    <div class="grid transform -translate-x-4 mb-6">
      <div class="stack glass z-10"></div>
      <div class="stack glass z-20 transform translate-x-8 translate-y-6"></div>
    </div>
  </div>
</div>

We can now achieve stacking, demo'd above in the form the the "Glassmorphism" trend, by making all the child elements of a grid span the whole area. The best part is we can do it in two just a few lines of css...

```css
.grid {
	display: grid
}

.grid.stack > * {
    grid-column: 1;
    grid-row: 1;
}
```

I like this method for a few reasons. One is that as this problem feels like a layout problem and with that in mind it feel more intuitive to use a modern and common layout tool.
<br>
Another plus for this method is that we can now easily stack multiple elements on top of one another by adding multiple children inside an element with the classes `grid`  and `stack`. If however you are not a fan of the `*` selector, as there can be some performance concerns, you can easily reach for the following CSS

```css
.grid {
	display: grid
}

.stack {
    grid-column: 1;
    grid-row: 1;
}
```

And lastly when stacking elements don't forget to add the relevant `z-index`.

ADDED BONUS: My Tailwind config for this feature

```json
plugins: [
  plugin(function({ addUtilities }) {
    const newUtilities = {
      '.stack': {
        gridColumn: '1',
        gridRow: '1'
      }
    }

    addUtilities(newUtilities, {
      variants: ['responsive', 'hover'],
    });
  })
],
```
