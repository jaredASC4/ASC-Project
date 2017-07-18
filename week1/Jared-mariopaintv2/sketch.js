
var button;
function setup() {
  createCanvas(500, 500);
  background(225);
  button = createButton('click me');
  button.position(19, 19);
  button.mousePressed(clear());
}


function mouseDragged(){
    ellipse(mouseX, mouseY, 15,5);
    fill(random(255), random(255), random(255));
    return false;
}
