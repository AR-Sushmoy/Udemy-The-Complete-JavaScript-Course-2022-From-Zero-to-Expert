'use strict';

/** Important **
 * One way to duplicate a line or a selection is VS Code is to use a keyboard shortcut:
 * Shift + Alt + Up arrow key or
 * Shift + Alt + Down arrow key.
 */

/*
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

//////////////////////////////////////////////////////
////////////// 003 Destructuring Arrays //////////////
//////////////////////////////////////////////////////
/**
 * Destructuring is an ES6 feature.
 *
 * What is destructuring means?
 * Destructuring is a way of unpacking values from an array or an object into separate variables.
 * In other words destructuring is to break a complex data structure down into a smaller data structure like a variable.
 */

// So for arrays we use destructuring to retrieve elements from the array and store them into variables in a very easy way.

/*
 * Without Destructring let's retrieve values from an array
 */

/*
const arr = [1, 2, 3];

const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a, b, c);
*/

/*
 * With Destructuring in ES6
 */
/*
const [x, y, z] = arr;
console.log(x, y, z);
*/

// Now, from the restaurent object above

// Retrieved first and second element of categories array
/*
let [main, secondary] = restaurant.categories;
console.log(main, secondary); // OUTPUT: Italian, Pizzeria
*/

// Retrieved first and third element of categories array
/*
let [main, , third] = restaurant.categories;
console.log(main, third); // OUTPUT: Italian, Vegetarian
*/

// Retrieved first and last element of starterMenu array
/*
let [firstEl, , , lastEl] = restaurant.starterMenu;
console.log(firstEl, lastEl); // OUTPUT: Focaccia, Caprese Salad
*/

/**** Switching variables in the old way *****/
/*
const temp = main;
main = third;
third = temp;
console.log(main, third); // OUTPUT: Vegetarian, Italian
*/

/* Switching variables in the new way */
/*
[main, third] = [third, main];
console.log(main, third); // OUTPUT: Vegetarian, Italian
*/

// Receive two return values from a function above
/*
console.log(restaurant.order(2, 0)); // OUTPUT: Garlic Bread, Pizza 
let [starterItem, mainItem] = restaurant.order(2, 0);
console.log(starterItem, mainItem); // OUTPUT: Garlic Bread, Pizza

// Switching variables
[starterItem, mainItem] = [mainItem, starterItem];
console.log(starterItem, mainItem);
*/

// Nested array destructuring
/*
const nested = [2, 3, [5, 6]];

const [i, , j] = nested;
console.log(i, j); // OUTPUT: 2 & [5, 6]

// In case if we want to retrieve the nested array values
const [k, , [m, n]] = nested;
console.log(k, m, n); // OUTPUT: 2 5 6
*/

/** Defaule values -->
 * Let's say we don't know the length of an array
 * In that case we can set default values in variables
 */

/* 
// For example:
const unknownLength = [2, 5];

const [i, k, l] = unknownLength;
console.log(i, k, l); // OUTPUT: 2 5 undefined 
// PROBLEM: We are getting undefined for variable l

// Solution: we set default values
const [i = 1, k = 1, l = 1, m = 1, n = 1] = unknownLength;
console.log(i, k, l, m, n); // OUTPUT: 2 5 1 1 1
*/

//////////////////////////////////////////////////////
////////////// 004 Destructuring Ojects //////////////
//////////////////////////////////////////////////////

/**
 * Why Do we need Destructuring objects?
 
 * This is an extremely useful addition to the language. Especially when we deal with the result of an API call, which basically means to get data from another web application, like weather data or data about movies or something like that. And this data usually comes in the form of *objects* basically. Then destructuring is really a lifesaver.
 */

// Main Object
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '12:00',
    address = 'Not Defined by user!',
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  /**
  * So if you ever need to write a function like this,
  a complex one with a lot of parameters that might be then hard to specify, keep this technique in mind.
   
  * And this becomes even more useful as the amount of parameters increases. 
   */

/*
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

*/
/*
restaurant.orderDelivery({
  address: 'Rd: 08, House: 23, Dhaka',
  time: '22:13',
  starterIndex: 2,
  mainIndex: 1,
});

restaurant.orderDelivery({
  address: 'Rd: 08, House: 23, Dhaka',
});
*/

//////// Destructuring Ojects ////////

/*
const { name, openingHours, categories } = restaurant;

console.log(name, openingHours, categories);
*/

// What If we wanted the variable names to be different from the property names?
/*
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;

console.log(restaurantName, hours, tags);
*/

// Default Values -->
/**
 * Why Do we need to set Default values ?
 *
 * When we are dealing with third-party data like an object that we get from somewhere else, for example, an API call.
 *
 * It can be really useful to have default values for the case that we're trying to read a property that does not exist on the object.
 *
 * So usually then we get an undefined.
 * For example: if we were trying to say restaurant.menu, this would be undefined because there is no property called menu. 
 
const { menu, starterMenu: starters = [] } = restaurant;
console.log(menu, starters); 
// OUTPUT: undefined (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']

 * so we can set default values just like we can in arrays.
 */

/*
const { menu1 = [], starterMenu: starters = [] } = restaurant;
console.log(menu1, starters);
// OUTPUT: [] (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
*/

/**
 * Keep in mind that, This is especially helpful when we do not have our data hard-coded like we have it here.
 * 
 * But in the real world, we usually get the data from somewhere else. And then we might not always know how exactly the data looks like. And so then it's useful to set defaults like this.

 */

/* * Mutating variables while destructuring objects * */

/*
let a = 111;
let b = 999;

const obj = { 
  a: 23,
  b: 7,
  c: 14, 
};
*/

// Destructuring object and we want to mutate these variables. So a should become 23 and b should become seven.
/*
const { a, b } = obj;
// In Console: SyntaxError: Identifier 'a' has already been declared.
*/

/*
 * Explanation:
 * Now we cannot say const like a, b, because a and b are already declared up here, right?
 */

// or:

/*
{a, b} = obj;
// In Console: SyntaxError: Unexpected token '='
*/

/*
 * Explanation: Reason for that is that when we start a line with a curly braces like this -> { }, then JavaScript expects a code block, all right?
 *
 * And since we cannot assign anything to a code block, like we did here with the equal sign, then we get this error,
 * unexpected token with the equal '=' there.
 *
 * So to solve this here, the trick is to wrap all of this into a parenthesis.
 */

/*
// Solution:
({ a, b } = obj);
console.log(a, b); // OUTPUT: 23 7
*/

/////** Nested Objects **/////

/*
const { fri } = openingHours;
console.log(fri); 
// OUTPUT: {open: 11, close: 23}
*/

// What if I want to destucture keys inside friday property?
/*
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
// OUTPUT: 11, 23
*/

/*
const {
  fri: { open: o = 1, close: c = 1 },
} = hours; // Here, We could've used variable ''openingHours'' as well.
console.log(o, c); // OUTPUT: 11, 23
*/

// A Practical application of Destructuring objects
// {Watch the video from 12:40 for better explanation}

/* Practice: 
const car = {
  name: 'Bugatii',
  color: 'Red',
  country: 'French',
  releases: [1990, 2002, 2007, 2015, 2021, 2024],
  carModels: [
    'Vayron',
    'Diavlo',
    'Chirron',
    'Bolide',
    'Divo',
    'La Voiture Noire',
  ],
  owners: ['Top G', 'Neyma', 'Ronaldo', 'Many koshbik'],

  order: function (releaseIndex, carModelIndex, ownerIndex) {
    console.log(
      `Order recived! model ${this.carModels[carModelIndex]}, release year ${this.releases[releaseIndex]}. Owned by ${this.owners[ownerIndex]}`
    );
  },

  carOrder: function ({
    carModelIndex = 1,
    releaseIndex = 0,
    ownerIndex = 2,
    time = '12:05',
    country = ' ',
  }) {
    console.log(
      `Order received! ${this.carModels[carModelIndex]}, release year ${this.releases[releaseIndex]}. Owned by ${this.owners[ownerIndex]} and his nationality ${country} time ${time}`
    );
  },

  storeOpeningTimes: {
    sat: {
      open: 9,
      close: 15,
    },
    fri: {
      open: 0,
      close: 24,
    },
    tue: {
      open: 12,
      close: 12,
    },
  },
};

// const { storeOpeningTimes } = car;

const {
  sat: { open: O = 1, close: C = 1 },
} = car.storeOpeningTimes;
console.log(O, C);

console.log(car.releases[car.releases.length - 1]);
car.order(car.releases.length - 1, 3, 0);

car.carOrder({
  time: '22:10',
  releaseIndex: 3,
  ownerIndex: 2,
  carModelIndex: 0,
  country: car.country,
});
*/

//////////////////////////////////////////////////////
////////////// 005 The Spread Operator ///////////////
//////////////////////////////////////////////////////

/**
 * Why do we use the Spread operator?
 * we use the spread operator to expand an array into all its elements.
 *
 * In Other words, unpacking all the array elements at one.
 */

/**
 * let's say that we have an array, arr = [7, 8, 9].
And now we want to create a new array based one the previous array but with some new elements at the beginning.
 */

// For Example: [The Old Hard coded way]
/*
const arr = [7, 8, 9];
const badNewArr = [2, 5, arr[0], arr[1], arr[2]];
console.log(badNewArr); // OUTPUT: [2, 5, 7, 8, 9]
*/

// In ES6 [The New more convenient way]
/*
const newArr = [2, 5, ...arr];
console.log(newArr); // OUTPUT: [2, 5, 7, 8, 9]
// The same result as before
*/

/**
 * What the Spread operator does?
 * Answer: the spread operator does basically takes all the values out of this arr array, and then write them **individually**.
 * as if we wrote seven, eight, nine here manually.
 */

/*
const newMenu = [...restaurant.mainMenu, 'Kacchi'];
console.log(newMenu);
// OUTPUT: ['Pizza', 'Pasta', 'Risotto', 'Kacchi']
console.log(...newMenu);
// OUTPUT: Pizza Pasta Risotto Kacchi
*/

/** Important **
 * Now you might have noticed that the spread operator is actually a bit similar to destructuring, because it also helps us get elements out of arrays.
 *
 * Now, the big difference is that the spread operator takes all the elements from the array and it also doesn't create new variables.
 * And as a consequence, we can only use it in places where we would otherwise write values separated by commas.
 *
 */

/** Two important use cases of the spread operator **/
/*
// 1. Create shallow copies of arrays
const mainMenuCopy = [...restaurant.mainMenu];
// 2. Merge/Join two or more arrays together
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
// OUTPUT: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad', 'Pizza', 'Pasta', 'Risotto']
*/

