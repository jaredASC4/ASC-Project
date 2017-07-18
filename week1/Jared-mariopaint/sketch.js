function setup(){
    createCanvas(1000, 1000);
    background(225);
}

var ellipse1 = ellipse(mouseX, mouseY, 80);
var ellipse2 = ellipse(mouseX,mouseY,100);
var ellipse3 = ellipse(60,90,55);

var randomEllipse = [ellipse1, ellipse2, ellipse3];

function mouseDragged(){
    ellipse(mouseX, mouseY, 15,5);
    fill(random(255), random(255), random(255));
    return false;
}
