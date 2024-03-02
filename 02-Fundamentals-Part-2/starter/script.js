"use strict";

/*
// Activating the strict mode


let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 😁");


// const interface = true;
// const private = 'conca';
*/

/*
//////////////////////////////////////
// Function


// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0);
// console.log(fruitProcessor(5, 0));

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(fruitProcessor(2, 4));


function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const descPortugal = describeCountry('Portugal', 10, 'Lisbon');
const descGermany = describeCountry('Germany', 83, 'Berlin');
const descFinland = describeCountry('Finland', 6, 'Helsinki');

console.log(descPortugal, descGermany, descFinland);
*/

/*
////////////////////////////////
// Function Declarations and Expressions

// Function Declarations

// the function declarations
const populationOfWorld = 7900;
function percentageOfWorld1(population) {
    return population / populationOfWorld * 100;
}

const populationOfTheCountry = 1441;
console.log(`The percentage is ${percentageOfWorld1(populationOfTheCountry)}`);

// the function expression
const percentageOfWorld2 = function (population) {
    return population / populationOfWorld * 100;
}
console.log(`The percentage is ${percentageOfWorld2(populationOfTheCountry)}`);


// the arrow function
const percentageOfWorld3 = population => (population / populationOfWorld * 100);
console.log(`The percentage is ${percentageOfWorld3(populationOfTheCountry)}`);




function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = fruit => fruit * 4;
    const orangePieces = fruit => fruit * 4;

    const juice = `Juice with ${applePieces(apples)} pieces of apple and ${orangePieces(oranges)} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));
*/

/*
// Coding challenge 1 : using arrow function

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;


const checkWinner = (avgDolhins, avgKoalas) => {
    if (avgDolhins >= (2 * avgKoalas)) {
        console.log(`Dolphins win 🏆 (${avgDolhins} vs. ${avgKoalas})`);
        // return;
    }
    else if (avgKoalas >= (2 * avgDolhins)) {
        console.log(`Koalas win 🏆 (${avgKoalas} vs. ${avgDolhins})`);
    }
    else console.log('No team wins...🥲');
}

checkWinner(calcAverage(85, 54, 41), calcAverage(50, 34, 27));
*/

/////////////////////////////////////// DATA STRUCTURE ///////////////////////

// Array

/*
const friends = ['Jonas', 'Bob', 'Peter'];

const years = new Array(2000, 2001, 2002, 2003);


console.log(friends[0]);

console.log(friends[1]);
console.log(friends[friends.length - 1]);


const firstName = 'Dustin';
const dustin = [firstName, 'Lai', 2037 - 2003, 'Developer', friends];
console.log(dustin);


const calcAge = birthYeah => 2037 - birthYeah;

for (let i = 0; i < years.length; i++) {
    console.log(calcAge(years[i]));
}

*/

/// basic array operators method

// add eles
// const friends = ["Jonas", "Dustin", "Bob"];
// const newLength = friends.push("Michael"); //last
// friends.unshift("John"); // first

// console.log(friends);
// console.log(newLength);

// // remove eles
// const popped = friends.pop(); // last
// console.log(friends);
// console.log(popped);
// console.log(typeof popped);
// const first = friends.shift();
// console.log(friends);
// console.log(typeof first);

// console.log(friends.indexOf("Dustin"));

// // // check xem phan tu co trong mang hay khong

// console.log(friends.includes("Dustin")); // true
// console.log(friends.includes("Larria")); // false

// const calcTip = (bill) =>
//   bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// const b = [125, 555, 44];
// console.log(b[0] + calcTip(b[0]));
// console.log(b[1] + calcTip(b[1]));
// console.log(b[b.length - 1] + calcTip(b[b.length - 1]));

/////////////////////////////

// Introducion Object

// const dustin = {
//     firstName: 'Dustin',
//     lastName: 'Lai',
//     age: 2037 - 2003,
//     job: 'Developer',
//     friends: ['Jonas', 'Bob', 'Michael'];
// };

