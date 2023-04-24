// create a constant variable (const)
const name = "Cai"
// create a variable that can be reassigned (let)
let lastName = "Miller"
// create three variables and assign them values of different data types (=)
let number = 1
let string = "Word"
let boolean = true

// print the types of two variables that reference two different data types (typeof)
// TIP: console.log() prints a value in the console/terminal
console.log(typeof(number));
console.log(typeof(string));
// change the value referenced by a variable (dynamic typing)
number = 2
// print the type of the variable you just changed (typeof)
console.log(typeof(number))
// create variables and give them values to complete the sentences that will print  below.
// Which variables need to be created?
// What type of data needs to go in each variable?

console.log("Hello, my name is " + `${name}` + ", and I am learning " + "JavaScript" + ". I have been practicing for only " +  `${number}` + " weeks, so my status as a master is: " + `${boolean}` + ".");
