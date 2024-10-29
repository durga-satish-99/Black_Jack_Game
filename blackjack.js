//----------------------BLACKJACK GAME  VARIABLES DECERATION PART------------------
// let firstcard = getrandomcard()
// let secondcard = getrandomcard()
let player ={
    Name:"Satish",      //object
    Bet:200
}
console.log(player.Name)
let cards = []
let sum = 0
let hasblackjack = false;
let isAlive = true
let message = ""
let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector('#sum-el')
let cardsEl = document.getElementById("cards-el")
// console.log(cards);
let playerEl = document.getElementById("player-el")
console.log(playerEl);
playerEl.textContent=player.Name+": $"+player.Bet
//-------------------------GET RANDOM CARD FUNCTION------------------------
function getrandomcard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1  //IT WILL GENERATE RANDOM CARDS[NUMBERS]
    if (randomNumber > 10) {
        return 10
    }
    else if (randomNumber === 1) {
        return 11
    }
    else {
        return randomNumber
    }
}
// let random = getrandomcard()
function startgame() {
    // let isAlive = true
    let firstcard = getrandomcard()
    let secondcard = getrandomcard()
    cards = [firstcard, secondcard]    //ARRAY USED TO STORE  CARDS
    sum = firstcard + secondcard      //DISPLAY SUM
    rendergame()
}
function rendergame() {
    
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }
    
    //--------------------------BLACKJACK GAMEA LOGIC PART--------------------
    sumEl.textContent = "Sum:" + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? "
    } else if (sum === 21) {
        message = "You've got Blackjack! "
        hasblackjack = true;
    } else {
        message = "You're out of the game! "
        isAlive = false
    }
    messageEl.textContent = message
}
//----------------------NEW CARD BUTTON LOGIC-------------------------------
function newcard() {
    if (isAlive===true && hasblackjack===false)  {
        let card = getrandomcard();
        console.log(card);
        sum += card
        cards.push(card)   // pushing new card to an cards array
        rendergame()
    }
    }
