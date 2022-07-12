// Modifying the structure of the html document
document.getElementById('languages').innerHTML += "<li>This is added</li>"

// Delete the HTML content of the list, replacing it with nothing
// document.getElementById("languages").innerHTML = "";

// Use the textContent property to modify the text content of a DOM element. Here is how to complete the title displayed by our page.
document.querySelector("h3").textContent += " for programming";

// Define the id attribute of the first title
document.querySelector("h3").setAttribute("id", "title");

// You can use the classList property to add or remove classes from a DOM element!
const titleElement = document.querySelector("h3"); // Grab the first h3
titleElement.classList.remove("beginning");        // Remove the class "beginning"
titleElement.classList.add("title");               // Add a class called "title"
console.log(titleElement);