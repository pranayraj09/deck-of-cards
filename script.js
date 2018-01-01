
let suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
let cards = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "0", "J", "Q", "K"];

let numberOfCards = 5;
let totalCards = [];

for(let i = 0; i < suits.length; i++){
    for(let j = 0; j < cards.length; j++){
        totalCards.push(suits[i] + '-' + cards[j])
    }
}

function getRandom() {
    for(let a = 1; a <= numberOfCards; a++){
        $('#'+"num-top-"+a).text("");
        $('#'+"num-bottom-"+a).text("");
        $('#'+'cardIcon'+a).removeClass()
    }

    for(let b = 1; b <= numberOfCards; b++){
        let randomIndex = randomCard();
        $('#'+"num-top-"+b).text(totalCards[randomIndex].substring(totalCards[randomIndex].length,totalCards[randomIndex].length-1));
        $('#'+"num-bottom-"+b).text(totalCards[randomIndex].substring(totalCards[randomIndex].length,totalCards[randomIndex].length-1));
        $('#'+'cardIcon'+b).addClass(totalCards[randomIndex].substring(0,totalCards[randomIndex].length-2))
        totalCards.splice(randomIndex, 1);
    }

    document.getElementById('count').innerHTML = totalCards.length;
    if(totalCards.length === 0){
        document.getElementById('countText').innerHTML = 'Deck is empty';
    }
    if(totalCards.length === 0){
        document.getElementById('deal').disabled = true;
        document.getElementById('deal').style.backgroundColor = "grey";
    }
}

function randomCard(){
    return Math.floor(Math.random() * totalCards.length)
}