/*
// Another Solution: {Joining two arrays together}
const menu2 = mainMenuCopy.concat(newMenu);
console.log(menu2);
// OUTPUT: ['Pizza', 'Pasta', 'Risotto', 'Pizza', 'Pasta', 'Risotto', 'Kacchi']
*/

/**
 * So far we knew that the spread operator works on arrays,
 * but that's not entirely true, because actually, the spread operator works on all so-called **iterables**.
 *
 * Now what is an iterable?
 * Answer: Well, there are different iterables in JavaScript. For now, just know that iterables are things like all arrays, strings, maps, or sets,
 * ** but not objects **.
 *
 * So basically, most of the built-in data structures in JavaScript are now iterables, but except objects.
 */

/**
 * Since, strings are also iterables that means that we can use the spread operator on a string, as well.
 *
 */
// For Example:
/*
const str = 'Sushmoy';
const letters = [...str, ' ', "'s"];
console.log(letters);
// OUTPUT: ['S', 'u', 's', 'h', 'm', 'o', 'y', ' ', "'s"]
console.log(...letters);
//OUTPUT: S u s h m o y   's
*/

/**
 * ** KEEP IN MIND: **
 * we can still only use the spread operator when building an array,
 * or when we pass arguments into a function.
 */

/*
console.log(...str);
// OUTPUT: S u s h m o y
console.log('S', 'u', 's', 'h', 'm', 'o', 'y');
// OUTPUT: S u s h m o y [same as before]
*/

// For example: what we can't use spread operator to build a string using a template literal.
/*
console.log(`${...str} wins`); 
// OUTPUT: Uncaught SyntaxError: Unexpected token '...'
*/

/**--------------------------------------------------**/

/** Let's now actually write our own function in the restaurant object above,
 * that accepts multiple arguments and
 * then use the spread operator to actually pass those arguments.
 */

/*
const ingredients = [
  prompt("let's make a pasta! Ingredients 1?"),
  prompt('ingredient 2?'),
  prompt('ingredient 3?'),
];
*/

/*
console.log(ingredients); // OUTPUT: ['Chicken', 'Cheese', 'Basil']
*/

/*
restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// OUTPUT:  Here is your delicious pasta with Chicken, Cheese and Basil
*/

/*
restaurant.orderPasta(...ingredients);
// OUTPUT:  Here is your delicious pasta with Chicken, Cheese and Basil
*/

/**
 * As you can see here clearly that calling the function using the spread operator is actually a better solution.
 *
 * So indeed, always go with this more modern ES6 syntax here. It's an amazing addition to the language.
 */

/**--------------------------------------------------**/

/**
 * IMPORTANT: Even though objects are not iterables.
 * Since ES 2018, the spread operator actually also works on objects.
 */

// For Example:
/*
const newRestaurant = { foundedIn: 1997, ...restaurant, founder: 'Alexender' };
// console.log(newRestaurant);
*/

// Now let's make a copy of the restaurant object
/*
const restaurantCopy = { ...restaurant };

restaurantCopy.name = 'Pagla Baburci'; // here we changed the value of the name property

console.log(restaurantCopy);
// OUTPUT: name: 'Pagla Baburci'
console.log(restaurant);
// OUTPUT: name: 'Classico Italiano'
*/

/** Explanation:
 * So the copy has the name of Pagla Baburci, and the old one has Classico Italiano,
 * which means that, we did make a copy of the original restaurant.
 * Because otherwise, as we learned by the end of the previous section, changing one object would then also change the other one.
 */

/**
 * Question: Does copying object using the spread operator creates a deep copy or a shallow copy?
 *
 * Answer: So, for this problem, you have to understand what is the shallow copy and deep copy.
 *
 * [Shallow copy] is a bit-wise copy of an object which makes a new object by copying the memory address of the original object. That is, it makes a new object by which memory addresses are the same as the original object.
 *
 * [Deep copy], copies all the fields with dynamically allocated memory. That is, every value of the copied object gets a new memory address rather than the original object.
 *
 * Now, what a spread operator does?
 * It deep copies the data if it is not nested. For nested data, it deeply copies the topmost data and shallow copies of the nested data.
 */

/*
const oldObj = { a: { b: 10 } };
const newObj = { ...oldObj };

oldObj.a.b = 3;

console.log(oldObj);
// OUTPUT: a:{b: 3}
console.log(newObj);
// OUTPUT: a:{b: 3}
*/

/**
 * It deep copies the top level data, i.e. it gives the property a, new memory address, but it shallow copies the nested object i.e. {b: 10} which is still now referring to the original oldObj's memory location.
 */

// Check this example that proves the above statements,

/*
const oldObj = {
  a: {
    b: 10,
  },
  c: 12,
};

const newObj = { ...oldObj };

oldObj.a.b = 5;
oldObj.c = 7;

console.log('Old Object: ', oldObj);
// OUTPUT: a:{b: 5} c: 7
console.log('New Object: ', newObj);
// OUTPUT: a:{b: 5} c: 12
*/

// You see the c property at the newObj is untouched.

//////////////////////////////////////////////////////
////////// 006 Rest Pattern and Parameters ///////////
//////////////////////////////////////////////////////

/*
// Main object
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '12:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

/**
 * Question: What is the Rest Pattern and what it does?
 * Answer: The Rest pattern looks exactly like the spread operator.
 * So it has the same syntax with the three dots
 * but it actually does the opposite of the spread operator.
 */

/**
 * Explanation: Before we used the spread operator to build new arrays or to pass multiple values into a function.
 *
 * So those are the two use cases of the spread operator and in both cases, we use the spread operator to expand an array into individual elements.
 *
 * Now, the rest pattern uses the exact same syntax
 * However, to collect multiple elements and condense them into an array.
 */

// ** The spread operator is to unpack an array while rest pattern is to pack elements into an array **

// SPREAD, because on RIGHT side of '=' operator / the eaual sign
/*
const newArr = [7, 8, ...[2, 4, 6]];
console.log(newArr); // OUTPUT: 7, 8, 2, 4, 6
*/

/**
 * Explanation:
 * So here we are still using the spread syntax and we know that this is the spread syntax because we are using it on the right hand side of the assignment operator, so of the equal sign '=' .
 */

//  However, we can also use it on the left hand side of the assignment operator together with destructuring.

// REST, because on LEFT side of the equal sign '='
/*
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others); // OUTPUT: 1 2 [3, 4, 5]
*/

/**
 * Explanation: So what is happening here?
 *
 * Answer: Well, just like before the first and the second elements become this first and second variables,
 * But then here comes the rest pattern and so it's called rest because it will take the rest of the elements.
 * And then put them into a new array. In this case, we call this array, others = [3, 4, 5].
 */

/* ------------------------------------------------- */

// Another Example: To show you that we can actually use the three dots on both sides of the assignment operator.

/*
const [pizza, , risotto, ...otherfood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

console.log(pizza, risotto, otherfood);
// OUTPUT: Pizza Risotto (4) ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad']
*/

/** Important thing to note:
 * the rest syntax collects all the array elements after the last variable.
 * So in this case here risotto.
 *
 * It does not include any skipped elements.
 *
 * ** For that reason, the rest pattern always must be the last in the destructuring assignment. **
 *
 * ** For that same reason, there can only ever be one rest in any destructuring assignment **
 */

/* ------------------------------------------------- */

//////// Objects ////////
/*
const { sat: saturday, ...weekdays } = restaurant.openingHours;

console.log(weekdays); // OUTPUT: {thu: {…}, fri: {…}}
*/
/* ------------------------------------------------- */

//////// Functions ////////

// Now, Let's see ** rest parameters ** in action using function

/**
 * A function that is capable of taking any arbitrary amount of arguments and add them. The argument can be in form of numbers individually or we can pass in a whole array using the spread operator.
 */

/*
const add = function (...numbers) {
  console.log(numbers);
};

add(2, 4); // OUTPUT: [2, 4]
add(3, 4, 7, 10); // OUTPUT: [3, 4, 7, 10]
add(1, 6, 7, 9, 3, 2); // OUTPUT: [1, 6, 7, 9, 3, 2]
*/

// Now

// A function that is capable of adding arbitrary amount of arguments and add them //
/*
const add = function (...numbers) {
  let sum = 0;
  for (const item of numbers) {
    sum += item;
  }
  console.log(sum);
};

add(2, 4); // OUTPUT: 6
add(3, 4, 7, 10); // OUTPUT: 24
add(1, 6, 7, 9, 3, 2); // OUTPUT: 28
*/

// or

/*
const y = [23, 45, 102];
add(...y); // OUTPUT: 170
*/

/**
 * Explanation: here we unpacked the values by doing this --> add(...y) and
 * here we pack them back again into an array in the function parameter --> function (...numbers).
 */

/**
 * Question: why we are not simply writing an add function which takes an array as an argument ?
 *
 * Answer: Well, it's way better to do it like this because then the function can accept both an array,
 * And simply all the single values. Also it feels a little bit more natural to simply pass as many arguments as we want to add together into the function.
 *
 * So without having to deal with arrays if we don't want to and so this rest parameters is something that you will see all the time in modern JavaScript code basis.
 */

/* ------------------------------------------------- */

/* From the main object above: 

restaurant.orderPizza('Mushroom', 'Origano', 'Chicken', 'Paperroni');
// OUTPUT: Mushroom (3) ['Origano', 'Chicken', 'Paperroni']
*/

/**
 * EXPLANATION:
 * so we can specify as many arguments as we want, and we get mushrooms, which is this first ingredient.
 * and then we get an array of all the remaining ingredients that we passed in.
 * This is the result of the rest parameter.
 *
 * So, again the first argument was stored into the main parameter which is mainIngredients and then all the remaining arguments that were passed in were simply stored into this array by the rest parameter of syntax.
 */

/** SUMMARY:
 * 1) The spread and rest syntax both look exactly the same but they work in opposite ways depending on where they are used.
 *
 * 2) The spread operator is used where we would write values, separated by a comma. On the other hand the rest pattern is used where we would write variable names separated by commas.
 *
 * So it's a subtle distinction, but this is how you know when and where to use spread and rest.
 */

//////////////////////////////////////////////////////
////////// 007 Short Circuiting (&& and ||) //////////
//////////////////////////////////////////////////////

/**
 * We've already used the AND operator and the OR operator before, but we didn't use their full potential yet.
 */

/**
 * We can use them for something called short circuiting.
 * So up until this point, we have used logical operators only to combine Boolean values.
 * But the truth is that we can do a lot more with the AND and OR operators.
 */

// Question: What is short-circuiting or we can say short-circuiting evaluation ?

