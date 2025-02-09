const tablero = document.querySelector("#tablero");
const ctxTablero = tablero.getContext("2d");
const tWidth = tablero.width;
const tHeight = tablero.height;
const unitsize = 10
let run = false;
let xVelocity = 0
let yVelocity = 0
let bounce = -1
let playerLives = 1

let canLaunch = false

let slider = {
    xPos:0,
    yPos:0,
    img:document.getElementById("sliderImg")
}

let ball = {
    xPos:0,
    yPos:0,
    img:document.getElementById("ballImg")
}

let block = {
    xPos:0,
    yPos:0,
    img:document.getElementById("blueBlockImg"),
    lives: 1,
    hit:false,
}

let boton1 = document.querySelector("#boton1");
let boton2 = document.querySelector("#boton2");
let boton3 = document.querySelector("#boton3");


boton1.addEventListener("click", start)
boton2.addEventListener("click", test)
boton3.addEventListener("click", reiniciar)
window.addEventListener("keydown", mover2)

function test(){
    ball.xPos = slider.xPos + 40
    ball.yPos = slider.yPos - 40
}

function reiniciar(){
    location.reload();
}

function start(){
        slider.xPos = 320;
        slider.yPos = 700;
        ball.xPos = 360
        ball.yPos = 660
        block.xPos = 340;
        block.yPos = 50;
        canLaunch = true;
        run = true;
        gametick();
    }

function gametick(){
    if (playerLives > 0){
        setTimeout(()=>{
            clear();
            drawAll();
            checkCollision();
            gametick();
            (console.log(playerLives))
        }, 75)
    }
    else{
        clear();
        gameOver();
    }

}

function clear(){
    ctxTablero.clearRect(0, 0, 800, 800)
}

function gameOver(){
    ctxTablero.font = "50px Arial"
    ctxTablero.fillStyle = "white"
    ctxTablero.fillText("Game over", 280, 400,)
    boton3.style.display = "initial"
}

function drawAll(){
    drawSlider();
    drawBall();
    drawBlock();
}

function drawSlider(){
    ctxTablero.drawImage(slider.img, slider.xPos, slider.yPos);
}

function drawBall(){
    ctxTablero.drawImage(ball.img, ball.xPos, ball.yPos);
}

function drawBlock(){
    ctxTablero.drawImage(block.img, block.xPos, block.yPos)
}

function ballLaunch(){
    canLaunch = false
    yVelocity = unitsize
    xVelocity = unitsize
    ballMove();
}

function ballMove(){
    if (canLaunch == false){
        setTimeout(()=>{
            ball.yPos -= yVelocity 
            ball.xPos -= xVelocity 
            ballMove();
        }, 75)
    }

}

function restartGame(){
    if (run == false && playerLives != 0){
        slider.xPos = 320;
        slider.yPos = 700;
        ball.xPos = 360
        ball.yPos = 660
        canLaunch = true;
        xVelocity = 0
        yVelocity = 0
        run = true
        gametick();
    }
}

function mover2(event){
    const keyDown = event.keyCode;
    const aK = 65;
    const dK = 68;
    const wK = 87;

    if (run == true){
        if (keyDown == dK){
            slider.xPos += unitsize
            if(slider.xPos > 700){
                slider.xPos -= 10
            }
        }
        if (keyDown == aK){
            slider.xPos -= unitsize
            if(slider.xPos < -10){
                slider.xPos += 10
            }
        }    
        if (keyDown == wK){
            ballLaunch();
        }
        }
    }

function randomDirection(){
        var random = Math.floor(Math.random() * 2 + 1)
    }

function liveReduction(){
    if (block.hit = true){
        block.lives -= 1
        if (block.lives == 0){
            block.xPos = 1000
            block.yPos = 1000
        }
    }
}

function checkCollision(){
    //top collision
    if (ball.yPos < (0 + unitsize)){
        yVelocity *= -1
        ball.yPos += 10
    }
    //left collision
    if (ball.xPos < (0 + unitsize)){
        xVelocity *= -1
        ball.xPos += 10
    }
    //right collission
    if (ball.xPos > (760 + unitsize)){
        xVelocity *= -1
        ball.xPos -= 10
    }
    //bottom collission
    if (ball.yPos > 700 - unitsize){
        playerLives -= 1
        run = false
        restartGame();
    }
    //ball collission
    if(ball.yPos == (slider.yPos - 30) && (ball.xPos >= slider.xPos -20 && ball.xPos <= slider.xPos + 100)){
        bounce *= -1
        if (bounce == 1){
            xVelocity *= 1
            yVelocity *= -1
        }
        if (bounce == -1){
            xVelocity *= -1
            yVelocity *= -1
        }

        }
        //block collision
    if ((ball.yPos == (block.yPos - 20)) && (ball.xPos == (block.xPos - 10))){
            xVelocity *= -1
            yVelocity *= -1
            block.hit = true
            liveReduction();
        }
    }