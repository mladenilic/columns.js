export default class {
    constructor(container, options = {}) {
        this.container = container;
        this.options = options;

        this.options.breakpoints = this.options.breakpoints || {};

        this.items = Array.from(container.children) || [];

        this.reset();
    }

    initColumns() {
        let columnCount = this.columnCount();

        this.container.dataset.columns = columnCount;
        this.container.innerHTML = '<div class="column-js"></div>'.repeat(columnCount);

        this.items.forEach((element) => {
            this.container.children[this.count++ % columnCount].append(element);
        });
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

    reset() {
        this.count = 0;
        this.initColumns();

        return this;
    };
}
