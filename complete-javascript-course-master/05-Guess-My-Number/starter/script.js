'use strict';

/////////////////////////////////////////////////
//////// 003 Project #1_Guess My Number! ////////
/////////////////////////////////////////////////

// how to select an element in javaScript
//console.log(document.querySelector('.message').textContent);
// O/P: Start guessing... ; Which is a text content of this element.

// so, this querySelector is a method that's available on the document object.

// when we have multiple . operators, they are executed from left to right.

// So, this is how to establish this connection between our code and the user interface. So in other words, the HTML document that's being displayed in the browser.

/////////////////////////////////////////////////
//// 004 What's the DOM and DOM Manipulation ////
/////////////////////////////////////////////////

// DOM Manipulation is the technical term for JavaScript interacting with a webpage.

// DOM stands for Document Object Model, and it is, basically, a structured representation of HTML documents.

// The DOM allows us to use JavaScript to access HTML and styles in order to manipulate them. For example, we will be able to change text, to change HTML attributes and also to change CSS styles from our JavaScript.

// So we can say that DOM is basically a connection point between HTML documents and JavaScript code. the DOM is automatically created by the browser as soon as the HTML page loads. And it's stored in a tree structure.

// In this tree, each HTML element is one object.

/////////////////////////////////////////////////
//// 005 Selecting and Manipulating Elements ////
/////////////////////////////////////////////////

/*
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 23;
document.querySelector('.score').textContent = 19;

document.querySelector('.guess').value = 24;
console.log(document.querySelector('.guess').value);
*/

/////////////////////////////////////////////////
/////////// 006 Handling Click Events ///////////
/////////////////////////////////////////////////

// Let's now make our application do something  when we click on the Check button.

// So this is going to be the first time that our code reacts to something that happens in the DOM.

// for that, we need to use an event listener.

// Now, an event is something that happens on the page. For example, a mouse click, or a mouse moving, or a key press, or many other events.

// Then, with an event listener, we can wait for a certain event to happen, and then react to it.
/*
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  }
});

// Explanation: let's say guess has a value of 34 that means guess is true but in the condition we put negation(not !) before guess. Which means if guess is a falsy value and because of the negation operator false will become true and that's why the code will get executed. On the contrary, if guess has a value which means guess is a truthy value and the negation operator will make it a false that's why the code will not get executed.

// Simple Explanation: In the condition, if there is no guess then just  print to the message element that there is no number.
*/

/////////////////////////////////////////////////
//////// 007 Implementing the Game Logic ////////
/////////////////////////////////////////////////

/*
// Our Secret number.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 10;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 Game Over!';
      document.querySelector('.score').textContent = 0;
      console.log(score);
    }
  }
});
*/

/////////////////////////////////////////////////
///////// 008 Manipulating CSS Styles ///////////
/////////////////////////////////////////////////

/*
// Our Secret number.
const secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;

let score = 20;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    // Manipulating with CSS (inline)
    document.querySelector('body').style.backgroundColor = '#FF0303';
  }
  // When we figure out the correct number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    
    /// Manipulating with CSS (inline) ///
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }
  // When the input value is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      // Manipulating with CSS (inline)
      document.querySelector('body').style.backgroundColor = '#ff1022';
    }
  }
  // When the input value is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      // Manipulating with CSS (inline)
      document.querySelector('body').style.backgroundColor = '#ff1022';
    }
  }
});
*/

// The most important thing to remember --->
// To use the Style property we specify the CSS property. And we need to specify that property in the Camel case notation in case there is two words. Then the value always needs to be a string. So that's all you need to know in order to change Styles.

///////////////////////////////////////
// 009 Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

///// Solution: /////
/*
// Our Secret number generator code
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 10;
let highScore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
    // Manipulating with CSS (inline)
    document.querySelector('body').style.backgroundColor = '#FF0303';
  }
  // When we figure out the correct number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number';
    document.querySelector('.number').textContent = secretNumber;
    // Manipulating with CSS (inline)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Implementing High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  // When the input value is too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      // Manipulating with CSS (inline)
      document.querySelector('body').style.backgroundColor = '#ff1022';
    }
  }
  // When the input value is too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      // Manipulating with CSS (inline)
      document.querySelector('body').style.backgroundColor = '#ff1022';
    }
  }
});

// Instruction to reset the game when we click on the again button
document.querySelector('.again').addEventListener('click', function () {
  // First step - restore initial values of these variables
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Second step - Restore the initial conditions of the message, number, score and guess input field
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';

  // Third step - restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
*/
/*
  A Simple Solution to Refresh the webpage using javascript built-in mehtod

  // The location.reload() method is a built-in method in JavaScript that reloads the current webpage.
  location.reload(true);

});
*/

/////////////////////////////////////////////////
///////// 010 Implementing Highscores ///////////
/////////////////////////////////////////////////

// Check the else if (guess === secretNumber) block for the answer. 😊

////////////////////////////////////////////////
// 011 Refactoring Our Code_The DRY Principle //
////////////////////////////////////////////////

// We do refactoring to improve the code and to eliminate duplicate code

/*
// Our Secret number generator code
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 10;
let highScore = 0;
// created display function to follow the DRY (Don't Repeat Yourself) principle
const displayMessage = function (message) {
  return (document.querySelector('.message').textContent = message);
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
    // Manipulating with CSS (inline)
    document.querySelector('body').style.backgroundColor = '#FF0303';
  }
  // When player figures out the correct number
  else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉 Correct Number';
    displayMessage('🎉 Correct Number');
    document.querySelector('.number').textContent = secretNumber;
    // Manipulating with CSS (inline)
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // Implementing High Score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      displayMessage(guess > secretNumber ? '📈 Too High' : '📉 Too Low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 You lost the game!';
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
      // Manipulating with CSS (Inline)
      document.querySelector('body').style.backgroundColor = '#ff1022';
    }
  }
});

// Instruction to reset the game when we click on the again button
document.querySelector('.again').addEventListener('click', function () {
  // First step - restore initial values of these variables
  score = 10;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Second step - Restore the initial conditions of the message, number, score and guess input field
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('💭 Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = ' ';

  // Third step - restore the original background color (#222) and number width (15rem)
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
});
*/
