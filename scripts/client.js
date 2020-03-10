console.log('Ursus, YAY JavaScript!!!');

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
// NaN -

console.log('Myron' * 5);
console.log('5' + 5);

// 6 -truthy
// 0 - falsy
// 'Ursus'
// true
// false
// null
// undefined

let kittyKat = null;

if (-1 == false) {
  console.log('Falsy???');
}

// [] - array
// {} - object

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

// comparison operator
// ==
// ===
// !=
// !==
// !
// >
// <
// <=
// >=

// LOOP

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

// 'string ' + deer
// `Hello,
//
//  ${dear}`

// Number(); 6
// String(); 'string'
// Object(); {}
// Array(); []
const numberArr = [1, 2, 3, 4];
numberArr.length; // 4
numberArr.push(8); // add to array
// .pop()
// .shift()
// .unnshift()
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

dogData.name;
dogData[dogKey];

console.log(JSON.stringify(dogData));

$(document).ready(readyNow)

function readyNow() {}

function searchAllTheWeb(searchTerm) {}
