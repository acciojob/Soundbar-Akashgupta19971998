//your JS code here. If required.
const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/387");
const buttonA = document.querySelector("#btn1");
const buttonB = document.querySelector("#btn2");
const buttonC = document.querySelector("#btn3");
const buttonD = document.querySelector("#btn4");
const buttonE = document.querySelector("#btn5");
const buttonF = document.querySelector("#btn6");
const stop = document.querySelector("#stop");

// console.log(buttonA.value) 

function button1() {
    audio.play();
}
//button1();
function button2() {
    audio.play();
}
function button3() {
    audio.play();
}
function button4() {
    audio.play();
}
function button5() {
    audio.play();
}
function button6() {
    audio.play();
}
function stops() {
    audio.pause();
}
