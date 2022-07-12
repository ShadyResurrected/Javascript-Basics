var i = 0;
while(i < 7){
    console.log(i);
    i++;
}

// Take input until the user enters number less than or equal to 50
let number = Number(prompt("Enter the number: "));
while(number > 50){
    number = Number(prompt("Enter the number again: "));
    console.log(number);
}
