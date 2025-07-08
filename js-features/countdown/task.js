const timer = document.getElementById('timer');

let timeLeft = Number(timer.textContent);

const intervalId = setInterval(() => {
  if (timeLeft <= 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  } else {
    timeLeft--;
    timer.textContent = timeLeft;
  }
}, 1000);