/*
console.log(3 || 'Sushmoy'); //OUTPUT: 3
*/

/**
 * EXPLANATION:
 * So that's something that we didn't do before, which is to use non Boolean values here as the operands (3, 'Sushmoy').
 *
 * The result is three. And this means that the results of the OR operator doesn't always have to be a Boolean.
 */

/**
 * So there are three properties about logical operators. They are,
 * 1) They can use any data type.
 * 2) They can return any data type. and
 * 3) They do something called short circuiting, or as we also call it **short-circuit evaluation**.
 */

/**
 * In fact, here we used two values (3, 'Sushmoy') that are not Booleans.
 * And it then returned a value --> 3. that was not a Boolean.
 */

/**
 * And now about **short-circuiting**,
 *
 * Rule: In the case of the OR operator, short circuiting means that if the first operand is a truthy value, then the other operand will not even be evaluated.
 * So JavaScript will not even take a look at it.
 * It will immediately return that first value.
 *
 * So that's exactly what we see here with the first operand 3 which is a truthy value.
 *
 * That's what **short-circuiting** is.
 */

//////////// OR Operator ////////////

// But if the first value is not a truthy value then the second value will get evaluated. And it will return the truthy value.

// For Example:
/*
console.log(true || 0); // OUTPUT: true
console.log('' || 'Arisu'); // OUTPUT: Arisu
console.log(undefined || null); // OUTPUT: null
*/

// That's call no short-circuiting.

/*
console.log(undefined || 0 || '' || 'Hello' || 23);
// OUTPUT: Hello
*/

/////////// QUESTION: Why do we need short-circuiting or when do we use short-circuiting evaluation ?

/*
restaurant.numGuest = 12;
// Ternary operator to set default values
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);
*/

/*
// OR operator to set default values using Short-Circuiting
const guest2 = restaurant.numGuest || 10;
console.log(guest2);
*/

/**
 * ANSWER: This is a way easier method of setting default values than having to deal with this turnery operator or even worse an if-else statement.
 */

/** N.B: Both of these solutions above, using the ternary operator & the OR Operator will not work when the number of guests is set to 0 (Zero).
 *
 * Given what we already know, it make sense. Because 0 is a falsy value that's why in both cases the second value 10 will be the result of the operation and therefore assigned to the guest variable.
 * For Example:
 *
 * restaurant.numGuest = 0;
 * const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
 * console.log(guest1) //OUTPUT: 0
 *
 * Similarly,
 *
 * restaurant.numGuest = 0;
 * const guest1 = restaurant.numGuest || 10;
 * console.log(guest1) //OUTPUT: 0
 *
 * Problem: That is a problem and that's obviously not what we want and we will explore a great solution to this problem in the next lecture.
 */

/* ------------------------------------------------- */

//////////// AND Operator ////////////

/**
 * In short-circuit evaluation, the AND operator works in the exact opposite way of the OR operator.
 */

console.log(0 && 'Sushmoy'); // OUTPUT: 0

/**
 * So what this means is that the AND operator short circuits, when the first value is falsy.
 * And then immediately returns that falsy value without even evaluating the second operand.
 */

console.log(7 && 'Sushmoy'); // OUTPUT: Sushmoy

/**
 * So when the first operand is truthy, it means that the evaluation continues and then simply the last value is returned.
 *
 * And this makes sense if we think about it. So the AND operator is only true if all the operands are true. And so, if the first one here is false, then it means that the entire result of the AND operation will already be false anyway.
 *
 * And so there is no need to even look at any of the other operands.
 */

console.log('Hello' && 23 && null && 'World'); // OUTPUT: null

/**
 * EXPLANATION:
 * So 'Hello' is a truthy value, and therefore the evaluation continues, 23 is also truthy,
 * but then null is a falsy value and therefore evaluation no longer needs to continue.
 * Because at this point, the whole result of the AND operation is gonna be false anyway.
 * And then as a result, null is then simply the value that's gonna be returned and it short circuits the rest of the evaluation.
 * So it will not even take a look at the last operand which is 'World' here.
 */

// Practical Example: Let's say we want to check if a certain property or value exists in a object or not.

// Old Way -->
/*
if (restaurant.orderPizza) {
  restaurant.orderPizza('Paperroni', 'Chesse');
}
// OUTPUT: Paperroni ['Chesse']
*/

// So here if the orderPizza method is available then we want to call it. But we can use the && operator here to exactly do the same thing. We can use the && operator to actually avoid an if statement.

// New Way -->
/*
restaurant.orderPizza && restaurant.orderPizza('Paperroni', 'Chesse');
// OUTPUT: Paperroni ['Chesse']
*/

/**
 * EXPLANATION:
 * If restaurant.orderPizza does not exist, so it's undefined, it will then short circuit the evaluation and nothing else will happen.
 * That's essentially exactly the same as the if block here is doing.
 *
 * But if it does exist. So if it's a truthy value, then the second part here will be evaluated.
 * And so here in this second operand, we can then call the function.
 *
 * ** Basically while using && operator, if the first operand is truthy then we can write any thing like function call in the second operand.
 * So when the first operand is truthy, it means that the evaluation continues and then simply the last value is returned.
 */

/**
 * SUMMARY:
 * 1) The OR operator will return the first truthy value of all the operands, or the last value if all of them are falsy.
 *
 * 2) The AND operator will return the first falsy value or the last value if all of them are truthy.
 *
 * 3) As for practical applications, we can use the OR operator to set default values.
 *
 * 4) We can use the AND operator to execute code in the second operand if the first one is true.
 */

//////////////////////////////////////////////////////
////// 008 The Nullish Coalescing Operator (??) //////
//////////////////////////////////////////////////////

// So previously we've faced a problem while using the || (OR) operator in setting default values
/*
restaurant.numGuest = 0;
const guest = restaurant.numGuest || 10;
console.log(guest); // OUTPUT: 10
*/
// Here we set numGuests to zero, then JavaScript will still take the default value 10 here and assign it to guests because zero is a falsy value.

// PROBLEM: That is a problem and that's obviously not what we want. Instead if the number of guests is zero we want our guest variable to have the value zero assigned to it.

// SOLUTION: nullish coalescing operator
/*
restaurant.numGuest = 0;
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); // OUTPUT: 0
*/

/**
 * How and Why does this work?
 * ANSWER: It's an operator that was introduced in ES2020. The nullish coalescing operator works with the idea or with the concept of nullish values instead of falsy values.
 *
 * There are two types of Nullish value. They are,
 * a) null
 * b) undefined
 *
 * It does not include a 0 (zero) or ' ' (empty string).
 *
 * If the value is not nullish it thinks that the value is a truthy one.
 * In other words, for the nullish coalescing operator, it is as if the zero and the empty string were not falsy values and were instead truthy values as well.
 */

/*
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); // OUTPUT: 10
*/

/**
 * The Nullish coalescing operator only work with the principle of nullish values --> Undefined, Null
 *
 * So all the nullish values will short circuit the evaluation before the ?? operator.
 *
 * Explanation:
 * Above here, restaurant.numGuest was null or undefined, that's why the second operand 10 here was executed and returned.
 */

/*
restaurant.numGuest = 0;
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); // OUTPUT: 0
*/

/**
 * Explanation:
 * Here, restaurant.numGuest is not null nor undefined and it's set to 0. which is a falsy value itself but when we use the Nullish coalescing operator it thinks that 0 or ' ' is truthy value.
 * And therefore, the evaluation here is short-circuited and we get 0  the first non-nullish value for the variable guestCorrect.
 */

/**
 * SUMMARY:
 * Basically, Nullish operator thinks that only nullish values --> [Null or Undefined] are falsy values.
 * But 0, '' and other truthy values are truthy value for it.
 */

//////////////////////////////////////////////////////
////////// 009 Logical Assignment Operators //////////
//////////////////////////////////////////////////////

/*
 let a = 2;

 a = a && 5;
 console.log(a); // OUTPUT: 5
*/
/*
let a;

a &&= 5;
console.log(a); // OUTPUT: undefined
*/

/*
const rest1 = {
  name: 'Capri',
  numGuest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni lamia',
};
/*

/**
 * TARGET:
 * Let's say for both of these objects above we want to set the value for number of guests to 10 (Default).
 *
 * But we don't know yet if numGuest property is present or not inside these objects.
 *
 *  That means if numGuest propery is present than there is no need for the default value 10. But if numGuest property is not present than it will create this numGuest property with the default value of 10.
 */

///////// Logical OR Assignment Operator /////////

// Solution: Using the OR assignment operator ||=
///// OLD WAY
// rest1.numGuest = rest1.numGuest || 10;
// rest2.numGuest = rest2.numGuest || 10;

///// NEW WAY the OR Assignment " ||= " opperator [Does the same thing]
/*
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

console.log(rest1);
// OUTPUT: {name: 'Capri', numGuest: 20}
console.log(rest2);
// OUTPUT: {name: 'La Piazza', owner: 'Giovanni lamia', numGuest: 10}
*/

/**
 * Explanation:
 * So the second object rest2 here didn't have a number of guests or numGuest property and so now numGuests is set to default value 10.
 * And again, that is because of short circuiting.
 * So, rest2.numGuest = rest2.numGuest || 10; in this line rest2.numGuest on the right side here returned undefined which is a (falsy value) .
 * So then the second operand 10 (Truthy value) got returned.
 *
 *
 * While here in this line, rest1.numGuest = rest1.numGuest || 10;
 * rest1.numGuest value was 20 and so it is this 20 that immediately got returned.
 */

/**
 **** The OR Assignment operator " ||= " assigns a value
to a variable if that variable is currently falsy. ****
 */

/* ------------------------------------------------- */

///////// Nullish Assignment Operator /////////

/**Great, so that works beautifully, except in one situation. That actually we already encountered before in the previous lecture.
 */
const rest1 = {
  name: 'Capri',
  numGuest: 0, // set it to 0 now.
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni lamia',
};

/*
rest1.numGuest ||= 10;
rest2.numGuest ||= 10;

console.log(rest1);
// OUTPUT: {name: 'Capri', numGuest: 10}
console.log(rest2);
// OUTPUT: {name: 'La Piazza', owner: 'Giovanni lamia', numGuest: 10}
*/

/**
 * EXPLANATION:
 * zero is actually a falsy value, and so this OR assignment operator is actually working just fine. 
 * 
 * So, rest1.numGuest ||= 10; inside here rest1.numGuest = 0 which is falsy. 
 * 
 * Therefore, 10 will then be assigned to rest1.numGuest property, which is exactly what this operator does. 
 * 
 * So again, the logical OR assignment operator " ||= "
will assign a value to a variable if that exact variable is currently falsy.
 */

