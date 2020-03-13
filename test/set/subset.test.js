const expect = require('chai').expect;
const Item = require('../../src/partition/set/item').default;
const Subset = require('../../src/partition/set/subset').default;

describe('Subset', function () {
  describe('.sum', function () {
    context('when subset is empty', function () {
      before(function () {
        this.subset = new Subset();
      });

      it('returns 0', function () {
        expect(this.subset.sum).to.equal(0);
      });
    });

    context('when subset is not empty', function () {
      before(function () {
        this.subset = new Subset(Item.from([1, 2, 3, 4]));
      });

      it('returns correct sum', function () {
        expect(this.subset.sum).to.equal(10);
      });
    });
  });

  describe('.count', function () {
    context('when subset is empty', function () {
      before(function () {
        this.subset = new Subset();
      });

      it('returns 0', function () {
        expect(this.subset.count()).to.equal(0);
      });
    });

    context('when subset is not empty', function () {
      before(function () {
        this.subset = new Subset(Item.from([1, 2, 3, 4]));
      });

      it('returns correct count', function () {
        expect(this.subset.count()).to.equal(4);
      });
    });
  });

  describe('.append', function () {
    before(function () {
      this.subset = new Subset(Item.from([1, 2, 3, 4]));
    });

    it('correctly appends items', function () {
      expect(this.subset.count()).to.equal(4);

      this.subset.append(new Item(2));
      this.subset.append(new Item(3));
      this.subset.append(new Item(4));

      expect(this.subset.lean()).to.eql([1, 2, 3, 4, 2, 3, 4]);
    });

    context('when appending non item', function () {
      before(function () {
        this.subset = new Subset();
      });

      it('throws an error', function () {
        expect(() => this.subset.append(4)).to.throw(Error);
        expect(() => this.subset.append('foo')).to.throw(Error);
      });
    });
  });

  describe('.lean', function () {
    context('when subset is empty', function () {
      before(function () {
        this.subset = new Subset();
      });

      it('returns empty array', function () {
        expect(this.subset.lean()).to.eql([]);
      });
    });

    context('when subset is not empty', function () {
      before(function () {
        this.subset = new Subset(Item.from([1, 2, 3, 4]));
      });

      it('returns array of items', function () {
        expect(this.subset.lean()).to.eql([1, 2, 3, 4]);
      });
    });
  });
});
