
// Q.1:

var num1 = 5;
var num2 = 3;

var sum = num1 + num2;
console.log("Sum of " + num1 + " and " + num2 + " is " + sum)

// Q.2: 
//Repeat task1 for subtraction, multiplication, division & modulus.;

sum = num1 - num2;
console.log(sum)

sum = num1 * num2;
console.log(sum);

sum = num1 / num2;
console.log(sum)

sum = num1 % num2;
console.log(sum)



////////////
//  Q.3:

// a. declare a variable.
let myVariable;

// b. value of variable.
console.log("Value after variable declaration is: " + myVariable );

// c. intialize the variable.
myVariable = 5;

// d. intial value of variable. 
console.log("Initial value: " + myVariable );

// e. Increment the variable.
myVariable++;

// f. after increment value.
console.log("Value after increment is: " + myVariable );

// g. Add 7 to the variable.
myVariable += 7;

// h. Show the value after adding 7.
console.log("Value after addition 7 is: " + myVariable );

// i. Decrement the variable
myVariable--;

// j. Show the value after decrement.
console.log("Value after decrement is: " + myVariable );

// k. Show the remainder after dividing the variable’s value by 3
var remainder = myVariable % 3;

// l. Output the remainder
console.log("The remainder is: " + remainder );

////////////////

// Q.4:

var movieTicket = 600;
var noOfTicket= 5;

var movieCost=  movieTicket * noOfTicket;
console.log( "Total cost to buy 5 tickets to a movie is " +movieCost+"PKR");


// Q.5"

var number = 4; 

        // Display the multiplication table in the browser
        console.log("Table of " + number );

        console.log(number + " x 1 = " + (number * 1));
        console.log(number + " x 2 = " + (number * 2));
        console.log(number + " x 3 = " + (number * 3));
        console.log(number + " x 4 = " + (number * 4));
        console.log(number + " x 5 = " + (number * 5));
        console.log(number + " x 6 = " + (number * 6));
        console.log(number + " x 7 = " + (number * 7));
        console.log(number + " x 8 = " + (number * 8));
        console.log(number + " x 9 = " + (number * 9));
        console.log(number + " x 10 = " + (number * 10));
        
// Q.6"

var celsius = 25;  
//  Convert Celsius to Fahrenheit
var fahrenheitTemp = (celsius * 9/5) + 32;
//  conversion result
console.log(celsius + "°C is " + fahrenheitTemp + "°F");

var fahrenheit = 70; 
//  convert Fahrenheit to Celsius
var celsiusTemp = (fahrenheit - 32) * 5/9;

//  conversion result
console.log(fahrenheit + "°F is " + celsiusTemp + "°C");


// Q.7:

console.log("Shopping Cart")

var item1Price = 650 ;
var item2Price = 100;
var orderQitem1 = 3;
var orderQitem2 = 7;
var shipCharges = 100;

var totalCost = item1Price * orderQitem1 + item2Price * orderQitem2 + shipCharges
console.log("Total Cost of your order is " + totalCost)


//  Q.8: 


console.log("Marks Sheet")
var totalMarks = 980;
var marksObtained= 804;

var percentage =  marksObtained * 100 / totalMarks 
console.log("percentage is " + percentage)


//  Q.9: 


console.log("Currency in PKR")

var dollerUS = 10;
var riyalSaudi = 25;
var exchangeUSRate = 104.80 // 1 US Doller in Pak Rupee
var exchangeSARate = 28     // 1 SA Riyal in Pak Rupee


var convertUS = dollerUS * exchangeUSRate
var convertSA = riyalSaudi * exchangeSARate

var totalPakRupees = convertUS + convertSA
console.log("Total Currency in PKR " + totalPakRupees)


// Q.10:

var number1 = 7;

number1 += 5                // 7 + 5 = 12
var result = number1 * 10   // 12 * 10 = 120
console.log(result / 2);    // 120 / 2 = 60

//////

// Q.11:

// The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable. 
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

console.log("Age Calculator")

var currentYear = 2016;
var birthYear = 1992;

//   Calculate their two possible ages
var ageThisYear = currentYear - birthYear;
var ageLastYear = ageThisYear - 1;

console.log(currentYear)
console.log(birthYear)
console.log(ageThisYear)
console.log(ageLastYear)

////////////

// Q.12:


// a. Store a radius into a variable
var radius = 20;
console.log("Radius of a circle: " + radius) 

// b. circumference of circle
let circumference = 2 * 3.142 * radius;
console.log("The circumference is " + circumference);

// c. Calculate the area of Circle
let area = 3.142 * radius * radius;
console.log("The area is " + area);


// Q.12:

// The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.




// a. favorite snack into a variable
var favoriteSnack = "chocolate chips"; // Replace with your favorite snack
console.log("Favourite Sanck: " +favoriteSnack)

// b. current age into a variable
var currentAge = 15; 
console.log("Current age: " + currentAge)

// c. maximum age into a variable
var maxAge = 65; 
console.log("Estimated maximum Age: " +maxAge)

// d. estimated amount per day
var amountPerDay = 3; 
console.log("Amount of snacks per day: " +amountPerDay)

// e. Calculate how many you would eat total for the rest of your life
var yearsRemaining = maxAge - currentAge;
var totalSnacks = yearsRemaining * 365 * amountPerDay;

console.log("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");
