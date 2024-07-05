/* Ett tärningspel där användaren ska kasta 1st tärning. Vid första kastet ska målet vara 1. Om 1 ej fås, ska man försöka igen. Hur många kast tar det för att komma upp i en stege, 1,2,3,4,5,6? Antal kast måste räknas. */

// 	for i = 1 to 6
//		rollCounter++
//		roll dice until roll = i
//	print rollCounter

let rollCounter = 0;

for (let i = 1; i <= 6; i++) {
	// (one loop = N missed rolls and 1 matching roll)

	console.log(`Target: ${i}`);
	while (true) {
		// (one loop = one roll)
		rollCounter++;

		let roll = 1 + Math.floor(Math.random() * 6);
		console.log(`Rolled: ${roll}.`);
		if (roll == i) break;
	}
	console.log("####################");
}

console.log(`Done! Total number of rolls: ${rollCounter}.`);
