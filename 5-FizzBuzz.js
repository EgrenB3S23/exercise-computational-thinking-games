for (let i = 1; i <= 100; i++) {
	let strToPrint = "";

	if (i % 3 == 0) {
		strToPrint = strToPrint.concat("Fizz");
	}
	if (i % 5 == 0) {
		strToPrint = strToPrint.concat("Buzz");
	}
	// if (strToPrint.length == 0) {
	if (strToPrint == "") {
		strToPrint = i;
	}
	console.log(`${i}: ${strToPrint}`);
}
