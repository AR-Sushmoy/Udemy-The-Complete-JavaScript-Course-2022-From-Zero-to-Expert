"use strict";

////////////////////////////////////////
////// 002 Activating Strict Mode //////
////////////////////////////////////////

// strict mode helps our code from producing any bugs. Basically, it warns us in the console if something is wrong inside our code. So, it is recommended to always activate strict mode at the first line.

// Strict mode has to be the very first statement in the script. So if we have any code before this then strict mode will not be activated. Comments are allowed because JavaScript will just ignore them but no code.

///////////////////////////
////// 003 Functions //////
///////////////////////////

// The fundamental building block of real world JavaScript applications are functions. They are one of the most essential concepts in the language

// what actually are functions?
// --> Well in the most simple form a function is simply a piece of code that we can reuse over and over again in our code.

/*
function printing() {
  console.log("JavaScript is fun");
}

printing();
printing();
printing();

// we just reused a piece of code thrice

// So, a function cannot only reuse a piece of code but it can also receive data and return data back. Basically, function is like a machine.

// Prameters are like variables that are specificd once to this function and they will get defined once the function is called. Parameters represent the input data of this function.

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`; // so, here we build a string using the input data we get into the function.

  return juice; // And now we can use the return statement and with this, we can return any value from the function. So, basically this juice will become the result of executing this function.
}

console.log(fruitProcessor(5, 0)); // This is a way of showing the result on the console

const appleJuice = fruitProcessor(3, 4);
console.log(appleJuice); // This is another way of showing the result to the console
*/

/////////////////////////////////////////////////
//// 004 Function Declaration vs Expressions ////
/////////////////////////////////////////////////

////// Function Declaration //////

// The input in our funtion it's just a parameter. And, the parameter it's a bit like a local variable that's only available inside of this function.

// For example:

// function calcAge1(birthYear) {
//   const age = 2023 - birthYear;
//   return age;
// }

// There is another way, We can return this value together on the go without storing it inside the age variable.

// function calcAge1(birthYear) {
//   return 2023 - birthYear;
// }

// So, we're taking the birthYear that we're going to receive and then use that to calculate the age.

// So, this is a generic function, which is going to work for any birthYear that we give it.

// To be really precise, the parameter is like the placeholder in the function/

// And the argument is then the actual value that we use to fill in thar placeholder (parameter).

// calcAge1(2000);

// This will now create a value and the vlaue that this will create is the value that will return from the calcAge function.

// And so, we need to capture or to save that value into a variable

// const age1 = calcAge1(2000);
// console.log(age1); // Output: 23

////// Function Expression //////

// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// }; // all of this is a expression stored inside of a variable

// const age2 = calcAge2(2000);
// console.log(age2); // Same output as before

// This indicates that in both way we can write a function in JavaScript.

// In JavaScript, functions are actually just values. So if it's a value, we can store it in a variable.

///Difference between Function Declaration vs. Expression///

// The main practical difference is that we can actually call function declarations in a code before they are defined in the code.

/*
const age1 = calcAge1(2000); // Here we're calling it first and then defining it later.

function calcAge1(birthYear) {
  return 2023 - birthYear;
}

// As you can see we can call a function before they are defined. If it is written as function declaration.

// on the otherhand,

const calcAge2 = function (birthYear) {
  return 2023 - birthYear;
};

const age2 = calcAge2(2000);

console.log(age1, age2); // Output: 23 23
*/

// So, It is working properly.

// In the second function we simply cannot do that because it is written as a function expression.

// Internally this happens because of a process called Hoisting.

/////////////////////////////////////
//////// 005 Arrow Functions ////////
/////////////////////////////////////

// An Arrow function is simply a special form of function expression that is shorter therefore faster to write.

// Function Expression from previous section for reference:
// const calcAge2 = function (birthYear) {
//   return 2023 - birthYear;
// };

// const age2 = calcAge2(2000);

// Arrow Function Examle:

/*
const calcAge3 = (birthYear) => 2023 - birthYear;

const age3 = calcAge3(2000);
console.log(age2, age3);
*/

// In a Arrow function we don't need to write the return statement explicitly. It return the expression implicitly.

