'use strict';

///////////////////////////////////////////////
////// 002 An High-Level Overview of JavaScript

/*
 ## High-Level Programming Language
 ** Developer does NOT have to worry, everything happens automatically.

 ## Garbage-collected
 ** JavaScript has a cleaning guy who cleans the memory so we don’t have to.

 ## Interpreted or just-in-time compiled

 ## Multi-paradigm
 ** Paradigm: An approach and mindset of structuring code, which will direct your coding style and technique. Also we can classify paradigms as imperative or as declarative. 
 ** There three diffrent paradigms in programming languages. These are,
 1. Procedural Programming (The one we've been using so far
 2. Object-oriented programming (OOP)
 3. Functional programming (FP)
 
 Many languages are only procedural  or only Object-Oriented or only Functional, but JavaScript does all of it. So it's really flexible and versatile. 
 
 ## Prototype-based object-oriented
 ** So, about the object-oriented nature of JavaScript, it is a prototype-based, object-oriented approach.
 
 This means, almost everything in JavaScript is an object, except for primitive values such as numbers, strings, et cetera.
 
 But arrays, for example, are just object. Now, have you ever wondered why we can create an array and then use the push method or the indexOf method on it ? 
 
 For Example: 
 const arr = [1, 2, 3];
 arr.push(4); 
 arr.indexOf(2);           

 Well, it's because of prototypal inheritance. Basically, we create arrays from an array blueprint (Class), which is like a template and this is called the prototype.

 This prototype contains all the array methods and the arrays that we create in our code then inherit the methods from the blueprint so that we can use them on the arrays.

 This is actually a huge oversimplification on object-oriented programming in JavaScript.


 ## First-class functions
 ** functions are simply treated as variables. We can pass them into other functions, and return them from functions. 

 This is extremely powerful because it allows us to use a lot of powerful techniques and also allows for functional-programming, which is one of the paradigms. We have already used the power of first-class functions.

 In the Modal-window project we've used the closeModal() function into the addEventListener function as if it was just a regular variable. 
 
 const closeModal = () => {
    modal.classList.add('hidden);
    overlay.classList.add('hidden);
 };

 overlay.addEventListener('click', closeModal);
                                   ---------- 

 ## Dynamic
 ** JavaScript is a dynamic language and dynamic actually means dynamically-typed. 

 So as we've already seen, in JavaScript, we don't assign data types to variables. Instead, they only became known when the JavaScript engine executes our code. 

 Also, the type of variables can easily be changed as we reassign variables. And this is basically what dynamically-typed means.

 For Example: 
 let x = 23; [No data type definitions. Types
 becomes known at runtime]
 let y = 17; 

 x = 'Sushmoy; [Data type of variable is
 automatically changed]

 ## Non-blocking event loop Concurrency model

 ** What actually is a concurrency model?

 Well, it's just a fancy term that means how the JavaScript engine handles multiple tasks happening at the same time.

 ** But why do we need that?

 ## Single-threaded

 ** Well, because JavaScript itself runs in one single-thread, which means that it can only do one thing at a time and therefore we need a way of handling multiple things happening at the same time.

 And by the way, in computing, a thread is like a set of instructions that is executed in the computer's CPU.

 So basically, the thread is where our code is actually executed in a machine's processor.

 ** What about a long-runnig task, like fetching data from a remote server?

 Well, it sounds like that would block the single thread where the code is running, right? But of course we don't want that. What we want is so-called non-blocking behavior.

 ** how do we achieve that?

 By using a so-called event loop. The event loop takes long-running tasks, executes them in the background and then puts them back in the main thread once they are finished.

 And this is, in a nutshell, JavaScript's non-blocking event loop concurrency model with a single thread.

*/
///////////////////////////////////////////////
///////// 004 The JavaScript Engine and Runtime
/*
//// What is a JavaScript Engine?

// a JavaScript engine is simply a computer program that executes JavaScript code. There are a lot of steps involved in doing that, but essentially executing JavaScript code is what an engine does.

// The most well known engine is Google's V-Eight used in google chrome.

// The V-Eight engine powers Google Chrome, and also Node.js which is a JavaScript runtime that we can use to build server side applications with JavaScript, outside of any browser.

// But of course, All the other browsers have their own JavaScript engines.

// Anyway, it's quite easy to understand what an engine is but what's most important is to actually understand its components and how it works.

** JavaScript engines always contains two components. These are,
1) a call stack and 
2) a heap. 
[CHECH_OUT_IMAGE-01]

// The call stack is where our code is actually executed using something called execution contexts.

// Then the heap is an unstructured memory pool which stores all the objects that our application needs. [CHECH_OUT_IMAGE-02]

// Alright, now we know where our code is executed.

// Now the question is, How the code is compiled to machine code so that it can be executed afterwards ?

## First let's understand, Computer science Side Note: Compilation vs. Interpretation?

** Computer's processor only understands zeros and ones. Therefore every single computer program ultimately needs to be converted into machine code. And this can happen using compilation or interpretation.

** In compilation, the entire source code is converted into machine code at once. Then this machine code is written into a portable file that can be executed on any computer.

So we have two different steps here,
First, The machine code is built.
Second, It is executed in the CPU.

The execution can happen way after the compilation.

For Example: Any application that you're using on your computer right now has been compiled before and you're now executing it way after it's compilation. [CHECH_OUT_IMAGE-03]

** In interpretation, there is an interpreter which runs through the source code and executes it line by line. 

So here we do not have the same two steps as before. Instead the code is read and executed all at the same time.

Of course the source code still needs to be converted into machine code, but it simply happens right before it's executed and not ahead of time. [CHECH_OUT_IMAGE-04]

// JavaScript used to be a purely interpreted language but the problem with interpreted languages is that they are much, much slower than compiled languages. This used to be okay for JavaScript, but now with modern JavaScript and fully fledged web applications that we built and use today, low performance is no longer acceptable.

// For example: Just imagine you were using Google maps in your browser and you were dragging the map and each time you dragged it would take one second for it to move. That would be completely unacceptable, right?

// Now many people still think that JavaScript is an interpreted language but that's not really true anymore.

// So instead of simple interpretation modern JavaScript engine now use a mix between compilation and interpretation which is called just-in-time (JIT) compilation.

// This approach basically compiles the entire code into machine code at once, then gets executed immediately. [CHECH_OUT_IMAGE-05]

## Modern Just-in-time compilation of javascript process --->

** Parsing: 
So as a piece of JavaScript code enters the engine the first step is to parse the code. Which essentially means to read the code. During the parsing process, the code is parsed into a data structure called the abstract syntax tree or (AST). This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords, and then saving all these pieces into the tree in a structured way. 

This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code.

// And of course you don't need to know what an AST looks like.

// the next step is compilation which takes the generated AST and compiles it into machine code.

// This machine code then gets executed right away because remember modern JavaScript engine use just-in-time compilation. And remember execution happens in the JavaScript engines call stack. We will discuss more on this topic later.

## Optimization
** Modern JavaScript engines actually have some pretty clever optimization strategies.

What actually happens is, In the beginning it creates a very unoptimized version of machine code just so that it can start executing as fast as possible.

Then in the background, this code is being optimized and recompiled during the already running program execution. And this can be done most of the times and after each optimization the unoptimized code is simply swept for the new more optimized code without ever stopping execution. And this process is what makes modern engines such as the V-Eight so fast. [CHECH_OUT_IMAGE-06]

// Now different engines implements in slightly different ways, but in a nutshell this is what modern just-in-time compilation looks like for JavaScript.

//////////// What a JavaScript runtime is?

// let's take a look at what a JavaScript runtime is. And in particular, the most common one, which is THE BROWSER and by doing this, we can get the bigger picture of how all the pieces fit together when we use JavaScript.

// we can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need in order to use JavaScript in this case, in THE BROWSER.

// And the heart of any JavaScript runtime is always a JavaScript engine. Without an engine there is no runtime and there is no JavaScript at all.

// However the engine alone is not enough. In order to work properly, we also need access to the web APIs.

// So that's everything related to the DOM or timers or even the console.log that we use all the time.

// So web APIs are functionalities provided to the engine, but which are actually not part of the JavaScript language itself.

// JavaScript simply gets access to these APIs through the global window object. But it still makes sense that the web APIs are also part of the runtime.

// Because again a runtime is just like a box that contains all the JavaScript related stuff that we need.

## A JavaScript runtime also includes a so called callback queue. 

** Callback queue is a data structure that contains all the callback functions that are ready to be executed.

For Example: 
 we attach event handler functions to DOM elements like a button to react to certain events ('click'), right? 
 
 And these event handler functions are also called callback functions okay. So as the event happens, for example a click, the callback function will be called.

// To understand how that actually workds behind the scenes properly watch the video explanation. Timestamp - 11:40 min.

So the first thing that actually happens after the event is callled is that the callback function is put into the callback queue. 

Then when the call stack is empty the callback function is passed to the call stack by the event loop 🔄. 

Basically the event loop 🔄 takes callback functions from the callback queue and puts them in the call stack so that they can be executed.

** This is an overview of how JavaScript's nonblocking concurrency model is implemented by the event loop 🔄 works. 

### However, it's also important to remember that JavaScript can exist outside of browsers, for example, in Node.js.

** It's pretty similar, but since we don't have a browser of course, we can't have the web APIs. because it's the browser who provides these. Instead we have multiple C ++ bindings and a so called thread pool. In short Node.js is a different JavaScript runtime. [CHECH_OUT_IMAGE-08]

*/
////////////////////////////////////////////////
////// 005 Execution Contexts and The Call Stack

