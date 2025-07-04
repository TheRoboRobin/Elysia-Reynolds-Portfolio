# Elysia Reynolds Portfolio

This is a personal project. My partner needed a portfolio website. This is a good challenge for myself to do something unguided and creatively driven.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Easily find the resume and contact information.
- Present a good picture of what the artists skills and style are.
- View the optimal layout for the site depending on their device's screen size

### Screenshot

### Links

- Live Site URL: [Github](https://theroborobin.github.io/Frontend-Mentor-Testimonials-Component/)

## My process

I began first with using Figma to design a layout and discuss with the artist their needs and wants out of a portfolio. They gave me examples of art and components that they wanted used on the site and I offered my own ideas. Afterwards, I took that information and began designing.

![Landing Page Design](/src/assets/design/landing%20page%20design.png)

![Fimgma Design File](/src/assets/design/Portfolio%20Design.png)

I've used a few different programs before and to be honest I was surprised how easy Figma is to work with. It's very straightforward compared to some others and I was able to put vision to reality very easily. After finishing a mockup, I had the artist look at it. Given how pleased they were, I moved on from there.

There is a few challenges upfront that I have to consider. One is the header. I've not done a header consistent with multiple pages before. I know there is a way to do so with php from my work in wordpress but I'm not well versed in that. So I began looking for a javascript solution for it.

Eventually I came across a solution to just use ajax and promises. I haven't got much experience with either yet but I think I understand enough to make a snippet to use. The following is what I put together from some information from an article I read on CSS-Tricks and notes from a JavaScript course I've been taking.

```javascript
fetch("header.html")
  .then((response) => {
    return response.text();
  })
  .then((data) => {
    document.querySelector("header").innerHTML = data;
  });
```

And as far as I see, it works how I wanted it to! It's nice to feel like I have a grasp of the things that I've been learning.

Building out the rest of the structure was pretty straight forward. I just have to be sure about attaching the css and js files correctly on each page.

After building out the structure and doing my first commit, I wanted to take a look at how I do rem conversion. I was told by someone on frontend mentor that there was a bug with the whole 62.5% thing in some browsers. And so after looking into that I borrowed Coder Coder's function from their video, [Please stop using px for font-size](https://www.youtube.com/watch?v=xCSw6bPXZks).

```scss
@function rem($pixel) {
  @if math.is-unitless($pixel) {
    @return math.div($pixel, 16) + rem;
  } @else {
    @error 'Don\'t use units when using the rem() function; only numbers.';
  }
}
```

It didn't work at first but after a bit of reading I realized that @use 'sass:math'; at the top was necessary to make the math module function.

After styling the header and footer and laying out the site, I added my DOM manipulation for the open and close of the menus. This is where I realized I was in over my head. I had no idea that the method I was using was adding the header and footer to the shadow DOM, something I barely understood existed. And as I read, It just got more and more complex.

So I began to search for another solution. Could I make it simpler by just using createElement and appendChild? Eventually what I figured out was happening was much more simple than I thought. The event listener was applying prior to the dynamic html being added to the DOM. So it was trying to apply to something that doesn't exist yet. The workaround that I came to after a while was to add the event listener to the body and an if statement that looks for the "navigation\_\_icon" in the event.

```javascript
document.body.addEventListener("click", function (event) {
  if (event.target.id === "navigation__icon") menu.classList.toggle("open");
});
```

While proceeding on the styling, I decided to incorperate mixins in this website. I have used them pretty sparingly and had not gotten the hang of them yet. On a previous project I had used a conceptual custom "private" property and from what I understood, this could be done roughly the same with mixins.

And so, in order to handle the button coloring, I made a mixin that takes the arguments $property and $color.

```scss
@mixin btnColor($property, $color) {
  #{$property}: $color;
}
```

This ends up being pretty handy because then I'm just inserting the @include to use it. But I thought, why don't I just simplify it further?

```scss
@mixin btn($color1, $color2, $color3) {
  color: $color1;
  background-color: $color2;
  box-shadow: 5px 5px $color3;
}
```

This worked out great for me. Multi-use. Removing repitition.

Making a grid was fairly quick to do because I made a mixin to handle it. Just insert the start and end of the row and columns and a color.

```scss
@mixin gridlayout($num1, $num2, $num3, $num4, $color) {
  grid-column: col-start $num1 / col-end $num2;
  grid-row: row-start $num3 / row-end $num4;
  background-color: $color;
}
```

The next thing I came up against was a need for a simple lightbox. I could probably code out a lightbox but I went looking for a lightweight script I could use. What I found was fslightbox. It seems lightweight and easy to implement, so I'll give it a try.

When returning to the project after the weekend, I wasn't satisfied with the way the hero was responding. So What I decided was to build a static image to use instead of the grid. The grid was still working perfectly for the works page, but not for the hero.

And so in my design program I created the layout of images that I had put together so that I could export it as a usable png and bingo. Worked how I wanted it to. Much more responsive too.

The bulk of this project was spent setting up the page to display the artists works. Went fairly smoothly, just took time and a lot of code. But the images were working smoothly with the fslightbox script.

After having a friend review what I had built, he suggested that the background needed a bit more to it. After some tossing around of ideas, I created a little supergraphic line design that added direction to the background without being too distracting.

![supergraphic lines](/src/assets/images/Hero-Background-2.png)

This tightened up the site and added some visual direction to the pages.

Finally, in order to get the site published, I completed the media queries for the desktop screen sizes. I wanted to have this up bare minimum so the artist could begin using the portfolio on resumes. While working on it, I realized I had my grid set up in a way that was hard to adjust responsively. So after a little bit of testing, I adjusted to make each grid easy to adjust.

I never realized how easy vercel was. In order to publish the production branch on github, I had to build a .yaml file. With vercel, I just selected the branch when importing to vercel, and the sync was automatically set up. Super handy. But I can see the use in both. For my current uses, this is perfect. I could see how the customizability could be necessary with larger projects with multiple people.

Finally I spent the time to put in the media queries for the website. Lots of finicky work that I'm getting used to at this point. Overall, I think it was pretty easy to do. The most time consuming was the grids. The hardest thing to do was the switch to the mobile menu. I still feel like I haven't gotten the hang of that yet. Like it's still just trial and error trying to see if what I do works. What I need to do is plan both menu's and the structure necessary first prior to starting in on styling everything.

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Figma
- SASS
- Block Element Modifier / 7-1 Architecture
- DOM Manipulation
- AJAX
- fslightbox

### What I learned

Going start to finish for a complete project like this was super informative. I was able to research and then impliment the menu across the multi page site. Taking the needs of the client and then turning that into function was also a good experience. The problems I encountered were way different than the problems I'd encountered before working with wordpress. Designing out the entire website start to finish, working with figma into code, doesn't quite have the guard rails I had before but also presented a freedom that was an adjustment too.

There is more within the design phase than I considered. Elements I should have planned out further in the beginning to make implementation easier.

At the same time as this having been an eye opening experience, it was also a confidence boost. Here I am publishing and I did it. This is something I created start to finish. No WordPress. No themes with tiny adjustments of code. I can do this. I still have much to learn but I've come a long way.

I still want to do some adjustments to this over time but this is enough to be functional.

### Continued development

Something I could consider for development going forward is how to make the usage of mass amounts of images smoother. Maybe there is something I could use within JavaScript to do that. Create an object containing the images. Then create the elements themself dynamically. Faster less clunky code. What I've done works. But that is something to look at and learn from.

### Useful resources

[fslightbox](https://fslightbox.com)

## Author

- Website - [Robin](https://github.com/TheRoboRobin)
- Frontend Mentor - [@TheRoboRobin](https://www.frontendmentor.io/profile/TheRoboRobin)
