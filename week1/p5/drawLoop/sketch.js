function setup(){
    createCanvas(800, 800)
    background('purple');
}

var x = 0;
//function definition
function draw(){
    background('purple');
    ellipse(x,200,200,200);
    x = x + 1;
}

//call or invoke the function