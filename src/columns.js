class Columns {
    constructor(container, options = {}) {
        this.container = container;
        this.options = options;

        this.options.breakpoints = this.options.breakpoints || {};
        this.options.column_class = this.options.column_class || 'column-js';

        this.items = Array.from(container.children) || [];

        this.update();
    }

    columnCount() {
        let columnCount = this.options.columns;
        let windowWidth = window.innerWidth;

        Object.keys(this.options.breakpoints).some((breakpoint) => {
            if (windowWidth < breakpoint) {
                return true;
            }

            columnCount = this.options.breakpoints[breakpoint];
        });

        return columnCount;
    }

    append(element) {
        this.items.push(element);
        this.container.children[this.count++ % this.columnCount()].append(element);

        return this;
    }

    update() {
        this.count = 0;
        let columnCount = this.columnCount();

        this.container.dataset.columns = columnCount;
        this.container.innerHTML = `<div class="${this.options.column_class}"></div>`.repeat(columnCount);

        this.items.forEach((element) => {
            this.container.children[this.count++ % columnCount].append(element);
        });

        return this;
    }

    setBreakpoints(breakpoints = {}) {
        this.options.breakpoints = breakpoints || {};
    }

    setColumns(columns) {
        this.options.columns = columns;
    }

    setColumnClass(columnClass) {
        this.options.column_class = columnClass;
    }
}

export default Columns;
