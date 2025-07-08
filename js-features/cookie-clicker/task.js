const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

cookie.onclick = function() {
  let count = parseInt(counter.textContent);
  count++;
  counter.textContent = count;

  cookie.width = 180; 
  setTimeout(() => {
    cookie.width = 200; 
  }, 100);
};