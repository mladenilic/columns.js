import Item from './item.js';

export default class Subset {

  /**
   * Subset object represents a single partition
   *
   * @constructs Subset
   *
   * @param {Item[]} items
   */
  constructor(items = []) {
    this.items = items;
  }

  /**
   * Returns sum of item values
   *
   * @return {number}
   */
  sum() {
    return this.items.reduce((a, c) => a + c.value, 0);
  }

  /**
   * Returns number of set items
   *
   * @return {number}
   */
  count() {
    return this.items.length;
  }

  /**
   * Appends new item
   *
   * @return {this}
   */
  append(item) {
    if (!(item instanceof Item)) {
      throw new Error('Parameter must me of type \'Item\'');
    }

    this.items.push(item);

    return this;
  }

  /**
   * Returns lean items array
   *
   * @return {*[]}
   */
  lean() {
    return this.items.map(i => i.lean());
  }
}
