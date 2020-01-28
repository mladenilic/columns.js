const expect = require('chai').expect;
const Columns = require('../src/columns').default;

describe('Columns', function () {
  describe('.append', function () {
    context('when wrapper element is not empty', function () {
      before(function () {
        this.container = document.createElement('div');

        this.container.append(document.createElement('div'));
        this.container.append(document.createElement('div'));
        this.container.append(document.createElement('div'));

        document.body.append(this.container);

        this.columns = new Columns(this.container, {
          columns: 2
        });
      });

      it('appends elements to column', function () {
        expect(this.container.children.length).to.equal(2);
        expect(this.container.children[0].children.length).to.equal(2);
        expect(this.container.children[1].children.length).to.equal(1);

        this.columns.append(document.createElement('div'));
        this.columns.append(document.createElement('div'));

        expect(this.container.children.length).to.equal(2);
        expect(this.container.children[0].children.length).to.equal(3);
        expect(this.container.children[1].children.length).to.equal(2);
      });
    });

    context('when wrapper element is empty', function () {
      before(function () {
        this.container = document.createElement('div');
        document.body.append(this.container);

        this.columns = new Columns(this.container, {
          columns: 2
        });
      });

      it('appends elements to column', function () {
        expect(this.container.children.length).to.equal(2);
        expect(this.container.children[0].children.length).to.equal(0);
        expect(this.container.children[1].children.length).to.equal(0);

        this.columns.append(document.createElement('div'));
        this.columns.append(document.createElement('div'));
        this.columns.append(document.createElement('div'));

        expect(this.container.children.length).to.equal(2);
        expect(this.container.children[0].children.length).to.equal(2);
        expect(this.container.children[1].children.length).to.equal(1);
      });
    });
  });
});
