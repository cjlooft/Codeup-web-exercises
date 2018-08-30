"use strict";
var words = [];

var intoLetters = split.word;

return intoLetters;


function DoLettersRepeat(letter)

for (var i = 0, i<word.length < ir++) {

    if i === j return i + 1


}



function countRepeating (word) {

    var mostRepetitions = 1;

    for (var i = 0; i<word.length; i++){



        for (var j=0;j<word.length; j++) {
            if (i != j) === word[j];


            else i == j  ===
        }
    }



}


the goal of the exercise  is to take a word and determine whether or not letters repeat and then determine how many times the letterr repeats in
    a word

the word has to be unstrung.constructor

split word

function howManyRepeated(str){
    const result = [];
    const strArr = str.toLowerCase().split("").sort().join("").match(/(.)\1+/g);

    if (strArr != null) {
        strArr.forEach((elem) => {
            result.push(elem[0]);
        });
    }
    return result;
}
console.log(...howManyRepeated(str));



var arr1=["b", "a", "n" , "a" , "n" , "a"];
var mf = 1;
var m = 0;
var item;
for (var i=0; i<arr1.length; i++)
{
    for (var j=i; j<arr1.length; j++)
    {
        if (arr1[i] == arr1[j])
            m++;
        if (mf<m)
        {
            mf=m;
            item = arr1[i];
        }
    }
    m=0;
}
console.log(item+" ( " +mf +" times ) ") ;

a ( 3 times )


