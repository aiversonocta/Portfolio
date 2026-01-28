const toggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

const btn = document.getElementById("sendWhatsapp");

btn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const phone = "258841915701"; // teu WhatsApp (com código de Moçambique)

  const text = `Olá Aiverson!%0A
Nome: ${name}%0A
Email: ${email}%0A
Mensagem: ${message}`;

  const url = `https://wa.me/${phone}?text=${text}`;

  window.open(url, "_blank");
});
