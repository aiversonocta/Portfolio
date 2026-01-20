const texto = document.querySelector("h1");
const botao = document.querySelector("button");

botao.addEventListener("click", () => {
  texto.textContent = "Texto alterado com JS";
});
