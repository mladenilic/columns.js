import Subset from '../set/subset.js';

export default class Greedy {
  static partition(items, count) {
    const subsets = [...Array(count)].map(_ => new Subset());

    if (count > 0) {
      [...items].sort((a, b) => b.value - a.value)
        .forEach((item, index) => item._column = index % count);

      items.forEach(item => subsets[item._column].append(item));
    }

    return subsets;
  }

  static append(subsets, item) {
    if (subsets === null) {
      return null;
    }

    const min = subsets.reduce((min, c, index) => {
      const sum = c.sum();

      return min.sum < sum ? min : { index, sum };
    }, { index: 0, sum: subsets[0].sum() });

    subsets[min.index].append(item);

    return min.index;
  }
}
