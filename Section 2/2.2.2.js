// create a variable called "name" that references a string
let name = "Cai";
// create a variable called "favoriteSong" that references a string
let favoriteSong = "Gangnam Style";
// create a variable called "wage" that references a number
let wage = 1000000;
// create a variable called "age" that references a number
let age = 22;
// create a variable called "onlyChild" that references a boolean
let onlyChild = false;
// create a variable called "satisfied" that references a boolean
let satisfied = false;
// create a variable called "favoriteThing" that references ANY primitive value
// print the data type of "favoriteThing"
let favoriteThing = undefined;
console.log(typeof(favoriteThing));
// You heard a new song that became your favorite.
// Reassign the variable "favoriteSong"
favoriteSong = "Old Town Road";
// You no longer like the type of data stored in "favoriteThing"
// Reassign "favoriteThing" to a different primitive data type and print its type
favoriteThing = "string";
console.log(typeof(favoriteThing));
// Happy Birthday!
// Reassign "age" to a new value
age = 23;
// You got a big raise at work.
// Reassign "wage" to a new value
wage = 1500000
// Your raise changed your job satisfaction.
// Assign "satisfied" to true
satisfied = true
// use "console.log()" and "+" to print a sentence that includes two of the above variables
console.log("Its " +  `${satisfied}` + " that my favorite song is " + `${favoriteSong}.`)
