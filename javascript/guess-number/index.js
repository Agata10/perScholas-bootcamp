// Create your game here!
const p = document.createElement("p");
const app = document.getElementById("app");
const number = Math.floor(Math.random() * 100 + 1);
let guessesRemaining = 10;

while (guessesRemaining > 0) {
  const userGuess = window.prompt("Guess a number between 1 and 100:");

  if (userNumber === null) {
    window.alert("You close the tab!");
    break;
  }
  const userNumber = Number(userGuess);
  if (userGuess === number) {
    window.alert("Correct!");
    break;
  }
  p.textContent = `Guesses remaining ${guessesRemaining}`;
  app.appendChild(p);
  guessesRemaining -= 1;
}
