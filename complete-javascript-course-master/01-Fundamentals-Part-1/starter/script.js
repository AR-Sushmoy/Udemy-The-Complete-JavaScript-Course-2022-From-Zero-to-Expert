/////////////////////////////
////// 002 Hello World //////
/////////////////////////////

alert("Hello World");

//////////////////////////////////////
////// 005 Values and Variables //////
//////////////////////////////////////

/* Naming Convensions and Data types */

/* let js = "Amazing";

console.log(40 + 8 + 23 - 10);

let firstName = "Sushmoy";

console.log(firstName);

let $salary = 3000000;

console.log($salary);

let _mouseCompany = "EngGameGear";

console.log(_mouseCompany);

let myFirstJob = "Programmer";
let myCurrentJob = "Teacher";

console.log(myFirstJob);

let PI = 3.1416; //Constant Variable

console.log(PI);
*/

////////////////////////////
////// 007 Data types //////
////////////////////////////

// first of all, in JavaScript, every value is either an object or a primitive value. So, a value is only a primitive when it's not an object.

/* Object --> 
let me = {
  name: 'Sushmoy'
};
*/

// or

/* Primitive -->
let firstName = 'Abu Rayhan';
let age = 23;
*/

/* there are seven primitive data types: 
number, 
string, 
boolean, 
undefined,
null, 
symbol and 
big int.
*/

/* Dynamic Typing */

/*
let month = "August";
console.log(month);
console.log(typeof month);

month = 2;
console.log(month);
console.log(typeof month);

let age;
console.log(age);
console.log(typeof age);

//there is a bug in this typeof operator with the null data type

console.log(typeof null);
*/

/* 
output says it's an object. Whereas this should print null. Now, about this bug JavaScript says that a type of null is an object and this doesn't make any sense at all. And so this is regarded as a bug or error in JavaScript. However, this bug is never corrected for Legacy reasons. But null is ofcourse is not an object. This should return null as undefined returns undefined as expected. 
*/

// const birthYear = 2000;
// console.log(birthYear);

// we can not declare empty const variables

// let age = 23;
// age = 25;

/*
when we need to mutate a variable, that's the perfect use case for using let
*/

// console.log(age);

//-------------------------------------

// var myFirstJob = "Programmer";

// myFirstJob = "Teacher";

// console.log(myFirstJob);

/* 
Now, although it looks like var and let are very similar, below the surface they are actually pretty different. For now just remember let is block-scoped and var is funtion scoped. For now, what matters is that you should basically never use var.
*/

/////////////////////////////////
////// 009 Basic Operators //////
/////////////////////////////////

/*
// Math Operators
const now = 2023;
const ageJonas = now - 1991;
const ageSarah = now - 1980;

console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = "Rayhan";
const lastName = "Sushmoy";

console.log(firstName + " " + lastName);

// Assignment Operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x *= 4; // x = x * 4 = 100
x /= 5; // x = x / 5 = 20
x++; // x = x + 1 = 21
x--; // x = x - 1 = 20

console.log(x);

// comparison operator

// So basically, we use comparison operators to produce Boolean values

console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;
console.log(isFullAge);
console.log(now - 1991 > now - 1980);
*/

//////////////////////////////////////
////// 010 Operators Precedence //////
//////////////////////////////////////

/*
const now = 2023;

const ageJonas = now - 1991;
const ageSarah = now - 1980;

console.log(now - 1991 > now - 1980);

let x, y;

x = y = 25 - 10 - 5; 

console.log(x, y); // Output: 10 10 | x = y = 10 this means right-to-left. So, y = 10 then both 10.

const averageAge = (ageJonas + ageSarah) / 2;

console.log(ageJonas, ageSarah, averageAge);
*/
///////////////////////////////////////////////
////// 012 Strings and Template Literals //////
///////////////////////////////////////////////
/* 
const firstName = "jonas";
const job = "Teacher";
const birthYear = 2000;
const currentYear = 2023;

const jonas = `I'm ${firstName}, a ${
  currentYear - birthYear
} years old ${job}!`;

console.log(jonas);

console.log(`this is a
multiline
string`);
*/

///////////////////////////////////////////////////
///// 013 Taking Decisions_if_else Statements /////
///////////////////////////////////////////////////

