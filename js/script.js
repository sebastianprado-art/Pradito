// Navegación suave entre secciones
// Este script permite que los enlaces del navbar hagan scroll suave

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Validación básica del formulario de contacto
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    if (!contactForm.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }
    contactForm.classList.add('was-validated');
  }, false);
}

// Animación de cards al hacer hover (agrega clase animada)
document.querySelectorAll('.card-minecraft').forEach(card => {
  card.addEventListener('mouseenter', () => {
    card.classList.add('animate__pulse');
  });
  card.addEventListener('mouseleave', () => {
    card.classList.remove('animate__pulse');
  });
});

// Comentarios explicativos en español en cada función importante
