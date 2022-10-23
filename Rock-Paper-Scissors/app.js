const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
const possibleChoices = document.querySelectorAll("button")
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.innerText
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random()*3)
    if (randomNumber === 0)
        computerChoice = 'Rock'
    if (randomNumber === 1)
        computerChoice = 'Paper'
    if (randomNumber === 2)
        computerChoice = 'Scissors'
    computerChoiceDisplay.innerHTML = computerChoice
}