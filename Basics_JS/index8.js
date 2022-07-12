// JavaScript’s multi-paradigm nature means you can write imperative, object-oriented, or functional code, choosing the right tool for the job and leveraging your previous programming experience. 

const movieList = [
    {
        title: "Batman",
        year: 1989,
        director: "Tim Burton",
        imdbRating: 7.6
    },
    {
        title: "Batman Returns",
        year: 1992,
        director: "Tim Burton",
        imdbRating: 7.0
    },
    {
        title: "Batman Forever",
        year: 1995,
        director: "Joel Schumacher",
        imdbRating: 5.4
    },
    {
        title: "Batman & Robin",
        year: 1997,
        director: "Joel Schumacher",
        imdbRating: 3.7
    },
    {
        title: "Batman Begins",
        year: 2005,
        director: "Christopher Nolan",
        imdbRating: 8.3
    },
    {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        imdbRating: 9.0
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        imdbRating: 8.5
    }
];

// ## Imperative programming
// The previous program is an example of what is called imperative programming. In this paradigm, the programmer gives orders to the computer through a series of statements that modify the program state. Imperative programming focuses on describing how a program operates.

// The state of a program is the value of its global variables
// In imperative programming, the state can be modified anywhere in the source code. 
// In order to decrease the risk of accidental state mutation, a first step is to favor const over let whenever applicable for variable declarations.

// Another solution is to split the source code into subroutines called procedures or functions. This approach is called procedural programming and has the benefit of transforming some variables into local variables, which are only visible in the subroutine code

// Pure Functions
// A pure function is a function that has the following characteristics:
// Its outputs depend solely on its inputs
// It has no side effect

// A side effect is a change in program state or an interaction with the outside world. A database access or a console.log() statement are examples of side effects

// By design, a pure function is independent from the program state and must not access it. Such a function must accept parameters in order to do something useful.

// Pure Function
const titles = movies => {
    const titles = [];
    for (const movie of movies) {
        titles.push(movie.title);
    }
    return titles;
};

// Above function is now pure; instead of accessing the state, it uses parameters to achieve the desired behavior.

// Impure Function
const titles1 = () => {
    const titles = [];
    for (const movie of movieList) {
        titles.push(movie.title);
    }
    return titles;
};

console.log(titles(movieList));

// Map() Method
// The map() method takes an array as a parameter and creates a new array with the results of calling a provided function on every element in this array.

const nums = [1,2,3,4,5,6,7]
const squares = nums.map(e => e*e)
console.log(squares)

// Filter() Method
// The filter() method offers a way to test every element of an array against a provided function. Only elements that pass this test are added to the returned array.

const even = nums.filter(x => x%2 == 0)
console.log(even)

// reduce() Method

// We say that functions are first-class citizens in JavaScript, which means that they are treated equally to other types.

// Thanks to their first-class citizenry, functions can be combined together, rendering programs even more expressive and enabling a truly functional programming style. A function that takes another function as a parameter or returns another function is called a higher-order function