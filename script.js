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