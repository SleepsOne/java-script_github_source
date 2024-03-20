'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';
// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri','sat', 'sun'];
const openingHours = {
  [weekdays[3]]: { //object litteral
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: { //ex u can do this : [`day-${2 + 5}`]
    open: 0, // Open 24 hours
    close: 24,
  },
};
// console.log(typeof(openingHours.fri));
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // openingHours: openingHours,
  // ES6 enhanced object
  openingHours,
  
  


  order(startMenuIndex, mainMenuIndex) {
    return [this.starterMenu[startMenuIndex], this.mainMenu[mainMenuIndex]];
  
  },

  orderDelivery({starterIndex = 1, mainIndex = 0, time = '20:00', address}) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} wil be delivered to ${address} at ${time}`);
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your delicous pasta with ${ing1} , ${ing2} and ${ing3}`);
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);

  },



};

/*
// PROPERTY 'S NAME
const properties = Object.keys(openingHours);
console.log(properties); // array
// LOOPING OBJECT 
for (const day of Object.keys(openingHours)){
  console.log(day);
}

//PROPERTIES 'S vALUE
const values = Object.values(openingHours);
console.log(values);
// console.log(typeof(openingHours));
// PROPERTY ENTRIES
const entries = Object.entries(openingHours);
console.log(entries);

for (const [key, {open, close}] of entries) {
  console.log(`One ${key} we open at ${open} and close at ${close}`);
}
*/


/*
//OBJECT LITTERAL
// console.log(restaurant);

//optinal chaining
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

// => with optional chaining
console.log(restaurant.openingHours.mon?.open); //undifined bc its undifined
// we get nested optinal chaining
console.log(restaurant.openingHours.mon?.open); //undifined bc its does not have the 'mon'
console.log(restaurant.openingHours?.fri?.open); // indeed



const days = ['mon', 'tue', 'wen', 'thu', 'fri' ,'sat', 'sun'];

for (const day of days) {
  // console.log(day);
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`The ${day} we open at ${open}`);
}


console.log(restaurant.order?.(0, 1) ?? 'method does not exist'); // first run
console.log(restaurant.orderABC?.(0, 1) ?? 'method does not exist'); // second run

const user = [{
  name : 'jonas',
  mail : 'sdasdasd@gmail.com',
  
}];
// const user = [];


if (user.length > 0 ){
  console.log(user[0].name);
}
else {
  console.log("user does not exist");
  
}

// =>> we can simply do this

console.log(user[0]?.name ?? "user does not exist");
*/












// // FOR_OF loop
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) console.log(item);
// // old way
// // for (const item of menu.entries()){
//   //   console.log(`${item[0]}: ${item[1]}`);
//   // }
  
//   // new way
//   for (const [i, el] of menu.entries()){
//     console.log(`${i + 1}: ${el}`);
//   }
  
