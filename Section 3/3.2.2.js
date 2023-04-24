// bracket and dot notation
const key = "1";
const obj = {
  key: console.log("the key is 'key'"),
  1: console.log("the key is 1"),
};

// what will the following lines print?
obj[key]; ?
obj.key; console.log("the key is 'key'")
obj["key"]; "1"

// Create an object with at least four properties, each with a different data type.
// Name one of the four properties "collection" and set its value to an Array or Object.
const obj2 = {
  num: 1,
  boolean: true,
  string: "word",
  collection: [2, 3, 4, 5, 6]
}
// Access a value in the "collection" property
obj2.collection[0]
// Practice with nested Arrays and Objects
const keys = ["key", "1", "method", "favorites", "list"];

// Add a method to an Object
obj.method = function() {
  return "the key is 'method' and it calls refers to a function";
};

// Fill in your favorite movie, number and color below
obj["favorites"] = {
  movie: "Purge",
  number: 7,
  color: "Red"
};

// Add a list (a.k.a array) to an Object
obj.list = ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }];

// Using the 'for...in' loop to iterate over 'obj' object ...
// how many lines will the following statement print?
// what do you expect to see on each line?
for (let key in keys) {
  console.log(`Key is: ${key} and value is: ${obj[key]}`);
}
5 lines
`Key is: key and value is: "key"`
`Key is: "1" and value is: 1`
`Key is: "favorites and value is: movie, number, color`
`Key is: "method" and value is: function`
`Key is: list and value is: ["a", "b", 3, "d", ["e", 4, 5], { f: 6 }]`
// Use a template literal to print a sentence about your favorite things
console.log(`my favorite things are ${obj[favorites]}`)
// Access the values "b", 4, and 6 from obj.list
obj.list[1]
obj.list[5]
obj.list[7].f
