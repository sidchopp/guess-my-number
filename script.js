'use strict';

// we are selecting a class name message from the html file
// console.log(document.querySelector('.message').textContent);

// we are manipulating DOM 
// document.querySelector('.guess').value = '20';
// console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20 + 1);
//console.log(secretNumber);

let score = 5;
let highScore = 0;
document.querySelector('.number').textContent = '';

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
    document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1504647164485-1d91e1d0a112?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')"
    document.querySelector('.number').style.width = '3rem';

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
      document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1574254706427-213d446e2f2b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80')"
    }
  }
}
)

// for try again button
document.querySelector('.again').addEventListener('click', function () {
  score = 5;
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.message').textContent = ' Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundImage = "url('https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80')"
  document.querySelector('.number').style.width = '15rem';
})



