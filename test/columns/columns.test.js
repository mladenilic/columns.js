const expect = require('chai').expect;
const Columns = require('../../src/columns').default;

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

  describe('acceptance test', function () {
    before(function () {
      this.container = document.createElement('div');

      this.container.append(document.createElement('div'));
      this.container.append(document.createElement('div'));
      this.container.append(document.createElement('div'));
      this.container.append(document.createElement('div'));

      document.body.append(this.container);

      this.columns = new Columns(this.container, {
        columns: 3,
        column_class: 'test-class',
        algorithm: 'chronological'
      });
    });

    it('groups partitions container children into columns', function () {
      expect(this.container.children.length).to.equal(3);
      expect(this.container.children[0].children.length).to.equal(2);
      expect(this.container.children[1].children.length).to.equal(1);
      expect(this.container.children[2].children.length).to.equal(1);
    });

    it('adds data attribute to the container', function () {
      expect(this.container.dataset.columns).to.equal('3');
    });

    it('adds column class to each column element', function () {
      Array.from(this.container.children).forEach(column => {
        expect(column.classList.contains('test-class')).to.equal(true);
      });
    });

    it('append renders new elements into existing columns', function () {
      this.columns.append(document.createElement('div'));
      this.columns.append(document.createElement('div'));

      expect(this.container.children[0].children.length).to.equal(2);
      expect(this.container.children[1].children.length).to.equal(2);
      expect(this.container.children[2].children.length).to.equal(2);
    });
  });
});
