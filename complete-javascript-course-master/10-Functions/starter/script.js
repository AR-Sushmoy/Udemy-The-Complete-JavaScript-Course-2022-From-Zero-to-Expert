'use strict';

//////////////////////////////////////////////////////////////
/////////////////// 03 Default Parameters ////////////////////
//////////////////////////////////////////////////////////////

/**
 * QUESTION: What are the default parameters?
 *
 * ANSWER: Sometimes it's useful to have functions where some parameters are set by default. This way we do not have to pass them in manually in case we don't want to change the default.
 */

const createBooking = function (
  flightNum = 'LW235',
  numPassengers = 1,
  price = 100 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
};

createBooking('LH124');
// OUTPUT: {flightNum: 'LH124', numPassengers: 1, price: 100}
createBooking('LH124', 3, 10000);
// OUTPUT: {flightNum: 'LH124', numPassengers: 3, price: 10000}
createBooking('LH124', 5);
// OUTPUT: {flightNum: 'LH124', numPassengers: 5, price: 500}
createBooking('LH124', 12);
// OUTPUT: {flightNum: 'LH124', numPassengers: 12, price: 1200}
createBooking('LH124', undefined, 25000);
// OUTPUT: {flightNum: 'LH124', numPassengers: 1, price: 25000}

// So, this is how we can set default parameters in a function

/**
 * N.B: While calling the function we have to maintain order otherwise the default value will execute.
 */

///////////////////////////////////////////////////////////////
////// 04 How Passing Arguments Works_Value vs Reference //////
///////////////////////////////////////////////////////////////
/**
 * This lecture outcomes:
 * 1) How exactly it works to pass arguments into functions?
 *
 * 2) How primitives and objects work in the context of functions?
 */

const flight = 'LH234';
const sushmoy = {
  fullName: 'Md. Abu Rayhan Sushmoy',
  passport: 234567892,
};

const checkIn = function (flightNum, passenger) {
  // now let's say that the number of the flight was changed
  flightNum = 'LH999';
  /**
   * This is usually not a good practice to do, so you should not change the parameters of a function, but this is just to make a point. So let's say for some reason, the number now changed to 'LH999'.
   */
  passenger.fullName = 'Mr. ' + passenger.fullName;
  /**
   * Here let's also change the name of the passenger, and that's because in aviation, usually they always add a 'Mr' or a 'Mrs', in front of the name.
   */

  /*
  if (passenger.passport === 234567892) alert('Checked In');
  else alert('Wrong Passport');
  */

  /**
   * Before we check in, it will just check if the passport number is correct. let's suppose that this function gets this data from some database, which contains the booked flights.
   */
};

/*
checkIn(flight, sushmoy);
*/

// Let's log both the flight and the Jonas object to the console after calling this checkIn function.

console.log(flight); // OUTPUT: LH234
/**
 * OBSERVATION: what we get is the flight number, which is still LH234, so exactly as we defined it at the beginnig, even though it seems like it was redefined inside the checkIn function, so it really wasn't.
 *
 * EXPLANATION: So the variable flight at the beginnig is a primitive type, It's just a string. And as we passed that value into the function down, then the parameter flightNum is just a copy of that original variable flight.
 *
 * So this would be exactly the same as writing,
 * const flightNum = flight;
 *
 * up here we just copied the value of flight inside the new variable flightNum.
 *
 * flightNum here is a completely different variable. And therefore, as we changed it inside the function, it did not get reflected in the outside flight variable. And so it's still 'LH234'.
 */

