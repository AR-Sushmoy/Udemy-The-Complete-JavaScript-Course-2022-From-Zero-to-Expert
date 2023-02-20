// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Node.js is a way of running JavaScript outside of the browser but also it's a way of running development tools just like the live server.

// npm is the Node package manager, which is a program to download tools.

////////// Using Google, StackOverflow and MDN //////////
// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."
/*
const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5]; 
*/
// 1) Understanding the problem
// - What is the temperature amplitude? - Answer: It's the difference between the highest and the lowest temperatures in the array.
// - How to compute max and min temperature?
// - What's a sensor error? And what to do? - Answer: Probably to just ignore the sensor error.

// 2) Breaking up into sub-problems
// - Find max value in temp array ✅
// - Find min value in temp array ✅
// - Subtract min from max (amplitude) and return it✅
// - How to ignore errors?✅

// Solution to first sub-problem:
/*
const calcAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
  }
  console.log(max);
};

calcAmplitude([34, 67, 21]);
*/

// Solution to second sub-problem:
/*
const calcAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
};

calcAmplitude([34, 67, 21, 9, 10, 2]);
*/

// Solution to third and Fourth sub-problem:
/*
const calcAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  const amp = max - min;
  return amp;
};

console.log(calcAmplitude(temperatures));
*/

// PROBLEM 02:
// Functions should now receive 2 arrays of temps

// 1) Understanding the problem:
// - With 2 arrays, should we implement our function twice? NO! You should merge two arrays.

// 2) Breaking up into sub-problems:
// - How to merge 2 arrays

// Solution:
/*
const calcAmplitudeNew = function (t1, t2) {
  let temps = t1.concat(t2); // VERY IMPORTANT
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(temps);
  console.log(max, min);
  const amp = max - min;
  return amp;
};

console.log(calcAmplitudeNew([2, 43, 21, 4], [23, 22, 20, 45]));
*/

////// Debugging with the Console and Breakpoints //////

// Let's fix a very simple bug, using the console.

// Suppose that in our Smart Thermometer, that we were working on before, we need to do some measurements in a unit called Kelvin. which is the absolute temperature. And a conversion to Kelvin is pretty easy. So all we have to do is to add 273, to the temperature in degrees Celsius.
/*
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',

    // c) FIX the BUG
    value: Number(prompt('Degree celcius: ')),
  };
  // There is another way of showing objects in the console, which is really handy sometimes.

  // Found the BUG here
  console.table(measurement); // So console.table, gives us this nicely formatted table with value data type. For bigger object this can be quite helpful.

  console.log(measurement['value']);
  const kelvin = measurement['value'] + 273;
  return kelvin;
};

console.log(measureKelvin());
*/
// Process of Debugging:
// a) Identify the BUG
// b) Find the BUG
// - Since, the bug appears in the converted value, which is the value property, and this one is derived from the measurement['value'] let's start by inspecting that measurement value in the console to see if something is wrong there.

// In the console it shows the value is actually in string as we learned before that prompt method truns everything to strings. And the plus operator (+) when it sees a string it will convert both operands to a string, and then concatenate the strings.

// This was a very simple example, of just using the console, in order to hunt down a bug, and then fix it.

//// Now let's take it to the next level, and learn how to use a debugger, in Google Chrome.
/*
const calcAmplitudeBug = function (temps) {
  let max = 0;
  let min = 0; // Here is the BUG
  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== 'number') continue;
    if (temps[i] > max) max = temps[i];
    if (temps[i] < min) min = temps[i];
  }
  console.log(max, min);
  const amp = max - min;
  return amp;
};

// A) IDENTIFY
console.log(calcAmplitudeBug([3, 5, 1, 9, 4, 5]));
*/
// Watch the Video to understand Debugging clearly.
