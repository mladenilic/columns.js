const expect = require('chai').expect;
const Columns = require('../../src/columns').default;

describe('Columns', function () {
  describe('.setOptions', function () {
    context('when no options are passed via constructor', function () {
      before(function () {
        this.container = document.createElement('div');
        document.body.append(this.container);

        this.columns = new Columns(this.container);
      });

      it('sets options correctly', function () {
        expect(this.columns.options.columns).to.equal(1);
        expect(this.columns.options.breakpoints).to.equal(null);
        expect(this.columns.options.column_class).to.equal('column-js');

        this.columns.setOptions({
          columns: 3,
          breakpoints: { 320: 4, 640: 5 },
          column_class: 'column'
        });

        expect(this.columns.options.columns).to.equal(3);
        expect(this.columns.options.breakpoints).to.eql({ 320: 4, 640: 5 });
        expect(this.columns.options.column_class).to.equal('column');
      });
    });

    context('when options are passed via constructor', function () {
      before(function () {
        this.container = document.createElement('div');
        document.body.append(this.container);

        this.columns = new Columns(this.container, {
          columns: 2,
          breakpoints: { 220: 3, 440: 4 },
          column_class: 'column-class'
        });
      });

      it('sets options correctly', function () {
        expect(this.columns.options.columns).to.equal(2);
        expect(this.columns.options.breakpoints).to.eql({ 220: 3, 440: 4 });
        expect(this.columns.options.column_class).to.equal('column-class');

        this.columns.setOptions({
          columns: 3,
          breakpoints: { 320: 4, 640: 5 },
          column_class: 'column'
        });

        expect(this.columns.options.columns).to.equal(3);
        expect(this.columns.options.breakpoints).to.eql({ 320: 4, 640: 5 });
        expect(this.columns.options.column_class).to.equal('column');
      });
    });
  });
});
