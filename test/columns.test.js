const expect = require('chai').expect;
const Columns = require('../src/columns').default;

describe('Columns js', function () {
  before(function () {
    this.container = document.getElementById('grid');
    this.columns = new Columns(this.container, {
      columns: 3
    });
  });

  describe('#columnCount', function () {
    context('when window width is 400px', function () {
      before(function () {
        this.columns = new Columns(this.container, {
          columns: 3,
          breakpoints: {
            320: 4,
            600: 5
          }
        });
      });

      it('returns correct number of columns', function () {
        window.innerWidth = 319;
        expect(this.columns.columnCount()).to.be.equal(3);

        window.innerWidth = 320;
        expect(this.columns.columnCount()).to.be.equal(4);

        window.innerWidth = 599;
        expect(this.columns.columnCount()).to.be.equal(4);

        window.innerWidth = 600;
        expect(this.columns.columnCount()).to.be.equal(5);
      });
    });

    it('returns correct number of columns', function () {
      expect(this.columns.columnCount()).to.be.equal(3);
    });
  });
});
