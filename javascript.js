// function add(a, b) {
//   console.log(arguments);
//   return arguments[0] + arguments[1];
// }

// const a = [1, 2, 3];
// const b = [3, 4, 5];
// const c = [...a, ...b]

// console.log(c);

// function add(a, b, ...rest) {
//   console.log(rest);
//   return a + b;
// }

// console.log(add(5, 2, 7, 9));

// function onlyPositive(a, b, callback) {
//   if (a > 0 && b > 0) {
//     return callback(a, b);
//   }
//   return null;
//  }

//  const add = (num1, num2) => num1 + num2;
//  const multiply = (num1, num2) => num1 * num2;

//  console.log(onlyPositive(2, 3, add));
//  console.log(onlyPositive(2, 5, multiply));
//  console.log(onlyPositive(-2, 5, (a, b) => a / b));

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [];

// for (let index = 0; index < arr1.length; index++) {
//   arr3.push(arr1[index])
// }

// for (let index = 0; index < arr2.length; index++) {
//   arr3.push(arr2[index])
// }

// const arr4 = [...arr1, ...arr2];

// console.log(arr4);

// const arr = [1, 2, 3];

// const arr2 = arr.map((item) => item + 2)
// arr2

// const arr2 = arr.reduce((a, b) => a + b, 1)
// arr2

// Convert Celsius to Fahrenheit
// function convertCtoF(temperatureInCelsius) {
//   return (temperatureInCelsius * 1.8) + 32;
// }

// console.log(convertCtoF(18));

// Reverse a String

// function reverseString(string) {
//   let reverse = '';

//   for (let index = string.length - 1; index >= 0; index--) {
//    reverse = reverse + string[index];
//   }

//   return reverse;
// }

// function reverseString(string) {
//   let reverse = [];

//   for (let index = string.length - 1; index >= 0; index--) {
//    reverse.push(string[index]);
//   }

//   return reverse;
// }

// function reverseString(string) {
//   return string.split('').reverse().join('');
// }

// console.log(reverseString('Luci'));

// Find the max number from an array of numbers.

// function max(arr) {
//   let maxNum = arr[0];

//   for (let index = 0; index < arr.length; index++) {
//    if (arr[index] > maxNum) {
//     maxNum = arr[index];
//    }
//   }

//   return maxNum;
// }

// console.log(max([2, 9, 1, 5, 18]));

// Let's work with arrays a little bit more

// Add Items to an Array with push() and unshift()

// Remove Items from an Array with pop() and shift()

// Remove Items Using splice()

// const arr = [5, 6, 7];

// arr.splice(1, 2);

// console.log(arr);;

// Add Items Using splice()

// arr.splice(1, 2, 1,2,3, 'asd', true);

// Copy Array Items Using slice()

const arr = [5, 6, 7];

// const arr2 = arr.slice();

// Copy an Array with the Spread Operator

// const arr2 = [...arr];

// Combine Arrays with the Spread Operator

// const arr3 = [...arr, ...arr2];

// Check For The Presence of an Element With indexOf()

// console.log(arr.indexOf(5) != -1);

// Add Key-Value Pairs to JavaScript Objects

// Modify an Object Nested Within an Object

const nestedObject = {
  id: 28802695164,
  date: "December 31, 2016",
  data: {
    totalUsers: 99,
    online: 80,
    onlineStatus: {
      active: 67,
      away: 13,
      busy: 8,
    },
  },
};

// nestedObject.data.onlineStatus.away = 30;

// console.log(nestedObject);

// Use the delete Keyword to Remove Object Properties

// delete nestedObject.data.onlineStatus

// console.log(nestedObject);

// Check if an Object has a Property using hasOwnProperty()

// console.log(nestedObject.hasOwnProperty('date')); 

// Iterate Through the Keys of an Object with a for...in Statement

// for (const item in nestedObject) {
//   console.log(item);
// }

// Generate an Array of All Object Keys with Object.keys()

// console.log(Object.keys(nestedObject));
// console.log(Object.values(nestedObject));

// Sum All Numbers in a Range
// Create a function that will take an array of two numbers who are not necessarily in order,
// and then add not just those numbers but any numbers in between. For example, [3,1] will be the same as 1+2+3 and not just 3+1

// function add(num1, num2) {
//   let max = Math.max(num1, num2);
//   let min = Math.min(num1, num2);
//   let sum = 0;

//   for (let i = min; i <= max; i++) {
//     sum += i;
//   }

//   return sum;
// }

// console.log(add(3, 1));

// Use Recursion to Create a Countdown

// function countdown(n) {
//   if (n < 1) {
//     return [];
//   } else {
//     const arr = countdown(n - 1);
//     arr.unshift(n);

//     return arr;
//   }
// }

