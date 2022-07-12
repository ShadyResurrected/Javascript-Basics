// The following prints a Refernce error because currently it is in the temporal dead zone
// console.log(a);
let a = 10;

// The following prints a Refernce error because currently it is in the temporal dead zone
// console.log(d);
const d = 10;


// The following prints value of e because it is being hoisted(i.e., it is allocated memory)
// console.log(e);
var e = 10;

// Implicit conversion
console.log(5 + "Converted a number into a string")

// This is called explicit conversion. JavaScript has the Number() and String() commands that convert the value between the parenthesis to a number or a string.
var num1 = 4;
var num2 = String(num1);
console.log(num2)


var num3 = "This is awesome";
var num4 = Number(num3);
console.log(num3)

// Javascript has another type of conversion called the boolean conversion


// To accept input use the prompt function , but it only returns string type so to convert it to a number use Number function
const num = prompt("Enter a number : ");
console.log(Number(num) + 2)