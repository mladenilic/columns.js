import scss from '../scss/styles.scss';
import Columns from '../../src/columns.js';

let rand = (min, max) => {
  return min + Math.floor(Math.random() * Math.floor(max));
}

let wrapper = document.getElementById('columns-wrapper');
let grid = new Columns(wrapper, {
    columns: 3
});

document.getElementById('append').addEventListener('click', function () {
    for (let i = 0; i < 10; i++) {
        let element = document.createElement('div');
        element.classList.add('grid-item');

        element.innerHTML = `<img src="https://picsum.photos/${rand(300, 400)}/${rand(300, 400)}/?random">`;

        grid.append(element);
    }
});
