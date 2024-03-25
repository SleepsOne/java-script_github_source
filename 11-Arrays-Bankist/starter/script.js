'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const containerSummary = document.querySelector('.summary');


const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


const creatUserName = function(accs) {
  accs.forEach(function(acc){
    acc.username = acc.owner.toLowerCase().split(" ").map(s => s[0]).join('');
  });
};
creatUserName(accounts);


const updateUI = (currentAccount) => {
  // Display movements
  displayMovements(currentAccount.movements);

  // Display balance
  calcDisplayBalance(currentAccount);

  // Display summay
  calcDisplaySummary(currentAccount);

}

// Login application 

//Event handler 


const loginWindow = (acc) => {
  labelWelcome.textContent = `Welcome back, ${acc.owner.split(" ")[0]}!`;
  containerApp.style.opacity = 100;
}

const logoutWindow = () => {
  labelWelcome.textContent = `Log in to get started`;
  containerApp.style.opacity = 0;

}

let currentAccount;
// btn login
btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  // console.log('Login');
  // console.log(accounts);
   currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
   // pin matched! using optional chaining
   if (currentAccount?.pin === Number(inputLoginPin.value)) {

    // Displaying UI and welcome message
    loginWindow(currentAccount);

    // hide the input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    // blur mouse blinking
    inputLoginPin.blur();

    updateUI(currentAccount);
    
   }
    // console.log(currentAccount);
  

});

// btn transfer 
btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  // currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  const receiveAccount = accounts.find(acc => acc.username === inputTransferTo.value);
  const amount = Number(inputTransferAmount.value);
  

  // update UI
  if (amount >0 && currentAccount.balance >= amount && receiveAccount?.username && receiveAccount.username !== currentAccount.username) {
    console.log('Transfer valid!');
    receiveAccount.movements.push(amount);
    currentAccount.movements.push(-amount);

    updateUI(currentAccount);
    // hide the inut transfer and amount 
    inputTransferTo.value = inputTransferAmount.value = '';
    inputTransferAmount.blur();
  }
  
});

// btn close
btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  const usernameConfirm = inputCloseUsername.value;
  const pinConfirm = Number(inputClosePin.value);

  // const closeAccount = accounts.find(acc => acc.username === userConfirm);

  if (usernameConfirm === currentAccount.username && currentAccount.pin === pinConfirm) {
    // remove account from accounts-list
    const indexRemove = accounts.findIndex(acc => acc.username === usernameConfirm);
    // console.log(indexRemove);
    accounts.splice(indexRemove, 1);
    console.log(`user: ${usernameConfirm} deleted!`);
    // console.log(accounts);

    // hide input : close account
    inputCloseUsername.value = inputClosePin.value = '';
    // log out or hide the UI
    logoutWindow();
  }

  


});


// btn loan
btnLoan.addEventListener('click', function(e) {
  e.preventDefault();

  // condition:any deposit > 10% * request amount
  const loanAmount = Number(inputLoanAmount.value);;
  if (loanAmount > 0 && currentAccount.movements.filter(mov => mov > 0).some(mov => mov > 0.1 * loanAmount)) {
    currentAccount.movements.push(loanAmount);
    console.log('loan request accepted!');
    updateUI(currentAccount);

    inputLoanAmount.value = '';
    inputLoanAmount.blur();

    containerMovements.style.transition = 'all 1s ease 1s'; 
    containerSummary.style.transition = 'all 1s ease 1s';


  }

})


// btn-sort
let sort_state = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  // currentAccount.movements.sort((a, b) => a - b);
  // if (!sort_state) {
  //   displayMovements(currentAccount.movements, true);
  //   sort_state = true;
  // }
  // else {
  //   displayMovements(currentAccount.movements);
  //   sort_state = false;

  // }
  // optimize code for sort btn
  displayMovements(currentAccount.movements, !sort_state);
  sort_state = !sort_state;
    
  


})


////BANKIST APP
// sort = true => need to sort, sort = false => natural order
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = "";

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;
  movs.forEach(function (mov, i) {
    
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    
    const html = `
    <div class="movements__row">
        <div class="movements__type movements__type--${type}">${i+1} ${type} </div>
        <div class="movements__value">${mov} €</div>
        </div>
        `;
        
        // attach above to html 
    containerMovements.insertAdjacentHTML("afterbegin", html);
    
    
  });
};



