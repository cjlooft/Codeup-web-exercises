"use strict";

/*
 see note
var characters = word.split ("");
if (characters[characters.length-1] == "," ||
    characters[characters.length-1] == "." ||
    characters[characters.length-1] == "?" ||
    characters[characters.length-1] == "!" ||
    characters[characters.length-1] == "-" ||)
    characters.pop;
console.log(characers);
return characters.join(""))

*/ Instructor is trying to get the punctuation out of the sentence

function findLongestWord(str) {

    var longestWord = 0;

    var wordsArray = str.split(" ");





    //Instructor is trying to get the punctuation out of the sentence


    for(var i = 0; i < wordsArray.length; i++){
        if(wordsArray[i].length > longestWord){
            longestWord = wordsArray[i].length;
        }
    }
    return longestWord;
}

var mySentence  = "Supercalifragilisticexpialidocious, that sounds atrocious."
console.log(findLongestWord(mySentence));


document.write(findLongestWord(mySentence));