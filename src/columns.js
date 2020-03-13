import Set from './partition/set.js';

export default class Columns {

  constructor(container, options = {}) {
    this.container = container;
    this.options = Object.assign({
      columns: 1,
      breakpoints: null,
      column_class: 'column-js',
      algorithm: 'greedy'
    }, options);

    this.set = new Set(Array.from(this.container.children) || [], {
      algorithm: this.options.algorithm,
      extractor: i => i.getBoundingClientRect().height
    });

    this.render();
  }

  count() {
    let columnCount = this.options.columns;
    let windowWidth = window.innerWidth;

    Object.entries(this.options.breakpoints || {}).some(([breakpoint, count]) => {
      if (windowWidth < breakpoint) {
        return true;
      }

      columnCount = count;
    });

    return columnCount;
  }

  append(element) {
    // Temporary append element to the first column
    // to be able to calculate height
    this.container.children[0].append(element);

    const column = this.set.append(element);
    this.container.children[column].append(element);

    return this;
  }

  render() {
    const count = this.count();
    const columns = this._prepareColumns(count);

    this.set.partition(count).forEach((c, i) => columns[i].append(...c.lean()));

    this.container.dataset.columns = count;
    while (this.container.firstChild) {
      this.container.removeChild(this.container.firstChild);
    }
    this.container.append(...columns);

    return this;
  }

  setOptions(options = {}) {
    this.options = Object.assign(this.options, options);
  }

  _prepareColumns(count) {
    const columns = [];
    [...Array(count)].forEach(() => {
      const column = document.createElement('div');
      column.classList.add(this.options.column_class);

      columns.push(column);
    });

    return columns;
  }
}
