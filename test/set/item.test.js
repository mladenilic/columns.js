const expect = require('chai').expect;
const Item = require('../../src/partition/set/item').default;

describe('Item', function () {
  describe('#from', function () {
    context('when no items are provided', function () {
      it('constructs empty array', function () {
        expect(Item.from()).to.eql([]);
      });
    });

    context('when items are provided', function () {
      it('constructs correct array', function () {
        const items = Item.from(['foo', 2, 0, null]);

        expect(items.length).to.equal(4);
        expect(items.map(i => i.lean())).to.eql(['foo', 2, 0, null]);
      });
    });
  });

  describe('.lean', function () {
    before(function () {
      this.item = new Item('Foo');
    });

    it('returns correct value', function () {
      expect(this.item.lean()).to.equal('Foo');
    });
  });

  describe('.value', function () {
    context('when no extractor is provided', function () {
      before(function () {
        this.item = new Item('Foo');
      });

      it('returns correct value', function () {
        expect(this.item.value).to.equal('Foo');
      });
    });

    context('when extractor is provided', function () {
      before(function () {
        this.item = new Item('Foo', (i) => i[0]);
      });

      it('returns correct value', function () {
        expect(this.item.value).to.equal('F');
      });
    });
  });
});
