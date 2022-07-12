// creating an array
const fruits = ["Apple", "Orange", "Guava", "Strawberry"]
// This returns length of an array
console.log(fruits.length)
// To fetch an individual element from the array
// Using an invalid index to access a JavaScript array element returns the value undefined
console.log(fruits[0])

// Ways to iterate over an array

for(let i = 0; i < fruits.length; i++){
    console.log("Using the for loop " + fruits[i]);
}

fruits.forEach(e => {
    console.log("Using the forEach loop " + e)
})

for(const e of fruits){
    console.log("Using the for-of loop " + e)
}

var name = "Helloing my name"
if(name.search("ing")){
    console.log("Ture")
}