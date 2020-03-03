const expect = require('chai').expect;
const Columns = require('../../src/columns').default;

describe('Columns', function () {
  describe('.count', function () {
    context('when no breakpoints are defined', function () {
      before(function () {
        this.container = document.createElement('div');
        document.body.append(this.container);

        this.columns = new Columns(this.container, {
          columns: 3
        });
      });

      it('returns correct number of columns', function () {
        expect(this.columns.count()).to.equal(3);
      });
    });

    context('when breakpoints are defined', function () {
      before(function () {
        this.container = document.createElement('div');
        document.body.append(this.container);

        this.columns = new Columns(this.container, {
          columns: 3,
          breakpoints: {
            320: 4,
            600: 5
          }
        });
      });

      context('when screen size is 319px', function () {
        before(function () {
          window.innerWidth = 319;
        });

        it('returns correct number of columns', function () {
          expect(this.columns.count()).to.equal(3);
        });
      });

      context('when screen size is 320px', function () {
        before(function () {
          window.innerWidth = 320;
        });

        it('returns correct number of columns', function () {
          expect(this.columns.count()).to.equal(4);
        });
      });

      context('when screen size is 599px', function () {
        before(function () {
          window.innerWidth = 599;
        });

        it('returns correct number of columns', function () {
          expect(this.columns.count()).to.equal(4);
        });
      });

      context('when screen size is 600px', function () {
        before(function () {
          window.innerWidth = 600;
        });

        it('returns correct number of columns', function () {
          expect(this.columns.count()).to.equal(5);
        });
      });
    });
  });
});
