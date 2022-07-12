// Write - Your - Code - Here
// https://www.educative.io/courses/the-complete-javascript-course-build-a-real-world-app-from-scratch/g7pPG8rBx59
// Needs to be completed
const choices = [
    {
        index : 0,
        name : "Quits",
    },
    {
        index : 1,
        name : "Show existing links",
    },
    {
        index : 2,
        name : "Add a link",
    },
    {
        index : 3,
        name : "Remove a link",
    },
]

let currentChoice = Number(prompt("Enter your choice: "));
const links = ['Hello'];
if(currentChoice > -1 && currentChoice < 4){
    while(currentChoice !== 0){
        if(currentChoice == 1){
            let allLinks = links.map(link => alert(link));
        }else if(currentChoice == 2){
            let newLink = prompt("Enter the link: ");
            let linkFormat = `https://${newLink}/`
            links.push(linkFormat);
        }else if(currentChoice == 3){
            links.pop(links[links.length-1]);
        }
        currentChoice = Number(prompt("Enter your choice: "));

}
}else{
    alert('Please a enter a valid value')
}
