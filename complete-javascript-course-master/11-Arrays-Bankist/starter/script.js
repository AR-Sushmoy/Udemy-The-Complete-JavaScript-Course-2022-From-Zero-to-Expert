'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//////////////////////////////////////////////////////////////
////////////////// 003 Simple Array Methods //////////////////
//////////////////////////////////////////////////////////////

/**
 * N.B: For now just remember that, Arrays are objects, and they get access to special built in methods that we can essentially see as tools for arrays.
 * 
 * We will learn why arrays have access to methods in a later section when we talk about prototypal inheritance.

 */

const arr = ['a', 'b', 'c', 'd', 'e'];
/**
 * // SLICE METHOD
 */
console.log(arr.slice(2));
// OUTPUT: (3)[('c', 'd', 'e')];
console.log(arr.slice(2, 4));
// OUTPUT: (2)[('c', 'd')];
console.log(arr.slice(-2));
// OUTPUT: (2)[('d', 'e')];
console.log(arr.slice(-1));
// OUTPUT: ['e'];
console.log(arr.slice(1, -2));
// OUTPUT: (2) ['b', 'c']

// We can create a shallow copy of an array in two ways,
const arrCopy1 = arr.slice();
console.log(arrCopy1); // OUTPUT: ['a', 'b', 'c', 'd', 'e']
// OR
const arrCopy2 = [...arr];
console.log(arrCopy2); // OUTPUT: ['a', 'b', 'c', 'd', 'e']

/**
 * QUESTION: Should you use the spread operator or the slice method, in order to create a shallow copy?
 *
 * ANSWER: It's just a matter of personal preference. The only time we really need to use the slice method here is when we want to chain multiple methods together, so calling one after the other.
 */

/***********************************************************/

/**
 * // SPLICE METHOD
 */

/**
 * QUESTION: What is the difference between the slice and the splice method?
 *
 * ANSWER: A splice method works in almost the same way as slice. But the fundamental difference is that it does actually change the original array. In other words, mutates that array.
 *
 * Returns an array containing the deleted elements. If only one element is removed, an array of one element is returned. For Example: console.log(arr.splice(-1)); // OUTPUT: ['e']
 *
 * If no elements are removed, an empty array is returned.
 * For Example: console.log(arr.splice()); // OUTPUT: []
 *
 * Syntax:
 * splice(start)
 * splice(start, deleteCount)
 * splice(start, deleteCount, item1)
 * splice(start, deleteCount, item1, item2)
 *
 * deleteCount: An integer indicating the number of elements in the array to remove from start.
 *
 */

// console.log(arr.splice(2)); // OUTPUT: (3) ['c', 'd', 'e']
// console.log(arr); // OUTPUT: (2) ['a', 'b']

console.log(arr.splice(-1)); // OUTPUT: ['e']
console.log(arr); // OUTPUT: (2) ['a', 'b','c', 'd']

/**
 * QUESTION: When do we use the splice method in real life?
 *
 * ANSWER: In practice, most of the time the value that the splice method returns, doesn't even interest us. All we are usually interested in is to just delete one or more elements from an array using splice.
 * And one pretty common use case is to simply remove the last element of an array.
 */

// deleteCount parameter in action:
const myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
console.log(myFish.splice(1, 2));
// OUTPUT: (2) ['clown', 'mandarin']
console.log(myFish);
// OUTPUT: (2) ['angel', 'sturgeon']

const myMeat = ['Chicken', 'Turkey', 'Lamb', 'Beef', 'Duck'];
console.log(myMeat.splice(0, 3, 'Goat', 'Goose', 'fish'));
// OUTPUT: (3) ['Chicken', 'Turkey', 'Lamb']
console.log(myMeat);
// OUTPUT: (5) ['Goat', 'Goose', 'fish', 'Beef', 'Duck']
console.log(myMeat.splice());
// OUTPUT: []
console.log(myMeat);
// OUTPUT: (5) ['Goat', 'Goose', 'fish', 'Beef', 'Duck']

/***********************************************************/

/**
 * // REVERSE METHOD [It also mutates the original array]
 */

const alphabetArray = ['f', 'g', 'h', 'i', 'j'];
const alphabetArrayReverse = ['o', 'n', 'm', 'l', 'k'];

