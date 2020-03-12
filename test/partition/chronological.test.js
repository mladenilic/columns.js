const expect = require('chai').expect;
const Chronological = require('../../src/partition/algorithm/chronological').default;
const Item = require('../../src/partition/set/item').default;

describe('Chronological partitioning algorithm', function () {
  describe('.partition', function () {
    it('partitions items correctly', function () {
      const items = Item.from([1, 2, 3, 4, 5]);
      const subsets = Chronological.partition(items, 3);

      expect(subsets.map(s => s.lean())).to.eql([
        [1, 4],
        [2, 5],
        [3]
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
          [1],
          [2],
          [3],
          [],
          []
        ]);
      });
    });
  });

  describe('.append', function () {
    it('appends item to the next output set', function () {
      const items = Item.from([1, 2, 3, 4, 5, 6, 7]);
      const subsets = Chronological.partition(items, 3);

      expect(subsets.map(s => s.lean())).to.eql([
        [1, 4, 7],
        [2, 5],
        [3, 6]
      ]);

      expect(Chronological.append(subsets, new Item(8))).to.equal(1);
      expect(Chronological.append(subsets, new Item(9))).to.equal(2);
      expect(Chronological.append(subsets, new Item(10))).to.equal(0);

      expect(subsets.map(s => s.lean())).to.eql([
        [1, 4, 7, 10],
        [2, 5, 8],
        [3, 6, 9]
      ]);
    });
  });
});
