const canvas = document.getElementById('background')
const ctx = canvas.getContext('2d')
const playerShip = document.getElementById('ship')
const playerRocket = document.getElementById('rocket')
const btnStart = document.querySelector('#start-game button')
const btnStartAgain = document.querySelector('#divEnd button')
btnStartAgain.addEventListener('click', el)
const divStart = document.getElementById('start-game')
btnStart.addEventListener('click', show)
const divEnd = document.getElementById('divEnd')
const highscore = document.getElementById('highscore')
let game = null;
let timer = 0;
const background = document.getElementById('backg')
let drawningY = 0;
const bossPicture = document.getElementById('boss2')
const bossArray = []

function clock() {
    timer++;
    return timer;
}

function el() {
    game = true;
    if (game) {
        divEnd.style.opacity = "0"
        // setInterval(clock, 1000)
        gameStart()
    }
}

function show() {

    game = true;
    if (game) {
        divStart.style.opacity = "0"
        // setInterval(clock, 1000)
        gameStart()
    }

}
let bs;

function gameStart() {
    score = 0;
    scoreSpan.innerHTML = `Your score: ${score}`
    armorShip = 20;
    timer = 0;
    bs = new Boss()
    bossArray.push(bs)
    armorSpan.innerHTML = `Your armor: ${armorShip}`
    arrayOfIntervals.push(setInterval(allAnimation, 1000 / 60),
        setInterval(fly, 500),
        setInterval(flyBetterEnemy, 500),
        // setInterval(enemyShoot, 2000),
        // setInterval(betterEnemyShoot, 3000),
        // setInterval(simShoot, 2000),
        // setInterval(drawWeakEnemies, 2000),
        // setInterval(createBetterEnemies, 4000),
        // setInterval(createSmallAsteroid, 5000),
        // setInterval(createSim, 3000),
        setInterval(clock, 1000),
        setInterval(flyTo, 500),
        setInterval(bossShoot, 1000))
    // startGameAgain()
    // bossArray.splice(0, bossArray.length)
}
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
const arrayOfWeakEnemiesRockets = []
const arrayOfBetterEnemiesRockets = []
const arrayOfBetterEnemies = []
const arrayOfSims = []
const arrayOfSimRockets = []
const arrayOfSmallAsteroids = []
const arrayOfIntervals = []
const arrayOfBossRockets = []
let called = false;
let called2 = false;
let called3 = false;
let called4 = false;
let called5 = false;
let called6 = false;
let called7 = false;
let scoreSpan = document.getElementById('score')
let score = 0;
scoreSpan.innerHTML = `Your score : ${score}`
const armorSpan = document.getElementById('armor')
let armorShip;
armorSpan.innerHTML = `Your armor: ${armorShip}`




class WeakEnemyRocket {
    constructor() {
        this.enemyRocket = document.getElementById('enRocket')
        this.enemyRocketY;
        this.enemyRocketX;
    }
    drawEnemyRocket() {
        ctx.drawImage(this.enemyRocket, this.enemyRocketX, this.enemyRocketY)
        this.enemyRocketY += 8;
    }
}
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
class BetterEnemy {
    constructor() {
        this.betEnemy = document.getElementById('betterEnemy');
        this.betEnemyX = Math.floor(Math.random() * 500)
        this.betEnemyY = Math.floor(Math.random() * 500)

    }
    flyBetterEnemy() {
        this.x = Math.floor(Math.random() * 700)
        this.y = Math.floor(Math.random() * 1000)
    }
    drawBetterEnemy() {
        ctx.drawImage(this.betEnemy, this.betEnemyX, this.betEnemyY)
        if (this.betEnemyX < this.x && this.betEnemyY < this.y) {
            this.betEnemyX += 2;
            this.betEnemyY += 2;
        } else if (this.betEnemyX < this.x && this.betEnemyY > this.y) {
            this.betEnemyX += 2;
            this.betEnemyY -= 2;
        } else if (this.betEnemyX > this.x && this.betEnemyY < this.y) {
            this.betEnemyX -= 2;
            this.betEnemyY += 2;
        } else if (this.betEnemyX > this.x && this.betEnemyY > this.y) {
            this.betEnemyX -= 2;
            this.betEnemyY -= 2;
        }

    }
}
class Sim {
    constructor() {
        this.enemySim = document.getElementById('sim');
        this.simX = Math.floor(Math.random() * 500)
        this.simY = Math.floor(Math.random() * 500)
        this.simArmor = 2;

    }
    simFly() {
        this.x = Math.floor(Math.random() * 700)
        this.y = Math.floor(Math.random() * 1000)
    }
    drawSim() {
        ctx.drawImage(this.enemySim, this.simX, this.simY)
        if (this.simX < this.x && this.simY < this.y) {
            this.simX += 1.5;
            this.simY += 1.5;
        } else if (this.simX < this.x && this.simY > this.y) {
            this.simX += 1.5;
            this.simY -= 1.5;
        } else if (this.simX > this.x && this.simY < this.y) {
            this.simX -= 1.5;
            this.simY += 1.5;
        } else if (this.simX > this.x && this.simY > this.y) {
            this.simX -= 1.5;
            this.simY -= 1.5;
        }

    }
}

