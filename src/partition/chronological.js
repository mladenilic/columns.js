export default class Chronological {
  constructor() {
    this.columns = [];
    this.columnCount = 1;
  }

  partition(items, columnCount) {
    this.columnCount = columnCount;
    this.columns = [...Array(this.columnCount)].map(_ => []);
    if (this.columnCount <= 0) {
      return;
    }

    items.forEach((item, index) => {
      this.columns[index % this.columnCount].push(item);
    });
  }

  append(item) {
    const length = this.columns.reduce((acc, cur) => acc + cur.length, 0);
    const column = length % this.columnCount;

    this.columns[column].push(item);

    return column;
  }
}
