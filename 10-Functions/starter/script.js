'use strict';


/*
// Default Parameters
const bookings = [];

const createBooking = function (
    flightNum,
    numPassengers = 1,
    price = 199 * numPassengers
    ) {
        // ES5
        // numPassengers = numPassengers || 1;
        // price = price || 199;

  const booking = {
      flightNum,
      numPassengers,
      price,
    };
    console.log(booking, typeof booking);
    bookings.push(booking);
};


createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);// set par to undifined to use default par in function


const flight = "LH234"
const jonas = {
    name : "Dustin Lai",
    passport: 24739479284
}



const checkin = function(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name;
    
    if (passenger.passport === 24739479284) {
        alert('Checked in');
    } else {
        alert('Wrong passport!');
    }
}

// checkin(flight, jonas);
console.log(flight);
console.log(jonas);


const newPassport = function(person) {
    person.passport = Math.random() * 1000000000000;
}
newPassport(jonas);
checkin(flight, jonas);
console.log(jonas);
*/



/*
// first class function 
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};
  
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
};

// higher order function

const transformer = function(str, fn) {
    console.log(`The original string: ${str}`);
    console.log(`The transformed string: ${fn(str)}`);
    
    console.log(`tranformed by : ${fn.name}`)
    
}
transformer("java is the best programming language", upperFirstWord);
transformer("java is the best programming language", oneWord);
const hfive = function() {
    console.log("💀");
}
document.body.addEventListener('click', hfive);

*/
/*
// Functions Returning Functions

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`);
    }
};

const greeterHey = greet("Yoo");
greeterHey("Dustin"); // Yoo Dustin
greet("Hello")("Adele"); // Hello Adele

// using arrow function

// const greet2 = (greeting) => {
    //     return (name) => {console.log(`${greeting} ${name}`)};
    // };
    
    
    // or
    const greet2 = greeting => name => console.log(`${greeting} ${name}`);
    
    greet2("Hi")("dyc"); // Hi dyc
/

*/


/* 
// The call and apply Methods
const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    // book: function() {}
    book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name }); //name : name
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);


const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};


console.log(eurowings);

const book = lufthansa.book;

// Does NOT work
// book(23, 'Sarah Williams');


/// the CALL method on function
// we can use other method set to other object
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 24, 'Minh Phi');

// the APPLY method on function (less apply)
const arr = [41, "Fill Foden"]
book.apply(eurowings, arr);
// or
book.call(eurowings, ...arr); // the same way




// The bind function
const bookEW = book.bind(eurowings); // only apply for eurowings, book.bind(eurowings) is not a function, it only assign this = eurowings
bookEW(47, 'Emiliano Martinet');
const bookEW23 = book.bind(eurowings, 23); //set partial arguments
bookEW23('Lionel Messi');



// With event listener
lufthansa.planes  = 300;
lufthansa.buyPlane = function() {
    console.log(this);
    
    this.planes++;
    
    console.log(this.planes);
    
} 

document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
//this = <button class="buy">Buy new plane 🛩</button>
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));


// partial applications: using a available function and preset the arguments on that
// const addTAX = (rate, val) => val + val * rate;
// console.log(addTAX(0.1, 200));
// const addVAT = addTAX.bind(null, 0.23);
// console.log(addVAT(200));

const addTax = (rate) => {
    return function(val) {
        return rate * val + val;
    }
};
console.log(addTax(0.1)(200)); //220

const addVAT = addTax(0.23);
console.log(addVAT(200)); // 246
*/



// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀


*/
/* 

const poll = {
    question: 'What is your favourite programming language?',
    options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
    // This generates [0, 0, 0, 0]. More in the next section 😃
    answers: new Array(4).fill(0),
    registerNewAnswer() {
        // Get answer
        const tmp = this.question + "\n" + this.options.join("\n");
        let answer = Number(prompt(tmp));
        console.log(answer);
        // this.answers[answer]++;
        // hay ho
        typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;
        // console.log(this.answers);
        this.displayResults();
        this.displayResults('string');
        
        
      
    },
  
    displayResults(type = 'array') {
        if (type === 'array') {
            console.log(this.answers);
        }
        else {
            console.log(`Poll results are ${this.answers.join(', ')}`);
        }
    }
};

// poll.registerNewAnswer();
// console.log(poll.answers);


// 2.
// const regis = poll.registerNewAnswer;
document.querySelector('.poll').addEventListener('click',poll.registerNewAnswer.bind(poll));
// 3.
// poll.displayResults.call(poll, 'string');
poll.displayResults('string')

poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });


// Immediately invoked function Expressions: run once time
const runOnce = function() {
    console.log(`this is never run again`);
}
runOnce();
// regular funct
(function() {
    console.log(`this is never run again`);
    const isPrivate = 23;
})();

// arrow funct
(() => console.log(`this is never run again`))();



{
    const isPrivate = 23;
    var notPrivate  = 23;
}
// console.log(isPrivate);
console.log(notPrivate); // 23
*/

////////////////////////////////
// CLOSURES: happen inside, not exciplit, remember all the var in its birthplace
/*
const secureBooking = function() {
    let passengerCount = 0;
    
    return function() { // booker function
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
    
};
const booker = secureBooking();
booker();
booker();
booker();

console.dir(booker);
*/

/*

// more example about the CLOSURES


let f;


const g = function() {
    const a = 23;
    f = function() {
        console.log(a * 2);
    }
}
const h = function() {
    const b = 223;
    f = function() {
        console.log(b * 2);
    }
}

g();
f();
console.dir(f);
// re-assigning f function
h();
f();
console.dir(f);

// Example 2
const boardPassengers = function(n, wait) {
    const perGroup = n / 3;

    setTimeout(function () {
        console.log(`We are now boarding on all ${n} passengers`);
        console.log(`These are 3 group, each group has ${perGroup} passengers`);
    }, wait * 1000);
    // x = function () {
    //         console.log(`We are now boarding on all ${n} passengers`);
    //         console.log(`These are 3 group, each group has ${perGroup} passengers`);
    //     };

    console.log(`Will start boarding in ${wait} seconds`);
}

// the order executions:
// console.log(`Will start boarding in ${wait} seconds`);
// after 3S :
// setTimeout function will be executed,

const perGroup = 1000;
boardPassengers(180, 3);
*/


///////////////////////////////////////
// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/


(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
















