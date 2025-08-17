document.getElementById('warningBtn').addEventListener('click', () => {
  window.location.href = 'warning.html';
});

const cake = document.getElementById('cake');
const audio = document.getElementById('birthday-audio');

cake.addEventListener('click', () => {
  audio.play().catch(e => {
    console.log('Playback prevented:', e);
  });
});