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

// console.log(populations.length === 4);

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

/*if (neighbours.includes("Germany") !== true)*/
// This condition says, if neighbours array has germany element this statement is false then execute the string.

// - Another way of doing the same thing
if (!neighbours.includes('Germany'))
  // This condition says, if neighbours array does not(!)  have germany element then execute the string.

  console.log('Probably not a central European country :D');

neighbours[neighbours.indexOf('Italy')] = 'Republic of italy';

console.log(neighbours);

/////// Lecture: Introduction to Objects ///////
/*
const myCountry = {
  country: 'Ireland',
  capital: 'Dublin',
  language: 'Irish',
  population: 5.033,
  neighbours: ['Wales', 'Italy', 'Finland', 'Spain'],
};
*/

/////// Lecture: Dot vs. Bracket Notation ///////
/*
console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neibouring countries and a capital called ${myCountry.capital}.`
);

myCountry.population += 2;

console.log(myCountry.population);

myCountry['population'] -= 2;

console.log(myCountry.population);
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
  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};

// myCountry.describe();
// myCountry.checkIsland();

// console.log(myCountry.isIsland);
// console.log(myCountry);

/////////// Lecture: Iteration: The for Loop ////////////

for (let i = 1; i <= 50; i++) {
  // console.log(`Voter number ${i} is currently voting`);
}

/// Lecture: Looping Arrays, Breaking and Continuing ///

const percentageOfWorldNew = function (population) {
  const percentage = (population / 7900) * 100;
  return parseFloat(percentage).toFixed(2);
};

const population = [169.4, 273.6, 220.9, 145.93];
const percentage2 = [];

for (let i = 0; i < population.length; i++) {
  percentage2.push(percentageOfWorldNew(population[i]));
}

console.log(percentage2);

/// Lecture: Looping Backwards and Loops in Loops ///

const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) {
    // console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
  }
}

////////////// Lecture: The while Loop ///////////////
const percentage3 = [];
let i = 0;
while (i < population.length) {
  percentage3.push(percentageOfWorldNew(population[i]));
  i++;
}
console.log(percentage3);
