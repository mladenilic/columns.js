export default class Chronological {
  constructor(set) {
    this.set = set;
    this.sets = null;
  }

  partition(count) {
    this.sets = [...Array(count)].map(_ => []);

    if (count > 0) {
      this.set.forEach((item, index) => {
        this.sets[index % count].push(item);
      });
    }

    return this.sets;
  }

  append(item) {
    this.set.push(item);
    if (this.sets === null) {
      return null;
    }

    const length = this.sets.reduce((acc, cur) => acc + cur.length, 0);
    const set = length % this.sets.length;

    this.sets[set].push(item);

    return set;
  }
}