/*
// Example:
const age = 15;

if (age >= 18) {
  console.log("Sarah can have a driving license");
} else {
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

// Example:
let birthYear = 1998;
let century;

if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
///////////////////////////////////////////////////
////// 015 Type Conversion and Type Coercion //////
///////////////////////////////////////////////////
/*
// type Conversion ->
// In Type conversion we do it manually (Explicitley). Means we manually convert from one type to another.

const inputYear = "1991";
const inputYear2 = 1992;
const testVar = "October";
console.log(inputYear + 10); // 199110 in string
console.log(Number(inputYear) + 10); // 2001 in number
console.log(String(inputYear2)); //1992 in string
console.log(Number(testVar)); // Nan (Not a number or Invalid number)

// Type Coercion ->
// In Type coercion it happens automatically
console.log("I'm " + 23 + " years old");
// In JavaScript, the plus '+' operator that we used here triggers a coercion to strings automatically.
console.log("I'm " + "23" + " years old");
// Thanks to type coercion we don't have to write it this way

// type coercion happens in template literals too.It also takes all the number values and converts them to strings automatically.

// Now, Actually not all the operators do type coercion to string
console.log("23" - "10" - 3); // output: 10
// The minus '-' operator actually triggers the opposite conversion means it converts strings to numbers
console.log("23" * "2");
console.log("23" / "2");
// Similarly, '*' and '/' operator converts strings to number

// N.B: if a variable has a actual string value such as a name than implcit or explicit type conversion can't happen in JavaScript
console.log(Number("Sushmoy")); // Output: NaN
*/

///////////////////////////////////////
////// 016 Truthy & Falsy values //////
///////////////////////////////////////

//Falsy values are values that are not exactly false but will become false when we try to convert them into a boolean.

// In JavaScript, there are only 5 flasy values. They are:[ 0, '', undefined, null, NaN ]

// They are not false initilally but they will become false when we attempt to convert them to boolean.

// On the contrary, Everything else are our so-called truthy values meaning values that will be converted to true.

//For example: Any number that is not zero, any string that is not an empty string or any empty object will be converted to true when we try to convert them into a boolen.
/*
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean("Sushmoy"));
console.log(Boolean({})); // true
console.log(Boolean(" ")); // false
*/
// In practice the conversion to boolean is always implicit, not explicit or in other words is always typed coercion that JavaScript does automatically behind the scenes.

// But when exactly does JavaScript do type coercion to booleans?
// --> Well, it heppens in two scenarios. First when using logical operators, and second in a logical context. for example: in the condition of a conditional if-else statement.

/*
const money = 0;

if (money) {
  console.log("Don't spend it all!");
} else {
  console.log("You should get a job");
}
*/
// Output = You should get a job

// Reason: Well, we know that money is a number right now and the number is Zero. But, in the logical context of an if-else statement condition inside the first perenthesis here JavaScript will try to coerce any value into a boolean.

//So, no matter what we put here, if it's not a boolean, JavaScript will try to convert it to a boolean. And that happens using the truthy and falsy value rules. We know that money here is zero, But zero is a falsy value. That is why in the logical context of if-else statement condition inside the first perenthesis this number zero is converted into false. As a result the else block here is executed.

// Another Example:
/*
let height;

if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined");
}
*/
// implicit type coercion happens here. but,
/*
heigth = 0;
if (height) {
  console.log("Yay! Height is defined");
} else {
  console.log("Height is undefined");
}
*/
// here height is zero means defined but according to the truthy and falsy rule else block is executed. this bug can be solved using logical operators.

//////////////////////////////////////////////
////// 017 Equality Operators == vs === //////
//////////////////////////////////////////////

// === is a comparison operator

// beside this we also have ==

// So, the differance is that, === is called the strict equality operator. It's strict because it does not perform type coercion. So, it only returns true when both values are exactly the same.
// for example: '18' === 18 outpur: false
// the triple equal does not perform type coercion.

// On the otherhand, there's also the loose equality operator which is == . And, the loose equality operator actually does Type Coercion.

// for example: '18' == 18 output: true
// what happens here is that this string here '18' will be converted to a number and then the number 18 is the same as this number 18. that's why it returns true.

// So, as a general rule for clean code, avoid the loose equality operator.

// Another operator we have is different operator !== (Stict) and != (Loose). But as we discussed before it is recommended that we use this !== (Strict).

// Now, There is a pretty simple way of getting a value from any webpage by using prompt function.