//////////////// SOLUTION /////////////////
//// The Nullish Assignment Operator " ??= "

///// OLD WAY
// rest1.numGuest = rest1.numGuest ?? 10;
// rest2.numGuest = rest2.numGuest ?? 10;

///// New Way
rest1.numGuest ??= 10;
rest2.numGuest ??= 10;

console.log(rest1);
// OUTPUT: {name: 'Capri', numGuest: 0}
console.log(rest2);
// OUTPUT: {name: 'La Piazza', owner: 'Giovanni lamia', numGuest: 10}

/**** In a nutshell, the nullish assignment operator " ??= " will assign a value to a variable if that exact variable is currently nullish. *****/

/* ------------------------------------------------- */

///////// Logical And Assignment Operator /////////

/**
 * TARGET:
 * let's say that we want to anonymize the names of the restaurant owners. So when there currently is an owner, like in rest2 object, we want to basically replace this string 'Giovanni lamia' here with the string anonymous.
 */

/* ///// OLD WAY
rest1.owner = rest1.owner && '<Anonymous>';
rest2.owner = rest2.owner && '<Anonymous>';

console.log(rest1); 
// OUTPUT: {name: 'Capri', numGuest: 20, owner: undefined} 

console.log(rest2);
// OUTPUT: {name: 'La Piazza', owner: '<Anonymous>'}
*/

/**
 * EXPLANATION: once again, it is because of short circuiting. And in the particular case of the and operator, it short circuits when the first value is falsy, and then immediately returns that falsy value.
 *
 *  So in the case of this line: rest2.owner = rest2.owner && '<Anonymous>';,
 * that's not what happening. Here rest2.owner is truthy right now and therefore,
 * the second value will then be evaluated and returned.
 *
 * And in the case of this line: rest1.owner = rest1.owner && '<Anonymous>';,
 * rest1.owner in the console it's now being set to undefined.
 * Because well, the rest1.owner does not exist. So, that property is not here and so this value is undefined which is a falsy.
 * And since the and operator " && " short circuits when the first value is falsy (undefined).
 * well, then that is the value that is immediately returned.
 */

/** ///// NEW WAY */
rest1.owner &&= '<Anonymous>';
rest2.owner &&= '<Anonymous>';

console.log(rest1);
// OUTPUT: {name: 'Capri', numGuest: 20}

console.log(rest2);
// OUTPUT: {name: 'La Piazza', owner: '<Anonymous>'}

/**
 * Question: Why it does not show owner: undefined in the console when we use the " &&= " operator ?
 *
 *
 * Here in the case of the first restaurant, the result is even better now than what we had before because with this code here, we actually had the owner then set to undefined, which was not really what we wanted. Now it is simply not here.
 */

/**
 * Explanation: 
 * clearly, In this line: 
 * rest1.owner &&= '<Anonymous>'; 
 * rest1.owner property was falsy because it didn't exist. And so then nothing happened. So the object stayed exactly the same.
 * 
 * Then In this line:
 * rest2.owner &&= '<Anonymous>';
 * rest2.owner this here was indeed truthy, 
 * So it was 'Giovanni Lamia' before. And so it was replaced now with this other string '<Anonymous>'.

 */

/**
 * In A Nutshell:
 * 1) The logical AND Assignment Operator " &&= " assign a value to a variable if it is currently truthy.
 * 
 * 2) If you ever need to assign a value to a variable that is already defined, so that has a value that is currently truthy, then you can use this AND assignment operator " &&= ".

 */

//////////////////////////////////////////////////////
//////// 011 Looping Arrays_ The for-of Loop /////////
//////////////////////////////////////////////////////

/**
 * The for-of Loop was introduced in ES06.
 */

// Main object
/*
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '12:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
*/

/**
 * Why do we need the for-of loop?
 * Answer: Previously if we wanted to loop through an array, we would have to go through all the steps of setting up a counter variable, a condition and also update the counter.
 * that's a lot of work!!
 * so that's why we got the for-of loop now in which we don't need any of that.
 * it's really a nice level of abstraction over the regular for loop.
 */

/*
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) console.log(item);

*/

/* OUTPUT: 
Focaccia
Bruschetta
Garlic Bread
Caprese Salad
Pizza
Pasta
Risotto
*/

/**
 * Explanation:
 * So this for-of loop, which is called for-of because it is for and then item of the menu array.
 *
 * So this loop will automatically loop over the entire array and in each iteration, it will give us access to the current array element.
 *
 * So in this case it's called the item variable, but of course we could call it anything that we want.
 *
 * And so if we simply log the current item down to the console, we get each element logged one by one.
 *
 * Again that's because, the item variable is always the current element in each iteration.
 */

/**
 * IMPORTANT: What's also great about the for-of loop, is that we can still use the continue and break keywords.
 */

/**
 * QUESTION: What if we also want the current index and not just the current element?
 * ANSWER: Originally, the for-of loop was just meant to give you the current element. However, you can get both the current index and the current element by using the entries() method on the array.
 */

/*
for (const item of menu.entries()) {
  console.log(item);
}
*/
/* OUTPUT: 
(2) [0, 'Focaccia']
(2) [1, 'Bruschetta']
(2) [2, 'Garlic Bread']
(2) [3, 'Caprese Salad']
(2) [4, 'Pizza']
(2) [5, 'Pasta']
(2) [6, 'Risotto']
*/

/**
 * EXPLANATION: as you see, each of the item is now actually an array with the index and the array element itself.
 */

// Let's take a look at this menu.entries()
/*
console.log(menu.entries); // OUTPUT: Array Iterator {}
*/

/**
 * EXPLANATION: Here, we get the weird array iterator. So that's not really helpful. We'll learn about iterator by the end of the course.
 * Now, if we want to take a look at this we need to expand menu.entries() using the spread operator. And then create a new array based out of that.
 * This is really just to take a look at what menu dot entries actually is.
 */

/*
console.log([...menu.entries()]);
*/

/* OUTPUT:
(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
After expanding, we get this -->
0: (2) [0, 'Focaccia']
1: (2) [1, 'Bruschetta']
2: (2) [2, 'Garlic Bread']
3: (2) [3, 'Caprese Salad']
4: (2) [4, 'Pizza']
5: (2) [5, 'Pasta']
6: (2) [6, 'Risotto']
length: 7
[[Prototype]]: Array(0)
*/

/**
 * EXPLANATION: Here, we see that it is basically an array, inside in each position contains a new array,
 *
 * Inside the new array it contains the index number of that element and the element itself from the original array which is the 'menu' array.
 *
 * So, that's the reason we get the output in pairs inside an array which is the 'item' variable.
 *
 * Now 'item' is an array that contains the index number of that element and the element from the 'menu' array.
 *
 */

/*
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[0]}`);
}
*/
/*
OUTPUT: 
1: 0
2: 1
3: 2
4: 3
5: 4
6: 5
7: 6

EXPLANATION: Since now 'item' is an array that has two element inside like this, [0, 'Focaccia'].

So, if we want the names in the console we'll have to put 1 not 0.
*/

/*
// Old Hard coded way
for (const item of menu.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}
*/

/* OUTPUT:
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto
*/

/*
// New Smarter way
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
*/
/* OUTPUT:
1: Focaccia
2: Bruschetta
3: Garlic Bread
4: Caprese Salad
5: Pizza
6: Pasta
7: Risotto

EXPLANATION: Because 'item' is an array so we can now destructure 'item' array. like this --> [i, el]
*/

//////////////////////////////////////////////////////
/////////// 012 Enhanced Object Literals /////////////
//////////////////////////////////////////////////////

/**
 * So below this restaurant object is an object literal, that's because we basically wrote this object literally in our code using this curly braces syntax.
 *
 *
 * ES6 introduced three ways, which make it easier to write object literals. They are,
 *
 * 1) First Enhancement: We can now use an entire object inside of other object.
 *
 * 2) Second Enhancement: we can easily write functions inside of an object literal.
 *
 * 3) Third Enhancement: the third enhancement is that we can now actually compute property names or use mathematical expressions instead of having to write them out manually and literally.
 *
 *
 */

