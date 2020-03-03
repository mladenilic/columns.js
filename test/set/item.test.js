const expect = require('chai').expect;
const Item = require('../../src/partition/set/item').default;

describe('Item', function () {
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
