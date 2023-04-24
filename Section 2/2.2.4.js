// create five variables and assign them values
// each variable should reference a different primitive data type
// REMEMBER: you should never DELIBERATELY assign "undefined" to a variable
let boolean = true;
let number = 1;
let blank = null;
let string = "yes";
let undefined
// print the type of each variable in this order:
// string, number, boolean, undefined, null
console.log(typeof(boolean), typeof(number), typeof(blank), typeof(string), typeof(undefined));
// create a variable that references a template literal
// inside the template literal, use two of the above variables
let sentence = "very" + `${undefined} ${number}`
// reassign the value of the variable that references "null"
blank = " "
// print the value and its type
console.log(typeof(blank))
// print a variable that causes a ReferenceError
//console.log(whiteblank)

// alter the previous line to no longer cause a ReferenceError
console.log(blank)
