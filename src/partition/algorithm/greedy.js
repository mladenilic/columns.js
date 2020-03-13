import Subset from '../set/subset.js';

export default class Greedy {

  /**
   * Partition items into subsets
   *
   * @static
   *
   * @param {Item[]} items
   * @param {number} count
   * @return {Subset[]}
   */
  static partition(items, count) {
    const subsets = [...Array(count)].map(_ => new Subset());
    const sums = [...Array(count)].map(_ => 0);

    if (count > 0) {
      [...items].sort((a, b) => b.value - a.value)
        .forEach((item) => {
          const min = sums.reduce((min, sum, index) => sums[min] <= sum ? min : index, 0);

          sums[min] += item.value;
          item._subset = min;
        });

      items.forEach(item => subsets[item._subset].append(item));
    }

    return subsets;
  }

  /**
   * Append item to one of the subsets
   *
   * @static
   *
   * @param {Subset[]} subsets
   * @param {Item} item
   * @return {number}
   */
  static append(subsets, item) {
    if (!Array.isArray(subsets) || !subsets.length) {
      throw new Error('Cannot append without subsets');
    }

    const min = subsets.reduce((min, subset, index) => subsets[min].sum <= subset.sum ? min : index, 0);
    subsets[min].append(item);

    return min;
  }
}
