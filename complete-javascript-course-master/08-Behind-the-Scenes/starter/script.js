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
