"use strict";

//// LECTURE: Values and Variables ////

/*
let country = "Bangladesh";
let continent = "Asia";
let population = 171186372;

console.log(country, continent, population);
*/

//// LECTURE: Data Types ////

/*
let isIsland = false;
let language;

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
*/

//// LECTURE: let, const and var ////

/*
const language = "bangla";
const country = "Bangladesh";
const continent = "Asia";
const isIsland = false;
let population = 171186372;

console.log(country, continent, population, language);

console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);
*/

//// LECTURE: Basic Operators ////

/*
console.log(population / 2);
population++;

let finishPopulation = 6000000;

if (population > finishPopulation) console.log("YES");

let avgPopulation = 33000000;

if (population < avgPopulation) {
  console.log("Less");
} else {
  console.log("More");
}

const description =
  "Portugal is in Europe, and its 11 million people speak portuguese";

console.log(description);
*/

//// LECTURE: Strings and Template Literals ////

/*
const description = `Portugal is in Europe, and its 11 million people speak portuguese`;

console.log(description);
*/

//// LECTURE: Taking Decisions: if / else Statements ////

/*
let population = 171186372;

if (33000000 < population) {
  console.log("Portugal's population is above average");
} else {
  console.log("Portugal's population is 22 million below average");
}
*/

//// LECTURE: Type Conversion and Coercion ////

/*
// 4
// '617'
// 23
// false
// 1143

console.log("9" - "5");
console.log("19" - "13" + "17");
console.log("19" - "13" + 17);
console.log("123" < 57);
console.log(5 + 6 + "4" + 9 - 4 - 2);
*/

//// LECTURE: Equality Operators: == vs. === ////

/*
const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);

if (numNeighbours === 1) {
  console.log("only 1 border!");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("No borders?!");
}
*/

//// LECTURE: Logical Operators ////

/*
let population = 10352042;
const isIsland = true;
const language = "Portuguese";

if (language === "English" && population < 50000000 && !isIsland) {
  console.log("You should live in Portugal :)");
} else {
  console.log("Portugal does not meet your criteria :(");
}
*/

//// LECTURE: The switch Statement ////

/*
let language = prompt("what's your language ?");

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("Most number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
}
*/

//// The Conditional (Ternary) Operator ////

/*
let population = 10;

// population > 33
//   ? console.log("Portugal's population is above average")
//   : console.log("Portugal's population is below average");

console.log(`Country's population is ${population > 33 ? "above" : "below"} average`);
*/
