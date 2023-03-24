'use strict';

///////////////////////////////////////////
////// An High-Level Overview of JavaScript

////// What is Multi-paradigm ?

// An approach and mindset of structuring code, which will direct your coding style and technique.

// 1. Procedural Programming
// 2. Object-roiented programming (OOP)
// 3. Functional Programming (FP)

// Using javaScript we can do it all.

////// What is First-class functions?

// Javascript is a language with first-class functions. which simply means that functions are treated just as regular variables.

// So, we can pass functions into other functions and we can even return functions from functions. And this is extremely powerful because it allows us to use a lot of powerful techniques and also allows for functional-programming.

////// What is Dynamically-typed language means?

// JavaScript is a dynamic language and dynamic actually means dynamically-typed. So as we've already seen, in JavaScript, we don't assign data types to variables. Instead, they only became known when the JavaScript engine executes our code. Also, the type of variables can easily be changed as we reassign variables. for example:
let x = 23;
x = 'Sumeer';
// Here, data type of variable is automatically changed.

// And this is basically what dynamically-typed means.

////// what actually is a concurrency model?

// Well, it's just a fancy term that means how the JavaScript engine handles multiple tasks happening at the same time.

//// But why do we need that?

// Well, because JavaScript itself runs in one single-thread, which means that it can only do one thing at a time and therefore we need a way of handling multiple things happening at the same time.

// And by the way, in computing, a thread is like a set of instructions that is executed in the computer's CPU.

// So basically, the thread is where our code is actually executed in a machine's processor.

//// What about a long-runnig task, like fetching data from a remote server?

// Well, it sounds like that would block the single thread where the code is running, right? But of course we don't want that. What we want is so-called non-blocking behavior.

//// how do we achieve that?

// by using a so-called event loop. The event loop takes long-running tasks, executes them in the background and then puts them back in the main thread once they are finished.

// And this is, in a nutshell, JavaScript's non-blocking event loop concurrency model with a single thread.

/////////////////////////////////////////////
///////// The JavaScript Engine and Runtime

//// What is a JavaScript Engine?

// a JavaScript engine is simply a computer program that executes JavaScript code. There are a lot of steps involved in doing that, but essentially executing JavaScript code is what an engine does.

// The most well known engine is Google's V-Eight used in google chrome.

// The V-Eight engine powers Google Chrome, and also Node.js which is a JavaScript runtime that we can use to build server side applications with JavaScript, outside of any browser.

// But of course, All the other browsers have their own JavaScript engines.

// Anyway, it's quite easy to understand what an engine is but what's most important is to actually understand its components and how it works.

// So any JavaScript engine always contains a call stack and a heap. [CHECH_OUT_IMAGE-1].

// The call stack is where our code is actually executed using something called execution contexts.

// Then the heap is an unstructured memory pool which stores all the objects that our application needs.CHECH_OUT_IMAGE-2.

//// Computer science Sideo note: But now the question is how the code is compiled to machine code so that it actually can be executed afterwards ?

// JavaScript used to be a purely interpreted language but the problem with interpreted languages is that they are much, much slower than compiled languages. This used to be okay for JavaScript, but now with modern JavaScript and fully fledged web applications that we built and use today, low performance is no longer acceptable.

// For example: Just imagine you were using Google maps in your browser and you were dragging the map and each time you dragged it would take one second for it to move. That would be completely unacceptable, right?

// Now many people still think that JavaScript is an interpreted language but that's not really true anymore.

// So instead of simple interpretation modern JavaScript engine now use a mix between compilation and interpretation which is called just-in-time (JIT) compilation.

// This approach basically compiles the entire code into machine code at once and then executes it right away. CHECH_OUT_IMAGE-3

//// Modern Just-in-time compilation of javascript process =>

// So as a piece of JavaScript code enters the engine the first step is to parse the code which essentially means to read the code. During the parsing process, the code is parsed into a data structure called the abstract syntax tree or (AST). This works by first splitting up each line of code into pieces that are meaningful to the language like the const or function keywords, and then saving all these pieces into the tree in a structured way. This step also checks if there are any syntax errors and the resulting tree will later be used to generate the machine code.

// And of course you don't need to know what an AST looks like.

// the next step is compilation which takes the generated AST and compiles it into machine code.

// This machine code then gets executed right away because remember modern JavaScript engine use just-in-time compilation. And remember execution happens in the JavaScript engines call stack. We will discuss more on this topic later.

// Anyways modern JavaScript engines actually have some pretty clever optimization strategies.

// What actually happens is, In the beginning it creates a very unoptimized version of machine code just so that it can start executing as fast as possible.

// Then in the background, this code is being optimized and recompiled during the already running program execution. And this can be done most of the times and after each optimization the unoptimized code is simply swept for the new more optimized code without ever stopping execution. And this process is what makes modern engines such as the V-Eight so fast. CHECH_OUT_IMAGE-4

// Now different engines implements in slightly different ways, but in a nutshell this is what modern just-in-time compilation looks like for JavaScript.

//////////// What a JavaScript runtime is?

