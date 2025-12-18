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

let aliens = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 51];
let direction = 1

function addAliens() {
    aliens.forEach(index => {
        cells[index].classList.add('alien')
    });
}

function removeAliens() {
    aliens.forEach(index => {
        cells[index].classList.remove('alien')
    });
}

addAliens()

function moveAliens() {
    removeAliens()
if (direction === 1) {
    if (aliens[aliens.length - 1] % width === width - 1) {
    moveDown();
    setTimeout(moveLeft, 200)
    } else {
        moveRight();
    }
}
else if (direction === -1) {
    if (aliens[0] % width === 0) {
        moveDown();
        setTimeout(moveRight, 200)
    } else {
        moveLeft()
    }
}
}

function moveRight() {
    removeAliens()
    aliens.forEach((alien, i) => {
        direction = 1
        return aliens[i] = alien + direction
    })
    addAliens()
} 

function moveLeft() {
    removeAliens()
    aliens.forEach((alien, i) => {
        direction = -1
        return aliens[i] = alien + direction
    })
    addAliens()
}

function moveDown() {
    removeAliens()
    aliens.forEach((alien, i) => {
        return aliens[i] = alien + width
    })
    addAliens()
}


setInterval(moveAliens, 500)


//SHOOTING

function shoot () {
    let bulletIndex = playerIndex;
    function moveBullet() {
        cells[bulletIndex].classList.remove('bullet')
        bulletIndex -= width
        // COLLISION
    if (cells[bulletIndex].classList.contains('alien')) {
        removeAliens();
        cells[bulletIndex].classList.remove('bullet');
        let hit = aliens.indexOf(bulletIndex);
        aliens.splice(hit, 1);
        clearInterval(bulletTimer);
        return;
    }
    cells[bulletIndex].classList.add('bullet')
    }
    let bulletTimer = setInterval(moveBullet, 100)
}

document.addEventListener('keydown', shootingKey)

function shootingKey(e) {
    if (e.keyCode === 32 ) {
        shoot()
    }
}

