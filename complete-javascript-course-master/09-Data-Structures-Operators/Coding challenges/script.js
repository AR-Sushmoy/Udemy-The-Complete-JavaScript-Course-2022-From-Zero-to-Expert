"use strict";
//////////////////////////////////////////////////////
////////////// 010 Coding Challenge #1 ///////////////
//////////////////////////////////////////////////////
/*
We're building a football betting app (soccer for my American friends 😅)!
Suppose we get data from a web service about a certain game ('game' variable on next page). In this challenge we're gonna work with that data.

Your tasks:
1. Create one player array for each team (variables 'players1' and 'players2')

2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players

3. Create an array 'allPlayers' containing all players of both teams (22 players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.

Then, call the function again with players from game.scored

GOOD LUCK 😀
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
/*
// Task 01:
const [players1, players2] = game.players;

// Task 02: Bayern Munich (team 1)
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

// Task 03: allPlayers containing all players of both teams
// const [...allPlayers] = [...players1, ...players2]; // Same Output
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// Task 04:
const players1Final = [...players1, "Thiago", "Coutinho", "Perisic"];
console.log(players1Final);

// Task 05:
// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

// Task 06:

// Solution 1:
function printGoals(...playerNames) {
  for (let i = 0; i < playerNames.length; i++) {
    console.log(`Goal scored by ${playerNames[i]}`);
  }
  console.log(`Total Goals: ${playerNames.length}`);
}
printGoals("Davies", "Muller", "Lewandowski", "Kimmich");
printGoals(...game.scored);

// Solution 2:
const printGoals = function (...scoredPlayers) {
  for (const player of scoredPlayers) {
    console.log(player);
  }
  console.log(scoredPlayers.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// Task 07:
team1 < team2 && console.log("Team 1 wins the game");
team1 > team2 && console.log("Team 2 wins the game");
*/

/*
// Destructuring an object
const { team1: t1, team2: t2 } = game.odds;
console.log(t1, t2);

// Spread operator for copying an object. Creates a shallow copy
const h = { ...game.odds };
console.log(h);

// Rest pattern in an object
const { team1, ...restValues } = game.odds;
console.log(team1, restValues);
*/

//////////////////////////////////////////////////////
////////////// 015 Coding Challenge #2 ///////////////
//////////////////////////////////////////////////////

/*
Let's continue with our football betting app! Keep using the 'game' variable from
before.
Your tasks:
1. Loop over the game.scored array and print each player name to the console,
along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already
studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw"). Hint: Note how the odds and the game objects have the
same property names 😉
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this
game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}
GOOD LUCK 😀
*/

// Task 01:
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

// Task 02:
const odd = Object.values(game.odds);
// console.log(odd); // [11.33, 3.25, 6.5]

// Solution 1 (using the for loop):
/*
let sum = 0;
for (let i = 0; i < odd.length; i++) {
  sum += odd[i];
}
const avgOdd = sum / odd.length;
console.log(avgOdd);
*/

// Solution 2 (using the for-of loop):
/*
let sum = 0;
for (const i of odd) {
  sum += i;
}

const avgOdd = sum / odd.length;
console.log(avgOdd);
*/

// solution 3 (Using function):
/*
const averageOdd = function (array) {
  // initialize variable
  let sum = 0;
  let count = 0;

  // Iterate over the array using the for-of loop
  for (const el of array) {
    sum += el;
    count++;
  }

  // Returns the average
  // return sum / array.length;
  return sum / count;
};

console.log(averageOdd(odd));
*/

// Jonas Solution for Task 02:
let average = 0;
for (const x of odd) {
  average += x;
}
average /= odd.length;
console.log(average);

// Task 03:

// Solution 1:
/*
const oddEntries = Object.entries(game.odds);
console.log(oddEntries);

for (const [teamName, oddValue] of oddEntries) {
  const teamStr = teamName === "x" ? "draw" : `victory ${game[teamName]}`;

  console.log(`Odd of ${teamStr}: ${oddValue}`);
}
*/