// Arrow function is excellent for single one-liner functions.

// But when we have more than one parameter and more than one piece of code to return, we can do it like this:

/*
const yearsUntilRetirement = (birthYear) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;

  return retirement;
};

console.log(yearsUntilRetirement(2000));
*/

// So, basically it is like the previous Function Expression with curly braces and return statement.

// However, what if we had multiple parameters? such as:

/*
const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2023 - birthYear;
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};

console.log(yearsUntilRetirement(2000, "Sushmoy"));
console.log(yearsUntilRetirement(1989, "Sabbir"));
*/

/////////////////////////////////////////////////
//// 006 Functions calling another functions ////
/////////////////////////////////////////////////

/*
function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange`;
  return juice;
}

console.log(fruitProcessor(3, 2));
*/

// This is one silly example of Function calling another Function.

/////////////////////////////////////////////////
//////////// 007 Reviewing functions ////////////
/////////////////////////////////////////////////

/*
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const retirement = 65 - calcAge(birthYear);
  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2000, "Sushmoy"));
*/

//Or

/*
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  return `${firstName} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2000, "Sushmoy"));
*/

// We have two different functions here with the same parameter name (birthYear). But that's not a problem at all because they are not related. They are two completely different parameters. So, basically two different variables (Local variables). We could even have a variable outside of any of this function which could also be called birthYear.

// Now, let's return something special if someones retirement year in below zero instead of returning retirement variable. //

/*
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
  } else {
    return -1; // minus one (-1) is kind of a standard number in programming
  }
};
console.log(yearsUntilRetirement(2000, "Sushmoy"));
console.log(yearsUntilRetirement(1950, "Bob"));
*/

// Here we are actually returning numbers and not a string as we had before, because that's what we actually do. Especially when we receive a number as an input.

// It is a good practice to return a number.

// N.B: One thing to keep in mind that the return statement will immediately exit the function. So, it will first return the value that we tell it to return in our case the variable retirement and after that the function is done. So, it exits immediately. In other words, the function has returned.

// For example: if we put a line of code after that return statement line simply it will be ignored or we can say that the line after return statement is unreachable.

/*
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    return retirement;
    console.log(`${firstName} retires in ${retirement} years`);
  } else {
    return -1; // minus one (-1) is kind of a standard number in programming
    console.log(`${firstName} has already retired`);
  }
};
*/

// That's why we'll have to put everything before the return statement
/*
const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired`);
    return -1; // minus one (-1) is kind of a standard number in programming
  }
};

console.log(yearsUntilRetirement(2000, "Sushmoy"));
console.log(yearsUntilRetirement(1950, "Bob"));
*/

// So, basically we use functions to reuse pieces of code.

////////////////////////////////////////////////
////////// 009 Introduction to Arrays //////////
////////////////////////////////////////////////

// let's say we want to represent 10 friends and then we would have to create 10 variables which is not efficient.

// Instead it would be great to bundle all of these values together into some bigger container. Well, that's why we have data structures. For instance, Arrays are a data structure.

// So, an Array is like a big container into which we can throw variables and then later reference them.

// Array is a data stucture to store multiple related values in the same variable. //

/*
const friends = ["Yusagi", "Soho", "Arisu"]; // we can declare an Array this way
console.log(friends);

const yrs = new Array(1928, 1939, 1940); // We can also declare an Array this way.
console.log(yrs);

console.log(friends[1], friends[2], yrs[2]);

console.log(friends.length); // we can write this to check the length of the Array which is the total number of the Array.

console.log(friends[friends.length - 1], yrs[yrs.length - 1]); // So, we can even write expressions inside those square brackets.

// So, this square bracket syntax is not only for retrieving elements from the Array but we can also use it to add elements to the Array.

friends[2] = "Kakashi";
console.log(friends); // ["Yusagi", "Soho", "Kakashi"]
*/

// N.B: Although being declared as a constant (friends Array) we were able to change or mutate it's value above. It's because only primitive value is immutable. But an Array is not a primitive value. And so we can always change it so we can mutate it.

// And it works this way beacuse of the way that JavaScript stores things in memory.

