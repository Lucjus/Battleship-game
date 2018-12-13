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
let playerRocketX = playerShipX + 31;
let playerRocketY = playerShipY - 30;
let called = false;


function ship() {

    ctx.drawImage(playerShip, playerShipX, playerShipY);
}

function gameCard() {
    ctx.fillStyle = '#000017'
    ctx.fillRect(0, 0, gameCardWidth, gameCardHeight)

}

function playerMove(e) {

    console.log(e.keyCode)
    if (e.keyCode === 87) {
        playerShipY -= 20;

    } else if (e.keyCode === 83) {
        playerShipY += 20;

    } else if (e.keyCode === 68) {
        playerShipX += 20;

    } else if (e.keyCode === 87 || e.keyCode === 68) {
        playerShipY -= 20;
        playerShipX += 20;
    } else {
        playerShipX -= 20;
    }


}

function playerShoot() {
    console.log('psps')
    ctx.drawImage(playerRocket, playerRocketX, playerRocketY);
    called = true;
    return called;
}




function drawRocket() {
    ctx.drawImage(playerRocket, playerRocketX, playerRocketY);
    playerRocketY -= 10;
}

function allAnimation() {
    gameCard();
    ship();

    if (called) {
        drawRocket()
    }

}
setInterval(allAnimation, 1000 / 60)





// 87 - Do przodu, 83 - do tyłu. 65 - lewo 68 - prawo