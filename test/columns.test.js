const expect = require('chai').expect;
const Columns = require('../src/columns').default;

describe('Columns', function () {
  describe('default options', function () {
    before(function () {
      this.container = document.createElement('div');
      document.body.append(this.container);

      this.columns = new Columns(this.container);
    });

    it('sets columns option to 1', function () {
      expect(this.columns.count()).to.equal(1);
      expect(this.columns.options.columns).to.equal(1);
    });

    it('sets breakpoints option to null', function () {
      expect(this.columns.options.breakpoints).to.equal(null);
    });

    it('sets column class option to column-js', function () {
      expect(this.columns.options.column_class).to.equal('column-js');
    });
  });
});
