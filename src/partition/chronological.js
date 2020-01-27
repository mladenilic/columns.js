export default class Chronological {
  constructor() {
    this.columns = [];
    this.columnCount = 1;

    this.lastIndex = 0;
  }

  partition(items, columnCount) {
    this.columns = [];
    this.columnCount = columnCount;

    items.forEach((item, index) => {
      this.lastIndex = index % this.columnCount;

      this.columns[this.lastIndex] = this.columns[this.lastIndex] || [];
      this.columns[this.lastIndex].push(item);
    });
  }

  append(item) {
    const length = this.columns.reduce((acc, cur) => acc + cur.length, 0);

    this.lastIndex = length % this.columnCount;
    this.columns[this.lastIndex].push(item);
  }
}
