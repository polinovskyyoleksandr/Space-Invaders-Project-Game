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

//document.addEventListener('keydown', movePlayer)

//document.querySelector('.player')
//player.forEach(position => {
//    position.innerHTML = 'X';
//}) ?????

//ALIENS 

let aliens = [ 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48];
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
collisionPlayerAlien()
}

let alienTimer;


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


//setInterval(moveAliens, 500)


//SHOOTING

function shoot () {
    let bulletIndex = playerIndex;
    function moveBullet() {
        cells[bulletIndex].classList.remove('bullet')
        bulletIndex -= width
        if (bulletIndex < 0) {
            clearInterval(bulletTimer)
            return
        }
        // COLLISION
    if (cells[bulletIndex].classList.contains('alien')) {
        cells[bulletIndex].classList.remove('bullet');
        cells[bulletIndex].classList.remove('alien');
        const hit = aliens.indexOf(bulletIndex);
        aliens.splice(hit, 1);
        // SCORE
        score += 500;
        scoreDisplay.textContent = score;
        clearInterval(bulletTimer);
        return;
    }
    cells[bulletIndex].classList.add('bullet')
    }
    win();
    bulletTimer = setInterval(moveBullet, 100)
}
let bulletTimer;
//document.addEventListener('keydown', shootingKey)

function shootingKey(e) {
    if (e.keyCode === 32 ) {
        shoot()
    }
}

// SCOREBOARD
let score = 0;
const scoreDisplay = document.querySelector('#scoreboard')

// START AND RESTART BUTTON

let gameStart = false;

function startGame() {
    gameStart = true;
    alienTimer = setInterval(moveAliens, 500)
    setInterval(bombDropping, 500)
    document.addEventListener('keydown', movePlayer)
    document.addEventListener('keydown', shootingKey)
    document.querySelector('.start').disabled = true;
}

const startBtn = document.querySelector('.start')
startBtn.addEventListener('click', startGame)


function restartGame () {
    clearInterval(alienTimer)
    clearInterval(bulletTimer)
    clearInterval(alienBulletTimer)
    cells.forEach((cell) => {
        cell.classList.remove('player', 'bullet', 'alien')
    })
    aliens = [ 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 28, 30, 32, 34, 36, 38, 40, 42, 44, 46, 48];
    direction = 1
    addAliens()
    playerIndex = 587;
    cells[playerIndex].classList.add('player')
    alienTimer = setInterval(moveAliens, 500)
    document.querySelector('.restart').disabled = true;
    score = 0;
    scoreDisplay.textContent = score
    document.addEventListener('keydown', movePlayer)
    document.addEventListener('keydown', shootingKey)
}

const restartBtn = document.querySelector('.restart')
restartBtn.addEventListener('click', restartGame)

function collisionPlayerAlien() {
    aliens.forEach((alienIndex) => {
        if (alienIndex === playerIndex) {
            gameOver()
        }
    })
}

// WINLOSE CONDITIONS

function gameOver() {
    clearInterval(bulletTimer)
    clearInterval(alienTimer)
    clearInterval(alienBulletTimer)
    scoreDisplay.textContent = 'GAME OVER'

    document.removeEventListener('keydown', movePlayer)
    document.removeEventListener('keydown', shootingKey)
}

function win() {
    if (aliens.length === 0) {
        clearInterval(bulletTimer)
        clearInterval(alienTimer)
        scoreDisplay.textContent = 'YOU WIN!'
        return;
    }
}

let alienBulletTimer
let alienBullet

// ALIEN BOMBS

function bombDropping() {
    let alienBullet = aliens[Math.floor(Math.random() * aliens.length)]
    alienBulletTimer = setInterval(() => {
        cells[alienBullet].classList.remove('alienbullet')
        alienBullet += width
        if (alienBullet === playerIndex) {
            cells[alienBullet].classList.remove('alienbullet')
            gameOver()
            clearInterval(alienBulletTimer)
            return;
        }
        cells[alienBullet].classList.add('alienbullet')
    }, 150)
}

//setInterval(bombDropping, 500)