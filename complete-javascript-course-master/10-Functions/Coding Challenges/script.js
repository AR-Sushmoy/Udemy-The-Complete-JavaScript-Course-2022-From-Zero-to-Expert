'use strict';

//////////////////////////////////////////////////////
////////////// 010 Coding Challenge #1 ///////////////
//////////////////////////////////////////////////////

const poll = {
  question: 'What is your favorite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section
  answers: new Array(4).fill(0),

  /// TASK 01 (1.1): Get the answer
  registerNewAnswer() {
    const ansNum = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    /*
    if (typeof ansNum === 'number' && ansNum < this.answers.length) {
      if (ansNum === 0) {
        this.answers[0] += 1;
      } else if (ansNum === 1) {
        this.answers[1] += 1;
      } else if (ansNum === 2) {
        this.answers[2] += 1;
      } else if (ansNum === 3) {
        this.answers[3] += 1;
      }
    } else {
      console.log('Invalid Option!');
    }
    */

    /// TASK 01 (1.2): Register the answer
    typeof ansNum === 'number' &&
      ansNum < this.answers.length &&
      this.answers[ansNum]++;
    /**
     * EXPLANATION: Short circuting using the && operator: [We can achieve the same result]
     */

    /// TASK 04:
    this.displayResults();
    this.displayResults('string');
  },
  /// TASK 03:
  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

/// TASK 02:
document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

/// TASK 5 [Bonus]:
// My Solution:
/*
const newObj = {
  answers: [5, 2, 3],
};

const newObj1 = {
  answers: [1, 5, 3, 9, 6, 1],
};

const dispRes = poll.displayResults;

document
  .querySelector('.poll')
  .addEventListener('click', dispRes.bind(newObj, 'array'));

document
  .querySelector('.poll')
  .addEventListener('click', dispRes.bind(newObj1, 'string'));
*/

// Jonas Solution:
poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

/**
 * EXPLANATION: Inside the call() method We can literally create an object and define the 'this' keyword.
 */

//////////////////////////////////////////////////////
////////////// 010 Coding Challenge #2 ///////////////
//////////////////////////////////////////////////////

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.body.addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
