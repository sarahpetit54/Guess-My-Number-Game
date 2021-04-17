'use strict';
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No Number!`;
  } else if (guess === number) {
    document.querySelector('.message').textContent = `🎉 Correct Number!`;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = number;
    if (score > highscore){
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > number) {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too High!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💥 You Lost The Game!`;
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = `Too low!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = `💥 You Lost The Game!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener("click", function() {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = "";
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  
})