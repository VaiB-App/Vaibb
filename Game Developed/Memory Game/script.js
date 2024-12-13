
const cards = document.querySelectorAll(".card");

let matchedCard = 0;
let cardOne, cardTwo;
let disableDeck = false;



//Getting user clicked card
function flipCard(e) {
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disableDeck){
    clickedCard.classList.add("flip");
    if(!cardOne) {
        return cardOne = clickedCard;
    }
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector("img").src,
    cardTwoImg = cardTwo.querySelector("img").src;
    matchCards(cardOneImg, cardTwoImg);
}
}

function matchCards(img1, img2) {
    if (img1 === img2) {
        matchedCard++;
        
        // Check if all cards are matched
        if (matchedCard === 8) {
            // Show SweetAlert message
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Congratulations! You matched all the cards!',
                showConfirmButton: false,
                timer: 5000
            });

            // Shuffle cards after 1 second
            setTimeout(() => {
                return shuffleCard();
            }, 1000);
        }

        cardOne.removeEventListener("click", flipCard);
        cardTwo.removeEventListener("click", flipCard);
        cardOne = cardTwo = "";
        return disableDeck = false;
    }

    // If cards don't match, add shake effect
    setTimeout(() => {
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    }, 400);

setTimeout(() =>{
   
      
    //Removing both    shake & flip classes from both the class after 1.2 sec
    cardOne.classList.remove("shake", "flip");
    cardTwo.classList.remove("shake", "flip");
    cardOne= cardTwo = ""; // setting both card value to blank
    disableDeck = false;
}, 1200);

}




function shuffleCard(){
    matchedCard = 0;
    cardOne = cardTwo = "";
    disableDeck = false;
    // Creating array of 16 items
    let arr =[1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);  // sorting array randomly

    //removing flip class from all cards and passing random image to each card
    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imgTag = card.querySelector("img");
        imgTag.src = `Memory Card Game Images/img-${arr[index]}.png`
        card.addEventListener("click", flipCard);
    })
}

shuffleCard();


//Adding click event to all cards
cards.forEach(card => {
    //card.classList.add("flip");    // To flip all the cards
    card.addEventListener("click", flipCard);
})































