const messages = [
    "C is fun",
    "Python is cool",
    "JavaScript is amazing"
];

let combinedOutput = "";

// Loop through the array
for (let i = 0; i < messages.length; i++) {
    combinedOutput += messages[i] + "\n";
}

const finalString = combinedOutput.slice(0, -1);

console.log(finalString);