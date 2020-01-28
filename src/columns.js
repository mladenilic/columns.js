import Chronological from './partition/chronological';

export default class Columns {
  constructor(container, options = {}) {
    this.container = container;
    this.options = Object.assign({
      columns: 1,
      breakpoints: null,
      column_class: 'column-js'
    }, options);

    this.items = Array.from(this.container.children) || [];
    this.algorithm = new Chronological();

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
    const column = this.algorithm.append(element);
    this.container.children[column].append(element);

    return this;
  }

  render() {
    const count = this.count();
    this.container.dataset.columns = count;
    this.container.innerHTML = `<div class="${this.options.column_class}"></div>`.repeat(count);

    this.algorithm.partition(this.items, count);
    this.algorithm.sets.forEach((column, index) => {
      column.forEach(element => this.container.children[index].append(element));
    });

    return this;
  }

  setOptions(options = {}) {
    this.options = Object.assign(this.options, options);
  }
}
