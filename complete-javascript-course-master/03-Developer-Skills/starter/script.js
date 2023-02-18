// Remember, we're gonna use strict mode in all scripts now!
"use strict";
// const calcAge = (birthYear) => 2023 - birthYear;
// console.log(calcAge(2000));

// Node.js is a way of running JavaScript outside of the browser but also it's a way of running development tools just like the live server.

// npm is the Node package manager, which is a program to download tools.

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is the temperature amplitude? - Answer: It's the difference between the highest and the lowest temperatures in the array.
// - How to compute max and min temperature?
// - What's a sensor error? And what to do? - Answer: Probably to just ignore the sensor error.

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// Solution :

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  for (let i = 1; i < temps.length; i++) {
    if (temps[i] > max) {
      max = temps[i];
    }
  }
  return temps;
};

console.log(calcTempAmplitude(temperatures));