/*
const favorite = prompt("what's your favorite number");

console.log(favorite); // 23
console.log(typeof favorite); // string

if (favorite == 23) {
  console.log("23 is a cool number"); // o/p: 23 is a cool number
}
*/

/*
const favorite = Number(prompt("what's your favorite number"));

console.log(favorite);
console.log(typeof favorite);

if (favorite === 23) {
  console.log("23 is a cool number");
} else if (favorite === 24) {
  console.log("24 is a great number too!");
} else {
  console.log("please enter a number between 23 , 24");
}

if (favorite !== 23) {
  console.log("why not 23?");
}
*/

/////////////////////////////////
////// 019Logical Operator //////
/////////////////////////////////

/*
const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasGoodVision);

// if (hasDriverLicense && hasGoodVision) {
//   console.log("Sarah Can drive!");
// } else {
//   console.log("Someone else should drive");
// }

let isTired = true;

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah Can drive!");
} else {
  console.log("Someone else should drive"); // Output
}

isTired = false;

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log("Sarah Can drive!"); // Output
} else {
  console.log("Someone else should drive");
}
*/
///////////////////////////////////////
////// 021 The Switch Statement  //////
///////////////////////////////////////

/*
let day = "wednesday";

switch (day) {
  case "monday": // this means, day === 'monday'
    console.log("write code templates");
    break;
  case "tuesday":
    console.log("record videos");
    break;
// N.B: we can do a nice little trick, which is to run the same code for two different values. all we have to do is specify this case and then we can specify another case right after it.

// so whatever we write here will then be executed for both Wednesday and Thursday.
  case "wednesday": 
  case "thursday":
    console.log("write code examples");
    break;
  case "friday":
    console.log("prepare theory videos");
    break;
  case "satureday":
  case "sunday":
    console.log("Enjoy the weekend");
    break;  
  default:
    console.log("not a valid day");
}

// Switch statement was meant for checking eqality and if-else statement is for comparing stuff.

// the same example in if-else statement
day = "sunday";
if (day === "monday") {
  console.log("write code templates");
} else if (day === "friday") {
  console.log("record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend");
} else if (day === "tuesday") {
  console.log("prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("write code examples");
} else {
  console.log("not a valid day");
}
*/

///////////////////////////////////////////
////// 022 Statement and Expressions //////
///////////////////////////////////////////

/*
3 + 4; // it is an expression
1991; // it is an expression
true && false && !ture; // it is an expression

// Expressions produce values.

if (23 > 10) {
  const str = "23 is bigger";
} // it is a statement

// Statements are like full sentences that our actions. Meaning the actions that we want the program to perform.

// The string here "23 is bigger" is itself an expression. But, const str = "23 is bigger"; this line is a statement because this again does not produce a value.

// Now, this difference between expressions and statements is important to know because JavaScript expects statements and expressions in different places. for Example:

const me = "Happy";
console.log(`I am ${2023 - 1989} years old and my name is ${me}
My younger brothers age is ${2023 - 2000}. So, he is ${
  34 - 23
} years younger than me 😖`);

// Inside Template literals ${} here JavaScript expects an expression not any statements.
*/

///////////////////////////////////////////////
////// The Conditional(Ternary) Operator //////
///////////////////////////////////////////////

/*
const age = 23;

// age >= 18
//   ? console.log("I like to drink Coke 🍷")
//   : console.log("I like to drink water 💧");

// Previously, we used if-else statement to perform this type of actions. But, instead of using a statement here we used this Conditional Operator also called Ternary Operator.

// The conditional operator is in fact an operator with three parts, just like a plus '+' operator which has two parts.

//So, remember that an [Operator always produces a value]. In other words, an operator is an expression.

// So, what this means is that if we have a value, we can then assign that value to a variable.

// So, with this we cam make the ternary operator really useful to conditionally declare variables.

const drink = age >= 18 ? "Drink coke 🍷" : "Drink water 💧";
console.log(drink);

// Without conditional operator we'll need to use if-else statement
let drink2;

if (age >= 18) {
  drink2 = "Drink coke 🍷";
} else {
  drink2 = "Drink water 💧";
}
console.log(drink2);

// Since the Ternary operator is an Expression, we can now use it in a template literal. Using the Ternary Operator, which produces value we can actually have conditionals statement inside of a template litaral.

console.log(`I like to drink ${age >= 18 ? "coke 🍷" : "Water 💧"}`);
*/
