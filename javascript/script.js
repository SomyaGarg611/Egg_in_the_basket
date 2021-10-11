var egg = document.getElementById("egg");
var basket = document.getElementById("basket");
var basket2 = document.getElementById("basket2");
var basket3 = document.getElementById("basket3");

basket.style.top = "3%";
basket2.style.top = "41%";
basket3.style.top = "81% ";
egg.style.top = "0%";

var flag1 = 0;

function move(basket){
    if(!flag1)
        basket.style.left = basket.offsetLeft + 5 + "px";
    else
       basket.style.left = basket.offsetLeft - 5 + "px";
    
    
    if (basket.offsetLeft > (window.innerWidth - 90) )
        flag1 = 1;
    
    else if (basket.offsetLeft == 0)
        flag1 = 0;
    }

var flag2 = 0;

function move2(basket){
    if(!flag2)
        basket.style.left = basket.offsetLeft + 5 + "px";
    else
        basket.style.left = basket.offsetLeft - 5 + "px";
    
    if (basket.offsetLeft >= (window.innerWidth - 90) )
        flag2 = 1;
    
    else if (basket.offsetLeft == 0)
        flag2 = 0;
    }
    
var flag3 = 0;
function move3(basket){
    if(!flag3)
        basket.style.left = basket.offsetLeft + 5 + "px";
    else
        basket.style.left = basket.offsetLeft - 5 + "px";
    
    
    if (basket.offsetLeft >= (window.innerWidth - 90) )
        flag3 = 1;
    
    else if (basket.offsetLeft == 0)
        flag3 = 0;
    }

var speed1 = Math.random()*20 + 10,
            speed2 = Math.random()*20 + 15,
                    speed3 = Math.random()*10 + 30;

var eggSpeed = setInterval(function(){ move(egg) }, speed1);
setInterval(function(){ move(basket) }, speed1);
setInterval(function(){ move2(basket2) }, speed2);
setInterval(function(){ move3(basket3) }, speed3);

var keyStroke = null;
window.addEventListener("keydown", (event) => { keyStroke = event.key; eggDrop(keyStroke);});

var c = 0, c2 = 0, close = 0, angle = 0, level = 1, bsk;

function eggDrop(keyStroke){
if (keyStroke == " ")
    var timer = setInterval(drop, 20);
    
function drop(){
    clearInterval(eggSpeed);
    angle += 8;
    egg.style.transform = "rotate(" + angle + "deg)";
    // if(c != 13){
    //     egg.style.top = egg.offsetTop - 5 + "px";
    //     egg.style.left = egg.offsetLeft - 5 + "px";
    //     c++;
    // }
    // else{

    // if (c2 != 6){
    // egg.style.left = egg.offsetLeft - 5 + "px";
    // c2++;
    // }
egg.style.top = egg.offsetTop + 5 + "px";

if (level == 1 && egg.offsetTop > basket2.offsetTop && egg.offsetLeft >= (basket2.offsetLeft - 25) && egg.offsetLeft <= (basket2.offsetLeft + 25)){
level = 2;
clearInterval(timer);
egg.style.transform = "rotate(0deg)";
egg.style.left = basket2.style.left - 20 + "px";
eggSpeed = setInterval(function(){ move2(egg) }, speed2);
}

else if (level == 2 && egg.offsetTop > basket3.offsetTop && egg.offsetLeft >= (basket3.offsetLeft - 25) && egg.offsetLeft <= (basket3.offsetLeft + 25)){
level = 3;
clearInterval(timer);
egg.style.transform = "rotate(0deg)";
egg.style.left = basket3.style.left - 20 + "px";
eggSpeed = setInterval(function(){ move3(egg) }, speed3);

}

if (egg.offsetTop > window.innerHeight){
    alert("Game over :(");
    clearInterval(timer);
    clearInterval(eggSpeed);
    location.reload();
}
// }
}
}
