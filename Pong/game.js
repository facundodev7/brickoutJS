const tablero = document.querySelector("#tablero");
const ctxTablero = tablero.getContext("2d");
const tWidth = tablero.width;
const tHeight = tablero.height;
const unitsize = 10
const color = "red";
let run = false;
let xV = 0
let yV = 0

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


//(window.addEventListener("keydown", move)
boton1.addEventListener("click", start)
boton2.addEventListener("click", test)
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
    gametick();
}

function gametick(){
    setTimeout(()=>{
        clear();
        drawSlider();
        gametick();
    }, 75)
}

function clear(){
    ctxTablero.clearRect(330, 695, -1000, 40)
    ctxTablero.clearRect(330, 695, 1000, 40)
}

function drawSlider(){
    ctxTablero.drawImage(slider.img, slider.xPos, slider.yPos);
}

function mover(){
    clear();
    slider.xPos += unitsize

}

function mover2(event){
    const keyD = event.keyCode;
    const aK = 65;
    const dK = 68;
    const wK = 87;

    switch (true){
        case(keyD == dK):
        if (slider.xPos < 700){
        slider.xPos += unitsize
        break;
        }
        else{
            slider.xPos += 0
            break;
        }
        case(keyD == aK):
        if (slider.xPos > -10){
        slider.xPos -= unitsize
        break;
        }
        else{
            slider.xPos += 0
        }
    }
}
