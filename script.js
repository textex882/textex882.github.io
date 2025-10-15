document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("revealBtn");
  const message = document.getElementById("message");

  if (button && message) {
    button.addEventListener("click", function () {
      message.classList.add("reveal");
      button.style.display = "none";
    });
  } else {
    alert("No se encontraron los elementos necesarios 😅");
  }
});

// ==== Efecto de corazones flotando ====
function createHeart() {
  const container = document.querySelector('.hearts-container');
  if (!container) return;

  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.textContent = '💖 💘 ✨'; // puedes usar 💕, 💘 o ❤️
  
  // Posición y tamaño aleatorios
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
  heart.style.animationDuration = (Math.random() * 3 + 3) + 's';

  container.appendChild(heart);

  // Eliminar corazones una vez terminan su animación
  setTimeout(() => {
    heart.remove();
  }, 6000);
}

// Crear corazones cada cierto tiempo
setInterval(createHeart, 400);