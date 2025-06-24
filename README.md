# Elysia Reynolds Portfolio

This is a personal project. My partner needed a portfolio website. This is a good challenge for myself to do something unguided.

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
- Get a good picture of what the artists skills and style are.
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

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- SASS
- Block Element Modifier / 7-1 Architecture
- DOM Manipulation
- AJAX

### What I learned

### Continued development

### Useful resources

## Author

- Website - [Robin](https://github.com/TheRoboRobin)
- Frontend Mentor - [@TheRoboRobin](https://www.frontendmentor.io/profile/TheRoboRobin)
