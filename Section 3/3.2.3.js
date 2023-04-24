let x = 5;
let y = [1, 2, 30];
let z = {
  id: 100,
  name: "myName",
  loggedIn: false
};
// reassign x, y, and z to FALSY values
x = 0;
y = [-1, -2, -30]
z = {
  id: NaN,
  name: "",
loggedIn: null
};
// print x, y, and z
console.log(x, y, z);

const a = "name";
const b = [];
const c = {};
// try to reassign a, b, and c to FALSY values
a = ""
b = [-1]
c = {NaN}
// using BRACKET NOTATION, assign a value to b
b[0] = 1
// using DOT NOTATION, assign a PROPERTY to c
c = c.push(3)
// using DOT NOTATION, assign a METHOD to c
c = c.name.value
// using BRACKET NOTATION, call the method in c
c.name.value[0]
// print a, b, and c
console.log(a,b,c)
