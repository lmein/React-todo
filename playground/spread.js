function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

//... spread operator : spreads out values of array into function input values.
var toAdd = [9, 5];
console.log(add(...toAdd));

//... adds array into the array
var groupA = ['Joe', 'Jane'];
var groupB = ['Mike', 'John'];
var final = [3, ...groupA, ...groupB];
console.log(final);

//to create function

var person = ['Jane', 36];
var personTwo = ['Dave', 22];

function message (name, age) {
  console.log(`Hello ${name}, you are ${age}.`);
}
message(...person);
message(...personTwo);

console.log(message());

var names = ['Joe', 'Mike'];
var final = ['Dave', ...names];
// console.log(final);
final.forEach(function (name) {
  console.log(`Hi ${name}!`);
});

//******************
//spread operator giving syntax error:
//npm i --save-dev babel-preset-stage-0
//add then to webpack, then add to query presets where react and es2015 are.
