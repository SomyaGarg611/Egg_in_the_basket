var egg = document.getElementById("egg");
var basket = document.getElementById("basket1");
var basket2 = document.getElementById("basket2");
var basket3 = document.getElementById("basket3");
var scoreboard = document.getElementById("scoreboard");
var life = document.getElementById("lives");

egg.style.width = "88px";
egg.style.height = "108px";

var flag1 = 0, flag2 = 0, flag3 = 0, score = 0, angle = 0, level = 1, press = 0, maxScore = 72, lives = 5, lvl = 0, lvl2, lvl3;

var speed1 = Math.random()*10 + 10,
                speed2 = Math.random()*4 + 8,
                        speed3 = Math.random()*2 + 16;

basket.style.top = "4.3%";
basket2.style.top = "41%";
basket3.style.top = "81% ";
egg.style.top = "0.25%";

scoreboard.innerHTML = "SCORE : 0";
scoreboard.style.backgroundColor = "#9000ff";
scoreboard.style.borderRadius = "50%";
scoreboard.style.zIndex = "-2";


life.innerHTML = "LIVES : 5";
life.style.backgroundColor = "#9000ff";
life.style.borderRadius = "50%";
life.style.zIndex = "-2";


function move(bsk){
if(!flag1){
    bsk.style.left = bsk.offsetLeft + 1.5 + "px";
}
else{
    bsk.style.left = bsk.offsetLeft - 1.5 + "px";
}

if (bsk.offsetLeft > (window.innerWidth - 104) ){
    flag1 = 1;
}
else if (bsk.offsetLeft <= 0)
    flag1 = 0;
}



function move2(bsk){
if(!flag2){
    bsk.style.left = bsk.offsetLeft + 1.5 + "px";
}
else{
    bsk.style.left = bsk.offsetLeft - 1.5 + "px";
}

if (bsk.offsetLeft >= (window.innerWidth - 104) )
    flag2 = 1;

else if (bsk.offsetLeft <= 0){
    flag2 = 0;
}
}


function move3(bsk){
if(!flag3){
    bsk.style.left = bsk.offsetLeft + 1.5 + "px";
}
else{
    bsk.style.left = bsk.offsetLeft - 1.5 + "px";
}


if (bsk.offsetLeft >= (window.innerWidth - 104) )
    flag3 = 1;

else if (bsk.offsetLeft <= 0)
    flag3 = 0;
}



var eggSpeed = setInterval(function(){ move(egg) }, speed1);
var basketSpeed1 = setInterval(function() { move(basket) }, speed1);
var basketSpeed2 = setInterval(function(){ move2(basket2) }, speed2);
var basketSpeed3 = setInterval(function(){ move3(basket3) }, speed3);

var keyStroke = null;
window.addEventListener("keydown", (event) => { keyStroke = event.key; eggDrop(keyStroke);});



function eggDrop(keyStroke){
if (keyStroke == " " && !press){
    press = 1;
    var timer = setInterval(drop, 18);
}


function drop(){
clearInterval(eggSpeed);

angle += 7;
egg.style.transform = `rotate(${angle}deg)`;
egg.style.top = egg.offsetTop + 5 + "px";

if (level == 1 && egg.offsetTop > (basket2.offsetTop - 20) && egg.offsetTop < (basket2.offsetTop + 45) && egg.offsetLeft >= (basket2.offsetLeft - 50) && egg.offsetLeft <= (basket2.offsetLeft + 50)){

level = 2;
clearInterval(timer);
egg.style.transform = "rotate(0deg)";
egg.style.left = basket2.style.left;
eggSpeed = setInterval(function(){ move2(egg) }, speed2);
egg.style.top = "37.5%";
score++;
scoreboard.innerHTML = `SCORE : ${score}`;
if (score > maxScore) maxScore = score;
press = 0;

}


if (level == 2 && egg.offsetTop > basket3.offsetTop && egg.offsetTop < (basket3.offsetTop + 43) && egg.offsetLeft >= (basket3.offsetLeft - 43) && egg.offsetLeft <= (basket3.offsetLeft + 43)){

clearInterval(timer);
egg.style.transform = "rotate(0deg)";
egg.style.left = basket3.style.left;
eggSpeed = setInterval(function(){ move3(egg) }, speed3);
egg.style.top = "78%";
score++;
scoreboard.innerHTML = `SCORE : ${score}`;
if (score > maxScore) maxScore = score;
press = 0;

function shiftUp(bsk){
bsk.style.top = bsk.offsetTop - 1.5 + "px";
if (basket2.style.top <= "0.5%"){

clearInterval(up1);
clearInterval(up2);
clearInterval(up3);
clearInterval(up4);

lvl++;
if (lvl > 3) lvl = 1;

lvl2 = lvl + 1;
if (lvl2 > 3) lvl2 = 1;

lvl3 = lvl2 + 1;
if (lvl3 > 3) lvl3 = 1;


basket3= document.getElementById(`basket${lvl}`);
basket= document.getElementById(`basket${lvl2}`);
basket2= document.getElementById(`basket${lvl3}`);


clearInterval(basketSpeed1);
clearInterval(basketSpeed2);
clearInterval(basketSpeed3);
clearInterval(eggSpeed);
basket.style.top = "4.3%";
basket2.style.top = "41%";
basket3.style.top = "81% ";
egg.style.top = "37.5%";

basketSpeed1 = setInterval(function() { move(basket) }, speed1);
basketSpeed2 = setInterval(function(){ move2(basket2) }, speed2);
basketSpeed3 = setInterval(function(){ move3(basket3) }, speed3);
eggSpeed = setInterval(function(){ move2(egg) }, speed2);
level = 2;

}

}
var up1 = setInterval(function(){ shiftUp(egg) }, 8);
var up2 = setInterval(function(){ shiftUp(basket) }, 8);
var up3 = setInterval(function(){ shiftUp(basket2) }, 8);
var up4 = setInterval(function(){ shiftUp(basket3) }, 8);

}

if (egg.offsetTop > window.innerHeight){
    lives--;

    if (!lives){
    life.innerHTML = `LIVES : ${lives}`;
    alert(`                                             GAME OVER :(\n\n                                            YOUR SCORE : ${score}\n\n                                            MAX SCORE : ${maxScore}`);

    press = 0;
    clearInterval(timer);
    clearInterval(eggSpeed);
    location.reload();
    }

    else{
        if (lives == 1)
        life.innerHTML = `LIFE : ${lives}`;
        else
        life.innerHTML = `LIVES : ${lives}`;
        alert(`                                             1 LIFE LOST
        \n\n                                             YOU HAVE ${lives} LIFE(S) REMAINING`);

    if (level == 1){
        clearInterval(timer);
        egg.style.top = "0.25%";
        eggSpeed = setInterval(function(){ move(egg) }, speed1);
        egg.style.left = basket.style.left;
        egg.style.transform = "rotate(0deg)";
        press = 0;
    }
    else if (level == 2){
        clearInterval(timer);
        egg.style.top = "37.5%";
        egg.style.transform = "rotate(0deg)";
        eggSpeed = setInterval(function(){ move2(egg) }, speed2);
        egg.style.left = basket2.style.left;
        press = 0;
    }
    }
}
}


}
