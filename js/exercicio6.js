const ligado = false;
const btn = document.querySelector("button");

btn.addEventListener("click", () => {
  if (ligado) {
    btn.textContent = "Ligado";
  } else {
    btn.textContent = "Desligado";
  }
});