function createBetterEnemies() {
    arrayOfBetterEnemies.push(new BetterEnemy())
    called4 = true;
    return called4;
}

function createSim() {
    arrayOfSims.push(new Sim())
    called6 = true;
}

class BetterEnemyRocket {
    constructor() {
        this.betterEnemyRocket = document.getElementById('betterEnemyRocket')
        this.betterEnemyRocketY;
        this.betterEnemyRocketX;
    }
    drawBetterEnemyRocket() {
        ctx.drawImage(this.betterEnemyRocket, this.betterEnemyRocketX, this.betterEnemyRocketY)
        this.betterEnemyRocketY += 10;
    }
}
class SimRocket {
    constructor() {
        this.simRocket = document.getElementById('simrocket')
        this.simRocketY;
        this.simRocketX;
    }
    drawSimRocket() {
        ctx.drawImage(this.simRocket, this.simRocketX, this.simRocketY)
        this.simRocketY += 10;
    }
}

function simShoot() {
    // new SimRocket()
    arrayOfSimRockets.push(new SimRocket())
    for (let i = 0; i < arrayOfSims.length; i++) {
        arrayOfSimRockets[i].simRocketX = arrayOfSims[i].simX + 17;
        arrayOfSimRockets[i].simRocketY = arrayOfSims[i].simY + 40;
    }

    called7 = true;
    return called7;
}

class Boss {
    constructor() {
        this.boss = document.getElementById('boss');
        this.bossX = Math.floor(Math.random() * 500)
        this.bossY = Math.floor(Math.random() * 500)
        this.bossArmor = 4;

    }
    bossFly() {
        this.x = Math.floor(Math.random() * 700)
        this.y = Math.floor(Math.random() * 1000)
    }
    drawBoss() {
        ctx.drawImage(this.boss, this.bossX, this.bossY)
        if (this.bossX < this.x && this.bossY < this.y) {
            this.bossX += 1.5;
            this.bossY += 1.5;
        } else if (this.bossX < this.x && this.bossY > this.y) {
            this.bossX += 1.5;
            this.bossY -= 1.5;
        } else if (this.bossX > this.x && this.bossY < this.y) {
            this.bossX -= 1.5;
            this.bossY += 1.5;
        } else if (this.bossX > this.x && this.bossY > this.y) {
            this.bossX -= 1.5;
            this.bossY -= 1.5;
        }

    }

}





function flyTo() {
    bs.bossFly()
}

class BossRocket {
    constructor() {
        this.bossRocket = document.getElementById('boss-rocket')
        this.bossRocketY;
        this.bossRocketX;
    }
    drawBossRocket() {
        ctx.drawImage(this.bossRocket, this.bossRocketX, this.bossRocketY)
        this.bossRocketY += 15;
    }
}

function bossShoot() {
    if (bs != undefined) {
        arrayOfBossRockets.push(new BossRocket())
        for (let i = 0; i < arrayOfBossRockets.length; i++) {
            arrayOfBossRockets[i].bossRocketX = bs.bossX + 17;
            arrayOfBossRockets[i].bossRocketY = bs.bossY + 40;
        }
    }
}


function drawWeakEnemies() {
    arrayOfWeakEnemies.push(new WeakEnemy())
    called2 = true;
    return called2;

}

class PlayerRocket {
    constructor() {
        this.playerRocket = document.getElementById('rocket')
        this.playerRocketX = playerShipX + 21;
        this.playerRocketY = playerShipY - 40;
        ctx.drawImage(this.playerRocket, this.playerRocketX, this.playerRocketY);
    }
    drawRocket() {
        ctx.drawImage(this.playerRocket, this.playerRocketX, this.playerRocketY);
        this.playerRocketY -= 12;

    }


}


