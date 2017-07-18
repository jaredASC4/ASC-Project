function setup(){
    createCanvas(800, 800);
    background('red');
}

var i = 0
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","L","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var letter = alphabet[Math.floor(Math.random()*26)];


function draw(){
    textSize(32);
    text("Please type the following letter", 100,100);
    text(letter, 200, 200);
    text("Current Score:" + i, 50,700);
}

function mouseDragged(){
    background(random(255), random(255), random(255));
}

function keyTyped(){
    background('red');
    if (key===letter){
        i++;
        letter = alphabet[Math.floor(Math.random()*26)];
    }else{
        i = i - 1;
        text("Incorrect. Try again!",50,600);
    }
}