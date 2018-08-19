(function() {
    "use strict";


    var circle = {
        radius: 3,


        function getArea(radius)
    {
        return Math.PI * (circle.radius + circle.radius);

    }

    console.log(getArea(circle.radius));

    /*

        getArea: function () {


            var area = Math.PI * this.radius * this.radius;
            return area;

        }


    */
    area: getArea(this.circle),
        rounded
:
    doRounding(this.area), console


}


    logInfo: Function(doRounding)
    {
        if (doRounding) {
            console.log("The approximate area of a circl of radius " + this.radius + " is " + this.getArea());
        } else {
            console.log("Area of a circle with radius: " = this.radius + ", is: ");
        }


};



    function doRounding(input) {
    input = getArea(circle.radius);
    return Math.round(input);

}

   console.log doRounding();

        // TODO: complete this method.

        // If doRounding is true, round the result to the nearest integer.
        // Otherwise, output the complete value




            // TODO: complete this method.

            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value

            console.log("Area of a circle with radius: " + this.radius + ", is: ");

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");


    circle.radius = 5

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();
/*
*
 var itemForSale;= {
    "price": 2.99,

    "logPrice": function(weWantToRoundPrice)  {
         if (weWantToRoundPrice) {
        console.log("the approximate price is: $" = Math.round(this.price));
         } else {
         console.log("The exact price is: $" + this.price);
        }
    }
};

itemForSale.logPrice(true);
itemforSale. logPrice(false);
itemForSale.price = 5.99;
itemForSale.logPrice


        }
}
*/