/*
let js = "amazing";
console.log(1 + 2 + 3 + 5 - 4);


console.log("Dustin");

let firstName = "Dustin";
console.log(firstName);


let PI = 3.1415;

let myFirstLesson = 'javascrpit';
let myCurrentLesson = 'nodeJS';


console.log(myFirstLesson);
console.log(myCurrentLesson);

let myChoice = true;
myChoice = "YES!";

console.log(true);
console.log(typeof myChoice);
console.log(typeof 23);
console.log(typeof 'Dustin');



let year;

console.log(year);
console.log(typeof year);


console.log(typeof null);
console.log(null);
*/

// variables type
/*
let age = 30;
age = 31;

const year = 2003;
// year = 2004;



// const job; // error syntax

lastName = 'Duclaihop';
console.log(lastName);
*/




/*
//basic operators
const currentYear = 2040;
const ageDustin = currentYear - 2004;
const ageMint = currentYear - 2018;

// console.log(ageDustin, ageMint);


console.log(ageDustin * 2, ageDustin / 10, 2 ** 3);
// 2 ** 3 means 2 to the power of 3 = 2 * 2 * 2


const firstName = 'Dustin';
const lastName = 'Lai';

console.log(firstName + " " + lastName);


// let x = 10 + 5;
// console.log(x);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);
*/


/*
const mass_Mark = 78
const height_Mark = 1.69
const mass_John = 92
const height_John = 1.95

const BMI_Mark = (mass_Mark) / height_Mark ** 2;
const BMI_John = (mass_John) / height_John ** 2;
console.log(BMI_Mark, BMI_John);

const markHigherBMI = BMI_Mark > BMI_John;
console.log(markHigherBMI);
*/


// string
/*
const firstName = 'Dustin';
const job = 'student';
const birthYear = 2003;
const year = 2023;


const age = year - birthYear;


const Dustin = "I'm " + firstName + ', a ' + job + ", " + age + " years old";

console.log(Dustin)



const dustinNew = `I'm ${firstName}, a ${job}, ${age} years old`;
console.log(dustinNew);


console.log(`just a regular string`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String with
multiple
lines`);
*/

// if else statements

/*
const age = 15;

if (age >= 18) {
    console.log("You are allowed to driving car 🚗");
}
else console.log("You're not allowed to driving car 🚲");



let century;
let birthYear = 1998;
if (birthYear >= 2000) {
    century = 21;
}
else century = 20;


console.log(century);
*/




/*
// type conversion and coercion (chuyển kiểu dữ liệu và ép kiểu dữ liệu)
// type conversion
let inputYear = '2003';

console.log(inputYear);
console.log(Number(inputYear));

console.log(Number('Dustin'));
console.log(typeof NaN);


console.log(String(23), 23);

// type coercion
console.log("I'm " + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' > '18');
console.log(!true, !!false);
*/



/*
// truthy and falsy values
// falsy val là những giá trị không hẳn là false nhưng sẽ sai khi ta cố chuyển chúng về giá trị boolean
// trong js có 5 giá trị falsy: 0, '', undefined, null, NaN
// truthy là những trường hợp còn lại: others case
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Dustin'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 100;

if (money) {
    console.log("Don't spend it all :)))");
}
else {
    console.log("You should get a job!");
}


let height;

if (height) {
    console.log('YAY, height is defined!!');
}
else {
    console.log('Height is UNDEFINED!');
}
*/



/*
// Equality Operators : toán tử == and ===
// toán tử == so sánh lỏng lẻo (loose) có áp dụng coercion type vd '18' == 18 => true
// toán tử === so sánh nghiêm ngặt (strict) hơn : '18' === 18 => false


const age = 18;
if (age === 18) {
    console.log("You just became an adult :P");
}

if (age == '18') {
    console.log("You just became an adult :P");
}

const fav = Number(prompt("What is your favorite number ?"));

console.log(fav);
console.log(typeof fav);



// toan tu khac !== (strict ver) and != (losse ver)

const numNeighbour = Number(prompt('How many neighbour countries does your country have?'));

if (numNeighbour === 1) console.log('Only 1 border');
else if (numNeighbour > 1) console.log('More than 1 border');
else console.log('No borders!');


*/



/*
// Boolean logic
const averageScoreDolphinsTeam = (97 + 112 + 101) / 3;
const averageScoreKoalasTeam = (109 + 95 + 123) / 3;

console.log(`Scores of Dolphins Team : ${averageScoreDolphinsTeam}
The score of Koalas Team : ${averageScoreKoalasTeam}`);
// console.log('Normal 1: ');
if (averageScoreDolphinsTeam > averageScoreKoalasTeam) {
    console.log(`Dolphins Team wins!`);
}
else if (averageScoreDolphinsTeam < averageScoreKoalasTeam) {
    console.log("Koalas Team wins!!");
}
else console.log(`Two team have the same scores`);


if (averageScoreDolphinsTeam > averageScoreKoalasTeam && averageScoreDolphinsTeam >= 100) {
    console.log(`Dolphins Team wins!`);
}
else if (averageScoreKoalasTeam > averageScoreDolphinsTeam && averageScoreKoalasTeam >= 100) {
    console.log("Koalas Team wins!!");
}
else if (averageScoreDolphinsTeam == averageScoreKoalasTeam && averageScoreDolphinsTeam >= 100) {
    console.log(`Both teams are equal, no one win.`);
}
else console.log('No ones win in this match!!');
*/

// the switch statement




/*
// The switch Statement
const day = 'friday';

switch (day) {
    case 'monday': // day === 'monday'
        console.log('Plan course structure');
        console.log('Go to coding meetup');
        break;
    case 'tuesday':
        console.log('Prepare theory videos');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Enjoy the weekend :D');
        break;
    default:
        console.log('Not a valid day!');
}
*/



/*
// The statements and Expressions

// The Conditional (Ternary) operator : tóan tử 3 ngôi Ternary 

const age = 18

age >= 18 ? console.log(`I like to drink wine 🍷`) : console.log(`I like to drink water 💧`);


const drink = age >= 18 ? 'wine 🍷' : 'water 💧';

console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'wine 🍷' : 'water 💧'}`);

*/

// coding challenge 4

const bill = Number(prompt(`The bill is : `));

// let tip;

const tip = (bill >= 50 && bill <= 300) ? bill * 15 / 100 : bill * 20 / 100;


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value was ${bill + tip}`);