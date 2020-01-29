# columns.js

![npm](https://img.shields.io/npm/v/columns.js)
[![CircleCI](https://circleci.com/gh/mladenilic/columns.js.svg?style=svg)](https://circleci.com/gh/mladenilic/columns.js)
[![Maintainability](https://api.codeclimate.com/v1/badges/bfd6aa1fac5d281bf4a5/maintainability)](https://codeclimate.com/github/mladenilic/columns.js/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/bfd6aa1fac5d281bf4a5/test_coverage)](https://codeclimate.com/github/mladenilic/columns.js/test_coverage)

A minimalist masonry layout is written in vanilla JS, with **no** dependencies.

*columns.js* creates a masonry grid by wrapping each column of items in an element. Masonry grid is then created without the need for absolute positioning nor css transforms.

### Demo

[https://columnsjs.com/](https://columnsjs.com/)

### Pros

* Blazing fast, vanilla js
* Written as ES6 module, no dependencies
* No inline styles, no absolute positioning, no transforms
* Responsive support, minimal configuration
* Multiple partitioning algorithms

### Dependencies

No dependencies! Written in plain javascript.

### Install

```
$ npm install columns.js
```

or 

```
yarn add columns.js
```

### Example

Following example demonstrates creating a masonry grid with 3 columns:
```js
import Columns from 'columns.js';

let grid = new Columns(document.getElementById('columns'), {
  columns: 3
});
```

```html
<div id="columns">
  <img src="https://picsum.photos/400/200/?random">
  <img src="https://picsum.photos/300/500/?random">
  ...
</div>
```

Dynamically append elements to the grid:
```js
let item = new Image();
item.src = 'https://picsum.photos/400/200/?random';

grid.append(item);
```

### Options
```js
new Columns(document.getElementById('columns'), {
 /**
  * Number of columns (Mandatory)
  */
  columns: 1,

 /**
  * Responsive settings (Optional)
  * 
  * Each key represents a screen size and each value
  * is corresponding number of columns
  * 
  * Example:
  * < 480px             -> 1 column
  * > 480px and < 839px -> 3 columns
  * > 840px             -> 4 columns
  */
  breakpoints: {
    480: 3,
    840: 4
  },

 /**
  * Html class added to grid column elements (Optional)
  */
  column_class: 'column-js',
  
 /**
  * Choose algorithm used for partitioning elements into columns (Optional)
  * 
  * 'greedy' (default) or 'chronological'
  */
  algorithm: 'greedy'
});

```

### Partitioning

This section provides information on algorithms implemented by *columns.js* for partitioning elements into columns.

It currently supports two algorithms – `greedy` and `chronological`

#### [Greedy algorithm](https://en.wikipedia.org/wiki/Partition_problem#The_greedy_algorithm) - `greedy` (default) 
The algorithm iterates through the elements in descending order, assigning each of them to whichever column has the smaller total height.

This approach reduces the difference between column heights while sacrificing the chronological order of items.  

As an improvement, *column.js* implementation preserves chronological order of items within one column. 

#### Chronological algorithm - `chronological`
The algorithm iterates through the elements, assigning them to columns in chronological order.

There is no optimization of column heights.

### Methods
```js
grid.count(); // Get current number of columns
grid.append(element); // Append new html element
grid.render(); // Re-flow the grid
grid.setOptions(options)
```

### Styling
*columns.js* does not apply any inline styles. No absolute positioning. No transformations.

Instead, *columns.js* maintains `columns` data attribute on the wrapper element with a current column count value, which can be used for styling:

```css
[data-columns] {
  display: flex;
  flex-wrap: wrap;
}

[data-columns="3"] > * {
  flex-basis: calc(100% / 3);
}

[data-columns="4"] > * {
  flex-basis: calc(100% / 4);
}
```

Here's a handy mixin:
```scss
@mixin columnsjs {
  display: flex;
  flex-wrap: wrap;

  @for $i from 1 through 9 {
    &[data-columns="#{$i}"] {

      & > * {
        flex-basis: calc(100% / #{$i});
      }
    }
  }
}

#columns {
  @include columnsjs;
}
```

### To Do
1. Removing an element from the grid
2. Event system
