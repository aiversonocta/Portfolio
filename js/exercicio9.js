const mais = document.querySelector("#mais");
const menos = document.querySelector("#menos");
const elementoContador = document.querySelector("#contador");

let contador = 0;

function aumentar() {
  contador = contador + 1;
  elementoContador.textContent = contador;
}
function diminuir() {
  contador = contador - 1;
  elementoContador.textContent = contador;
}

mais.addEventListener("click", () => {
  aumentar();
});
menos.addEventListener("click", () => {
  diminuir();
});
