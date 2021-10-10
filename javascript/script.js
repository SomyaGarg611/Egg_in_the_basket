var egg = document.getElementById("egg");
var basket = document.getElementById("basket");
var basket2 = document.getElementById("basket2");
var basket3 = document.getElementById("basket3");

basket.style.top = "3%";
basket2.style.top = "41%";
basket3.style.top = "81% ";

var pos = 0;
var flag = 0;

function move(obj){
    if(pos > 1160) 
    flag = 1;
    
    else if(pos == 0)
    flag = 0;
    
    if(flag) pos--;
    else pos++;
    
    console.log(pos);
    obj.style.left = pos + "px";
}

setInterval(function(){ move(egg); }, 15);
setInterval(function(){ move(basket) }, 15);
setInterval(function(){ move(basket2) }, 15);
setInterval(function(){ move(basket3) },15);