// Now what we can not do is replace the entire Array like this,

/*
  friends = ["Bob", "Sahil", "Itachi"]; // Shows -> TypeError. Because this is illegal
*/

///////// Next, an Array can hold values of different types all at the same time //////////

/*
const mySelf = ["MD", "Abu", "Rayhan", "Sushmoy", 2023 - 2000]; 
*/

// In the 4th position there is an expression cuz in each position JavaScript simply expects an Expression.

// We can also store these value inside of a variable then simply just put the variable name inside the Array.

/*
const firstName = "MD";
const mySelf = [firstName, "Abu", "Rayhan", "Sushmoy", 2023 - 2000];
*/

// We can also put other Arrays inside of an Array.

/*
const firstName = "MD";
const mySelf = [
  firstName,
  "Abu",
  "Rayhan",
  "Sushmoy",
  2023 - 2000,
  "Self-Taught Programmer",
  friends,
  yrs,
];

console.log(mySelf, mySelf[mySelf.length - 1], mySelf[mySelf.length - 2]);

console.log(mySelf[mySelf.length - 1]);

// Exercise

const calcAge = function (birthYear) {
  return 2023 - birthYear;
};

const years = [1980, 1981, 1987, 1989, 2000];
*/

/*
console.log(calcAge(years)); // Output: NaN
*/

// it is becasue we can't subtract an Array from a number. which is happening inside the calcAge function.

/*
const age1 = calcAge(years[0]);
const age2 = calcAge(years[2]);
const age3 = calcAge(years[years.length - 1]);

console.log(age1, age2, age3);

// now we can store this values inside of a new Array

const age = [
  calcAge(years[0]),
  calcAge(years[1]),
  calcAge(years[3]),
  calcAge(years[years.length - 1]),
];

console.log(age);
*/

////////////////////////////////////////////////
///// 010 Basic Array Operations (Methods) /////
////////////////////////////////////////////////

// JavaScript has some built in functions that we can apply directly on Arrays. And these are called Methods. We can think of these methods as Array operations.

// There are countless Array Methods in JavaScript. Let's learn about some of them,

//////// ADD Elements: ////////
/*
const friends = ["Mike", "Sarah", "Jhon"];
// The Push() Method adds elements to the end of an Array.

// Same as all functions this push function also returns a value which is the length of the updated/mutated Array.

const newLength = friends.push("Bob");

console.log(friends);
console.log(newLength); // The return value of push method

// Now, There is a method to add element at the beginning of an Array. unshift();

friends.unshift("Quazi");
console.log(friends);

// And just like the push() method the unshift() method also returns the length of the updated array.

///////// REMOVE Elements: ////////

// Next up we also have a method to remove elements from Arrays. That is pop(); method.

// The pop() method removes the last element of the Array. Basically, the opposite of the push method.

friends.pop(); // This time we don't need to pass in any argument and that's because there is no information needed to take out the last element.

const popped = friends.pop(); // if we do it twice than it will remove the second last element now.

console.log(friends);

// this pop() method returns the removed element.
console.log(popped); // O/P: Jhon

// Finally, in order to remove the first element from the array we'll use the shift() method with no argument.

friends.shift();
console.log(friends);

// Once again, this shift() method will return the element that was removed. So, if we need that we could capture it.

////// Next up, there is a very usefull method that tells us in which position a certain element is in the array. That is the indexOf() method.

const gpuCompanies = ["Asus", "Zotac", "Colorful", "MSI", "Gigabyte"];

console.log(gpuCompanies.indexOf("Colorful"));
console.log(gpuCompanies.indexOf("EVGA")); // O/P: -1
// That happens because the element is not present inside the array.

// Another useful method called includes() tells us if an element is present in the Array or not. So, it shows the result in boolean.

gpuCompanies.push(24);
console.log(gpuCompanies.includes("MSI")); // true
console.log(gpuCompanies.includes("EVGA")); // false
console.log(gpuCompanies.includes(24)); // true

// We can use this includes() method in if-else statements,

if (gpuCompanies.includes("Zotac")) console.log("You have a Zotac GPU!");
*/

