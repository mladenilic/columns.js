const expect = require('chai').expect;
const Chronological = require('../../src/partition/chronological').default;

describe('Chronological partitioning algorithm', function () {
  it('initializes sets property', function () {
    const algorithm = new Chronological([]);

    expect(algorithm.sets).to.eql(null);
  });

  describe('.partition', function () {
    it('partitions items correctly', function () {
      const algorithm = new Chronological([1, 2, 3, 4, 5]);
      expect(algorithm.partition(3)).to.eql([
        [1, 4],
        [2, 5],
        [3]
      ]);
    });

    context('when items array is empty', function () {
      it('returns empty array', function () {
        const algorithm = new Chronological([]);
        expect(algorithm.partition(3)).to.eql([[], [], []]);
      });
    });

    context('when set count is 0', function () {
      it('returns empty array', function () {
        const algorithm = new Chronological([1, 2, 3]);
        expect(algorithm.partition(0)).to.eql([]);
      });
    });

    context('when set count is larger than number of items', function () {
      it('returns empty array', function () {
        const algorithm = new Chronological([1, 2, 3]);
        expect(algorithm.partition(5)).to.eql([
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
    context('after input set is partitioned', function () {
      it('appends item to the next output set', function () {
        const algorithm = new Chronological([1, 2, 3, 4, 5, 6, 7]);
        expect(algorithm.partition(3)).to.eql([
          [1, 4, 7],
          [2, 5],
          [3, 6]
        ]);

        expect(algorithm.append(8)).to.equal(1);
        expect(algorithm.append(9)).to.equal(2);
        expect(algorithm.append(10)).to.equal(0);
        expect(algorithm.sets).to.eql([
          [1, 4, 7, 10],
          [2, 5, 8],
          [3, 6, 9]
        ]);
      });
    });

    context('before input set is partitioned', function () {
      it('appends item to the input set', function () {
        const algorithm = new Chronological();

        expect(algorithm.append(1)).to.equal(null);
        expect(algorithm.append(2)).to.equal(null);
        expect(algorithm.append(3)).to.equal(null);
        expect(algorithm.append(4)).to.equal(null);
        expect(algorithm.partition(2)).to.eql([
          [1, 3],
          [2, 4],
        ]);
      });
    });
  });
});
