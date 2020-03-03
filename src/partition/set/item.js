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
