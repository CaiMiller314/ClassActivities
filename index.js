const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable
let zero = nums.pop();
let one = nums.pop()
// remove each of the first two items with shift(), saving each item to a variable
let six = nums.shift()
let five = nums.shift()
// use push and unshift to add the variables back to the array in numerical order, 0-6
console.log(nums.unshift(zero) nums.unshift(one) nums.push(five) nums.push(six))
