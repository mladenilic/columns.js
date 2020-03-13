import Chronological from './algorithm/chronological.js';
import Greedy from './algorithm/greedy.js';
import Item from './set/item.js';

export default class Set {
  static algorithms = {
    greedy: Greedy,
    chronological: Chronological
  };

  /**
   * @constructs Set
   *
   * @param {*[]} items
   * @param {?function} extractor
   * @param {string} algorithm
   */
  constructor(items = [], { extractor = i => i, algorithm = 'greedy' } = {}) {
    this.extractor = extractor;
    this.items = Item.from(items, this.extractor);

    const AlgorithmClass = this.constructor.algorithms[algorithm];
    if (typeof AlgorithmClass === 'undefined') {
      throw new Error('Unsupported partitioning algorithm');
    }

    this.algorithm = AlgorithmClass;
    this.subsets = [];
  }

  /**
   * Partitions items into given number of subsets
   * according to the selected algorithm
   *
   * @param {number} count
   * @return {Subset[]}
   */
  partition(count) {
    this.subsets = this.algorithm.partition(this.items, count);

    return this.subsets;
  }

  /**
   * Appends item to one of the subsets
   * according to selected algorithm and
   * returns the index of the selected subset
   *
   * @param {*} item
   * @return {number}
   */
  append(item) {
    const wrapped = new Item(item, this.extractor);

    this.items.push(wrapped);

    return this.algorithm.append(this.subsets, wrapped);
  }
}
