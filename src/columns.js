export default class {
    constructor(container, options = {}) {
        this.container = container;
        this.options = options;

        this.options.breakpoints = this.options.breakpoints || {};

        this.reset();
    }

    initColumns () {
        this.container.innerHTML = '<div class="column-js" style="flex-basis"></div>'.repeat(this.columnCount());
    }

    columnCount () {
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

    append (element) {
        this.container.children[this.count++ % this.columnCount()].append(element);

        return this;
    }

    reset () {
        this.count = 0;
        this.initColumns();

        return this;
    };
}
