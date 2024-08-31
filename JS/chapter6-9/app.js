
// Q.1:
// Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:


var a = 10;

console.log("Result: \n The value of a is: " +a + "\n .......................")


console.log("The value of ++a is: " + ++a )
console.log(" Now the value of a is: " + a )


console.log("The value of ++a is: " + a++ )
console.log(" Now the value of a is: " + a )


console.log("The value of --a is: " + --a )
console.log(" Now the value of a is: " + a )

console.log("The value of a-- is: " + a-- )
console.log(" Now the value of a is: " + a )

// Q.2:


var a = 2, b = 1;
console.log("a is " + a)
console.log("b is " + b)

// Explain the output at each stage:

    // --a;                    //  a = 1
    // --a - --b;              //  0 - 0
    // --a - --b + ++b;        //  (-1) - (-1) + 0 = 0 
    // --a - --b + ++b + b--;  //  (1) - (0) + 1 + 1 = 3


var result = --a - --b + ++b + b--;  // = 3
console.log("result is " + result)


// Q.3:


var userName = prompt("please fill your name");
console.log("welcome to our website Mr. " + userName)


// Q.5:


var number = "5";
var userNumber = prompt("write a number")

if (number === userNumber){
    console.log("hello")
}

else{
    console.log( number + " x 1 = " + (number * 1));
    console.log( number + " x 1 = " + (number * 2));
    console.log( number + " x 1 = " + (number * 3));
    console.log( number + " x 1 = " + (number * 4));
    console.log( number + " x 1 = " + (number * 5));
    console.log( number + " x 1 = " + (number * 6));
    console.log( number + " x 1 = " + (number * 7));
    console.log( number + " x 1 = " + (number * 8));
    console.log( number + " x 1 = " + (number * 9));
    console.log( number + " x 1 = " + (number * 10));

}
 