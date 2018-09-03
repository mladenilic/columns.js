import Columns from '/src/columns.js';

let rand = (min, max) => {
  return min + Math.floor(Math.random() * Math.floor(max));
}

let wrapper = document.getElementById('columns-wrapper');
let grid = new Columns(wrapper, {
    columns: 3
});

document.getElementById('append').addEventListener('click', function () {
    for (let i = 0; i < 5; i++) {
        let element = document.createElement('div');

        element.innerHTML = `<img src="https://picsum.photos/${rand(200, 400)}/${50, 600}/?random">`;

        grid.append(element);
    }
});

console.log(grid);