console.log(alphabetArrayReverse.reverse());
// OUTPUT: (5) ['k', 'l', 'm', 'n', 'o']
console.log(alphabetArrayReverse);
// OUTPUT: (5) ['k', 'l', 'm', 'n', 'o']

/***********************************************************/

/**
 * // CONCAT METHOD [It DOES NOT mutates the original array]
 */

console.log(alphabetArray.concat(alphabetArrayReverse));
// OUTPUT: (10) ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']

///// We can also do this to achieve the same result /////
console.log([...alphabetArray, ...alphabetArrayReverse]);
// OUTPUT: (10) ['f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o']

/***********************************************************/

/**
 * // JOIN METHOD [It also DOES NOT mutates the original array]
 */

const letters = alphabetArray.concat(alphabetArrayReverse);

console.log(letters.join(' - '));
// OUTPUT: f - g - h - i - j - k - l - m - n - o

/**
 * REMEMBER: We already know push, unshift, pop, shift, indexOf and includes from the last sections.
 */

/////////////////////////////////////////////////////////////
///////////////// 004 The new at() Method ///////////////////
/////////////////////////////////////////////////////////////

/**
 * There's a new, very simple array method in ES2022 which is the at() Method.
 */

const cityBangladesh = [
  'Dhaka',
  'Rajshahi',
  'Sylhet',
  'Bogura',
  'Cumilla',
  'Chittagong',
];

///// Traditionally we used to retrieve elements from an array this way,

console.log(cityBangladesh[0]); // OUTPUT: Dhaka
console.log(cityBangladesh[cityBangladesh.length - 1]);
// OUTPUT: Chittagong
console.log(cityBangladesh.slice(-1));
// OUTPUT: ['Chittagong']
console.log(cityBangladesh.slice(-1)[0]);
// OUTPUT: Chittagong

///// After the ES2022 at() method
console.log(cityBangladesh.at(0)); // OUTPUT: Dhaka
console.log(cityBangladesh.at(-1)); // OUTPUT: Chittagong
console.log(cityBangladesh.at(-2)); // OUTPUT: Cumilla

//// at() method also works on strings
console.log('Sushmoy'.at(0)); // OUTPUT: S
console.log('Sushmoy'.at(-1)); // OUTPUT: y

/**
 * Finally, if you want to get to the last element of an array, or basically start counting from the end of an array, then you should probably start using the At Method.
 * Also, if you want to do something called "method chaining" then the at() Method is also perfect for that.
 * So basically combining multiple methods all at the same time. And then, it's quite helpful to use the at() Method instead of the brackets notation.
 */

/////////////////////////////////////////////////////////////
////////////// 005 Looping Arrays_ forEach() ////////////////
/////////////////////////////////////////////////////////////

/**
 * Previously, we had learned how to loop over an array using the for of loop, but the forEach() method is really fundamentally different.
 */