// Third Enhancement
const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// First Enhancement
const openingHours = {
  // Third Enhancement applied
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  // Third Enhancement applied
  [weekdays[weekdays.length - 3]]: {
    open: 11,
    close: 23,
  },
  // Third Enhancement applied
  [`day ${7 - 1}`]: {
    open: 10,
    close: 24,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};

const restaurant = {
  // First Enhancement
  openingHours,

  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // Second Enhancement applied (functions)
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // Second Enhancement applied (functions)
  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '12:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  // Second Enhancement applied (functions)
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  // Second Enhancement applied (functions)
  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

//////////////////////////////////////////////////////
//////////// 013 Optional Chaining (?.) //////////////
//////////////////////////////////////////////////////

/**
 * QUESTION: What is optional Chaining?
 * ANSWER: Optional Chaining is one of the newer feature of objects and also of arrays.
 */

/**
 * QUESTION: Why do we need optional chaning?
 * ANSWER: Let's learn about that by an real world example below,
 */

// let's assume that we wanted to get the opening hours of our restaurant for Monday. So let's quickly check that,

/*
console.log(restaurant.openingHours.mon); // OUTPUT: undefined
*/

/**
 * Now, this property 'mon' doesn't exist. So you see that this is undefined, right? But let's pretend that we don't know whether this restaurant opens on Monday or not.
 *
 * And that could be the case. For example if this data came from a real web service. So a web API.
 *
 * And in their service there could be multiple restaurants and not all of them would open on Monday.
 *
 * In other words, we had no way of knowing if this particular restaurant would open on Monday or not.
 */

// Now let's go even further because we actually want to know exactly the hour on which the restaurant opens on Monday.

/*
console.log(restaurant.openingHours.mon.open);
// OUTPUT: Uncaught TypeError: Cannot read properties of undefined (reading 'open')
*/

/**
 * Now we do get an error because the results of 'restaurant.openingHours.mon' was undefined.
 * And then 'undefined.open' is really an error. So that's the error that we get here.
 */

// In order to avoid this error, we would first have to check if this here actually exists.

if (restaurant.openingHours.mon) console.log(restaurant.openingHours.mon.open);
// OUTPUT: **NOTHING** and no error in the console.

// But if we did the same for let's say Tuesday, then we already know that Tuesday exists.

if (restaurant.openingHours.tue) console.log(restaurant.openingHours.tue.open);
// OUTPUT: 13

/**
 * But let's focus now on Monday, which is the day that doesn't exist. 'restaurant.openingHours.mon' is checking just for one property (Monday).
 *
 * But let's now imagine that we don't know that whether the restaurant object has opening hours property or not.
 *
 * So, in this case, we would have to check for both, right?
 */

// Let's check of both of these property now,

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon);
// OUTPUT: **NOTHING** and no error in the console.

/**
 * Sometimes in the real world scenario what happens is that checking for properties manually like above can get out of hand pretty quickly when we have deeply nested objects with lots of optional properties.
 *
 * So, we might end up facing errors.
 */

/**
 * Therefore in ES2020 JavaScript introduced a great solution for this, which is a feature called "Optional Chaining".
 */

/**
 * Question: What Optional Chaining actually does?
 * ANSWER: With optional chaining, if a certain property does not exist, then undefined is returned immediately.
 *
 * And so that will then avoid that kind of error that we saw earlier.
 */

// let's recreate it now with optional chaining.
console.log(restaurant.openingHours.mon?.open);
// OUTPUT: undefined

/**
 * Here is how Optional Chaining works, only if the property that is before the question mark here "restaurant.openingHours.mon". So only if Monday exists, then this 'open' property will be read from there.
 * If not or In other words, If the property does not exists which means undefined or null, then undefined will be returned immediately.
 */

/**
 * N.B: exists here actually means the nullish concept i.e, The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined.
 *
 * For Example:
 * const foo = null ?? 'my besto frendo';
 * console.log(foo); // OUTPUT: 'my besto frendo'
 *
 * const baz = 0 ?? 43;
 * console.log(baz); //OUTPUT: 0
 */

/**
 * But in the case of using optional chaining inside an object if the left hand side operand doesn't exists then undefined is returned immediately.
 *
 * Otherwise it will return the value.
 *
 * So, a property exists if it's not null and not undefined. Okay?
 * So of course if it's zero or the empty string, then it still exists.
 */
/*
// So if we try this now, then we get undefined.

console.log(restaurant.openingHours.mon?.open);
// OUTPUT: undefined
*/

// Let's recreate it here without the optional chaining.
/*
console.log(restaurant.openingHours.mon.open);
// OUTPUT: Uncaught TypeError: Cannot read properties of undefined (reading 'open')
*/

/**
 * EXPLANATION: And so above here we would indeed get the error.
 * Again because all of this "restaurant.openingHours.mon" here is undefined, and then we read 'open' here from undefined, which doesn't work.
 */

/*
console.log(restaurant.openingHours.mon?.open);
// OUTPUT: undefined
*/

/**
 * EXPLANATION: But here "restaurant.openingHours.mon?." this next operation of trying to read 'open' only happens if all of this "restaurant.openingHours.mon" here actually exists.
 * So if it's not null and not undefined.
 *
 * But if it is undefined or null, then the result will be undefined immediately.
 */

////////// Multiple Optional Chaining ////////////

console.log(restaurant.openingHours?.mon?.open);

/**EXPLANATION: So here we are testing for both opening hours and for Monday.
 * So these are the two optional properties that we do not know beforehand if they exist.
 * So Monday is optional, and that's why we have the question mark here like "restaurant.openingHours.mon?.open" , asking if it exists.
 *
 * And now we can do the same for opening hours. If "restaurant.openingHours" does not even exist,
 * well, then the 'mon' property will not even be read.
 *
 * So therefore we don't get that error. All right?
 *
 * And so this makes it really easy to prevent all kinds of bugs that sometimes we might not even expect.
 */

// A real world example/application of optional chaining:
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

/**
 * TASK: We want to loop over this array and then lock to the console, whether the restaurant is open or closed on each of the days.
 */

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'Never';
  console.log(`On ${day}, we open at ${open}`);
}
/** OUTPUT:
 * On mon, we open at Never
 * On tue, we open at Never
 * On wed, we open at Never
 * On thu, we open at 12
 * On fri, we open at 11
 * On sat, we open at 0
 * On sun, we open at Never
 */

/**
 * EXPLANATION: for restaurant.openingHours[day] in there openingHours[day] is doing the same thing as
 *  openingHours.mon or
 * openingHours.tue or
 * openingHours.wed and so on.
 * So instead of doing it explicitly one by one since this is a loop. So, that's why we have used the bracket notation and inside we passed in the variable 'day'.
 * openingHours[day] here doing the work dynamically .
 */

/**
 * So, this is an amazing use case of the optional chaining operator and the nullish coalescing operator working together.
 * And in fact, they were introduced into the language at the same time in ES2020.
 * Because they were really designed to work well with each other.
 *
 * Both of them rely on this new concept of nullish and so nullish values are 'null' and 'undefined'.
 */

/////// Optional Chaining for calling methods /////////

/**
 * So optional chaining does also work for calling methods.
 *
 * We can check if a method actually exists before we call it. For Example: restaurant.order method
 */

// Let's check for a method that we wrote before
console.log(restaurant.order?.(2, 1) ?? 'Method does not exists!');
// OUTPUT: ['Garlic Bread', 'Pasta']
/**
 * EXPLANATION: In this case above, the method does exist so here we get the expected result.
 */

// Let's check for a method that we never wrote before
console.log(restaurant.orderRice?.(0, 1) ?? "Method Doesn't exist!");
// OUTPUT: Method Doesn't exist!

/**
 * EXPLANATION: so just like before this optional chaining operator will check if orderRisotto actually exists. And if it doesn't, well then it will immediately return undefined.
 *
 * And the nullish coalescing operator ?? , will immediately go to that second operand "Method Doesn't exist!". Then that's the result of the whole operation.
 */

// Let's check for a method that we never wrote but without using Optional Chaining
/*
console.log(restaurant.orderRice(0, 4) ?? "Method Doesn't exist!");
// OUTPUT: Uncaught TypeError: restaurant.orderRice is not a function
*/

/**
 * EXPLANATION: Above here if we try to check for a method that is not present inside the main object than we get an error.
 *
 * So, That is a good use case of using Optional Chaining for calling methods. If we use Optional Chaining while we are working with an unknown object or Web API then we might need to use it so that we don't end with a error.
 */

////////// Optional Chaining on arrays ////////////

// Let's create an array and inside the first element we have an object
const users1 = [{ firstName: 'Rayhan', email: 'hey@sushmoy.io' }];

console.log(users1[0]?.firstName ?? 'User array empty');
// OUTPUT: Rayhan

/**
 * EXPLANATION: Here the Optional chaining symbol asks if the 0 index is available in the users1 array then show the firstname property.
 * since users1[0] is present that means it's a truthy value and it gets logged into the console. Because that's how the nullish colescing operator works.
 */

// Let's try it with an empty array
const users2 = [];
/*
console.log(users2[0].firstName ?? 'User array empty');
// OUTPUT: Uncaught TypeError: Cannot read properties of undefined (reading 'firstName')
*/

console.log(users2[0]?.firstName ?? 'User array empty');
// OUTPUT: User array empty

/**
 * EXPLANATION: if we don't use Optional chaining then for the users2 array there is no element. so, users2[0] is undefined and we get an error.
 *
 * On the otherhand, if we use the Optinal chaining than it asks if the users2[0] is present or not. Since it is unavailable the whole term 'users2[0]?.firstName' becomes undefined and because of the nullish colescing operator we get 'User array empty' as the output.
 */

// Now if we had not used the nullish colescing operator than we'd had to write like this below,

if (users1.length > 0) console.log(users1[0]?.firstName);
else console.log('User array empty');
// OUTPUT: Rayhan

/**
 * EXPLANATION: As you can see it is a lot of work without the nullish colescing operator.
 */

/**
 * SUMMARY: So, get used to this optional chaining operator, It's because  we use them together with the nullish coalescing operator.
 *
 * The reason behind is that, by using them we can actually do something in case we don't get a result from the object or from the array.
 */

/////////////////////////////////////////////////////
// 14 Looping Objects_Object_Keys_Values_&_Entries //
/////////////////////////////////////////////////////

/**
 * We know that array is an iterable
 * And we've learned about the for of loop to loop over arrays.
 *
 * But we can also loop over objects, which are not Iterable, but in an indirect way.
 *
 * [N.B: Inside an object we have the key and value pair. example: const sushmoyAge = { age: 23 } here age is the key or in other words the property name and 23 is the value]
 */

/**
 * While looping over objects we have different options,
 * 1) We can loop over the objects property names (Keys) only over the values.
 *
 * 2) We can loop over the objects values only.
 *
 * 3) We can loop over the objects property names (Keys) and the values both.
 */

/////// 1) loop over the property names (Keys) ///////

/**
for (const day of Object.keys(openingHours)) {
  console.log(day);
}
 * // OUTPUT:
 * thu
 * fri
 * day 6
 * sat
 */

///// Now let's take a closer look at this mysterious Objects.keys() method /////

const properties = Object.keys(openingHours);
console.log(properties);
// OUTPUT: ['thu', 'fri', 'day 6', 'sat']

/**
for (const day of properties) {
  console.log(day);
}
 * // OUTPUT:
 * thu
 * fri
 * day 6
 * sat
 * 
 * EXPLANATION: As you can see here properties variable is an array. 
 * This means "Object.keys(openingHours)" this line turns the 'openingHours' object into an array.
 */

let openStr = `Restaurant opens on ${properties.length} days: `;

for (const day of properties) {
  // openStr = openStr + `${day}, `;
  openStr += `${day}, `;
}

console.log(openStr); // OUTPUT: Restaurant opens on 4 days: thu, fri, day 6, sat,

/**
 * EXPLANATION: Since properties is an array we can use the dot length operator to get the length of the array. That's exactly what we did here inside the openStr variable.
 */

////////// 2) loop over the property values //////////

const values = Object.values(openingHours);
console.log(values); // OUTPUT: [{…}, {…}, {…}, {…}]

for (const i of values) {
  console.log(i);
}
/*
// OUTPUT: 
{open: 12, close: 22}
{open: 11, close: 23}
{open: 10, close: 24}
{open: 0, close: 24}
 */

// 3) loop over the entire object (Keys and values) //

/**
 * QUESTION: How to do that?
 * ANSWER: To loop over the entire object, we actually need the entries.
 *
 * So entries is basically property names (keys) plus the values together.
 *
 * Previously, we had seen the uses of entries. So, that's when we looped over an array and on the array, we called this entries() method.
 * And so the entries returned the index number and the element itself.
 *
 * We can do something similar on objects and that will also return the key and the value.
 * But it works differently on objects because it's not going to be a method that we call on the object itself.
 */

const entries = Object.entries(openingHours);
console.log(entries);
// OUTPUT: [Array(2), Array(2), Array(2), Array(2)]

for (const x of entries) {
  console.log(x);
}