console.log(sushmoy);
// OUTPUT: {fullName: 'Mr. Md. Abu Rayhan Sushmoy', passport: 234567892}
/**
 * OBSERVATION: Then we also get the Jonas object, but now the name is indeed changed to 'Mr. Md. Abu Rayhan Sushmoy'. Why?
 *
 * EXPLANATION: So when we pass a reference type to a function, what is copied is really just a reference to the object in the memory heap.
 *
 * So that would be exactly like doing this,
 * const passenger = sushmoy;
 *
 * So, as we already know, when we try to copy an object like this, we are really only copying the reference to that object in the memory heap, but they both point to the same object in memory.
 *
 * So that's exactly what is also happening here, with the Jonas object, as we pass it into the checkIn() function where it's called passenger.
 * And inside that function as we are manipulating the passenger object, it is exactly the same as manipulating the Jonas object.
 * Once again, because they both are the same object in the memory heap.
 */

/**
 * QUESTION: Why do we need to be careful with this behavior and always keep it in mind?
 *
 * ANSWER: That's because of the fact that objects behave this way when passed to functions can have unforeseeable consequences in large code bases.
 * And especially that is true when we're working with multiple developers.
 */

// let's write another quick function here to show what can happen
const newPassport = function (passenger) {
  return (passenger.passport = Math.trunc(Math.random() * 1000000000));
};

console.log(newPassport(sushmoy)); // OUTPUT: A random 9 digit number
checkIn(flight, sushmoy); // OUTPUT: Wrong Passport

/**
 * Suppose,that, I booked the flight with my original passport number and then for some reason I had to re-new my passport and got a new passport. But as now I am trying to checkIn with my new Passport it says wrong passport in the alert window.
 *
 * So what's happening now is that we have two functions manipulating the same object. and we are calling the checkIn() function with the same object and now the main object value is already changed. That's why we get the wrong passport alert.
 */

/****************************************************************/

/**
 * N.B: Finally, In programming, there are two terms that are used all the time when dealing with functions which is,
 * 1) passing by value, and
 * 2) passing by reference.
 *
 *
 * JavaScript does not have passing by reference, only passing by value, even though it looks like it's passing by reference.
 *
 * It might be confusing, because as we just learned, for objects, we do in fact pass in a reference.
 * So the memory address of the object. However, that reference itself is still a value. It's simply a value that contains a memory address.
 *
 * So basically we pass a reference to the function, but we do not pass by reference, because the reference is a value that contains a memory address and this is an important distinction.
 */

///////////////////////////////////////////////////////////////
////////// 005 First-Class and Higher-Order Functions /////////
///////////////////////////////////////////////////////////////

// First-Class Functions
/**
 * A fundamental property of the JavaScript language is the fact that it has first class functions.
 *
 * QUESTION: What does it do?
 * ANSWER: This enables us to write higher order functions.
 */

/**
 * So, JavaScript is a language that has first class functions. Which in technical terms means that functions are so-called first citizens.
 *
 * IMPORTANT: In practice, that means that functions are simply treated as values. This is such an important feature of the JavaScript language.
 */

/**
 * QUESTION: Why does JavaScript works this way?
 *
 * ANSWER: Well, it's simply because functions are really just another "type of object" in JavaScript. And since objects are values, functions are values too.
 */

/**
 * QUESTION: What can be done with functions since they are values too ?
 * ANSWER: since functions are values, there is a bunch of interesting things that can be done with them,
 * a) Storing them in variables or object properties. (As we've done so far)
 * [Check_Out_IMAGE_01.png] So the value in the red rectangle is the function value itself, that we can store wherever we like.
 *
 * b) Passing functions as arguments to OTHER functions.
 * [Check_Out_IMAGE_02.png] we actually already did that before when adding event listeners or event handlers to DOM objects.
 *
 * c) We can also return a function from another function.
 *
 * d) Call methods on functions.
 * [Check_Out_IMAGE_03.png] remember that functions are objects.
 *
 * And many types of objects in JavaScript have methods, right? for example: array methods. And actually there are also function methods. So methods that we can call on functions.
 */

/****************************************************************/

