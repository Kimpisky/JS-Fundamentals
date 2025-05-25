const argument = process.argv[2];
const numberOfOccurrences = parseInt(argument);

if (isNaN(numberOfOccurrences)) {
    console.log("Missing number of occurrences");
}
else if (numberOfOccurrences > 0) {
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
