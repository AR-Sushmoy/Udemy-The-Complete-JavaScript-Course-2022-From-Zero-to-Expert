'use strict';

/////////// Lecture: Functions ///////////////
const describeCountry = function (country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
};

// console.log(describeCountry("Bangladesh", 120, "Dhaka"));

//// Lecture: Function Declarations vs. Expressions /////

// Function Declaration
function percentageOfWorld1(country, population) {
  const percentage = (population / 7900) * 100;
  const result = ` ${country} has ${population} million people, so it's about ${parseFloat(
    percentage
  ).toFixed(2)}% of the world population.\n`;
  return result;
}

// Here in the percentage variable i've used to print only 2 decimal places at the end of the whole decimal number.
// parseFloat(percentage).toFixed(2)

let countryOne = percentageOfWorld1('Bangladesh', 169.4);
let countryTwo = percentageOfWorld1('Japan', 125.7);
let countryThree = percentageOfWorld1('Australia', 25.9);

// console.log(countryOne, countryTwo, countryThree);

// Function Expression
const percentageOfWorld2 = function (country, population) {
  const percentage = (population / 7900) * 100;
  const result = ` ${country} has ${population} million people, so it's about ${parseFloat(
    percentage
  ).toFixed(2)}% of the world population.\n`;
  return result;
};
countryOne = percentageOfWorld1('Finland', 5.541);
countryTwo = percentageOfWorld1('Ireland', 5.033);
countryThree = percentageOfWorld1('Germany', 83.2);

// console.log(countryOne, countryTwo, countryThree);

/////////// Lecture: Arrow Functions ///////////////

const percentageOfWorld3 = (country, population) => {
  const percentage = (population / 7900) * 100;
  const result = ` ${country} has ${population} million people, so it's about ${parseFloat(
    percentage
  ).toFixed(2)}% of the world population.\n`;
  return result;
};

countryOne = percentageOfWorld1('Indonesia', 273.6);
countryTwo = percentageOfWorld1('Pakistan', 220.9);
countryThree = percentageOfWorld1('Russia', 145.93);

// console.log(countryOne, countryTwo, countryThree);

////// Lecture: Functions Calling Other Functions //////

const percentageOfWorld = function (population) {
  const percentage = (population / 7900) * 100;
  return parseFloat(percentage).toFixed(2);
};

const describePopulation = function (country, population) {
  const calcPercentage = percentageOfWorld(population);
  return `${country} has ${population} million people which is about ${calcPercentage}% of the world`;
};

// console.log(describePopulation("Bangladesh", 169.4));

////// Lecture: Introduction to Arrays //////

const populations = [169.4, 273.6, 220.9, 145.93];

// populations.length === 4 ? console.log(true) : console.log(false);

const percentages = [
  percentageOfWorld(populations[0]),
  percentageOfWorld(populations[1]),
  percentageOfWorld(populations[2]),
  percentageOfWorld(populations[3]),
];

// console.log(percentages);

/////// Lecture: Basic Array Operations (Methods) ///////

const neighbours = ['Poland', 'France', 'Italy', 'Greece'];

neighbours.push('Utopia');

neighbours.pop();
/*
if (neighbours.includes("Germany") !== true)
  console.log("Probably not a central European country :D");

console.log(neighbours.indexOf("Poland"));

if (neighbours.indexOf("Poland") === 0) {
  neighbours[0] = "Republic of Poland";
  console.log(neighbours[0]);
}
*/

/////// Lecture: Introduction to Objects ///////

// const myCountry = {
//   country: 'Ireland',
//   capital: 'Dublin',
//   language: 'Irish',
//   population: 5.033,
//   neighbours: ['Wales', 'Italy', 'Finland', 'Spain'],
// };

/////// Lecture: Dot vs. Bracket Notation ///////
/*
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neibouring countries and a capital called ${myCountry.capital}.`
);

let x = myCountry.population + 2;

console.log(
  `${myCountry.country} has ${x} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neibouring countries and a capital called ${myCountry.capital}.`
);

x = myCountry['population'] - 2;

console.log(
  `${myCountry.country} has ${parseFloat(x).toFixed(3)} million ${
    myCountry.language
  } speaking people, ${
    myCountry.neighbours.length
  } neibouring countries and a capital called ${myCountry.capital}.`
);
*/

/////////// Lecture: Object Methods ////////////

const myCountry = {
  country: 'Ireland',
  capital: 'Dublin',
  language: 'Irish',
  population: 5.033456,
  neighbours: ['Wales', 'Italy', 'Finland', 'Spain'],
  describe: function () {
    console.log(
      `${this.country} has ${parseFloat(this.population).toFixed(3)} million ${
        this.language
      } speaking people, ${
        this.neighbours.length
      } neibouring countries and a capital called ${this.capital}.`
    );
  },
};

myCountry.describe();
