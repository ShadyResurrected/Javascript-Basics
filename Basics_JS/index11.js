// Object destructuring
const person = {
    firstName: 'Chandradeep',
    lastName: 'Chandra',
}

const { firstName, lastName } = person;
console.log(firstName)

// About JSON
const todos = [
    {
        id : 1,
        Name : "Go for a walk",
        isCompleted : true,
    },
    
    {
        id : 2,
        Name : "Listen to music",
        isCompleted : false,
    },
    {
        id : 3,
        Name : "Study DSA",
        isCompleted : false,
    }
]

const todosJSON = JSON.stringify(todos);
console.log(todosJSON)

// Constructor function
function Person(fName, lName, age){
    this.fName = fName;
    this.lName = lName;
    this.age = age;
}

// Creating an object of the above defined function
const person1 = new Person("Chandra","deep",23);
console.log(person1)

// prototype in js