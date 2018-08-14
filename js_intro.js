



"use strict";




/* explanation - put a popup on the page displaying the message

var message = "Happy Birthday to you, you are now 48 years old, your next birthday will be in 295 days.";
var question = "Let's have a great day!";
var special = "You look very nice.";
alert (message);
prompt (message + question + special);


confirm (message + question);



console.log (message);

*/



var myName =  prompt ("What is your name?");

console.log(myName);

var birthday  = function (name) {
    var message = "Happy Birthday! " + name + "!";
    console.log(birthday);

    birthday(myName);
    birthday(myName);

    var confirmed = confirm('Are you sure you want to exit?');
    console.log(confirmed);


