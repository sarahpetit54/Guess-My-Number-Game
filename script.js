'use strict';
const number = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = number;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    document.querySelector('.message').textContent = `⛔ No Number!`;
  } else if (guess === number) {
    document.querySelector('.message').textContent = `🎉 Correct Number!`;
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