// const creatUserName = function(user) {
//   return user.toLowerCase().split(" ").map(s => s[0]).join('');
//   // return userMapped;
// }
// const creatUserName = user => user.toLowerCase().split(" ").map(s => s[0]).join('');
// return userMapped;
// accounts.forEach(function(key) {
//   console.log(creatUserName(key.owner));
// });

// => SIDE EFFECT: tranformed and created a new key: value based on other key in an object



const calcDisplayBalance = function(acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  document.querySelector('.balance__value').textContent = `${acc.balance} €`;
}
    
// calcDisplayBalance(account1.movements);
// method chaining: Pipeline

const calcDisplaySummary = function(acc) {
  const incomes = acc.movements.filter(mov => mov > 0).reduce((acc, cur) => acc + cur, 0);
  const outcomes = acc.movements.filter(mov => mov < 0).reduce((acc, cur) => acc + cur, 0);
  labelSumIn.textContent = `${incomes}€`;
  labelSumOut.textContent = `${-outcomes}€`;
  labelSumInterest.textContent = `${incomes * acc.interestRate / 100}€`;
  
}
// calcDisplaySummary(account1.movements);
const eurToUsd = 1.1;
const totalDepositUSD = movements.filter(mov => mov > 0).map(mov => mov * eurToUsd).reduce((acc, cur) => acc + cur, 0);
console.log(totalDepositUSD); 

/*
*/
/*
*/

   ///////////////////////////////////////
   // Coding Challenge #1

/* 
Julia và Kate đang thực hiện một nghiên cứu về chó.Vì vậy, mỗi người trong số họ đã hỏi 5 chủ con chó về tuổi của con chó của họ và lưu trữ dữ liệu thành một mảng (một mảng cho mỗi con).Hiện tại, họ chỉ quan tâm đến việc biết một con chó là người lớn hay chó con.Một con chó là một người trưởng thành nếu nó ít nhất 3 tuổi và đó là một con chó con nếu nó dưới 3 tuổi.Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀


const checkDogs = function (dogsJulia, dogsKate) {
  const dogsJuliaCorrected = dogsJulia.slice();
  dogsJuliaCorrected.splice(0, 1);
  dogsJuliaCorrected.splice(-2);
  // dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);
*/

/*
// The map, filter and reduce method on Array: acctually:  .method(callback[val, key, thisArg])
///////////////////////////////////////
// The map Method: creat a new array with tranformed each element
const eurToUsd = 1.1;

// const movementsUSD = movements.map(function (mov) {
  //   return mov * eurToUsd;
  // });
  
  const movementsUSD = movements.map(mov => mov * eurToUsd);
  
  console.log(movements);
  console.log(movementsUSD);
  
  const movementsUSDfor = [];
  for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
  console.log(movementsUSDfor);
  
  const movementsDescriptions = movements.map(
    (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions,);


///////////////////////////////////////
// The filter Method: creat a new array with tranformed each element
const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);
console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);


///////////////////////////////////////
// The reduce Method: accumulatation
console.log(movements);

// accumulator -> SNOWBALL
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteration ${i}: ${acc} ---- ${cur}`);
  return acc + cur;
}, 0);
// const balance = movements.reduce((acc, cur) => acc + cur, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

// Maximum value
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  return mov;
}, -1);
console.log(max);



console.log(movements);
////////////////////////////////////
// The find Method
const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

console.log(accounts);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);
// the findIndex() method
//  use case



///////////////////////////////////////
// some and every
console.log(movements);

// EQUALITY
console.log(movements.includes(-130));

// SOME: (any) CONDITION => boolean
console.log(movements.some(mov => mov === -130));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov <= 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));
*/

