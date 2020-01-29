import Chronological from './partition/chronological';

export default class Columns {
  constructor(container, options = {}) {
    this.container = container;
    this.options = Object.assign({
      columns: 1,
      breakpoints: null,
      column_class: 'column-js'
    }, options);

    this.algorithm = new Chronological(Array.from(this.container.children) || []);

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
    const columns = this._prepareColumns(count);

    this.algorithm.partition(count).forEach((c, i) => columns[i].append(...c));

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
