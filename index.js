/* Global Variables*/

let computerChoice;
let computerInput;
let humanInput;
let humanChoice;
let humanScore = 0;
let computerScore = 0;


/*Function Declaration*/

function getComputerChoice() {
	let randomChoice = Math.random();
	if (randomChoice >= 0 && randomChoice <= 0.33) {
		computerInput = "Stone";
		computerChoice = 1;
	} else if (randomChoice >= 0.33 && randomChoice <= 0.66) {
		computerInput = "Paper";
		computerChoice = 2;
	} else {
		computerInput = "Scissor";
		computerChoice = 3;
	}
	console.log("The computer choose :", computerInput);
}

function getHumanChoice() {
	let humanType = prompt("Type your choice in lowercase",);
	humanInput = humanType.toLowerCase();
	if (humanInput === "stone") {
		humanChoice = 1;
	} else if (humanInput === "paper") {
		humanChoice = 2;
	} else if (humanInput === "scissor" || humanInput === "scissors") {
		humanChoice = 3;
	} else {
		humanChoice = 4;
		console.log("You typed something wrong!	");
	}
	console.log("You choose :", humanInput);

}

function result() {
	if (computerChoice === humanChoice) {
		console.log(" Its a Draw :| ");
		return humanScore, computerScore;
	} else if (computerChoice === 1 && humanChoice === 3) {
		console.log(" You lost :( ");
		return humanScore, computerScore++;
	} else if (computerChoice === 2 && humanChoice === 1) {
		console.log(" You lost :( ");
		return humanScore, computerScore++;
	} else if (computerChoice === 3 && humanChoice === 2) {
		console.log(" You lost :( ");
		return humanScore, computerScore++;
	} else if (humanChoice === 4) {
		console.log(" Cant calculate :D ")
		return humanScore, computerScore;
	} else {
		console.log(" You won :) ");
		return humanScore++, computerScore;
	}
}

function game() {
	for (let i = 0; i < 5; i++) {
		getHumanChoice();
		getComputerChoice();
		result();
	}
}


/*Function Call*/

game()
console.log('your score :', humanScore);
console.log("computer's score", computerScore);
