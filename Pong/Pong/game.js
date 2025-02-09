const tablero = document.querySelector("#tablero");
const ctxTablero = tablero.getContext("2d");
const tWidth = tablero.width;
const tHeight = tablero.height;
const unitsize = 10
let run = false;
let xVelocity = 0
let yVelocity = 0

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
    slider.xPos = 680;
    slider.yPos = 700;
    drawSlider()
}

function reiniciar(){
    location.reload();
}

function start(){
    slider.xPos = 320;
    slider.yPos = 700;
    ball.xPos = 360
    ball.yPos = 660
    canLaunch = true;
    run = true;
    gametick();
}

function gametick(){
    setTimeout(()=>{
        clear();
        drawSlider();
        drawBall();
        checkCollision();
        console.log("Bola X: ",ball.xPos, "Bola Y: ", ball.yPos)
        console.log("Slider X: ",slider.xPos, "Slider Y: ", slider.yPos)
        gametick();
    }, 75)
}

function clear(){
    ctxTablero.clearRect(0, 0, 800, 800)
}

function drawSlider(){
    ctxTablero.drawImage(slider.img, slider.xPos, slider.yPos);
}

function drawBall(){
    ctxTablero.drawImage(ball.img, ball.xPos, ball.yPos);
}


function ballLaunch(){
    canLaunch = false
    yVelocity = unitsize
    xVelocity = unitsize
    ballMove();
}

function ballMove(){
    setTimeout(()=>{
        ball.yPos -= yVelocity * 2
        ball.xPos -= xVelocity * 2
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

function checkCollision(){
    //top collision
    if (ball.yPos < (0 + unitsize)){
        yVelocity *= -1
    }
    //left collision
    if (ball.xPos < (0 + unitsize)){
        xVelocity *= -1
    }
    //right collission
    if (ball.xPos > (760 + unitsize)){
        xVelocity *= -1
    }
    //ball collission
    //ball.xPos >= slider.xPos - 30 && ball.xPos <= slider.xPos + 70: 
    // Esto verifica si la posición x de la pelota está dentro del rango del slider 
    // (desde slider.xPos - 30 hasta slider.xPos + 70).
    switch(true){
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 100)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 90)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 80)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 70)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 60)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 50)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 40)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 30)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 20)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == (slider.xPos + 10)):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == slider.xPos):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == slider.xPos - 10):
        xVelocity *= -1
        yVelocity *= -1
        break;
        case(ball.yPos == (slider.yPos - 30) && ball.xPos == slider.xPos - 20):
        xVelocity *= -1
        yVelocity *= -1
        break;
    }
}
