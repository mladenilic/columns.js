import Chronological from './partition/chronological';
import Greedy from './partition/greedy';

export default class Columns {
  static algorithms = {
    greedy: Greedy,
    chronological: Chronological
  };

  constructor(container, options = {}) {
    this.container = container;
    this.options = Object.assign({
      columns: 1,
      breakpoints: null,
      column_class: 'column-js',
      algorithm: 'greedy'
    }, options);

    const algorithmClass = this.constructor.algorithms[this.options.algorithm];
    if (typeof algorithmClass === 'undefined') {
      throw new Error('Unsupported partitioning algorithm');
    }

    this.algorithm = new algorithmClass(Array.from(this.container.children) || []);

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
