const args = process.argv.slice(2);
const numberOfArguments = args.length;

if (numberOfArguments === 0) {
    console.log("No argument");
} else if (numberOfArguments === 1) {
    console.log("Argument found");
} else { // numberOfArguments > 1
    console.log("Arguments found");
}