////////////////////////////////////////////////
///////// 012 Introduction to Objects //////////
////////////////////////////////////////////////

// Just to Recap an Array is a data stucture to store multiple related values in the same variable. //

/*
const sushArray = [
  "Md",
  "Abu",
  "Rayhan",
  "2023 - 2000",
  "Software engineer",
  ["Bob", "Arisu", "Yusagi"],
];
*/

// So, in this Array there is no way of giving these elements a name. This means we can't referance by their name but only by their order number in which they appear in the array.

// And to solve that problem, we have another data Stucture in JavaScript which is objects.

// So, in objects we define Key-Value pairs. And so then we can give each of these values a name.

/*
const _firstObject = {
  firstName: "Abu Rayhan", // key is the variable name
  lastName: "Sushmoy", // key = lastName, value = "Sushmoy"
  age: 2023 - 2000,
  job: "Software engineer",
  friends: ["Bob", "Arisu", "Yusagi"],
};
*/

// In object we are able to assign a name(Key) to each of these values that we have. Which was not possible in arrays.

// And each of these Keys also called a property. So, we can say it like this Object here which is called _firstObject has five properties.

// Writing a object this way is called the Object Literal Syntax, Because we are literally writting down the entire object content

// Now, the big difference between object and array is that in Objects, the order of these values does not matter at all when we want to retrieve them.

/////////////////////////////////////////////////
///////// 013 Dot vs. Bracket Notation  /////////
/////////////////////////////////////////////////

// Now, we are going learn how to change data in objects, how to retrieve data from objects usign both the dot and the bracket notation.
/*
const sushmoy = {
  firstName: "Abu Rayhan",
  lastName: "Sushmoy",
  job: "Software Engineer",
  friends: ["Arisu", "Yusagi", "Zoro"],
};
*/
// console.log(sushmoy);
/*
console.log(sushmoy.job); // Dot Notation

console.log(sushmoy["lastName"]); // Bracket Notation
*/
// In Bracket Notation we use brackets in a similar way in which we retrieve data from an Array. But, here we need to specify a string with the property name inside the square bracket.

// Now, the main difference between Dot vs. Bracket here is that in Bracket Notation we can put any expression that we'd like.
/*
const nameKey = "Name"; // Name is the repeating part of the first two properties
console.log(sushmoy["first" + nameKey]);
console.log(sushmoy["last" + nameKey]);
*/
// As you can see above, we don't have to explicitly write the string here but instead we can compute it from some operation.

// Doing something like this is common that's why it's impotant that we understand that in the square bracket we could put any expression here

// However we can't do this with the Dot Notation because in Dot Notation we have to use the real final property name and not a computed property name.

// Again, The main difference between Dot vs. Bracket is that we need to first compute the property name in Bracket Notation whereas in any other case just use the Dot Notation.

// Another use case of bracket Notation
/*
const interestIn = prompt(
  "what do you want to know about Sushmoy? Choose between firstName, lastName, job and friends"
);

***console.log(sushmoy.interestIn); // o/p: Undefined, cuz there is no such propety named as interestIn.

console.log(sushmoy[interestIn]); // I/P:job,  O/P: Software Engineer. It happned because we can put any expression inside the bracket notation.***

sushmoy[interestIn]
  ? console.log(sushmoy[interestIn])
  : console.log(
      "Wrong option! Choose between firstName, lastName, job and friends"
    );
*/
// if the input is something that is not a property of our object (sushmoy) than it shows undefined in the console and undefined is a falsy value. So, we created this logic above.

/////// Next up, How to use both the dots and brackets notation to add new properties to the object.
/*
sushmoy.location = "Dhaka";
sushmoy["village"] = "Chandpur";
sushmoy["age"] = 23; // Property name has to be inside double qoutation "" . However that doesn't mean the value will become string too. In this case the value is a integer.
console.log(sushmoy);
*/
// Remember we can use any expression inside the bracket notation just as before.

// Exercise
// "sushmoy has 3 friends, and his best friend is called Arisu"
// Task: Write this sentence but without hard coding any of these values. So, you need to find his first name and how many friends he has and his best friend name.
/*
const lengthOfFriends = sushmoy.friends.length;
console.log(
  `${sushmoy.lastName} has ${lengthOfFriends} friends, and his best friend is called ${sushmoy.friends[0]}`
);
*/

