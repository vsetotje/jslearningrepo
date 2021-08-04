// That here is the first faceless version I wrote, but it was a bit ahead of the course. All commented now. 
// Everything else is part of the working project.


//function getRandomIntInclusive(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   }

// let firstcard = getRandomIntInclusive(2, 11);
// let secondCard = getRandomIntInclusive(2, 11);
// let sum = firstcard + secondCard;
// let hasBJ = false;
// console.log(sum)
// if (sum < 21) {
//     console.log("one more?")
//     } else if (sum === 21)
//     {
//         console.log("You won!❤️")
//         hasBJ = true;
//     }
//     else {
//         console.log("You lost!🥺")
//     }
// function addCard() {
//     let card = getRandomIntInclusive(2, 11);
//     sum = sum + card;
// }

// if (hasBJ === false){
//     addCard();
//     if (sum === 21){
//         console.log(sum)
//         console.log("You won!❤️")
//         hasBJ = true;
//     } else if(sum > 21){
//         console.log(sum)
//         console.log("You lost!🥺")
//     } else {
//         addCard();
//         if (sum === 21) 
//             {
//             console.log(sum)
//             console.log("You won!❤️")
//             hasBJ = true;
//             } else if(sum > 21)
//             {
//             console.log(sum)
//             console.log("You lost!🥺")
//             }
//             else {
//                 addCard();
//                 if (sum === 21) 
//                     {
//                     console.log(sum)
//                     console.log("You won!❤️")
//                     hasBJ = true;
//                     } else if(sum > 21)
//                     {
//                     console.log(sum)
//                     console.log("You lost!🥺")
//                     }
//         }
//     }
// }

let cards = []
let sum = 0
let hasBlackJack = false
let message = ""
let isAlive = false
let messageEl = document.getElementById("message-el")
let cardsEl = document.getElementById("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById("player-el")
let player = {
    name: "Master of Universe:",
    chips: 100
            }
console.log(playerEl)
playerEl.textContent = player.name + " " + player.chips + "$"


function startGame(){
    let firstCard = getRandomCard(1,13)
    let secondCard = getRandomCard(1,13)
    cards = [firstCard,secondCard]
    sum = firstCard + secondCard
    let isAlive = true
    console.log(firstCard)
    console.log(secondCard)
    renderGame()
    }

function getRandomCard(min, max) {
      
    let randomcardN =  Math.floor(Math.random() * (max - min + 1)) + min;
      if (randomcardN >= 11 && randomcardN <= 13)
      {
          return 10
      }else if (randomcardN === 1)
      {
          return 11
      } else {
          return randomcardN
      }
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    sumEl.innerText = sum
if (sum <= 20) {
    message = "Do you want to draw a new card? 🙂"
    isAlive = true
} else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🥳"
    hasBlackJack = true
} else {
    message = "You're out of the game! 😭"
    isAlive = false
}
    messageEl.innerText = message
}

function newCard()
    {
    if (isAlive === true && hasBlackJack === false)
    {
        let newCard1 = getRandomCard(1,13)
        sum += newCard1
        cards.push(newCard1)
        renderGame()
    }
}