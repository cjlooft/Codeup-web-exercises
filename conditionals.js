"use strict";
var willingToEnterNumber = confirm("Would you like to enter a number?");

var userNumber = prompt("Please enter a number!");

if (!enteredNumber(number)) {
} else {
    if (isEven(number)) {
        alert("even");
    } else {
        alert("odd");
    }
    alert("Your number plus 100 is " + (parseFloat(number)) + 100);
    if (noNumber(null) {
        alert("You did not input a number!");
    } else if isNegative(number)) {
        alert("Your input is negative");
    } else if (isPositive(number)) {
        alert("Your input is positive");
    } else (isNaN(number)
    {

    }

    function isANumber(number) {
        return !isNaN();
    }

    function isNegative(number) {
        return input < 0;
    }

    function isPositive(number) {
        return input > 0;
    }

    function isEven(number) {
        return parseFloat(number) % 2 === 0;
    }

    function isOdd(number) {
        return parseFloat(number) % 2 === 1;

    }


    /* ########################################################################## */


    var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    var randomColor = colors[Math.floor(Math.random() * colors.length)];

    var userColor = prompt("What is your favorite color?");


    function analyzeColor(userColor) {

        if (userColor == "blue") {
            return "blue is the color of the sky";
        } else if (userColor == "red") {
            return "Strawberries are red";
        } else if (userColor == "pink") {
            return "Cotton candy is pink"
        )
}
else
{
    return "I don't know anything about " + userColor + ".";
}

console.log(analyzeColor(userColor));


// switch case with the color problem
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

var specialColor = prompt("what is your favorite color?");


switch (specialColor) {

    case "blue":
        console.log("blue is the color of the sky");
        break;
    case "red":
        console.log("Strawberries are red");
        break;
    case "pink":
        console.log("Cotton Candy is pink");
        break;
    default:
        console.log("I don't know anything about " + userColor + ".");
        break;
        console.log(specialColor);

}
// this is the Walmart "lucky number" exercise


        var totalAmount = prompt("What is the total of your purchases?");


        return Math.floor(Math.random() * (max - min)) + min;

    function calculateTotal(LuckyNumber, X) {

        var luckyNumber = Math.floor(Math.random() * 6);

        if luckyNumber == 0 {
            return == 1;

        } else if LuckyNumber == 1 {

            return CustomersTotal * .10;

        } else if LuckyNumber == 2 {
            return CustomersTotal * .25;

        } else if LuckyNumber == 3 {
            return CustomersTotal * .35;

        } else if Luckynumber == 5 {
            return CustomersTolat * .5;
        } else if LuckyNumber = 6 {
            return 0;
        }

}


var output =calculateTotal(CustomersTotal * (CustomerTotal* luckyNumber));
return output;

 calculateTotal(0, 100);// returns 100
 calculateTotal(4, 100); // returns 50
 calculateTotal(5, 100);// returns 0




        /* ########################################################################## */

        /**
         * TODO:
         * Suppose there's a promotion in Walmart, each customer is given a randomly
         * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
         * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
         * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
         * all for free!.
         *
         * Write a function named `calculateTotal` that accepts a lucky number and total
         * amount, and returns the discounted price.
         *
         * Example:
         * calculateTotal(0, 100) // returns 100
         * calculateTotal(4, 100) // returns 50
         * calculateTotal(5, 100) // returns 0
         *
         * Test your function by passing it various values and checking for the expected
         * return value.
         *
         *
         * var luckyNumber = Math.floor(Math.random() * 6);
         * var totalAmount = prompt("What is the total of your purchases, before tax?");
         *
         * function calculateTotal(luckyNumber, discountTotal, totalamount)
         *
         * {
    return Math.floor(Math.random() * (max - min) ) + min;
}
         luckyNumber
         if luckyNumber == 0
         if Luckynumber == 1
         if Luckynumber  == 2
         if Luckynumber  == 3
         if Luckynumbr  == 4

         if Luckynumber = 5;

         var output = /* do something to calculate output */
        ;
        return output;
    */

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 *
 *
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// var luckyNumber = Math.floor(Math.random() * 6);
