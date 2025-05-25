const argument = process.argv[2];

// Attempt to convert the argument to an integer
const numberOfOccurrences = parseInt(argument);

if (isNaN(numberOfOccurrences) || numberOfOccurrences <= 0) {
    console.log("Missing number of occurrences");
} else {
    let outputString = "";

    // Loop 'numberOfOccurrences' times
    for (let i = 0; i < numberOfOccurrences; i++) {
        outputString += "C is fun";
        if (i < numberOfOccurrences - 1) {
            outputString += "\n";
        }
    }
    console.log(outputString);
}