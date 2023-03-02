/**
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 18;
document.querySelector('.guess').value = 12;
console.log(document.querySelector('.guess').value);

*/

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!';

    //player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Answer!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    //score still greater than 0
  } else if (score > 1) {
    //guess too high
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
      // guess too low.
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else {
    // score decrements to zero from 1.
    document.querySelector('.message').textContent = 'YOU LOST';
    document.querySelector('.score').textContent = '0';
  }
});
