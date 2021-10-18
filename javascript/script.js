var egg = document.getElementById("egg");
var basket = document.getElementById("basket");
var basket2 = document.getElementById("basket2");
var basket3 = document.getElementById("basket3");
<<<<<<< Updated upstream
=======
var scoreboard = document.getElementById("scoreboard");
var life = document.getElementById("lives");

var flag1 = 0, flag2 = 0, flag3 = 0, score = 0, c = 0, c2 = 0, close = 0, angle = 0, level = 1, press = 0, maxScore = 72, lives = 5, count = 0, lvl = 0, lvl2 = lvl+1, lvl3 = lvl+2;

var speed1 = Math.random()*25 + 10,
                speed2 = Math.random()*15 + 20,
                        speed3 = Math.random()*7 + 27;
>>>>>>> Stashed changes

basket.style.top = "3%";
basket2.style.top = "41%";
basket3.style.top = "81% ";
egg.style.top = "0%";

<<<<<<< Updated upstream
var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag = 0;
=======
scoreboard.innerHTML = `SCORE : 0`;
scoreboard.style.backgroundColor = "#9000ff";
scoreboard.style.borderRadius = "50%";
scoreboard.style.zIndex = "-2";

life.innerHTML = `LIVES : 5`;
life.style.backgroundColor = "#9000ff";
life.style.borderRadius = "50%";
life.style.zIndelife
>>>>>>> Stashed changes

function move(basket2){
if(!flag)
    basket2.style.left = basket2.offsetLeft + 5 + "px";
else
   basket2.style.left = basket2.offsetLeft - 5 + "px";


if (obj.offsetLeft >= (window.innerWidth - 80) )
if (basket2.offsetLeft >= (window.innerWidth - 80) )
    flag = 1;

else if (basket2.offsetLeft == 0)
    flag = 0;

}

setInterval(function(){ move(egg); }, 3);
setInterval(function(){ move(basket) }, 3);
setInterval(function(){ move(basket2) }, 3);
setInterval(function(){ move(basket3) }, 3);
function move(basket){
    if(!flag)
        basket.style.left = basket.offsetLeft + 5 + "px";
    else
       basket.style.left = basket.offsetLeft - 5 + "px";
    
    
    if (basket.offsetLeft >= (window.innerWidth - 80) )
        flag = 1;
    
    else if (basket.offsetLeft == 0)
        flag = 0;
    
    }
    
setInterval(function(){ move(egg) }, 15);
setInterval(function(){ move(basket) }, 55);
setInterval(function(){ move(basket2) }, 15);
setInterval(function(){ move(basket3) }, 25);

var keyStroke = null;
window.addEventListener("keydown", (event) => { keyStroke = event.key; eggDrop(keyStroke);});

var c = 0, c2 = 0, close = 0, angle = 0, level = 1, bsk;

function eggDrop(keyStroke){
    if (keyStroke == " ")
        var timer = setInterval(drop, 20);
    
    function drop(){

        angle += 8;
        egg.style.transform = "rotate(" + angle + "deg)";
        if(c != 13){
            egg.style.top = egg.offsetTop - 5 + "px";
            egg.style.left = egg.offsetLeft - 5 + "px";
            c++;
        }
    else{

        if (c2 != 6){
        egg.style.left = egg.offsetLeft - 5 + "px";
        c2++;
    }
    egg.style.top = egg.offsetTop + 5 + "px";

    if (level == 1 && egg.offsetTop > basket.offsetTop){
    bsk = basket2;
    level = 2; 
    }
    else if (level == 2 && egg.offsetTop > basket3.offsetTop){
    bsk = basket3;
    level = 3;}

    if(egg.offsetTop > bsk.offsetTop && egg.offsetLeft >= (bsk.offsetLeft - 10) && egg.offsetLeft <= (egg.offsetLeft + 10)){
        clearInterval(timer);
        egg.style.transform = "rotate(0deg)";
        egg.style.left = bsk.style.left;
    }

    if (egg.offsetTop > window.innerHeight){
        alert("Game over :(");
        clearInterval(timer);
        location.reload();
    }
    }
}

}
