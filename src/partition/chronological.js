export default class Chronological {
  constructor() {
    this.sets = [];
  }

  partition(items, setCount) {
    this.sets = [...Array(setCount)].map(_ => []);
    if (setCount <= 0) {
      return;
    }

    items.forEach((item, index) => {
      this.sets[index % setCount].push(item);
    });
  }

  append(item) {
    const length = this.sets.reduce((acc, cur) => acc + cur.length, 0);
    const set = length % this.sets.length;

    this.sets[set].push(item);

    return set;
  }
}