class SmallAsteroid {
    constructor() {
        this.smallAsteroid = document.getElementById('small-asteroid')
        this.asX = Math.floor(Math.random() * 500)
        this.asY = Math.floor(Math.random() * 500)
    }
    drawSmallAsteroid() {
        ctx.drawImage(this.smallAsteroid, this.asX, this.asY);
        this.asY += 1;
        this.asX -= 1;
    }
}

function createSmallAsteroid() {
    arrayOfSmallAsteroids.push(new SmallAsteroid())


}





function ship() {
    ctx.drawImage(playerShip, playerShipX, playerShipY);
}

let background2 = new Image();

function gameCard() {
    background2.src = "img/wdw.png";
    drawningY++
    ctx.drawImage(background2, 0, drawningY)
    ctx.drawImage(background2, 0, drawningY - gameCardHeight)
    if (drawningY >= gameCardHeight)
        drawningY = 0;
};




function playerMove(e) {

    var i = 0;
    if (e.keyCode === 87) {
        setInterval(function () {
            if (i >= 60) return;
            playerShipY -= 1;
            i++;

        }, 5);
    } else if (e.keyCode === 83) {
        setInterval(function () {
            if (i >= 60) return;
            playerShipY += 1;
            i++;
        }, 5);
    } else if (e.keyCode === 68) {
        setInterval(function () {
            if (i >= 60) return;
            playerShipX += 1;
            i++;
        }, 5);
    } else if (e.keyCode === 87 && e.keyCode === 68) {
        setInterval(function () {
            if (i >= 60) return;
            playerShipY -= 1;
            playerShipX += 1;
            i++;
        }, 5);

    } else if (e.keyCode === 87 && e.keyCode === 65) {
        setInterval(function () {
            if (i >= 60) return;
            playerShipY -= 1;
            playerShipX -= 1;
            i++;
        }, 5)
    } else {
        setInterval(function () {
            if (i >= 60) return;
            playerShipX -= 1;
            i++;
        }, 5);
    }
}

function playerShoot() {
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

    if (called6) {
        for (let i = 0; i < arrayOfSims.length; i++) {
            arrayOfSims[i].simFly()
        }
    }
}

function flyBetterEnemy() {
    if (called4) {
        for (let i = 0; i < arrayOfBetterEnemies.length; i++) {
            arrayOfBetterEnemies[i].flyBetterEnemy();
        }
    }
}

function enemyShoot() {
    new WeakEnemyRocket()
    arrayOfWeakEnemiesRockets.push(new WeakEnemyRocket())
    for (let i = 0; i < arrayOfWeakEnemies.length; i++) {
        arrayOfWeakEnemiesRockets[i].enemyRocketX = arrayOfWeakEnemies[i].enemyX + 17;
        arrayOfWeakEnemiesRockets[i].enemyRocketY = arrayOfWeakEnemies[i].enemyY + 40;
    }
    called3 = true;
    return called3;

}

function betterEnemyShoot() {
    new BetterEnemyRocket()
    arrayOfBetterEnemiesRockets.push(new BetterEnemyRocket())
    for (let i = 0; i < arrayOfBetterEnemies.length; i++) {
        arrayOfBetterEnemiesRockets[i].betterEnemyRocketX = arrayOfBetterEnemies[i].betEnemyX + 17;
        arrayOfBetterEnemiesRockets[i].betterEnemyRocketY = arrayOfBetterEnemies[i].betEnemyY + 40;
    }
    called5 = true;
    return called5;

}



let display = document.getElementById('display').getContext('2d');

const player = document.getElementById('player')

function drawHealthbar(canvas, x, y, width, height, armorShip, max_health) {
    if (armorShip >= max_health) {
        armorShip = max_health;
    }
    if (armorShip <= 0) {
        armorShip = 0;
    }
    display.drawImage(player, 250, 120);

    canvas.fillStyle = '#000000';
    canvas.fillRect(x, y, width, height);
    let colorNumber = Math.round((1 - (armorShip / max_health)) * 0xff) * 0x10000 + Math.round((armorShip / max_health) * 0xff) * 0x100;
    let colorString = colorNumber.toString(16);
    if (colorNumber >= 0x100000) {
        canvas.fillStyle = '#' + colorString;
    } else if (colorNumber << 0x100000 && colorNumber >= 0x10000) {
        canvas.fillStyle = '#0' + colorString;
    } else if (colorNumber << 0x10000) {
        canvas.fillStyle = '#00' + colorString;
    }
    canvas.fillRect(x + 1, y + 1, (armorShip / max_health) * (width - 2), height - 2);
}


