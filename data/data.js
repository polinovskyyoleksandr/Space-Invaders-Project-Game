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

//let player;
//cells.push(player);

//movement.addEventListener('keydown', (playerMovement) => {
 //   if (playerMovement.defaultPrevented) {
   //     return;
    //}
    //switch (playerMovement.key) {
      //  case "ArrowLeft":

    //}
//})

let playerIndex = 587;
cells[playerIndex].classList.add('player');

function movePlayer(e) { 
    cells[playerIndex].classList.remove('player')
    if (e.key === 'ArrowLeft' && playerIndex > 575) {
        playerIndex -= 1;
    }
    if (e.key === 'ArrowRight' && playerIndex < cells.length - 26) {
        playerIndex += 1
    }
    cells[playerIndex].classList.add('player')
}

document.addEventListener('keydown', movePlayer)

//document.querySelector('.player')
//player.forEach(position => {
//    position.innerHTML = 'X';
//}) ?????

//ALIENS 

let aliens = [0, 2, 4, 6, 8, 10, 12, 14, 16]

function addAliens() {
    aliens.forEach(index => {
        cells[index].classList.add('alien')
    })
}

addAliens()





