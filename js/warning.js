const alarm = document.getElementById('alarmSound');
let clickCount = 0;

document.body.addEventListener('click', () => {
  clickCount++;

  if (clickCount === 1) {
    alarm.play().catch(err => console.log("Audio blocked:", err));
  } 
  else if (clickCount === 2) {
    window.location.href = 'album.html';
  }
});