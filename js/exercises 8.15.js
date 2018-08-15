function fizzBuzz(num) {

    for (var x = 1; x <= num; x++) {

        if (x % 3 == 0 && x % 5 == 0) {
            console.log("fizzbuzz");

        } else if (x % 3 == 0) {
            console.log("fizz");

        } else if (x % 5 == 0) {
            console.log("buzz");


        } else {
            console.log(x);
        }
    }
}

fizzBuzz(50)

// new exercise
function fizzBuzz(number) {
    for (var i = 1; i <= number; i++) {

        if (i % 15 == 0) {
            console.log("FizzBuzz");
        } else if (i % 3 == 0) {
            console.log("Fizz");
        } else if (i % 5 == 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(50)

// new array bugs


var bugs = ["roach", "dragonfly", "spider", "mosquito", "ladybug", "earthworm", "wasp"];

    bugs.push("ant") //adds
     bugs.pop( ) //takses aways from the end

bugs.shift( );  //takes off the first item
bugs unshift();  //adds to the front

bugs[3]  //this will return "spider


bugs.indexof("roach");

    bugs.lastindexof("roach");

    bugs.sort();

    bugs.reverse()


bugs.indexOf("mosquito");

    bugs.slice(3,4);
   // will take out spider

 var quickBrownFox = [ "The" , "quick", "brown", "fox", "jumped" , "over" , "the" , "lazy" , "dog" ];





var fruits = ["Banana", "Orange", "Apple", "Mango"];
var energy = fruits.join(" and ");

//"Banana and Orange and Apple and Mango"

var str = "How are you doing today?";
str.split(" ", 3);
(3) ["How", "are", "you"]



var planets = [
    'Mercury',
    'Venus',
    'Earth',
    'Mars',
    'Jupiter',
    'Saturn',
    'Uranus',
    'Neptune'
];

    planets.unshift("The Sun");

    planets.push("Pluto");

    planets.shift("The Sun");

    planets.pop("Pluto");


