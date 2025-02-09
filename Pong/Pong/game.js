const tablero = document.querySelector("#tablero");
const ctxTablero = tablero.getContext("2d");
const tWidth = tablero.width;
const tHeight = tablero.height;
const unitsize = 10
let run = false;
let xVelocity = 0
let yVelocity = 0
let bounce = -1

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
    img:document.getElementById("blueBlockImg")
}

let boton1 = document.querySelector("#boton1");
let boton2 = document.querySelector("#boton2");
let boton3 = document.querySelector("#boton3");


boton1.addEventListener("click", start)
boton2.addEventListener("click", test)
boton3.addEventListener("click", reiniciar)
window.addEventListener("keydown", mover2)

function test(){
    xVelocity = 0
    yVelocity = 0
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
    setTimeout(()=>{
        clear();
        drawAll();
        checkCollision();
        gametick();
        console.log(block.xPos, block.yPos)
        console.log(ball.xPos, ball.yPos)
    }, 75)
}

function clear(){
    ctxTablero.clearRect(0, 0, 800, 800)
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
    setTimeout(()=>{
        ball.yPos -= yVelocity 
        ball.xPos -= xVelocity 
        ballMove();
    }, 75)
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
    //ball collission
    if(ball.yPos == (slider.yPos - 30) && (ball.xPos >= slider.xPos -20 && ball.xPos <= slider.xPos <= +100)){
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


    if ((ball.yPos == (block.yPos + 10)) && (ball.xPos == (block.xPos + 20))){
            console.log("hol")
            xVelocity *= -1
            yVelocity *= -1
        }
    }
