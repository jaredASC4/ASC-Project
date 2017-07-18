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
    ellipse(x, y, 60);
    x = x + xC
    y = y + yC
    if (x > 470){
        xC = -4
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
}

