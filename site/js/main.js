import scss from '../scss/styles.scss';
import Columns from '../../src/columns.js';

const rand = (min, max) => {
  return min + Math.floor(Math.random() * Math.floor(max));
};

const debounce = (callback, wait) => {
    let timeout;

    return () => {
        var context = this, args = arguments;

        clearTimeout(timeout);
        timeout = setTimeout(() => {
            timeout = null;
            callback.apply(context, args);
        }, wait);
    };
};

document.addEventListener('DOMContentLoaded', () => {
    let breakpoints = {
        480: 3,
        840: 4,
    };
    let wrapper = document.getElementById('columns-wrapper');
    let grid = new Columns(wrapper, {
        columns: 3
    });

    document.getElementById('responsive-toggle').addEventListener('change', (e) => {
        grid.setColumns(e.target.checked ? 2 : 3);
        grid.setBreakpoints(e.target.checked ? breakpoints : false);
        grid.update();
    });

    window.addEventListener('resize', debounce(() => {
        grid.update();
    }, 50));

    document.getElementById('append').addEventListener('click', () => {
        for (let i = 0; i < 9; i++) {
            let element = document.createElement('div');
            element.classList.add('grid-item');

            element.innerHTML = `<img src="https://picsum.photos/${rand(300, 400)}/${rand(300, 400)}/?random">`;

            grid.append(element);
        }
    });
});
