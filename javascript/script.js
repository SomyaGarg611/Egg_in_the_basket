var egg = document.getElementById("egg");
var basket = document.getElementById("basket");
var basket2 = document.getElementById("basket2");
var basket3 = document.getElementById("basket3");

basket.style.top = "3%";
basket2.style.top = "41%";
basket3.style.top = "81% ";
egg.style.top = "38%";

var flag1 = 0, flag2 = 0, flag3 = 0, flag4 = 0, flag = 0;

function move(obj){

if(!flag)
    obj.style.left = obj.offsetLeft + 5 + "px";
else
   obj.style.left = obj.offsetLeft - 5 + "px";


if (obj.offsetLeft == (window.innerWidth - 80) )
    flag = 1;

else if (obj.offsetLeft == 0)
    flag = 0;

// 2
// if(!flag2)
//     obj.style.left = obj.offsetLeft + 5 + "px";
// else
//    obj.style.left = obj.offsetLeft - 5 + "px";

// if (obj.offsetLeft == (window.innerWidth - 80) )
//     flag2 = 1;

// else if (obj.offsetLeft == 0)
//     flag2 = 0;

}

setInterval(function(){ move(egg); }, 15);
setInterval(function(){ move(basket) }, 15);
setInterval(function(){ move(basket2) }, 15);
setInterval(function(){ move(basket3) }, 15);

var keyStroke = null;
window.addEventListener("keydown", (event) => { keyStroke = event.key; eggDrop(keyStroke);});

var c1 = 0, c2 = 0, close = 0;

function eggDrop(keyStroke){
    if (keyStroke == " "){
        // for(let i = 0; i<4; i++) egg.style.top = egg.offsetTop + 20 + "px";
        var timer = setInterval(drop, 20);

        function drop(){
            egg.style.top = egg.offsetTop + 5 + "px";
            if (egg.style.top > window.innerHeight)
                clearInterval(timer);
        }

    }
    if (egg.offsetTop > window.innerHeight){
        alert("Game Over :(");
        location.reload();
    }

}
