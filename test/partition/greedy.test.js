const expect = require('chai').expect;
const Chronological = require('../../src/partition/algorithm/greedy').default;
const Item = require('../../src/partition/set/item').default;

describe('Greedy partitioning algorithm', function () {
  describe('.partition', function () {
    it('partitions items correctly', function () {
      const items = Item.from([1, 2, 3, 4, 5]);
      const subsets = Chronological.partition(items, 3);

      expect(subsets.map(s => s.lean())).to.eql([
        [5],
        [1, 4],
        [2, 3]
      ]);
    });

    context('when items array is empty', function () {
      it('returns empty subsets', function () {
        const subsets = Chronological.partition(Item.from(), 3);

        expect(subsets.map(s => s.lean())).to.eql([[], [], []]);
      });
    });

    context('when set count is 0', function () {
      it('returns empty array', function () {
        expect(Chronological.partition(Item.from([1, 2, 3]), 0)).to.eql([]);
      });
    });

    context('when set count is larger than number of items', function () {
      it('array of subsets', function () {
        const items = Item.from([1, 2, 3]);
        const subsets = Chronological.partition(items, 5);

        expect(subsets.map(s => s.lean())).to.eql([
          [3],
          [2],
          [1],
          [],
          []
        ]);
      });
    });
  });

  describe('.append', function () {
    it('appends item to the next output set', function () {
      const items = Item.from([4, 2, 4, 5, 10, 7, 7]);
      const subsets = Chronological.partition(items, 3);

      expect(subsets.map(s => s.lean())).to.eql([
        [4, 10],
        [5, 7],
        [4, 2, 7]
      ]);

      expect(Chronological.append(subsets, new Item(8))).to.equal(1);
      expect(Chronological.append(subsets, new Item(9))).to.equal(2);
      expect(Chronological.append(subsets, new Item(10))).to.equal(0);

      expect(subsets.map(s => s.lean())).to.eql([
        [4, 10, 10],
        [5, 7, 8],
        [4, 2, 7, 9]
      ]);
    });

    context('when subsets are empty', function () {
      it('should throw', function () {
        expect(() => Chronological.append(null, new Item(8))).to.throw();
        expect(() => Chronological.append([], new Item(8))).to.throw();
      });
    });
  });
});