// Higher-Order Functions
/**
 * Now the fact that JavaScript has first-class functions makes it possible for us to use and write higher order functions.
 *
 * QUESTION: What is a higher-order function?
 * ANSWER: So a higher order function is either a function that receives another function as an argument, or a function that returns a new function.
 *
 * N.B: This is only possible because of first-class functions.
 */

/**
 * Example of Higher-order functions,
 *
 * 1) Function that recieves another function.
 * [Check_Out_IMAGE_04.png] So here, the add event listener function is the higher order function. Why?
 * Because it receives another function as an input. In this case, the greet function.
 *
 * Usually we say that the function that is passed in is a callback function. Why?
 * That's because the callback function will be called later by the higher order function.
 * In this case, addEventlistener() will call the greet() callback function later as soon as the click event happens.
 *
 * N.B: This works, not only in the context of the addEventlistener() function, but in many other use cases as well.
 *
 *
 * 2) We can also have functions that return another function.
 * [Check_Out_IMAGE_05.png] So here, the count() function is the higher-order function which clearly returns a new function.
 */

/**
 * IMPORTANT: First-Class Functions vs. Higher-Order Functions
 *
 * OBSERVATION: There seems to be some confusion between first-class functions and higher order functions and some people think that they are the same thing. But actually they mean different things.
 *
 * EXPLANATION: So, first class functions is just a feature that a programming language either has or does not have. All it means is that all functions are values and that's it. 
 * 
 * It's just a concept. There are no first class functions in practice.
 * 
 * On the other hand, There are higher order functions in practice, which is possible because the language supports first class functions. So it's a subtle difference that you'll have to keep in mind.

 */

///////////////////////////////////////////////////////////////
///////// 006 Functions Accepting Callback Functions //////////
///////////////////////////////////////////////////////////////

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-Order function
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
  /**
   * N.B: functions even have methods remember,
   * and besides methods, functions can even have properties. And one of them is the name property.
   */
};

transformer('JavaScript is a fun Language', upperFirstWord);
transformer('JavaScript is a fun Language', oneWord);
/**
 * EXPLANATION: upperFirstWord here is called the call-back function. and transformer is the Higher-Order Function. so, upperFirstWord is just a callback function which JavaScript will call as soon as we call the transformer function.
 */

/*
const hiFive = function () {
  console.log('👋🏼');
};

document.body.addEventListener('click', hiFive);
*/

/**
 * EXPLANATION: hiFive here is called the callback function. and addEventListener is the Higher-Order Function. so, hiFive is just a call-back function which JavaScript will call as soon as we click on the body.
 */

/**
 * This concept of callback functions is used all the time in built in JavaScript functions.
 */

/*
// For Example: The forEach() function that we can call on arrays
['Abir', 'Kabir', 'Jabir', 'salman'].forEach(hiFive);
*/

/**
 * QUESTION: Why are callback functions so much used in JavaScript and why are they so helpful?
 *
 * ANSWER: The first big advantage of this is that it makes it easy to split up our code into more reusable and interconnected parts.
 *
 * The second and way more important advantage, which is the fact that callback functions allow us to create abstraction.
 */

// Watch the video from [11:11] for better explanation on abstraction

///////////////////////////////////////////////////////////////
////////////// 007 Functions Returning Functions //////////////
///////////////////////////////////////////////////////////////

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Jahin'); // OUTPUT: Hey Jahin
greeterHey('Karim'); // OUTPUT: Hey Karim

/**
 * EXPLANATION: 
 * This worked because the greeterHey is this --> 
 * greeterHey = function (name) {
    console.log(`${greeting} ${name}`);
   };
  *
  * In case you're wondering why that actually works, it is because of something called a closure.
  * 
  * 
  * What matters here is that our first function greet() returned a new function that we stored into variable greeterHey. And so this greeterHey variable is now just a function that we can call as we did here again using the parenthesis syntax.
 */

//  We could do this in one go
greet('Hello')('Tamim'); // OUTPUT: Hello Tamim