// ---> It's better you watch the video to understand this topic properly.

//// An Execution context consists of:
// --> 1) Variable environment
//      -> let, const and var declarations
//      -> Functions
//      -> arguments object
// --> 2) Scope Chain
// --> 3) this keyword

// Keep in mind that, Arrow Functions can not have [arguments object and this keyword]

/////// Technically, values only become known during execution.

// An Execution context is generated during "Creation phase", right before execution.

// The Call Stack is the place where execution contexts get stacked on top of each other, to keep track of where we are in the execution.

/////////////////////////////////////////////
/////// 006 Scope and the Scope Chain

/*
// Second component of a execution context is Scope Chain.

//// What is Scoping ?
// --> Scoping controls how our program's variables are organized and accessed by the JavaScript engine. So basically scoping asks the question, where do variables live? Or where can we access a certain variable and where not?

///// What is Lexical Scoping ?
// --> In JavaScript, we have something called lexical scoping. And lexical scoping means that the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks (if-else blocks, for loops) in the programs code.

// FOR EXAMPLE: A function that is written inside another function has access to the variables of the parent function.

// So again, variable scoping is influenced by where exactly we write our functions and code blocks.

//////// Now, What is scope itself ?
// --> Scope is the place or space or environment in our code where variables are declared.

// In the case of functions, that's essentially the **variable environment** which is stored in the Functions Execution Context.

///// what's the difference between scope and variable environment?
// --> For the case of functions, it's basically the same.

/////// What is the scope of a variable ?
// --> So the scope of a variable is basically the entire region of our code, where this variable can be accessed.

////// The 3 types of scope:
// --> In JavaSciprt there is,
 1) Global Scope, 
 2) Function Scope and 
 3) Block Scope(ES6).

As we already know Scope is the place in our code where variables are declared. And when i say variables, the exact thing is true for functions as well.
Because, in the end, functions are just values that are stored in variables.

/////// 1st [GLOBAL SCOPE]: the global scope is for top level code. Meaning this is for variables that are declared outside of any function or block.

// These variables will be accessible everywhere in our program, in all functions and all blocks.

/////// 2nd [FUNCTION SCOPE]: Each and every function creates a scope. And the variables declared inside that function scope are only accessible inside that function. This is also called a LOCAL SCOPE. So, outside of the function, the variables are not accessible at all.

// Again, this is technically the same as the functions **variable environment** inside the function execution context. 

// Traditionally, only functions used to create scopes in JavaScript. But starting in ES6, blocks also creates scopes now. And with blocks, we mean everything that is between curly braces, such as the block of an if statement or a for loop.

/////// 3rd [BLOCK SCOPE]: So just like with functions, variables declared inside a block are only accessible inside that block and not outside of it.

blocks also creates scopes. However, there is nothing as block execution context.

// Now, the big difference is that block scopes only apply to variables declared with let or const. Means, only let and const variables are restricted to the block in which they were created. 

This's why we say that let and const variables are block scoped.

//// What about var declared variables?
// --> If we have a var declared variable inside of a block that variable would still be accessible outside of that block, and would be scoped to the current function or to the global scope.

// And so we say that var is function scoped.

// So in ES5 and before, we only had global scope and function scope. And that's why ES5 variables declared with var, only care about functions, but not about blocks. They simply ignore them.

// Finally, starting in ES6, all functions are now also block scoped, at least in 'strict mode'; 

// And just like with let and const variables, this means that functions declared inside a block are only accessible inside that block.

///// So to recap, let and const variables as well as functions are block scoped.

//////////// Scope Chain /////////////

// Video time stand: 10:00 for visual example and better understanding.

// Every scope has access to all the variables from all its parent scopes. This is a simplified explanation of scope chain.

// Basically how this chain works is that, if one scope needs to use a certain variable, but cannot find it in the current scope, it will look up in the scope chain and see if it can find a variable in one of the parent scopes. If it can, it will then use that variable. And if it can't, then there will be an error. And this process is called variable lookup.

// It's important to note that these variables are not copied from one scope to another. Instead, child scopes simply look up in the scope chain until they find a variable that they need and then they use it.

//////// What's also extremely important to note is that, this does not work the other way around.

// A certain scope will never, ever have access to the variables of an inner scope. Simply means that, Parent functions will never have access to the child functions variables.

// In other words, one scope can only look up in a scope chain, but it cannot look down.

// Basically, only parent scope can be used, but no child scopes.

////// For a variable declared with var, block scopes don't apply at all.

// They are functions scoped, not block scoped.

// Let and const on the other hand are in fact blocks scoped.

/// Also the scope chain does apply to block scopes as well.

// N.B: We can say that, the scope chain only works upwards, not sideways and also not backwards.

///////// Scope Chain Vs. Call Stack /////////

// Video time stand: 17:00 for visual example and better understanding.
*/
///////////////////////////////////////////
/////////////// 007 Scoping in Practice
/*
// Watch the video again if you have any doubts.

** functions are block scoped and that is only true for strict mode.

That means if you use 'use strict' at the beginning of your code than remember your functions are going to be block scoped.

*/
////////////////////////////////////////////////////////
///////// 008 Variable Environment_ Hoisting and The TDZ