// let's take a look at what a JavaScript runtime is. And in particular, the most common one, which is THE BROWSER and by doing this, we can get the bigger picture of how all the pieces fit together when we use JavaScript.

// we can imagine a JavaScript runtime as a big box or a big container which includes all the things that we need in order to use JavaScript in this case, in THE BROWSER.

// And the heart of any JavaScript runtime is always a JavaScript engine. Without an engine there is no runtime and there is no JavaScript at all.

// However the engine alone is not enough. In order to work properly, we also need access to the web APIs.

// So that's everything related to the DOM or timers or even the console.log that we use all the time.

// So web APIs are essentially functionalities provided to the engine, but which are actually not part of the JavaScript language itself.

// JavaScript simply gets access to these APIs through the global window object. But it still makes sense that the web APIs are also part of the runtime, because again a runtime is just like a box that contains all the JavaScript related stuff that we need.

// Next a typical JavaScript runtime also includes a so called callback queue. This is a data structure that contains all the callback functions that are ready to be executed. For example we attach event handler functions to DOM elements like a button to react to certain events, right? And these event handler functions are also called callback functions okay. So as the event happens, for example a click, the callback function will be called.

// And To understand this section properly I would suggest to watch the video explanation. Time - 12:00 min.

//// However, it's also important to remember that JavaScript can exist outside of browsers, for example, in Node.js.

// It's pretty similar, but since we don't have a browser of course, we can't have the web APIs. because it's the browser who provides these. Instead we have multiple C ++ bindings and a so called thread pool. In short Node.js is a different JavaScript runtime. CHECH_OUT_IMAGE-5

/////////////////////////////////////////////
/////// Execution Contexts and The Call Stack

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
/////// Scope and the Scope Chain

// Second component of a execution context is Scope Chain.

//// What is Scoping ?
// --> Scoping controls how our program's variables are organized and accessed by the JavaScript engine. So basically scoping asks the question, where do variables live? Or where can we access a certain variable and where not?

///// What is Lexical Scoping ?
// --> In JavaScript, we have something called lexical scoping. And lexical scoping means that the way variables are organized and accessed is entirely controlled by the placement of functions and of blocks (if-else blocks, for loops) in the programs code.

// FOR EXAMPLE: A function that is written inside another function has access to the variables of the parent function.

// So again, variable scoping is influenced by where exactly we write our functions and code blocks.

//////// Now, What is scope itself ?
// --> Scope is the place or space or environment in our code where variables are declared.

// In the case of functions, that is the variable environment which is stored in the Functions Execution Context.

///// what's the difference between scope and variable environment?
// --> For the case of functions, it's basically the same.

/////// What is the scope of a variable ?
// --> So the scope of a variable is basically the entire region of our code, where a certain variable can be accessed.

////// The 3 types of scope:
// --> In JavaSciprt there is Global Scope, Function Scope and Block Scope(ES6).

// As we already know Scope is the place in our code where variables are declared. And when i say variables, the exact thing is true for functions as well.
// Because, in the end, functions are just values that are stored in variables.

/////// 1st [GLOBAL SCOPE]: the global scope is for top level code. Meaning this is for variables that are declared outside of any function or block.

// These variables will be accessible everywhere in our program, in all functions and all blocks.

/////// 2nd [FUNCTION SCOPE]: Each and every function creates a scope. And the variables declared inside that function scope are only accessible inside that function. This is also called a LOCAL SCOPE. So, outside of the function, the variables are not accessible at all.

// Again, this is technically the same as the functions variable environment inside the function execution context, but we still need to give it the name of scope in this context, because blocks also creates scopes. However there is nothing as block execution context.

// Traditionally, only functions used to create scopes in JavaScript. But starting in ES6, blocks also creates scopes now. And with blocks, we mean everything that is between curly braces, such as the block of an if statement or a for loop.

/////// 3rd [BLOCK SCOPE]: So just like with functions, variables declared inside a block are only accessible inside that block and not outside of it.

// Now, the big difference is that block scopes only apply to variables declared with let or const. Means, only let and const variables are restricted to the block in which they were created. This is why we say that let and const variables are block scoped.

//// What about var declared variables?
// --> If we have a var declared variable inside of a block that variable would still be accessible outside of the block, and would be scoped to the current function or to the global scope.

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

///////////////////////////////////////////
/////////////// Scoping in Practice

// Watch the video again if you have any doubts.

///////////////////////////////////////////
///////// Variable Environment_ Hoisting and The TDZ

//// How Variables are created in JavaScript?

// So, In javaScript we have a mechanism called hoisting. Hoisting makes some types of variables accessible/usable in the code before they are actually declared in the code.
// Now, many people simply define hoisting by saying that variables are magically lifted or moved to the top of their scope. For example, to the top of a function.
// And that is actually what hoisting looks like on the surface. But behind the scenes that's in fact not what happens.
// Instead, behind the scenes before execution code is scanned for variable declarations. A new property is created in the variable environment object. And that's how hoisting really works.

/// Now, hoisting does not work the same for all variable types.
