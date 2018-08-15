


//Make an array containing 20 random numbers between 1 and 6.





    var TwentyRandomNumbers = [];
    for (var i = 0; i <=20; i++)
    {
       TwentyRandomNumbers.push(Math.floor(Math.random() * 6) + 1)
    }

    var str = "";
    for (var i = 0; i <20; i++)
    {
   str += "," + TwentyRandomNumbers[i];
    }

//Make a forEach that adds 10 to each number

    var Add10toTwentyNumbers = TwentyRandomNumbers;

        Add10toTwentyNumbers.forEach(function(number) {
        console.log(number + 10);
         });

//* Make a forEach that gets the average of all the numbers
// first add all of the numbers , than divide the numbers by 20

TwentyRandomNumbers.forEach(function(number) {
  console.log((0 += TwentyRandomNumbers[i])/ TwentyRandomNumbers.length);
});

// this is what I have to change into the "forEach" statement  numbers  20
    var total = 0;
    for (i = 0; i < TwentyRandomNumbers.length; i++) {
         total += TwentyRandomNumbers[i];
    }
    var avg = total / TwentyRandomNumbers.length;
    console.log(avg);

//Make a forEach that only outputs the even numbers

TwentyRandomNumbers.forEach(function(number) {
   if (number % === 0); {
   console.log (function(number));

});



Loop and Array challenges

Make a function called randomIntBetween(min, max) that returns a random number between the min and the max.

    Make a function called coinFlip() that returns either 0 or 1, randomly
Make a function called rollDie() that returns an integer between 1 and 6.
Make a function called twoDice() that returns the sum of rolling two six sided dice.
    Make a function called twentySidedDie() that returns a random integer between 1 and 20.
Make a function called twelveSidedDie() that returns a random integer between 1 and 12.
Make a function called tetrahedron() that returns a random integer between 1 and 4.

Use what you know about functions, loops, and arrays to complete the following:

    Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls function should return an array of that length, where each element of the array is the result of the rollDie function.


Make a function called
listOfRollsFromDieFunc(numberOfRoles, diceFunction) that takes in two arguments:
    The first argument is the number of rolls you want to make.
    The second argument is a function that contains the function definition for the type of die you want to roll.
    For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the result of calling the tetrahedron function.