function checkHit() {
    let p = null
    drawHealthbar(display, 200, 200, 200, 15, armorShip, 20)
    for (let i = 0; i < arrayOfWeakEnemiesRockets.length; i++) {

        if ((Math.abs(arrayOfWeakEnemiesRockets[i].enemyRocketX - (playerShipX + 23)) <= 20 && (Math.abs(arrayOfWeakEnemiesRockets[i].enemyRocketY - (playerShipY + 33)) <= 20))) {
            arrayOfWeakEnemiesRockets.splice(i, 1);
            armorShip -= 2
            armorSpan.innerHTML = `Your armor: ${armorShip}`


        }
    }

    for (let i = 0; i < arrayOfBetterEnemiesRockets.length; i++) {
        if ((Math.abs(arrayOfBetterEnemiesRockets[i].betterEnemyRocketX - (playerShipX + 23)) <= 20 && (Math.abs(arrayOfBetterEnemiesRockets[i].betterEnemyRocketY - (playerShipY + 33)) <= 20))) {
            arrayOfBetterEnemiesRockets.splice(i, 1);
            armorShip -= 4
            armorSpan.innerHTML = `Your armor: ${armorShip}`


        }
    }

    for (let i = 0; i < arrayOfSimRockets.length; i++) {
        if ((Math.abs(arrayOfSimRockets[i].simRocketX - (playerShipX + 23)) <= 20 && (Math.abs(arrayOfSimRockets[i].simRocketY - (playerShipY + 33)) <= 20))) {
            arrayOfSimRockets.splice(i, 1);
            armorShip -= 6
            armorSpan.innerHTML = `Your armor: ${armorShip}`


        }
    }

    for (let i = 0; i < arrayOfBossRockets.length; i++) {
        if ((Math.abs(arrayOfBossRockets[i].bossRocketX - (playerShipX + 23)) <= 20 && (Math.abs(arrayOfBossRockets[i].bossRocketY - (playerShipY + 33)) <= 20))) {
            armorShip -= 1
            arrayOfBossRockets.splice(i, 1);

            armorSpan.innerHTML = `Your armor: ${armorShip}`
        }

    }

}

function reset() {
    // armorShip = 20;
    // armorSpan.innerHTML = `Your armor: ${armorShip}`
    game = false;
    timer = 0;
    // divStart.style.display = 'none'
    // divEnd.style.opacity = '1'
    arrayOfIntervals.forEach(interval => clearInterval(interval))
    arrayOfSims.splice(0, arrayOfSims.length)
    arrayOfSimRockets.splice(0, arrayOfSimRockets.length)
    arrayOfWeakEnemies.splice(0, arrayOfWeakEnemies.length)
    arrayOfWeakEnemiesRockets.splice(0, arrayOfWeakEnemiesRockets.length)
    arrayOfBetterEnemies.splice(0, arrayOfBetterEnemies.length)
    arrayOfBetterEnemiesRockets.splice(0, arrayOfWeakEnemiesRockets.length)
    arrayOfSmallAsteroids.splice(0, arrayOfSmallAsteroids.length)
    arrayOfPlayerRockets.splice(0, arrayOfPlayerRockets.length)
    bossArray.splice(0, bossArray.length)
}

function checkLoss() {
    if (armorShip <= 0) {
        // startGameAgain()

        highscore.innerHTML = `You lost! Your highscore is ${score}`
        divEnd.style.opacity = '1'
        divStart.style.display = 'none'
        reset()
    }

}



