# Zyda Frontend Test - REST Countries API with color theme switcher

This is a solution to the [REST Countries API with color theme switcher task](https://github.com/zydalabs/FrontEnd-Test). Zyda Frontend Task helps us test your coding skills by building a realistic project.

## Table of contents

- [Overview](#overview)
  - [The task](#the-task)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The task

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click back button to return to countries page from the details page
- Toggle the color scheme between light and dark mode _(optional)_
### Links

- Solution URL: [Repository](https://github.com/bftawfik/FrontEndTask)
- Live Site URL: [netlify link](https://boring-mccarthy-4d1000.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [React](https://reactjs.org/) - JS library
- CSS modules
- SASS style
- React router
- Font Awsome

### What I learned

I worked on this project as a sample for Zyda I made it with react hooks redux and axios

```html
<div
  className="{joinClassesWithSpace(styles.FulscrnWrpr,"
  className)}
  style="{style}"
>
  <div className="{joinClassesWithSpace(styles.container," containerClassName)}>
    {children}
  </div>
</div>
```

```css
body {
  @include withTheme("background-color", "color-background");
  @include withTheme("color", "color-text");
  // @include withTheme("box-shadow", "color-text", "0 0 0 0");
  font-family: $font-family;
}
```

```js
const fetchSearchResults = async (dispatch, searchString) => {
  try {
    if (searchString.trim().length !== 0) {
      const response = await getCountriesWithName(searchString);
      const { data } = response;
      dispatch(
        addSearchResults(
          data.reduce((s, c) => ({ ...s, [c.alpha3Code]: c }), {})
        )
      );
    }
  } catch (error) {
    console.error(error);
    dispatch(addSearchResults({}));
  }
};
```

### Continued development

I think the "not found" page need a design and the router should ahndle not found data for country page

## Author

- Website - [Bishoy Farouk](https://bftawfik.github.io)

## Acknowledgments

I thank every one that wrote a helpful answer on [stackoverflow](https://stackoverflow.com/), [MDN](https://developer.mozilla.org/en-US/) [Github](https://github.com/)
