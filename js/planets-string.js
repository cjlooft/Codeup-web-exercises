(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    planetsArray = planetsString.split("|");
    console.log(planetsArray);
    /**

* TODO:
        * Create a string with <br> tags between each planet. console.log() your
    * results. Why might this be useful?
    **/


var BreakingPlanets = planetsArray.join("<br>");

    console.log(BreakingPlanets);

    document.write(BreakingPlanets);





    document.body.innerHTML = BreakingPlanets;
    /**

     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


    var plaentList = "<ul>";


    var delimeter = "</li><li>";
    var planetList = "<ul><li>" + planetsArray.join(delimeter) +
        "</li></ul>";

    document.body.innerHTML  = planetList;




})();


