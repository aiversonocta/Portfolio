/* =====================
   MENU TOGGLE
===================== */
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

/* =====================
   ENVIO WHATSAPP
===================== */
const btn = document.getElementById("sendWhatsapp");

btn.addEventListener("click", () => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  const phone = "258841915701"; // teu WhatsApp (com código de Moçambique)

  const text = `Olá Aiverson!%0ANome: ${name}%0AEmail: ${email}%0AMensagem: ${message}`;

  const url = `https://wa.me/${phone}?text=${text}`;

  window.open(url, "_blank");
});

/* =====================
   SCROLL ANIMATION
===================== */
const reveals = document.querySelectorAll(".reveal, .from-left, .from-right");

function handleScrollAnimation() {
  const windowHeight = window.innerHeight;
  const revealPoint = 150; // altura para disparar a animação antes do elemento aparecer totalmente

  reveals.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // remove ao subir (scroll up)
    }
  });
}

// dispara ao rolar
window.addEventListener("scroll", handleScrollAnimation);

// dispara ao carregar a página
window.addEventListener("load", handleScrollAnimation);