/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Previously,
for (const movement of movements) {
  if (movement > 0) {
    console.log(`You've deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH -----');

/// The forEach() method:
movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You've deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
});
*/

/**
 * EXPLANATION: So to loop over the movements[] array we use forEach() method, And then the forEach method requires a callback function.
 * So technically forEach() is a higher order function which requires a callback function in order to tell it what to do.
 *
 * So it's the forEach() method here that will call this callback function. We are not calling it ourselves as always.
 *
 * QUESTION: when exactly will forEach actually call this callback function?
 * ANSWER: Well what the forEach() method does is, to loop over the array, and in each iteration it will execute this callback function here. Also as the forEach() method calls this callback function in each iteration it will pass in the current element of the array as an argument and we can specify that and here we named that movement.
 * Simply put, each time this callback here is called, in each iteration, it will receive the current element of the array as an argument.
 *
 * So, behind the scenes, in iteration zero, the forEach() method call this callback function here like,
 * iteration 0: function(200)
 * iteration 1: function(450)
 * iteration 2: function(400)
 * Until it reaches the end of the array.
 */

/**
 * QUESTION: Why do we use a callback function?
 *
 * ANSWER: We use a callback function to tell another higher order function exactly what it should do, and so in this case we tell higher order function forEach() that in each iteration it should log one of these two strings here to the console.
 * So we give the forEach() method instructions by giving it a callback function which contains these instructions.
 */

/**
 * QUESTION: Why do we use higher order functions in JavaScript?
 * ANSWER: First, higher order functions can help improve the legibility of your code by making it more concise and easy to understand. This can help speed up the development process and make it easier to debug code.
 * Second, higher order functions can help organize your code into smaller chunks, making it easier to maintain and extend.
 */

//// Now, How to get access to the current index?
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Transaction No.${i + 1}: You've deposited ${movement}`);
  } else {
    console.log(`Transaction No.${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('----- FOREACH -----');

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Transaction No.${i + 1}: You've deposited ${mov}`);
  } else {
    console.log(`Transaction No.${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});

/**
 * EXPLANATION: Fortunately, it's a lot easier to get access to the current index using the forEach() method.
 *
 * To understand how it works we need to remember once more that it is the forEach() method who calls this callback function in each iteration. And as it calls this callback function it also passes in the current element of the array as an argument.
 *
 * BUT,
 *
 * Actually that's not all it passes in. In fact forEach() passes in the current element, the index, and the entire array that we are looping over.
 *
 * Therefore we can specify them here in our parameter list. Above here we have specified them as i, arr.
 *
 * "Now of course we can just use one, like we have been doing, or we can just use two, or we can use all three parameters together." And as always the names here do not matter at all.
 *
 * But what does matter is the order.
 * So the first parameter always needs to be the current element,
 * the second parameter always the current index and
 * the third one always the entire array that we are looping over.
 *
 * Because that's the order in which the arguments, so the actual values, are passed into our callback function.
 */

/**
 * N.B: the order of the parameters is different in both these scenarios. So the for-of loop and the forEach() method.
 * In forEach() the first value is the current element, and the second one is the index.
 *
 * On the contrary,
 *
 * When we use the .entries() method in the for-of loop then the first element is the index, and the second value is the current array element.
 */

/**
 * QUESTION: when should you use forEach() and when should you use the for-of loop?
 *
 * ANSWER: One fundamental difference between the two of them is that you cannot break out of a forEach loop. So the continue and break statements do not work in a forEach loop at all.
 *
 * So forEach() will always loop over the entire array and there is nothing that you can do about it. So if you really need to break out of a loop then you have to keep using the for-of loop, but other than that it really comes down to your personal preference.
 */

/////////////////////////////////////////////////////////////
//////////// 006 forEach() With Maps and Sets ///////////////
/////////////////////////////////////////////////////////////

/// we can call forEach() on a map.
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

/*
// OUTPUT: 
USD: United States dollar
EUR: Euro
GBP: Pound sterling
*/

/// we can call forEach() on a set.
const currenciesUnique = new Set([
  'USD',
  'GBP',
  'USD',
  'EUR',
  'BDT',
  'EUR',
  'BDT',
  'GBP',
]);

console.log(currenciesUnique);
// OUTPUT: Set(4) {'USD', 'GBP', 'EUR', 'BDT'}

currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

/*
// OUTPUT:  
USD: USD
GBP: GBP
EUR: EUR
BDT: BDT
*/

/**
 * EXPLANATION: So the callback function of the currenciesUnique.forEach() method has the parameters of value, key and map. Same as a while we looped over a map.
 *
 * QUESTION: When we log to the console key and value parameters why do we get the same result?
 *
 * ANSWER: So what this means is that the key here is exactly the same as the value. Well, a set doesn't have keys, And it doesn't have indexes either.
 * So there is no value that would make sense for the key. All right, so essentially this key here makes no sense at all.
 *
 * The people who designed this forEach() method for sets, they could have simply omitted the second argument, right?
 * Well, if they did that, then this forEach() would have been different from the others. And so that would then create confusion in developers, and therefore it was decided to keep the same signature.
 *
 * Basically to keep the same three parameters in this callback function as we saw in maps and simply to set the second one to the first one.
 *
 * We can just use _ (underscore) in the place of the second parameter. Which in javaScript means a throwaway variable.
 */

currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});

/*
// OUTPUT:  
USD: USD
GBP: GBP
EUR: EUR
BDT: BDT
*/
