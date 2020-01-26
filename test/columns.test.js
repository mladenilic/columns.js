const expect = require('chai').expect;
const Columns = require('../src/columns').default;

describe('Columns js', function () {
  before(function () {
    this.container = document.getElementById('grid');
    this.columns = new Columns(this.container, {
      columns: 3
    });
  });

  it('#columnCount', function () {
    expect(this.columns.columnCount()).to.be.equal(3);
  });
});