//// How Variables are created in JavaScript?

// So, In javaScript we have a mechanism called hoisting. Hoisting makes some types of variables accessible/usable in the code before they are actually declared in the code.
// Now, many people simply define hoisting by saying that variables are magically lifted or moved to the top of their scope. For example, to the top of a function.
// And that is actually what hoisting looks like on the surface. But behind the scenes that's in fact not what happens.
// Instead, behind the scenes before execution code is scanned for variable declarations. A new property is created in the variable environment object. And that's how hoisting really works.

/// Now, hoisting does not work the same for all variable types.

// Watch the video again if you don't get something

//////////////////////////////////////////
///////// 009 Hoisting and TDZ in Practice

//////// Hoisting with variables ////////

// Here we are calling the variable before the declaration
/* 
console.log(me);
*/
// OUTPUT: undefined

/*
 * Explanation: It is because variables declared with var are actually hoisted but they are hoisted to the value of undefined.
 
 * Therefore when we try to access them undefined is exactly the result that we get.
*/
/*
console.log(job);
*/
// OUTPUT: Cannot access 'job' before initialization

/*
 * Explanation: the origin of this error is the fact that the job variable is still in the temporal dead zone here at this point.

 * the temporal dead zone of a variable declared with a let or const, starts from the beginning of the current scope so in this case, it's the global scope.

 * So from the beginning of the scope until the point of the code where it is defined.
*/
/*
console.log(year);
*/
// OUTPUT: Cannot access 'year' before initialization
/*
 * Explanation: This means that at this point, the job variable is still in the temporal dead zone, and the same is true for year.
 */

