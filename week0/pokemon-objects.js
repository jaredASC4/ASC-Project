var charizard = {
    "attack" : "Blaze",
    "HP" : 266,
    "legendary" : false,
    "types" : ["Fire", "Flying"]
};

var pikachu = {
    "attack" : "Thunderbolt",
    "HP" : 124,
    "legendary" : false,
    "types" : "Electric"
};

var venusaur = {
    "attack" : "Leaf Storm",
    "HP" : 278,
    "legendary" : false,
    "types" : ["Grass", "Poison"]
};

var celebi = {
    "attack" : "Future Sight",
    "HP" : 140,
    "legendary" : true,
    "types" : ["Grass", "Psychic"]
};

var dragonite = {
    "attack" : "Hyper Beam",
    "HP" : 280,
    "legendary" : false,
    "types" : "Dragon"
    
};

var mew = {
    "attack" : "Explosion",
    "HP" : 300,
    "legendary" : true,
    "types" : "Psychic"
};

var roster = [charizard, pikachu, venusaur, celebi, dragonite, mew];

function printRoster(roster){
    for (var i = 0; i < roster.length; i++) {
        console.log(roster[i]);
        
    }
}

function pokemonAttacked(roster){
    for (var i = 0; i < roster.length; i++) {
        roster[i].HP -=10;
        console.log(roster.HP[i]);

    }
}

printRoster(roster);