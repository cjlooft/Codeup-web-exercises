(function () {
    "use strict";

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
    console.log(planets);

    planets.push("Pluto");
    console.log(planets);

    planets.shift("The Sun");
    console.log(planets);

    planets.pop("Pluto");
    console.log(planets);


    console.log(planets.indexOf("Earth"));

    planets.reverse();
    console.log(planets);


    planets.sort();
    console.log(planets);