/*
// Here We have declared the variables
var me = 'Sushmoy';
let job = 'Software engineer';
const year = 2000;
*/

//////// Hoisting with functions ////////

//// Here we are calling them before their Declaration
/*
console.log(addDecl(2, 3));
*/
// OUTPUT: 5
/*
console.log(addExpr(2, 3));
*/
// OUTPUT: Cannot access 'addExpr' before initialization
/*
 * Explanation: that's exactly the same error that we got before here with this let and const variables. 
 
 * And that's because this function here right now is simply a const variable too. 
 
 * And so it means that it's now also in the temporal dead zone right? 
 
 * So again we are simply assigning a function value to this variable.

 * Since this variable was defined with const, it is now in a temporal dead zone and therefore we get this exact same error message as before.
*/
/*
console.log(addArrow(2, 3));
*/
// OUTPUT: Cannot access 'addExpr' before initialization

/*
///// Here we Created these Functions first
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;
*/

////////////////////////////////////////////////////////
///////// Now What if we change these last two function from const to var ? /////////
////////////////////////////////////////////////////////

//// Here we are calling them before their Declaration
/*
console.log(addDecl(2, 3));
*/
// OUTPUT: 5
/*
console.log(addExpr(2, 3));
*/
// OUTPUT: addExpr is not a function
/*
 * Explanation: as you already know, any variables declared with var will be hoisted and set to undefined. 
 
 * And addExpr() here is a variable declared with var and so right now it is undefined.
 
 * Basically, here we are trying to call undefined. So, what we doing here is, 
 
 undefined(2, 3);
 OUTPUT: undefined is not a function

 * Again if we try to call the addArrow() in the console,

 console.log(addArrow);
 OUTPUT: undefined

 * That is because we've declared addExpr() and addArrow() with var below.
*/
/*
console.log(addArrow(2, 3));
*/
// OUTPUT: addArrow is not a function

