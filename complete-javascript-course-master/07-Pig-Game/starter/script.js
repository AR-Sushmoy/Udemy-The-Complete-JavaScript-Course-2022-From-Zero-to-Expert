'use strict';
/////////////////////////////////////////
//////// 015 PROJECT #3_ Pig Game

/*
// Selecting elements
const score0El = document.getElementById('score--0'); // this way we can catch a ID.
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
*/

/*
console.log(typeof score0El.textContent); // output: string
*/

/////////////////////////////////////////
///////// 016 Rolling the Dice

/*
// Selecting elements
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let currentScore = 0; // we started at zero and it needs to be a let beacuse we will keep updating it.

// this variable currentScore can not be inside of the eventListener function because then it would be set to zero each time that we clicked the button.

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  //   console.log(dice);

  // 2. Display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    // console.log(currentScore);
    current0El.textContent = currentScore; // CHANGE LATER, because in the future, we will need to display this current score at the current player and not always add player number one or player number two. but for now we just want this functionality work.
  } else {
    // Switch to next player
  }
});
*/

////////////////////////////////////////////
//////// 017 Switching the Active Player

// In this lecture we're gonna be concerned with switching from one active player to another one.

/*
// Selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

let activePlayer = 0; // Since we start with the first player we set it to 0 because remember player1 is player--0 and player2 is player--1.

// Explanation: The reason is that we will store the final scores of both players in an array

const scores = [0, 0]; // index 0 is for the final score for player1 and index 1 is for the final score for player2.

// Rolling dice functoinality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  // 2. Display Dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to the current score
    currentScore += dice;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore; // So, the ID name is gonna be either current--0 for player1 or current--1 for player2. we've used the variable activePlayer basically to build this ID name.

    // This is a very handy trick of building the ID name dynamically.
  }
  // Whenever a player rolls a one we'll enter the else block. This means when a dice is not a one then the dice gets added to the currentScore variable but if we happen to roll a 1, then we lose all our score and it is the next players round.

  // In the previous lecture, we implemented this functionality of adding the dice value to the currentScore variable but only as the player1.

  // But now we need to make this work for both player1 and player2.

  // And in order to do that, we actually need to keep track of which player is actually the active player in the moment that the dice button was clicked. Basically we need to know which player is right now playing. By right now means whenever the button is clicked.

  // So, We will create another variable which will hold exactly that. So, it will hold 0, if the current player is player--0 and it will hold 1 if the current player is player--1. At line 60.
  else {
    // Switch to next player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0; // This way we'll be able to change the activePlayer value from 0 to 1 or from 1 to 0.
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    // What toggle() will do is that, it will add the class if it is not there and if it is there, it will remove it.

    // Since we start with the player active class only on one element then toggling both at the same time will ensure that it's only ever on one of the elements at once.
  }
});
*/
////////////////////////////////////////////
//////// 018 Holding Current Score

// At line 68: To store the current score in the final score we are using this scores array.

// sroces[0] means player1 and scores[1] means player2.

// Now, we can actually use this activePlayer variable to store the current score of the current players final score.

/*
let playing = true;

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}
// Above created this function sperately because we are using this same program twice in two buttons. Usually, when we are refactoring something than there is many times like a small thing that changes in the code. Then it's very useful to have a parameter so that when we call the function, we can specify what changes. But here nothing changes all we want to do is to simply repeat this code.

// And so we don't need any parameters and we don't need to return anything, This is simply just a reusable piece of code.

// Rolling dice functoinality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // Basically, all of this logic inside that we have here should only be executed if we are playing. Playing itself is already a boolean.

    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's final score

  if (playing) {
    scores[activePlayer] += currentScore; // This stores the current score to the scores Array at index depending on the activePlayer variable.
    // let's say current player is player1 which means activePlayer variable is at 0. So, it workes like this, scores[0] = scores[0] + currentScore;

    // Now let's display it
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check if player's score is greater or equal than 100
    // Finish the game
    if (scores[activePlayer] >= 30) {
      playing = false; // Okay, now this in itself will,  of course not yet do anything. So we only defined whether the game is playing or not, but none of our code is reacting to that. So remember that we only want to be able to click on these buttons once we are playing. And so let's define that At Line: 166 with a condition.
      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to the next player
      switchPlayer();
    }
  }
  // At this stage the first problem is that it still showes the dice image, we have to get rid of that.

  // But, Even worse is that we can still keep playing the game after a player wins the game. That we need to solve.

  // The solution is to create a variable that hosts the state of the game. Basically means if we are still playing or not.

  // So, this is gonna be a state variable which kinds of tells us the condition of a system. In this case the condition will be if the game playing or not?

  // And, so if the game is playing then we can click these buttons and then everything will work as normally. But then as soon as the game is finished we will say that the game is no longer playing and we can no longer click on these buttons.

  // Let's declare a state variable named playing and set it to ture At Line: 120 and then when we finish the game we'll set playing to false.
});
*/

////////////////////////////////////////////
////////  019 Resetting the Game

// Final Program for this project: (Without any notes)

// Selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore, activePlayer, playing, scores;

const init = function () {
  // Starting Conditions
  diceEl.classList.add('hidden');

  currentScore = 0;
  activePlayer = 0;
  playing = true;
  scores = [0, 0];

  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
};

init();

function switchPlayer() {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  player0El.classList.toggle('player--active');
  player1El.classList.toggle('player--active');
}

// Rolling dice functoinality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display Dice
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;

    // 3. Check for rolled 1
    if (dice !== 1) {
      // Add dice to the current score
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  // 1. Add current score to active player's final score

  if (playing) {
    scores[activePlayer] += currentScore;

    // Now let's display it
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // 2. check is player's score is greater or equal than 100
    // Finish the game
    if (scores[activePlayer] >= 30) {
      playing = false;

      diceEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // 3. Switch to the next player
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);

// Basically, we refactor our code in this lecture to the fullest.

// N.B: Re-watch the video for better explanation for this lecture, notes won't do it justice. 😁
