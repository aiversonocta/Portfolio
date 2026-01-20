// Array basico
// const frutas = ["Maçã", "Banana", "Laranja"];

// Acessar valores
frutas[0]; // "Maçã"
frutas[1]; // "Banana"

// Tamanho do array
frutas.length;

// Adicionar no fim
frutas.push("Uva");

// Remover do fim
frutas.pop();

// Percorrer array (loop básico)
frutas.forEach((fruta) => {
  console.log(fruta);
});

// Interacao com DOM
const lista = document.querySelector("#lista");

//mostrar lista na tela.
frutas.forEach((fruta) => {
  lista.innerHTML += `<li>${fruta}</li>`;
});

// Array + eventos
//Adicionar item via botão:
const frutas = [];
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  frutas.push("Nova fruta");
  console.log(frutas);
});
