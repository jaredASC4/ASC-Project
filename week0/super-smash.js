var prompt = require('prompt-sync')();
// 
// get input from the user. 
// 


var randomItem = require('random-item');
 
var choice1;
var choice2;

var mashArray = ["Final Destination","The Great Maze","New Pork City","Spear Pillar"];
var firstQuestion = [5, 10];
var secondQuestion = ["Little Mac", "Toon Link"];

function question1(){
    choice1 = prompt("How many times will you strike?");
    if (choice1 == 5){
       firstQuestion.push(5);
    }else if(choice1 == 10){
        firstQuestion.push(10);
    }else{
        console.log("Are you gonna strike or nah?");
    }
}

function question2(){
    choice2 = prompt("Who will you choose to fight?");
    if (choice2 == "Little Mac"){
        secondQuestion.push("Little Mac");
    }else if(choice2 == "Toon Link"){
        secondQuestion.push("Toon Link");
    }else{
        console.log("Are you gonna choose someone to fight or nah?");
    }
}

function endSpeech(){
    console.log("You fought " + choice2 + " in the " + randomItem(["Final Destination","The Great Maze","New Pork City","Spear Pillar"]) + " and hit them" + " " + choice1 + " times. Too bad! Mewtwo wins.")
}


question1();
question2();
endSpeech();