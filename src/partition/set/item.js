export default class Item {

  /**
   * @constructs Item
   *
   * @param {*} item
   * @param {function} extractor
   */
  constructor(item, extractor = i => i) {
    this.item = item;
    this.extractor = extractor;
  }

  /**
   * Construct array of items
   *
   * @param {*[]} items
   * @param {function} extractor

   * @return {Item[]}
   */
  static from(items = [], extractor = i => i) {
    return items.map(i => new this(i, extractor));
  }

  /**
   * Extract set item value used for partitioning
   *
   * @return {number}
   */
  get value() {
    return this.extractor(this.item);
  }

  /**
   * Extract set item value used for partitioning
   *
   * @return {*}
   */
  lean() {
    return this.item;
  }
}
