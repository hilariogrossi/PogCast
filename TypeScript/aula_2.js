let a = [
    ['url', 'http://localhost'],
    ['port', 8080],

];

function funcao_1() {
    a.forEach(element => {
        console.log(element[0]);

    });

}

funcao_1();


enum CardSuits {Clubs, Hearts, Spades, Diamonds}

function funcao_2() {
    let b = 0

    if (b === CardSuits.Clubs) {
        alert('True');

    } else {
        alert('False');

    }

    console.log(CardSuits.Clubs);

}

funcao_2();
