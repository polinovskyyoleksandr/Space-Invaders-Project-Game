//console.log(3+2)

//GRID CREATION

const cells = [];
const width = 25;
const numOfCells = width * width;

const grid = document.querySelector('.grid');

const createGrid = () => {
    for (let i=0; i < numOfCells; i++) {
        const cell = document.createElement('div');
        cells.push(cell);
        grid.appendChild(cell);
    }
}

createGrid()


//PLAYER'S MOVEMENT

const player = 'X';
cells.push(player);

const leftMovement = addEventListener


