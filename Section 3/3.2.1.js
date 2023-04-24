// create an Array using an Array literal
const animals = ["Cat", "Dog", "Frog"]
// access the 1st item in the Array
animals[0]
// access the last item in the Array
animals[animals.length - 1]
// print the length of the Array
console.log(animals.length)
// use the length property to access the last item in the Array
animals[animals.length - 1]
// with for...of, loop over the Array, modify the value and add to a different Array
for(let i of animals) {
  let newArr = [];
  newArr.push(animals[0])
}
