// document.addEventListener("DOMContentLoaded", () => {
//     const emailInput = document.getElementById("email");
//     emailInput.addEventListener("keydown", () => {
//         console.log("¡Campo de correo electrónico enfocado!");
//     });
// });
const nameInput = document.getElementById("nombre");
const nameStatus = document.getElementById("nombreEstado");
const emailInput = document.getElementById("email");
const emailStatus = document.getElementById("emailEstado");

nameInput.addEventListener("keydown", validarNombre);
emailInput.addEventListener("keydown", validateEmail);

function validarNombre() {
    const nameRegex = /^[a-zA-ZÀ-Öà-ö\s]{3,}$/; // Updated regex for names
    const name = nameInput.value;
  
    if (nameRegex.test(name)) {
      nameStatus.textContent = "Nombre válido";
      nameStatus.style.color = "green";
    } else {
      nameStatus.textContent = "Nombre no válido (mínimo 2 caracteres)";
      nameStatus.style.color = "red";
    }
  }


function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z]{2,}$/;
  const email = emailInput.value;

  if (emailRegex.test(email)) {
    emailStatus.textContent = "Email válido";
    emailStatus.style.color = "green";
  } else {
    emailStatus.textContent = "Email no válido";
    emailStatus.style.color = "red";
  }
}