/*
///////////////////////////////

// Dot (.) and branket ([]) Notation

const dustin = {
  firstName: "Dustin",
  lastName: "Lai",
  age: 2037 - 2003,
  job: "Developer",
  friends: ["Jonas", "Bob", "Michael"],
};

console.log(dustin);

console.log(dustin.firstName);
console.log(dustin["firstName"]);

// const nameKey = "Name";
// console.log(dustin["first" + nameKey]);
// console.log(dustin["last" + nameKey]);

const input = prompt(
  "What do you wanna know about me? firstName, lastName, age, job and friends?"
);

console.log(dustin.input); // undefined
console.log(dustin[input]);

// //how to add a new property
dustin.hobby = "coding";
dustin.girlfriend = "Lauria";

console.log(dustin);

if (dustin[input]) {
  console.log(dustin[input]);
} else {
  console.log("Wrong request ! Try again .... ");
}


*/
// // Mini Test

// // Dustin has 3 friends, and his best friend is Jonas
// console.log(
//   `${dustin.firstName} has ${dustin.friends.length} friends, and his best friend is ${dustin.friends[0]}`
// );

/*
////////////////////////////////////////////////
// Object Method : function dc tao trong object duoc goi la mehtod

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYeah: 1991,
  job: "teacher",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  // calcAge: function (birthYeah) {
  //     return 2037 - birthYeah;
  // }
  // calcAge: function () {
  //     console.log(this);
  //     return 2037 - this.birthYeah;
  // }
  calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
  }, //dm can than dau Phay loz

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriversLicense ? "a" : "no"} driver's license.`;
  },
};

// console.log(jonas.calcAge(1991));
// console.log(jonas['calcAge'](1991));

console.log(jonas.calcAge());
// console.log(jonas['calcAge']);
console.log(jonas.age);

/////// mini Test
// "Jonas is a 46-year old teacher, and he has a driver's license"
// console.log(jonas.getSummary());

const mac = {
  fullName: "Mac Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

mac.calcBMI();
john.calcBMI();

console.log(`${mac.fullName}'s BMI = ${mac.bmi}
${john.fullName}'s BMI = ${john.bmi}`);
// John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!
if (mac.bmi > john.bmi) {
  console.log(
    `${mac.fullName}' s BMI (${mac.bmi}) is higher than ${john.fullName}' s BMI (${john.bmi})) `
  );
} else if (john.bmi > mac.bmi) {
  console.log(
    `${john.fullName}' s BMI (${john.bmi}) is higher than ${mac.fullName}' s BMI (${mac.bmi})) `
  );
} else console.log(`2 guys have the same BMI`);


*/
/////////////////////////////////
// LOOP
/*
const jonas = [
  "Jonas",
  "Schmedtmann",
  2037 - 1991,
  "teacher",
  ["Michael", "Peter", "Steven"],
  true,
];
const types = [];

console.log(typeof jonas[jonas.length - 2]); // object

for (let i = 0; i < jonas.length; i++) {
  console.log(jonas[i], typeof jonas[i]);

  // types[i] = typeof jonas[i];
  types.unshift(typeof jonas[i]);
}
console.log(types);

// continue and break
console.log("--- ONLY STRINGS ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== "string") continue;

  console.log(jonas[i], typeof jonas[i]);
}

console.log("--- BREAK WITH NUMBER ---");
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === "number") break;

  console.log(jonas[i], typeof jonas[i]);
}
*/
/*
///////////////////////////////////////
// Looping Backwards and Loops in Loops
const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} 🏋️‍♀️`);
    }
}


///////////////////////////////////////
// The while Loop
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep} 🏋️‍♀️`);
}

let rep = 1;
while (rep <= 10) {
    // console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♀️`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;

while (dice !== 6) {
    console.log(`you rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
}

*/

///// CODING CHALLENGE

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// let n = bills.length;
// const tips = [];
// const total = [];

// const calcTips = bill => (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;

// for (let i = 0; i < n; i++) {
//     tips[i] = calcTips(bills[i]);
//     total.push(tips[i] + bills[i]);
// }

// console.log(bills, tips, total);

// function calcAverage(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum / arr.length;
// }

// console.log(calcAverage([2, 4, 6])); // 4

// console.log(calcAverage(tips));
// console.log(calcAverage(total));
