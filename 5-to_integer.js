const argument = process.argv[2];
const num = parseInt(argument); 

if (isNaN(num)) {
    console.log("Not a number");
} else {
    console.log(`My number: ${num}`);
}