/**
OUTPUT: 
(2) ['thu', {…}]
if we expnad this array,
0: "thu"
1: {open: 12, close: 22}

(2) ['fri', {…}]
(2) ['day 6', {…}]
(2) ['sat', {…}] 

EXPLANATION: So, variable x is an array and we have each key and each vlaue inside that array.
*/

// Exercise: Let's print to the console a string like this-> On fri we open at 12 and close at 22

for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}
/**
// OUTPUT: 
On thu we open at 12 and close at 22
On fri we open at 11 and close at 23
On day 6 we open at 10 and close at 24
On sat we open at 0 and close at 24

EXPLANATION: Since variable x is an array what we actully did was just destructured it and inside that the second element is an object so we destructured it as well.
*/

/**
 * So, by using the Object.keys(), Object.values() and Object.entries() we can create an array of existing objects then we can use the for-of loop to loop over the arrays.
 */

/////////////////////////////////////////////////////
///////////////////// 016 Sets //////////////////////
/////////////////////////////////////////////////////

/**
 * Set is a data structure that was introduced in ES6.
 *
 * Definition: a set is just a collection of unique values.
 * Meaning that a **[[set can never have any duplicates.]]**
 */

const ordersSet = new Set([
  'pasta',
  'pizza',
  'burger',
  'pasta',
  'pizza',
  'burger',
]);

console.log(ordersSet);
// OUTPUT: Set(3) {'pasta', 'pizza', 'burger'}

/**
 * EXPLANATION: In order to create a new set, we write --> new set() then inside the first parentheses, we need to pass in an iterable.
 * And the most common iterable is an array.
 *
 * In the output, we can see that all the duplicates are actually gone. So, it's only 'pasta', 'pizza', 'burger'.
 * Because, set can never have any duplicates.
 */

/**
 * We can see that a set kind of looks similar to an array,
 * There are no key value pairs, it's just a bunch of values grouped together, in this case into a set.
 *
 * [[** sets are also iterables **]], just like arrays.
 */

/**
 * QUESTION: Why Sets are different from arrays?
 * ANSWER: There are two differences,
 * 1) first, its elements are unique.
 * 2) second, the order of elements in the set is irrelevant. In other words, order of element is not important.
 */

// Anyway, keep in mind that strings are also iterables. So, we can also do this,
console.log(new Set('Jakir'));
// OUTPUT: Set(5) {'J', 'a', 'k', 'i', 'r'}
console.log(new Set('Tamim'));
// OUTPUT: Set(4) {'T', 'a', 'm', 'i'} EXPLANATION: set can never have any duplicates

// A set can also be empty, like this,
console.log(new Set()); // OUTPUT: Set(0) {size: 0}

// Now we'll learn how work with sets

// 1) we can get the size of a set,
console.log(ordersSet.size);
// OUTPUT: 3
/**
 * EXPLANATION:
 * So in this particular example, this might be useful for the chef of our kitchen to know how many different meals are going to be cooked here.
 *
 * If this array here is an array of all the orders,then the set of these orders are simply the unique different meals that are gonna be cooked. i.e, pasta, pizza, burger.
 *
 * And then the size is how many different meals will be cooked? so 3.
 *
 */

// 2) We can if a certain element is in a set
console.log(ordersSet.has('pizza'));
// OUTPUT: ture
console.log(ordersSet.has('Bread'));
// OUTPUT: false

/**
 * EXPLANATION: so the has() method checks if a certain element is inside of a set or not. And it produces boolean values.
 *
 * So, comparing to arrays, this has() method is similar to the includes() method in arrays.
 */

// 3) We can add element to a set
ordersSet.add('beef curry');
ordersSet.add('beef curry');

console.log(ordersSet);
// Set(4) {'pasta', 'pizza', 'burger', 'beef curry'}

/**
 * EXPLANATION: Although we have added 'beef curry' element twice but it got added once. Because again the set has to be unique. That's why the second one was ignored.
 *
 */

// 4) We can delete single element from a set
ordersSet.delete('pasta');
console.log(ordersSet);
// OUTPUT: Set(3) {'pizza', 'burger', 'beef curry'}

/**
 * QUESTION: How do we retrieve values out of a set?
 * ANSWER: In sets there are no indexes. In fact, there is no way of getting values out of a set.
 *
 * Actually, there's no need for getting data out of a set. That's because, if all values are unique, and if their order does not matter, then there is no point of retrieving values out of a set.
 * All we need to know is whether a certain value is in the set or not.
 * And that's why we have the has method.
 *
 * If your goal is to store values in order and then retrieve it, then the best use case is to just use an array. You wouldn't use a set for that.
 *
 * So again, there's no need for getting values out of a set, because if you need it, then you will just use an array.
 */

// 5) We can delete all the element at once from a set

ordersSet.clear();
console.log(ordersSet); // Set(0) {size: 0}

const foodSet = new Set([
  'Chui Goshto',
  'Morog Polau',
  'Kacchi Biriyani',
  'Tehari',
  'Chui Goshto',
  'Kacchi Biriyani',
]);

console.log(foodSet);
// OUTPUT: Set(4) {'Chui Goshto', 'Morog Polau', 'Kacchi Biriyani', 'Tehari'}

// 6) We know that, sets are iterables, So we can loop over them.

for (const food of foodSet) {
  console.log(food);
}
/*
// OUTPUT: 
Chui Goshto
Morog Polau
Kacchi Biriyani
Tehari
*/

/**
 * QUESTION: How do we use set in a normal code base?
 * ANSWER: So in a normal code base, the main use case of sets is to remove duplicate values from arrays.
 */

// Example:
const restaurantStaff = [
  'waiter',
  'chef',
  'dish washer',
  'manager',
  'ceo',
  'gaurd',
  'waiter',
  'dish washer',
  'chef',
  'waiter',
];

// now let's say that for some reason, we are interested in knowing only unique different positions there are in our restaurant.

/*
const staffSet = new Set(restaurantStaff);
console.log(staffSet);
// OUTPUT: Set(6) {'waiter', 'chef', 'dish washer', 'manager', 'ceo', 'gaurd'}
*/

/**
 * QUESTION: Now what if we want staffSet to be an array?
 * ANSWER: So, we'd have to do the conversion from a set to an array. Well, that's pretty easy. Because, they're both iterables.
 */

const staffSet = [...new Set(restaurantStaff)];
console.log(staffSet);
// OUTPUT: ['waiter', 'chef', 'dish washer', 'manager', 'ceo', 'gaurd']

/**
 * EXPLANATION: So remember from earlier that the spread operator works on all iterables. Right?
 * So that includes sets.
 * And so we can now create an array around this. And then we can unpack this entire set here using the spread operator.
 * Then these elements will be put into the newly constructed array.
 */

/**
 * QUESTION: What if we only wanted to know how many different positions are there?
 * ANSWER: We can use the size property, which is very useful in this case.
 */

console.log(
  new Set([
    'waiter',
    'chef',
    'dish washer',
    'manager',
    'ceo',
    'gaurd',
    'waiter',
    'dish washer',
    'chef',
    'waiter',
  ]).size
);
// OUTPUT: 6

/**
 * QUESTION: What if we want to know how many Unique letters there are in a string?
 * ANSWER: The same could even be done with counting, how many different letters there are in a string.
 * Because a string is also an iterable.
 */

console.log(new Set('AbuRayhanSushmoy').size);
// OUTPUT: 12

/**
 * CONCLUSION:
 *
 * Sets are not intended to replace arrays at all.
 *
 * Whenever we need to store values in order, and that might contain duplicates just use arrays.
 *
 * That's also true when you need to manipulate data, because arrays have access to a lot of great array methods.
 *
 *
 * However, they are not nearly as important as arrays. So keep sets in mind when you need to work with unique values.
 */

/////////////////////////////////////////////////////
////////////// 017 Maps_ Fundamentals ///////////////
//////////////////////////////////////////////////////

/**
 * QUESTION: What exactly is a map?
 * ANSWER: In JavaScript, a map is a data structure that we can use to map values to keys.
 * just like an object, data is stored in key value pairs in maps.
 */

/**
 * QUESTION: What is the main differance between objects and maps?
 * ANSWER: The big difference between objects and maps is that in maps, the keys can have any type.
 *
 * So, in objects, the keys are basically always strings. But in maps, we can have any type of key.
 *
 * It could even be objects, or arrays, or other maps.
 */

/**
 * QUESTION: How to create a map?
 * ANSWER: The easiest way to create a map is to actually create an empty map without passing anything in.
 * And then, to fill up the map we can use the set() method.
 * And then inside the set(), we pass in arguments.
 */

// Let's create a map
const restaurantMap = new Map();
restaurantMap.set('Name', 'Pagla Baburchi');

/**
 * EXPLANATION: As you can see that, this set() method is pretty similar to the add() method that we had in sets.
 * Both allow us to add a new element to the data structure.
 */

/**
 *  N.B: Remember that we can use any data type that we want.
 * So, we can create a key with a number. It doesn't have to be a string.
 */
// For Example:
restaurantMap.set(1, 'Firenze, Italy');
restaurantMap.set(2, 'Lisbon, Portugal');

/**
 * N.B: So, calling the set method like this,
 * " restaurantMap.set(2, 'Lisbon, Portugal'); "  does not only update the map that it's called on, but it also returns the map.
 */

console.log(restaurantMap.set(3, 'Tempere, Finland'));
// OUTPUT: Map(4) {'Name' => 'Pagla Baburchi', 1 => 'Firenze, Italy', 2 => 'Lisbon, Portugal', 3 => 'Tempere, Finland'}

/**
 * EXPLANATION: So this is what the map looks like  after adding this key number 3. we can see that the map is already updated and it also returns the whole updated map.
 */

/**
 * N.B: Now, the fact that the set method actually returns the updated map allows us to chain the set method.
 */

// For Example:
restaurantMap
  .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23);

/**
 * EXPLANATION: Calling the set() method returns the updated map.
 * And so, all of this, " restaurantMap.set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic']) " is now the updated map.
 * And so, we can call set again on that map. And, we can continue this even further.
 */

restaurantMap
  .set(true, 'Yes we are open :D')
  .set(false, 'Sorry, we are close :(');

/**
 * QUESTION: How to read data from a map?
 * ANSWER: In order to read data from a map we use the get() method.
 * Inside those parenthesis all we need to do is to pass in the name of the key.
 */
// For Example:
console.log(restaurantMap.get('Name')); // OUTPUT: Pagla Baburchi

console.log(restaurantMap.get(false)); // OUTPUT: Sorry, we are close :(

// N.B: When we try to get the elements of course the data type of the key matters.

/**
 * We can use the boolean keys in our map in a clever way to show the desired output for a specific time.
 */

