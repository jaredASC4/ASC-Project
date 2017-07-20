function setup(){
    createCanvas(500,500);
    background('violet');
}

var x = 150
var y = 150
var xC = 3
var yC = 3

function draw(){
    background('violet');
    ellipse(x, y, 30);
    x = x + xC
    y = y + yC
    if (x > 470){
        textSize(32);
        text("Game Over!!",175,400);    
    }
    if (y > 470){
        yC = -6
    } 
    if (x < 30){
        xC = 2
    }
    if (y < 30){
        yC = 5
    }
    
    if(x >= 435 && x <= 455 && y >= mouseY - 30 && y <= mouseY + 30){
        xC = -4
        yC = -4
    }
    rect(450, mouseY, 10,60);
}

