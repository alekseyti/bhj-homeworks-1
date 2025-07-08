// Повышение уровня сложности задачи: реализовать обратный отсчет времени в формате hh:mm:ss, а не просто в секундах.
// const timer = document.getElementById('timer');

// // Перевод времени в секунды
// function timeToSeconds(timeStr) {
//   const [hours, minutes, seconds] = timeStr.split(':').map(Number);
//   return hours * 3600 + minutes * 60 + seconds;
// }

// // Форматирование секунд в hh:mm:ss
// function formatTime(seconds) {
//   const hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
//   const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
//   const secs = String(seconds % 60).padStart(2, '0');
//   return `${hrs}:${mins}:${secs}`;
// }

// let timeLeft = timeToSeconds(timer.textContent);

// const intervalId = setInterval(() => {
//   if (timeLeft <= 0) {
//     clearInterval(intervalId);
//     alert('Вы победили в конкурсе!');
//   } else {
//     timeLeft--;
//     timer.textContent = formatTime(timeLeft);
//   }
// }, 1000);


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