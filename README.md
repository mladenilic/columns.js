# columns.js
A minimalist masonry layout written in vanilla JS, with **no** dependencies.

*columns.js* creates a masonry grid by sorting elements into columns and wrapping each column with a div element.

### Demo

[https://columnsjs.com/](https://columnsjs.com/)

### Pros

* Blazing fast, vanilla js
* Written as ES6 module, no dependencies
* No inline styles, no absolute positioning, no transforms
* Responsive support, minimal configuration
* Maintains chronological order

### Dependencies

No dependencies! Written in plain javascript.

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
      480: 2,
      840: 3
  },

  // Class added to column wrapper
  column_class: 'column-js'
}
```

### Methods
```js
grid.columnCount(); // Get current number of columns
grid.append(element); // Append new html element
grid.update(); // Re-flow the grid

// Option setters
grid.setBreakpoints(breakpoints)
grid.setColumns(columns)
grid.setColumnClass(columnClass)
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
```scss
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
2. Implement removing element from grid
3. Add event system
