'use strict';

// DOM manipulation

//get class player
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
// get total score
const score0El = document.querySelector('#score--0'); // DOM by querySelector
const score1El = document.getElementById('score--1'); // DOM by getEleID
//get current score
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
// Get dice
const diceEl = document.querySelector('.dice');

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
