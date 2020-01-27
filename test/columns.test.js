const expect = require('chai').expect;
const Columns = require('../src/columns').default;

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
