export default class Greedy {
  constructor(set = []) {

    /**
     * Map each item to an object to allow storing metadata
     */
    this.set = set.map(data => ({ data }));
    this.sets = null;
  }

  partition(count) {
    this.sets = [...Array(count)].map(_ => []);

    if (count > 0) {
      this.set.forEach(item => item.height = item.data.getBoundingClientRect().height);
      [...this.set].sort((a, b) => b.height - a.height)
        .forEach((item, index) => item.column = index % count);

      this.set.forEach(item => this.sets[item.column].push(item.data));
    }

    return this.sets;
  }

  append(item) {
    this.set.push({ data: item });
    if (this.sets === null) {
      return null;
    }

    // TODO: Implement greedy appending
    this.sets[0].push(item);

    return 0;
  }
}
