// process.argv[2] will be the first argument passed by the user.
// If no argument is passed, process.argv[2] will be undefined.
const firstArgument = process.argv[2];

// Check if the first argument is undefined.
// This is how we check for its absence without using .length.
if (firstArgument === undefined) {
    console.log("No argument");
} else {
    // If it exists, print its value.
    console.log(firstArgument);
}