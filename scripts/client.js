console.log('Ursus, YAY JavaScript!!!');

//
// JavaScript Terminology
// --------------------

// $ - bling
// . - dot
// () - paren
// [] - bracks
// {} - bracers, curly bracks
// < - less than
// > - greater than
// / - whack
// \ - back slash
// ! - not, bang
// # - pound, hash
// || - or, pipes
// NaN - not a number

console.log('Myron' * 5); // result is NaN
console.log('ten' * 5); // result is NaN

// JS will coerce a string to a number if the string is a valid number javascript
// - only happens for operators *, /, or -
console.log('10' * 5); // result is 50

// concatenates the string to be '55'
console.log('5' + 5);


//
// Data Types
// --------------------

// number
// -- 6
// string
// -- 'Marshmallow'
// boolean
// -- true
// -- false

// null
// -- null
// undefined
// -- undefined

// COMPLEX DATA TYPES

// array
// -- []
// object
// -- {}

let myArray = ['name', 'nonName', 'First Name'];

myArray.push('Anything');

// myArray = [0, 1, 2];

const myObject = {
  kittyKat: 'value'
};

myObject.doggy = 'WOOF';

console.log(myObject.kittyKat);

// const - cannot reset my value
// let - allows new assignment

//
// CONDITIONAL STATEMENTS
// --------------------

// 6 - truthy
// 0 - falsy
// 

let kittyKat = null;

if (-1 == false) {
  console.log('Falsy???');
}

if (myArray === 'DOG') {
  console.log(myArray);
}

// = - assignment

// == - check only value
// 5 == '5'
// === - check both value and type
// 5 === '5'

let dog = 3;

dog = dog + 1;
dog++;
dog += 1;

// dog = false;
// dog = null;
// dog = 'string';

if (!dog) {
  console.log('dog is truthy');
} else if (dog === 5) {

} else {

}

// COMPARISON OPERATORS
// ==
// ===
// !=
// !==
// !
// >
// <
// <=
// >=


//
// LOOPs
// --------------------

const deer = 'spike';

// while
while (/* expression */ deer == 'charles') {
  deer = 'charles';
}

// for i
for (let i = 0; i < myArray.length; i++) { //let i = 0 (once)
  // i < myArray.length
  console.log(myArray[i]);
  // do stuff
  // i++
}

// for of
for (let itemInArray of myArray) {
  console.log(itemInArray);
}

// for in
for (let kitty in myArray) {
  console.log(myArray[kitty]);
}


//
// FUNCTIONs
// --------------------

// function call, execute, running
console.log(doStuff('Pam', 'Anderson'));

function doStuff(firstName, lastName) {
  // for (let kitty in myArray) {
  //   console.log(myArray[kitty]);
  //   return true;
  // }

  return 'Hello, ' + firstName + ' ' + lastName + '!!!';
  // does not happen
}

// var doStuff = function(firstName, lastName) {
//   // for (let kitty in myArray) {
//   //   console.log(myArray[kitty]);
//   //   return true;
//   // }
//
//   return 'Hello, ' + firstName + ' ' + lastName + '!!!';
//   // does not happen
// };

// STRING CONCATENATION
console.log('string ' + deer);

// TEMPLATE LITERAL
console.log(`Hello, ${dear}`);
console.log(`Hello,

${dear}`);


//
// BUILT INTO JAVASCRIPT
// --------------------

// Number(); 6
// String(); 'string'
// Object(); {}
// Array(); []
const numberArr = [1, 2, 3, 4];
numberArr.length; // 4
numberArr.push(8); // add to array
// .pop()
// .shift()
// .unshift()
numberArr[2]

const myName = 'Myron, Schippers, fluffy, buddy';
console.log(myName);
console.log(myName.length);
console.log(myName.charAt(2));
console.log(myName.split(', '));

const dogData = {
  name: 'fluffy',
  type: 'dork',
};

const dogKey = 'type';

// using the dot operator to access object property key
dogData.name;
// using a string for object property key
dogData[dogKey];

console.log(JSON.stringify(dogData));