function allAnimation() {
    gameCard();
    ship();
    detectColision()
    checkHit()
    checkLoss()
    if (called) {
        for (let i = 0; i < arrayOfPlayerRockets.length; i++) {
            if ((Math.abs(arrayOfPlayerRockets[i].playerRocketY - bs.bossY)) <= 20 && (Math.abs(arrayOfPlayerRockets[i].playerRocketX - bs.bossX)) <= 42) {
                arrayOfPlayerRockets.splice(i, 1);
                arrayOfBossRockets.splice(i, 1)
                bs.bossArmor -= 1;
                if (bs.bossArmor === 0) {
                    score += 1000
                    scoreSpan.innerHTML = `Your score : ${score}`
                    divEnd.style.opacity = '1'
                    divStart.style.display = 'none'
                    highscore.innerHTML = `Congratulations! You have won! Your highscore is ${score}`
                    // arrayOfIntervals.forEach(interval => clearInterval(interval))
                    // startGameAgain()
                    reset()
                }
            }
        }
    }
    if (called) {
        for (let i = 0; i < arrayOfPlayerRockets.length; i++) {
            for (let y = 0; y < arrayOfWeakEnemies.length; y++) {
                if ((Math.abs(arrayOfPlayerRockets[i].playerRocketY - arrayOfWeakEnemies[y].enemyY)) <= 20 && (Math.abs(arrayOfPlayerRockets[i].playerRocketX - arrayOfWeakEnemies[y].enemyX)) <= 20) {
                    arrayOfPlayerRockets.splice(i, 1);
                    arrayOfWeakEnemies.splice(y, 1);


                    score += 100
                    scoreSpan.innerHTML = `Your score : ${score}`
                }

            }

        }

    }
    if (called) {
        for (let i = 0; i < arrayOfPlayerRockets.length; i++) {
            for (let y = 0; y < arrayOfBetterEnemies.length; y++) {
                if ((Math.abs(arrayOfPlayerRockets[i].playerRocketY - arrayOfBetterEnemies[y].betEnemyY)) <= 20 && (Math.abs(arrayOfPlayerRockets[i].playerRocketX - arrayOfBetterEnemies[y].betEnemyX)) <= 20) {
                    arrayOfPlayerRockets.splice(i, 1);
                    arrayOfBetterEnemies.splice(y, 1);
                    score += 200
                    scoreSpan.innerHTML = `Your score : ${score}`
                }

            }

        }
    }
    if (called) {
        for (let i = 0; i < arrayOfPlayerRockets.length; i++) {
            for (let y = 0; y < arrayOfSims.length; y++) {
                if ((Math.abs(arrayOfPlayerRockets[i].playerRocketY - arrayOfSims[y].simY)) <= 20 && (Math.abs(arrayOfPlayerRockets[i].playerRocketX - arrayOfSims[y].simX)) <= 20) {
                    arrayOfPlayerRockets.splice(i, 1);
                    arrayOfSims[y].simArmor -= 1;

                    if (arrayOfSims[y].simArmor === 0) {
                        arrayOfSims.splice(y, 1);
                        score += 300
                        scoreSpan.innerHTML = `Your score : ${score}`
                    }
                }

            }

        }
    }








    if (called) {
        for (let i = 0; i < arrayOfPlayerRockets.length; i++) {
            arrayOfPlayerRockets[i].drawRocket()
            if (arrayOfPlayerRockets[i].playerRocketY < 10) {
                arrayOfPlayerRockets.splice(i, 1);
            }

        }
    }


    for (let i = 0; i < arrayOfBossRockets.length; i++) {
        if (arrayOfBossRockets[i].bossRocketY > 1100) {
            arrayOfBossRockets.splice(i, 1);
        }

    }

    if (called2) {
        for (let i = 0; i < arrayOfWeakEnemies.length; i++) {
            arrayOfWeakEnemies[i].drawEnemy();


        }
        if (called3) {
            for (let i = 0; i < arrayOfWeakEnemiesRockets.length; i++) {
                arrayOfWeakEnemiesRockets[i].drawEnemyRocket();

            }
        }

    }
    if (called5) {
        for (let i = 0; i < arrayOfBetterEnemiesRockets.length; i++) {
            arrayOfBetterEnemiesRockets[i].drawBetterEnemyRocket();

        }
    }
    for (let i = 0; i < arrayOfBetterEnemies.length; i++) {
        arrayOfBetterEnemies[i].drawBetterEnemy()
    }
    if (called7) {
        for (let i = 0; i < arrayOfSimRockets.length; i++) {
            arrayOfSimRockets[i].drawSimRocket();
        }
    }
    for (let i = 0; i < arrayOfSims.length; i++) {
        arrayOfSims[i].drawSim()
    }

    for (let i = 0; i < arrayOfSmallAsteroids.length; i++) {
        arrayOfSmallAsteroids[i].drawSmallAsteroid();

    }


    if (timer >= 13) {

        arrayOfIntervals.forEach(function (interval, index) {
            if (index === 6) {
                clearInterval(interval)
            }
            if (index === 9) {
                clearInterval(interval)
            }
            if (index === 7) {
                clearInterval(interval)
            }

        });
    }
    if (timer >= 10 && timer < 15) {
        ctx.drawImage(bossPicture, 700, 1000);


    }
    if (timer >= 5) {

        bs.drawBoss()
        for (let i = 0; i < arrayOfBossRockets.length; i++) {
            arrayOfBossRockets[i].drawBossRocket()
        }
    }
}