const btn = document.querySelectorAll(".buttons");
const humanChoiceList = document.querySelector("#humanChoiceList");
const computerChoiceList = document.querySelector("#computerChoiceList");
const humanScoreOutput = document.querySelector("#humanScore");
const computerScoreOutput = document.querySelector("#computerScore");
humanScoreOutput.textContent = 0;
computerScoreOutput.textContent = 0;
let computerInput;
let computerChoice;
let humanInput;
let humanChoice;
let humanScore = 0;
let computerScore = 0;

for (const button of btn) {
    button.addEventListener("click", function () {
        if (button.id === "stone") {
            humanInput = 1;
            humanChoice = "Stone";
        } else if (button.id === "paper") {
            humanInput = 2;
            humanChoice = "Paper";
        } else {
            humanInput = 3;
            humanChoice = "Scissors";
        }

        let randomChoice = Math.random();
        if (randomChoice >= 0 && randomChoice <= 0.33) {
            computerInput = 1;
            computerChoice = "Stone";
        } else if (randomChoice >= 0.33 && randomChoice <= 0.66) {
            computerInput = 2;
            computerChoice = "Paper";
        } else {
            computerInput = 3
            computerChoice = "Scissors";
        }
        console.log("The computer choose :", computerInput);
        console.log(humanInput);

        const humanChoiceThisTerm = document.createElement("li")
        humanChoiceThisTerm.textContent = humanChoice;
        humanChoiceList.appendChild(humanChoiceThisTerm);

        const computerChoiceThisTerm = document.createElement("li")
        computerChoiceThisTerm.textContent = computerChoice;
        computerChoiceList.appendChild(computerChoiceThisTerm);

        if (humanInput === computerInput) {
            alert("Draw 😓");
        } else if (humanInput === 1 && computerInput === 3 ||
            humanInput === 2 && computerInput === 1 ||
            humanInput === 3 && computerInput === 2
        ) {
            alert("You Won 😊");
            newHumanScore = Number(humanScoreOutput.textContent) + 1;
            humanScoreOutput.textContent = newHumanScore;
        } else {
            alert("You Lost 😔");
            newComputerScore = Number(computerScoreOutput.textContent) + 1;
            computerScoreOutput.textContent = newComputerScore;
        }

        if (humanScoreOutput.textContent === "5") {
            alert("You Won\nYour Score : " + humanScoreOutput.textContent + "\nComputer Score : " + computerScoreOutput.textContent);
            humanScoreOutput.textContent = 0;
            computerScoreOutput.textContent = 0;
            while (humanChoiceList.firstChild) {
                humanChoiceList.removeChild(humanChoiceList.lastChild);
            }
            while (computerChoiceList.firstChild) {
                computerChoiceList.removeChild(computerChoiceList.lastChild);
            }
        } else if (computerScoreOutput.textContent === "5") {
            alert("You Lost\nYour Score : " + humanScoreOutput.textContent + "\nComputer Score : " + computerScoreOutput.textContent);
            humanScoreOutput.textContent = 0;
            computerScoreOutput.textContent = 0;
            while (humanChoiceList.firstChild) {
                humanChoiceList.removeChild(humanChoiceList.lastChild);
            }
            while (computerChoiceList.firstChild) {
                computerChoiceList.removeChild(computerChoiceList.lastChild);
            }
        }
        else { }

    });
}