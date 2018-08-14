"use strict";



// This one is done!!!!





function showMultiplicationTable(factoring) {
    for (var n = 1; n <= 10; n++) {

        console.log(n +" x " + factoring +" = " + (factoring * n));
    }
}
showMultiplicationTable(7)


//* Use a for loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even. For example:
//
//
// 123 is odd
// 80 is even
// 24 is even
// 199 is odd
// ...
var number;

function getRandomInt (min, max) {
    return Math.floor(Math.random() * (200 - 20)) + 20;
}
for (var i = 0; i <=10; i++) {



    if parseInt(RandomNumber % = 0)
    {console.log(RandomNumber +" is even");}

    else parseInt(RandomNumber % = 1;
    {console.log(Random Nmber + " is odd");}

}

// teacher solution:

for(var i = 0; i < 10; i++) {
    number = getRandomInt(20, 200);
    message = "";
    if(number % 2 === 0) {
        message = " is even";
    } else {
        message = " is odd";
    }

    console.log(number + message);


//*Create a for loop that uses console.log to create the output shown below.
//
//
// 1
// 22
// 333
// 4444
// 55555
// 666666
// 7777777
// 88888888
// 999999999


This one is done!!!!!!!!!!!!!!

//

var output;

    for (var i = 1; i <= 9; i++) {
        output = "";
        for (var j = 1; j <= i; j++) {
            output +=i;
        }
        console.log(output);

    }



//* subtracting by 5's


    var y = 5;
    if (var x = 100;x <= 0;x - 5) {
return(x-y);

        console.log(x - y);
    }



for(var i = 100; i >= 5; i-=5) {
    console.log(i);
