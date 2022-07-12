// Strings can be thought of as a array of characters
let str = "Hello My name is Chandradeep Chandra"
console.log(str[0])

// They can also be traversed using the for loops
// for(let i = 0; i < str.length ; i++){
//     console.log(str[i]);
// }

// Using the for of loop
// for(let letter of str){
//     console.log(letter)
// }

// Strings can also be converted into arrays
const Name = Array.from(str)
Name.forEach(e => {
    console.log(e)
})

// Sometimes a string is made of several parts separated by a particular value. In that case, it’s easy to obtain the individual parts by using the split() method
const monthList = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";
const months = monthList.split(","); // `,` is the separator in monthList.
console.log(months[0]); 

// Some more methods
const song = "Honky Tonk Women";

console.log(song.startsWith("Honk")); // true
console.log(song.startsWith("honk")); // false
console.log(song.startsWith("Tonk")); // false
console.log(song.endsWith("men")); // true

console.log(song.indexOf("onk")); // 1
console.log(song.indexOf("Onk")); // -1 because of case mismatch