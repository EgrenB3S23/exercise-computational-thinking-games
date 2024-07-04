let str1 = prompt("Enter a word:", "FizZy");
let str2 = prompt("Enter another word to compare with:", "Buzz");

let listOfMatches = []; // case insensitive
let listOfExactMatches = []; // case sensitive

for (let i = 0; i <= Math.min(str1.length, str2.length) - 1; i++) {
	if (str1[i] == str2[i]) {
		listOfExactMatches.push(str1[i]);
	}
	if (str1[i].toLowerCase() == str2[i].toLowerCase()) {
		listOfMatches.push(str1[i].toLowerCase());
	}
}
console.log(`Case-sensitive\nCount:\t\t\t${listOfExactMatches.length}\nMatches:\t\t[${listOfExactMatches}]`);
console.log(`Case-insensitive\nCount:\t\t\t${listOfMatches.length}\nMatches:\t\t[${listOfMatches}]`);

alert(`Case-sensitive:\nCount: ${listOfExactMatches.length}\nMatches: [${listOfExactMatches}]\n\nCase-insensitive:\nCount: ${listOfMatches.length}\nMatches: [${listOfMatches}]`);
