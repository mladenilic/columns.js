const expect = require('chai').expect;
const Set = require('../../src/partition/set').default;
const Chronological = require('../../src/partition/algorithm/chronological').default;
const Greedy = require('../../src/partition/algorithm/greedy').default;

describe('Set', function () {
  describe('constructor', function () {
    context('when algorithm option is not provided', function () {
      it('should initialize partitioning algorithm', function () {
        const set = new Set();

        expect(set.algorithm).to.equal(Greedy);
      });
    });

    context('when algorithm option is provided', function () {
      it('should initialize partitioning algorithm', function () {
        const set = new Set([], { algorithm: 'chronological' });

        expect(set.algorithm).to.equal(Chronological);
      });
    });

    context('when unsupported algorithm option is provided', function () {
      it('should throw', function () {
        expect(() => new Set([], { algorithm: 'foo' })).to.throw();
      });
    });

    context('when initial set is not provided', function () {
      it('items should return empty array', function () {
        const set = new Set();

        expect(set.items).to.eql([]);
      });
    });

    context('when initial set is provided', function () {
      it('items should return initial set', function () {
        const set = new Set([1, 2, 3]);

        expect(set.items.map(i => i.lean())).to.eql([1, 2, 3]);
      });
    });
  });

  describe('.partition', function () {
    before(function () {
      this.set = new Set([1, 2, 3], { algorithm: 'chronological' });
    });

    it('should partition initial set', function () {
      expect(this.set.partition(3).map(i => i.lean())).to.eql([[1], [2], [3]]);
    });
  });

  describe('.append', function () {
    before(function () {
      this.set = new Set([1, 2, 3], { algorithm: 'chronological' });
    });

    it('should correctly append items to the subsets', function () {
      expect(this.set.partition(3).map(i => i.lean())).to.eql([[1], [2], [3]]);

      this.set.append(2);
      this.set.append(3);

      expect(this.set.items.map(i => i.lean())).to.eql([1, 2, 3, 2, 3]);
      expect(this.set.subsets.map(i => i.lean())).to.eql([
        [1, 2],
        [2, 3],
        [3]
      ]);
    });
  });
});
