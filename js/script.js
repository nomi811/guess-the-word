const guessedLettersElement = document.querySelector(".guessed-letters")
const buttonGuess = document.querySelector(".guess");
const textInput = document.querySelector(".letter");
const progress = document.querySelector(".word-in-progress");
const remaining = document.querySelector(".remaining");
const remainingSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const buttonAgain = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = [];

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
  progress.innerText = placeholderLetters.join("");
};

placeholder(word);

buttonGuess.addEventListener("click", function (e) {
  e.preventDefault();
  message.innerText = "";
  const guess = textInput.value;
  //console.log(guess);


  const goodGuess = validatePlayersInput(guess);

  if (goodGuess) {
    makeGuess(guess);
  }
  textInput.value = "";
});

const validatePlayersInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
    message.innerText = "Please enter a letter";
  } else if (input.length > 1) {
    message.innerText = "You entered too many letters. Please just enter one letter";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "You need to enter a letter please";
  } else {
    return input;
  }
};

const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You've already guessed that letter. Try again!";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
  }
};