/*
///////////////////////////////////////
// flat and flatMap
const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));  //flat level two

// flat
const overalBalance = accounts
.map(acc => acc.movements)
.flat()
.reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

// flatMap: map and flat
const overalBalance2 = accounts
.flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);


///////////////////////////////////////
// Sorting Arrays

// Strings
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

// Numbers
console.log(movements);
console.log(movements.sort()); // SORTED AS STRINGS

// return < 0, A, B (keep order)
// return > 0, B, A (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending
// movements.sort((a, b) => {
  //   if (a > b) return -1;
//   if (a < b) return 1;
// });
movements.sort((a, b) => b - a);
console.log(movements);

/*
///////////////////////////////////////
// More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7);
console.log(x);
// console.log(x.map(() => 5));
x.fill(1, 3, 5);
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
    );
    console.log(movementsUI);
    
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
  });
  
  */
  /* 
  
  
  
  ///////////////////////////////////////
  // flat and flatMap
  const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
  console.log(arr.flat());
  
  const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
  console.log(arrDeep.flat(2));
  
  // flat
  const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
  console.log(overalBalance);
  
  // flatMap
  const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
  console.log(overalBalance2);
 
 ///////////////////////////////////////
 // More Ways of Creating and Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Emprty arrays + fill method
const x = new Array(7); //[empty * 7]
console.log(x);
// console.log(movements.map(() => 0));
x.fill(1, 3, 5); // [empty × 3, 1, 1, empty × 2]
// x.fill(1);
console.log(x);

arr.fill(23, 2, 6); // mutate to original one
console.log(arr);
// console.log(movements.map((mov, i, arr) => arr.length));

// Array.from: using map callback function => handy transform some value in the array!
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const map = (_, i) => i + 1;
const z = Array.from({ length: 7 }, map);

console.log(z);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
    );
    console.log(movementsUI);
    
    const movementsUI2 = [...document.querySelectorAll('.movements__value')];
    console.log(movementsUI2);
  });
  */


  /*
  
  // ARRAY METHOD PRACTICE
  //1.
  const bankDepositSum = function(acc) {
    return acc.map(acc => acc.movements).flat().filter(mov => mov > 0).reduce((acc, mov) => acc + mov, 0);
  };
  console.log(bankDepositSum(accounts));
  //2.how many deposit in the bank at least 1000$
  const depositAtLeast1000 = function(acc) {
    const cnt = acc.flatMap(acc => acc.movements).reduce((acc, cur) => cur >= 1000 ? acc+1:acc, 0);
    return cnt;
  }
  console.log(depositAtLeast1000(accounts));
  //3. creat a new object: calculate the depositSum and withDrawSum in one function using reduce() method
const allSum = function(acc) {
  return acc.flatMap(acc => acc.movements).reduce((acc, cur) => {
    // cur > 0 ? acc.deposit += cur : acc.withdrawals += cur;
    acc[cur > 0 ? 'deposit': 'withdrawals'] += cur;
    return acc;
  },{deposit: 0, withdrawals:0})
  
}
const {deposit, withdrawals} = function(acc) {
  return acc.flatMap(acc => acc.movements).reduce((acc, cur) => {
    // cur > 0 ? acc.deposit += cur : acc.withdrawals += cur;
    acc[cur > 0 ? 'deposit': 'withdrawals'] += cur;
    return acc;
  },{deposit: 0, withdrawals:0})
  
}
console.log(allSum(accounts));

//4 This is a nice title => This Is a Nice  Title
const makeTitleCase = function(string) {
  const arr = string.split(/[\s]+/).map(word => word.toLowerCase()).reduce((acc, cur) => {
    acc.push(cur.length !==1 ? cur.replace(cur[0], cur[0].toUpperCase()) : cur);
    return acc;
  }, []);
  return arr.join(' ');
}
const convertTitleCase = function(string) {
  const exceptions = ['a', 'an', 'but', 'or', 'on', 'in', 'with'];
  const ans = string.toLowerCase().split(/[\s]+/).reduce((acc, cur) => {
    acc += exceptions.includes(cur) ? cur : cur.replace(cur[0], cur[0].toUpperCase());
    acc += " ";
    return acc;
  }, '');
  return ans;
}
console.log(makeTitleCase('asdkabsjd sdsd fdjfd a sjdf fdifdf  ds dsd ds s d ds'));
console.log(convertTitleCase('This is a show me the money in VietNam!'));
*/

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Julia và Kate vẫn đang học chó, và lần này chúng đang học nếu chó ăn quá nhiều hoặc quá ít.
Ăn quá nhiều có nghĩa là phần thức ăn hiện tại của chó lớn hơn phần được khuyến nghị, và ăn quá ít thì ngược lại.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

