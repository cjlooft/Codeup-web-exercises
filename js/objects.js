(function() {
    "use strict";
    var person = {
        Employee: "157058",
        firstName: "Carmen",
        lastName: "Looft",
        preferredName: "Josette",
    }


    console.log(person.firstName);
    console.log(person.lastName);


    person.sayHello = function (input) {
        return `Hello' ${person.firstName} ${person.lastName}. I hope you have a wonderful day!`;
    }


    console.log(person.sayHello());


    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    console.log(shoppers);


    var discount;
    var newTotal;

    //      shoppers.forEach(function(shopper)

    for (var i = 0; i < shoppers.length; i++) {




        discount = shoppers[i].amount * .12;
        newTotal = shoppers[i].amount - discount;


        if (shoppers[i].amount >= 200) {
            console.log(shoppers[i].name + ", you get a 12% discount. Your discount is $" + discount + " and your total is $" + newTotal + ".");
        } else {

            console.log(shoppers[i].name + ", your total is $" + shoppers[i].amount);

        }
    }


    /*
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */


    /** TODO:
     *
     *
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */




    var books = [];


    var book1 = {
        title: "The Wizard of Oz",
        author: {
            firstName: "Frank L.",
            lastName: "Baum",
        }
    }

    var book2 = {
        title: "Charlotte's Web",
        author: {
            firstName: "E. B.",
            lastName: "White",
        }
    }


    var book3 = {
        title: "Anne of Green Gable",
        author: {
            firstName: "L. M.",
            lastName: "Montgomery",
        }
    }

    var book4 = {
        title: "To Kill A Mockingbird",
        author: {
            firstName: "Harper",
            lastName: "Lee",
        }
    }
    var book5 = {
        title: "The Martian",
        author: {
            firstName: "Andy",
            lastName:  "Weir",
        }
    }

    books.push(book1, book2, book3, book4, book5);


var bookListing = function(book, bookNum) {

    console.log("Book #" + bookNum);
    console.log("Title:" + book.title);
    console.log("Author: " + book.author.firstName + book.author.lastName);

}

        books.forEach(function (book, id)
    {

        bookListing(book, id + 1);


    /**
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
var createBook = function (title, author) {
    var book = {}
    book.title = title;
    if (typeof author ==== "string") {
        var names = suthor.split(" ");
        var authObj = {
            firstname: name[0],
            lastNmae; names[1]
        }
        }
        else if (typeof author === "object") {
        book.author = author;
        }

    return book;

    }

    console.log(createBook("The Salmon of Doubt", {firstName: "Douglas", lastName: "Adams"}));
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */

})();