////////////////////////////////////////////////
////////////// 014 Object Methods //////////////
////////////////////////////////////////////////

// functions are really just another type of value. And if a function is just a value then that means that we can create a key value pair in which the value is a function.And that then means that we can in fact, add functions to Objects.
/*
const sushmoy = {
  firstName: "Abu Rayhan",
  lastName: "Sushmoy",
  birthYear: 2000,
  job: "software Developer",
  friends: ["Arisu", "Yusagi", "Sasuke"],
  hasDriverLicense: true,
  clacAge: function (birthYear) {
    return 2023 - birthYear;
  },
};
*/
// So any function that is attached to an object is called a method. For instance, clacAge.

// So if you can think of functions as simply being values then you can see that a method is actually also a property.It just happens to be a property(calcAge) that holds a function value.
/*
console.log(sushmoy.clacAge(2000));
console.log(sushmoy["clacAge"](2000));
*/

// All right, now you might have noticed that the birth year 2000, that we passed in the method as an argument is actually already defined in the sushmoy object itself up there, right?

// So, writing the same number in the argument is not ideal, because we are not keeping the code dry. So, we're violating the don't repeat yourself or DRY principle.

// So if we know the birth year of sushmoy, it would only be written in one place, not in multiple places, because if that might change, then we have to change it everywhere. Again which is not ideal.

// What if we could access this birth year property directly from the Sushmoy object instead of having to pass it in?

// We actually can, that's because in every method, JavaScript gives us access to a special variable called {this}.

// So, what we can do now is in the calcAge function, we can read the birthYear directly from this object itself without having to pass it in as a parameter here into this function.
/*
const sushmoy = {
  firstName: "Abu Rayhan",
  lastName: "Sushmoy",
  birthYear: 2000,
  job: "software Developer",
  friends: ["Arisu", "Yusagi", "Sasuke"],
  hasDriverLicense: true,
  clacAge: function () {
    console.log(this); // Here, {this} keyword is the whole sushmoy object.

    return 2023 - this.birthYear; // that means that inside this clacAge method the {this} variable or the this keyword will point to object(sushmoy).
  },
};

console.log(sushmoy.clacAge());
*/
// So the {this} keyword or the {this} variable is equal to the object(sushmoy) on which the method(clacAge) is called, or in other words, it is equal to the object(sushmoy) calling the method(clacAge).

/**
 * ** IMPORTANT ** IMPORTANT ** IMPORTANT ** IMPORTANT **
 */

// Now, let's say that we need to access the age multiple times throughout our program. So let's say in four places of our application, we need to access the age. So what happens here is that a function will get called a total of four times. And so this computation here will be done four times. A heavier computation like this that takes more time, and so it would be a bad practice to do this multiple times. Instead, what we can do is to just calculate the age once, then store it in the object, and then when we need it at a later point, we can then just retrieve the age as a property from the object.

/*
const sushmoy = {
  firstName: "Abu Rayhan",
  lastName: "Sushmoy",
  birthYear: 2000,
  job: "software Developer",
  friends: ["Arisu", "Yusagi", "Sasuke"],
  hasDriverLicense: true,
  clacAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};

sushmoy.clacAge(); // Here, we only needed to calculate the age once.

// then we simply retrieve the property that we had already calculated before.
console.log(sushmoy["age"]);
console.log(sushmoy.age);
console.log(sushmoy["age"]);
console.log(sushmoy.age);
*/

////////////////// Challenge //////////////////
// Make a method inside the object that says,
// "Sushmoy is a 23 years old software developer, and has a drivers license" OR "Sushmoy is a 23 years old software developer, and has no drivers license"

////// 3rd Attempt [25-10-23] //////
/*
const sushmoy = {
  firstName: "Md. Abu Rayhan",
  lastName: "Sushmoy",
  job: "Software developer",
  birthYear: 2000,
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummery() {
    return `${this.lastName} is a ${this.age} years old ${this.job}, and has ${
      this.hasDriversLicense ? "a" : "no"
    } drivers license`;
  },
};

sushmoy.calcAge();

console.log(sushmoy.getSummery());
*/

