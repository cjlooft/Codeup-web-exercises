"use strict";

var myNameIs = "What is your name?";
var name = prompt(myNameIs + " ");


        function sayHello(name) {

          return "Hello there " + name + "!";


        }



alert("Hello there " + name + "!");
sayHello(name);



        console.log(sayHello (name));



                var helloMessage = sayHello(name);


                    console.log(helloMessage);



                    var myName = "Josette" ;

                   console.log (sayHello(myName));




// inputing math


var random = Math.floor((Math.random() * 3) + 1);



function isTwo(random)
{
    if (random == 2) {
        return true;
    }
    if (random !==2) {
        return false;
    }

}

console.log("Random number is  " + random);
console.log(isTwo(random));




// calculator
var usersTotal = parseFloat (prompt("What is the total of your bill?"));
var usersTip = parseInt(prompt("What percent of the bill would you like to tip"))/100;


function calculateTip(bill, percentage) {


var tip  = (bill * percentage);
    return  tip;

}
console.log(usersTotal);
console.log(usersTip);

alert("The amount you should pay is $" + calculateTip(usersTotal, usersTip) + " for tip.");

console.log(calculateTip(20, .20));
console.log(calculateTip( 25.50, .25));
console.log(calculateTip(33.42,.15));




// discount




function applyDiscount(originalPrice, discountPercentage) {


    return   originalPrice -  (originalPrice * discountPercentage);
}


var userPrice = parseFloat(prompt("What is the price of your item?"));

var offeredDiscount = parseFloat(prompt("How much is the item being discounted (use a number e.g. 50, 75, 33")/100);

alert("This is the price of your item after the discount $" + applyDiscount(userPrice, offeredDiscount) );

var usersPrice = 100;
var offeredDiscount = .20;

console.log (applyDiscount (usersPrice, offeredDiscount));


<!-- This is a js exercise -->




function addSeven (number) {
var newNumber = number + 7;
return newNumber;
}


console.log(addSeven(30));
console.log(addSeven (3));
console.log (addSeven(-770));
console.log (addSeven ("lucky"));




/**
 * TODO:
 *
 * function applyDiscount(originalPrice, discountPercentage) {
 * var
 *
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
