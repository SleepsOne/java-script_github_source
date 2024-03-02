'use strict'


// SELECTING & MANIPULATING

/*
console.log(document.querySelector('.message').textContent)
document.querySelector('.message').textContent = '🎉 Correct Number!'
console.log(document.querySelector('.message').textContent)

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;


document.querySelector('.guess').value = 23;
console.log(document.querySelector(".guess").value);
*/




// document.querySelector('.check').addEventListener('click', 
// function() {
  //   const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess, typeof guess);
  
  //   if(!guess) {
    //     document.querySelector('.message').textContent = "⛔ No number!";
    //   }
    // });
    
    
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
let score = 20;
let highscore = 0;

const displayMessage = 
(ms) => document.querySelector('.message').textContent = ms;


// CLICK EVENT HANDLING
document.querySelector('.check').addEventListener('click', 
function() {
  // lay input cua nguoi dung nhap
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess); // xem o console de debug

  // kiem tra so nhap vao co hop le hay khon
  if (!guess) {
    displayMessage("⛔ No number!")
  }
  else if (guess === secretNumber) {
    document.querySelector('.number').textContent = guess;
    displayMessage('🏆 Correct Number!');

    // changing gui when u win
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    
    
    //cap nhat high score : bang max cua score hien tai
    highscore = Math.max(highscore, score);
    document.querySelector('.highscore').textContent = highscore;
  }
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too high!':'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    else {
      displayMessage('💥You are out of tries, Loser !');
      document.querySelector('.score').textContent = 0;
    }
  }

})


//AGAIN EVENT HANDLING
const resetGame = document.querySelector('.again').addEventListener('click',
function() {
  displayMessage("Start guessing...");
  document.querySelector(".number").textContent= "?";
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = none;
  

  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  document.querySelector('.score').textContent =  score;

})






