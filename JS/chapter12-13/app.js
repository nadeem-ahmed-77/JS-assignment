
// Q.1:
// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122).


var char = prompt("Enter a character (number or letter)");

if (char && char.length === 1) {
    var asciiCode = char.charCodeAt(0);

    if (asciiCode >= 48 && asciiCode <= 57) {
        console.log("The input is a number.");
    } else if (asciiCode >= 65 && asciiCode <= 90) {
        console.log("The input is an uppercase letter.");
    } else if (asciiCode >= 97 && asciiCode <= 122) {
        console.log("The input is a lowercase letter.");
    } else {
        console.log("The input is not a number or a letter.");
    }
} else {
    console.log("Please enter a single character.");
}



// Q.2:
// Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.

var num1 = (prompt("Enter the first integer"));
var num2 = (prompt("Enter the second integer"));

num1 = Number(num1); 
num2 = Number(num2) ;

if (num1 > num2) {
    console.log("The larger number is: " + num1);
} else if (num2 > num1) {
    console.log("The larger number is: " + num2);
} else {
    console.log("Both numbers are equal.");
}

// Q.3:
//Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

var num = (prompt("Enter the number"));

num = Number(num)

if (num === 0 ) {
    console.log(  " number is " + num  );
} else if (num > 0) {
    console.log("The number is positive");
} else if (num < 0) {
    console.log("The number is negative");
} else {
    console.log(" unknown value");
}


// Q.4:

// Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise

var chaStr =  (prompt("Enter the string of length 1"));

chaStr = chaStr.toLowerCase()

if (chaStr === "a" || chaStr === "i" || chaStr=== "o" || chaStr === "u" ||chaStr === "e") {
    console.log(true);
} else {
    console.log(false);
}

// Q.5: 
// Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.

var correctPassward = "Karachi100"

var userPassword = prompt("enter your password")


// c. Validate the two passwords
if (!userPassword) {
    // i. Check if the user has entered a password
    console.log("Please enter your password.");
} else if (userPassword === correctPassword) {
    // ii. Check if both passwords are the same
    console.log("Correct! The password you entered matches the original password.");
} else {
    console.log("Incorrect password.");
}


// Q.6:
// This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }

var greeting;

var hour = 13;
// var hour = prompt("enter your number");

if (hour < 18){
    greeting = "Good day"
} else{
    greeting = "Good evening"
}

console.log(greeting)


// Q.7:

// Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements


var inputTime = prompt ("enter time");

inputTime = Number(inputTime);

if (inputTime >= 0 && inputTime < 1200){
    console.log("Good Morning")
}
else if (inputTime >= 1200 && inputTime < 1700){
    console.log("Good Afternoon")
}
else if (inputTime >= 1700 && inputTime < 2100){
    console.log("Good evening")
}
else if (inputTime >= 2100 && inputTime <= 2359){
    console.log("Good Night")
}
else{
    console.log("enter valid time")
}