/*
//// Here we Created these Functions first
function addDecl(a, b) {
  return a + b;
}

var addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;
*/

/*
 * The only function that you can use before declaring it is the add function declaration, the first one
 */

/////// Why we should never use var

/*
//  Example:
if (!numOfProducts) deleteShoppingCart();
// OUTPUT: All products deleted
*/

/*
  * Explanation: Up here the variable numOfProducts is   actually undefined and not 10 as we assigned the value below. 

  * That's why in the condition undefined is a falsy value but since we've used the negetion operator before numOfProducts like this !numOfProducts, undefined turns into a truthy value. 

  * And it executes the deleteShoppingCart() function. 

  * Which is a serious problem in Javascript 😥
*/

/*
var numOfProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted');
}
*/

/**
 * That's why the best paractice is to always declared the varables with let or const. 
  
 * And always at the top of the scope. 
 */

// Another difference between let, conts and var

/*
var x = 1;
let y = 2;
const z = 3;
*/

// Now there is a object named window. which is a Global object of JavaScript.

/**
 * If we check the window object in the console and scroll down a bit we'll see a property has been created as x: 1.
 
 * But y and z are nowhere to be found
 */

/*
console.log(x === window.x); // OUTPUT: true
console.log(y === window.y); // OUTPUT: false
console.log(z === window.z); // OUTPUT: false
*/

// This can have some implications in some cases.

//////////////////////////////////////////
///////// 010 The this Keyword /////////
//////////////////////////////////////////

// First of all watch the short expalanation video for better understanding

/**
 * How the this Keyword works ?
 
 * So, the this keyword or this variable is basically a special variable that is created for every execution context and therefore any function.
 
 * We learned before that it's one of the three components of any execution context, along with the variable environment and scope chain.

 * In general terms, the this keyword, will always take the value of the owner of the function in which, the this keyword is used.

 * We also say, that it points to the owner of that function. And that sounds very abstract but don't worry.
 
 * For now, what's very important to understand is that the value of the this keyword is not static.

 * So it's not always the same. It depends on how the function is actually called. And its value is only assigned when the function is actually called. 

 * So it's very different from a normal value, In this regard.

 * For example, X = 5, then X will always just be five. 
 
 * But the this keyword again, depends on the way in which a function is called.  
 
*/

/**
 * What does that actually mean?
 
 * Well, let's analyze four different ways in which functions can be called. 
 
 * The first way to call a function is as a method. So as a function attached to an object.
 
*/

/*
// For Example:
const sushmoy = {
  firstName: 'Md. Abu Rayhan',
  year: 2000,
  job: 'Software Engineer',
  calcAge: function () {
    return 2023 - this.year;
  },
};

console.log(sushmoy.calcAge());
*/

/**
 * Explanation: So when we call a method, the this keyword inside that method will simply point to the object on which the method is called.
 
 * In other words, it points to the object that is calling the method.
 */

/**
 * Another way we call functions is by simply calling them as normal functions.
  
 * So not as a method and so not attached to any object.
  
 **** In this case, the 'this' keyword, will simply be undefined.
  
 * However, that is only valid for strict mode. So if you're not in strict mode, this will actually point to the global object, 
  
 * Which in case of the browser is the window object. 
  
 *** And that can be very problematic and so, this is yet another very good reason to always use strict mode.

 */

