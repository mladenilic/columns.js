export default class Columns {
    constructor(container, options = {}) {
      this.container = container;
      this.options = options;

      this.options.breakpoints = this.options.breakpoints || {};
      this.options.column_class = this.options.column_class || 'column-js';

      this.items = Array.from(container.children) || [];
      this.index = 0;

      this.render();
    }

    count() {
      let columnCount = this.options.columns;
      let windowWidth = window.innerWidth;

      Object.entries(this.options.breakpoints).some(([breakpoint, count]) => {
        if (windowWidth < breakpoint) {
          return true;
        }

        columnCount = count;
      });

      return columnCount;
    }

    append(element) {
      this.items.push(element);
      this.container.children[this.index++ % this.count()].append(element);

      return this;
    }

    render() {
      this.index = 0;
      const count = this.count();

      this.container.dataset.columns = count;
      this.container.innerHTML = `<div class="${this.options.column_class}"></div>`.repeat(count);

      this.items.forEach((element) => {
        this.container.children[this.index++ % count].append(element);
      });

      return this;
    }

    setOptions(options = {}) {
      this.options = Object.assign(this.options, options);
    }
}
