var egg = document.getElementById("egg");
var basket = document.getElementById("basket");
var basket2 = document.getElementById("basket2");
var basket3 = document.getElementById("basket3");

basket.style.top = "3%";
basket2.style.top = "41%";
basket3.style.top = "81% ";

var flag = 0;

function move(obj){

if (obj.offsetLeft == (window.innerWidth - 80) )
    flag = 1;

else if (obj.offsetLeft == 0)
    flag = 0;

if(!flag)
     obj.style.left = obj.offsetLeft + 5 + "px";
else
    obj.style.left = obj.offsetLeft - 5 + "px";

console.log(obj.offsetLeft);

}

function move2(obj){

    if (obj.offsetLeft == (window.innerWidth - 80) )
        flag = 1;
    
    else if (obj.offsetLeft == 0)
        flag = 0;
    
    if(!flag)
         obj.style.left = obj.offsetLeft + 5 + "px";
    else
        obj.style.left = obj.offsetLeft - 5 + "px";
    
    console.log(obj.offsetLeft);
    
    }

setInterval(function(){ move(egg); }, 2);
setInterval(function(){ move(basket) }, 2);
setInterval(function(){ move2(basket2) }, 8);
setInterval(function(){ move(basket3) }, 16);
