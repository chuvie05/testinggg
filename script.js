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
  E: [
    { word: "Egg", img: "cards/eggcard.png", audio: "audio/Egg.wav" }
  ],
  F: [
    { word: "Fire", img: "cards/firecard.png", audio: "audio/fire.wav" },
    { word: "Fork", img: "cards/forkcard.png", audio: "audio/fork.wav" }
  ],
  G: [
    { word: "Grass", img: "cards/grasscard.png", audio: "audio/Grass.wav" },
    { word: "Grape", img: "cards/grapecard.png", audio: "audio/Grape.wav" }
  ],
  H: [
    { word: "House", img: "cards/housecard.png", audio: "audio/House.wav" },
    { word: "Happy", img: "cards/happycard.png", audio: "audio/Happy.wav" }
  ],
  I: [
    { word: "Igloo", img: "cards/igloo.png", audio: "audio/Igloo.wav" },
    { word: "Icecream", img: "cards/icecreamcard.png", audio: "audio/Ice-cream.wav" }
  ]
};

//click event
buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const letter = btn.dataset.letter;
    const data = cardsData[letter];

    if (!data) return;

    // Pick a random card
    const randomCard = data[Math.floor(Math.random() * data.length)];

    // content
    cardImage.src = randomCard.img;
    cardWord.textContent = randomCard.word;
    cardAudio.src = randomCard.audio;

    // Flip
    card.classList.add("flipped");

    // Play audio
    cardAudio.play();
  });
});

// --- Popup Credits ---
const creditsBtn = document.getElementById('creditsBtn');
const creditsPopup = document.getElementById('creditsPopup');
const closePopup = document.getElementById('closePopup');

// Open popup
creditsBtn.addEventListener('click', () => {
  creditsPopup.style.display = 'block';
});

// Close popup
closePopup.addEventListener('click', () => {
  creditsPopup.style.display = 'none';
});

// Close popup when clicking outside content
window.addEventListener('click', (event) => {
  if (event.target === creditsPopup) {
    creditsPopup.style.display = 'none';
  }
});