// Solution 2:
const oddsEntries = Object.entries(game.odds);
for (const [team, values] of oddsEntries) {
  const teamStr = team !== "x" ? `Victory ${game[team]}` : "Draw";
  console.log(`Odd of ${teamStr}: ${values}`);
}

// Task 04 (Bonus):

// Solution 1:
/*
const scoredPlayers = [...game.scored];
console.log(scoredPlayers);

const scorers = {};

for (const player of scoredPlayers) {
  scorers[player] ? scorers[player]++ : (scorers[player] = 1);
}

console.log(scorers);
*/

// Solution 2:

const scorers = {};

for (const player of game.scored) {
  !scorers[player] ? (scorers[player] = 1) : scorers[player]++;
}
console.log(scorers);

//////////////////////////////////////////////////////
////////////// 015 Coding Challenge #3 ///////////////
//////////////////////////////////////////////////////
/*
Let's continue with our football betting app! This time, we have a map called 'gameEvents' (see below) with a log of the events that happened during the
game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

Your tasks:
1. Create an array 'events' of the different game events that happened (no
duplicates)
2. After the game has finished, is was found that the yellow card from minute 64
was unfair. So remove this event from the game events log.
3. Compute and log the following string to the console: "An event happened, on
average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over 'gameEvents' and log each element to the console, marking
whether it's in the first half or second half (after 45 min) of the game, like this:
[FIRST HALF] 17: ⚽GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽ GOAL"],
  [80, "⚽ GOAL"],
  [92, "🔶 Yellow card"],
]);

// Task 01:

const events = [...new Set(gameEvents.values())];

// Task 02:
gameEvents.delete(64);

// Task 03:
const time = [...gameEvents.keys()].pop();
console.log(time); // OUTPUT: 92
console.log(`An event happened, on
average, every ${time / gameEvents.size} minutes`);

// Task 04:
// My solution:
for (const [min, event] of gameEvents) {
  const logMessage =
    min <= 45
      ? `[First Half] ${min}: ${event}`
      : `[Second Half] ${min}: ${event}`;
  // console.log(logMessage);
}

// Jonas Solution:
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? "FIRST" : "SECOND";
  console.log(`[${half} HALF] ${min}: ${event}`);
}

//////////////////////////////////////////////////////
////////////// 015 Coding Challenge #4 ///////////////
//////////////////////////////////////////////////////

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to insert the elements), and conversion will happen when the button is pressed.

Test data (pasted to textarea, including spaces):
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure

Should produce this output (5 separate console.log outputs):
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

Hints:
§ Remember which character defines a new line in the textarea 😉
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working 😉
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀 
*/

const transformVariableNames = function (name) {
  const nameArr = name.split("_");
  const [firstPart, secondPart] = nameArr;
  return (
    firstPart.toLowerCase() +
    secondPart[0].toUpperCase() +
    secondPart.slice(1).toLowerCase()
  );
};

// console.log(transformVariableNames("Underscore_case"));
// console.log(transformVariableNames("first_name"));
// console.log(transformVariableNames("Some_Variable"));
// console.log(transformVariableNames("calculate_AGE"));
// console.log(transformVariableNames("delayed_departure"));

// Main Solution:

document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));
const btn = document.querySelector("button");

/* My Solution:
btn.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  for (const row of rows) {
    const nameArr = row.split("_");
    const [firstPart, secondPart] = nameArr;
    const final =
      firstPart.toLowerCase() +
      secondPart[0].toUpperCase() +
      secondPart.slice(1).toLowerCase();
    console.log(final.trim());
  }
});
*/

// Jonas Solution:
btn.addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");

  for (const [i, row] of rows.entries()) {
    const conversionLower = row.toLowerCase().trim().split("_");
    const [first, second] = conversionLower;
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20, " ")}${"🔥".repeat(i + 1)}`);
  }
});