// console.log(countdown(5));

// Object Oriented Programming
// Abstraction
// Encapsulation
// Inheritance
// Polymorphism

// Create a Method on an Object

// const dog = {
//   name: "Spot",
//   numLegs: 4,
//   age: 3,
//   sayLegs: function () {
//     return "This dog has " + dog.numLegs + " legs.";
//   },
//   sayAge: function () {
//     return "This dog has " + this.age + " age.";
//   }
// };

// console.log(dog.sayAge());
// Create a sayAge method.

// Modify the dog.sayAge method to remove any references to dog, using "this" (why use "this")

// Define a Constructor Function

// function Bird() {
//   this.name = "Albert";
//   this.color = "blue";
//   this.numLegs = 2;
// }

// Use a Constructor to Create Objects

// const duck = new Bird();
// console.log(duck);
// duck.color = 'red'
// console.log(duck);

// const crow = new Bird();
// console.log(crow);

// Extend Constructors to Receive Arguments

// function Bird(name, color, numLegs) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = numLegs;
// }

// function Dog(name, color, numLegs) {
//   this.name = name;
//   this.color = color;
//   this.numLegs = numLegs;
// }

// const duck = new Bird('Luci', 'white', 2);
// const crow = new Bird('Luci', 'black', 2);

// Verify an Object's Constructor with "object instanceof constructor"
// console.log(duck instanceof Dog);
// console.log(duck instanceof Object);

// Understand Own Properties

// function Dog(name) {
//   this.name = name;
//   this.numLegs = 30;
// }

// let spiderDog = new Dog("Donald");

// for (let property in spiderDog) {
//   if (spiderDog.hasOwnProperty(property)) {
//     console.log(property);
//   }
// }

// Use Prototype Properties to Reduce Duplicate Code

// function Bird(name) {
//   this.name = name;  //own property
// }

// Bird.prototype.numLegs = 2;
// Bird.prototype.getName = function () { return this.name };

// const duck = new Bird('Alex', 4);
// console.log(duck.numLegs);
// console.log(duck.getName());

// // Iterate Over All Properties

// for (let property in duck) {
//   if(duck.hasOwnProperty(property)) {
//     console.log(property, ' own property');
//   } else {
//     console.log(property, ' prototype property');
//   }
// }

// Change the Prototype to a New Object
// function Bird(name) {
//   this.name = name;  //own property
// }

// Bird.prototype = {
//   numLegs: 2
// }

// const duck = new Bird('Alex');

// Remember to Set the Constructor Property when Changing the Prototype (side effect)

// console.log(duck.constructor === Bird);
// console.log(duck.constructor === Object);
// console.log(duck instanceof Bird);

// Bird.prototype = {
//   constructor: Bird,
//   numLegs: 2
// }

// Understand Where an Object’s Prototype Comes From

// console.log(Bird.prototype.isPrototypeOf(duck));

// Understand the Prototype Chain

// function Bird(name) {
//   this.name = name;
// }

// console.log(typeof Bird.prototype);
// console.log(Object.prototype.isPrototypeOf(Bird.prototype));

// Use Inheritance So You Don't Repeat Yourself (DRY)
// Edit the code to follow the DRY principle by creating a supertype (or parent) called Animal:

// function Bird(name) {
//   this.name = name;
// }

// function Dog(name) {
//   this.name = name;
// }

// Bird.prototype = {
//   constructor: Bird
// };

// Dog.prototype = {
//   constructor: Dog
// };

// function Animal() { };

// Animal.prototype = {
//   constructor: Animal,
//   describe: function() {
//     return 'My name is ' + this.name;
//   }
// }

// Inherit Behaviors from a Supertype

// let animal1 = Object.create(Animal.prototype);
// // console.log(animal1.describe());
// animal1 instanceof Animal;

// // Set the Child's Prototype to an Instance of the Parent
// Bird.prototype = Object.create(Animal.prototype);

// console.log(Bird.prototype);

// Reset an Inherited Constructor Property
// duck.constructor = Bird;
// console.log(duck.describe());

// Add Methods After Inheritance

// Bird.prototype.getName = function () {
//   return this.name;
// }

// // Override Inherited Methods

// Bird.prototype.describe = function () {
//   return this.name;
// }

// const duck = new Bird('Alex');
// console.log(duck.describe());


// Use Closure to Protect Properties Within an Object from Being Modified Externally

// function Bird() {
//   let hatchedEgg = 10;

//   this.getHatchedEggCount = function() { 
//     return hatchedEgg;
//   };
// }
// let ducky = new Bird();
// console.log(ducky.getHatchedEggCount()); 

// Understand the Immediately Invoked Function Expression (IIFE)

// (function () {
//   console.log("Chirp, chirp!");
// })();




