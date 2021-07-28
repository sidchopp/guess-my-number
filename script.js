'use strict';

// we are selecting a class name message from the html file
// console.log(document.querySelector('.message').textContent);

// we are manipulating DOM 
// document.querySelector('.guess').value = '20';
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20 + 1);
//console.log(secretNumber);

let score = 20;
let highScore = 0;
document.querySelector('.number').textContent = '?';

// we are adding an event listner to the Check! button
// the 1st arg is what event we want to listen and 
//2nd arg is a function(or an event handler) that we want to run when that event happens ONLY

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '🙅‍♂️ No Number filled'

    // When the guess is right
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🤗 Correct Guess'
    document.querySelector('.number').textContent = guess;

    // to change CSS or style of elemnts
    // Remember to put the values of styles like 30 rem in quotes i.e like strings or it won't work
    // if the style has two words, combine them using camel case notation
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    // for highest score to remain max untill we refresh the app
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }


    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = guess > secretNumber ? '📈 Your guess is high' : '📉 Your guess is low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' 😞 You LOST!!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = '#FF0000'
    }
  }
}
)

// for try again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = ' Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})



