<"use strict">
// if (type of num ==="string" || num < 1 \\ num !         also x+5  x+3 (adding 5 and 3 each time respectively



function fizzBuzz(num) {

for (var x = 1; x <=num; x++) {

    if (x % 3  == 0 && x % 5 == 0) {
        console.log("fizzbuzz");

    }else if (x % 3 == 0) {
        console.log("fizz");

    }else if (x % 5  == 0) {
            console.log("buzz");


        } else {
            console.log(x);
        }
    }
}

fizzBuzz(50)

// Array exercises...


var names = ["Justin" , "Alfred", "Brittany" , "Hannia"];

var writeOut = function (str) {
    for (var i = 0; i <str.length; i++) {
        console.log(str[i]);

    }
}



console.log(writeOut(names))



//


// this is somethin about arrays

cities.forEach(function (x, y, z))  x will be item, y will be index, z will be the full array


writeOut(str)


var holidays = ["Christmas", "New Years" , "Halloween" , "St. Patrick's Day" , "The 4th of July", "St. Valentine's Day" , "Thanksgiving", "Memorial Day", "Labor Day", "Groundhogs Day" , "Mother's Day", "Father's Day"];

writeOut(holidays);


var fruit = ["apple", "orange", "grapes" , "watermelon" , "lemons", "strawberries" , "pineapples", "pears"];
writeOut (fruit);




var word = prompt("Please enter a word");
writeOut (word);
var homeCity = "Runge";
var cities + [homeCity, "San Antonio" , "Cheyenne"];
for (var i = 0; i,cities.length; i++) {
    visitCity(cities[i]);
}


// console.log (str.charAt(I0);  is the same as console.log(str[i]);



