
// Q.1:


var cityName = prompt ("enter city name");

if (cityName === "Karachi"){
    console.log("Welcome to the city of lights!")
}


// Q.2:

var gender = prompt ("enter the gender");

if (gender === "male"){
    console.log("Goode Morning Sir.")
}
if (gender === "female"){
    console.log("Goode Morning Ma'am.")
}

// Q.3:

var colorSignal = prompt ("color of road traffice signal");

if (colorSignal === "Red"){
    console.log("Must Stop")
}
if (colorSignal === "Yellow"){
    console.log("Ready to move")
}
if (colorSignal === "Green"){
    console.log("Move now")
}

// Q.4:

// Write a program to take input remaining fuel in car (in
// litres) from user. If the current fuel is less than 0.25litres,
// show the message “Please refill the fuel in your car”


var fuel = prompt("remaining fuel in your car (in litr;es)")

if (fuel < 0.25  ){
    console.log("Please refill the fuel in your car");
}

// Q.5:



// a. 

var a = 4;
if (++a === 5){
alert("given condition for variable a is true");    // true
}


// b. 
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");    // false
}

// c. 
var c = 12;
if (c++ === 13){
alert("condition 1 is true");   // false
}
if (c === 13){
alert("condition 2 is true");   // true
}
if (++c < 14){
alert("condition 3 is true");   // false
}
if(c === 14){
alert("condition 4 is true");   // true
}

// d.
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost){
alert("The cost equals");                       // true
}

// e. 
if (true){
alert("True");      // true
}
if (false){
alert("False");
}

// f. 
if("car" < "cat"){
    alert("car is smaller than cat");   // true
}


// Q.6:

// Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:

// Show the total marks, marks obtained, percentage, grade &
// remarks like:

// Mark Sheet
// total marks
// Marks obtained: 219
// Percentage: 73%
// Grade: B
// Remarks: You need to improve

var marksPhysics = 80
var marksMath = 70
var marksChemistry = 69

var totalObtainedMarks = marksPhysics + marksMath + marksChemistry
var totalMarks= 300
var percentage = totalObtainedMarks * 100 / totalMarks

console.log(totalMarks)
console.log(totalObtainedMarks)
console.log(percentage + "%")


if (percentage >= 80){
    console.log('"Grade A-one"')
    console.log("Excellent")
}   

if (percentage >= 70 && percentage<=79){
    console.log('"Grade A"')
    console.log("Good")
}

if (percentage >= 60 && percentage<=69){
    console.log('" Grade B"')
    console.log("You need to improve")
}

if (percentage < 60 ){
    console.log('"Fail"')
    console.log("Sorry")
}

// Q.7:

// Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

var secretNumber = 8
var guessNumber   = (prompt ("insert your guess number"))

guessNumber = Number (guessNumber)

if(guessNumber === secretNumber) {
    console.log("Bingo! Correct answer");
}

else if (guessNumber+1 === secretNumber || guessNumber-1 === secretNumber) {
        console.log("Close enough to the correct answer")
}

else{
    console.log("sorry wrong guess")
}


//  Q.8:


var number = (prompt("Enter a number to check divisible by 3"));
number = Number(number)

if (number % 3 === 0) {
    console.log("The number " + number + " is divisible by 3.");
} else {
    console.log("The number " + number + " is not divisible by 3.");
}

//  Q.9:


var number = (prompt("Enter a number to check it even or odd"));

number = Number(number)

if (number % 2 === 0) {
    console.log("The number " + number + " is even.");
} else {
    console.log("The number " + number + " is odd.");
}


// Q.10. 



var temperature = (prompt("Enter the tempurature"));

temperature = Number(temperature);

if ( temperature > 40) {
        console.log(" It is too hot outside");
}
    else if ( temperature > 30) {
        console.log("The weather today is Normal.");
}
    else if ( temperature > 20) {
        console.log("Today's weather is Cool");
}   
    else if (temperature > 10){
        console.log("OMG! Today's weather is so Cool");
} 
    else{
    console.log("It's very cold outside.")
}


// Q.11: 
// Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = (prompt("Enter the first number"));
var secondNumber = (prompt("Enter the second number"));
var operation = prompt("Enter the operation (+, -, *, /, %)");

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)
var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
} 
    else if (operation === "-") {
    result = firstNumber - secondNumber;
} 
    else if (operation === "*") {
    result = firstNumber * secondNumber;
} 
    else if (operation === "/") {
    result = firstNumber / secondNumber;
} 
    else if (operation === "%") {
    result = firstNumber % secondNumber;
}
    else {
    result = "Invalid operation!";
}

console.log("Result: " + result);

///////////////////////////