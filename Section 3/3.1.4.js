// Named Parameters
// write a function that takes two named parameters:
// print each named parameter,
// then return the parameters added together
const namedTwo = (name1, name2, ...name3) => {
console.log(name1)
console.log(name2)
console.log(...name3)
return name1 + name2
}
// invoke the function and pass in two numbers
namedTwo(Cai, Miller)
// invoke the function and pass in more than two numbers
namedTwo(Cai, Maurice, Miller)
// invoke the function and pass in only one number
namedTwo(2)
// change the function to set default values for the parameters
// again, invoke the function and pass in only one number
namedTwo(2)
// Rest Operator
// add a rest operator to the function's parameters
// add a line to the function's body to print the value of the rest operator
// again, invoke the function and pass in more than two numbers
namedTwo(Cai, Maurice, Miller)
