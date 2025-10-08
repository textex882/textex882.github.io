// Crear corazones flotantes
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (3 + Math.random() * 5) + "s";
  heart.style.opacity = Math.random() * 0.8 + 0.2;
  heart.style.transform = `scale(${Math.random() * 1.3 + 0.3}) rotate(45deg)`;
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}
setInterval(createHeart, 400);

// Música mute
const music = document.getElementById('bg-music');
const muteBtn = document.getElementById('mute-btn');
muteBtn.addEventListener('click', () => {
  music.muted = !music.muted;
  muteBtn.textContent = music.muted ? "🔇" : "🔊";
});