//   // console.log([...menu.entries()]);
  
  
  
  // coding challenge 1
  
  const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
      [
        'Neuer',
        'Pavard',
        'Martinez',
        'Alaba',
        'Davies',
        'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};




/*


///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
      
      GOOD LUCK 😀
      
     
     // ex1:
     for (let i = 0; i < game.scored.length; i++) {
       console.log(`Goal ${i+1}: ${game.scored[i]}`);
      }
      // ex2:
      let avg = 0;
      for (const team of Object.values(game.odds)){
        avg += team;
      }
      avg= (avg / Object.values(game.odds).length).toFixed(2)
      console.log(avg);
      // ex3:
      for (const [key, val] of Object.entries(game.odds)){
  const tmp =  game[key] ?? 'draw';
  console.log(`Odd of victory ${tmp}: ${val}`);
  
}
//ex4:
const scores = {}

for (const player of game.scored) {
  scores[player] ? scores[player]++ : (scores[player]=1);
  
}
console.log(scores);

*/



/*
We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.
Your tasks:
1. Create one player array for each team (variables 'players1' and
'players2')


// const players1 = game.players[0];
// console.log(players1);
// const players2 = game.players[1];
// console.log(players2);
const [players1, players2] = game.players;
console.log(players1, players2);

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers);
// const [gk, ...fieldPlayers] = players1

// 3. Create an array 'allPlayers' containing all players of both teams (22
// players)
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
// new array ('players1Final') containing all the original team1 players plus
// 'Thiago', 'Coutinho' and 'Perisic'
const players1Final = [...players1, 'Thiago', 'Coutinho','Perisic'];
console.log(players1Final);
// 5. Based on the game.odds object, create one variable for each odd (called
// 'team1', 'draw' and 'team2')
// const {team1, x: draw, team2} = game.odds;
const {odds : {team1, x: draw, team2}}= game;
console.log(team1, draw, team2);
// 6. Write a function ('printGoals') that receives an arbitrary number of player
// names (not an array) and prints each of them to the console, along with the
// number of goals that were scored in total (number of player names passed in)
function printGoals(...numberOfPlayers){
  console.log(`${numberOfPlayers.length} goals were scored`);
  
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);
// 7. The team with the lower odd is more likely to win. Print to the console which
// team is more likely to win, without using an if/else statement or the ternary
// operator.

team1 < team2 && console.log('team 1 is likely to win!');
team2 < team1 && console.log('team 2 is likely to win!');
*/

// Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
// Then, call the function again with players from game.scored
// GOOD LUCK �




/*


const res1 = {
  name: "Carpi",
  // numGuests: 20,
  numGuests: 0,


};
const res2 = {
  name: "La Piazza",
  owner: 'Giovanni Rossi'

};

// res2.numGuests = res2.numGuests || 10;
// res1.numGuests = res1.numGuests || 10;


res1.numGuests ??= 10;
res2.numGuests ||= 10;

console.log(res1);
console.log(res2);


res1.owner &&= '<ANONYMOUS>';
res2.owner &&= '<ANONYMOUS>';

console.log(res1);
console.log(res2);
*/


//==================================================
/*
//NULLISH VALUES

restaurant.numGuest = 0;
const guest1 = restaurant.numGuest || 10;
console.log(guest1); // 10

// nullist value : make sense with null and undefined (NOT 0 or '')
const guestCorrect = restaurant.numGuest ?? 10;
console.log(guestCorrect); // 0
*/




/*
console.log("---------OR---------");
// short circuting
console.log(0 || 'duc'); // first = falsy val, return the second: duc
console.log(3 || 'duc'); // first = truthy => return first : 3
console.log(''||"object"); //object
console.log(undefined || null); //null
console.log(undefined || null || 0 || NaN); // all are flasy => return the last one.

// applications: set default value

// normal thinkings:
// restaurant.numGuest = 23; pay attentions about restaurant.numGuest = 0
const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guest1);  // 10 -> because numGuest doest not exsit
// short circuit thinking:
const guest2 = restaurant.numGuest|| 10; 
console.log(guest2);


console.log('------------AND-------------');
// tim thang nao dau tien la flasy, neu toan true thi chon cai cuoi cung
// nguoc lai voi OR
console.log(0 && "lai"); // 0
console.log(7 && 'ro'); // ro


//practical example : check conditions if that does exsit

if (restaurant.orderPizza) {
  restaurant.orderPizza('Mushroom', 'spinach');
}
// =>
restaurant.orderPizza &&   restaurant.orderPizza('Mushroom', 'spinach');
// restaurant.orderPizza('Mushroom', 'spinach') && restaurant.orderPizza;

*/
















// ==============================================================

/*
// spread operator(): 2 uses: 1. pass as arguments of a functions 2. create a new array

const arr = [7, 8, 9];

const newArr = [1, 2, ...arr];
console.log(newArr);

// pass to a function
console.log(...newArr);


const newMenu = [...restaurant.mainMenu, "Gnocci"];
console.log(newMenu);



// joind 2 arrays
const mainMenuCopy = [...restaurant.mainMenu];
const menu = [...restaurant.starterMenu, ...mainMenuCopy];
console.log(menu);


const str = 'jonas';
const letters = [...str, ' ', 'G'];
console.log(letters);


// const ingredients = [prompt("Let's make pasta! Ing 1:"),prompt("Ing 2:"), prompt("Ing 3:")];
// restaurant.orderPasta(...ingredients);




//iterables : arrays , strings, maps, sets


// since 2018, spead had been use in object althoug obj is not iterables
const newRestaurant  = {foundIn: 1998, ...restaurant, founder: 'Guiseppe'};  
console.log(newRestaurant);


const restaurantCopy = {...restaurant};
restaurantCopy.name = "Duc Lai";
restaurant.mainMenu.push('Pho');// impacted the orriginal array belong to object
console.log(restaurant.mainMenu);
console.log(restaurantCopy.mainMenu)


// rest parttern: opps of spread operator


// 1) Destructuring 
// spread demo: right side of =
const arr1 = [1, 2, ...[3, 4]];
console.log(arr1);
// rest pattern: left side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(a, b, others);

// using both flexibly
const [pizza, ,risoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(pizza, risoto, otherFood);


//object rest pattern
const {sat, ...weekdays}= {...restaurant.openingHours}; // designate the obivious key: 'sat'
console.log(weekdays); // thu and fri

// 2) Functions
const add = function(...numbers) {
  let str = "";
  for (let i =0 ; i < numbers.length; i++){
    str += numbers[i];
  }
  console.log(str);
}

add(1, 2, 3);
add('Duc', 2, 'Lai');



const x = [123,23,12]
add(...x);


restaurant.orderPizza('mushroom', 'onion', 'olives');
restaurant.orderPizza('mushroom')
*/




/*
// initial a object by destructuring an existing object

restaurant.orderDelivery({
  time :'22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});
// default arguments 
restaurant.orderDelivery({
  // time :'22:30',
  address: 'Via del Sole, 21',
  // mainIndex: 2,
  starterIndex: 2,
});
*/
/*
//destructuring Objects
// get same name
const {name, openingHours, categories} = restaurant;
console.log(name, openingHours, categories);

// get diff name
 const {name: restaurantName, openingHours: hours, categories : tags} = restaurant;
 console.log(restaurantName, hours, tags);
 // set default vals if it's not exsit
 const {menu = [], starterMenu: starters = []} = restaurant;
 console.log(menu, starters);
 //mutating variables
 let a = 11;
 let b = 999;
const obj = {a:23, b : 7, c : 14};
// target a = 23, b = 7
// {a, b} = obj; // normal thinking => error
({a, b} = obj); 
console.log(a, b);


// nested obj
const {fri} = openingHours;
console.log(fri); // an obj as well
const {fri: {open, close}} = openingHours;
console.log(open, close); // 11 23
// alter names
const {fri: {open: o, close: c}} = openingHours;
console.log(o, c); // 

*/

/*
// const arr = [2, 3, 4];
// const a = arr[0]
// const b = arr[1]
// const c = arr[2]

// destructoring an arr, 
const [x, y, z] = arr; // it's not an arr
console.log(x, y, z); 

// put the gap too chose the order
let [first,second] = restaurant.categories;
console.log(first, second); //actually first and 


// swap with destructoring
[first, second] = [second, first]
console.log(first, second); //actually first and third

console.log(restaurant.order(0, 2));


const nest = [2, 4, [5, 6 ]];
const [ffirst, ,array] = nest;
console.log(ffirst, array);

const [i, , [j, k]] = nest;
console.log(i, j , k);


//default values to check if a element exsit or not
 const [p = 1, q = 1, r = 1]= [8, 9];
 console.log(p, q, r);

*/