const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const playerShip = document.getElementById('ship')
const playerRocket = document.getElementById('rocket')
canvas.width = 800
canvas.height = 1200
const gameCardWidth = canvas.width;
const gameCardHeight = canvas.height;
window.addEventListener('keydown', playerMove)
window.addEventListener('click', playerShoot)
let playerShipX = gameCardWidth / 2 - 40;
let playerShipY = gameCardHeight - 100;
const arrayOfPlayerRockets = []
const arrayOfWeakEnemies = []
let called = false;
let called2 = false;
const enemy = document.getElementById('enemy')
class WeakEnemy {
    constructor() {
        this.enemy = document.getElementById('enemy')
        this.enemyX = Math.floor(Math.random() * 500)
        this.enemyY = Math.floor(Math.random() * 500)
    }
    flyEnemy() {

        this.x = Math.floor(Math.random() * 700)
        this.y = Math.floor(Math.random() * 1000)
    }

    drawEnemy() {
        ctx.drawImage(this.enemy, this.enemyX, this.enemyY)

        if (this.enemyX < this.x && this.enemyY < this.y) {
            this.enemyX += 2;
            this.enemyY += 2;
        } else if (this.enemyX < this.x && this.enemyY > this.y) {
            this.enemyX += 2;
            this.enemyY -= 2;
        } else if (this.enemyX > this.x && this.enemyY < this.y) {
            this.enemyX -= 2;
            this.enemyY += 2;
        } else if (this.enemyX > this.x && this.enemyY > this.y) {
            this.enemyX -= 2;
            this.enemyY -= 2;
        }


    }

}


function drawWeakEnemies() {
    setInterval(() => {
        new WeakEnemy();
    }, 2000)
    arrayOfWeakEnemies.push(new WeakEnemy())
    called2 = true;
    return called2;

}
setTimeout(drawWeakEnemies, 1000)
class PlayerRocket {
    constructor() {
        this.playerRocket = document.getElementById('rocket')
        this.playerRocketX = playerShipX + 31;
        this.playerRocketY = playerShipY - 40;
        ctx.drawImage(this.playerRocket, this.playerRocketX, this.playerRocketY);
    }
    drawRocket() {
        ctx.drawImage(this.playerRocket, this.playerRocketX, this.playerRocketY);

        this.playerRocketY -= 12;

    }


}

function ship() {
    ctx.drawImage(playerShip, playerShipX, playerShipY);
}

function gameCard() {
    ctx.fillStyle = '#000017'
    ctx.fillRect(0, 0, gameCardWidth, gameCardHeight)

}

function playerMove(e) {
    // console.log(e.keyCode)
    var i = 0;
    if (e.keyCode === 87) {
        setInterval(function () {
            if (i >= 40) return;
            playerShipY -= 1;
            i++;

        }, 5);
    } else if (e.keyCode === 83) {
        setInterval(function () {
            if (i >= 40) return;
            playerShipY += 1;
            i++;
        }, 5);
    } else if (e.keyCode === 68) {
        setInterval(function () {
            if (i >= 40) return;
            playerShipX += 1;
            i++;
        }, 5);
    } else if (e.keyCode === 87 && e.keyCode === 68) {
        setInterval(function () {
            if (i >= 40) return;
            playerShipY -= 1;
            playerShipX += 1;
            i++;
        }, 5);

    } else if (e.keyCode === 87 && e.keyCode === 65) {
        setInterval(function () {
            if (i >= 40) return;
            playerShipY -= 1;
            playerShipX -= 1;
            i++;
        }, 5)
    } else {
        setInterval(function () {
            if (i >= 40) return;
            playerShipX -= 1;
            i++;
        }, 5);
    }
}

function playerShoot() {
    new PlayerRocket();
    arrayOfPlayerRockets.push(new PlayerRocket());
    called = true;
    return called;
}


function detectColision() {
    // Detect whether ship could touch any of GameCard edges.
    if (playerShipX <= 0) {
        playerShipX = 1;
    } else if (playerShipX >= 740) {
        playerShipX = 739
    } else if (playerShipY >= 1120) {
        playerShipY = 1121;
    }

    // Detect PlayerRocket coliision with enemy ships.


}

function fly() {
    if (called2) {
        for (let i = 0; i < arrayOfWeakEnemies.length; i++) {
            arrayOfWeakEnemies[i].flyEnemy()
        }

    }
}
setInterval(fly, 500)

function allAnimation() {
    gameCard();
    ship();
    detectColision()
    if (called) {
        for (let i = 0; i < arrayOfPlayerRockets.length; i++) {
            for (let y = 0; y < arrayOfWeakEnemies.length; y++) {
                if ((arrayOfPlayerRockets[i].playerRocketY - arrayOfWeakEnemies[y].enemyY) <= 2 && arrayOfPlayerRockets[i].playerRocketX === arrayOfWeakEnemies[y].enemyX) {


                }
            }
        }
    }

    if (called) {
        for (let i = 0; i < arrayOfPlayerRockets.length; i++) {
            arrayOfPlayerRockets[i].drawRocket()

        }
    }
    if (called2) {
        for (let i = 0; i < arrayOfWeakEnemies.length; i++) {
            arrayOfWeakEnemies[i].drawEnemy();
        }

    }
}

setInterval(allAnimation, 1000 / 60)