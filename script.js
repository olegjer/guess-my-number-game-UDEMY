'use strict';
/*console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct number';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 15;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


//--------------------CODE NEED TO BE MORE SIPLYFITE--------------
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    document.querySelector('.message').textContent = 'not a number';
    //When win the game
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct number';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // When guess isto high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To high';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose the game';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      //when  guess is to low
      document.querySelector('.message').textContent = 'To low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loose the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
*/

//--------------------DRY CODE--------------------------

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //when no input
  if (!guess) {
    //document.querySelector('.message').textContent = 'not a number';
    displayMessage('no number');
    //When win the game
  } else if (guess === secretNumber) {
    //document.querySelector('.message').textContent = 'Correct number';
    displayMessage('Correct number');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When gess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'To high' : 'To low';
      displayMessage(guess > secretNumber ? 'To high' : 'To low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      //   document.querySelector('.message').textContent = 'You loose the game';
      displayMessage('You loose the game');
      document.querySelector('.score').textContent = 0;
    }
  }

  //     // When guess isto high
  //   } else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'To high';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You loose the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   } else if (guess < secretNumber) {
  //     if (score > 1) {
  //       //when  guess is to low
  //       document.querySelector('.message').textContent = 'To low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You loose the game';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
