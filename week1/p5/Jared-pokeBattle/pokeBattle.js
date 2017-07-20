function setup(){
    createCanvas(800,800);
    background('white');
    fill("green");
    ellipse(100, 575, 200 ,100);
    fill("red");
    ellipse(100, 510, 110);
    fill("green");
    ellipse(650, 175, 200, 100);
    fill("violet");
    ellipse(650, 100, 110);
}

var pokemonHP1 = 100
var pokemonHP2 = 100

function draw(){
    fill("green")
    rect(600, 600, 150, 20);
    fill("black");
    textSize(12);
    text("HP: " + pokemonHP1, 620,615);
    //pokemon1 HP bar
    fill("green");
    rect(200, 150, 150, 20);
    fill("black");
    textSize(12);
    text("HP: " + pokemonHP2, 220,165);
    //pokemon2 HP bar
    rect(210, 600, 150, 30);
    fill("pink");
    textSize(20);
    text("Flamethrower",222,622);
    //Flamethrower Pokemon move
    fill("black");
    rect(210, 640, 150, 30);
    fill("pink");
    textSize(20);
    text("Fire Blast",222,662);
    //Fire Blast Pokemon move
    fill("black");
    rect(400, 600, 150, 30);
    fill("pink");
    textSize(20);
    text("Heat Wave",422,622);
    //Heat Wave Pokemon move
    fill("black");
    rect(400, 640, 150, 30);
    fill("pink");
    textSize(20);
    text("Ember",422,662);
    //Ember Pokemon move
    

}
function mouseClicked(){
    if (mouseX >= 180 && mouseY >= 600 && mouseX <= 250 && mouseY <= 800){
        pokemonHP2 = pokemonHP2 - 10
    }
        

}
