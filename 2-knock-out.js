/* Knock out
Spelet har 2st tärningar.
Du som spelare väljer ett “knock out number” – antingen 6, 7, 8, eller 9.
Du som spelare väljer också vilken poäng som skall uppnås för att spelet skall avslutas.
Spelaren kastar båda tärningarna. Anteckna varje kasts resultat.
Om spelaren kastar det angivna "knock out number" så ges minuspoäng */

let knockOutNumber = 9;
let throwCounter = 0;
let score = 0;
const permittedKONums = [6, 7, 8, 9];

window.addEventListener("load", function () {
	//ensures html page loads first.
	// get knockout number
	do {
		knockOutNumber = parseInt(prompt("Enter knockout number (6..9):", 9));
	} while (!permittedKONums.includes(knockOutNumber));
	console.log(`Knockout number: ${knockOutNumber}`);

	// get targetScore
	while (true) {
		targetScore = parseInt(prompt("Enter target score (>= 1):", 50));
		if (targetScore >= 1) break;
	}

	console.log(`Target score: ${targetScore}`);
	console.log(`Starting game...`);

	// play it out
	while (true) {
		let result = throwDice(2);
		throwCounter++;
		let logMsg = "";
		logMsg = `Throw #${throwCounter}: \t${result}.`;

		if (result == knockOutNumber) {
			score -= result;
			logMsg = logMsg.concat(`\t\tKO! You lost ${result} points.\t`);
		} else {
			score += result;
			logMsg = logMsg.concat(`\t\tPhew! You gained ${result} points.`);
		}

		logMsg = logMsg.concat(`\t\tCurrent score: ${score}.`);
		console.log(logMsg);

		if (score >= targetScore) break;
		if (throwCounter >= 10000) break; // in case of shenanigans.
	}

	console.log(`You scored ${score} in ${throwCounter} throws (${throwCounter * 2} die rolls).`);
	console.log("Refresh page (F5) to play again.");
});

//returns the sum of n 6-sided dice.
function throwDice(n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		let roll = 1 + Math.floor(Math.random() * 6);
		sum += roll;
		// console.log(`Die: ${roll}`);
	}
	// console.log(`Sum: ${sum}`);
	return sum;
}
