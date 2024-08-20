let input = document.getElementById("input-number");
let buttonGuess = document.getElementById("btn-guess");
let response = document.getElementById("response");
let buttonNewGame = document.getElementById("new-game")
let targetNumber = Math.floor(Math.random() * 100);
let historyList = document.getElementById('history-list');
let attempts = 0;

function result() {

    let userNumber = input.value * 1;
    let message = '';
    if (userNumber > targetNumber) {
        response.innerHTML = 'Too high! Try again!';
        attempts++;
        message += `Too high`;
    } else if (userNumber === targetNumber) {
        response.innerHTML = `Congratulations! You guessed the number in ${attempts + 1} attempts!`;
        message += ' Correct';
    } else if (userNumber < targetNumber) {
        response.innerHTML = 'Too low! Try again!';
        attempts++;
        message += ' Too low';
    } else {
        response.innerHTML = 'Invalid input! Please enter a number.';
        message += ' Invalid input';
    }
    let listItem = document.createElement('li')
    listItem.textContent = message;
    historyList.appendChild(listItem);
}

function newGame() {
    attempts = 0;
    response.innerHTML = '';
    window.location.reload();
}

buttonGuess.addEventListener('click', result);
buttonNewGame.addEventListener('click', newGame)

