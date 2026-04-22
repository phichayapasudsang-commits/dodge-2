function resetGame () {
    playerX = 2
    score = 0
    lives = 3
    level = 1
    speed = 500
    timeLeft = 30
    spawnEnemy1()
    spawnEnemy2()
}
input.onButtonPressed(Button.A, function () {
    if (playerX > 0) {
        playerX += 0 - 1
    }
})
function loseLife () {
    lives += 0 - 1
    if (lives <= 0) {
        basic.showString("LOSE")
        basic.showNumber(score)
        if (score > highScore) {
            highScore = score
        }
        basic.showString("HI")
        basic.showNumber(highScore)
        resetGame()
    }
}
function spawnEnemy2 () {
    enemy2X = randint(0, 4)
    enemy2Y = 0
}
function spawnEnemy1 () {
    enemy1X = randint(0, 4)
    enemy1Y = 0
}
input.onButtonPressed(Button.B, function () {
    if (playerX < 4) {
        playerX += 1
    }
})
function drawGame () {
    basic.clearScreen()
    // player
    led.plot(playerX, playerY)
    // enemy 1
    led.plotBrightness(enemy1X, enemy1Y, 80)
    // enemy 2
    led.plotBrightness(enemy2X, enemy2Y, 40)
}
let enemy1Y = 0
let enemy1X = 0
let enemy2Y = 0
let highScore = 0
let score = 0
let timeLeft = 0
let speed = 0
let level = 0
let lives = 0
let enemy2X = 0
let playerY = 0
let playerX = 0
playerX = 2
playerY = 4
enemy2X = 4
lives = 3
level = 1
speed = 500
timeLeft = 30
spawnEnemy1()
spawnEnemy2()
basic.forever(function () {
    drawGame()
    basic.pause(speed)
    enemy1Y += 1
    enemy2Y += 1
    // collision enemy1
    if (playerX == enemy1X && playerY == enemy1Y) {
        loseLife()
        spawnEnemy1()
    }
    // collision enemy2
    if (playerX == enemy2X && playerY == enemy2Y) {
        loseLife()
        spawnEnemy2()
    }
    // enemy reset
    if (enemy1Y > 4) {
        score += 1
        spawnEnemy1()
    }
    if (enemy2Y > 4) {
        score += 1
        spawnEnemy2()
    }
    // level up
    level = Math.idiv(score, 5) + 1
    speed = Math.max(100, 500 - (level - 1) * 50)
})
control.inBackground(function () {
    while (true) {
        basic.pause(1000)
        timeLeft += 0 - 1
        if (timeLeft <= 0) {
            basic.showString("TIME")
            basic.showNumber(score)
            if (score > highScore) {
                highScore = score
            }
            basic.showString("HI")
            basic.showNumber(highScore)
            resetGame()
        }
    }
})
