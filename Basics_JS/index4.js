// Pen is an object with its attributes
const pen = {
    type : "ballpoint",
    tip : 0.5,
    color : "blue",
};

console.log(pen.tip);

// To Modify the pen color
pen.color = "black"

// We can also dynamically add attributes to the object
pen.brand = "Reynolds";

// Creating an player in RPG
const player1 = {
    name : 'Souls born',
    health : 900,
    strength : 32
}
console.log(`Player ${player1.name} has strength ${player1.strength}`)

// An object property whose value is a function is called a method. Methods are used to define actions for an object. A method adds some behavior to an object.
function describe(character){
    console.log(`Player ${character.name} has strength ${character.strength} and health ${character.health}`)
}
describe(player1)

// To define a method inside a function
const player2 = {
    name : 'zero_deaths_senpai',
    health : 32,
    strength : 1000,

    // Defining a method
    // `this` is automatically set by JavaScript inside a method and represents the object on which the method was called
    describe(){
        console.log(`Player ${this.name} has strength ${this.strength} and health ${this.health}`)
    }
}

const h = player2.health;
const g = player2.health + 1;
console.log("Value is " + g)

player2.describe()