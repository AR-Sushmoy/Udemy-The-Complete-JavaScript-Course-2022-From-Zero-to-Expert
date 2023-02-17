"use strict";

//////////// Coding Challenge 01 ///////////////

/*
const calcAvgerage = (scoreOne, scoreTwo, scoreThree) =>
  (scoreOne + scoreTwo + scoreThree) / 3;

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins wins 🏆 (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins 🏆 (${avgKoalas} vs ${avgDolphins})`);
  } else {
    console.log("No one wins yet");
  }
};

// Test 1
let avgScoreDolphins = calcAvgerage(44, 23, 71);
let avgScoreKoalas = calcAvgerage(65, 54, 49);

console.log(avgScoreDolphins, avgScoreKoalas);

checkWinner(avgScoreDolphins, avgScoreKoalas);

// Test 2
avgScoreDolphins = calcAvgerage(85, 54, 41);
avgScoreKoalas = calcAvgerage(23, 34, 27);

console.log(avgScoreDolphins, avgScoreKoalas);

checkWinner(avgScoreDolphins, avgScoreKoalas);
*/

//////////// Coding Challenge 02 ///////////////

/*
const calcTip = function (bill) {
  // if (bill >= 50 && bill <= 300) {
  //   return (bill * 15) / 100;
  // } else {
  //   return (bill * 20) / 100;
  // }

  // efficient way of doing this:
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

///// Arrow function
// const calcTip = bill => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 555, 44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips);
console.log(totals);
*/

//////////// Coding Challenge 03 ///////////////

/*
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  clacBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  clacBmi: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

console.log("Mark's BMI = ", mark.clacBmi());
console.log("John's BMI = ", john["clacBmi"]());

mark.bmi > john.bmi
  ? console.log(
      `${mark["fullName"]} BMI (${mark.bmi}) is higher than ${
        john["fullName"] + "'s"
      } (${john["bmi"]})`
    )
  : console.log(
      `${john["fullName"]} BMI (${john.bmi}) is higher than ${
        john["fullName"] + "'s"
      } (${mark.bmi})`
    );
*/

//////////// Coding Challenge 04 ///////////////
/*
// Tip Calculator Function
const calcTip = (bills) =>
  bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}

console.log(bills, tips, totals);

// Bonus Section Solution
const calcAvg = function (arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // sum = sum + arr[i]
  }
  return sum / arr.length;
};

console.log(`The Average is = ${calcAvg(totals)}`);
console.log(calcAvg([1, 2, 3]));
*/
