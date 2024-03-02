'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El  = document.getElementById('score--0');
const score1El  = document.getElementById('score--1');
const currentScore0El = document.getElementById('current--0');
const currentScore1El = document.getElementById('current--1');
const diceEl = document.querySelector( ".dice");
const btnNewGame = document.querySelector('.btn--new');
const btnNewRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');





//starting conditon
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');


let scores = [0, 0];
let currentScore = 0;
let activePlayerIndex = 0;
let playing = true;


const newGame = function() {
    score0El.textContent = 0;
    score1El.textContent = 0;

    //GUI DEFAULT
    diceEl.classList.add('hidden');
    document.querySelector(`.player--${activePlayerIndex}`).classList.remove('player--winner');
    document.querySelector(`.player--0`).classList.add('player--active');
    
    for (let i = 0; i < scores.length; i++){
        scores[i] = 0;
    }
    currentScore = 0;
    activePlayerIndex = 0;
    playing = true;
}


const switchPlayer = function() {
    activePlayerIndex = activePlayerIndex === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle( "player--active");
    player1El.classList.toggle( "player--active");
}


// ROLLING DICES
btnNewRoll.addEventListener('click', function() {


    if (playing) {
        // 1. generating a random number
        const dice = Math.trunc(Math.random() * 6) + 1;
        console.log(dice);

        // 2.display dice
        diceEl.classList.remove('hidden');
        diceEl.src = "dice-" + dice + ".png";
        // 3. check validation: 1 or not

        const active_player = document.querySelector(`.player--${activePlayerIndex}`);

        if (dice!=1) {
            // add the dice to the current score
            currentScore += dice;
            document.getElementById(`current--${activePlayerIndex}`).textContent = currentScore;
            
            
        }
        else {
            // unless click the 'hold' button
            document.getElementById(`current--${activePlayerIndex}`).textContent = 0;

            //switch player
            switchPlayer();
            
        }
    }

})

// HOLDING CURRENT SCORE
btnHold.addEventListener('click', function() {
    if (playing) {
        //add the current score of the active player
        scores[activePlayerIndex] += currentScore;
        document.getElementById(`score--${activePlayerIndex}`).textContent =  scores[activePlayerIndex];
        document.getElementById(`current--${activePlayerIndex}`).textContent = 0;

        if (scores[activePlayerIndex] >=10){
            //finish the game 
            playing = false;    
            document.querySelector(`.player--${activePlayerIndex}`).classList.add("player--winner");
            document.querySelector(`.player--${activePlayerIndex}`).classList.remove("player--active");
            diceEl.classList.add('hidden');
            
        }
        
        else {
            //switch player
            switchPlayer();
        }
    }

})


// RESET GAME
btnNewGame.addEventListener('click', newGame);






















