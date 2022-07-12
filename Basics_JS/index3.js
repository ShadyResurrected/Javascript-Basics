function Greet(){
    console.log("Hello and welcome to Javascipt");
}
Greet();

// Function Expression
// This is an example of a function expression. A function expression defines a function as part of a larger expression, typically a variable assignment.
let name = function(){
    console.log("Hello this from name function")
}
name()

// Arrow Functions
const name1 = () => {
    console.log("Hello this is from name1 function")
}
name1()

let sum = (x,y) => {
    return x+y;
}
console.log(sum(12,3))

// No return statements is required when a single line is present in the arrow functions
let sum2 = x => x*x;
console.log(sum2(4))