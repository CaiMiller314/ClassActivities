// Create a variable "timeOfDay" and assign it a string
let timeOfDay = "Morning";
// Create a variable "greeting" that references a template literal
// Use "timeOfDay" in the template literal to create a message like "Good morning!" or "Good evening!"
let greeting = "Good " + `${timeOfDay}`;
// Print "greeting"
console.log(greeting);
// Create a new variable, but do not assign it a value
let oops;
// Print the new variable and its type
// What type should we expect?
console.log(typeof(oops));
// Assign the variable a value that indicates the variable is purposely blank
// What value should we assign?
oops = null;
// Print the variable and its type again
// What type should we expect?
console.log(typeof(oops))
// Try to print a variable that does not exist
// What should we expect to print in the CLI?
//console.log(random)
//"Not Defined"

// Print "greeting" again
// Will this line run?
console.log(greeting)
//only if I comment out the variable that doesn't exist
