var count = 0


while (count < 500) {
    count++;
    if (count % 2 === 0) {
        console.log(count);
    }
}

// 21 type game
var hitMe = function () {
    return Math.floor((Math.random() * 11) + 1)
}

var count = 0;
if (confirm("Do you want to play a game?")) {
    while (count <= 21) {
        if (confirm("Your score is " + count + " . Do you want another card?")) {
            count += hitMe();
        }
        else {
            break;
        }
    }
    if (count > 21) {
        alert("You busted!");
    }
    if (count = 21) {
        alert("You are da-Bomb 💣");

    } else {
        ("Your score is " + count);
    }
}

// magic number game

if (confirm("Do you want to play a game?")) {
    var magicNumber = Math.floor((Math.random() * 100) + 1);

    do {
         ourGuess = parseInt(prompt("Guess a number between 1 and 100"));
                if (ourGuess < magicNumber) {
                    alert("Reach higher!");
         } else if  (ourGuess > magicNumber) {
                    alert("Too high! Go ahead, go lower!");
         }
}
    while (ourGuess !== magicNumber)

    alert("🎇🎇  🚀Congratulations, you guessed it! I think you are a little bit psychic.🎇🎆🎇")
}
 //


for (var count = 0 ; count < 10; count++) {
    console.log (count);
}


for (var count = 2; count <100)
{ console.log (count);
    (count * 5);
}