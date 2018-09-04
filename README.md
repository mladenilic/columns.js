# columns.js
A minimalist masonry layout written in vanila JS, with **no** dependancies.

*columns.js* creates a masonry grid by sorting elements into columns and wrapping each column with a div element.

### Demo

[https://columnsjs.com/](https://columnsjs.com/)

### Pros

* Blazing fast, vanila js
* Written as ES6 module, no dependancies
* No inline styles, no absolute positioning, no transforms
* Responsive support, minimal configuration
* Maintains chronological order

### Dependencies

No dependacies! Written in plain javascript.

### Example
```js
import Columns from './columns.js';

let grid = new Columns(document.getElementById('grid-wrapper'), {
    columns: 3
});

let item = document.createElement('div');
item.innerHTML = '<img src="https://picsum.photos/400/200/?random">';

grid.append(item);
```

### Options
```js
{
  // Default number of columns (mandatory)
  columns: 1,

  // Responsive support
  breakpoints: {
    768: 2,
    1200: 3
  },

  // Class added to column wrapper
  column_class: 'column-js'
}
```

### Methods
```js
grid.columnCount(); // Get current number of columns
grid.append(element); // Append new html element
```

### Styling
*columns.js* does not apply any inline styles. No absolute positioning. No transforamations.

Instead, *columns.js* maintains `columns` data attribute on the wrapper element with a current column count value, which can be used for styling:

```css
#grid-wrapper {
    display: flex;
    flex-wrap: wrap;
}

[data-columns="3"] > div {
  flex-basis: calc(100% / 3);
}

[data-columns="4"] > div {
  flex-basis: calc(100% / 4);
}
```

If you are usig Sass, here's a handy mixin:
```sass
@mixin columnsjs {
    display: flex;
    flex-wrap: wrap;

    @for $i from 1 through 9 {
        &[data-columns="#{$i}"] {

            & > div {
                flex-basis: calc(100% / #{$i});
            }
        }
    }
}

#columns-wrapper {
    @include columnsjs;
}
```

### To Do

1. Implement column height optimization – currently *columns.js* prioratizes chronological orders, which can lead to the uneven height of grid columns, when item height varies too much.