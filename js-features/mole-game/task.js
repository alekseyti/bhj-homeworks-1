const holesCount = 9;
let wins = 0;
let losses = 0;

function getHole(index) {
  return document.getElementById('hole' + index);
}

for (let i = 1; i <= holesCount; i++) {
  getHole(i).onclick = function () {
    if (this.classList.contains('hole_has-mole')) {
      wins++;
      document.getElementById('dead').textContent = wins;
      if (wins === 10) {
        alert('Победа!');
        wins = 0;
        losses = 0;
        document.getElementById('dead').textContent = wins;
        document.getElementById('lost').textContent = losses;
      }
    } else {
      losses++;
      document.getElementById('lost').textContent = losses;
      if (losses === 5) {
        alert('Вы проиграли!');
        wins = 0;
        losses = 0;
        document.getElementById('dead').textContent = wins;
        document.getElementById('lost').textContent = losses;
      }
    }
  };
}