////// 2nd Attempt [23-07-23] //////
/*
const sushmoy = {
  firstName: "Md. Abu Rayhan",
  lastName: "Sushmoy",
  job: "Software developer",
  birthYear: 2000,
  hasDriversLicense: false,
  calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummery: function () {
    return `${this.lastName} is a ${this.calcAge()} years old ${
      this.job
    }, and has ${this.hasDriversLicense ? "a" : "no"} drivers license`;
  },
};

console.log(sushmoy["getSummery"]());
*/

////// 1st Attempt //////
/*
const sushmoy = {
  firstName: "Abu Rayhan",
  lastName: "Sushmoy",
  job: "software developer",
  birthYear: 2000,
  hasDriverLicense: false, // true or false will affect the result of getSummery function.
  clacAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummery: function () {
    const cha = this.hasDriverLicense
      ? `${this.lastName} is a ${this.clacAge()} years old ${
          this["job"]
        }, and has a Drivers license`
      : `${this.lastName} is a ${this.clacAge()} years old ${
          this["job"]
        }, and has no Drivers license`;
    return cha;
  },
};

console.log(sushmoy.getSummery());
*/

// Jonas's solution:
/*
const sushmoy = {
  firstName: "Abu Rayhan",
  lastName: "Sushmoy",
  job: "software developer",
  birthYear: 2000,
  hasDriverLicense: false, // In this case, true or false will affect the result of getSummery function.
  clacAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
  getSummery: function () {
    return `${this.lastName} is a ${this.clacAge()} years old ${
      this.job
    }, has ${this.hasDriverLicense ? "a" : "no"} drivers license`;
  },
};

console.log(sushmoy.getSummery());
*/

////////////////////////////////////////////////
///////// 016 Iteration_The for Loop ///////////
////////////////////////////////////////////////

// loop is one of the other control structures like if else statement.

// loops are a fundamental aspect of every programming language, because they basically allow us to automate repetitive tasks.

// let's say we want to print a statement 10 times. if we do it explicitly it'd look something like this

// console.log("Lifting weight repetition 1 🏋🏻‍♂️");
// console.log("Lifting weight repetition 2 🏋🏻‍♂️");
// console.log("Lifting weight repetition 3 🏋🏻‍♂️");
// console.log("Lifting weight repetition 4 🏋🏻‍♂️");
// console.log("Lifting weight repetition 5 🏋🏻‍♂️");
// console.log("Lifting weight repetition 6 🏋🏻‍♂️");
// console.log("Lifting weight repetition 7 🏋🏻‍♂️");
// console.log("Lifting weight repetition 8 🏋🏻‍♂️");
// console.log("Lifting weight repetition 9 🏋🏻‍♂️");
// console.log("Lifting weight repetition 10 🏋🏻‍♂️");

// If we do this task this way it violate's the don't repeat yourself rule and which is not ideal.

// Instead we can use a for loop.
/*
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weight repetition ${rep} 🏋🏻‍♂️`);
}
*/

/////////////////////////////////////////////////
/// 017 Looping Arrays, Breaking and Counting ///
/////////////////////////////////////////////////

// How to read array elements using the for loop :
/*
const arr = [
  "sushmoy",
  23,
  "Dhaka",
  "Student",
  2030 - 2023,
  ["Arisu", "Yusagi", "Mahadi"],
  true,
];

const types = [];

for (let i = 0; i < arr.length; i++) {
  // reading from the arr Array.
  console.log(arr[i], typeof arr[i]); 

  // Filling the types Array
  // types[i] = typeof arr[i]; //way 01//
  types.push(typeof arr[i]); //way 02//
}

console.log(types);
*/

// Exercise:
/*
const years = [1980, 1984, 1986, 1989, 2000];

const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2023 - years[i]);
}
console.log(ages);
*/
/// Continue and Break Statement

// continue is to exit the current iteration of the loop and continue to the next one. for example: if the counter is at position 2 and then if we use continue statemnet  it'll skip the position 3 and continue to position 4.