// For example:
const time = 16;
console.log(
  restaurantMap.get(
    time > restaurantMap.get('open') && time < restaurantMap.get('close')
  )
);
// OUTPUT: Yes we are open :D

/**
 * EXPLANATION: The result of this " time > restaurantMap.get('open') && time < restaurantMap.get('close') " operation is either true or false.
 * So basically, here we are asking if the current time is between 23 and 11.
 * Then, True or False will map to one of the boolean keys. and inside those keys we have the strings as values.
 *
 * N.B: This just really goes to show the power of having Booleans as map keys.
 */

//**************************************************//

/**
 * Now let's keep exploring the methods that are available on maps.
 * So, we already have methods to set and to get.
 */

// We can also check if a map contains a certain key.
console.log(restaurantMap.has('Categories'));
// OUTPUT: true

// We can delete individual properties from a map
restaurantMap.delete(2);
console.log(restaurantMap);
/**
 * OUTPUT:
 * Map(8) {'Name' => 'Pagla Baburchi', 1 => 'Firenze, Italy', 3 => 'Tempere, Finland', 'Categories' => Array(4), 'open' => 11, …}
 *
 * As you can see that property 2 is no longer present here.
 */

// We can check the size of a map
console.log(restaurantMap.size);
// OUTPUT: 8

// We can also delete or clear the whole map at once
restaurantMap.clear();
console.log(restaurantMap);
// OUTPUT: Map(0) {size: 0}

/**
 * So, as you can see here, there is some overlap in the way that we work with maps and sets.
 * That's because they were both introduced in ES6.
 */

//**************************************************//

// We can use objects as map keys

const practiceMap = new Map();
/*
practiceMap.set('Name', 'Abu Rayhan').set([0, 1], 'Test');

console.log(practiceMap.get([0, 1])); // OUTPUT: undefined
*/

/**
 * EXPLANATION: The reason why it shows undefined in the output is that, the array in the map key and the array inside the console.log are not the same even though we wrote them in the same way. Why?
 * Because, both of these array's have created different object inside the heap.
 *
 * so, if we want the key from the map then we need exactly the object " [0, 1] " from the .set([0, 1], 'Test') line here.
 */

// we can get that by simply creating a variable and then call that.
const keyArray = [1, 2];
practiceMap.set(keyArray, 'Test');

console.log(practiceMap.get(keyArray));
// OUTPUT: Test

/**
 * EXPLANATION:
 * Now of course these two, keyArray variable in "practiceMap.set(keyArray, 'Test');" line and the "console.log(practiceMap.get(keyArray));" line refer to the same place in memory.
 */

// And this can be very useful with dumb elements which, in fact are also nothing more than just a special type of object.

// For Example:
practiceMap.set(document.querySelector('h1'), 'Heading');
console.log(practiceMap);

/**
 * So here as a key, we used
 * " document.queryselector "  And then, we're gonna select the h1 elements that we have in our html file. So, this is just an h1 tag. So, nothing fancy.
 *
 * And so, the result of " document.querySelector('h1') " will be an object.
 *
 * It can enable some advanced functionality.
 */

/////////////////////////////////////////////////////
//////////////// 018 Maps_ Iteration ////////////////
/////////////////////////////////////////////////////

/**
 * So in the last video we created an empty map by using the set method and then edited elements to it.
 */

/**
 * However, there is actually another way of populating a new map without having to use the set() method.
 *
 * That way is pretty easy because the set() method is a bit cumbersome/painful when there are a lot of values to set.
 */
