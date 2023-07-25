'use strict';

//////////// Coding Challenge 01 ///////////////
/*
Given an array of forecasted maximum temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK 😀
*/

// 1) Understanding the problem
// - Array transformed to string separated by ...
// - What is the X days? Answer: index + 1

// 2) Breaking up into subproblems
// - Transform array into string
// - Transform each element to string with ºC
// - Strings needs to contain day (index + 1)
// - Add ... between elements and start and end of string
// - Log string to console

// Print this:  "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + ` ${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log(`... ${str}`);
};

printForecast(data1);
printForecast(data2);
*/

// Explanation:
/*
when we calculated the average of a number. We started by adding all the values of the array using a loop, right. And we kept adding them, to an accumulator variable that was called sum, right. So the sum started at zero, and let's say we had an array of two, three, four. [2, 3, 4] and the calculaltion, 2+3=5+4=9.

And so in the first iteration, that sum was then updated to two. Then in the second iteration, it was updated to two plus three equals five. And then in the last iteration, it was updated to five, which was the current sum plus four equal nine. And so that's how we end up with the sum of all of these values.

now with the string, we can actually do the exact same thing. So here we will also have an accumulator, a variable essentially, which is gonna be called string. So let string. And instead of starting with zero, we will start with the equivalent of zero, but for strings, which is the empty string.
*/
