/* Coding Challenge 01 */

//// 2nd Attempt [20-07-2023] ////

// const markHeight = 1.69;
// const markWeight = 78;

// let markBMI = markWeight / markHeight ** 2;

// const johnHeight = 1.95;
// const johnWeight = 92;

// let johnBMI = johnWeight / johnHeight ** 2;

// const markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);

//// 1st Attempt ////

// const massMark = 78;
// const massJohn = 92;

// const heightMark = 1.69;
// const heightJohn = 1.95;

// const markBmi = massMark / heightMark ** 2;
// const johnBmi = massJohn / heightJohn ** 2;
// const markHigherBMI = markBmi > johnBmi;

// console.log(markBmi, johnBmi, markHigherBMI);

/* Coding Challenge 02 */

//// 2nd Attempt [20-07-2023] ////

// const markHeight = 1.69;
// const markWeight = 78;
// const johnWeight = 92;
// const johnHeight = 1.95;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;

// if (markHigherBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }

//// 1st Attempt ////

// const massMark = 78;
// const massJohn = 92;

// const heightMark = 1.69;
// const heightJohn = 1.95;

// const markBMI = massMark / heightMark ** 2;
// const johnBMI = massJohn / heightJohn ** 2;

// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI (${markBMI}) is higher than john's (${johnBMI})!`);
// } else {
//   console.log(`John's BMI (${johnBMI}) is higher than mark's (${markBMI})!`);
// }

/* Coding Challenge 03 */

//// 2nd Attempt [21-07-2023] ////

// const avgScoreDolphins = (97 + 112 + 101) / 3;
// const avgScoreKoalas = (109 + 95 + 106) / 3;

// if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Dolphins wins the competition 🏆");
// } else if (avgScoreKoalas > avgScoreDolphins && avgScoreKoalas >= 100) {
//   console.log("Koalas wins the competition 🏆");
// } else if (
//   avgScoreDolphins === avgScoreKoalas &&
//   avgScoreDolphins >= 100 &&
//   avgScoreKoalas >= 100
// ) {
//   console.log("It is a draw");
// } else {
//   console.log("None of the team has scroed a average of 100 yet");
// }
// console.log(avgScoreDolphins, avgScoreKoalas);

//// 1st Attempt ////

// const avgScoreDolphins = (97 + 112 + 81) / 3;
// const avgScoreKoalas = (109 + 95 + 85) / 3;
// console.log(avgScoreDolphins, avgScoreKoalas);
// if (
//   avgScoreDolphins === avgScoreKoalas &&
//   avgScoreDolphins >= 100 &&
//   avgScoreKoalas >= 100
// ) {
//   console.log("It's a Draw");
// } else if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins >= 100) {
//   console.log("Team Dolphins Win the Trophy!");
// } else if (avgScoreDolphins > avgScoreKoalas && avgScoreDolphins < 100) {
//   console.log(
//     "Team Dolphins are leading. However they have to hit the minimum score of 100 first in order to win"
//   );
// } else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas >= 100) {
//   console.log("Team koalas Win the Trophy!");
// } else if (avgScoreDolphins < avgScoreKoalas && avgScoreKoalas < 100) {
//   console.log(
//     "Team Koalas are leading. However they have to hit the minimum score of 100 first in order to win"
//   );
// } else {
//   console.log("No Team Wins the Trophy");
// }

/* Coding Challenge 04 */

//// 2nd Attempt [21-07-2023] ////
/*
const bill = 40;

const tip1 = bill * (15 / 100);
const tip2 = bill * (20 / 100);

const finalBill1 = bill + tip1;
const finalBill2 = bill + tip2;

console.log(
  `The bill was ${bill}, the tip was ${
    bill >= 50 && bill <= 300 ? tip1 : tip2
  }, and the total value ${bill >= 50 && bill <= 300 ? finalBill1 : finalBill2}`
);
*/

//// 1st Attempt ////
/*
const bill = 275;

const tip1 = bill * (15 / 100);
const tip2 = bill * (20 / 100);

const finalBill1 = bill + tip1;
const finalBill2 = bill + tip2;

bill >= 50 && bill <= 300
  ? console.log(
      `The bill was ${bill}, the tip was ${tip1}, and the total value ${finalBill1}`
    )
  : console.log(
      `The bill was ${bill}, the tip was ${tip2}, and the total value ${finalBill2}`
    );


// Jonas Solution

const bill = 430;

const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;

console.log(
  `The bill was ${bill}, the tip was ${tip}, and the total value is ${
    bill + tip
  }`
);
*/