/**
 * Next, Another way we call functions is by simply calling them as arrow functions.
 
 *  While arrow functions are not exactly a way of calling functions.
 
 * It's an important kind of function that we need to consider.
 
 *** Because, REMEMBER, arrow functions do not get their own 'this' keyword.
 
 * Instead, if you use 'the this variable' in an arrow function, it will simply be the 'this' keyword of the parent function.
 
 * So of the parent function and in technical terms, 'this' is called the 'lexical this keyword,'
 
 * because it simply gets picked up from the outer lexical scope of the arrow function.
 
 * So, this is a important thing to remember about arrow functions.
 */

/**
 * Finally, if a function is called as an event listener, then the this keyword will always point to the DOM element that the handler function is attached to.
 *
 * Pretty straight forward 😉
 */

/**
 * It's also important to know what the, this keyword is not. 
  
 * So the this keyword will never point to the function in which we are using it.
  
 * Also, the this keyword will never point to the variable environment of the function.
 */

////////////////////////////////////////////////////
///////// 011 The this Keyword in practice /////////
////////////////////////////////////////////////////

/*
console.log(this); // OUTPUT: the window object (Global object)

const calcAge = function (birthyear) {
  console.log(2023 - birthyear);
  console.log(this);
};

calcAge(2000); // OUTPUT: 23, undefined
*/

/**
 * Explanation: It is because of the 'use strict' strict mode we've used at the beginning of our file.
 */

/*
const calcAgeArrow = birthyear => {
  console.log(2023 - birthyear);
  console.log(this);
};

calcAgeArrow(2004); // OUTPUT: 19, Window object
*/

/**
 * Explanation: Arrow functions do not get their own 'this keyword'.
 
 * Instead, if you use 'the this variable' in an arrow function, it will simply be the this keyword of the parent function.
 
 * Because it simply gets picked up from the outer lexical scope of the arrow function.
 
 * In this case which is the global scope (window object).
 */

/*
const arisu = {
  year: 2000,
  calcAge: function () {
    console.log(2023 - this.year);
    console.log(this);
  },
};

arisu.calcAge(); // OUTPUT: 23, arisu object
*/

/**
 **** Important point to remember is that, the 'this' keyword will point to the object that is calling the method.
 
 * That does not mean that the 'this' keyword will only point at the object in which we worte the method.
 */

// For example:

/*
const yusagi = {
  year: 2005,
};
*/

/*
yusagi.calcAge = arisu.calcAge; // method borrowing
*/

/*
console.log(yusagi);
OUTPUT -->  {year: 2005, calcAge: ƒ}
calcAge: ƒ ()
year: 2005
[[Prototype]]: Object
*/

/**
 * Above we can see that the calcAge function is also in the new arisu object.
 * And of course it's still also in Jonah's, but now we copied it from one object to the other, and
 
 * This is called to method borrowing.
 */

/*
yusagi.calcAge(); 
*/
// OUTPUT: 18, {year: 2005, calcAge: f}

/**
 * Explanation: In this method call here the 'this' keyword does now actually point to Matilda.
 
 * So this proves the fact that the 'this' keyword always points to the object that is calling the method.
 
 * It's the reason why we can say that the "this" keyword is really dynamic. It's not static and it depends on how the function is called.
 */

/*
const f = arisu.calcAge;
*/

/*
console.log(f);
 
OUTPUT: ƒ () {
   console.log(2023 - this.year);
   console.log(this);
 }
*/

// We just copied the calcAge method inside the variable f

/*
f(); 
*/
// OUTPUT: Cannot read properties of undefined (reading 'year') at calcAge (script.js:687:29).

/**
 * So this happens because this f() function here is now just a regular function call right?
 
 * It is not attached to any object. There is no owner of this f() function anymore here at this point.
 
 * And therefore it is just a regular function call.
 
 * In this case, the 'this' keyword, will simply be undefined. becasue of the strict mode
 */

/////////////////////////////////////////////////////////
/////// 012 Regular Functions vs. Arrow Functions ///////
/////////////////////////////////////////////////////////

// var firstName = 'Arisu';

/*
const nagamoto = {
  firstName: 'Md. Abu Rayhan',
  year: 2000,
  calcAge: function () {
    // console.log(this);
    console.log(2023 - this.year);

    // Solution 1
    // const self = this;
    // const isMillennial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1991 && self.year <= 1996);
    //   // console.log(this.year >= 1991 && this.year <= 1996);
    // };

    // Solution 2
    const isMillennial = () => {
      console.log(this);
      console.log(this.year >= 1991 && this.year <= 1996);
    };
    isMillennial();
  },

  greet: () => {
    console.log(this); // OUTPUT: The window object
    /**
     * Explanation: Simply because the arrow function does not get it's own this keyword. So it refers to the outer or parent scope.
     
     * In this case, Global scope that is the global window object.
    */
