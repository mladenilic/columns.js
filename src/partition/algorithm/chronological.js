import Subset from '../set/subset.js';

export default class Chronological {

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

    if (count > 0) {
      items.forEach((item, index) => subsets[index % count].append(item));
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

    const count = subsets.reduce((a, c) => a + c.count(), 0);
    const index = count % subsets.length;

    subsets[index].append(item);

    return index;
  }
}
