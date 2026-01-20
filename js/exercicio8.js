const mensagem = document.querySelector("p");
const botao = document.querySelector("button");

function mudarMensagem() {
  mensagem.textContent = "Eu sou um programador full stack";
}

botao.addEventListener("click", () => {
  mudarMensagem();
});