/*
    console.log(`Hey ${this.firstName}`); // OUTPUT: Hey undefined
  },
};

nagamoto.greet();
*/

/*
nagamoto.calcAge(); // OUTPUT: Cannot read properties of undefined (reading 'year') at isMillennial
*/

/**
 * Explanation: the 'this' keyword here is undefined. So why is that?
 
 * Well, if we think about this, then 'this' keyword here is really just a regular function call, isn't it?
 
 * It is a regular function call, even though it happens inside of a method.
 
 * And the rule says that inside a regular function call, which this clearly is, that the 'this' keyword must be undefined. And so therefore it is undefined right here.
 
 * So this is just as if this function was outside of this method.
 
 * Now some people consider that this is a bug in JavaScript but in my opinion, it's not really.
 
 * It's just how the this keyword works. It's a clear rule that a regular function call has the 'this' keyword set to undefined.
 
 * Now there are two solutions to this problem.
 
 * The solution 1 is to use an extra variable that we usually call self. At Line: 802
 
 * The solution 2 is to use an arrow function. At Line 810
 
 * And that is going to work because the arrow function does not have its own this keyword. Right?
 
 * The arrow function will simply use 'this' keyword of its parent scope. And in this case, that will be the calcAge method, and in here the 'this' keyword is Jonas, so the Jonas object.
 
 * The solution 2 is a very useful use case of the arrow function.
 */

/*
nagamoto.calcAge(); // OUTPUT: false |
*/
// Now if we print this
/*
console.log(this.firstName); // OUTPUT: undefined
*/

/**
 * Explanation: It is because in the Global window object there is no such property as firstName yet.
 *
 * Now, If we use var to declare a variable at line 792.
 * that can lead to a great problem.
 *
 * Its because when we declare a variable using var it creates a property in the Global window object. So that can lead to a great problem now when we'll try to call the greet arrow function.
 * It will log to the console --> Hey Arisu
 */

// After declaration of, var firstName = 'Arisu';
/*
console.log(this.firstName); // OUTPUT: Hey Arisu
*/

///////// The arguments keyword /////////

/**
 * So in the video about execution context, and the call stack, we learned that functions also get access to an 'arguments' keyword inside the variable environment. So not just the 'this' keyword, but also an 'arguments' keyword.
 *
 * Now, just like the 'this' keyword, the 'arguments' keyword is only available in regular functions. so not available in arrow functions!!.
 */

/*
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

const addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
*/

/*
addExpr(7, 8, 12, 14); // OUTPUT: Arguments array with arguments with indexes
*/

/**
 * Explanation:we have two parameters, and so two arguments. But it is completely legal to add more arguments. They will not have a name, so we didn't name them, but they exist.
 *
 * and we can use them therefore in the functions. For example, we could use a loop, and then loop over this array and add all the numbers together.
 */

/*
addArrow(7, 8); // OUTPUT: arguments is not defined at addArrow
*/

/**
 * Explanation: the arrow function does not get the'arguments' keyword.
 */

/**
 * So this was simply just to show you that the arguments keyword exists, but that it only exists in regular functions.
 *
 * So in function expressions like this, but also in function declarations, but not in an arrow function.
 *
 * Anyway, the arguments keyword is not that important in modern JavaScript anymore, because now we have a more modern way of dealing with multiple parameters.
 *
 * But still it's important that you are aware that this arguments keywords exists.
 */

////////////////////////////////////////////////////////////////
// 013 Primitives vs. Objects (Primitive vs. Reference Types) //
////////////////////////////////////////////////////////////////

// Primitives are numbers, string, boolean's and etc.
/*
let age = 30;
let oldAge = age;
age = 31;

console.log(age); // OUTPUT: 31
console.log(oldAge); // OUTPUT: 30
*/

/**
 * The output came as expected. So that's normal.
 */

/*
const me = {
  firstName: 'Sushmoy',
  age: 23,
};

const friend = me;

friend.age = 27;

console.log('Me', me);
console.log('Frined', friend);
*/

// OUTPUT: Me {firstName: 'Sushmoy', age: 27}
// OUTPUT: Frined {firstName: 'Sushmoy', age: 27}

