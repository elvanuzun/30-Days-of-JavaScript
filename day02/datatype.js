console.log(Math.round(5.6));
console.log(Math.round(5.2));
console.log(Math.floor(6.8));
console.log(Math.ceil(6.2));
console.log(Math.min(1, -10, 7, 5, 4));
console.log(Math.max(1, -10, 7, 5, 4));

const randNum = Math.random(); // creates random number between 0 and 0.999999
console.log(randNum);

//random number between 0 and 10
const num = Math.floor(Math.random() * 11);
console.log(num);

//Absolute value
console.log(Math.abs(-10));

// Square root
console.log(Math.sqrt(25));

//random number generator

let randomNumber = Math.random();
let numZeroToTen = randomNumber * 11;
let randNumFloor = Math.floor(numZeroToTen);
console.log(randNumFloor);

//String Concatenation

let name = 'Elvan';
let surname = 'Uzun';

//let fullName = name +" "+surname

//Template Literals

let fullName = `${name} ${surname}`;
console.log(fullName);

let a = 5;
let b = 10;
let sum = `a + b = ${a + b}`;
console.log(sum);

console.log(fullName.length);
let lastIndex = fullName.length - 1;
console.log(lastIndex);
console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2022 I am super excited to start this challenge';
//let regEx = /\d+/
let regEx = /\d+/g;

console.log(txt.match(regEx));
console.log(txt.match(/\d+/g));

// Casting

//String to Int

num1 = '10';
let numInt = parseInt(num1);
console.log(numInt);

