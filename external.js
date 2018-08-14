


"use strict";


console.log ("Hello from inline JavaScript");

alert("Welcome to my Website");



var favoriteColor = "What is your favorite color?";



var userFavoriteColor = prompt(favoriteColor, " ");
console.log("The user entered:" + " ");




alert("Great, " + userFavoriteColor + " is my favorite color, too!");


var movieCost = 3;
var littleMermaidDays = 3;
var brotherBearDays = 5;
var herculesDays = 1;
var littleMermaidTotal = littleMermaidDays*movieCost;
var brotherBearTotal = brotherBearDays*movieCost;
var herculesTotal = herculesDays*movieCost;
var movieRentalCostTotal = littleMermaidTotal + brotherBearTotal + herculesTotal;


var movieRentals = "I rented the movie the Little Mermaid for " + littleMermaidDays + " days, Brother Bear for " + brotherBearDays + "days, and Hercules for " + herculesDays + " day. The movie rental cost is" + movieCost + " dollars a day per movie. The total cost for the rental of these movies was"
    +  movieRentalCostTotal + " dollars.";

console.log (movieRentals);

alert("You must pay " + movieRentalCostTotal + " dollars for your movie rentals or Pennywse will be coming to your house.")


var googlePay = 400;
var amazonPay= 380;
var facebookPay = 350;
var facebookHours =10;
var googleHours = 6;
var amazonHours = 4;

var myPayCheck = (googlePay * googleHours) + (facebookPay * facebookHours) + (amazonHours * amazonPay);


var workingForMoney = "I was busy this week working for Google, (" + googleHours + " hours), Facebook (" +
    facebookHours + " hours), and Amazon, ("  + amazonHours + " hours). I earned " + myPayCheck +
    " dollars this week. But I spent more than that..wonk,wonk,wonk..";
console.log (workingForMoney);

alert("Wow! you earned $" + myPayCheck.toFixed(2) + " this week!");





var astrophysicsClassHasSpace = true;
var scheduleWorksForStudent = false;



var canGoToClass = (astrophysicsClass && available);


var available = "1";
var cannotgo = "0";


var boughtMorethan2 = true;
var expiredCoupon = false;
var offerIsValid = true;
var premiumMember =  false;


var purchaser = ( boughtMorethan2 && coupon  || premiumMember);






funtcion yell (input)
{
    return input.toUpperCase();
}
    alert (yell("Hi, everybody!"))