const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'c++'],
  [2, 'c#'],
  [3, 'JavaScript'],
  ['Correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);

/**
 * Inside the new Map() constructor we can pass in an array and this array itself will contain multiple arrays.
 *
 * And in each of these arrays, the first position is gonna be the key. And the second position is gonna be the value.
 *
 * But when we keep adding new elements, programmatically using code, then of course the set method is still the way to go.
 */

//**************************************************//

/**
 * QUESTION: We can turn objects into maps. How to do that?
 *
 * ANSWER: Above is the map this array of arrays look kind of similar.
 * Because this is exactly the same array structure that is returned from calling Object.entries().
 */

// For Example (the openingHours{} object):
console.log(Object.entries(openingHours));
/**
 // OUTPUT:
 (4) [Array(2), Array(2), Array(2), Array(2)]
 0: (2) ['thu', {…}]
 1: (2) ['fri', {…}]
 2: (2) ['day 6', {…}]
 3: (2) ['sat', {…}]
 
 * So you see that they're two arrays, we get an array of arrays where the first element is the key and the second one is the value.
 * what this means is that there is an easy way to convert from objects to maps.
 */

// convert object to map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);
// OUTPUT: Map(4) {'thu' => {…}, 'fri' => {…}, 'day 6' => {…}, 'sat' => {…}}

/**
 * So, keep this small trick here in mind, whenever you need a map, when you already have an object.
 */

//**************************************************//

/**
 * Maps are also iterables, so the for loop is also available for them.
 */

console.log(question.get('question')); // OUTPUT: What is the best programming language in the world?
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer: ${key}: ${value}`);
  /*
  // OUTPUT:
  Answer: 1: c++
  Answer: 2: c#
  Answer: 3: JavaScript
  */
}

const answer = Number(prompt('Your answer?'));
console.log(answer);

// Now we can use the power of the Boolean keys here in order to print either the success message here or the error message basically.

console.log(question.get(answer === question.get('Correct')));

/**
 * EXPLANATION: Basically, let's start by comparing the answer with the correct answer.
 *
 * In the question map we have a key value pair that is " 'Correct': 3 ". Now we can compare that with the answer we get by asking to the users. so the answer variable.
 *
 * " answer === question.get('Correct') " this here will produce a boolean value. Now we can this boolean value to get the actual boolean keys form the map itself.
 *
 * question.get( true / false ) so, after logging it to the console we get our desired outcome
 */

//**************************************************//

/**
 * Sometimes we also need to convert a map back to an array.
 */

console.log([...question]);
/*
// OUTPUT:
(7) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
0: (2) ['question', 'What is the best programming language in the world?']
1: (2) [1, 'c++']
2: (2) [2, 'c#']
3: (2) [3, 'JavaScript']
4: (2) ['Correct', 3]
5: (2) [true, 'Correct 🎉']
6: (2) [false, 'Try again!']
*/

/**
 * We can also use the keys() and values() method is a map to get the keys and values separately just like objects if we need them.
 */
console.log([...question.keys()]);
// OUTPUT: (7) ['question', 1, 2, 3, 'Correct', true, false]
console.log([...question.values()]);
// OUTPUT: (7) ['What is the best programming language in the world?', 'c++', 'c#', 'JavaScript', 3, 'Correct 🎉', 'Try again!']

//////////////////////////////////////////////////////
///// 019 Summary_ Which Data Structure to Use_ //////
//////////////////////////////////////////////////////

// Watch the whole video and the silde page 120 - 121 for better understanding.

//////////////////////////////////////////////////////
///////// 021 Working With Strings - Part 1 //////////
//////////////////////////////////////////////////////

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Just like in arrays, we can get the character of a string at a certain position.
console.log(plane[0]); // OUTPUT: A
console.log(plane[1]); // OUTPUT: 3 [type is string]

// We can do the same directly on a string
console.log('B737'[0]); // OUTPUT: B

// We can also read the length property of strings, just like in arrays
console.log(airline.length); // OUTPUT: 16

// We can do the same directly on a string
console.log('B737'.length); // OUTPUT: 4

//////// Let's now talk about methods ////////

/**
 * So again comparing strings to arrays here, strings also have methods and some of them are quite similar to the array methods.
 */

console.log(airline.indexOf('r')); // OUTPUT: 6

/**
 * This here will only give us the first occurrence But sometimes we might need the last one.
 *
 * And so then we can use lastIndexOf()
 */

console.log(airline.lastIndexOf('r')); // OUTPUT: 10

// We can also search for entire words. For example, for the occurrence of 'Portugal'.

console.log(airline.indexOf('Portugal')); // OUTPUT: 8

// BUT, this is actually case sensetive. So, if I search like, 'portugal', it'll give us -1 as output.

console.log(airline.indexOf('portugal')); // OUTPUT: -1

/**
 * EXPLANATION: Since checking this is actually case sensitive.
 *  So if I search with lowercase, then we get -1, because this can now not be found in this airline's string.
 */

/**
 * QUESTION: What can we actually do with these indexes? and Why are they useful?
 *
 * ANSWER: Well, one good use case is to extract part of a string using the slice method and a slice method needs indexes as arguments.
 * And so therefore sometimes it can be very useful to first figure out the index of part of a string to then extract that.
 */

console.log(airline.slice(4)); // OUTPUT: Air Portugal

/**
 * EXPLANATION: The reason for that is that 4 here is the begin parameter.
 * Basically it's the position at which the extraction will start.
 *
 * Remember that this is zero based.
 *
 * So four happens to be the A is the string and so this is where the slice method starts to extract.
 */

/**
 * N.B: slicing does not change the underlying string.
 * 'Air Portugal' here is just a substring because it's just a part of the original string.
 */

/**
 * N.B: It's impossible to mutate strings. Because they are primitives.
 *
 * So the slice() method here and all the other ones that we're gonna see later on they always return a new string.
 */

// Beside the begin parameter we can also specify the end parameter.

console.log(airline.slice(4, 7)); // OUTPUT: Air

/**
 * QUESTION: Why did we use 7 as the end parameter instead of using 6 ?
 *
 * ANSWER: We can see that 7 is the space in the original string. So what this means is that the end value is actually not included in the string.
 * In other words, It stops extracting before reaching index number 7.
 */

/**
 * N.B: The length of the extracted string is always going to be end - beginning.
 * In this case, it is 7 - 4 = 3. So, 3 is the length of the 'Air' string.
 */

/**
 * QUESTION: How do we use the indexOf() method and the lastIndexOf() method inside the slice() method?
 *
 * ANSWER: Up until this point, we have always just hard-coded these values, but of course many times we don't even know the string that we receive yet.
 * So let's now try to extract just the first word of the string which is 'TAP' in here, but without knowing any of the indexes.
 * And that's where this IndexOf(), and lastIndexOf() here become really important.
 */

console.log(airline.slice(0, airline.indexOf(' ')));
// OUTPUT: TAP

console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // OUTPUT: Portugal

/**
 * EXPLANATION: slice(airline.lastIndexOf(' ') means the slicing will begin from the last empty space to the end becasue we did not specified the end parameter. But this way we got the string like this " Portugal".
 * So, with the space at the beginning. To eliminate that space we can use + 1 with the whole thing and voila! the space at the beginnig is gone.
 */

console.log(airline.slice(airline.lastIndexOf('P')));
// OUTPUT: Portugal

// We can also use negetive index inside the slice() method
console.log(airline.slice(-2)); // OUTPUT: al
console.log(airline.slice(0, -1)); // OUTPUT: TAP Air Portuga

// Let's play with an fun example i.e, if someone gets the middle sear or not in a airplae based on the seat number. such as '11B', '23C' , '3E'

const checkMiddleSeat = function (seat) {
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('You got the middle seat 😥');
  else console.log('You got lucky 😎');
};

checkMiddleSeat('11B'); // OUTPUT: You got the middle seat 😥
checkMiddleSeat('23C'); // OUTPUT: YYou got lucky 😎
checkMiddleSeat('3E'); // OUTPUT: You got the middle seat 😥

/**
 * EXPLANATION: seat.slice(-1) extracts the last element from a string. and to find the middle seat we just need the last string i.e, B, C or E.
 */

/**
 * QUESTION 1: We know that strings are just primitives but why do they have methods?
 *
 * QUESTION 2: Shouldn't methods only be available on objects such as arrays?
 *
 * Watch the video lecture at [14:14] for better explanation.
 *
 * ANSWER: Well that is actually true. However, JavaScript is really smart.
 * And so here is how this works whenever we call a method on a string, behind the scenes JavaScript will automatically convert that string primitive to a string object with the same content.
 * And then it's on that object where the methods are called.
 */

// For Example:
console.log(new String('Sushmoy'));
// OUTPUT: String {'Sushmoy'}
console.log(typeof new String('Sushmoy'));
// OUTPUT: object

/**
 * EXPLANATION: This process is called boxing because it basically takes our string and puts it into a box which is the object. And then it's on that object where the methods are called.
 *
 * Then when the operation is done the object is converted back to a regular string primitive.
 */

/**
 * N.B: In fact all string methods return primitives.
 */

console.log(typeof new String('Abu Rayhan').slice(-1)); // OUTPUT: string [primitive value]

/////////////////////////////////////////////////////
///////// 022 Working With Strings - Part 2 /////////
/////////////////////////////////////////////////////

// Let's continue with some simple string methods.

console.log(airline.toLowerCase());
// OUTPUT: tap air portugal
console.log(airline.toUpperCase());
// OUTPUT: TAP AIR PORTUGAL

console.log('Md Abu Rayhan Sushmoy'.toUpperCase());
// OUTPUT: MD ABU RAYHAN SUSHMOY

// Exercise: Fix Capitalization in name
const fixCapitalization = function (name) {
  // My Solution:
  const nameLowerCase = name.slice(1).toLowerCase();
  const nameFirstEl = name[0].toUpperCase();
  console.log(nameFirstEl + nameLowerCase);

  /* Jonas Solution:
  const nameLowerCase = name.toLowerCase();
  const nameCorrect = name[0].toUpperCase() + nameLowerCase.slice(1);
  console.log(nameCorrect);
  */
};

fixCapitalization('suSHmOy'); // OUTPUT: Sushmoy
fixCapitalization('jAkIrHaSAN'); // OUTPUT: Jakirhasan

// Exercise: Comparing email
const email = 'hello@sushmoy.org';
const loginEmail = '  HellO@SuShMoY.ORg \n ';

const normalizeEmail = loginEmail.toLowerCase().trim();
console.log(normalizeEmail);
// OUTPUT: hello@sushmoy.org

/**
 * EXPLANATION: trim() method here trim the blank spaces and line breaks. And starting from ES 2019 trim() method has start and end parameters. We can use that to only trim blank spaces only from the start or the end or we can specify.
 */

/////////// Let's learn One of the most important thing about strings which is to replace parts of the string ///////////

// replacing
const priceGB = '367,87£';
const priceUS = priceGB.replace('£', '$');
console.log(priceUS); //OUTPUT: 367,87$

console.log(priceGB.replace('£', '$').replace(',', '.')); //OUTPUT: 367.87$

/**
 * N.B:
 * 1) Just like before we can chain replace()
 * 2) just like all other string methods replace() method is also case sensetive.
 */

// We can also replace words so not just single characters
const airportAnnouncment =
  'All passengers come to boarding door 23. Boarding door 23!';

console.log(airportAnnouncment.replace('door', 'gate')); // OUTPUT: All passengers come to boarding gate 23. Boarding door 23!

/**
 * EXPLANATION: we can see that it only replace the first door word to gate. So replace method does replace the first occurence
 */

console.log(airportAnnouncment.replaceAll('door', 'gate')); // OUTPUT: All passengers come to boarding gate 23. Boarding gate 23!

/**
 * As you can see now with the new replaceAll() it becomes easy for us.
 */

// we can solve this in another way: Which is ** Regular Expressions **

console.log(airportAnnouncment.replace(/door/g, 'gate')); // OUTPUT: All passengers come to boarding gate 23. Boarding gate 23!

/**
 * EXPLANATION: By adding g which is called 'g flag' and it stands for global. We can replace all the door words in the string with gate.
 */

/***************************************************/

/**
 * Final Topic: There are three simple methods that returns boolean. they are,
 * includes(),
 * startsWith(),
 * endsWith()
 */

const airPlane = 'Airbus A320neo';
console.log(airPlane.includes('A')); // OUTPUT: true
console.log(airPlane.includes('p')); // OUTPUT: false
console.log(airPlane.startsWith('Air')); // OUTPUT: true

if (airPlane.startsWith('Airbus') && airPlane.endsWith('neo')) {
  console.log('Part of the new airbus family');
}
// OUTPUT: Part of the new airbus family

/**
 * So, whenever you need to take some decisions based on the content of the string these three methods are very helpful.
 */

// Practice exercise: Let's check if a person has a knife of a gun with them in the airport
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are not allowed on board');
  } else {
    console.log('Welcome on board');
  }
};

checkBaggage('I have a laptop, some food and a pocket Knife');
// OUTPUT: You are not allowed on board
checkBaggage('Socks and camera');
// OUTPUT: Welcome on board
checkBaggage('I have got some snacks and a gUn for protection');
// OUTPUT: You are not allowed on board

/**
 * EXPLANATION: First we convert the string to lowercase so that it becomes easy for us to compare with dangerous items.
 */

/////////////////////////////////////////////////////
///////// 023 Working With Strings - Part 3 /////////
/////////////////////////////////////////////////////

// split() method
console.log('We+are+a+team+of+hundred+skilled+people'.split('+'));
// OUTPUT: ['We', 'are', 'a', 'team', 'of', 'hundred', 'people']
console.log('Md. Abu Rayhan Sushmoy'.split(' '));
// OUTPUT: ['Md.', 'Abu', 'Rayhan', 'Sushmoy']

/**
 * EXPLANATION: split() method allows us to split a string into multiple parts based on a divider string.
 * Inside the split() method we need to specify a divider string. like this, split('+') . here we used plus sign from the first example.
 *
 * So what will happen now is that it will split up this string by this plus sign and it will then store the results into elements of a new array.
 *
 */

console.log('Jonas Schmedtmann'.split(' '));
// OUTPUT: ['Jonas', 'Schmedtmann']

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

console.log(firstName, lastName); // OUTPUT: Jonas Schmedtmann

/**
 * EXPLANATION: As we've seen earlier that if we use the spilt() method it then store the results into elements of a new array. Which means it returns an array.
 *
 * We can now use the power of destructuring to create variables directly.
 */

/***************************************************/

// join() method

// Now let's say that we want to make the last name uppercase here. And then we also want to add a "Mr." in the beginning.

console.log(['Mr.', firstName, lastName.toUpperCase()].join(' '));
// OUTPUT: Mr. Jonas SCHMEDTMANN

/**
 * EXPLANATION: The join() method which is essentially the opposite of split.
 * Inside the join() method just like split() method we can also specify a divider string. like this, split(' ') . here we used empty string for this example.
 *
 * So one string composed of the three parts of an array and joined together by an empty joining string here.
 */

// Exercise: Capatalize names
const capitalizeName = function (name) {
  const names = name.split(' ');
  const nameUpper = [];
  for (const n of names) {
    nameUpper.push(n[0].toUpperCase() + n.slice(1).toLowerCase());
    // nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
    /**
     * Same output but different approach.
     */
  }
  console.log(nameUpper.join(' '));
};

capitalizeName('mr. karim hassan molla mia');
// OUTPUT: Mr. Karim Hassan Molla Mia
capitalizeName('md. lalu jafri');
// OUTPUT: Md. Lalu Jafri

/***************************************************/

// Padding a string

/**
 * Definition: Padding a string refers to add a number of characters to the string until the string has a certain desired length.
 */

// padStart()
const message = 'Go to gate 23';

console.log(message.padStart(20, '+'));
console.log('Sushmoy'.padStart(20, '+'));

// padEnd()
console.log('Sushmoy'.padStart(20, '+').padEnd(30, '+'));

/**
 * Explanation:
 * 1) when we only use padStart(). We have to pass in two parameters first the desired length of the new string and by which character it will fill the new string.
 *
 * 2) we can also use padStart() with a string without having to store it inside a variable.
 *
 * 3) when we use both padStart() and padEnd() method for example let's check above in the third example. Here, 20 and 30 refer to the total length of 30 in the new string. so, in the beginnig the string and the '+' sign will take 20 places together and lastly there is 10 '+' signs.
 */

// let's actually use a more real world example of padding here.

const maskCreditCard = function (number) {
  const str = String(number);
  // const str = number + '';
  /**
   * Explanation: Here, we can just take the number and then we add an empty string.
   *
   * The result of this will be the number but as a string. And this works because when one of the operands of the plus sign is a string it will convert all the operands to a string.
   *
   * And so then this number will become a string plus the empty string and so then it's gonna stay exactly the same
   *
   * this is a nice trick that actually makes this easier for us.
   */
  const lastFour = str.slice(-4);
  return lastFour.padStart(str.length, '*');
};

console.log(maskCreditCard(78965754));
console.log(maskCreditCard(7896213978963468));
console.log(maskCreditCard('7896213978960077'));

/***************************************************/

// repeat()
const badWeather = 'Bad weather... All departures delayed... ';
console.log(badWeather.repeat(5));

const airoPlane = function (n) {
  console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
};

airoPlane(5);
airoPlane(8);

/////////////////////////////////////////////////////
//////////// 025 String Methods Practice ////////////
/////////////////////////////////////////////////////

// Data needed for exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  // console.log(type);
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(46, ' ');
  console.log(output);
}

/**
 * Please Watch the video for better explanation
 */
