const botoes = document.querySelectorAll("button");

botoes.forEach((botao) => {
  botao.addEventListener("click", () => {
    event.target.textContent = "Clicado";
  });
});
