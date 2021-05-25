let right1 = document.querySelector(".padright1");
let right2 = document.querySelector(".padright2");
let right3 = document.querySelector(".padright3");
let center2 = document.querySelector(".padcenter2")
let left1 = document.querySelector(".padleft1");
let left2 = document.querySelector(".padleft2");
let left3 = document.querySelector(".padleft3");
let center1 = document.querySelector(".padcenter1")
let hit = document.querySelector(".buttonhit")



let sonidoTink = new Audio("audio/tink.wav");
let sonidoHiHat = new Audio("audio/hihat.wav");
let sonidoOpenHat = new Audio("audio/openhat.wav");
let sonidoBoom = new Audio("audio/boom.wav");
let sonidoClap = new Audio("audio/clap.wav");
let sonidokick = new Audio("audio/kick.wav");
let sonidoRide = new Audio("audio/ride.wav");
let sonidoSnare = new Audio("audio/snare.wav");
let sonidoTom = new Audio("audio/tom.wav");



right1.addEventListener("click", function() {
    sonidoTink.play();
    sonidoTink.currentTime = 0;
});
right2.addEventListener("click", function() {
    sonidokick.play();
    sonidokick.currentTime = 0;
});
right3.addEventListener("click", function() {
    sonidoOpenHat.play();
    sonidoOpenHat.currentTime = 0;
});
center2.addEventListener("click", function() {
    sonidoClap.play();
    sonidoClap.currentTime = 0;
});
left1.addEventListener("click", function() {
    sonidoSnare.play();
    sonidoSnare.currentTime = 0;
});
left2.addEventListener("click", function() {
    sonidoHiHat.play();
    sonidoHiHat.currentTime = 0;
});
left3.addEventListener("click", function() {
    sonidoRide.play();
    sonidoRide.currentTime = 0;
});
center1.addEventListener("click", function() {
    sonidoBoom.play();
    sonidoBoom.currentTime = 0;
});
hit.addEventListener("click", function(){
    sonidoTom.play();
    sonidoTom.currentTime = 0;
});