TEST DATA:
*/ 
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] }
];

// GOOD LUCK 😀
// recommendedFood = weight ** 0.75 * 28
// 1.
dogs.map(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
  return dog;
});
console.log(dogs);
// 2.
const checkDogState = function(cur, recommend) {
  if (cur > recommend * 0.9 && cur < recommend * 1.1) return 0;
  if (cur <= recommend) return 1;
  if (cur > recommend) return 2;
} 

dogs.forEach((val, i, arr) => {
  const state = ['Okay', 'Too Little', 'Too Much'];
  console.log(`${val.owners.length === 1 ? val.owners[0] : val.owners.join(' and ')} 's Dog is in ${state[checkDogState(val.curFood, val.recommendedFood)]} amount's food!`);

});

//3.
const ownersEatTooMuch = dogs.filter(dog => dog.curFood > dog.recommendedFood).flatMap(dog => dog.owners);
console.log(`${ownersEatTooMuch.join(' and ')} 's dog is eat too much`);
const ownersEatTooLittle = dogs.filter(dog => dog.curFood <= dog.recommendedFood).flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));
console.log(dogs.some(dog => checkDogState(dog.curFood,dog.recommendedFood) === 0));
// 6.
console.log(dogs.filter(dog =>checkDogState(dog.curFood,dog.recommendedFood) === 0));


const copyDogs = [...dogs].sort((a, b) => a.recommendedFood - b.recommendedFood);
console.log(copyDogs);





  
  
  
  ///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/
// const calcAverageHumanAge = function(dogsAge) {
//   //calculated dog's age to human 's age
//   const dogAgeinHumnaYear = dogsAge.map(function(dogAge) {
//     const eachAge = dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4; 
//     return eachAge;
//   })

//   // return array of the accepted dogs
//   const AcceptDog = dogAgeinHumnaYear.filter(val => val >= 18);
//   // const totalAge = AcceptDog.reduce((acc, cur, i) => acc + cur, 0);
//   const totalAge = AcceptDog.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);


//   return totalAge;

// }


/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

GOOD LUCK 😀
*/

/*
const calcAverageHumanAge = dogsAge => dogsAge.map(dogAge => (dogAge <= 2 ? dogAge * 2 : 16 + dogAge * 4)).filter(humanAge => humanAge >= 18).reduce((acc, humanAge, i, arr) => acc + humanAge / arr.length, 0);


console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

*/



/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES


/////////////////////////////////////////////////
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.slice(2)); // not mutate original array, created a new array (bien doi)
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log( arr.slice()); //shallow copy arr
// or
console.log([...arr]);


// splice: change the original array, change array, usually use to remove ele

// console.log(arr.splice(2)); // cut [2: -1]
console.log(arr); //remain: [0 : 1]
arr.splice(-1); // delete the last eles
console.log(arr);
arr.splice(1, 2);// get two ele, exclude: b and c
console.log(arr); // a d


// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]); //method 2

// JOIN
console.log(letters.join(' - '));

*/

/*
///////////////////////////////////////
// The new "at" Method
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// getting last array element
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));// more flexible, especially in method chaining
// 'at' with string
console.log('jonas'.at(0));
console.log('jonas'.at(-1));
 */

/*
///////////////////////////////////////
// Looping Arrays: forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const movement of movements) {
  for (const [i, movement] of movements.entries()) {
    if (movement > 0) {
      console.log(`Movement ${i + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
  }
}

console.log('---- FOREACH ----');
movements.forEach(function (mov, i, arr) {
  console.log(arr.length);
  if (mov > 0) {
    console.log(`Movement ${i + 1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
  }
});
// 0: function(200)
// 1: function(450)
// 2: function(400)
// ...


// ! break not effect to forEach()

*/

/*

//forEach for Maps and Sets

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
console.log(currencies);
for (const [key, val] of currencies.entries()){
  console.log(key + ":  " + val);
}
currencies.forEach(function(val, key, map) {
  console.log(key + ":  " + val);

});



// Sets
const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(`${value}: ${value}`);
});
*/
