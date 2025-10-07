const buttons = document.querySelectorAll(".letter-btn");
const card = document.getElementById("card");
const cardImage = document.getElementById("card-image");
const cardWord = document.getElementById("card-word");
const cardAudio = document.getElementById("card-audio");

const cardsData = {
  A: [
    { word: "Apple", img: "cards/applecard.png", audio: "audio/apple.wav" },
    { word: "Ant", img: "cards/antcard.png", audio: "audio/ant.wav" },
    { word: "Arrow", img: "cards/arrowcard.png", audio: "audio/arrow.wav" }
  ],
  B: [
    { word: "Banana", img: "cards/bananacard.png", audio: "audio/banana.wav" },
    { word: "Book", img: "cards/bookcard.png", audio: "audio/book.wav" }
  ],
  C: [
    { word: "Cup", img: "cards/cupcard.png", audio: "audio/cup.wav" },
    { word: "Candy", img: "cards/candycard.png", audio: "audio/candy.wav" }
  ],
  D: [
    { word: "Duck", img: "cards/duckcard.png", audio: "audio/duck.wav" }
  ],
  F: [
    { word: "Fire", img: "cards/firecard.png", audio: "audio/fire.wav" },
    { word: "Fork", img: "cards/forkcard.png", audio: "audio/fork.wav" }
  ]
};

// Add click event for each button
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const letter = btn.dataset.letter;
    const data = cardsData[letter];

    if (!data) return;

    // Pick a random card from the selected letter
    const randomCard = data[Math.floor(Math.random() * data.length)];

    // Update content
    cardImage.src = randomCard.img;
    cardWord.textContent = randomCard.word;
    cardAudio.src = randomCard.audio;

    // Flip the card
    card.classList.add("flipped");

    // Play audio
    cardAudio.play();
  });
});