/**
 * Wait, here we have changed the age value for the friend object only !!
 * Why both of the object showing the same value ?
 */

/**
 * Explanation: First, we need to remember about JavaScripts primitive data types,
 *
 * Which are 'number', 'string', 'Boolean', 'undefined', 'null', 'symbol', and 'BigInt'.
 *
 * Then everything else are basically objects,
 *
 * So objects created with the 'object literal', 'arrays' and even 'functions' are all objects and many more... .
 *
 * Now, when we're talking about memory and memory management, it's usual to call primitives, primitive types
 *
 * and objects, reference types because of the different way in which they are stored in memory.
 */

/**
 * Next, we need to remember about the JavaScript engine.
 *
 * So the engine has two components,
 *
 * the call stack (where functions are executed),
 * and the heap (where objects are stored in memory).
 *
 * And that's right, all of objects, or in other words, reference types will get stored right in the memory heap.
 *
 * On the other hand, primitives or primitive types are stored in the call stack.
 *
 * And with that, I mean that primitive types are stored in the execution contexts in which they are declared. But for the sake of simplicity, let's ignore that detail now.
 *
 * Simply say that primitive types are stored in a call stack where execution context run.
 */

/**
 * But how does all that actually work?
 *
 * And why did our code example earlier behave in that weird way?
 */

// For better explanation watch the video from 06:12. //

/**
 * [[[Important points to remember]]]:
 *
 * 1. So when we declare a variable like age equals 30,
 * QUESTION: what actually happens inside the JavaScript engine and the computer's memory?
 *
 * ASNWER: First in the call stack JavaScript will create a so-called unique identifier that holds the variable name. Then a piece of memory will be allocated with a certain address, let's say 0001.
 *
 * Finally the value would be stored in memory at the specified address. So in this case, the value 30 will be specified/stored at memory address 0001.
 *
 *
 * 2. Another extremely important thing to understand here is that the identifier actually points to the address and not to the value itself.
 *
 * So we would say that the age variable is equal to 30, but in fact, age is equal to the memory address 0001, which holds the value of 30.
 *
 *
 * 3. when a new object is created such as this Me object, it is stored in the heap. And such as before there is a memory address and then the value itself. [CHECK_OUT_IMAGE 09]
 *
 * Now inside the call stack in case of Reference values like the Me object,
 * the Me identifier does actually not point directly to this newly created memory address in the heap. So in this example, D30F, [CHECK_OUT_IMAGE 09]
 * Instead, it will point to a new piece of memory address that's created in the call stack.
 * And this new piece of memory address will then point to the object that's in the heap by using the memory address as its value.
 *
 * In other words, the piece of memory in the call stack has a reference to the piece of memory in the heap.
 *
 * And that's the reason why we call objects reference types in this context.
 *
 *
 * 4. Reference values works this way because objects might be too large to be stored in the stack. Instead they are stored in the heap,
 * which is like an almost unlimited memory pool.
 *
 * The stack just keeps a reference to where the object is actually stored in the heap so that it can find it whenever necessary.
 *
 *
 * 5. Tt's a misconception that all variables declared with const are immutable. In fact, that is only true for primitive values, but not for reference values.
 *
 * Question: Why variables declared with const are not immutable / changable?
 * Answer: we create a new variable called Friend that we set equal to the Me object. So what will happen here? Well, just like with primitive values, the Friend identifier will point to the exact same memory address as the Me identifier. And again, that address contains the reference, which then points to the object itself. And like this the Friend object is now essentially the exact same as the Me object.
 * Do you see that here in the diagram? So now comes the interesting part because we're gonna change a property in the Friend object by setting friend.age to 27. So what happens then is that the object is found in the heap, and the 30 is changed to 27. Great. And by the way, even though we defined the Friend variable as a constant, we can actually still manipulate the object without problems. And when we think about that, it makes sense because we're actually not changing the value in memory for the Friend identifier, it is still D30F. So the reference to the object. All we did was to change the value in the heap, and that's not a problem.
 *
 *
 * 6. Another important implication of this, is that whenever you think that you're copying an object, you're really just creating a new variable that points to the exact same object.
 */

/////////////////////////////////////////////////////////
//////// 014 Primitives vs. Objects in Practice /////////
/////////////////////////////////////////////////////////

/////// For better explanation watch the video. ///////