// On the other hand, break is used to completely terminate the whole loop.
/*
const arr = [
  "sushmoy",
  23,
  "Dhaka",
  "Student",
  2030 - 2023,
  ["Arisu", "Yusagi", "Mahadi"],
  true,
];

console.log("-----Only Strings------");
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] !== "string") continue;
  console.log(arr[i], typeof arr[i]);
}

console.log("-----Brake with Number------");
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") break;
  console.log(arr[i], typeof arr[i]);
}
*/

////////////////////////////////////////////////
//// 018 Looping Backwards and Nested Loop /////
////////////////////////////////////////////////

// Previously, we have looped from the beginning. However, this time we'll try something different.

// We will loop over an Array Backwards.
/*
const sara = [
  "dardina",
  "sara",
  24,
  "BBA",
  "IUB",
  ["pranto", "shanto", "shuvo"],
  989 - 101,
];

for (let i = sara.length - 1; i >= 0; i--) {
  console.log(i, sara[i]);
}
*/

// Let's now program a exercise on Nested Loop
/*
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---- Starting exercise ${exercise} ----`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise - ${exercise}: lifting weight repetition ${rep} 🏋🏻‍♂️`);
  }
}
*/

// Exercise: 2D array element multiply
/*
const arr = [
  [1, 2],
  [3, 4],
  [5, 6, 7],
];
let multiply = 1;
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
    multiply *= arr[i][j];
  }
}

console.log(multiply);
*/

////////////////////////////////////////////////
////////////// 019 The While Loop //////////////
////////////////////////////////////////////////

// Inside a while loop we can only pass a conditon and that's it. for example:
/*
let rep = 1;

while (rep < 11) {
  // console.log(`lifting weight repetiton ${rep} 🏋🏻‍♂️`);
  rep++;
}
*/
// So what we're gonna do is roll a dice and then keep rolling the dice until we roll a six. And then when we roll a six, we stop. So essentially we will want to keep running the loop while the rolled dice is different from six. And so in this case, we don't know beforehand how many times the loop should run. And so we don't need a counter variable and that's exactly the use case of a while loop.
/*
let dice = Math.trunc(Math.random() * 6) + 1;

// So, math is basically an object that JavaScript gives us, and in there, we have a lot of different methods, and random is one of them. Math.random() gives us a number between zero and one in decimal which means 0.1111 to maximum 0.999999 . So whenever we run this, it will give us a new number. And it's always different from the one before. Now if we want a number between one and 6, we will have start by multiplying this by 6. And so now we have this decimal number here, basically ranging between zero and 6. But all this decimal here is just noise, so let's removed that. And for that, we use Math.trunc() . Now we have a number which goes from zero to 5. Because the result of math.trunc(Math.random()) will never really include the number 6. It might only include like 5.999999, but now we're cutting off that decimal part. And so we are now left with a number between zero and five. And so to elevate it to between one and six, all you have to do is to add one here.


while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("loop is about to end...!");
}
*/
// conclusion, the while loop does not have to depend on any counter variable. So whenever you need a loop without a counter, you can reach for the while loop. So basically that happens whenever you do not know beforehand how many iterations the loop will have. So in that situation the while loop is the right tool for the job.

///// Exercise: find the factorial of a given number

// Solution 01:
let num = Number(prompt("Enter any Integer: "));
let fact = 1;

while (num > 0) {
  fact *= num;
  num--;
}
// for (let i = num; i > 0; i--) {
//   fact *= i;
// }
console.log(fact);

// Solution 02: (Using a function)
let num1 = Number(prompt("Enter any Integer: "));

const factorial = function (number) {
  let fact = 1;

  // while (number > 0) {
  //   fact *= number;
  //   number--;
  // }
  for (let i = number; i > 0; i--) {
    fact *= i;
  }
  console.log(fact);
};

factorial(num1);

///// Exercise: finding the sum of numbers 0 to n

let num2 = Number(prompt("Enter any Integer: "));
let sum = 0;
let count = 0;
// for (let count = 0; count <= num2; count++) {
//   sum += count;
// }
while (count <= num2) {
  sum += count;
  count++;
}
console.log(sum);
