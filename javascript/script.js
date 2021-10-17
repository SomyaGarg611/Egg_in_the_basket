var egg = document.getElementById("egg");
var basket = document.getElementById("basket");
var basket2 = document.getElementById("basket2");
var basket3 = document.getElementById("basket3");
var scoreboard = document.getElementById("scoreboard");

var flag1 = 0, flag2 = 0, flag3 = 0, score = 0, c = 0, c2 = 0, close = 0, angle = 0, level = 1, press = 0, maxScore = 72, lives = 5;

var speed1 = Math.random()*25 + 12,
                speed2 = Math.random()*15 + 22,
                        speed3 = Math.random()*5 + 32;

basket.style.top = "3%";
basket2.style.top = "41%";
basket3.style.top = "81% ";
egg.style.top = "0%";

scoreboard.innerHTML = `SCORE : 0`;
scoreboard.style.backgroundColor = "#9000ff";
scoreboard.style.borderRadius = "50%";
scoreboard.style.zIndex = "-2";



function move(basket){
    basket.style.left = (basket.offsetLeft )+"px";
    if(!flag1)
        basket.style.left = basket.offsetLeft + 3 + "px";
    else
       basket.style.left = basket.offsetLeft - 3 + "px";
    
    
    if (basket.offsetLeft > (window.innerWidth - 90) ){
        flag1 = 1;
    }
       
    
    else if (basket.offsetLeft ==0)
        flag1 = 0;
    }



function move2(basket){
    if(!flag2)
        basket.style.left = basket.offsetLeft + 3 + "px";
    else
        basket.style.left = basket.offsetLeft - 3 + "px";
    
    if (basket.offsetLeft >= (window.innerWidth - 90) )
        flag2 = 1;
    
    else if (basket.offsetLeft == 0)
        flag2 = 0;
    }
    

function move3(basket){
    if(!flag3)
        basket.style.left = basket.offsetLeft + 3 + "px";
    else
        basket.style.left = basket.offsetLeft - 3 + "px";
    
    
    if (basket.offsetLeft >= (window.innerWidth - 90) )
        flag3 = 1;
    
    else if (basket.offsetLeft == 0)
        flag3 = 0;
    }




var eggSpeed = setInterval(function(){ move(egg) }, speed1);
setInterval(function() { move(basket) }, speed1);
setInterval(function(){ move2(basket2) }, speed2);
setInterval(function(){ move3(basket3) }, speed3);

var keyStroke = null;
window.addEventListener("keydown", (event) => { keyStroke = event.key; eggDrop(keyStroke);});



function eggDrop(keyStroke){
if (keyStroke == " " && !press){
    press = 1;
    var timer = setInterval(drop, 20);
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
egg.style.top = "39%";
score++;
scoreboard.innerHTML = `SCORE : ${score}`;
if (score > maxScore) maxScore = score;
press = 0;
}


if (level == 2 && egg.offsetTop > basket3.offsetTop && egg.offsetTop < (basket3.offsetTop + 43) && egg.offsetLeft >= (basket3.offsetLeft - 43) && egg.offsetLeft <= (basket3.offsetLeft + 43)){
// level = 3;

// egg.style.left = basket3.style.left;
// eggSpeed = setInterval(function(){ move3(egg) }, speed3);
// egg.style.top = "79%";

score++;

scoreboard.innerHTML = `SCORE : ${score}`;
if (score > maxScore) maxScore = score;

clearInterval(timer);
clearInterval(eggSpeed);
egg.style.transform = "rotate(0deg)";
egg.style.left = basket.style.left;
egg.style.top = "0%";
eggSpeed = setInterval(function(){ move(egg) }, speed1);
level = 1;
press = 0;
// speed1 -= 10;
// speed2 -= 10;
// speed3 -= 10;
}

if (egg.offsetTop > window.innerHeight){
    lives--;

    if (!lives){
    alert(`                                             GAME OVER :(\n\n                                            YOUR SCORE : ${score}\n\n                                            MAX SCORE : ${maxScore}`);
    press = 0;
    clearInterval(timer);
    clearInterval(eggSpeed);
    location.reload();
    }
    else{
        alert(`                                             1 LIFE LOST
        \n\n                                             YOU HAVE ${lives} LIFE(S) REMAINING`);
        if (level == 1){
            clearInterval(timer);
            egg.style.top = "0%";
            eggSpeed = setInterval(function(){ move(egg) }, speed1);
            egg.style.left = basket.style.left;
            egg.style.transform = "rotate(0deg)";
            press = 0;
        }
        else if (level == 2){
            clearInterval(timer);
            egg.style.top = "39%";
            egg.style.transform = "rotate(0deg)";
            eggSpeed = setInterval(function(){ move2(egg) }, speed2);
            egg.style.left = basket2.style.left;
            press = 0;
        }
    }
}
}


}