// Challenge (Arrow Function)
const greet2 = greeting => lastName => console.log(`${greeting} ${lastName}`);

greet2('Hai')('Sharmin'); // OUTPUT: Hai Sharmin

/**
 * QUESTION: what's the point of having functions returning other functions?
 *
 * ANSWER: Well, this will actually become extremely useful in some situations. And especially if we're using a really important programming paradigm called functional programming.
 */

///////////////////////////////////////////////////////////////
/////////////// 008 The call and apply Methods ////////////////
///////////////////////////////////////////////////////////////

/**
 * QUESTION: How we can set the 'this' keyword manually and also why would we want to do that ?
 *
 * ANSWER: Let's understand this with an example
 */

const lufthansa = {
  airlineName: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airlineName} flight ${this.iataCode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(238, 'Abu Rayhan');
// OUTPUT: Abu Rayhan booked a seat on Lufthansa flight LH238
lufthansa.book(445, 'Karim Molla');
// OUTPUT: Karim Molla booked a seat on Lufthansa flight LH445
console.log(lufthansa.bookings);
/*
// OUTPUT: (2) [{…}, {…}]
0: {flight: 'LH238', name: 'Abu Rayhan'}
1: {flight: 'LH445', name: 'Karim Molla'}
length : 2
[[Prototype]] : Array(0)
*/

const eurowings = {
  airlineName: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

/* // [Mehotd Borrowing]
eurowings.book = lufthansa.book; 
console.log(eurowings);
*/

const book = lufthansa.book;
/**
 * REASON: Now, taking this exact same book() method and simply copying it and pasting it inside the eurowings object is a bad practice, right? So of course, we are not gonna do that.
 *
 * So instead, we will just took the method and store it in an external function. like this, book = lufthansa.book
 *
 * Now, book is the external function And then we can reuse that function for all of the different airlines.
 *
 * EXPLANATION: All this is possible because JavaScript has first class functions. And so we can simply take the book function i.e, lufthansa.book value. and then store it into a new variable 'book', which is then going to be also the book function.
 */

/* // DOES NOT WORK
book(332, 'Jabir hassan');
// OUTPUT: TypeError: Cannot read properties of undefined (reading 'airlineName') at book
*/

/**
 * EXPLANATION: Well, it's because this function here, the book function is now just a regular function call and so as we learned previously,
 * In a regular function call, the this keyword points to undefined, at least in strict mode.
 *
 *
 * So once more, this book function is no longer the method from lufthansa object. It's a copy of lufthansa.book method.
 * So It is now this separate function here.
 * Therefore, the 'this' keyword inside of it will now point to undefined.
 */

/**
 * IMPORTANT: The 'this' keyword depends on how the function is actually called.
 */

/***********************************************************/

/**
 * QUESTION: How do we tell JavaScript that we want to create a booking on the new Eurowings airline? Or even how do we tell it that we want to book on Lufthansa here?
 * 
 * ANSWER: We need to tell JavaScript explicitly what the 'this' keyword here should be like. So if we want to book a Lufthansa flight, the this keyword should point to Lufthansa but if we want to book a Eurowings flight, then the this keyword should point to Eurowings.
 * 
 * Well, there are three function methods to do that and they are,
 * A) calL()
 * B) apply() 
 * C) bind()

*/

/// The call() Method:
book.call(lufthansa, 332, 'Jabir hassan');
// OUTPUT: Jabir hassan booked a seat on Lufthansa flight LH332
console.log(lufthansa);
/**
 // OUTPUT: 
 {airlineName: 'Lufthansa', iataCode: 'LH', bookings: Array(3), book: ƒ}
 airlineName: "Lufthansa"
 book: ƒ book(flightNum, name)
 bookings: (3) [{…}, {…}, {…}]
 iataCode: "LH"
 [[Prototype]]: Object
 */

book.call(eurowings, 125, 'Lara Hasnat');
// OUTPUT: Lara Hasnat booked a seat on Eurowings flight EW125

/**
 * EXPLANATION: Previously we learned that A function is really just a object. Well, it's simply because functions are really just another "type of object" in JavaScript. And since objects are values, functions are values too.
 *
 * And objects have methods therefore functions can have methods too. for example: the call() method is one of them
 *
 * Inside the call method, the first argument is exactly what we want the this keyword to point to.
 * And then as usual we pass in the rest of the arguments.
 */

console.log(eurowings);
/**
 // OUTPUT: 
 {airlineName: 'Eurowings', iataCode: 'EW', bookings: Array(1)}
 airlineName: "Eurowings"
 bookings: Array(1)
 0: {flight: 'EW125', name: 'Lara Hasnat'}
 length: 1
 iataCode: "EW"
 [[Prototype]]: Object
 */

/**
 * EXPLANATION: when we called the call() method and it's then this call() method, which will call the book function with the this keyword set to eurowings.
 *
 * so the call() method allows us to manually and explicitly set the this keyword of any function that we want to call.
 */

const swiss = {
  airlineName: 'Swiss Airline',
  iataCode: 'SA',
  bookings: [],
};

book.call(swiss, 488, 'Md. Jalal Uddin');
// OUTPUT: Md. Jalal Uddin booked a seat on Swiss Airline flight SA488

/***********************************************************/

/// The apply() Method:

/**
 * QUESTION: How does the apply method work?
 *
 * ANSWER: The apply method does exactly the same thing. The only difference is that apply() method does not receive a list of arguments after the 'this' keyword argument, but instead, it's gonna take an array of the arguments.
 */

const flightData = [566, 'Tasnim Khan'];

book.apply(swiss, flightData);
// OUTPUT: Tasnim Khan booked a seat on Swiss Airline flight SA566
console.log(swiss);
// OUTPUT: {airlineName: 'Swiss Airline', iataCode: 'SA', bookings: Array(2)}

/***********************************************************/

/**
 * In modern JavaScript This apply method is not that used anymore because now, we actually have a better way of doing the exact same thing.
 */

book.call(eurowings, ...flightData);
// OUTPUT: Tasnim Khan booked a seat on Eurowings flight EW566
console.log(eurowings);
// OUTPUT: {airlineName: 'Eurowings', iataCode: 'EW', bookings: Array(2)}

/**
 * SUMMARY: We now have yet another tool in our toolbox here and this one is one that allows us to explicitly define the this keyword in any function that we want.
 */

///////////////////////////////////////////////////////////////
///////////////////// 009 The bind Method /////////////////////
///////////////////////////////////////////////////////////////

/**
 * QUESTION: What does it do?
 *
 * ANSWER: Just like the call method, bind also allows us to manually set the 'this' keywords for any function call.
 */

/**
 * QUESTION: What's the difference between bind() and call() or apply() method then?
 *
 * ANSWER: the difference is that bind does not immediately call the function. Instead it returns a new function where the 'this' keyword is bound.
 * So the 'this' keyword is set to whatever value we pass into bind.
 */

/// we can use the bind method to create a new function with the 'this' keyword also set to Eurowings.

const bookEW = book.bind(eurowings);

/**
 * EXPLANATION: So again, [book.bind(eurowings);] --> will not call the book function. Instead it will return a new function where the 'this' keyword will always be set to Eurowings.
 *
 * So, here we created a new function called bookEW, where its just a code of Eurowings.
 */

bookEW(77, 'Steven Williams');
// OUTPUT: Steven Williams booked a seat on Eurowings flight EW77

/**
 * EXPLANATION: So here, of course, we no longer need to specify the 'this' keyword again.
 * So the name of the parameters is back to being simply the flight number and the passenger name.
 */

/*
/// Let's go ahead and do the same for all the airlines. 
* So creating one booking function for each of the airlines.  * And this then makes it a little bit easier to book a flight for each of the airlines, if we have to do it multiple times.
*/

const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookLH(332, 'Sarah Jonas');
bookSW(995, 'Williams Johnson');

/**
 * REASON: So instead of having to use a call all the time, we can just do bind once. So defining the this keyword once like this and from there on, we can always use these functions.
 */

/*************************************************************/

/**
 * IMPORTANT: So in the call() method, we can pass multiple arguments besides the 'this' keyword, right?
 * And in the bind() method, we can actually do the same.
 *
 * Then all of these arguments will also be set in stone. So they will be defined and the function will then always be called with these same arguments.
 */

// FOR EXAMPLE:
const bookSW34 = book.bind(swiss, 34);

/**
 * Now in our bookSW34 function, it is as if this first argument 34 or the flightnumber was already set.

 */

bookSW34('Jonas Schmedtmenn');
bookSW34('Abu Rayhan Sushmoy');

/**
 * IMPORTANT: So, basically specifying parts of the argument beforehand, is actually a common pattern called ** Partial application **.
 * So ** Partial application ** means that a part of the arguments of the original function are already applied, which means already set.
 */

/*************************************************************/

/**
 * There are also other situations in which we can use the bind method and where it is very useful.
 */

// FOR EXAMPLE: [When we use objects together with event listeners]

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

lufthansa.buyPlane();
/*
 * // OUTPUT:
 * {airlineName: 'Lufthansa', iataCode: 'LH', bookings: Array * (4), planes: 300, book: ƒ, …}
 * 301
 */

/**
 * EXPLANATION: The 'this' keyword here is pointing to the luftansa object.
 */

/*
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
*/

/**
// OUTPUT: [When we click on the Buy new plane Button]
<button class="buy">Buy new plane ✈</button>
NaN
*/

/**
 * EXPLANATION: So this.planes is now not a number (NaN). And the reason for that is that 'this' keyword is this button element. But Why?
 *
 * ANSWER: Well, previously in one of the theory lectures about the 'this' keyword, we learned that in an event handler function, the 'this' keyword always points to the element on which that event handler is attached to.
 */

/**
 * QUESTION: why the 'this' keyword here returns this button ?
 *
 * ANSWER: The handler function which is lufthansa.buyPlane and it is attachted to a element which is,
 * document.querySelector('.buy'). So, to the button element.
 *
 * Therefore, inside of the handler function or we can call it the event listener which is lufthansa.buyPlane. so inside of that function the 'this' keyword point to the button element.
 */

/**
 * QUESTION: How can we manually define the 'this' keyword to the lufthansa object ?
 *
 * ANSWER: Well, we need to pass in a function here and not to call it. so we already know that the call() method calls the function. And so that's not what we need.
 * Therefore, we use bind(). Because we already know that bind() is going to return a new function.
 */

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// OUTPUT: We can see the lufthansa object itself being logged to the console and the planes number is increementing everytime we click on the button as expected.

/**
 * EXPLANATION: Here we define the lufthansa object inside the bind method that's exactly what we want. So, we want the 'this' keyword to point to the lufthansa object.
 */

/*************************************************************/
/*
A Big use case for the bind() method is the Partial application
*/

///// Partial application
/// So ** Partial application ** means that we can preset parameters.

// A tax example:
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

/**
 * For example, in Portugal, the VAT, which is value added tax, is 23%.
 *
 * And so we can now use the bind() method on the addTax() function and preset the rate always, so that it always will be this 23%.
 *
 * Then we have a function which only calculates the VAT for whatever value we pass into it. so that we don't have to define the rate everytime.
 */

const addVat1 = addTax.bind(null, 0.23);
// Same as writing, addVat1 = value => value + value * .23;

console.log(addVat1(245)); // OUTPUT: 301.35
console.log(addVat1(100)); // OUTPUT: 123

/**
 * EXPLANATION: The first argument of bind is the 'this' keyword. But in this case, It's not even here in the function. And so, we just say, null.
 *
 * It's kind of a standard to just use null.
 */

//// Challenge: Rewrite this whole example from above, but using the technique of one function returning another function.

const addTAXRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTAXRate(0.15);

console.log(addVAT2(100)); // OUTPUT: 115
console.log(addTAXRate(0.15)(100)); // OUTPUT: 115

/**
 * EXPLANATION: The addVat1 function is the same as the addVAT2 function.
 * This is just another way of doing the same thing.
 */

///////////////////////////////////////////////////////////////
///// 011 Immediately Invoked Function Expressions (IIFE) /////
///////////////////////////////////////////////////////////////

/**
 * QUESTION: What is a Immediately invoked function expressions?
 *
 * ANSWER: So sometimes in JavaScript, we need a function that disappears right after it's called once. Basically, a function that is only executed once. And then never again.
 */

/**
 * QUESTION: Why do we need this IIFE?
 *
 * ANSWER: We actually need this technique later. For example, with something called async/await.
 */

(function () {
  console.log('This function will never run again');
})();

/**
 * EXPLANATION: Wrapping everything inside the first paranthesis is a way of tricking JavaScript into not producig any error.
 * And then with another first paranthesis we call the function
 *
 * This way without storing the function value inside any variable we can achieve Immediate Invoked Function Expressions
 */

// We can also do the same with the arrow function
(() => console.log('This function will ALSO never run again'))();

/**
 * QUESTION: Why was this pattern actually invented?
 *
 * ANSWER: Watch the Video From [TimeStamp - 03:43 to 07:31]
 * In Short in modern JavaScript we don't really use the IIFE pattern anymore for data encapsulation. Becasue we can create private variable for specific block scope.
 */

/**
 * IMPORTANT: For any reason if we really need to execute a function just once, then the Immediately Invoked Function Expression pattern (IIFE) is still the way to go.
 */

///////////////////////////////////////////////////////////////
///////////////////////// 012 Closures ////////////////////////
///////////////////////////////////////////////////////////////

/**
 * DEFINITION: Closures is a feature of JavaScript functions
 */

/**
 * N.B: closures kind of brings execution context, the call stack, and the scope chain. So all of these concepts together in a beautiful, almost magical way.
 */

/**
 * IMPORTANT: Closure is not a feature that we use explicitly. So we don't create closures manually, like we create a new array or a new function.
 * So a closure simply happens automatically in certain situations, we just need to recognize those situations.
 */

/**
 * /// The secret of the closure ///
 *
 * Any function always has access to the variable environment of the execution context in which the function was created even after that execution context is gone.
 *
 * In Other Words we can say that, closure makes a function remember all the variables that existed at the function's birthplace.
 *
 * We can also say that thanks to the closure, a function does not lose connection to variables that existed at the function's birthplace.
 */

const secureBooking = function () {
  let passengerCount = 0;
  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

/**
 * So we can imagine the secureBooking() function being the birthplace of the booker() function.
 */

booker(); // OUTPUT: 1 passengers
booker(); // OUTPUT: 2 passengers
booker(); // OUTPUT: 3 passengers

/**
 * IMPORTANT: The closure has priority over the scope chain.
 * So even if there was a global passengerCount variableset to 10, it would still first use the one in the closure.
 */

/**
 * Summary:
 * --> A closure is the closed-over variable environment of the execution context in which the function was created even after that execution context is gone.
 *
 * --> A closure gives a function access to all the varibales of its parent function, even after that parent function has returned.
 * The function keeps a reference to its outer scope, even after that outer scope is gone.
 *
 * --> A closure makes sure that a function does never lose connection to the variables that existed at the function's birthplace. It remembers the variables, even after the birthplace is gone. Example: It's like a person who doesn't lose connection to their hometown.
 */

console.dir(booker); // OUTPUT: We can see the closure this way BUT it is not possible to access closure manually

// Watch the video to understand this topic even better

//////////////////////////////////////////////////////////////
///////////////// 013 More Closure Examples //////////////////
//////////////////////////////////////////////////////////////

// The main goal is to start identifying closures in our own code in the future.

/**
 * We don't always need to return a function from another function in order to create a closure.
 *
 * re-assigning functions even without returning them, also creates a closure.
 */

// Example 01:
/*
let f;

const g = function () {
  const a = 23;
  // Re-assigned the variable f in here and assigned is a function value.
  f = function () {
    console.log(a * 2);
  };
};

// let's try to call g()
g();
*/
/**
 * EXPLANATION: The result of the g() function is that, the variable a will be 23 and our f variable that we have outside of the g() function will become the function inside the g() function.
 */
/*
// So, after calling g() function we can call f()
f();
// OUTPUT: 46     script.js:832
*/
/**
 * EXPLANATION: This proves that the f value here so this f() function really does close over any variables of the execution context in which it was defined.
 *
 * And that is true even when the variable itself. So f here was technically not even defined inside of this variable environment of g() function.
 *
 * So this f variable was defined outside here in the global scope, it was created there but then as we assigned it as a function inside the g() function, the f() function then still closed-over the variable environment of the g function.
 * And that includes the variable a.
 *
 * Therefore the f() function was able to access this the variable a even after the g() function already finished its execution.
 *
 * So when we called the g() function the execution context inside the call stacked was poped-off. But the f() function was able to access the a variable because of the closure.
 *
 *
 *
 * If we use the analogy of our last lecture, the a variable is inside the backpack of the f() function.
 */

////// Let's now take this example above to the next level and create a new function

let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g();
f(); // OUTPUT: 46
console.dir(f); // [Check_out-IMAGE_06]

// Re-assigning f function
h();
f(); // OUTPUT: 1554
console.dir(f); // [Check_out-IMAGE_07]

/**
 * EXPLANATION: As we call the h() function then the f variable will be assigned again. so a second function inside the h() function.
 *
 * N.B: Keep in mind that the f() at this point is a different function than the one that was inside the g() function above. And that's because it was reassigned by h().
 *
 * We see that the answer is 1554. so this proves that the f() function it was reassigned here also closed-over the variable environment of h() function.
 * That's how it can access then the b variable which was set to 777.
 *
 * Now if we write console.dir(f) and inspect the variable environment in the console, We can see that in the closure it does indeed have the value of b and it now no longer has the value of a.
 *
 * In short, As we re-assign the function to a new value, then the old closure basically disappears.
 */

/**
 * IMPORTANT: So, we have to keep in mind that the closure can change like this as the variable is re-assigned.
 */

/**
 * So it really is true that a closure always makes sure that a function does not lose the connection to the variables that were present at its birthplace.
 *
 * In our case here, the function was kind of born inside of g() first and then it was reborn again in h().
 * So first the closure contained the variable a of its first birthplace. And then as it was reborn to follow our analogy then it remembered this b variable from its new birthplace.
 *
 * REMEMBER: So whenever something like this happens where you re-assigned functions even without returning them, keep in mind that this will also create a closure.
 */

// Example 02: Timer
/**
 * A timer is another great example that we don't need to return a function to see a closure in action.
 */
const boardPassenger = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} Passengers`);
    console.log(`There are 3 groups, each with ${perGroup} Passengers`);
  }, wait * 1000);
  /**
   * A setTimeout function needs two parameters. The first one is a function which will be executed, And this function will be executed after a certain time. The second argument here is in milliseconds.
   */

  console.log(`Will start boarding in ${wait} seconds`);
};

boardPassenger(180, 3);

/**
 * The closure also includes the arguments and that's because they are really just a local variables in the function.
 *
 * And closure has higher priority over the Global scope.
 */

// Watch the video form [7:35 - 13:40] for better explanation.
