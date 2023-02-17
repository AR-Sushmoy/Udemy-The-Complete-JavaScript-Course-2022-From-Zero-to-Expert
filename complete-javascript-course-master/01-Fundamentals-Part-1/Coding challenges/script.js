/* Coding Challenge 01 */

// const massMark = 78;
// const massJohn = 92;

// const heightMark = 1.69;
// const heightJohn = 1.95;

// const markBmi = massMark / heightMark ** 2;
// const johnBmi = massJohn / heightJohn ** 2;
// const markHigherBMI = markBmi > johnBmi;

// console.log(markBmi, johnBmi, markHigherBMI);

/* Coding Challenge 02 */

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

// Bonus 2 [done] and did add a little bit extra porgramm

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

// My Solution and it works too
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
